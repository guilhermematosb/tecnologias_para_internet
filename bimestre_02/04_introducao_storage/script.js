document.addEventListener('DOMContentLoaded', () => {
    const darkThemeButton = document.getElementById('dark-theme');
    const lightThemeButton = document.getElementById('light-theme');

    // Define o tema inicial com base no LocalStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.className = savedTheme;
    }

    darkThemeButton.addEventListener('click', () => {
        document.body.className = 'dark';
        localStorage.setItem('theme', 'dark');
    });

    lightThemeButton.addEventListener('click', () => {
        document.body.className = 'light';
        localStorage.setItem('theme', 'light');
    });
});

// const form = document.getElementById('contact-form');
// const nameInput = document.getElementById('name');
// const phoneInput = document.getElementById('phone');
// const errorMessage = document.getElementById('error-message');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const name = nameInput.value.trim();
//     const phone = phoneInput.value.trim();

//     if (name === '' || phone === '') {
//         errorMessage.textContent = 'Both fields are required.';
//         return;
//     }

//     if (!/^\d{10}$/.test(phone)) {
//         errorMessage.textContent = 'Phone number must be 10 digits.';
//         return;
//     }

//     // Form is valid
//     errorMessage.textContent = '';
//     // Submit the form or handle the data
// });
