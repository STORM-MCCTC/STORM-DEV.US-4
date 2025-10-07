let isDark = false;

function toggleBackground() {
    const body = document.body;
    const button = document.querySelector('button');

    if (isDark) {
        body.style.backgroundColor = '#FFFFFF';
        body.style.color = '#1F1F1F';
        button.style.setProperty('--button-hover-text', '#FFFFFF');
    } else {
        body.style.backgroundColor = '#1F1F1F';
        body.style.color = '#FFFFFF';
        button.style.setProperty('--button-hover-text', '#1F1F1F');
    }
    isDark = !isDark;
}

document.addEventListener('DOMContentLoaded', toggleBackground);
