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
const router = new Navigo("/", { linksSelector: "a" });

const print = async (content) => {
    document.querySelector("#app").innerHTML = await content.render();
    if (content.afterRender) await content.afterRender();
};


router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/product": () => print(ProductPage),
    "/news/:id": ({ data }) => print(DetailPage, data.id),
    "/signin": () => print(Signin),
    "/signup": () => print(Signup),
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailPage.render(id))

    },
    "/admin/dashboard": () => print(DashboardPage),
    "/admin/products": () => console.log("admin product"),
    "/admin/news": () => print(AdminNews),
    "/admin/news/add": () => print(AdminNewsAdd),
    "/admin/news/:id/edit": () => print(AdminNewsEdit),
    "/admin/news/:id": ({ data }) => {
        const { id } = data;
        print(AdminNews.render(id))
    },

});

router.resolve();

