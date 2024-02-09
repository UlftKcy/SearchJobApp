import { jobsAPI } from "./axios";

export const fetchJobs = async () => {
  try {
    const res = await jobsAPI("");
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch jobs");
  }
};
