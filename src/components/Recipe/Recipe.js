import React from 'react'
import styles from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className={styles.recipe}>
            <div>
                <h1>{title}</h1>
            <p>{calories.toFixed(2)} kcal.</p>

            <h4>Ingredients:</h4>
            <ul>
            {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
            </ul>
            </div>
            
            <div>
            <img src={image} alt=""/>
            </div>
           
        </div>
    )
}

export default Recipe
