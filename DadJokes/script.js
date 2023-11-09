const jokeEl = document.getElementById('joke')
const jokebtn = document.getElementById('jokeBtn')

// when the button is clicked, it will call the generateJoke function.
jokebtn.addEventListener('click' , generateJoke)

// calls the function
generateJoke()

// async keyword means that the function returns a Promise
async function generateJoke() {
    // defines a config obj for the fetch request
    // specifies that the request should accept 'application/json' in the response
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    // making a fetch request for the URL with previously defined config
    // the keyword await is used to wait for the Promise from the fetch request to resolve
    const res = await fetch('https://icanhazdadjoke.com' , config)

    // converts the fetch request into JSON format
    const data = await res.json()

    // sets the innerHTML of the jokeEL element to the joke property of the data object
    // takes the innerHTML, extracts the joke and displays in jokeEl
    jokeEl.innerHTML = data.joke
}
