import { FavoriteIcon } from "./FavoriteIcon"
import { ShoppingCartOutlined } from "@ant-design/icons"

export const Card = ({ product, onClickFavorites, favId }) => {
    const { name, brand, rating, price, img, id } = product
    return (
        <div className='card'>
            <img width={200} height={200} src={img} alt='фоточка' />
            <div className="cardContent">
                <div>
                    <h4>{brand}</h4>
                    <div>{name}</div>
                    <div>Rating: {rating}</div>
                    <h3>Price {price}$</h3>
                </div>
                <div>
                    {favId && (
                        <div className="cardIcon" onClick={() => onClickFavorites(product)}>
                            <FavoriteIcon active={favId.includes(id)} />
                        </div>
                    )}
                    <ShoppingCartOutlined
                        style={{ fontSize: "35px", color: "#c7c7c7" }}
                    />
                </div>
            </div>
        </div>
    )
}