import axios from 'axios';
// create an instance of axios client w/ default properties

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID g17OidwSfipFnxLvTQ46ruYn2rf9BOk4Z2z0mngoxIg'
    }
});