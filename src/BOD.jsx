import React, { useState } from 'react';

const BOD = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const fullContent = (
    <>
      <p>What is BOD?</p>
      <p>
        BOD stands for Biochemical Oxygen Demand. It is a measure of the amount of oxygen that bacteria and other microorganisms consume while breaking down organic material in water. High BOD levels can lead to low levels of dissolved oxygen in water, which can harm aquatic life.
      </p>
      <p>
        <strong>Why is BOD important?</strong>
      </p>
      <ul>
        <li>
          BOD is an essential parameter for assessing water quality. High BOD levels can indicate pollution from organic waste, sewage, or agricultural runoff.
        </li>
        <li>
          Low dissolved oxygen levels caused by high BOD can harm aquatic life, such as fish and other organisms, by limiting their ability to respire.
        </li>
        <li>
          Monitoring BOD helps identify pollution sources and track the effectiveness of water treatment processes.
        </li>
      </ul>
      <p>
        <strong>How is BOD measured?</strong>
      </p>
      <ul>
        <li>
          BOD is typically measured using a five-day test called the BOD5 test. This test measures the amount of oxygen consumed by microorganisms during a five-day period while decomposing organic material in a sample of water.
        </li>
        <li>
          The BOD5 test results are expressed in milligrams of oxygen per liter of water (mg/L).
        </li>
      </ul>
      <p>
        <strong>What are the safe BOD levels?</strong>
      </p>
      <ul>
        <li>
          The safe BOD levels depend on the intended use of the water. For example, the U.S. Environmental Protection Agency (EPA) recommends a maximum BOD5 concentration of 30 mg/L for freshwater aquatic life and 6 mg/L for drinking water.
        </li>
      </ul>
    </>
  );

  const truncatedContent =
    fullContent.props.children[1].props.children.substring(0, 100) + "...";

  return (
    <div>
      <h1>What is BOD?</h1>
      {showFullContent ? (
        <>
          {fullContent}
          <button onClick={toggleContent}>Read less</button>
        </>
      ) : (
        <>
          {truncatedContent}
          <button onClick={toggleContent}>Read more</button>
        </>
      )}
    </div>
  );
};

export default BOD;