export const Navbar = ({ handleChangeCategory, selectedCategory }) => {
    return (
        <div className='navbar'>
            <div onClick={() => handleChangeCategory('phone')}
                className={selectedCategory === 'phone' && 'active'}>
                Phones</div>
            <div onClick={() => handleChangeCategory('laptop')}
                className={selectedCategory === 'laptop' && 'active'}>
                Laptops</div>
            <div onClick={() => handleChangeCategory('monitor')}
                className={selectedCategory === 'monitor' && 'active'}>
                Monitors</div>
        </div>)
}