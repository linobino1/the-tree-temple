import React from 'react';
import classes from './story.module.css';
import { NavLink } from '@remix-run/react';

export const Story: React.FC = () => {
  return (
    <section id='story' className={classes.container}>
      <div className={classes.bg} />
      <img className={classes.storyteller} src='/img/storyteller.png' alt='storyteller'></img>
      <div className={classes.text}>
        <h1>The Mission of the Tree Temple</h1>
        <p>
          There was once a time, a strange time indeed, when we looked at everything as if it was dead! 
        </p>
        <p>
          We thought the only way to know something is to kill it in our minds, and the only way to survive is through this knowledge of dead things… Imagine, we saw the birds flying in the sky, singing their songs, but we thought they must be a kind of machine giving out peeping signals. We saw the trees growing, but when we logged them to build our houses, we didn’t even know what we were doing, because they were already dead in our minds.
        </p>
        <p>
          It was a long, bad dream, which made us feel very lonely in the universe. Everything was there to our disposal, but we never felt satisfied, we never felt at home. We locked ourselves in and started to build very complicated machines, hoping that they could come alive and make us happy. But it came otherwise… 
        </p>
        <p>
          Mother Earth got very weak, her weathers became so chaotic, rivers ran dry, soils denied their services, all the fruits lost their taste and the birds became silent… More and more we started to see how a dead Earth really looks like! When life vanishes, you realise it was there all along.
        </p>
        <p>
          Imagine, how embarrassed we were!  “How could we have been so blind?” we asked to ourselves. We immediately understood, that it was now up to us to assist the vanishing life to recover and we felt that our knowledge of dead things couldn’t help us too much. So we went and asked the living beings what they needed to flourish again and in this moment … we woke up:
        </p>
        <p>
          The birds wanted us to sing with them! The rivers wanted us to swim in them alongside the fishes! The trees wanted us to climb and sit in them! The rain wanted us to dance in it and drink it! The soil wanted us to play on it and eat its weeds! We were indeed very surprised how much joy this work was and how much everyone had missed us!
        </p>
        <p>
          To always remind ourselves about this important knowledge of aliveness we want to build a living Tree Temple here in our community, where we can celebrate what we have learned about our love and respect for life on Earth… and learn even more!
        </p>
        <p>
          We want to grow this temple with living trees, that we slowly and carefully shape into a structure, so beautiful that everyone remembers the wonders of symbiosis just by seeing it!
          {/* Hopefully it will attract many more fellows to join our mission over time. */}
          {' '}
          Just imagine, what a joyful place this will be…
        </p>
        {/* <p>
          The winds have already spread the news of our mission throughout the lands and some curious visitors are already on their way to us. Let’s get started so we can give the birds a proper welcome to The Tree Temple when they arrive!
        </p> */}
        <p className={classes.back}>
          <NavLink
            to={'/#set'}
          >back</NavLink>
        </p>
      </div>
    </section>
  )
}
  
export default Story;
  