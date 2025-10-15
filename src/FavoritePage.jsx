import { Link } from "react-router-dom"
import { Card } from "./components/Card"

export const FavoritePage = ({ favProducts }) => {
    return (
        <div>
            <div className="card-container">
                {favProducts.length ? (
                    favProducts.map((el) => (
                        <Card
                            id={el.id}
                            key={el.id}
                            img={el.img}
                            brand={el.brand}
                            name={el.name}
                            rating={el.rating}
                            price={el.price}
                        />
                    ))
                ) : (
                    <h3>No Favorite Products!</h3>
                )}
            </div>
            <Link to='/'>
                <div>HOME</div>
            </Link>
        </div>
    )
}