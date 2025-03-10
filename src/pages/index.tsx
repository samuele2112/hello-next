import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import { Gadget } from '../../components/model/gadget';
import { InferGetServerSidePropsType } from 'next';
import { redirect } from 'next/dist/server/api-utils';

const API = 'https://my-json-server.typicode.com/training-api/next-course-gadgets/gadgets';

//export const getServerSideProps = async() => {
export const getStaticProps = async() => {
  try {
    const {  data  } = await axios.get<Gadget[]>(API)
    return {
      props: {
        data
      }
    }
  } catch(err) {
    return {
      redirect: {
        destination: '/',
        permanent: true
      }
    }
  }

}

function CatalogIndex({ data }: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Front End Gadgets - Catalog</title>
        <meta name="description" content="Frontend gadget is a demo site to learn Next"/>
      </Head>

      <h1 className="title">Catalog</h1>

      <div className="flex">
        {
          data.map((item: Gadget) => {
            return (
              <Link key={item.id} href={`/catalog/${item.id}`} legacyBehavior>
                <a>
                  <Image src={item.image} alt={item.title} width={300} height={300} />
                </a>
              </Link>
            )
          })
        }
      </div>


      <Link href="/catalog/123" legacyBehavior>
        <a className="text-pink-500 mt-3">Go to product</a>
      </Link>

    </>
  )
}

export default CatalogIndex;