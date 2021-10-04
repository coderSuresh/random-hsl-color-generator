function changeBg() {
    const title = document.getElementById('title');
    const body = document.getElementById('body');

    let randomColor = 'hsl(' + Math.floor(Math.random() * 360) + ', ' + Math.floor(Math.random() * 100) + '%, ' + Math.floor(Math.random() * 100) + '%)';

    title.innerHTML = 'Current background color is <br>' + randomColor;
    body.style.background = randomColor;
}