import React from 'react';
import Toast from './components/Toast';

const About = () => {
  return (
    <div>
      <h1>Toastify</h1>
      <Toast message="error" type="error" position="bottom-right"></Toast>
      <Toast message="warning" type="warning" position="bottom-left"></Toast>
      <Toast message="success" type="success" position="top-right"></Toast>
      <Toast message="primary" type="primary" position="top-left"></Toast>
      <Toast message="secondary" type="secondary" position="center"></Toast>
      <Toast message="info" type="info" position="top"></Toast>
    </div>
  );
};

export default About;
