
import { Card } from "../../components/Card"
import { useSelector } from "react-redux"
import { ReturnButton } from "../../components/ReturnButton"

export const FavoritePage = ({ favProducts }) => {

    const favorites = useSelector((state) => state.favorites.favorites)

    return (
        <div>
            <div className="card-container">
                {favorites.length ? (
                    favorites.map((el) => (
                        <Card
                            key={el.id}
                            product={el}
                        />
                    ))
                ) : (
                    <h3>No Favorite Products!</h3>
                )}
            </div>
            <ReturnButton />
        </div>
    )
}