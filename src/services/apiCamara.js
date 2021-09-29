import axios from 'axios';

const apiFilmes = axios.create({
    baseURL: 'https://dadosabertos.camara.leg.br/api'
});

export default apiFilmes;