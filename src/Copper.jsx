import React, { useState } from 'react';

const Copper = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const fullContent = (
    <div>
         <p>Copper</p>
        <p>Factors affecting Copper</p>
        <ul>
            <li>Geological processes such as weathering, erosion, and volcanic activity contribute to the release and redistribution of copper in soil, sediment, and rock formations.</li>
            <li>Mining activities can release copper-containing dust, tailings, and wastewater into the environment, leading to soil and water contamination.</li>
            <li>Urbanization, construction activities, and infrastructure development can contribute to copper pollution through the use of copper-based materials such as pipes, wires, roofing materials, and construction products.</li>
            <li>Copper bioaccumulates in organisms such as fish, shellfish, and aquatic plants through dietary exposure and waterborne uptake</li>
        </ul>
        <p>Prevention</p>
        <ul>
            <li>Implement pollution prevention and control technologies in industries and manufacturing facilities to minimize copper emissions, releases, and waste generation. </li>
            <li>Promote waste minimization, recycling, and reuse of copper-containing materials and products to reduce the generation of copper waste and pollution. </li>
            <li>Adopt agricultural management practices that minimize copper use and runoff from agricultural activities.</li>
            <li>Promote the development of innovative technologies for copper detection, monitoring, and treatment to address emerging challenges and protect human health and the environment.</li>
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
      <h1>What does Copper in water signify?</h1>
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

export default Copper;