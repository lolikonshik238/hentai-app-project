import { Link } from "react-router-dom";
import BackIcon from "../assets/images/Back.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function PostDetail() {
    const { id } = useParams();
    const [hentaiapp, setHentaiapp] = useState({}); // Инициализация как null

    useEffect(() => {
        async function fetchPost() {
            try {
                const response = await axios.get(`https://f7b21878dc835a47.mokky.dev/hentaiapp/${id}`);
                console.log('API Response:', response.data); // Логируем ответ API
                setHentaiapp(response.data);
            } catch (error) {
                console.log('API Error:', error);
            }
        }
        fetchPost();
    }, [id]);


    return (
        <section className="mobile-block">
            
                <Link to="/" className="back-button">
                    <img src={BackIcon} alt="Иконка Назад" />
                    Назад
                </Link>
            
            <div className="container">
                <div className="card-content">
                    
                    <h3 className="card-title">{hentaiapp.title || "Без заголовка"}</h3>
                    <p className="description">
                        {hentaiapp.description || "Описание недоступно"}
                    </p>
                    
                    <img src={hentaiapp.image || "default-image.png"} alt={hentaiapp.title || "Изображение"} />
                    <a href={hentaiapp.link} className="link" target="_blank" rel="noopener noreferrer">
                        Источник: <strong>{hentaiapp.link || "Без ссылки"}</strong>
                    </a>

                </div>
            </div>
        </section>
    );
}

export default PostDetail;
