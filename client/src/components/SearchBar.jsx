import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameRecipes } from '../actions';
import styles from '../components/styles/searchbar.module.css'

export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getNameRecipes(name))
        setName('')
    }
    return (
        <div>
            <input
                type='text'
                placeholder='Search ...'
                value={name}
                onChange={(e) => handleInputChange(e)}
        />
        <button type='submit' onClick={(e) => handleSubmit(e)}>🔎</button>
        </div >
    )
}


