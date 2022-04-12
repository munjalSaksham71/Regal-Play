import axios from "axios";
import { useEffect, useState } from "react"
import Categories from "../../components/Category/Categories";

const LandingPage = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const { data: {categories} } = await axios.get('/api/categories');
                setCategories(categories);
                setLoading(false);
            } catch (error) {
                setError("Server isn't responding. Please try again after sometime");
                setLoading(false);
            }
        })()
    }, [])


    return (
        <div>
            {loading && <div>Loading....</div>}
            {categories && <Categories categories={categories} />}
            {error && <div>{error}</div>}
        </div>
    )
}

export default LandingPage
