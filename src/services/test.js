import axios from 'axios';

export default {
    test: async () => {
        console.log('asdkjhvg')
        try {
            let res = await axios.get('/test');
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    }
}