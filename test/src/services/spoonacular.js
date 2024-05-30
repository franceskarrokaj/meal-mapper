import axios from 'axios';

async function makeRequest(category, maxFat, nbOfResults) {
    if (!category) return null;

    if (!maxFat) {
        maxFat = 25
    }

    if (!nbOfResults) {
        nbOfResults = 1
    }


    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${category}&maxFat=${maxFat}&number=${nbOfResults}`, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "6ccfd118587b4af2a30e1560e79c13ed"
            }
        });

        return response;
    } catch (e) {
        console.log(e);
    }   
}

export default makeRequest;