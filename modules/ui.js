//DOM manipülasyonu ve arayüz güncelleme modülü.

//Arayüzü güncelleyecek DOM elementlerini bu modülün içinden seçiyoruz.

const weatherContainer = document.querySelector("#weather-container");

//Fonskyionları export ediyoruz.

export function updateUI(data){

    const {name, main, weather} = data;
    const iconCode = weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    weatherContainer.innerHTML= `
    
    <h2 id="sehir-adi">${name}</h2>
    <div id="sicaklik">${Math.round(main.temp)}°C</div>
    <img src="${iconUrl}" alt="${weather[0].description}">
    <p id="durum">${weather[0].description}</p>
    
    `;

}

export function showLoading(){

    weatherContainer.innerHTML = '<p class="mesaj">Yükleniyor...</p>';

}

export function showError(message){

    weatherContainer.innerHTML = `<p class="mesaj" style="color: red;">Hata: ${message}</p>`;

}