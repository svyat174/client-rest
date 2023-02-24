import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../config'
import { IProduct, IProductResponse } from '../../models/models'

export const productApi = createApi({
  reducerPath: 'product',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: build => ({
    searchProducts: build.query<IProduct[], string>({
      query: (search: string) => ({
        url: 'product/',
        params: {
          search,
          limit: 10
        }
      }),
      transformResponse: (response: IProductResponse<IProduct>) => response.products,
    })
  })
})

export const { useSearchProductsQuery } = productApi