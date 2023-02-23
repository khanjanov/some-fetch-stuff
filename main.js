let link = document.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("type", "text/css");
link.setAttribute(
  "href",
  "https://fonts.googleapis.com/css2?family=Acme&family=Clicker+Script&family=Fredoka+One&family=Indie+Flower&family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Labrada:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Permanent+Marker&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Shantell+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Zeyada&display=swap"
);
document.head.appendChild(link);
let body = document.querySelector("body");
let container = document.createElement("div");
let wrapper = document.createElement("div");
container.append(wrapper);
body.append(container);
body.style = `margin:0; padding:0; box-sizing:border-box; text-decoration:none; list-style-type:none;`;
container.style = `width:100%; height:100vh; display: flex; justify-content: center; align-items: center; margin:0 auto;`;
wrapper.style = `width: 400px; display:flex; flex-direction:column; justify-content:center; align-items:center; gap:12px; font-family: 'Fredoka One', cursive; color: #183858;  border: 1px solid #9dc1b8; border-radius: 12px; background-color:#9dc1b8; box-shadow: 8px 8px 20px #323f52; padding: 16px 0;`;
fetch("https://api.github.com/users/amilabdullazadeh")
  .then((res) => res.json())
  .then((data) => {
    let name = document.createElement("h1");
    name.innerText = `${data.name}`;
    name.style = `font-weight: 500; color: #183858; margin:0;`;
    let pp = document.createElement("img");
    pp.src = `${data.avatar_url}`;
    pp.style = `width:200px; height:200px; border-radius:50%; border:1px solid`;
    pp.addEventListener("mouseover", () => {
      pp.style = `width:200px; height:200px; border-radius:50%; border:1px solid; transition: 0.5s all ease; transform: scale(1.12);`;
    });
    pp.addEventListener("mouseleave", () => {
      pp.style = `width:200px; height:200px; border-radius:50%; border:1px solid; transition: 0.5s all ease;`;
    });
    let bio = document.createElement("h4");
    bio.innerText = `${data.bio}`;
    bio.style = `font-weight: 400; margin:0;`;
    let location = document.createElement("h5");
    location.innerText = `${data.location}`;
    location.style = `margin:0;`;
    let linkDiv = document.createElement("div");
    let gitLink = document.createElement("a");
    gitLink.href = `${data.html_url}`;
    gitLink.innerText = `github.com/AmilAbdullazadeh`;
    linkDiv.append(gitLink);
    gitLink.style = `text-decoration:none; color: #183858;`;
    let followDiv = document.createElement("div");
    followDiv.style = `display:flex; flex-direction : column; gap: 8px;`;
    let followers = document.createElement("a");
    followers.href = `https://github.com/AmilAbdullazadeh?tab=followers`;
    followers.style = `display:block; text-decoration:none; color: #183858;`;
    followers.innerText = `folowers : ${data.followers}`;
    let following = document.createElement("a");
    following.innerText = `following : ${data.following}`;
    following.href = `https://github.com/AmilAbdullazadeh?tab=following`;
    following.style = `display:block; text-decoration:none; color: #183858;`;
    followDiv.append(followers, following);
    let publicReposDiv = document.createElement("div");
    let publicRepos = document.createElement("a");
    publicRepos.href = `https://github.com/AmilAbdullazadeh?tab=repositories`;
    publicRepos.style = `text-decoration:none; color: #183858;`;
    publicReposDiv.append(publicRepos);
    publicRepos.innerText = `public repos : ${data.public_repos}`;
    wrapper.append(name, pp, bio, location, linkDiv, publicReposDiv, followDiv);
  });
