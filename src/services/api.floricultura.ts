import axios from 'axios';

/*crio uma variavel api que recebe uma instância personalizada do cliente HTTP do Axios
Onde dentro do objeto especifico a baseURL*/ 
const api = axios.create({
    baseURL: 'http://192.168.1.7:3030'  //endereço IPV4 do meu pc : com a porta que estou rodando o back
})

export default api;