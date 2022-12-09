let div = document.querySelector("div");

fetch("users.json")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((response) => {
      response.forEach((u) => {
        impagina(u);
      });
  });


function impagina(user) {
    div.innerHTML += getHtmlUser(user);
}

function getHtmlUser(user) { //ritorna l'html per il div dell'user ricevuto come parametro
    let s= `<div class="container d-flex flex-column align-items-center bg-white border border-light rounded py-4 m-2">` +
        `<img src="${user.profileURL}" alt="imgUser" class=" bg-secondary img-fluid rounded-circle w-25 p-3 m-2"/>` +
        `<h3 class="m-2">${user.firstName} ${user.lastName}</h3>` +
        `<a href="mailto:${user.email}" class="m-2">${user.email}</a>` +
        `</div>`;
    return s;
}


