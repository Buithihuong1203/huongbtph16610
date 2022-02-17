import { reRender } from "../utils";

const Header = {
    render() {
        return `
        <div class="bg-orange-500">
            <ul class="flex">
            <li><img src="https://caodang.fpt.edu.vn/wp-content/uploads/logo-trang.png" class="" href=""></li>
            <li><a href="/" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Trang Chủ</a></li>
            <li><a href="/#/about" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Giới Thiệu</a></li>
            <li><a href="/#/products" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Tin Tức</a></li>
            <li><a href="/#/products" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Ngành Học</a></li>
            <li><a href="/#/admin/news" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Quản Trị</a></li>
            <li><a href="/#/signin" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Đăng Nhập</a></li>
            </ul>
            ${localStorage.getItem('user') ? `
            <div>
            Xin chào : <span id ="accountInfor">Username</span>
            <button id="logout">Logout</button>
            </div>
            
            `: ""}
        </div>
        `;
    },
    afterRender() {
        // lấy thông tin username từ localStorage và hiển thị ra ngoài
        const username = JSON.parse(localStorage.getItem("user")).user.username;
        document.querySelector('#accountInfo').innerHTML = username;
        // Logout
        const logout = document.querySelector('#logout');
        if (logout) {
            logout.addEventListener('click', function () {
                localStorage.removeItem('user');
                reRender(Header, "#header");
            })
        }
    }
};
export default Header;