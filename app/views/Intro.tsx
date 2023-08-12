import React from 'react';
import classes from './intro.module.css';
import theme from '../theme.module.css';
import { OnScrollFocus } from '~/components/on-scroll-focus';

export const Intro: React.FC = () => {
  return (
  <section id='intro' className={classes.container}>
    <OnScrollFocus className={`${classes.bar} ${theme.bg}`}>
      <p className={classes.center}>
        The Tree Temple is a long-term place-and-community-making process for variable public or semi-public urban spaces with a participatory approach on Living Architecture (tree shaping).
      </p>
      <p>
        It’s mission is to foster the cultivation of a more attentive and more appreciative relationship to other-than-human life in a playful manner. 
      </p>
      <p>
        The process is initiated and organised via The Tree Temple board game, which immerses the participants into the mission and facilitates the envisioning and planning of both the material and cultural dimension.
      </p>
    </OnScrollFocus>
  </section>
  )
}
  
export default Intro;
  