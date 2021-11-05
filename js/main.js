const fila = document.querySelector('.container-carousel');
const movies = document.querySelectorAll('.movie');

const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

arrowRight.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});

arrowLeft.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});

/*****************************/

const numberPage = Math.ceil(movies.length / 5);
for (let i = 0; i < numberPage; i++) {
    const indicador = document.createElement('button');

    if (i === 0) {
        indicador.classList.add('active');
    }

    document.querySelector('.indicador').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicador .active').classList.remove('active');
        e.target.classList.add('active');
    });
}


/*************************/

movies.forEach((movie) => {
    movie.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            movies.forEach(movie => movie.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    });
});

fila.addEventListener('mouseleave', () => {
    movies.forEach(movie => movie.classList.remove('hover'));
});