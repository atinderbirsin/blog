import { useContext } from "react";
import PostContext from "../context/post";

function usePost() {
    return useContext(PostContext);
}

export default usePost;