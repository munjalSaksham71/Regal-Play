import { AuthContextProvider } from "./auth-context";
import { FilterContextProvider } from "./filter-context";
import { HistoryContextProvider } from "./history-context";
import { LikesContextProvider } from "./likes-context";
import { VideoContextProvider } from "./video-context";
import { WatchlistContextProvider } from "./watchlist-context";

export const CombineContextProvider = ({ children }) => {
  return (
    <VideoContextProvider>
      <FilterContextProvider>
        <AuthContextProvider>
          <LikesContextProvider>
            <WatchlistContextProvider>
              <HistoryContextProvider>
              {children}
              </HistoryContextProvider>
            </WatchlistContextProvider>
          </LikesContextProvider>
        </AuthContextProvider>
      </FilterContextProvider>
    </VideoContextProvider>
  );
};
