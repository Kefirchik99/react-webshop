import { FavoriteIcon } from "./FavoriteIcon"

export const Card = ({ product, addToFav, favId }) => {
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
                {favId && (
                    <div className="cardIcon" onClick={() => addToFav(product)}>
                        <FavoriteIcon active={favId.includes(id)} />
                    </div>
                )}
            </div>
        </div>
    )
}