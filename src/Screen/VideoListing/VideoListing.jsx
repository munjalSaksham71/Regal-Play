import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetVideos } from "../../actions/videoAction";
import Card from "../../components/Card/Card";
import SideBar from "../../components/SideBar/SideBar";
import "./VideoListing.css";

const VideoListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetVideos())
  }, [])

  const { loading, error, videos } = useSelector((state) => state.video)

  const {byCategory} = useSelector((state) => state.filter)


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
    <div>
      <SideBar filterShown={true} pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
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
