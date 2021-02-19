import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {
    let PostsElement = props.posts.map( p => <Post message={p.message} count={p.count}/> );
    let newPostElement = React.createRef();
    let onAddPost = () =>{
       props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.postsBlock}>
           <h3>My Posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement}
                          cols="60" rows="3" value={props.newPostText} /> <br/>
                <button onClick={onAddPost} className={s.button}>Add Post</button>
            </div>
            <div className={s.posts}>
                {PostsElement}
            </div>
        </div>
    );
};

export default MyPosts;
