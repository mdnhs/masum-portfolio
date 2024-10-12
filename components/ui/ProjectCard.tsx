const ProjectCard = () => {
  return (
    <div className="w-[750px] h-[439px] bg-white p-5 relative gap-5 grid grid-cols-2">
      <span className="w-2 h-12 bg-blue-600 absolute left-0 top-16"></span>
      <div className="space-y-5 col-span-1">
        <p className="text-3xl font-black text-blue-600">Category</p>
        <p className="text-xl font-extrabold text-blue-600">Title</p>
        <p className=" text-justify">{`This is a 4 years of a Super store sales data. Used Tools:
i) Power Query. ii) Merge. iii) Data cleaning.
iv) Modeling. v) Custom Column.
vi) Conditional Column. vii) Pivot Table
viii) Math Function. ix) Different Charts.
Firstly I take the data into power query of excel, Where I clean the data, do data modeling, use merge queries, append queries and load the data as a table format. Then I use some functions and most of the work is done by Pivot Table. Its a two sheet dashboard. First page for Sales Analysis and the other one for Product Analysis.`}</p>
      </div>
      <div className=" col-span-1 relative">
        <div className=" absolute w-[454px] h-[288px] bg-red-200 left-0 bottom-5"></div>
      </div>
    </div>
  );
};

export default ProjectCard;
