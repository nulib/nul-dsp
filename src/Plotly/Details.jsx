const Details = ({ activeWork }) => {
  return (
    <div className="pl-6 space-y-3 border-l">
      <div>
        <h2 className="font-bold">{activeWork.title}</h2>
        <p className="text-sm font-light text-gray-700">
          {activeWork.description}
        </p>
      </div>
      <dl className="text-sm">
        <dt className="font-bold">Collection</dt>
        <dd>{activeWork.collection?.title}</dd>
      </dl>
      <img src={activeWork.thumbnail} alt={activeWork.title} />
      {activeWork.canonicalLink && (
        <a
          href={activeWork.canonicalLink}
          target="_blank"
          rel="noreferrer noopener"
          className="block w-full py-2 text-sm text-center transition-all duration-500 border hover:bg-gray-100"
        >
          View Work
        </a>
      )}
    </div>
  );
};

export default Details;
