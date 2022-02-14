import { get } from "../api/posts";
import Header from "../components/header";
import Footer from "../components/footer";

const DetailPage = {
    async render(id) {
        const { data } = await get(id);
        return `
        <div class="max-w-5xl mx-auto ">
        <header>
            ${Header.render()}
        </header>
        <main>
            <div class="text-2xl text-white bg-orange-600"></div>
            <h1 class="font-semibold italic">${data.title}</h1>
            <img src="${data.img}" class="max-w-5xl mx-auto"/>
            <p>${data.desc}</p>
        </main>    
        <footer>
            ${Footer.render}
        </footer>
            </div>
        `;
    },
};
export default DetailPage;