// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import { PlasmicHomepage } from "../components/plasmic/auth_0_test/PlasmicHomepage";
import { useRouter } from "next/router";
import { useUser } from '@auth0/nextjs-auth0/client';
import { ensurePlasmicAppUser } from '@plasmicapp/auth-api';


async function authCallback(user) {
  
  /*const result = await ensurePlasmicAppUser({
    email: user.email,
    appSecret: 'kVeHgXahpOXzUrDOJurWlHjYqSKn8EbYHOC5w6Ff1BU3lMvPtCuuP3my7amMA3qUIZWpjTz2c7XS4vEcSs7Pw'
  });
  */
  fetch('/api/proxy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: "youssefhood@gmail.com", 
      appSecret: 'kVeHgXahpOXzUrDOJurWlHjYqSKn8EbYHOC5w6Ff1BU3lMvPtCuuP3my7amMA3qUIZWpjTz2c7XS4vEcSs7Pw'
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.error) {
      console.error(data.error);
    } else {
      console.log(JSON.stringify(data));

    }
  })
  .catch(error => console.error('Error:', error));




}


function Homepage() {
  const { user, error, isLoading } = useUser();
  const [myPlasmicUser, setMyPlasmicUser] = React.useState(null);
  const [myPlasmicUserToken, setMyPlasmicUserToken] = React.useState(null);
  const [result, setResult] = React.useState(null);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>error   {error.message}</div>;
  if (user) {


    return (
      <div>
        <img src={user.picture} alt={user.name} />
      <div>
        Welcome {user.name} ! <a href="/api/auth/logout">Logout</a>
      </div>
      
      </div>
    );
  }

  return (<a href="/api/auth/login">Login</a>);
  // Use PlasmicHomepage to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicHomepage are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicHomepage is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
 /* return (
    <PageParamsProvider__
      route={useRouter()?.pathname}
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicHomepage />
    </PageParamsProvider__>
  );*/
}

export default Homepage;
