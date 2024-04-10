import React, { useState } from 'react';

const Iron = () => {
    const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const fullContent = (
    <>
    <p>What does Iron content in lake water signify?</p>
    <ul>
Iron in lake water is kind of like a double-edged sword:

Good Iron: Low to moderate amounts are helpful for plants and algae in the lake, like iron for your blood! It helps them grow healthy.
Bad Iron: Too much iron can stain the water brown and make it taste unpleasant. In extreme cases, it can even affect some creatures in the lake.
So, a little iron is a sign of a healthy lake, but too much can cause problems.</ul>
<p>Potential Causes</p>
<ul>Factories: Industries that deal with iron or steel can release iron-rich wastewater into lakes.</ul>
<ul>Rusty Pipes and Cars: Rusting pipes and car parts can release iron into stormwater runoff that ends up in lakes.</ul>
<ul>Sewage Treatment Plants: If not properly filtered, wastewater treatment plants can release iron into lakes.</ul>
<ul>Mining: Mines that extract iron ore can leave dust that settles on lakes.</ul>
<ul>Construction: Land clearing and construction can stir up iron-rich soil that ends up in lakes.</ul>
    </>
  );
  const truncatedContent = fullContent.props.children[0].props.children.substring(0, 100) + "...";
  return (
    <div>
    <h1>What is Iron levels?</h1>
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

export default Iron