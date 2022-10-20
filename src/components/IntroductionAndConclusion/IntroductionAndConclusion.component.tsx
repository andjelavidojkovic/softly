import React from 'react';
import './IntroductionAndConclusion.style.css';
import Button from '../Button';
import Image from '../ImageComponents/Image';

const IntroductionAndConclusion: React.FC<any> = ({
  title,
  buttonName,
  text,
  img,
  alt,
}) => {
  const classColor = img ? 'pink' : 'green';

  return (
    <div
      className={`introduction-and-conclussion introduction-and-conclussion__background-${classColor}`}
    >
      {img ? (
        <div className={'introduction-and-conclussion__img'}>
          <Image url={img} alt={alt} />
        </div>
      ) : null}

      <div
        className={`introduction-and-conclussion__text-box
      introduction-and-conclussion__text-box-${classColor}`}
      >
        <h3
          className={`introduction-and-conclussion__text-box-title-${classColor}`}
        >
          {title}
        </h3>
        <p>
          {text}
          <div
            className={`introduction-and-conclussion__text-box-button 
            introduction-and-conclussion__text-box-button-${classColor}`}
          >
            <Button variant="primary">{buttonName}</Button>
          </div>
        </p>
      </div>
    </div>
  );
};

export default IntroductionAndConclusion;
