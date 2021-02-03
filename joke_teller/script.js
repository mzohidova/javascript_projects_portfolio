const button = document.getElementById('button');
const audioElement = document.getElementById('audio');


//Passing Joke to VoiceRSS API
function tellMe(joke) {
    VoiceRSS.speech({
        key: '00a2974e397a47008f4d78a3f5927606',
        src: joke,
        hl: 'en-us',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

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
        tellMe(joke);
    } catch (error) {
        //Catch errors
        console.log('whoops', error)
    }
}

getJokes();