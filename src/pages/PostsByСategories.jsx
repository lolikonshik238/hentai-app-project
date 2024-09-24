import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostCard from "../components/PostCard";

function PostsByCategory() {

    const [hentaiapp, setHentaiapp] = useState([]);
    const{id} = useParams();
    const[category, setCategory] = useState({});

    useEffect(() => {
        async function fetchCategory() {
            try {
                const response = await axios.get(`https://f7b21878dc835a47.mokky.dev/category/${id}`);
                setCategory(response.data);
            } 
            catch (error) {
                console.log(error)
            }
            
        }
        async function fetchPosts() {
            try {
                const response = await axios.get(`https://f7b21878dc835a47.mokky.dev/hentaiapp`);
                setHentaiapp(response.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        }
        
        fetchPosts();
        fetchCategory();
    }, []);

    return(
        <section className = "mobile-block">
            <div className="mobile-block__header is-succes">
                {category.name}
            </div>
            <div className="all-card-container">
                    {hentaiapp.map((hentaiapp) => {
                        return hentaiapp.category === category.name ? (
                            <PostCard key={hentaiapp.id} hentaiapp={hentaiapp} />
                        ) : null
                    })}
            </div>     
        </section>
    );
}

export default PostsByCategory;