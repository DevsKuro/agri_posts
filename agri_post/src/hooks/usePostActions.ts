import { deletePostById, filterByName, addPost, Post, PostWithId, getAll } from "../store/posts/slice";
import { useAppDispatch } from "./store";


export const usePostActions = () => {

    const dispatch = useAppDispatch();

    const getAllPosts = (posts: PostWithId[]) => {
        dispatch(getAll(posts));    
    }
    const deletePost = (id: string) => {
        dispatch(deletePostById(id));
    };

    const filteredPosts = (name: string) => {
        dispatch(filterByName(name));
    };
    
    const restFilter = () => {
        dispatch(restPostFilter());
    };

    const createPost = ({ name, details }: Post) => {
        dispatch(addPost({ name, details }));
    }

    return {
        deletePost,
        filteredPosts,
        createPost,
        getAllPosts,
        restFilter
    };
}

