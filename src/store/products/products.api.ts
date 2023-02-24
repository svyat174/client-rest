import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../config'
import { IProduct, IProductResponse, OrderItem } from '../../models/models'

export const productApi = createApi({
  reducerPath: 'product',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  refetchOnFocus: true,
  endpoints: build => ({
    searchProducts: build.query<IProduct[], string>({
      query: (search: string) => ({
        url: 'product/',
        params: {
          search,
          limit: 15
        }
      }),
      transformResponse: (response: IProductResponse<IProduct>) => response.products,
    }),
    getProductByID: build.query<OrderItem[], string>({
      query: (slug: string) => ({
        url: `product/${slug}/items`
      })
    }),
    getAllProducts: build.query<IProduct[], string>({
      query: () => ({
        url: 'product/'
      }),
      transformResponse: (response: IProductResponse<IProduct>) => response.products,
    })
  })
})

export const {
  useSearchProductsQuery,
  useLazyGetProductByIDQuery,
  useGetAllProductsQuery
} = productApi