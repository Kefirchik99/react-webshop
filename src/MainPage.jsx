import { Header } from "./components/Header"
import { Navbar } from "./components/Navbar"
import { Card } from "./components/Card"

export const MainPage = ({ openNavbar, handleInput, handleOpenNav, handleChangeCategory, selectedCategory, filteredProduct, addToFav, favId }) => {
    return (
        <>
            | <Header handleInput={handleInput} handleOpenNav={handleOpenNav} />
            {
                openNavbar &&
                <Navbar
                    handleChangeCategory={handleChangeCategory}
                    selectedCategory={selectedCategory}
                />
            }
            <div className='card-container'>
                {filteredProduct.map((el) => (
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