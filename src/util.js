
const url = 'https://spotify23.p.rapidapi.com/search/?q=';
const endpoint = '&type=tracks&offset=0&limit=10&numberOfTopResults=5';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4e5d694182msh2c0c9e89110071cp16021djsn080b8a8d596a',
		'x-rapidapi-host': 'spotify23.p.rapidapi.com'
	}
};

const searchSongs = async (param) => {
    try {
        const response = await fetch(`${url}${param}${endpoint}`, options);
        const result = await response.json();
        //console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
};

export { searchSongs };