const jokes_container = document.querySelector('.joke');
const btn = document.querySelector("button");

//const url = "https://official-joke-api.appspot.com/random_joke";
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let generate_joke = async () => {
    jokes_container.classList.remove("fade")
    fetch(url).then(data =>data.json()).then(item=>{
        jokes_container.textContent = `${item.joke} 😂`
        jokes_container.classList.add("fade")
    });
}
btn.addEventListener('click', generate_joke);