import axios from "axios";

// nao async
axios
  .get("https://api.github.com/users/hgg8ghtr15")
  .then((response) => {
    const user = response.data;

    return axios.get(user.repos_url);
    // console.log(response.data);
  })
  .then((respo) => {
    console.log(respo.data);
  })
  .catch((error) => console.log(error));

//async
async function fetchRepos() {
    try {
      const url = "https://api.github.com/users/hgg8ghtr15";
      const user = await axios.get(url);
      const repos = await axios.get(user.data.repos_url);
      console.log(repos);
    } catch (error) {
      console.log(error);
    }
  }
  
  fetchRepos();
  