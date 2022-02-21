import Header from "../components/header";
import Footer from "../components/footer";
import { getAll } from "../api/posts";

const TintucPage = {
    async render(id) {
        const { data } = await getAll(id);
        return `
        <div class="mx-auto">
            <header>
                ${Header.render()}
            </header>
            <main>
            <div class="bg-cyan-50 px-20" style=" background-image: url(http://dongshop158.webmienphi.vn/userfiles/img/606849/2.jpg)">
            <h2 class="font-semibold text-blue-900 my-4 uppercase text-2xl text-center">Lĩnh vực hoạt động</h2>
            <div class="grid grid-cols-3 gap-8">
                ${data.map((post) => `
                <div class="border p-3">
                    <a href="/news/${post.id}"><img src="${post.img}" alt="" class="w-full h-64"/></a>
                    <h3 class="my-3"><a href="/news/${post.id}" class="font-semibold text-orange-800 text-lg">${post.title}</a></h3>
                    <p class="hidden">${post.desc}</p>
                </div>
                `).join("")}
                </div>
                </div>

                </main>
                <footer>
                   ${Footer.render()}
                </footer>
        
    `
    }
}
export default TintucPage;