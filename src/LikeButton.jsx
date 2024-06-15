import { useState } from "react";

export default function LikeButton() {

    let [isLiked, setisLiked] = useState(false);

    function toggleLiked() {
        setisLiked(!isLiked);
    }


    let styles = {color : "red"};
    return (
        <>
            <p onClick={toggleLiked}>
                {
                    isLiked ? <i className="fa-solid fa-heart" style={styles}></i> : <i className="fa-regular fa-heart"></i>
                }
            </p>
        </>
    );
}