// forma não async
fetch("https://api.github.com/users/hgg8ghtr15")
  .then((response) => response.json())
  .then((data) => fetch(data.repos_url))
  .then((res) => res.json())
  .then((respotorio) => console.log(respotorio))
  .catch((err) => console.log(err));

//melhor forma async
  async function start() {
    try {
      const resposse = await fetch("https://api.github.com/users/maykbrito");
      const user = await resposse.json();
      const respoResponse = await fetch(user.repos_url);
      const repos = await respoResponse.json();
      console.log(repos);
    } catch (error) {
      console.log(error);
    }
  }
  
  start();