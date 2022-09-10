import SkillList from "../components/SkillList";
import SkillData from "../data/skillsData";

function Skills() {
  return (
    <section id="skills" className="w-full h-screen bg-[#171718] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#85BFD1] ">
            Compétences
          </p>
          <p className="py-4">
            {" "}
            Ci-dessous les technologies avec lesquelles je travaille
            régulièrement
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {SkillData.map((skillItem) => (
            <SkillList
              key={skillItem.id}
              image={skillItem.image}
              alt={skillItem.alt}
              title={skillItem.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
