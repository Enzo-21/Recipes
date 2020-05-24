import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import { APP_ID, APP_KEY } from './config/api'
import { Recipe, Welcome } from './components'

const App = () => {


  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState("")

  useEffect(() => {
    getRecipes()
    setSearch('')
  }, [query])

  const recipesURL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  const getRecipes = async () => {

    try {
      const { data: { hits } } = await axios.get(recipesURL)

      setRecipes(hits)
      console.log(hits);


    } catch (error) {
      console.log(error)
    }
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className='search-bar' placeholder='Search by ingredient (Eg: banana, peanut, potato)' type="text" value={search} onChange={updateSearch} />
        <button className='search-button' type='submit'>Search</button>

      

      </form>

      {query ? (
        <div className='recipes'>
        {recipes.map(({ recipe: { label, calories, image, ingredients } }, i) => (
            <Recipe
              key={i}
              title={label}
              calories={calories}
              image={image} 
              ingredients={ingredients}/>
          ))}
      </div>
      ) : (
        <Welcome/>
      )}

      
      </div>

     
  );
}

export default App;
