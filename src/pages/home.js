import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import News from "../components/news";
import Form from "../components/form";

const HomePage = {
    async render() {
        return /* html */`
            <div class="max-w-5xl mx-auto">
                <header>
                    ${Header.render()}
                </header>
                <main>
                    <div class="banner">
                        ${Banner.render()}
                    </div>
                    <div class="news">
                        ${await News.render()}
                    </div>
                    <div>
                        ${Form.render()}
                    </div>
                </main>
                <footer>
                    ${Footer.render()}
                </footer>
            </div>
            
        `;
    },
    afterRender() {
        Header.afterRender()
    }
};
export default HomePage;