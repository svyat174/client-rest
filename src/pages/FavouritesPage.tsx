import { useEffect } from "react"
import { useGetAllProductsQuery } from "../store/products/products.api"

export const FavouritesPage = () => {
  const {isError, isLoading, data} = useGetAllProductsQuery('')

  useEffect(() => {

  }, [])
  return (
    <>
    <div className="font-bold">
      { isError && <p>ERROR</p> }
      { isLoading && <p>Loading...</p> }
      { data?.map(p => <p key={p.id}>{p.title}</p>) }
    </div>
    </>
  )
}