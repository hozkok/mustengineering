import Title from "../Components/Title";

function CoFounders() {
  return (
    <section className="px-16 py-20 bg-backgroundLight text-textColor">
      <Title>Co Founders</Title>
      <div className="flex flex-col gap-12 xl:flex-row">
        <div className="flex flex-col gap-4 w-full items-center">
          <img
            src="/placeholder-avatar.jpg"
            alt=""
            className="w-3/5 sm:w-2/5 md:w-1/3 lg:w-1/4 xl:w-1/3 rounded-md shadow-xl"
          />
          <p className="text-xl font-semibold text-titleSecondaryColor">
            Mustafa Alptekin Kibar
          </p>
          <p className="leading-[1.8] text-lg font-medium px-6">
            After his graduation from Middle East Technical University at 2002,
            Mr Kibar started his career as Structural Engineer on a design
            company Çeskon for two years. Having worked as the tender and
            proposal specialist at Akfen Construction for another two years, he
            went back to structural design works at Tesem while also receiving
            his master degree.
          </p>{" "}
        </div>
        <div className="flex flex-col gap-4 w-full items-center">
          <img
            src="/placeholder-avatar.jpg"
            alt=""
            className="w-3/5 sm:w-2/5 md:w-1/3 lg:w-1/4 xl:w-1/3 rounded-md shadow-xl"
          />
          <p className="text-xl font-semibold text-titleSecondaryColor">
            Mustafa Emre Özkök
          </p>
          <p className="leading-[1.8] text-lg font-medium px-6">
            Emre had BSc. & MSc. degrees at Middle East Technical University in
            2007 and 2010 as Civil Engineer and Structural Engineer. He has
            majorly involved in large scale international superstructure
            projects as structural designer, site supervisor and design
            coordinator. The acquired experience brought him the insight of
            rapid resolution of engineering problems and construction conflicts
            in the ongoing megastructure projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CoFounders;
