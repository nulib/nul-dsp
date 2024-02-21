const Details = ({ activeWork }) => {
  return (
    <div>
      <h2 className="font-bold">{activeWork.title}</h2>
      <p className="pb-3 text-sm font-light text-gray-700">
        {activeWork.description}
      </p>
      <dl className="pb-3 text-sm">
        <dt className="font-bold">Collection</dt>
        <dd>{activeWork.collection?.title}</dd>
      </dl>
      <img src={activeWork.thumbnail} alt={activeWork.title} />
    </div>
  );
};

export default Details;
