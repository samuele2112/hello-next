import type { NextPage } from 'next'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';


const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Front End Gadgets</title>
        <meta name='description' content='Front end gadget is a demo site to learn Next'/>
      </Head>
      <Image 
      src="https://www.addlance.com/blog/wp-content/uploads/2019/04/immagini-da-scaricare.jpg"  
      alt="Faro"
      width={600}
      height={600}
      />
      <h1 className="text-5xl text-pink-600 font-bold my-5">FrontEnd Gadgets</h1>
      <Link href="/catalog">
      <button className="btn btn-primary">VIEW CATALOG</button>
      </Link>
    </>
  )
}

export default Home