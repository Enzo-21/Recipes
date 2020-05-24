import React from 'react'
import styles from './Welcome.module.css'

const Welcome = () => {
    return (
        <div className={styles.container}>
            <h1>Welcome to Recipe Finder APP</h1>
            <p>Are you tired of eating the same dishes?</p>
            <p>We got you! Just type an ingredient you have at home in the search bar above, hit 'Enter' and... voila! There you go <span role="img" aria-label='emoji'>😄</span>  We give you some recipes idea with the ingredient you typed.</p>

            <small>Try with: "peanut" <span role="img" aria-label='emoji'>🥜</span> </small>

        </div>
    )
}

export default Welcome
