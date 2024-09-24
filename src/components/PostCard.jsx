import { Link} from "react-router-dom";
import axios from "axios";

function PostCard({ hentaiapp }) {
    // Проверка на undefined перед доступом к свойствам объекта
    if (!hentaiapp) {
        return <div>Loading...</div>; // Иначе показываем индикатор загрузки
    }
    

    return (
        

            <Link to={`/hentaiapp/${hentaiapp.id}`} className="card-block">
                <div className="card-container">
                    <div className="card">
                        <img src={hentaiapp.image || "default-image.png"} alt={hentaiapp.title || "Изображение"} />
                    </div>
                    <div className="card-content">
                        <h3 className="card-title">{hentaiapp.title || "Без заголовка"}</h3>
                        <Link to="/categories" className="category">
                            <span className="category-title">{hentaiapp.category}</span>
                        </Link>

                        
                    </div>
                </div>
            </Link>

        // <Link to={`/hentaiapp/${hentaiapp.id}`} className="card-container">
        //     <div className="container">
        //         <h3 className="card-title">{hentaiapp.title || "Без заголовка"}</h3>
        //         <span className="category">{hentaiapp.category || "Без категории"}</span>
        //         <img src={hentaiapp.image || "default-image.png"} alt={hentaiapp.title || "Изображение"} />
        //     </div>
        // </Link>
    );
}

export default PostCard;

