import { CompanyIndustry, CompanyType } from "@/types";

export const companyLocationNames = (company:CompanyType) => {
    return company.locations.map((location: CompanyIndustry) => location.name);
  };