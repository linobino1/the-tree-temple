import type { V2_MetaFunction } from "@remix-run/node";
import classes from './index.module.css';
import { NavLink } from "@remix-run/react";
import CallToAction from "~/views/CallToAction";
import NewsletterSignup from "~/components/newsletter-signup";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "The Tree Temple - About" },
    { name: "description", content: "" },
  ];
};

export default function Index() {
  return (
    <div className={classes.container}>
      <header>
        <NavLink
          to={'/'}
        >
          <img className={classes.logo} src="/img/logo.png" alt="logo" />
        </NavLink>
      </header>
      <main>
        <div className={classes.info}>
          <h1>About</h1>
          <p>Stephanie Geihs</p>
          <p>Living Architecture, Interbeing Studies, Lisbon Lover</p>
          <ul>
            <li>Master of Science, Philosophy</li>
            <li>Master of Science, Design for Sustainability</li>
          </ul>
          <p>
            <a href="https://linkedin.com/in/stephaniegeihs">linkedin.com/in/stephaniegeihs</a>
          </p>
        </div>
        <img className={classes.portrait} src="/img/stephanie.jpg" alt="portrait" />
        <div className={classes.contact}>
          <h1>Contact</h1>
          <p>
            Contact me for more information about the Tree Temple, to book a session or to collaborate. I am looking forward to hearing from you!
          </p>
          <p>Sign up for the Tree Temple newsletter:</p>
          <NewsletterSignup />
        </div>
      </main>

    </div>
  );
}
