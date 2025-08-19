// varibles
let counter = 0;
const colors = ['#FF3333', '#33FF33', '#3333FF', '#FFFF33', '#FF33FF']
// DOM
document.addEventListener('DOMContentLoaded', () => {
    const arBox = document.getElementById('arBox');
    const marker = document.getElementById('marker');
    const counterDispley = document.getElementById('counter');
    const colorBtn = document.getElementById('changeColor');
    // evento
    marker.addEventListener('markerFound', () => {
       counter ++;
        counterDispley.textContent = counter;
    })
    // logic
    //evento
     marker.addEventListener('markerLost', () => {
        console.log('marcdor se perdio')
     });
    // cambiar el color
    colorBtn.addEventListener('click', () => {
        const randomColor = colors[Math.floor(Math.random()*colors.length)]
        arBox.setAttribute('material', 'color', randomColor);
    });
});
