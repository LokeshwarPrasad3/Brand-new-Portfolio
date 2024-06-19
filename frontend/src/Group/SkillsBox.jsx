const SkillsBox = ({ data }) => {
  return (
    <>
      <div
        className="skill_box flex flex-col justify-center items-center font-overpass 
      w-40 pb-3 hover:scale-105 custom-transition cursor-pointer rounded-xl py-2"
      >
        <div className="image_skill flex justify-center items-center pb-2">
          <img
            className="h-28 object-cover w-28 rounded-2xl opacity-80 shadow-sm shadow-gray-600"
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
