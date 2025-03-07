import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import { Gadget } from '../../../components/model/gadget';
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

//Definisce l'endpoint API da cui recuperare i dati. È un server JSON mock che simula un database di gadget.
const API = 'https://my-json-server.typicode.com/training-api/next-course-gadgets/gadgets';
export async function getStaticPaths(){
  try {
    const res = await axios.get<Gadget[]>(API);
    const paths = res.data.map(gadget => ({ params: { id: gadget.id.toString() } }))
    return {
      paths,
      fallback: true
    }
  } catch(err) {
    return {
      notFound: true
    }
  }
}
//Questa funzione recupera i dettagli di un gadget in base all'id
//export const getServeSideProps = async(context: GetServerSidePropsContext) => {
export const getStaticProps = async(context: GetStaticPropsContext) => {
  //Ottiene l'id del gadget dai parametri dell'URL.
  const id = context.params?.id;
  try {
    //Effettua una richiesta HTTP GET all'API per ottenere il gadget corrispondente all'id.
    const { data } = await axios.get<Gadget>(`${API}/${id}`)
    //Se la richiesta va a buon fine, passa i dati ricevuti al componente tramite le props.
    return {
      props: {
        data
      }
    }
  } catch(err) {
    return {
      notFound: true
    }
  }
}

//Definisce il tipo dei dati (Gadget) che il componente riceve nelle props.
interface CatalogDetailsProps {
  data: Gadget
}
//Definisce un componente React che riceve un oggetto data contenente i dettagli del gadget.
const CatalogDetails: React.FC<CatalogDetailsProps> = ({ data }) => {
  const router = useRouter()

  if(router.isFallback){
    return <div>Loading...</div>
  }

  return (
    //Usa il componente <Head> di Next.js per impostare il titolo e la descrizione SEO della pagina.
    //Mostra il titolo e l'immagine del gadget. L'immagine viene gestita con il componente <Image> di Next.js.
    //Crea un link (Back) per tornare alla pagina /catalog.
    <>
      <Head>
        <title>Front End Gadgets - Catalog Product</title>
        <meta name="description" content="Frontend gadget is a demo site to learn Next"/>
      </Head>
      
      <h1 className="title">{data.title}</h1>
      <Image src={data.image} alt={data.title} width={300} height={300} />

      <Link href="/catalog" legacyBehavior>
        <a className="text-pink-500 mt-3">Back</a>
      </Link>
    </>

  )
}

export default CatalogDetails;