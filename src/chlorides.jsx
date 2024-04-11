import React, { useState } from 'react';

const Chloride = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const fullContent = (
    <div>
     <p> What are chlorides?</p>
        <ul>Chlorides in water refer to the presence of chloride ions (Cl-) in various water bodies and water supplies. 
        </ul>
        <p>Factors that affect chloride concentration</p>  
        <ul>
            <li>The presence and weathering of chloride-containing minerals, such as halite (rock salt) and sylvite, can contribute to the natural occurrence of chlorides in groundwater and surface water.</li>
            <li>In coastal areas, seawater intrusion into freshwater aquifers or surface water bodies can result in elevated chloride concentrations due to the high salinity of seawater.</li>
            <li>The exchange of water between groundwater aquifers and surface water bodies can affect chloride levels, as groundwater may carry dissolved chlorides from various sources.</li>
        </ul>  
        <p>How to prevent it? </p>
        <ul>
            <li>nvest in advanced water treatment technologies, such as reverse osmosis, ion exchange, or membrane filtration, to effectively remove chlorides from drinking water and industrial water supplies.</li>
            <li>Preserve and restore wetlands, riparian zones, and other natural ecosystems that can act as filters and absorb chlorides.</li>
            <li>Require industries and wastewater treatment plants to implement advanced treatment technologies to remove or reduce chlorides in their effluents.</li>
            <li>Implement efficient and targeted application of road salts and alternative de-icing agents, such as brine solutions or organic deicers.</li>
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
      <h1>What is Chloride?</h1>
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

export default Chloride;
