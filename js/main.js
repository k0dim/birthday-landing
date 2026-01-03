// Анимация блоков при скролле
document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-section, .program-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    faders.forEach(f => observer.observe(f));
});

// Яндекс Карта
ymaps.ready(() => {
    const map = new ymaps.Map("map", { center:[53.430400,50.097570], zoom:17 });
    const placemark = new ymaps.Placemark([53.430400,50.097570], { balloonContent:'Домик у озера' });
    map.geoObjects.add(placemark);
    map.behaviors.enable('scrollZoom');
});

// Telegram RSVP
function sendRSVP(){
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const status = document.getElementById('rsvp-status');

    if(!name || !phone){
        status.innerText = "Пожалуйста, заполните имя и контакт.";
        return;
    }

    const botToken = '5914196979:AAGh5xeL_4OkKaK_3q1NPZ_k_r2dllbGqHE';
    const chatId = '5914196979';
    const text = `Новый RSVP:\nИмя: ${name}\nКонтакт: ${phone}\nСообщение: ${message}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`)
    .then(resp => resp.json())
    .then(data => {
        if(data.ok){
            status.innerText = "Спасибо! Ваше участие подтверждено.";
            document.getElementById('name').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('message').value = '';
        } else {
            status.innerText = "Произошла ошибка. Попробуйте позже.";
        }
    })
    .catch(err => {
        console.error(err);
        status.innerText = "Произошла ошибка. Попробуйте позже.";
    });
}

// Изменение фона навигации при скролле
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if(window.scrollY > 50){
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Мини-параллакс для секций
window.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach(section => {
        const offset = window.pageYOffset;
        section.style.backgroundPositionY = offset * 0.2 + 'px';
    });
});