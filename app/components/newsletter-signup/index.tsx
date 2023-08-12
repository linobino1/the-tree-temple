import React from 'react';
import Mailchimp from "react-mailchimp-form";
import classes from './index.module.css';
import environment from '~/util/environment';

export type Props = {
  className?: string;
}

export const NewsletterSignup: React.FC<Props> = ({ className }) => {
  const url = environment().MAILCHIMP_SIGNUP_URL;
  
  return (
    <Mailchimp
      className={`${classes.container} ${className}`}
      action={url}
      fields={[
        {
          name: 'EMAIL',
          placeholder: 'Email',
          type: 'email',
          required: true
        }
      ]}
      messages = {
        {
          sending: "Sending...",
          success: "Thank you for subscribing!",
          error: "An unexpected internal error has occurred.",
          empty: "You must write an e-mail.",
          duplicate: "Too many subscribe attempts for this email address",
          button: "",
        }
      }
    />
);
}
  
export default NewsletterSignup;
  