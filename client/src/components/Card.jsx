import React from 'react';
import styles from '../components/styles/card.module.css'

export default function Card( { name, image, diets }) {
    return (
        <div className={styles.contenedor}>
        <div>
            <h1 className={styles.title}>{name}</h1>
            <h5 className={styles.diettype}>Diet type: {diets && diets.length ? diets : 'N/A'}</h5>
            <img className={styles.pic} src={image} alt='' width='280px' height='280px'/>
        </div>
        </div>
    );
}