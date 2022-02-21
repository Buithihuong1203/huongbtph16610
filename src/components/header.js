import { reRender } from "../utils";

const Header = {
    render() {
        return `
        <div class="bg-slate-100">
            <ul class="flex">
            <li><img src="	http://dongshop158.webmienphi.vn/userfiles/img/606849/12.png" class="w-40" href=""></li>
            <li><a href="/" class="block px-4 py-5  hover:text-red">Trang Chủ</a></li>
            <li><a href="/#/about" class="block px-4 py-5 hover:text-red">Về chúng tôi</a></li>

            <li>
            <a href="/#/products" class="block px-4 py-5 hover:text-red">Bạn đang cần gì ?</a>
            </li>

            <li><a href="/#/products" class="block px-4 py-5 hover:text-red">Phong thủy</a></li>
            <li><a href="/#/admin/news" class="block px-4 py-5  hover:text-red">Nhà hay</a></li>
            <li><a href="/#/tintucpage" class="block px-4 py-5 hover:text-red">Tin tức</a></li>
            <li><a href="/#/admin/news" class="block px-4 py-5 hover:text-red">Liên hệ</a></li>
            <li><a href="/#/cart"class="block px-4 py-5 hover:text-red">Giỏ hàng</a></li>
            <li><a href="/#/signin" class="block px-4 py-5 hover:text-red">Đăng Nhập</a></li>
            <li><a href=""></a>${localStorage.getItem('user') ? `
            <div class="px-4 py-5">
            Xin chào : <span id ="accountInfor">Username</span>
            <button id="logout">Logout</button>
            </div>
            
            `: ""}
            </div></li>
            
               
            </ul>
            
        `;
    },
    afterRender() {
        // lấy thông tin username từ localStorage và hiển thị ra ngoài
        const username = JSON.parse(localStorage.getItem("user")).user.username;
        if (username) {
            document.querySelector('#accountInfor').innerHTML = username;
        }
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