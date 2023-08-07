import React from 'react';
import classes from './landing.module.css';

export const Landing: React.FC = () => {
  return (
    <section className={classes.container}>
      <div className={classes.bg}>
        <div></div>
        <div className={classes.layer2}></div>
      </div>
      <img className={classes.logo} src="/img/logo.png" alt="the tree temple logo" />
    </section>
  )
}
  
  export default Landing;
  