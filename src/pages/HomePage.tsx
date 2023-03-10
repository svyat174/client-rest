import { useEffect, useState } from "react"
import { useLazyGetProductByIDQuery, useSearchProductsQuery } from "../store/products/products.api"
import { useDebounce } from "../hooks/debounce"
import { Item } from "../components/Item"

export const HomePage = () => {
  const [search, setSearch] = useState('')
  const debounced = useDebounce(search)
  const [dropdown, setDropdown] = useState(false); 
  const {isLoading, isError, data} = useSearchProductsQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  })

  const [fetchProduct, {
    isLoading: areProductLoading,
    data: product
  }] = useLazyGetProductByIDQuery()

  useEffect(() => {
    setDropdown(debounced.length > 3 && data?.length! > 0)
  }, [debounced, data])

  const clickHandler = (slug: string) => {
    fetchProduct(slug);
    setDropdown(false)
  }

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      { isError && <p className="text-center text-red-600">Something went wrong...</p> }

      <div className="relative w-[560px]">
        <input
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Search for Github username..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {dropdown && <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white overflow-y-scroll">
          { isLoading && <p className="text-center">Loading...</p> }
          { data?.map(product => (
            <li 
              key={product.id}
              onClick={() => clickHandler(product.slug)}
              className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
            >{ product.title }</li>
          )) }
        </ul>}
        <div className="container">
          { areProductLoading && <p className="text-center">Repos are loading...</p> }
          { product?.map(p => <Item order={p} key={p.id}/>) }
        </div>
      </div>
    </div>
  )
}