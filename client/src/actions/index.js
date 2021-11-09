import axios from 'axios';

export function getRecipes() {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:3001/recipes');
        console.log(json);
        return dispatch({
            type: 'GET_RECIPES',
            payload: json.data
        })
    }
}
export function getRecipeType(){
    return async function (dispatch){
            var rTypes = await axios.get('http://localhost:3001/types');
            return dispatch({
                    type: "GET_RECIPE_TYPE",
                    payload: rTypes.data,
            })
    }
}

export function postRecipe(payload) {
    return async function (dispatch) {
        var json = await axios.post('http://localhost:3001/recipe', payload);
        console.log(json);
        return json;
    }
}

export function getNameRecipes(name) {
    return async function (dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/recipes?name=' + name);
            return dispatch({
                type: 'GET_NAME_RECIPES',
                payload: json.data
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}

export function getDetail(ID) {
    return async function (dispatch) {
        try {
            var detail = await axios.get('http://localhost:3001/recipes/' + ID);
            return dispatch({
                type: "GET_DETAIL",
                payload: detail.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function orderByScore(payload) {
    return {
        type: 'ORDER_BY_SCORE',
        payload
    }
}

export function filterRecipesByDiet(payload) {
    return {
        type: 'FILTER_BY_DIET',
        payload
    }
}

export function orderByAlphabetics(payload) {
    return {
        type: 'FILTER_BY_ALPHA',
        payload
    }
}

export function filterCreated(payload) {
    return {
        type: 'FILTER_CREATED',
        payload
    }
}