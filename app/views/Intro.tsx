import React from 'react';
import classes from './intro.module.css';
import theme from '../theme.module.css';

export const Intro: React.FC = () => {
  return (
    <section id='intro' className={classes.container}>
      {/* <img className={classes.center} src="/img/notthisbutthis.png" alt=''/> */}
      <div className={classes.spacer} />
      <div className={`${classes.bar} ${theme.bg}`}>
        <p className={classes.center}>
          The Tree Temple is a long-term co-creative place-and-community building process for cultivating this recognition in variable public or semi-public urban spaces.
        </p>
        <p>
          It’s mission is to foster the cultivation of a more attentive and more appreciative relationship to other-than-human life in a playful manner. 
        </p>
        <p>
          The process is initiated and organised via The Tree Temple board game, which immerses the participants into the mission and facilitates the envisioning and planning of both the material and cultural dimension.
        </p>
      </div>
    </section>
  )
}
  
export default Intro;
  