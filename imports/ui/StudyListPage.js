import React from 'react';

import Header from './Header';
import SubHeader from './SubHeader';
import Studys from './Studys';

export default () => {
  return (
    <div>
      <Header title="medipixel CAD"/>
      <SubHeader/>
      <div className="page-content">
        <Studys/>
      </div>
    </div>
  );
};
