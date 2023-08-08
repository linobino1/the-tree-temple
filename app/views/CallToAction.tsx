import React from 'react';
import classes from './calltoaction.module.css';
import { NewsletterSignup } from '~/components/newsletter-signup';

export const CallToAction: React.FC = () => {
  return (
    <section id='cta' className={classes.container}>
      <h3>Let's play!</h3>
      <p className={classes.email}>
        <img src='/img/letter.svg' alt='letter' />
        <a href='mailto:stephanie@geihs.de'>stephanie@thetreetemple.org</a>
      </p>
      <div className={classes.signup}>Sign up for the Tree Temple newsletter:</div>
      <NewsletterSignup className={classes.newsletter} />
    </section>
  )
}
  
export default CallToAction;
  