console.log('hello world');

const body = document.querySelector('body');

const title = document.createElement('h1');
title.textContent = 'Etch-a-Sketch';
body.appendChild(title);

const container = document.getElementById('container');
const gridSize = 16;

function divGrid () {

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        container.appendChild(gridItem);
    }
}