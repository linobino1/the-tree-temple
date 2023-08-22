import type { V2_MetaFunction } from "@remix-run/node";
import { Landing } from "~/views/Landing";
import { Intro } from "~/views/Intro";
import { Detail } from "~/views/Detail";
import { Footer } from "~/views/Footer";
import { Game } from "~/views/Game";
import { Set } from "~/views/Set";

export function links() {
  return [
   {
     rel: 'icon',
     type: 'image/png',
     sizes: '512x512',
     href: '/favicon.png',
   },
  //  {
  //    rel: 'apple-touch-icon',
  //    sizes: '180x180',
  //    href: '/favicon/apple-touch-icon.png',
  //  },
  //  {
  //    rel: 'icon',
  //    type: 'image/png',
  //    sizes: '32x32',
  //    href: '/favicon/favicon-32x32.png',
  //  },
  //  {
  //    rel: 'icon',
  //    type: 'image/png',
  //    sizes: '16x16',
  //    href: '/favicon/favicon-16x16.png',
  //  },
  //  {
  //    rel: 'icon',
  //    type: 'image/x-icon',
  //    href: '/favicon/favicon.ico',
  //  },
  //  {
  //   rel: 'mask-icon',
  //   href: '/favicon/safari-pinned-tab.svg',
  //   color: '#5bbad5',
  //  },
 ]
}

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: "The Tree Temple"
    },
    {
      wname: "description",
      content: "The Tree Temple is a long-term place-and-community-making process for variable public or semi-public urban spaces with a participatory approach on Living Architecture (tree shaping)."
    },
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
      <Footer />
    </main>
  );
}
