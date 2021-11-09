import React from 'react';
import styles from '../components/styles/paginado.module.css'



export default function Paginado({ recipesPerPage, allRecipes, paginado }) {
    const pageNumbers = []

    for (let i = 0; i < Math.ceil(allRecipes / recipesPerPage); i++) {
        pageNumbers.push(i + 1)
    }
    return (
        <nav>
            <ul className='paginado' className={styles.paginado}>
                {pageNumbers && pageNumbers.map(number => (
                    <li className='number' key={number}>
                        <a onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}