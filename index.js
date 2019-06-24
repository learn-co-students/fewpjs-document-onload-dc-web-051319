document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    let text = document.getElementById('text');
    text.textContent = "This is really cool!";
});