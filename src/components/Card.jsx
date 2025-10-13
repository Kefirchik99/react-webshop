export const Card = ({ img, name, brand, rating, price }) => {
    return <div>
        <div className='card'>
            <img width={200} height={200} src={img} alt='фоточка' />
            <h4>{brand}</h4>
            <div>{name}</div>
            <div>Rating: {rating}</div>
            <h3>Price {price}$</h3>
        </div></div>
}