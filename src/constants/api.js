const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/'
export const INGREDIENTS_LIST = `${BASE_URL}list.php?i=list`
export const COCKTAIL_BY_INGREDIENT = `${BASE_URL}filter.php?i=`
export const COCKTAIL_BY_ID = `${BASE_URL}lookup.php?i=`
export const COCKTAIL_RANDOM = `${BASE_URL}random.php`

// async function getInfoMovie(movieId) {
//     const movieInfo = await fetch(movieId)
//     const response = await movieInfo.json()
//     console.log(response)
// }

// export const moviesImg = await getInfoMovie(INGREDIENTS_LIST)
