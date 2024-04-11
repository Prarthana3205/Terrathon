import React, { useState } from 'react';

const Carbonate = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const fullContent = (
    <div>
        <p>What are Carbonates?</p>
        <ul>Carbonates are chemical compounds containing the carbonate ion (CO₃²⁻), which consists of one carbon atom bonded to three oxygen atoms.</ul>
        <p>Factors affecting Carbonates </p>
        <ul>
            <li>Factors such as lithology, depositional environment, and diagenetic processes determine the formation and distribution of carbonate deposits.</li>
            <li>Erosion of carbonate-rich rocks by water, wind, and glaciers contributes to the transport of carbonates and their deposition in sedimentary layers.</li>
            <li>Biological processes, including photosynthesis, respiration, and microbial metabolism, influence carbon cycling and carbonate dynamics in ecosystems. </li>
            <li>Climatic factors such as temperature, precipitation, and humidity affect carbonate weathering rates, soil development, and carbonate accumulation.</li>
        </ul>
      <p>Prevention</p>
      <ul>
        <li>Implement sustainable land management practices to minimize soil erosion and sedimentation, which can transport carbonate-rich particles into water bodies. </li>
        <li>Establish riparian buffer zones along water bodies to filter runoff, reduce sedimentation, and protect carbonate-rich habitats.</li>
        <li>Adopt soil conservation practices such as conservation tillage, crop rotation, and soil organic matter management to improve soil structure, reduce erosion, and enhance carbonate preservation.</li>
        <li>Reduce pollution from industrial, agricultural, and urban sources to minimize anthropogenic impacts on carbonate environments.</li>
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
      <h1>What does Carbonate in water signify?</h1>
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

export default Carbonate;