import React, { useState } from 'react';

const Flouride = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const fullContent = (
    <div>
        <p>What are Fluorides ?</p>
        <ul>Fluorides are chemical compounds containing the element fluorine. They can occur naturally in minerals, rocks, soil, water, and various organic and inorganic substances.</ul>
        <p>What are the factors affecting Fluoride?</p>
        <ul>
            <li>Geological formations containing fluoride-bearing minerals, such as fluorite (calcium fluoride) and apatite, can contribute to elevated fluoride levels in groundwater.</li>
            <li>Hydrogeological factors, including aquifer type, depth, and flow dynamics, influence fluoride concentrations in groundwater. </li>
            <li>Weathering processes, including erosion, dissolution, and leaching, contribute to the transport of fluoride from geological sources into water bodies, influencing fluoride levels in groundwater and surface water.</li>
            <li>Water treatment processes, such as fluoridation, filtration, and disinfection, can influence fluoride levels in drinking water</li>
        </ul>
        <p>Prevention</p>
        <ul>
            <li>Regular monitoring of fluoride levels in water sources is essential for identifying areas with elevated fluoride concentrations.</li>
            <li>Upgrade wastewater treatment facilities to remove fluoride and other contaminants from industrial and municipal effluents before discharge into water bodies. </li>
            <li>romote nutrient management practices in agriculture to minimize the use of fluoride-containing fertilizers and pesticides. </li>
            <li>Engage local communities in fluoride monitoring, management, and decision-making processes to address specific concerns and priorities.</li>
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
      <h1>What does Flouride in water signify?</h1>
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

export default Flouride;