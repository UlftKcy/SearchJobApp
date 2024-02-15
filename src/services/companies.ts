import { jobsAPI } from "./axios";

export const fetchCompanies = async () => {
  try {
    const res = await jobsAPI.get(`/companies?page=1`);
    return res.data.results;
  } catch (error) {
    throw new Error("Failed to fetch companies");
  }
};
