
const APIURL = `https://api.github.com/users/`;
const main = document.getElementById('main');
const form  = document.getElementById('form')
const searchInput = document.getElementById('search')

form.addEventListener('submit', function (event){
   event.preventDefault();
   const user = searchInput.value;
   console.log (user);
   getProfile(user);
   searchInput.value=''
  })

 function getProfile(user) {
    axios.get(APIURL + user)
       .then((response)=>{
          const profile = response.data;  
          createProfileCard (profile);
          getRepo(user)     
        })
       
      .catch((error) => {
         console.log(error);
         main.innerHTML = '<div class="card"><h1>No profile whith this username</h1></div>'
        });
};

function getRepo (user) {
   axios.get(APIURL + user + '/repos?sort=created') // ?sort=created para ordenarlos por creacion
   .then((response)=>{
      const repos = response.data
      console.log (repos);
      createRepoCard (repos);
      })
   .catch((error) => {
      console.log(error);
      main.innerHTML += '<div class="card"><h1>No repos</h1></div>'
    });  
   }

function createProfileCard (profile){
    const createProfileCard =
		` <div class="card">
				<img class="avatar" src="${profile.avatar_url}" alt="${profile.name}">
 			 <div class="user-info">
              <h2>${profile.name}</h2>
              <p>${profile.bio}</p>
              <ul>
                 <li>${profile.followers} <strong>Followers</strong> </li>
                 <li> ${profile.following}<strong> Following </strong></li>
                 <li> ${profile.public_repos}<strong>Repos</strong> </li>
              </ul>
              <div id="repo"></div>
 			 </div>
 		</div>`
         main.innerHTML = createProfileCard;
  }

  function createRepoCard (repos){
   const repoCard = document.getElementById('repo')
   repos
      .slice(0,5)
      .forEach (repo =>{
       repoCard.innerHTML += `<a class="repo" href="${repo.html_url}" target="_blanck"> ${repo.name} <a/>`
      })
  }

