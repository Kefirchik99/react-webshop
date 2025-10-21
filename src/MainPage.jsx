import { Header } from "./components/Header"
import { Navbar } from "./components/Navbar"
import { Card } from "./components/Card"

export const MainPage = ({
    openNavbar,
    handleInput,
    handleOpenNav,
    handleChangeCategory,
    selectedCategory,
    products,
    addToFav,
    favId,
    loading
}) => {
    return (
        <>
            | <Header handleInput={handleInput}
                handleOpenNav={handleOpenNav} />
            {loading && <h3>loading...</h3>}
            {openNavbar && (
                <Navbar
                    handleChangeCategory={handleChangeCategory}
                    selectedCategory={selectedCategory}
                />
            )}
            <div className='card-container'>
                {products.map((el) => (
                    <Card
                        addToFav={addToFav}
                        favId={favId}
                        id={el.id}
                        key={el.id}
                        img={el.img}
                        brand={el.brand}
                        name={el.name}
                        rating={el.rating}
                        price={el.price} />
                ))}
            </div>
        </>
    )
}