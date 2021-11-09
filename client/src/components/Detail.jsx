import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { getDetail } from '../actions/index'
import { useDispatch, useSelector } from "react-redux";
import styles from '../components/styles/detail.module.css'


export default function Detail(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    }, [dispatch])

    const recipe = useSelector((state) => state.detail);
    console.log(recipe)
    return (
        <div>
            {
                recipe.length > 0 ?
                    <div className={styles.summary}>
                        <h1>{recipe[0].name}</h1>
                        <img className={styles.piK} src={recipe[0].image} alt="" width="200px" height="200px" />
                        <p className={styles.resume}><h5>Resume: {recipe[0].resume.replace(/<[^>]*>?/g, '')}</h5></p>
                        <h5 className={styles.dt}>Diet Type: {!recipe[0].createdInDB ? recipe[0].diets?.map((diet) => diet) :
                            recipe[0].DietTypes ? 'N/A' : recipe[0].DietTypes?.map((diet) => diet.name)}</h5>
                        <h5 className={styles.s}>Score: {recipe[0].score}</h5>
                        <h5 className={styles.hs}>Healthy level: {recipe[0].healthylevel}</h5>
                        <p className={styles.sbs}>Step by step: {!recipe[0].createdInDB ? recipe[0].stepbystep?.map((step) => step) : recipe[0].stepbystep}</p>
                    </div> : <p>Loading....</p>
            }
            <NavLink to='/home'>
                <button className={styles.btn}>Back to home</button>
            </NavLink>
        </div>
    )

}




