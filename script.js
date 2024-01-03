const APIURL = 'https://api.github.com/users/';
const main = document.getElementById('main');
const form  = document.getElementById('form')
const searchInput = document.getElementById('search')

form.addEventListener('submit', function (event){
 event.preventDefault();
 const searchUser = searchInput.value;
 console.log (searchUser);
})

// function getProfile() {
//     axios.get(APIURL)
//        .then((response)=>{
//           const profile = response.data;
//           console.log(response)

//        });
//        .catch((err) => {
//         console.log(err);
//        });

// };

// getProfile();