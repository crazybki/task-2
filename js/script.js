const apiUrl = 'https://akabab.github.io/starwars-api/api/all.json';

const container = document.querySelector('.flex-container');

async function fetchApi() {
    const response = await fetch(apiUrl);

    const apiReq = await response.json();
    console.log(apiReq);

    apiReq.forEach(characther => {
        container.innerHTML += `<div class="flex-container__child">
                                        <h2 class="flex-container__heading">${characther.name}</h2>
                                        <img class="flex-container__image" src="${characther.image}" alt="images of different characthers from Star Wars universe">
                                        <p class="flex-container__txt">From: ${characther.homeworld}</p>
                                        <p class="flex-container__txt">Specie: ${characther.species}</p>
                                    </div>`
    });
}

fetchApi();
