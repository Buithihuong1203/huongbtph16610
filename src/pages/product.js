import Footer from "../components/footer";
import Header from "../components/header";
const ProductPage = {
    render() {
        return `
        <div class="max-w-5xl mx-auto">
        <header>
        ${Header.render()}
        </header>
        <main>
        <img src="https://caodang.fpt.edu.vn/wp-content/uploads/thumbnail_Banner-Web.png" href="" class="">
        <h2 class="text-center">HÀ NỘI</h2>
        
        </main>

        <footer>
            ${Footer.render}
        </footer>
        </div>
        
        `;
    },
};
export default ProductPage;