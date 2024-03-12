import { JobLocation, JobType } from "@/types";

export const handleJobLocation = (job:JobType) => {
  return job.locations.map((location: JobLocation) => location.name);
};
