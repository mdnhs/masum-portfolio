import Image from "next/image";
import Carousel from "./inline-gallery";
import DOMPurify from "isomorphic-dompurify";

interface ProjectsType {
  projectTitle: string;
  projectCategory: string;
  projectDetails: string;
  projectPhoto: [];
  projectVideo: [];
}

const ProjectCard = (props: ProjectsType) => {
  return (
    <div className="w-full lg:w-[750px] min-h-[439px] bg-white dark:bg-slate-900 p-5 relative gap-5 container">
      <span className="w-2 h-12 bg-blue-600 absolute left-0 top-16"></span>
      <div className=" h-fit lg:pb-5 lg:float-right">
        <div className="w-full relative lg:w-[414px] h-[288px] max-h-[288px] shadow-2xl ">
          <div className="w-full lg:w-[454px] lg:absolute h-[288px] lg:-right-20 bg-black ">
            {" "}
            {
              <Carousel autoSlide={false}>
                {[
                  ...props?.projectPhoto.map((item, index) => {
                    return (
                      <Image
                        key={index + "projectMedia"}
                        src={item ?? "/images/placeholder.webp"}
                        // fill
                        width={454}
                        height={288}
                        className="w-[454px] h-[288px] transition-all duration-300 hover:scale-110 object-cover"
                        alt="Profile Picture"
                      />
                    );
                  }),
                  ...props?.projectVideo.map((item, index) => {
                    return (
                      <video
                        key={index + "projectMedia"}
                        src={item}
                        autoPlay
                        muted
                        loop
                        className=" bg-black w-full h-full"
                      />
                    );
                  }),
                ]}
              </Carousel>
            }
          </div>
        </div>
      </div>
      <div className="space-y-5 text-justify">
        <p className="text-3xl font-black text-blue-600">
          {props.projectCategory}
        </p>
        <p className="text-xl font-extrabold text-blue-600">
          {props.projectTitle}
        </p>
        <div
          className="text-justify"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(props?.projectDetails ?? ""),
          }}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
