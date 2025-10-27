import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './MainPage';
import { FavoritePage } from './FavoritePage';


function App() {

  const [products, setProducts] = useState([])
  const [favProducts, setFavProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [inputName, setInputName] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

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

  const loadFavorites = () => {
    fetch(`http://localhost:5000/favorites`)
      .then((response) => response.json())
      .then((result) => {
        setFavProducts(result)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    loadFavorites()
  }, [])

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

  const addToFav = (products) => {
    if (favProducts.some((el) => el.id === products.id)) {
      fetch(`http://localhost:5000/favorites/${products.id}`, {
        method: "DELETE",
      }).then(loadFavorites())
    }
    else {
      fetch(`http://localhost:5000/favorites`, {
        method: "POST",
        body: JSON.stringify(products),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(loadFavorites())
    }
  }

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
            favId={favProducts.map((prod) => prod.id)}
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
