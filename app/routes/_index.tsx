import type { V2_MetaFunction } from "@remix-run/node";
import { Landing } from "~/views/Landing";
import { Intro } from "~/views/Intro";
import { Detail } from "~/views/Detail";
import { Footer } from "~/views/Footer";
import { Game } from "~/views/Game";
// import { Story } from "~/views/Story";
import { Set } from "~/views/Set";
import { CallToAction } from "~/views/CallToAction";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "The Tree Temple" },
    { name: "description", content: "" },
  ];
};

export default function Index() {
  return (
    <main>
      <Landing />
      <Intro />
      <Detail />
      <Game />
      <Set />
      <CallToAction />
      {/* <Story /> */}
      <Footer />
    </main>
  );
}
