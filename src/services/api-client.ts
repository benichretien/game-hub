import axios from "axios"

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: 'a99f38aa0b0c48dfbb681b69687805ed'
    }
})