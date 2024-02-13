import { jobsAPI } from "./axios";

export const fetchJobs = async () => {
  try {
    const res = await jobsAPI.get(`/jobs?page=1`);
    return res.data.results;
  } catch (error) {
    throw new Error("Failed to fetch jobs");
  }
};
