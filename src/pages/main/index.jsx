import { Header } from "../../components/Header"
import { Navbar } from "../../components/Navbar"
import { Card } from "../../components/Card"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToFavorites, deleteFavorite } from "../favorites/favoritesSlice"
import { Sort } from "../../components/Sort/Sort"

export const MainPage = ({
    handleInput,
    handleChangeCategory,
    selectedCategory,
    handleChangeSort,
    sort,
}) => {

    const [openNavbar, setOpenNavbar] = useState(false)

    const favorites = useSelector((state) => state.favorites.favorites)
    const { products, loading } = useSelector((state) => state.products)

    const dispatch = useDispatch()

    const handleOpenNav = () => {
        setOpenNavbar(!openNavbar)
    }

    const onClickFavorites = (products) => {
        if (favorites.some((el) => el.id === products.id)) {
            dispatch(deleteFavorite(products.id))
        } else {
            dispatch(addToFavorites(products))
        }
    }
    return (
        <>
            <Header handleInput={handleInput}
                handleOpenNav={handleOpenNav} />

            {openNavbar && (
                <Navbar
                    handleChangeCategory={handleChangeCategory}
                    selectedCategory={selectedCategory}
                />
            )}

            <Sort sort={sort} handleChangeSort={handleChangeSort} />

            {loading && <h3>loading...</h3>}
            <div className='card-container'>
                {products.map((product) => (
                    <Card
                        key={product.id}
                        onClickFavorites={onClickFavorites}
                        favId={favorites.map((prod) => prod.id)}
                        product={product}
                    />
                ))}
            </div>
        </>
    )
}