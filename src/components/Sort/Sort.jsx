import './sort.css'

export const Sort = ({ handleChangeSort, sort }) => {
    return (
        <div className="sort">
            <span>Sort by Price:</span>
            <span onClick={() => handleChangeSort('asc')} className={sort === 'asc' ? 'sortActive' : ''}>
                Sort ascending
            </span>
            <span onClick={() => handleChangeSort('desc')} className={sort === 'desc' ? 'sortActive' : ''}>
                Sort descending
            </span>
        </div>
    )
}