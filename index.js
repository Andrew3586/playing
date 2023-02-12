const coinGecko = document.querySelector
("#coin-gecko");

function fetchCoinGecko() {
    fetch("https://api.coingecko.com/api/v3/exchange_rates")
    .then((res) => res.json())
    .then((data) => {
        data.rates.forEach((post) => {
            coinGecko.innerHTML += `

            <div class="coin-gecko-card"></div>
            <h3>${post.name}</h3>
            <p>${post.unit}</p>
            <p>${post.value}</p>
            <p>${post.type}</p>
            `;
            
        });

    })
    .catch((err) => {

    });
}

fetchCoinGecko();
