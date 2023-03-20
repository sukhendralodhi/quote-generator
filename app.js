const jokeText = document.querySelector(".joke-text");
const newJokeBtn = document.querySelector(".new-joke-btn");

const getJoke = async () => {
  const fetchData = fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const joke = data.joke;
      jokeText.innerText = joke;
    });
};

newJokeBtn.addEventListener("click", getJoke);

// "https://icanhazdadjoke.com/"