const ResumeCard = () => {
  return (
    <div className="w-full lg:w-[750px] min-h-[439px] bg-white p-10 relative gap-5 grid grid-cols-2">
      <span className="w-2 h-12 bg-blue-600 absolute left-0 top-7"></span>
      <div className="space-y-5 col-span-full lg:col-span-1">
        <p className="text-xl font-extrabold text-blue-600">2023 - Present</p>
        <div>
          <p className="font-semibold">Associate Data Analyst</p>
          <p className=" text-sm font-semibold">Transcom Limited.</p>
          <p className=" text-sm">Gulshan-2, Dhaka-1212</p>
        </div>
      </div>
      <div className=" col-span-full lg:col-span-1">
        <p className=" text-justify">{`This is a 4 years of a Super store sales data. Used Tools:
i) Power Query. ii) Merge. iii) Data cleaning.
iv) Modeling. v) Custom Column.
vi) Conditional Column. vii) Pivot Table
viii) Math Function. ix) Different Charts.
Firstly I take the data into power query of excel, Where I clean the data, do data modeling, use merge queries, append queries and load the data as a table format. Then I use some functions and most of the work is done by Pivot Table. Its a two sheet dashboard. First page for Sales Analysis and the other one for Product Analysis.`}</p>
      </div>
    </div>
  );
};

export default ResumeCard;
