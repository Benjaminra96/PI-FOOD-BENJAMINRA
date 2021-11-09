import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { getRecipes, getRecipeType, postRecipe } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../components/styles/recipecreator.module.css'

export default function RecipeCreator() {
    const dispatch = useDispatch();
    const history = useHistory();
    const recipeTypes = useSelector((state) => state.recipeTypes);

    const [input, setInput] = useState({
        name: '',
        resume: '',
        score: '',
        healthylevel: '',
        stepbystep: '',
        image: '',
        diets: []
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleCheck(e) {
        if (e.target.checked) {
            setInput({
                ...input,
                diets: [...input.diets, e.target.value]
            })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postRecipe(input))
        alert('Recipe successfully created')
        setInput({
            name: '',
            resume: '',
            score: '',
            healthylevel: '',
            stepbystep:'',
            image: '',
            diets:[]
        })
        history.push('/home')
    }

    useEffect(() => { dispatch(getRecipeType()) }, [dispatch]);

    return (
        <div>
            <NavLink to='/home'><button className={styles.botn}>Back</button></NavLink>
            <form className={styles.formframe} onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.n}>
                    <label>Name:</label>
                    <input
                        type='text'
                        value={input.name}
                        name='name'
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className={styles.r}>
                    <label>Resume:</label>
                    <input
                        type='text'
                        value={input.resume}
                        name='resume'
                        onChange={(e) => handleChange(e)} />
                </div>
                <div className={styles.s}>
                    <label>Score:</label>
                    <input
                        type='number'
                        value={input.score}
                        name='score'
                        onChange={(e) => handleChange(e)} />
                </div>
                <div className={styles.HS}>
                    <label>HealthyLevel:</label>
                    <input
                        type='number'
                        value={input.healthylevel}
                        name='healthylevel'
                        onChange={(e) => handleChange(e)} />
                </div>
                <div className={styles.SbS}>
                    <label>Step by step:</label>
                    <input
                        type='text'
                        value={input.stepbystep}
                        name='stepbystep'
                        onChange={(e) => handleChange(e)} />
                </div>
                <div className={styles.i}>
                    <label>Image:</label>
                    <input
                        type='text'
                        value={input.image}
                        name='image'
                        onChange={(e) => handleChange(e)} />
                </div>
                <div className={styles.form}>
                    <label>Diet type:</label>
                    <label><input
                        type='checkbox'
                        name='Gluten Free'
                        value='gluten free'
                        onChange={(e) => handleCheck(e)}
                    />Gluten Free</label>
                    <label><input
                        type='checkbox'
                        name='Dairy Free'
                        value='dairy free'
                        onChange={(e) => handleCheck(e)}
                    />Dairy Free</label>
                    <label><input
                        type='checkbox'
                        name='Lacto Ovo Vegetarian'
                        value='lacto ovo vegetarian'
                        onChange={(e) => handleCheck(e)}
                    /> Lacto Ovo Vegetarian</label>
                    <label><input
                        type='checkbox'
                        name='Vegan'
                        value='vegan'
                        onChange={(e) => handleCheck(e)}
                    />Vegan</label>
                    <label><input
                        type='checkbox'
                        name='Paleolithic'
                        value='paleolithic'
                        onChange={(e) => handleCheck(e)}
                    />Paleolithic</label>
                    <label><input
                        type='checkbox'
                        name='Primal'
                        value='primal'
                        onChange={(e) => handleCheck(e)}
                    />Primal</label>
                    <label><input
                        type='checkbox'
                        name='Pescatarian'
                        value='pescatarian'
                        onChange={(e) => handleCheck(e)}
                    />Pescatarian</label>
                    <label><input
                        type='checkbox'
                        name='Fodmap Friendly'
                        value='fodmap friendly'
                        onChange={(e) => handleCheck(e)}
                    />Fodmap Friendly</label>
                    <label><input
                        type='checkbox'
                        name='Whole 30'
                        value='whole 30'
                        onChange={(e) => handleCheck(e)}
                    />Whole 30</label>
                </div>
                <button className={styles.btncr} type='submit'>Create Recipe</button>
            </form>
        </div>
    )
}
