const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

//Get jokes from JokeAPI (url: https://sv443.net/jokeapi/v2/)

async function getJokes () {
    let joke = '';
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.setuo) {
            joke = `${data.setup}...${data.delivery}`;
        } else {
            joke = data.joke;
        }
        console.log(joke);
    } catch (error) {
        //Catch errors
        console.log('whoops', error)
    }
}

getJokes();