export interface AnchorCustomerResult {
  value: string;
  label: string;
}

export interface AnchorCustomer {
  id?: number | string;
  company?: string;
  company_name?: string;
  founder?: string;
  founder_name?: string;
  founder_title?: string;
  challenge?: string;
  solution?: string;
  results?: AnchorCustomerResult[] | string;
  quote?: string;
  testimonial?: string;
  is_deleted?: boolean;
  created_at?: string;  
  updated_at?: string;
}

