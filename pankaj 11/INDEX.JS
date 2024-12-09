
const url = "https://restcountries.com/v3.1/all";
const element = document.getElementById("container");


async function fetchdata() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        for (let i = 0 ; i<data.length; i++) {
        const value = data[i];
        const html = `
        
        
        
        <div class='card'>
        <img src=${value?.flags?.png} />
        <h2>Name : ${value?.name?.common} </h2>
        <div class='p'>
            <h3>Region : 
            ${value?.region}</h3>
            <div class='p'>
            <h4>Population : 
            ${value?.population}</h4>
            <div class='p'>
            <h4>Capital : ${value?.capital}</h4>
            </div>
            </div>
            </div>
            </div>
            `;

            element.innerHTML += html;

        }

    } catch (error) {
        console.log("---------error----------:, error.message");
    }
    
}