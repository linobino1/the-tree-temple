import type { V2_MetaFunction } from "@remix-run/node";
import { Landing } from "~/views/Landing";
import { Intro } from "~/views/Intro";

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
    </main>
  );
}
