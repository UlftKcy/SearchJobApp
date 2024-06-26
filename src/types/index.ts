// job types
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

export interface JobsWithCompany extends JobType{
  companyDetail:CompanyType
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

// company types
export interface CompanyType {
    description: string;
    name: string;
    id: number;
    locations: CompanyLocation[];
    industries: CompanyIndustry[];
    size:{
        short_name: string;
        name: string;
    };
    refs:{
      logo_image:string;
    }
  }

  export interface CompanyLocation {
    name: string;
  }
  export interface CompanyIndustry {
    name: string;
  }

