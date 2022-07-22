import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Lw9rURSgtNycph7lhBBUqF2rPvVzMlVD2rQ7OxWKHao'
    }
});