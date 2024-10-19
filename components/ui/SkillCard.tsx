interface SkillCardType {
  professionalSkillSet: [];
  languages: [];
}
interface professionalSkillSetType {
  skillID: string;
  skillTitle: string;
  skillDetails: string;
}
interface languagesType {
  languageID: string;
  languageName: string;
}

const SkillCard = (props: SkillCardType) => {
  return (
    <div className="w-full lg:w-[750px] min-h-[439px] bg-white ">
      <div className="relative gap-5 p-10">
        <span className="w-2 h-12 bg-blue-600 absolute left-0 top-7"></span>
        <div className="space-y-5 col-span-full lg:col-span-1">
          <p className="text-xl font-extrabold text-blue-600">
            {"Professional Skillset"}
          </p>
          <div className=" space-y-4">
            {props.professionalSkillSet.map(
              (item: professionalSkillSetType, index) => {
                return (
                  <div
                    key={index + "professionalSkillSet"}
                    className=" space-y-1"
                  >
                    <div className="flex gap-3 items-center align-middle">
                      <span className="w-3 h-3 min-h-[12px] min-w-[12px] bg-blue-600"></span>
                      <p className="font-semibold">{item.skillTitle}</p>
                    </div>
                    <p className="pl-6 "> {item.skillDetails}</p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
      <div className="w-full bg-white p-10 relative gap-5">
        <span className="w-2 h-12 bg-blue-600 absolute left-0 top-7"></span>
        <div className="space-y-5 col-span-full lg:col-span-1">
          <p className="text-xl font-extrabold text-blue-600">{"Languages"}</p>
          <div className=" space-y-4">
            {props.languages.map((item: languagesType, index) => {
              return (
                <div
                  key={index + "languages"}
                  className="flex gap-3 items-center align-middle"
                >
                  <span className="w-3 h-3 bg-blue-600"></span>
                  <p className="">{item.languageName}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
