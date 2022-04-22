import { AuthContextProvider } from "./auth-context";
import { FilterContextProvider } from "./filter-context";
import { HistoryContextProvider } from "./history-context";
import { LikesContextProvider } from "./likes-context";
import { PlaylistContextProvider } from "./playlist-context";
import { VideoContextProvider } from "./video-context";
import { WatchlistContextProvider } from "./watchlist-context";

export const CombineContextProvider = ({ children }) => {
  return (
    <VideoContextProvider>
      <FilterContextProvider>
        <AuthContextProvider>
          <PlaylistContextProvider>
            <LikesContextProvider>
              <WatchlistContextProvider>
                <HistoryContextProvider>{children}</HistoryContextProvider>
              </WatchlistContextProvider>
            </LikesContextProvider>
          </PlaylistContextProvider>
        </AuthContextProvider>
      </FilterContextProvider>
    </VideoContextProvider>
  );
};
