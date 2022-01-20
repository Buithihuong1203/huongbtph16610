const Header = {
    render() {
        return `
        <div class="bg-orange-500">
            <ul class="flex">
            <li><img src="https://caodang.fpt.edu.vn/wp-content/uploads/logo-trang.png" class="" href=""></li>
            <li><a href="/" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Trang Chủ</a></li>
            <li><a href="/about" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Giới Thiệu</a></li>
            <li><a href="/product" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Tin Tức</a></li>
            <li><a href="/product" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Ngành Học</a></li>
            <li><a href="/admin/dashboard" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Quản Trị</a></li>
            <li><a href="/signin" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Đăng Nhập</a></li>
            </ul>
        </div>
        `;
    },
};
export default Header;