import React, { useState } from 'react';

const Phenopthalein = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const fullContent = (
    <div>
         <p> What is Phenopthhalein Alakalinity ?</p>
        <ul>Phenolphthalein alkalinity is a method used to measure the alkalinity of water samples. Alkalinity refers to the capacity of water to neutralize acids and resist changes in pH. Phenolphthalein is a pH indicator that changes color in the presence of alkaline substances, particularly hydroxide ions (OH⁻). </ul>
        <p>Factors affecting Phenopthhalein Alakalinity</p>
        <ul>
            <li>Carbonate (CO₃²⁻) and bicarbonate (HCO₃⁻) ions are major contributors to alkalinity in water.</li>
            <li>The alkalinity of water sources can be influenced by geological factors such as the presence of carbonate-rich rocks (e.g., limestone, marble) and soils</li>
            <li>Climate factors such as temperature, precipitation, and weathering rates can affect alkalinity levels in water.</li>
            <li>Biological processes such as photosynthesis, respiration, and microbial metabolism can affect alkalinity levels in aquatic ecosystems.</li>
        </ul>
        <p>Prevention</p>
        <ul>
            <li>Protecting source waters from contamination and degradation helps maintain natural alkalinity levels.</li>
            <li>Promote sustainable agricultural practices to minimize the use of alkaline substances such as lime and reduce runoff of fertilizers and pesticides that can contribute to elevated alkalinity levels in surface water and groundwater. </li>
            <li>Upgrade wastewater treatment facilities to remove alkaline substances and other contaminants from industrial and municipal effluents before discharge into water bodies.</li>
            <li>Raise awareness among stakeholders, communities, and policymakers about the importance of protecting water quality and managing alkalinity levels in water sources.</li>
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
      <h1>What does Phenopthalein in water signify?</h1>
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

export default Phenopthalein;