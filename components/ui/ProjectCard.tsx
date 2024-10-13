import Image from "next/image";
import Carousel from "./InlineGallery";

interface ProjectsType {
  projectTitle: string;
  projectCategory: string;
  projectDetails: string;
  projectPhoto: [];
  projectVideo: [];
}

const ProjectCard = (props: ProjectsType) => {
  return (
    <div className="w-full lg:w-[750px] min-h-[439px] bg-white p-5 relative gap-5 grid grid-cols-2 container">
      <span className="w-2 h-12 bg-blue-600 absolute left-0 top-16"></span>
      <div className="space-y-5 col-span-full lg:col-span-1">
        <p className="text-3xl font-black text-blue-600">
          {props.projectCategory}
        </p>
        <p className="text-xl font-extrabold text-blue-600">
          {props.projectTitle}
        </p>
        <p className="text-justify">{props.projectDetails}</p>
      </div>
      <div className="col-span-full lg:col-span-1 relative">
        <div className="lg:absolute w-full lg:w-[454px] h-[288px] max-h-[288px] lg:left-0 lg:bottom-5 shadow-2xl overflow-hidden">
          <div className="w-[454px] h-[288px] relative bg-black ">
            {" "}
            {
              <Carousel autoSlide={true}>
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
    </div>
  );
};

export default ProjectCard;
