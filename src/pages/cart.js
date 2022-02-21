import { reRender } from "../utils";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../utils/cart";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const CartPage = {
    render() {
        let cart = [];
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }
        return `
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
        <div class="px-4 py-6 sm:px-0">
        <table class="min-w-full divide-y divide-gray-200>
            <thead class="bg-gray-200 ">
            <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên sản phẩm</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giá sản phẩm</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Số lượng</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
            </thead>
            </div>
            </div>
            <tbody>
            ${cart.map(item => `
                <tr>
                    <td>${item.name}</td>
                    <td><input type="number" value="${item.quantity}" /></td>
                    <td>
                        <button data-id="${item.id}" class="btn btn-increase">Tăng</button>
                        <button data-id="${item.id}" class="btn btn-decrease">Giảm</button>
                    </td>
                    <td>
                        <button data-id="${item.id}" class="btn btn-remove">Xóa</button>
                    </td>
                </tr>
            `).join("")}
            </tbody>
        </table>
        
        `
    },
    afterRender() {
        const btns = document.querySelectorAll('.btn');
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', () => {
                if (btn.classList.contains('btn-increase')) {
                    increaseQuantity(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Tăng số lượng thành công");
                    })
                } else if (btn.classList.contains('btn-decrease')) {
                    decreaseQuantity(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Giảm số lượng thành công");
                    })
                } else {
                    removeItemInCart(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Xóa sản phẩm thành công");
                    })
                }
            })
        })
    }
}
export default CartPage;