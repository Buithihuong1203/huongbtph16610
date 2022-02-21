import Navigo from "navigo";
import AboutPage from "./pages/about";
import TintucPage from "./pages/tintucpage";
import AdminNews from "./pages/admin/news";
import AdminNewsAdd from "./pages/admin/news/add";
import AdminNewsEdit from "./pages/admin/news/edit";
import DashboardPage from "./pages/dashboard";
import DetailPage from "./pages/detail";
import ProductsPage from "./pages/product";
import DetailProductPage from "./pages/product/detail";
import CartPage from "./pages/cart";
import HomePage from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import AdminProducts from "./pages/admin/products";
import AdminProductsAdd from "./pages/admin/products/add";
import AdminProductsEdit from "./pages/admin/products/edit";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (component, id) => {
    document.querySelector("#app").innerHTML = await component.render(id);
    if (component.afterRender) await component.afterRender();
};
router.on('/admin/*/', () => { }, {
    before(done, match) {
        if (localStorage.getItem('user')) {
            const userId = JSON.parse(localStorage.getItem('user')).user.id;
            if (userId === 1) {
                // render dự trên router

                done();
            } else {
                document.location.href = "/"
            }
        } else {
            document.location.href = "/"
        }
    }
});

router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/products": () => print(ProductsPage),
    "/products/:id": ({ data }) => print(DetailProductPage, data.id),
    "/signin": () => print(Signin),
    "/signup": () => print(Signup),
    "/news/:id": ({ data }) => print(DetailPage, data.id),
    "/admin/dashboard": () => print(DashboardPage),
    "/admin/products": () => print(AdminProducts),
    "/admin/news": () => print(AdminNews),
    "/admin/news/add": () => print(AdminNewsAdd),
    "/admin/news/:id/edit": ({ data }) => print(AdminNewsEdit, data.id),
    "/admin/news/:id": ({ data }) => print(AdminNews, data.id),
    "/cart": () => print(CartPage),
    "/admin/products/add": () => print(AdminProductsAdd),
    "/admin/products/:id/edit": ({ data }) => print(AdminProductsEdit, data.id),
    "/tintucpage": () => print(TintucPage),




});

router.resolve();

