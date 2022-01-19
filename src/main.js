import Navigo from "./navigo";
import AboutPage from "./pages/about";
import AdminNews from "./pages/admin/news";
import AdminNewsAdd from "./pages/admin/news/add";
import AdminNewsEdit from "./pages/admin/news/edit";
import DashboardPage from "./pages/dashboard";
import DetailPage from "./pages/detail";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import Footer from "./components/footer";
import Header from "./components/header";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content;
};

router.on({
    "/": () => print(HomePage.render()),
    "/about": () => print(AboutPage.render()),
    "/product": () => print(ProductPage.render()),
    "/signin": () => print(SignIn.render()),
    "/signup": () => print(SignUp.render()),
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailPage.render(id))

    },
    "/admin/dashboard": () => print(DashboardPage.render()),
    "/admin/products": () => console.log("admin product"),
    "/admin/news": () => print(AdminNews.render()),
    "/admin/news/add": () => print(AdminNewsAdd.render()),
    "/admin/news/:id/edit": () => print(AdminNewsEdit.render()),
    "/admin/news/:id": ({data}) => {
         const {id} = data;
         print(AdminNews.render(id))
    },
    
});

router.resolve();
