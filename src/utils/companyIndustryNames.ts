import { CompanyIndustry, CompanyType } from "@/types";

export const companyIndustryNames = (company:CompanyType) => {
    return company.industries.map((industry: CompanyIndustry) => industry.name);
  };