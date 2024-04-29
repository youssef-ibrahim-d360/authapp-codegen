import '@/styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import Head from "next/head";
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';


export default function MyApp({ Component, pageProps }) {
  return (

    <PlasmicRootProvider Head={Head}>
      
      <UserProvider>
      <Component {...pageProps} />
      </UserProvider>

    </PlasmicRootProvider>

  );
}

