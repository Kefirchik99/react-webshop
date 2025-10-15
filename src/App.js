import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './MainPage';
import { FavoritePage } from './FavoritePage';

const products = [
  {
    id: 1,
    brand: 'Samsung',
    name: 'S20',
    price: 300,
    category: 'phone',
    rating: 5,
    img: 'https://m.media-amazon.com/images/I/71Ji+UMQ-gL._AC_SL1498_.jpg'
  },
  {
    id: 2,
    brand: 'GPO',
    name: '746',
    price: 123,
    category: 'phone',
    rating: 4,
    img: 'https://m.media-amazon.com/images/I/611PFZIL8CL._AC_SL1500_.jpg'
  },
  {
    id: 3,
    brand: 'Google',
    name: 'Pixel 10',
    price: 880,
    category: 'phone',
    rating: 4,
    img: 'https://m.media-amazon.com/images/I/614Qf9iukZL._AC_SL1500_.jpg'
  },
  {
    id: 4,
    brand: 'Xiaomi',
    name: 'A27I',
    price: 100,
    category: 'monitor',
    rating: 5,
    img: 'https://m.media-amazon.com/images/I/51LRt51aLEL._AC_SL1000_.jpg'
  },
  {
    id: 5,
    brand: 'TIVIQUE',
    name: 'Gaming Laptop',
    price: 999,
    category: 'laptop',
    rating: 2,
    img: 'https://m.media-amazon.com/images/I/71+mst6l73L._AC_SL1500_.jpg'
  },
  {
    id: 6,
    brand: 'FUNYET',
    name: 'Laptop',
    price: 399,
    category: 'laptop',
    rating: 3,
    img: 'https://m.media-amazon.com/images/I/71mYCPVN4kL._AC_SL1500_.jpg'
  },
  {
    id: 7,
    brand: 'Celeron',
    name: 'N4000',
    price: 350,
    category: 'laptop',
    rating: 4,
    img: 'https://m.media-amazon.com/images/I/51fmoj3aFTL._AC_.jpg'
  },
  {
    id: 8,
    brand: 'Acer',
    name: 'Aspire Go',
    price: 390,
    category: 'laptop',
    rating: 2,
    img: 'https://m.media-amazon.com/images/I/71dNQyfPveL._AC_SL1500_.jpg'
  },
  {
    id: 9,
    brand: 'LG',
    name: '27MR',
    price: 450,
    category: 'monitor',
    rating: 1,
    img: 'https://m.media-amazon.com/images/I/71BydFEd1NL._AC_SL1500_.jpg'
  },
  {
    id: 10,
    brand: 'MSI',
    name: 'PRO',
    price: 85,
    category: 'monitor',
    rating: 4,
    img: 'https://m.media-amazon.com/images/I/71moyya-AqL._AC_SL1500_.jpg'
  },
  {
    id: 11,
    brand: 'Hammer',
    name: '6 LTE',
    price: 50,
    category: 'phone',
    rating: 3,
    img: 'https://m.media-amazon.com/images/I/71CO-ke0xdL._AC_SL1500_.jpg'
  },
  {
    id: 12,
    brand: 'Apple',
    name: 'Iphone 15',
    price: 450,
    category: 'phone',
    rating: 2,
    img: 'https://m.media-amazon.com/images/I/61X5FknDWuL._AC_SL1500_.jpg'
  }
];

function App() {
  const [inputName, setInputName] = useState('')
  const [openNavbar, setOpenNavbar] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [favId, setFavId] = useState([])

  const filteredProduct = products.filter((el) =>
    el.category.includes(selectedCategory) &&
    el.name.toLowerCase().includes(inputName.toLowerCase()))

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
            filteredProduct={filteredProduct}
            addToFav={addToFav}
            favId={favId}
          />
        }
        />
        <Route path='/favorites' element={<FavoritePage favProducts={favProducts} />} />
      </Routes>
    </div>

  )
}

export default App;
