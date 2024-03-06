import { JobType } from "@/types";
import { jobsAPI } from "./axios";
import { fetchCompanyById } from "./companies";

export const fetchJobs = async () => {
  try {
    const res = await jobsAPI.get(`/jobs?page=1`);
    return res.data.results;
  } catch (error) {
    throw new Error("Failed to fetch jobs");
  }
};

export const fetchJobsWithCompany = async (page: number) => {
  try {
    const res = await jobsAPI.get(`/jobs?page=${page}`);
    const jobs = res.data.results;

    const jobsWithCompanyPromises = jobs.map(async (job: JobType) => {
      const companyDetail = await fetchCompanyById(job.company.id);
      return {
        ...job,
        companyDetail: companyDetail,
      };
    });

    const jobsWithCompany = await Promise.all(jobsWithCompanyPromises);

    return jobsWithCompany;
  } catch (error) {
    throw new Error("Failed to fetch jobs with company");
  }
};

export const fetchFilteredJobs = async (page: number, category: string) => {
  try {
    const res = await jobsAPI.get(`/jobs?page=${page}&category=${category}`);
    return res.data.results;
  } catch (error) {
    throw new Error("Failed to fetch filtered Jobs");
  }
};
