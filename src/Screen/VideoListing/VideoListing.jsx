import Card from '../../components/Card/Card';
import SideBar from '../../components/SideBar/SideBar';
import { useVideo } from '../../context/index'
import './VideoListing.css'

const VideoListing = () => {
    const { videoState: {loading, error, videos} } = useVideo();
    console.log(videos, loading, error);
    return (
        <div className="flex-row">
            <SideBar />
            <div className="main_container flex-row">
                {videos.map((video) => (
                    <Card video={video} />
                ))}
            </div>
        </div>
    )
}

export default VideoListing
