import news from "../data";
import Header from "../components/header";
import Footer from "../components/footer";

const DetailPage = {
    render(id) {
        const result = news.find((post) => post.id === id);
        return `
        <div class="max-w-5xl mx-auto ">
        <header>
            ${Header.render()}
        </header>
        <main>
            <div class="text-2xl text-white bg-orange-600"></div>
            <h1 class="font-semibold italic">${result.title}</h1>
            <img src="${result.img}" class="max-w-5xl mx-auto"/>
            <p>${result.desc}</p>
        </main>    
        <footer>
            ${Footer.render}
        </footer>
            </div>
        `;
    },
};
export default DetailPage;