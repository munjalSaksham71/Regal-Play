import Card from "../../components/Card/Card";
import SideBar from "../../components/SideBar/SideBar";
import { useFilter, useVideo } from "../../context/index";
import "./VideoListing.css";

const VideoListing = () => {
  const {
    videoState: { loading, error, videos },
  } = useVideo();

  const {
    filterState: { byCategory }
  } = useFilter();

  const filterVideos = () => {
    let filteredVideos = videos;

    if (byCategory.length) {
      filteredVideos = filteredVideos.filter((vid) => {
        return byCategory.includes(vid.category);
      });
    } else {
      filteredVideos = filteredVideos;
    }
    return filteredVideos;
  };

  const filteredVideosList = filterVideos();

  return (
    <div className="flex-row">
      <SideBar />
      <div className="main_container flex-row">
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {filteredVideosList.map((video) => (
          <Card key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export { VideoListing };
