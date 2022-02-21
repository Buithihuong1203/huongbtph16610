import { getAll } from "../../api/products";
import Header from "../../components/header";
import Footer from "../../components/footer";
const ProductsPage = {
    async render() {
        const { data } = await getAll();
        console.log(data);
        return `
        <div class="mx-auto">
                <header>
                    ${Header.render()}
                </header>
                <main>
                    <h2 class="font-semibold text-blue-900 my-4 uppercase text-2xl">DỰ ÁN ĐANG RAO BÁN</h2>
                    <div class="grid grid-cols-3 gap-8">
                        ${data.map((product) => `
                            <div class="border p-3 px-20">
                                <a href="/#/products/${product.id}"><img src="${product.img}" alt="" class="w-full h-64"/></a>
                                <h3 class="my-3"><a href="/#/products/detail/${product.id}" class="font-semibold text-orange-500 text-lg">${product.name}</a></h3>
                                <p class="hidden">${product.desc}</p>
                            
                            </div> `).join("")}
                    </div>
                </main>
                <footer>
                    ${Footer.render()}
                </footer>
                           
                </div>
        `;
    },
};
export default ProductsPage;