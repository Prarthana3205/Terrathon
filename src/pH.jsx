import React, { useState } from 'react';

const PH = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const fullContent = (
    <>
      <ul>
        {`Imagine a scale: Think of a number line from 0 to 14. 7 is neutral, like pure water.
           Below 7 is acidic (like lemon juice) and above 7 is basic (like soap).`}
      </ul>
      <ul>
        {`Power of Hydrogen: pH stands for "potential of Hydrogen." It tells you how many
           hydrogen ions are floating around in a solution, which affects whether it's
           acidic or basic.`}
      </ul>
      <ul>
        {`Why it matters: The right pH is crucial for lakes and swimming pools, for fish and
           plants, and even for our skin!`}
      </ul>
      <p>Possible Reasons behind pH imbalance</p>
      <ul>
        {`Acid Rain: Imagine rain mixed with pollution acting like vinegar. This acidic rain
           lowers the pH of lakes, harming fish and other creatures.`}
      </ul>
      <ul>
        {`Fertilizer Overload: Too much lawn fertilizer can run into lakes, promoting algae
           growth. As algae dies, it decomposes and releases acids, lowering pH.`}
      </ul>
      <ul>
        {`Natural Decay: Leaves and other organic matter falling into lakes decompose, releasing
           some acids, though healthy ecosystems can handle this.`}
      </ul>
      <ul>
        {`Wastewater Treatment: Improperly treated wastewater can introduce chemicals or
           bacteria that disrupt the natural balance in water bodies, affecting their pH
           levels.`}
      </ul>
      <p>What can be done to fix it?</p>
      <ul>
        {`Reduce Lawn Fertilizer: Use natural fertilizers or compost on your lawn. Less
           fertilizer means less runoff feeding algae in lakes.`}
      </ul>
      <ul>
        {`Be Water Wise: Shorten showers and fix leaky faucets. Less water use translates to
           less potential for polluted runoff`}
      </ul>
      <ul>
        {`Don't pour chemicals down the drain or toilet. Take them to designated hazardous
           waste disposal sites.`}
      </ul>
    </>
  );

  const truncatedContent = fullContent.props.children[0].props.children.substring(0, 100) + "...";

  return (
    <div>
      <h1>What is pH?</h1>
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

export default PH;
