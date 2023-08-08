import type { V2_MetaFunction } from "@remix-run/node";
import { Story } from "~/views/Story";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "The Tree Temple" },
    { name: "description", content: "" },
  ];
};

export default function Index() {
  return (
    <main>
      <Story />
    </main>
  );
}
