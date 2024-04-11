import React, { useState } from 'react';

const Sodium = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const fullContent = (
    <div>
    <p>Sodium , factors affecting sodium concentration </p>
    <ul>
          <li>The presence and weathering of sodium-containing minerals, such as rock salt (halite), can contribute to the natural sodium content in water.</li>
          <li>In coastal areas, the intrusion of seawater into freshwater aquifers or surface water bodies can significantly increase the sodium concentration due to the high salinity of seawater.</li>
          <li>Industrial processes, such as chemical manufacturing, mining, and oil and gas operations, can introduce sodium-containing compounds into water bodies through wastewater discharges.</li>
          <li>Certain water treatment methods, such as ion exchange water softeners, can increase the sodium content of the treated water as a result of the exchange of calcium and magnesium ions for sodium ions.</li>
    </ul>
    <p>Prevention</p>
    <ul>
      <li>Implement strict regulations and enforce compliance to limit the discharge of sodium-containing effluents from industrial facilities and municipal wastewater treatment plants.</li>
      <li>Promote the use of low-sodium fertilizers and soil amendments in agricultural activities.</li>
      <li>Develop and implement groundwater management strategies to prevent or minimize saltwater intrusion in coastal areas, such as controlling groundwater extraction rates and maintaining appropriate water table levels.</li>
      <li>Implement advanced water treatment technologies, like reverse osmosis or nanofiltration, to effectively remove sodium and other dissolved salts from water supplies.</li>
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
      <h1>What is Sodium?</h1>
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

export default Sodium;
