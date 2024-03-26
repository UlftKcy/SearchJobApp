import { jobsAPI } from "./axios";

export const fetchCompanies = async (page:number) => {
  try {
    const res = await jobsAPI.get(`/companies?page=${page}`);
    return res.data.results;
  } catch (error) {
    throw new Error("Failed to fetch companies");
  }
};

export const fetchCompanyById = async (id: number) => {
  try {
    const res = await jobsAPI.get(`/companies/${id}`);
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch company by id");
  }
};
