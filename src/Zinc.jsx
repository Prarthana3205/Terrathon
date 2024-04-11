import React, { useState } from 'react';

const Zinc = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const fullContent = (
    <div>
     <p> What do zinc levels signify?</p>
        <ul>Zinc in lake water is kind of like a guest.  A little bit is okay, but too much can cause trouble.

Low Zinc: Not a big deal for the lake itself.
High Zinc: Can harm little creatures living in the lake and make it difficult for them to survive. In extreme cases, very high levels might affect the health of the lake itself.
Just like we have guidelines for safe drinking water, there are limits for safe zinc levels in lakes to keep the ecosystem healthy.
        </ul>
        <p>Factors that affect zinc concentration</p>  
        <ul>
        Here are some human activities that can increase zinc levels in lakes:

<li>Industry: Factories that process zinc or use zinc in products (like paints) can release zinc into the environment, which can reach lakes through runoff or air pollution.</li>
<li>Mining: Zinc mining can contaminate nearby water sources, including lakes.</li>
<li>Urban Runoff: Stormwater runoff from streets and parking lots can pick up zinc from car tires, brake pads, and other sources, carrying it to lakes.</li>
<li>Landfills: Leaking landfills can release zinc into groundwater that eventually reaches lakes.</li>
<li>Fertilizers: Some fertilizers contain zinc, and overuse can contribute to higher zinc levels in lakes.</li>
<li>Wastewater Treatment Plants: If not properly treated, wastewater can contain zinc and contribute to higher levels in lakes.</li>
        </ul>  
        <p>How to prevent it? </p>
        <ul>
            <li>nvest in advanced water treatment technologies, such as reverse osmosis, ion exchange, or membrane filtration, to effectively remove chlorides from drinking water and industrial water supplies.</li>
            <li>Preserve and restore wetlands, riparian zones, and other natural ecosystems that can act as filters and absorb chlorides.</li>
            <li>Require industries and wastewater treatment plants to implement advanced treatment technologies to remove or reduce chlorides in their effluents.</li>
            <li>Implement efficient and targeted application of road salts and alternative de-icing agents, such as brine solutions or organic deicers.</li>
            </ul>  
            <p>How can you prevent it?</p>
            <ul>
            The common person might not have direct control over big industries or mining operations, but here are some ways you can help prevent high zinc levels in lakes:

<li>Reduce Car Use: Walk, bike, or carpool when possible. This reduces the amount of zinc from tires and brakes washing into storm drains that eventually reach lakes.</li>
<li>Proper Disposal: Dispose of household hazardous waste (like paint) properly at designated collection centers. Don't pour them down the drain or dump them on the ground.</li>
<li>Lawn Care: Follow proper lawn care practices. Don't overuse fertilizers, especially those containing zinc. Consider natural alternatives for pest control.</li>
<li>Support Green Initiatives: Stay informed and support local efforts to regulate industrial waste and promote sustainable practices.</li>
<li>Spread Awareness: Talk to your friends and family about the importance of healthy lakes. Encourage them to follow similar practices.</li>
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
      <h1>What is Zinc?</h1>
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

export default Zinc;
