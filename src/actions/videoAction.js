import axios from "axios";

export const getVideos = () => async (videoDispatch) => {
    try {
        const { data } = await axios.get('/api/videos');
        videoDispatch({type: 'SUCCESS', payload: data.videos});
    } catch (error) {
        videoDispatch({type: 'ERROR'});
    }
}