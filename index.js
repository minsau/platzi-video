import  React  from 'react';
import ReactDOM from 'react-dom';
import Media from './src/playlist/components/media';

const appContainer = document.getElementById('app');
// const holaMundo = <h1>Hola Mundo! Modified</h1>;
ReactDOM.render(<Media 
    type="video"
    image="./images/covers/bitcoin.jpg"
    title="¿Que es un bitcoin?"
    author="Saúl Gómez Navarrete" />, appContainer);