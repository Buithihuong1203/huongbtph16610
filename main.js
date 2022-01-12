import Navigo from "navigo";
const router = new Navigo("/", { linksSelector: "a"});
const render = {content} => {
  document.querySelector("#app").innerHTML = content;

};
router.on({
  "/": () => {
    render("Home Page");
  }, 
  "/about": () => {
    render("About Page");
  },
  "/product": () => {
    render("Product page");
  },
});

