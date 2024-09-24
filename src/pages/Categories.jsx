import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

function Categories() {

    
    const[category, setCategory] = useState([]);

    useEffect(() => {
        async function fetchCategory() {
            try {
                const response = await axios.get(`https://f7b21878dc835a47.mokky.dev/category`);
                setCategory(response.data);
            } 
            catch (error) {
                console.log(error)
            }
        }
        fetchCategory();
    }, []);

    return (
        <section className="mobile-block">
            <div className="mobile-block__header is-warning">
                Категории
            </div>
            <div className="container">
                <div className="category-row">
                    <Link to="/" className="category-item">
                        <span className="category-title">Все игры</span>
                    </Link>
                    {category.map((category) => (
                        <Link to={`/categories/hentaiapp/${category.id}`} className="category-item">
                            <span className="category-title">{category.name}</span>
                        </Link>
                    ))}
                    
                </div>
            </div>
        </section>
    );
}

export default Categories;
