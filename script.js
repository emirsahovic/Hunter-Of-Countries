const form = document.getElementById('form');
const search = document.getElementById('search');
const content = document.getElementById('content');

async function getCountry(country) {
    try {
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
        const [data] = await response.json();
        console.log(data);
        createCountry(data);
    } catch (err) {
        createError('Please enter a valid country name!')
    }
}

function createCountry(country) {
    const contentHTML = `
    <div>
        <img src="${country.flag}" alt="">
    </div>
        <h2>Capital: ${country.capital}</h2>
        <h3>Region: ${country.region}</h3>
        <h4>Population: ${country.population}</h4>`

    content.innerHTML = contentHTML;
}

function createError(msg) {
    const contentHTML = `
    <h2 style="padding: 1.5rem 0; color: #fff; margin-top: 1.5rem;">${msg}</h2>`;

    content.innerHTML = contentHTML;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let country = search.value;

    if (country) {
        getCountry(country);
        search.value = '';
    }
})