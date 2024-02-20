import { jobsAPI } from "./axios";

export const fetchJobs = async () => {
  try {
    const res = await jobsAPI.get(`/jobs?page=1`);
    return res.data.results;
  } catch (error) {
    throw new Error("Failed to fetch jobs");
  }
};

export const fetchAllJobs = async (page:number) => {
  try {
    const res = await jobsAPI.get(`/jobs?page=${page}`);
    return res.data.results; 
  } catch (error) {
    throw new Error("Failed to fetch all jobs");
  }
};
