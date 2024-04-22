import { robots } from "./robots.js";

export const getRobotById = (id) =>{
    return robots.find( function(robot){
        return robot.id === id
    });
}

export function getRobotsBySeries (serie) {
    return robots.filter(function(robot){
        return robot.series === serie
    });
}

const createCard = (data) => {
    const card = `
        <div class="col-lg-4 col-md-6 mb-4">
          <div class = "card">
            <img src="${data.avatar}" class="card-img-top" alt="${data.name}">
            <div class="card-body">
                <h5 class="card-tittle">${data.name}</h5>
                <p class="card-text">Weapon/Type: ${data.weapon}</p>
            </div>
          </div>
        </div>
    `;
    return card;
};

export const renderCards = (data, containerId) => {
    const container = document.getElementById(containerId);
        data.forEach(item => {
            container.innerHTML += createCard(item);
        });
}