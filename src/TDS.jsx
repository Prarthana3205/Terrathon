import React, { useState } from 'react';

const TDS = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const fullContent = (
    <div>
    <p>Total dissolved salts </p>
    <p>Factor affecting TDS</p>
    <ul>
        <li>The geological characteristics and soil composition of the watershed or aquifer from which water originates can significantly influence TDS levels. Water passing through geological formations rich in minerals and salts, such as limestone, gypsum, or halite, can become enriched with dissolved salts.</li>
        <li>Natural weathering processes, including erosion, dissolution, and leaching, can contribute to the release of minerals and salts from rocks and soil into water bodies. Rainwater and runoff can dissolve minerals from rocks and transport them into streams, rivers, and groundwater, increasing TDS levels.</li>
        <li>In coastal areas, saline intrusion or seawater intrusion into freshwater aquifers can occur due to overextraction of groundwater or sea level rise. This intrusion can increase TDS levels in groundwater and surface water, affecting water quality and potability.</li>
        <li>Industrial processes and activities can introduce various dissolved solids and chemicals into water bodies, contributing to elevated TDS levels. Industrial discharges, wastewater effluents, and mine drainage can contain high concentrations of salts, heavy metals, and other contaminants, affecting water quality and TDS levels.</li>
    </ul>
    <p>Prevention </p>
    <ul>
        <li> Prevent saline intrusion into freshwater aquifers by carefully managing groundwater extraction rates, implementing groundwater recharge programs, and protecting coastal aquifers from contamination.</li>
        <li>Implement best management practices (BMPs) in agriculture to minimize the use of saline irrigation water and reduce nutrient runoff.</li>
        <li>Implement green infrastructure practices, such as permeable pavement, green roofs, rain gardens, and vegetated swales, to manage stormwater runoff and reduce TDS contamination in urban areas.</li>
        <li>Encourage water conservation practices, such as efficient irrigation methods, water reuse, and water-efficient appliances, to reduce water consumption and minimize the need for groundwater pumping.</li>
        <li> Raise awareness among stakeholders, including farmers, landowners, industry professionals, and the general public, about the importance of preventing TDS pollution and protecting water quality. </li>
    </ul>
  
</div>
  );

  const truncatedContent = (
    <div>
      <p>{fullContent.props.children[1].props.children[0]}</p>
      <button onClick={toggleContent}>Read more</button>
    </div>
  );

  return (
    <div>
      <h1>What is TDS?</h1>
      {showFullContent ? (
        <>
          {fullContent}
          <button onClick={toggleContent}>Read less</button>
        </>
      ) : (
        <>
          {truncatedContent}
        </>
      )}
    </div>
  );
};

export default TDS;
