import React, { useState } from 'react';

const Cadmium = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const fullContent = (
    <div>
        <p>Cadmium</p>
        <p>Factors affecting Cadmium</p>
        <ul>
            <li>Geological factors such as the presence of cadmium-bearing minerals (e.g., sphalerite, cadmium sulfide) and geological processes (e.g., weathering, erosion) can influence the distribution and abundance of cadmium in soil, sediment, and rock formations.</li>
            <li>Industrial emissions, wastewater discharges, and improper waste disposal practices can release cadmium into the environment, leading to contamination of soil, water, and air.</li>
            <li>Cadmium-containing materials such as batteries, electronic waste, and industrial products may be improperly disposed of or recycled, leading to soil and water contamination in urban areas.</li>
            <li>admium bioaccumulates in organisms such as fish, shellfish, and aquatic plants through dietary exposure and waterborne uptake.</li>
        </ul>
        <p>Prevention</p>
        <ul>
            <li>Implement pollution control technologies and best practices in industries and manufacturing facilities to minimize cadmium emissions and releases.</li>
            <li> Promote extended producer responsibility (EPR) and product stewardship programs to ensure responsible disposal and recycling of cadmium-containing products.</li>
            <li>Develop and promote cadmium-free alternatives in batteries, electronics, coatings, and other products to minimize environmental and health risks.</li>
            <li>Invest in research, innovation, and technology development to advance understanding of cadmium sources, pathways, fate, and effects in the environment.</li>
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
      <h1>What does Cadmium in water signify?</h1>
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

export default Cadmium;