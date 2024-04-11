import React, { useState } from 'react';

const Chromium  = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const fullContent = (
    <div>
     <p> What do chromium levels signify?</p>
        <ul>Chromium in lake water is like a guest with two faces:

Low Chromium: No worries, it's all good for the lake.
High Chromium: Can be a sign of trouble. High levels can stain the water and make it unpleasant for fish and other creatures. In extreme cases, very high levels might be harmful to people too.
There are safe limits set for chromium in drinking water, and similar guidelines exist for healthy chromium levels in lakes.  If chromium levels get too high, there are ways to treat the lake water and bring them back down.
        </ul>
        <p>Factors that affect chromium concentration</p>  
        <ul>
        Here are some human activities that can increase chromium levels in lakes:

<li>Industrial Waste: Factories that use chromium in products like metal plating, dyes, or leather tanning can release chromium through air pollution or improperly treated wastewater, eventually reaching lakes.</li>
<li>Leather Tanneries: These facilities specifically use chromium in the tanning process, and if waste isn't managed properly, it can contaminate nearby water sources, including lakes.</li>
<li>Runoff from Roads: Chromium can be present in car parts and tire wear. Stormwater runoff from roads can wash this chromium into lakes</li>
<li>Landfills: Leaking landfills can release chromium into groundwater that eventually reaches lakes.</li>
<li>Paint and Dyes: Improper disposal of leftover paint, dyes, or pigments containing chromium can contaminate water sources if they reach lakes</li>
        </ul>  
        <p>How to prevent it? </p>
        <ul>
        Individual Actions:

<li>Reduce, Reuse, Recycle: This helps minimize waste that might contain chromium, like paints and dyes. Look for chromium-free alternatives when possible.</li>
<li>Proper Disposal: Don't pour leftover paint, dyes, or cleaning products down the drain. Take them to designated hazardous waste collection centers.</li>
<li>Support Green Businesses: Choose companies committed to sustainable practices and reducing chromium use in their products.</li>
<li>Be Water Wise: Conserve water at home to reduce the load on treatment plants, which can sometimes struggle with removing chromium entirely.</li>
<li>Spread Awareness: Talk to friends and family about the importance of healthy lakes and how everyday actions can make a difference.</li>
Community and Policy Changes:

<li>Support stricter regulations: Advocate for stricter rules on industrial waste disposal and encourage investment in cleaner technologies that minimize chromium use.</li>
<li>Improved Infrastructure: Support initiatives to upgrade and maintain wastewater treatment plants so they can effectively remove chromium from wastewater.</li>
<li>Stormwater Management: Promote better stormwater management practices to reduce runoff from roads and parking lots that can carry chromium into lakes.</li>
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
      <h1>What is Chromium?</h1>
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

export default Chromium;
