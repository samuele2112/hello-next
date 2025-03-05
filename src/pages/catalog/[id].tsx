import { useRouter } from "next/router";
function CatalogDetails() {
    const router = useRouter();
    console.log(router.query.id);
    return (
      <>
        <h1 className="text-5xl text-pink-600 font-bold my-5">Catalog Details { router.query.id }</h1>
      </>
    )
  }
  
  export default CatalogDetails;