import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

const Job = ({ job }) => {
  const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="w-[147px] h-[40px]">
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7990FE] mr-2 text-[#9873FF]">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7990FE] mr-2 text-[#9873FF]">
            {job_type}
          </button>
        </div>
        <div className="flex justify-between">
          <h2 className="flex justify-start items-center">
            <CiLocationOn className="text-2xl"></CiLocationOn>
            {location}
          </h2>
          <h2 className="flex justify-end items-center">
            <HiOutlineCurrencyDollar className="text-2xl"></HiOutlineCurrencyDollar>
            {salary}
          </h2>
        </div>
        <div className="card-actions justify-start">
          <button className="btn bg-[#9873FF] text-white">View Details</button>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object,
};

export default Job;
