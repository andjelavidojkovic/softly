import React from 'react';
import Toast from './components/Toast';

const About = () => {
  return (
    <div>
      <h1>Toastify</h1>
      <Toast message="error" type="error"></Toast>
      {/* <Toast message="primary" type="primary"></Toast>
      <Toast message="secondary" type="secondary"></Toast>
      <Toast message="info" type="info"></Toast>
      <Toast message="success" type="success"></Toast>
      <Toast message="warning" type="warning"></Toast> */}
    </div>
  );
};

export default About;
