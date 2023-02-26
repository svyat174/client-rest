import { useAppSelector } from "../hooks/redux"


export const FavouritesPage = () => {
  const {favourites} =  useAppSelector(state => state.prod)

  if (favourites.length === 0) {
    return <p className="text-center">No Items</p>
  }

  return (
    <ul className="list-none">
      { favourites.map(f => (
        <li key={f}>
          <p className="text-thin">{f}</p>
        </li>
      )) }
    </ul>
  )
}