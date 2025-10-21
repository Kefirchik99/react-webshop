import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './MainPage';
import { FavoritePage } from './FavoritePage';


function App() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [inputName, setInputName] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [favId, setFavId] = useState([])

  const [openNavbar, setOpenNavbar] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:5000/products?q=${inputName}&category_like=${selectedCategory}`)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false)
        setProducts(result)
      })
      .catch((error) => console.log(error))
  }, [inputName, selectedCategory])

  const handleInput = (text) => {
    setInputName(text)
  }

  const handleOpenNav = () => {
    setOpenNavbar(!openNavbar)
  }

  const handleChangeCategory = (changedCategory) => {
    if (changedCategory === selectedCategory) {
      setSelectedCategory('')
      return
    }
    setSelectedCategory(changedCategory)

  }

  const addToFav = (id) => {
    if (favId.includes(id)) {
      setFavId(favId.filter((i) => i !== id))
      return
    }
    setFavId([...favId, id])
  }

  const favProducts = products.filter(product => favId.includes(product.id))

  return (
    <div>
      <Routes>
        <Route path='/' element={
          <MainPage
            handleInput={handleInput}
            handleOpenNav={handleOpenNav}
            openNavbar={openNavbar}
            handleChangeCategory={handleChangeCategory}
            selectedCategory={selectedCategory}
            products={products}
            addToFav={addToFav}
            favId={favId}
            loading={loading}
          />
        }
        />
        <Route path='/favorites' element={<FavoritePage favProducts={favProducts} />} />
      </Routes>
    </div>
  )
}

export default App;
