import React, { useState } from 'react';

const Turbidity = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const fullContent = (
    <>
    <div>
        <p>What is turbidity?</p>
        <ul>
        Turbidity is a measure of the amount of suspended particles in a water sample, such as silt, clay, organic matter, plankton, and other microscopic organisms. 
        The more suspended particles present, the higher the turbidity.
        </ul>
        <p>Factors affecting turbidity </p>
        <ul>
            <li>Runoff from agricultural lands, construction sites, and other disturbed areas can carry high concentrations of soil particles and sediments into water bodies, increasing turbidity.</li>
            <li>Excessive growth of algae, often due to nutrient enrichment (e.g., from fertilizers), can increase the number of suspended particles in a water, resulting in higher turbidity.</li>
            
            '<li>Suspended inorganic particles, such as clay, silt, and sand, can also contribute to turbidity.</li>
            '<li>Heavy rainfall and storm events can increase surface runoff, leading to higher turbidity levels.</li>' +
            '<li>Dredging, boating, and other human-induced disturbances can resuspend bottom sediments, temporarily increasing turbidity.</li>' +
        '</ul>
        '<p>How to prevent turbidity </p>
        '<ul>
          '<li>Implement best management practices (BMPs) to minimize soil erosion, such as using cover crops, maintaining vegetative buffers, and minimizing soil disturbance.</li>' +
          '<li>Reduce the use of fertilizers and manure in agricultural areas, and implement nutrient management plans to optimize application and minimize runoff.</li>' +
          '<li>Implement green infrastructure, such as bioswales, rain gardens, and permeable pavement, to slow down and infiltrate stormwater runoff.</li>' +
          '<li>Ensure that wastewater treatment plants and industrial facilities have proper treatment systems to remove suspended solids and other pollutants before discharge.</li>' +
        '</ul>' 
      '</div>'
    </>
  );

  const truncatedContent =
    fullContent.props.children[0].toString().substring(0, 100) + "...";

  return (
    <div>
      <h1>What is Turbidity?</h1>
      {showFullContent? (
        <>
          {fullContent}
          <button onClick={toggleContent}>Read less</button>
        </>
      ) : (
        <>
          {truncatedContent}
          <button onClick={toggleContent}>Read more</button>
        </>
      )}
    </div>
  );
};

export default Turbidity;