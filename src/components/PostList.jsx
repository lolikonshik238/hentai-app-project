import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import axios from "axios";

function PostList() {
    const [hentaiapp, setHentaiapp] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get('https://f7b21878dc835a47.mokky.dev/hentaiapp');
                setHentaiapp(response.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        }
        
        fetchPosts();
    }, []);

    return (
        <div className="all-card-container">
            {hentaiapp.length > 0 ? (
                hentaiapp.map((hentaiapp) => (
                    <PostCard key={hentaiapp.id} hentaiapp={hentaiapp} />
                ))
            ) : (
                <div>Loading...</div> // Можно добавить индикатор загрузки
            )}
        </div>
    );
}

export default PostList;
