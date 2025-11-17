const apiKey= "1cfdaa1dab347ff5c2bf074fe3d6b321";
const sehirInput= document.querySelector("#sehir-input");
const getirBtn= document.querySelector("#getir-btn");
const weatherContainer= document.querySelector("#weather-container");

async function getWeatherData(sehir) {

    // 1. Kullanıcıya yükleme bildirimi göster

    weatherContainer.innerHTML = '<p class="mesaj">Yükleniyor...</p>';

    // API URL'ini oluştur

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${sehir}&appid=${apiKey}&units=metric&lang=tr`;

    try {

        // 2. Fetch ile API'ye istek at ve cevabı bekle

        const response = await fetch(apiUrl);

        // 3. Cevap başarılı değilse, hata fırlat

        if (!response.ok) {
            throw new Error('Şehir bulunamadı veya bir hata oluştu.');
        }

        // 4. Gelen JSON verisini bekle

        const data = await response.json();

        // 5. Veriyi işleyip arayüzü güncelleyecek fonksiyonu çağır

        updateUI(data);

    } catch (error) {

        // 6. Herhangi bir hata olursa, kullanıcıya hata mesajı göster

        weatherContainer.innerHTML = `<p class="mesaj" style="color: red;">Hata: ${error.message}</p>`;
    }
}

function updateUI(data){

const {name, main, weather} = data; //Gelen veriden ihtiyacımız olanları Destructuring ile alalım.

const iconCode = weather[0].icon;
const iconUrl= `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

weatherContainer.innerHTML= `

<h2 id="sehir-adi">${name}</h2>
<div id="sicaklik">${Math.round(main.temp)}°C</div>
<img src="${iconUrl}" alt="${weather[0].description}">
<p id="durum">${weather[0].description}</p> 
`;

}