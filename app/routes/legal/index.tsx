import type { V2_MetaFunction } from "@remix-run/node";
import classes from './index.module.css';
import { Footer } from "~/views/Footer";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "The Tree Temple - Legal Notice" },
    { name: "robots", content: "noindex" },
  ];
};

export default function Index() {
  return (
    <>
      <main className={classes.container}>
        <section id="contact">
          <h1>Legal Notice</h1>
          <p>
            editorially responsible:<br />
            (Information according to § 5 TMG)
          </p>
          <p>
            Stephanie Geihs<br />
            Herrfurthplatz 8<br />
            12049 Berlin<br />
            Germany<br />
            stephanie@treetemple.org
          </p>
        </section>
        
        <section id="privacy">
          <h2>Privacy Policy</h2>
          <p>This site does not collect or use any personal data.</p>
        </section>
      </main>

      <Footer />
    </>
  );
}
