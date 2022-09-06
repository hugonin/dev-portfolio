function EntrySkills({ image, alt, title }) {
  return (
    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
      <img className="w-20 mx-auto" src={image} alt={alt} />
      <p className="my-4">{title}</p>
    </div>
  );
}

export default EntrySkills;
