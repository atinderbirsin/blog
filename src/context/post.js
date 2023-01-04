import { createContext, useCallback, useEffect, useState } from "react";
import api from '../api/api';

const PostContext = createContext();

function Provider({ children }) {
    const [posts, setPosts] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        getPosts(`${process.env.REACT_APP_BASE_API_URL}?limit=9`);
        getImages(`https://dummyjson.com/products?limit=9`);
    }, []);

    const getPosts = async (url) => {
        const response = await api.get(url);

        if (response.posts.length > 0) setPosts(response.posts);
    }

    const getImages = async (url) => {
        const response = await api.get(url);

        const images = response.products.map((product) => {
            const img = product.images[0];
            return { img };
        })

        if (response.products.length > 0) setImages(images);
    }

    const getStablePosts = useCallback(getPosts, [])

    const valueToShare = {
        posts,
        images,
        getPosts: getStablePosts,
    }

    return <PostContext.Provider value={valueToShare}>
        {children}
    </PostContext.Provider>
};

export { Provider };
export default PostContext;