import React, { useState } from 'react';

const DO = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const fullContent = (
    <>
      <div>
        <p>Meaning of dissolved oxygen!</p>
        <ul>
          <li>Dissolved oxygen (DO) refers to the amount of oxygen gas (O2) that is dissolved in a liquid, such as water. </li>
          <li>It is a crucial component of aquatic ecosystems as many organisms, including fish and other aquatic animals, rely on dissolved oxygen to survive.</li>
        </ul>
        <p>Factors that affect the amount of dissolved oxygen  </p>
        <ul>
          <li>Eutrophication: Excessive nutrient enrichment from sources such as agricultural runoff or wastewater can lead to eutrophication, which promotes algal blooms. When these algae die and decompose, the process consumes dissolved oxygen, leading to hypoxic or anoxic conditions.</li>
          <li>Weather Conditions: Weather events such as heavy rainfall or drought can influence dissolved oxygen levels in water. Heavy rainfall can increase runoff and introduce organic matter and nutrients into water bodies, while drought can reduce water flow and increase water temperatures, affecting dissolved oxygen solubility.</li>
          <li>Temperature: Dissolved oxygen solubility decreases as water temperature increases. Warmer water holds less dissolved oxygen compared to colder water. This is because gas solubility decreases with increasing temperature.</li>
        </ul>
        <p>Prevention of depletion of dissolved oxygen </p>
        <ul>
          <li>Reduce Nutrient Pollution: Excessive nutrient enrichment, particularly from sources such as agricultural runoff and wastewater discharge, can lead to eutrophication and algal blooms.</li>
          <li>Enhance Wastewater Treatment: Implementing advanced wastewater treatment technologies and upgrading existing treatment plants can improve the removal of organic matter and nutrients from wastewater.</li>
          <li>Regulate Industrial Discharges: Implement and enforce regulations to control industrial discharges and limit the release of pollutants into water bodies.</li>
        </ul>
      </div>
    </>
  );

  const truncatedContent = (
    <div>
      <p>{fullContent.props.children[0]}</p>
      <button onClick={toggleContent}>Read more</button>
    </div>
  );

  return (
    <div>
      <h1>What is Dissolved O2?</h1>
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

export default DO;
