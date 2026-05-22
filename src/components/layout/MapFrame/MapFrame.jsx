import React from 'react';
import './MapFrame.css';

const MapFrame = ({ src, title = 'Ubicación' }) => {
  return (
    <div className="map-frame">
      <div className="map-frame__border">
        <iframe
          src={src}
          title={title}
          className="map-frame__iframe"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="map-frame__tape map-frame__tape--top" aria-hidden="true" />
      <div className="map-frame__tape map-frame__tape--bottom" aria-hidden="true" />
    </div>
  );
};

export default MapFrame;
