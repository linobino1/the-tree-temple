import { cssBundleHref } from "@remix-run/css-bundle";
import { json, type LinksFunction, type LoaderFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import classes from "./root.module.css";

export const links: LinksFunction = () => [
  // {
  //   rel: 'preconnect',
  //   href: 'https://fonts.googleapis.com',
  // },
  // {
  //   rel: 'preconnect',
  //   href: 'https://fonts.gstatic.com',
  // },
  // {
  //   rel: 'stylesheet',
  //   href: 'https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;1,300;1,400&display=swap',
  // },
  // {
  //   rel: 'stylesheet',
  //   href: 'https://fonts.googleapis.com/css2?family=Italiana:ital,wght@0,300;0,400;1,300;1,400&display=swap',
  // },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader: LoaderFunction = async () => {
  return json({
    ENV: {
      MAILCHIMP_SIGNUP_URL: process.env.MAILCHIMP_SIGNUP_URL,
    },
  });
}

export default function App() {
  const data = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(
              data.ENV
            )}`,
          }}
        />
      </head>
      <body className={classes.load}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
