import React, { useState } from 'react';

const Manganese = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const fullContent = (
    <>
      <p>What is manganese levels in water?</p>
      <p>Manganese is a naturally occurring mineral that can be found in lake water. Usually it's not a problem, but sometimes the level gets too high. Here's the quick version:</p>
      <ul>
        <li>
          <strong>Low levels:</strong> No worries, it's all good.
        </li>
        <li>
          <strong>High levels:</strong> Can cause brownish colored water and make it taste metallic. Not nice! In extreme cases, high levels over a long time can affect your health.
        </li>
      </ul>
      <p>
        There are guidelines for safe levels of manganese in drinking water. Luckily, there are ways to treat lake water to remove manganese if it becomes a problem.
      </p>
      <p>
        <strong>Why is there high levels of Manganese?</strong>
      </p>
      <ul>
        <li>
          Mining and Industry: Mines and factories can release manganese into the surrounding environment, which can eventually reach lakes.
        </li>
        <li>
          Wastewater: Improperly treated wastewater can also contain manganese, contributing to higher levels in lakes.
        </li>
      </ul>
    </>
  );

  const truncatedContent =
    fullContent.props.children[1].props.children.substring(0, 100) + "...";

  return (
    <div>
      <h1>What is manganese levels in water?</h1>
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

export default Manganese;