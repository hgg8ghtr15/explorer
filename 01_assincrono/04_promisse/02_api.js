https://codesandbox.io/s/ecstatic-kapitsa-uo1dsz?file=/src/index.js




//   aula promessas 
axios.get("https://api.github.com/users/hgg8ghtr15")
    .then((res) => {console.log(res.data)})

//   aula sem promessa
import axios from "axios";

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


  //   aula

  import axios from "axios";

  Promise.all([
    axios.get("https://api.github.com/users/hgg8ghtr15"),
    axios.get("https://api.github.com/users/maykbrito")
  ])
    .then((respostas) => {
      console.log(respostas[0].data.login);
      console.log(respostas[1].data.login);
    })
    .catch((error) => {
      console.log(error.message);
    });

    