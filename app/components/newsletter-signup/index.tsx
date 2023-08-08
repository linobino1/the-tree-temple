import React from 'react';
import classes from './index.module.css';

export type Props = {
  className?: string;
}

export const NewsletterSignup: React.FC<Props> = ({ className }) => {
  return (
    <form className={`${classes.container} ${className}`}>
      <input type='email' placeholder='me@example.com' />
      <button type='button' aria-label='submit'/>
    </form>
  )
}
  
export default NewsletterSignup;
  