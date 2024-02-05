const SkillsBox = ({ data }) => {
  return (
    <>
      <div className="skill_box flex flex-col justify-center items-center font-overpass bg-slate-800 w-48 pb-3 shadow-sm shadow-blue-400 hover:scale-105 custom-transition cursor-pointer">
        <div className="image_skill flex justify-center items-center py-4">
          <img
            className="h-28 object-cover w-28 rounded-full"
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
