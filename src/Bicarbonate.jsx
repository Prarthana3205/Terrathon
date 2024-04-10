import React, { useState } from 'react';

const Bicarbonate = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const fullContent = (
    <div>
      <p>What are bicarbonate?</p>
      <ul>
        <li>Bicarbonate (HCO3-) is a chemical compound that is an important ion found in water and bodily fluids.</li>
      </ul>
      <p>Factors affecting bicarbonate </p>
      <ul>
        <li>The presence and weathering of carbonate minerals, such as limestone (CaCO3) and dolomite (CaMg(CO3)2), can contribute to the formation of bicarbonate in water.</li>
        <li>Photosynthesis by aquatic plants and algae can consume dissolved CO2, shifting the carbonate system equilibrium and leading to increases in bicarbonate concentrations.</li>
        <li>Agricultural practices, industrial activities, and wastewater discharges can introduce or alter the bicarbonate content of water bodies through the addition of chemicals, nutrients, or other compounds.</li>
      </ul>
      <p>How to prevent it?</p>
      <ul>
        <li>Utilize appropriate water treatment technologies, such as reverse osmosis or ion exchange, to remove bicarbonate and other dissolved solids from water supplies.</li>
        <li>Promote the growth of aquatic plants and algae that can consume CO2 and shift the carbonate system equilibrium, thereby reducing bicarbonate concentrations.</li>
        <li>Implement best management practices (BMPs) to minimize soil erosion and the transport of carbonate minerals (e.g., limestone, dolomite) into water bodies.</li>
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
      <h1>What is Bicarbonate?</h1>
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

export default Bicarbonate;
