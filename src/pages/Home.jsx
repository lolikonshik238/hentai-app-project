import PostList from "../components/PostList";

function Home() {
    return (
        <section className="mobile-block">
            <div className="mobile-block__header is-secondary">
                ВСЕ ИГРЫ
            </div>
            <PostList />
        </section>
    );
}

export default Home;
