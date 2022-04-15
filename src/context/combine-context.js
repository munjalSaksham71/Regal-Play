import { AuthContextProvider } from "./auth-context"
import { FilterContextProvider } from "./filter-context"
import { VideoContextProvider } from "./video-context"

export const CombineContextProvider = ({children}) => {
    return (
        <VideoContextProvider>
            <FilterContextProvider>
                <AuthContextProvider>
                    {children}
                </AuthContextProvider>
            </FilterContextProvider>
        </VideoContextProvider>
    )
}