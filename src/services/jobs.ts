import { JobType } from "@/types";
import { jobsAPI } from "./axios";
import { fetchCompanyById } from "./companies";

/**
 * merge jobs with their company
 * @param jobs
 * @returns
 */
const mergeJobWithCompany = (jobs: JobType[]) => {
  const jobsWithCompanyPromises = jobs.map(async (job: JobType) => {

    const companyDetail = await fetchCompanyById(job.company.id);
    
    return {
      ...job,
      companyDetail: companyDetail,
    };
  });

  return jobsWithCompanyPromises;
};

/**
 * fetch jobs in home page
 * @returns
 */
export const fetchJobs = async () => {
  try {
    const res = await jobsAPI.get(`/jobs?page=1`);
    return res.data.results;
  } catch (error) {
    throw new Error("Failed to fetch jobs");
  }
};

/**
 * fetch jobs with their company in daily top jobs
 * @param page
 * @returns
 */
export const fetchJobsWithCompany = async (page: number) => {
  try {
    const res = await jobsAPI.get(`/jobs?page=${page}`);
    const jobs = res.data.results;

    const jobsWithCompany = await Promise.all(mergeJobWithCompany(jobs));

    return jobsWithCompany;
  } catch (error) {
    throw new Error("Failed to fetch jobs with company");
  }
};

/**
 * filter jobs by category
 * @param page
 * @param category
 * @returns
 */
export const fetchFilteredJobs = async (page: number, category: string) => {
  try {
    const res = await jobsAPI.get(`/jobs?page=${page}&category=${category}`);
    const jobs = res.data.results;

    const jobsWithCompany = await Promise.all(mergeJobWithCompany(jobs));

    return jobsWithCompany;
  } catch (error) {
    throw new Error("Failed to fetch filtered Jobs");
  }
};
