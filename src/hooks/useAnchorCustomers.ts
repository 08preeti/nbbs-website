"use client";

import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { fetchAnchorCustomers } from "@/src/apis";
import { type AnchorCustomer, type AnchorCustomerResult } from "@/src/types";
import { type Customer, customers as defaultCustomers } from "@/data/customers";

export const anchorCustomerKeys = {
  all: ["anchor-customers"] as const,
  lists: () => [...anchorCustomerKeys.all, "list"] as const,
};

/**
 * Normalizes an API response item into the shape expected by the frontend UI.
 */
export function normalizeAnchorCustomer(item: AnchorCustomer): Customer {
  let parsedResults: AnchorCustomerResult[] = [];

  if (Array.isArray(item.results)) {
    parsedResults = item.results.map((r) => ({
      value: String(r?.value ?? ""),
      label: String(r?.label ?? ""),
    }));
  } else if (typeof item.results === "string") {
    try {
      const parsed = JSON.parse(item.results) as unknown;
      if (Array.isArray(parsed)) {
        parsedResults = parsed.map((entry) => {
          const r = entry as Record<string, unknown>;
          return {
            value: String(r?.value ?? ""),
            label: String(r?.label ?? ""),
          };
        });
      }
    } catch {
      parsedResults = [];
    }
  }

  const founderText = [item.founder || item.founder_name, item.founder_title]
    .filter(Boolean)
    .join(", ");

  return {
    company: item.company || item.company_name || "",
    founder: founderText || item.founder || item.founder_name || "",
    challenge: item.challenge || "",
    solution: item.solution || "",
    results: parsedResults,
    quote: item.quote || item.testimonial || "",
  };
}

/**
 * Query hook to fetch and normalize anchor customers.
 */
export function useAnchorCustomersQuery<TData = Customer[]>(
  options?: Omit<
    UseQueryOptions<Customer[], Error, TData>,
    "queryKey" | "queryFn"
  >
) {
  return useQuery({
    queryKey: anchorCustomerKeys.lists(),
    queryFn: async (): Promise<Customer[]> => {
      const rawCustomers = await fetchAnchorCustomers();
      return rawCustomers.map(normalizeAnchorCustomer);
    },
    ...options,
  });
}

/**
 * Convenience hook providing the active customers list, with seamless fallback to static mock data.
 */
export function useAnchorCustomers() {
  const query = useAnchorCustomersQuery();

  const activeCustomers =
    query.data && query.data.length > 0 ? query.data : defaultCustomers;

  return {
    ...query,
    customers: activeCustomers,
    isUsingFallback: !query.data || query.data.length === 0,
  };
}

