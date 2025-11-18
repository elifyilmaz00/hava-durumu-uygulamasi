// Modüllerden ihtiyacımız olan fonksiyonları import ediyoruz.

import {getWeatherData} from "./modules/api.js";
import {updateUI, showLoading, showError} from "./modules/ui.js";

//DOM elementlerini seçiyoruz.
const sehirInput= document.querySelector("#sehir-input");
const getirBtn= document.querySelector("#getir-btn");

async function handleSearch(sehir){

    const sehir = sehirInput.value.trim();
    if(!sehir){
        alert("Lütfen bir şehir adı girin.");
        return;
    }

    try{
        const weatherData= await getWeatherData(sehir); //API modülünden veriyi al
        updateUI(weatherData); //UI modülünden arayüzü güncelle

    }

    catch(error){
        showError(error.message); //Arayüz modülü ile hatayı göster
    }
}


//Olay dinleyici ekle

getirBtn.addEventListener('click', () => {
    const sehir = sehirInput.value.trim();
    if (sehir) {
        getWeatherData(sehir);
    } else {
        alert("Lütfen bir şehir adı girin.");
    }
});

// Bonus: Enter tuşuna da basalım
sehirInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        getirBtn.click(); // Butonun click olayını programatik olarak tetikle
    }
});

