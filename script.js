// for the newsletter in the home page
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const responseMessage = document.getElementById('response-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;

        if (email) {
            responseMessage.textContent = 'Thank you for joining!';
            responseMessage.style.color = 'green';

            form.reset();
        } else {
            responseMessage.textContent = 'Please enter a valid email address.';
            responseMessage.style.color = 'red';
        }
    });

// for the image slider in the homepage
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 3000); 
});

// for the countdown timer in the events page
const countdown = () => {
    const countDate = new Date('April 10, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
};

setInterval(countdown, 1000);

// for the weather API's in the events page

document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'f9286b355da3e83c51a895b01dfa6989';  

    // weather for boom, belgium
    const apiUrlTomorrowland = `https://api.openweathermap.org/data/2.5/weather?q=Boom,BE&appid=${apiKey}&units=metric`;
    fetch(apiUrlTomorrowland)
        .then(response => response.json())
        .then(data => {
            document.getElementById('api-data-tomorrowland').innerText = `Weather: ${data.weather[0].description}, Temperature: ${data.main.temp}°C`;
        })
        .catch(error => console.error('Error fetching weather data:', error));

    // weather for glastonbury UK
    const apiUrlGlastonbury = `https://api.openweathermap.org/data/2.5/weather?q=Pilton,GB&appid=${apiKey}&units=metric`;
    fetch(apiUrlGlastonbury)
        .then(response => response.json())
        .then(data => {
            document.getElementById('api-data-glastonbury').innerText = `Weather: ${data.weather[0].description}, Temperature: ${data.main.temp}°C`;
        })
        .catch(error => console.error('Error fetching weather data:', error));

    // weather for Indio US
    const apiUrlCoachella = `https://api.openweathermap.org/data/2.5/weather?q=Indio,US&appid=${apiKey}&units=metric`;
    fetch(apiUrlCoachella)
        .then(response => response.json())
        .then(data => {
            document.getElementById('api-data-coachella').innerText = `Weather: ${data.weather[0].description}, Temperature: ${data.main.temp}°C`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
});


    
