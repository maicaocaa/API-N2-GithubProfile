
const main = document.getElementById('main');
const form  = document.getElementById('form')
const searchInput = document.getElementById('search')

form.addEventListener('submit', function (event){
   event.preventDefault();
   const searchUser = searchInput.value;
   console.log (searchUser);
   getProfile(searchUser);
  })


function getProfile(searchUser) {
    const APIURL = `https://api.github.com/users/${searchUser}`;
    axios.get(APIURL)
       .then((response)=>{
          const profile = response.data;
          createProfileCard (profile);
          console.log (profile);
       })
    //    .catch((error) => {
    //      console.log(error);
    //     });
};

function createProfileCard (profile){
    const createProfileCard =
		` <div class="card">
				<img class="avatar" src="${profile.avatar_url}" alt="profile avatar">
 			 <div class="user-info">
              <h2>${profile.name}</h2>
              <p>${profile.bio}</p>
              <ul>
                 <li>${profile.followers} <strong>Followers</strong> </li>
                 <li> ${profile.following}<strong> Following </strong>git a</li>
                 <li> ${profile.public_repos}<strong>Repos</strong> </li>
              </ul>
              <div class="repo">repositorios</div>
              <div class="repo">repositorios2 </div>
              <div class="repo">repositorios2 </div>
              <div class="repo">repositorios2 </div>
              <div class="repo">repositorios2 </div>
 			 </div>
 		</div>`
         main.innerHTML = createProfileCard;
  }
