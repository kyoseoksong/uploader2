import React from 'react';
import DicomLeft from './DicomLeft';
import DicomRight from './DicomRight';

export default () => {
  return (
    <div className="dicom-main">
      <div className="dicom-left"><DicomLeft/></div>
      <img className="dicom-center" src="/1.jpg" alt="dicom1"></img>
      <div className="dicom-right"><DicomRight/></div>
    </div>
  );
};
