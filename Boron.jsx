import React, { useState } from 'react';

const Boron = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const fullContent = (
    <div>
        <p>Boron</p>
        <p>factors affecting concentration of boron </p>
        <ul>
            <li>Boron leaches into water bodies through weathering and dissolution of borate-rich rocks and minerals, influencing boron levels in surface water and groundwater.</li>
            <li>Sandy soils with low organic matter content and acidic pH tend to have higher boron solubility and leaching potential, leading to elevated boron levels in groundwater and surface runoff.</li>
            <li>Hydrological processes, such as precipitation, infiltration, runoff, and groundwater flow, influence the transport and distribution of boron in the environment. </li>
            <li>Boron-containing fertilizers, such as borax and sodium borate, are commonly used in agriculture to correct boron deficiencies in crops. </li>
        </ul>
        <p>Prevention </p>
        <ul>
            <li>Adopt soil conservation practices, such as erosion control, terracing, contour plowing, and cover cropping, to minimize soil erosion and sedimentation. </li>
            <li>Practice precision agriculture and nutrient management to optimize boron fertilizer use and minimize overapplication. </li>
            <li>Implement pollution prevention measures and treatment technologies to reduce boron discharges from industrial sources.</li>
            <li>Establish monitoring programs to assess boron levels in surface water and groundwater.</li>
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
      <h1>What does Boron in water signify?</h1>
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

export default Boron;