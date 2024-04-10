import React, { useState } from 'react';

const Nitrate = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const fullContent = (
    <>
    <div>
        <p>What are nitrates?</p>
        <ul>
            <li>Nitrates are chemical compounds composed of nitrogen and oxygen, with the chemical formula NO3-. 
                They are common forms of nitrogen found in various natural and synthetic sources, including soil, water, air, and organic matter. 
                Nitrates play essential roles in ecosystems and are crucial for plant growth and nitrogen cycling.</li>
        </ul>
        <p>Factors that effect nitrate concentration </p>
        ' +
        '<ul>' +
          '<li>Agricultural Practices: Agricultural activities, such as the use of nitrogen-based fertilizers and manure, significantly contribute to nitrate pollution in water bodies</li>' +
          '<li>Septic Systems and Sewage Effluent: Improperly functioning septic systems and wastewater treatment plants can release nitrates into water bodies.</li>' +
          '<li>Climate and Weather Patterns: Precipitation patterns, temperature, and seasonal variability can affect nitrate transport and transformation in the environment. </li>' +
          '<li>Nitrogen Fixation and Cycling: Natural processes, such as nitrogen fixation by soil bacteria and nitrogen cycling in terrestrial and aquatic ecosystems, contribute to nitrate levels in water. </li>' +
        '</ul>' +
        '<p>How to prevent Excessive concentration of nitrate? </p>' +
        '<ul>' +
          '<li>Implement Nutrient Management Plans: Develop and implement nutrient management plans in agricultural areas to optimize fertilizer application and minimize nitrogen runoff.</li>' +
          '<li>Use Nitrogen-Fixing Cover Crops: Planting cover crops that can fix atmospheric nitrogen, such as legumes (e.g., clover, alfalfa), can help reduce the need for synthetic fertilizers and minimize nitrate leaching. </li>' +
          '<li>Monitor and Assess Water Quality: Establish monitoring programs to track nitrate levels and water quality parameters in water bodies.</li>' +
          '<li>Protect Wetlands and Natural Filters: Preserve and restore wetlands and natural filters, such as vegetated wetlands and constructed treatment wetlands, to capture and remove nutrients from agricultural runoff.</li>' +
        '</ul>' +
      '</div>'
    </>
  );

  const truncatedContent =
    fullContent.props.children[0].toString().substring(0, 100) + "...";

  return (
    <div>
      <h1>What is Nitrate?</h1>
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

export default Nitrate;