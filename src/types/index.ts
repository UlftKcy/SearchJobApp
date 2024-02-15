export interface JobType {
  contents: string;
  name: string;
  type: string;
  publication_date: string;
  id: string;
  locations: JobLocation[];
  categories: JobCategory[];
  levels: JobLevel[];
  company: {
    id: number;
    short_name: string;
    name: string;
  };
}

export interface JobLocation {
  name: string;
}
export interface JobCategory {
  name: string;
}
export interface JobLevel {
  name: string;
  short_name: string;
}
