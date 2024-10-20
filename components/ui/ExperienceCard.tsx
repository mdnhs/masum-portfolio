import DOMPurify from "isomorphic-dompurify";
interface ExperienceCardType {
  experienceTimeline: string;
  experienceDesignation: string;
  experienceCompany: string;
  experienceLocation: string;
  experienceDetails: string;
}

const ExperienceCard = (props: ExperienceCardType) => {
  return (
    <div className="w-full lg:w-[750px] min-h-[439px] bg-white dark:bg-slate-900 p-10 relative gap-5 grid grid-cols-2">
      <span className="w-2 h-12 bg-blue-600 absolute left-0 top-7"></span>
      <div className="space-y-5 col-span-full lg:col-span-1">
        <p className="text-xl font-extrabold text-blue-600">
          {props.experienceTimeline}
        </p>
        <div>
          <p className="font-semibold">{props.experienceDesignation}</p>
          <p className=" text-sm font-semibold">{props.experienceCompany}</p>
          <p className=" text-sm">{props.experienceLocation}</p>
        </div>
      </div>
      <div className=" col-span-full lg:col-span-1">
        <p
          className=" text-justify"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(props?.experienceDetails ?? ""),
          }}
        />
      </div>
    </div>
  );
};

export default ExperienceCard;
