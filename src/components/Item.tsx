import { useState } from 'react'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import { OrderItem } from '../models/models'

export const Item = ({ order }: { order: OrderItem }) => {
  const { addFavourite, removeFavourite } = useActions()
  const {favourites} = useAppSelector(state => state.prod)

  const [isFav, setIsFav] = useState(favourites.includes(order.orderId + ''))

  const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    addFavourite(order.productId + '')
    setIsFav(true)
  }

  const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    removeFavourite(order.productId + '')
    setIsFav(false)
  }

  return (
    <div className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all'>
      <h2 className='text-lg font-bold'>Сумма заказа: {order.amount}</h2>
      <p className="text-sm">
        <span className="font-bold">Количество: {order.count}</span>
        <span className="font-bold"> Номер заказа: {order.count}</span>
      </p>
      <p className="text-sm font-thin">Hair Club</p>

      {!isFav && <button
        className='py-2 px-4 bg-yellow rounded hover:shadow-md transition-all'
        onClick={addToFavourite}
      >Добавить</button>}

      {isFav && <button
        className='py-2 px-4 bg-yellow rounded hover:shadow-md transition-all'
        onClick={removeFromFavourite}
      >Удалить</button>}
    </div>
  )
}