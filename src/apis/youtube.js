import axios from "axios";

const KEY = 'AIzaSyCq7fZCWZRov49TXr8jKXObUvqbzdPj7fE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})
