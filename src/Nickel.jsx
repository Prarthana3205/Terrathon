import React, { useState } from 'react';

const Nickel = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const fullContent = (
    <div>
        <p>What does Nickel in water mean? ?</p>
        <ul>Nickel in lake water is another visitor we want to keep an eye on. Here's the short version:

<li>Low Levels: Generally not a concern for the lake's health.</li>
<li>High Levels: Can be a sign of pollution. High nickel levels can turn the water greenish and make it unpleasant for aquatic life.</li>
There are safe limits set for nickel in drinking water, and luckily, treatment methods exist to remove excess nickel from lake water if it becomes a problem.</ul>
        <p>Factor that affect COD </p>
        <ul>
        Here are some human activities that can increase nickel levels in lakes:

<li>Industrial Waste: Factories that process or use nickel in their products (like batteries) can release nickel through air pollution or improperly treated wastewater, which can eventually reach lakes.</li>
<li>Mining: Nickel mining can contaminate nearby water sources, including lakes, through dust or runoff.</li>
<li>Landfills: Leaking landfills can release nickel into groundwater that eventually seeps into lakes.</li>
<li>Urban Runoff: Stormwater runoff from streets and parking lots can pick up nickel from sources like coins, cigarette butts, and certain alloys, carrying it to lakes.</li>
<li>Sewage Treatment Plants: If not functioning properly, wastewater treatment plants might not remove all nickel, contributing to higher levels in lakes.</li>
<li>Agriculture: Some pesticides and fertilizers contain nickel, and overuse can lead to higher nickel levels in lakes through runoff.</li>
        </ul>
        <p>How to prevetn high nickel levels</p>
        <ul>
        <li>Be Water Wise: Conserve water at home to reduce the overall load on treatment plants, which can sometimes struggle with removing nickel entirely.</li>
<li>Support Green Initiatives: Stay informed and advocate for stricter regulations on industrial waste disposal and sustainable practices.</li>
<li>Reduce Car Use: Walk, bike, or carpool when possible. This reduces stormwater runoff that can pick up nickel from car parts and tires.</li>
<li>Dispose of Waste Properly: Don't throw batteries, electronics, or other nickel-containing items in the trash. Take them to designated hazardous waste collection centers.</li>
<li>Spread Awareness: Talk to friends and family about the importance of healthy lakes and how everyday actions can make a difference.</li>
<li>By following these practices, you can contribute to a collective effort towards reducing nickel pollution and protecting our lakes. Remember, even small changes can have a positive impact!</li>
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
      <h1>What is Nickel in water signify?</h1>
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

export default Nickel;
