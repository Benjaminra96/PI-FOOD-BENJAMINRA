import React from 'react';
import { NavLink } from "react-router-dom";
import kitchen from '../components/pics/kitchen.mp4';
import style from '../components/styles/landingpage.module.css';
import { useDispatch } from 'react-redux';
import { getRecipes } from '../actions/index.js'


const LandingPage = () => {
const dispatch = useDispatch();
React.useEffect(() => { dispatch(getRecipes()) }, [dispatch]);
    return (
        <div className={style.LP_container}>
            <video autoPlay loop muted className={style.LP_video} width="100vw" height="100%" >
                <source type="video/mp4" src={kitchen} />
            </video>
            <NavLink to="/home" className="link"><button className={style.LP_btn}>W E L C O M E </button></NavLink>
        </div>
    );
};


export default LandingPage;