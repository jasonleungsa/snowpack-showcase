const JobCard = ({ index, job }) => {
  return (
    <div className="flex flex-col px-3 py-4 border border-gray-300 space-y-4">
      <div className="flex flex-row justify-between">
        <div>
          <h3 className="text-xl font-semibold text-blue-600 hover:underline cursor-pointer">
            {job?.title}
          </h3>
          <p>{job?.advertiser?.description}</p>
        </div>
        <span>11d ago</span>
      </div>
      <div>
        <div className="space-x-1">
          <span className="font-extrabold">{job?.location}</span>
          {job?.area && (
            <>
              <span>{`>`}</span>
              <span>{job?.area}</span>
            </>
          )}
        </div>
        {job?.salary && <div className="font-extrabold">{job.salary}</div>}
        <div className="space-x-1">
          <span className="font-extrabold">
            {job?.classification?.description}
          </span>
          <span>{`>`}</span>
          <span>{job?.subClassification?.description}</span>
        </div>
      </div>
      {job?.bulletPoints && (
        <ul className="list-inside list-disc">
          {job.bulletPoints.map((bulletPoint) => (
            <li key={bulletPoint}>{bulletPoint}</li>
          ))}
        </ul>
      )}
      <p className="text-gray-500">{job?.teaser}</p>
    </div>
  );
};

export default JobCard;
