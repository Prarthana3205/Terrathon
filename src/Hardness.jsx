import React, { useState } from 'react';

const Hardness = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const fullContent = (
    <div>
        <p>What is hardness of water ?</p>
        <ul>Hardness is a measure of the amount of dissolved calcium and magnesium salts in the water.</ul>
        <p>Factors affecting hardness </p>
        <ul>
            <li>Regions with sedimentary rocks, such as limestone and dolomite, which contain high concentrations of calcium and magnesium, tend to have harder water.</li>
            <li>Groundwater typically has higher mineral content and is generally harder than surface water sources, such as rivers and lakes.</li>
            <li>The amount and intensity of precipitation can affect the dissolution and transport of minerals from the surrounding environment.</li>
            <li>In coastal areas, the intrusion of saltwater into freshwater aquifers or surface water can significantly increase the calcium and magnesium content, resulting in harder water.</li>
        </ul>
        <p>Prevention</p>
        <ul>
            <li>nstall water softening systems, such as ion exchange or reverse osmosis, to remove calcium and magnesium ions from the water supply.</li>
            <li>Explore the use of surface water sources, such as lakes, rivers, or treated municipal water, which generally have lower mineral content and are softer than groundwater.</li>
            <li>Regularly maintain and replace aging pipes, valves, and other water system components to minimize the buildup of scale and deposits.</li>
            <li>Use scale inhibitors or chelating agents to prevent the precipitation of calcium and magnesium salts in water distribution systems and appliances.</li>
            <li>Optimize the operation and efficiency of water treatment plants to enhance the removal of calcium and magnesium ions.</li>
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
      <h1>What does Hardness in water signify?</h1>
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

export default Hardness;
