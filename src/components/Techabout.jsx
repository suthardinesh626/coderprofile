import React from 'react';
import '../style/techabout.css';
import ImageData from '../json/ImageData.json';

const ImageComponent = ({ id, src, name }) => {
  return (< div key={id} >
    <img className='tech-logo' src={src} alt={name} />
  </div >
  )

};

const Techabout = () => {
  return (
    <div className='logo-area'>
      <h1>Known Technologies</h1>
      <div className='logo-tech'>
        {ImageData.map((img) => (
          <ImageComponent key={img.id} {...img} />
        ))}
      </div>
    </div>
  );
}

export default Techabout