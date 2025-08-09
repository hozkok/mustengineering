import Title from "../Components/Title";

function WhatWeDo() {
  return (
    <section className="px-12 py-16  bg-gradient-to-bl from-background to-[#151008] text-lightTextColor">
      <Title center={true}>What we do</Title>
      <ol className="text-lg space-y-8 font-semibold text-center mt-8">
        <li>Analysis of long span roofs and tension structures</li>
        <li>Advanced engineering and finite element analysis</li>
        <li>Road and infrastructure design</li>
        <li>Highway and pedestrian bridges structural design</li>
        <li>Structural façade engineering</li>
        <li>Earth retaining structures</li>
        <li>Demountable structures</li>
        <li>Post-tensioned element design</li>
        <li>Wind engineering</li>
        <li>Seismic engineering</li>
        <li>Floor vibration and structural dynamics</li>
        <li>Lateral dynamics and stability</li>
        <li>Deep basement design</li>
        <li>
          Parametric modelling of complex structures and structural analysis
        </li>
      </ol>
    </section>
  );
}

export default WhatWeDo;
