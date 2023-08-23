import type { V2_MetaFunction } from "@remix-run/node";
import classes from './index.module.css';
import { Footer } from "~/views/Footer";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "The Tree Temple - About" },
  ];
};

export default function Index() {
  return (
    <>
      <main className={classes.container}>
        <section id="about">
          <h2>about</h2>
          <h3>Stephanie Geihs</h3>
          <p className={classes.tags}>Sustainability Designer, Philosopher & Illustrator</p>
          <p className={classes.info}>
            interested in ecological consciousness, regenerative design, biodesign, nature-based solutions, designing with plants and rainwater, sustainable cities & communities, circular solutions, sustainable system design
            {' '}
          </p>
          {/* <p className={classes.linkedinWrapper}>
            <a
              href="https://linkedin.com/in/stephanie-geihs-a08580234"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={classes.linkedin} src="/img/linkedin_black.png" alt='linkedin logo'/>
            </a>
          </p> */}
          <img className={classes.portrait} src="/img/stephanie.jpg" alt="portrait" />
        </section>

        <section id="contact">
          <h2>contact</h2>
          <p>
            For inquiries about <span className={classes.treeTemple}>The Tree Temple</span> or other collaborations, please contact me via email at <a href="mailto:stephanie@treetemple.org">stephanie@treetemple.org</a>.
          </p>
          <p>
            Looking forward to hearing from you!
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
