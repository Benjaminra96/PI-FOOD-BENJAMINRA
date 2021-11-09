import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes, filterRecipesByDiet, filterCreated, orderByScore, orderByAlphabetics } from '../actions';
import { NavLink } from 'react-router-dom';
import Card from './Card';
import Paginado from './Paginado';
import SearchBar from './SearchBar';
import styles from '../components/styles/home.module.css'


export default function Home() {
    const dispatch = useDispatch()
    const allRecipes = useSelector((state) => state.recipes)
    const [orden, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [recipesPerPage, setRecipesPerPage] = useState(9)
    const indexOfLastRecipe = currentPage * recipesPerPage
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getRecipes());
    }, [dispatch])


    function handleClick(e) {
        e.preventDefault();
        dispatch(getRecipes());
    }
    //Upward Downward --> ordenamos por el score
    function sortByScore(e) {
        e.preventDefault();
        dispatch(orderByScore(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }

    function handleFilterDietTypes(e) {
        dispatch(filterRecipesByDiet(e.target.value))

    }

    function handleFilterCreated(e) {
        dispatch(filterCreated(e.target.value))
    }

    function sortByAlpha(e) {
        e.preventDefault();
        dispatch(orderByAlphabetics(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }

    return (
        <div className={styles.imagen}>
           <NavLink to='/recipe'><button className={styles.button}>Make your own...</button></NavLink>
            <button className={styles.button2} onClick={e => { handleClick(e) } }>Reload all recipes</button>
            <div>
                <select onChange={e => sortByScore(e)} className={styles.select1}>
                    <option value=''>Sort by score</option>
                    <option value='UP'>Upward</option>
                    <option value='DOWN'>Downward</option>
                </select>
                <select onChange={e => sortByAlpha(e)} className={styles.select2}>
                    <option value=''>Alphabetical order</option>
                    <option value='A-Z'>A to Z</option>
                    <option value='Z-A'>Z to A</option>
                </select>
                <select onChange={e => handleFilterDietTypes(e)} className={styles.select3}>
                    <option value='All'>Diet types</option>
                    <option value='gluten free'>Gluten free</option>
                    <option value='dairy free'>Dairy free</option>
                    <option value='lacto ovo vegetarian'>Lacto ovo vegetarian</option>
                    <option value='vegan'>Vegan</option>
                    <option value='paleolithic'>Paleolithic</option>
                    <option value='primal'>Primal</option>
                    <option value='pescatarian'>Pescatarian</option>
                    <option value='fodmap friendly'>Foodmap friendly</option>
                    <option value='whole 30'>Whole 30</option>
                </select>
                <select onChange={e => handleFilterCreated(e)} className={styles.select4}>
                    <option value='all'>All recipes</option>
                    <option value='created'>Created</option>
                    <option value='current'>Current </option>
                </select>

                <Paginado
                    recipesPerPage={recipesPerPage}
                    allRecipes={allRecipes.length}
                    paginado={paginado}
                />

                <SearchBar/>
                
                <span className={styles.recipes}>
                {currentRecipes?.map((c) => {
                    return (
                        <fragment>
                            <NavLink className={styles.a} to={'/recipes/' + c.ID}>
                                <Card  name={c.name} image={c.image} diets={c.diets ? c.diets : c.DietTypes && c.DietTypes.map((e) => e.name)} />
                            </NavLink>
                        </fragment>
                    )
                })
                }
                </span>
            </div>
        </div>
    )
}