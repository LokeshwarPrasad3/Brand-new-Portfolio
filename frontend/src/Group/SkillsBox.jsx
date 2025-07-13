const SkillsBox = ({ data }) => {
  return (
    <>
      <div
        className="skill_box flex flex-col justify-center items-center font-karla 
      w-40 pb-3 cursor-pointer overflow-hidden py-2"
      >
        <div className="image_skill h-28 w-28 overflow-hidden rounded-xl flex justify-center items-center pb-2">
          <img
            className="object-cover rounded-2xl opacity-80 shadow-sm shadow-gray-600 transition-all duration-300 ease-out hover:scale-110"
            src={data.src}
            alt={data.title}
            loading="lazy"
          />
        </div>
        <div className="name_skills">
          <p className="text-center">{data.title}</p>
        </div>
      </div>
    </>
  );
};

export default SkillsBox;
