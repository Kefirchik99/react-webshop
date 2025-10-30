import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main/MainPage';
import { FavoritePage } from './pages/favorites/FavoritePage';
import { fetchFavorite } from './pages/favorites/favoritesSlice';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './pages/main/productsSlice';

function App() {

  const [inputName, setInputName] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [sort, setSort] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts({ inputName, selectedCategory, sort }))
  }, [inputName, selectedCategory, sort])

  useEffect(() => {
    dispatch(fetchFavorite())
  }, [])

  const handleInput = (text) => {
    setInputName(text)
  }

  const handleChangeCategory = (changedCategory) => {
    if (changedCategory === selectedCategory) {
      setSelectedCategory('')
      return
    }
    setSelectedCategory(changedCategory)

  }

  const handleChangeSort = (order) => {
    if (sort === order) {
      setSort('')
      return
    }
    setSort(order)
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={
          <MainPage
            sort={sort}
            handleChangeSort={handleChangeSort}
            handleInput={handleInput}
            handleChangeCategory={handleChangeCategory}
            selectedCategory={selectedCategory}
          />
        }
        />
        <Route path='/favorites' element={<FavoritePage />} />
      </Routes>
    </div>
  )
}

export default App;
