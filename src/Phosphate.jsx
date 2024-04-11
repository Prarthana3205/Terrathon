import React, { useState } from 'react';

const Phosphate = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const fullContent = (
    <div>
    <p>Phosphate</p>
    <p>Factors affecting phosphate</p>
    <ul>
        <li>Phosphorus-based fertilizers used in agriculture contribute to elevated phosphate levels in water bodies.</li>
        <li>Urbanization and impervious surfaces, such as roads, parking lots, and rooftops, increase stormwater runoff and nutrient pollution.</li>
        <li>Municipal and industrial wastewater discharges can contain significant concentrations of phosphates from human activities, detergents, cleaning products, and industrial processes. </li>
        <li>Weathering of phosphate-rich rocks and minerals in the watershed can release phosphates into water bodies.</li>
    </ul>
    <p>Prevention</p>
    <ul>
        <li>Encourage farmers to adopt best management practices (BMPs) for nutrient management, including proper fertilization techniques, soil testing, and precision agriculture. </li>
        <li>Implement soil conservation practices, such as cover cropping, contour plowing, and buffer strips, to reduce soil erosion and sedimentation. </li>
        <li>Upgrade municipal wastewater treatment plants to improve phosphate removal efficiency and reduce nutrient discharges into water bodies. </li>
        <li>Regulate industrial discharges and implement pollution prevention measures to minimize phosphate contamination in water bodies.</li>
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
      <h1>What is Phosphate?</h1>
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

export default Phosphate;
