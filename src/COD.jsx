import React, { useState } from 'react';

const COD = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const fullContent = (
    <div>
        <p>What is COD ?</p>
        <ul>COD is a measure of the amount of oxygen required to chemically oxidize the organic and inorganic matter present in a water sample.</ul>
        <p>Factor that affect COD </p>
        <ul>
            <li>The concentration and composition of organic matter in the water are the primary determinants of COD.</li>
            <li>Certain inorganic substances, such as reduced metals, sulfides, and some inorganic salts, can also contribute to the oxygen demand and influence COD levels.</li>
            <li>Higher temperatures can increase the rate of chemical and biological reactions, leading to increased oxygen demand and higher COD.</li>
            <li>The presence and activity of microorganisms, such as bacteria and fungi, can affect the biodegradation of organic matter and the overall oxygen demand in the water.</li>
        </ul>
        <p>How to prevetn high COD </p>
        <ul>
            <li>Protect and restore natural wetlands, riparian zones, and other aquatic ecosystems that can act as natural filters and sinks for organic matter and other COD-contributing substances.</li>
            <li>Establish robust monitoring programs to regularly assess COD levels in water bodies, identify hotspots, and track the effectiveness of mitigation efforts.</li>
            <li>Implement stormwater management practices to reduce the transport of COD-causing pollutants from urban and agricultural areas</li>
            <li>Industrial effluents: Require treatment and pretreatment of industrial wastewater to remove or reduce COD-causing substances.</li>
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
      <h1>What is COD?</h1>
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

export default COD;
