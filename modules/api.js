// API isteklerini yürüten modül.

const apiKey= "1cfdaa1dab347ff5c2bf074fe3d6b321";

//Bu fonksiyonu dışarıya açıyoruz (export).

export async function getWeatherData(sehir) {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${sehir}&appid=${apiKey}&units=metric&lang=tr`;

    const response = await fetch(apiUrl);

    if(!response.ok){

        throw new Error("Şehir bulunamadı veya bir hata oluştu.");
    }

    const data= await response.json();

    return data; // Gelen veriyi doğrudan return ediyoruz.

}