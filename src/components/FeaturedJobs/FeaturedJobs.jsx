import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div className="mb-24">
        <h2 className="text-5xl font-extrabold text-center mb-4">Featured Jobs: {jobs.length}</h2>
        <p className="text-center">
          Explore thousands of job opportunities with all the information you need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-24">
        {jobs.map((job, idx) => (
          <Job key={idx} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;