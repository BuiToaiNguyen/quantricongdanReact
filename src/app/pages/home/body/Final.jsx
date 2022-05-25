import React from 'react';
import FeaturePost from './FeaturePost';
import FeatureSmall from './FeatureSmall';

const Final = () => {
  return (
    <div className='section__final'>
      <div className='row'>
        <h1 style={{textAlign: 'center', fontSize: '32px'}}>VinID có gì HOT?</h1>
        <div className='line__intro' style={{margin: '24px auto'}}></div>
      </div>
      <FeaturePost/>
      <FeatureSmall/>
    </div>
  );
};

export default Final;
