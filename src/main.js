import Navigo from "navigo";
import AboutPage from "./pages/about";
import AdminNews from "./pages/admin/news";
import AdminNewsAdd from "./pages/admin/news/add";
import AdminNewsEdit from "./pages/admin/news/edit";
import DashboardPage from "./pages/dashboard";
import DetailPage from "./pages/detail";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
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
    "/product": () => print(ProductPage),
    "/news/:id": ({ data }) => print(DetailPage, data.id),
    "/signin": () => print(Signin),
    "/signup": () => print(Signup),
    "/news/:id": ({ data }) => print(DetailPage, data.id),
    "/admin/dashboard": () => print(DashboardPage),
    "/admin/products": () => console.log("admin product"),
    "/admin/news": () => print(AdminNews),
    "/admin/news/add": () => print(AdminNewsAdd),
    "/admin/news/:id/edit": () => print(AdminNewsEdit),
    "/admin/news/:id": ({ data }) => print(AdminNews, data.id),


});

router.resolve();

