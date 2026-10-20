const container = document.getElementById('container');

function nametext(){
    alert('Selected!')
}

fetch('./tours.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Could not load tours.json: ${response.status}`);
        }
        return response.json();
    })
    .then(tours => {
        tours.forEach(tour => {
            const card = document.createElement('div');
            card.className = 'user';
            card.innerHTML = `
            <img src="${tour.image}" alt="${tour.city}, ${tour.country}">
            <div class="text">
                <h1>${tour.title}</h1>
                <h2>${tour.description}</h2>
                <h3>Duration: ${tour.duration_days} days</h3>
                <h3>Price: ${tour.price}</h3>
                <button onclick="nametext()">Select</button>
            </div>
            `;
            container.append(card);
        });
    })
    .catch(error => {
        console.error(error);
        container.textContent = 'Could not load tours.';
    });
//get  img, title, desc, price, button for alert 'accepted/choosen'

            //const title = document.createElement('h1');
            //title.textContent = tour.title;
            //card.append(title);
