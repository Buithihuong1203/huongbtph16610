import NavAdmin from "../../../components/NavAdmin";
import axios from "axios";
import { add, get, update } from "../../../api/products";

const AdminProductsEdit = {
    async render(id) {
        const { data } = await get(id);
        return /*html*/ `
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
               
                <div class="lg:flex lg:items-center lg:justify-between">
                    <div class="flex-1 min-w-0">
                        <h2
                        class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                        >
                        Edit ${data.title}
                        </h2>
                    </div>
                    <div class="mt-5 flex lg:mt-0 lg:ml-4">
                        <a href="/admin/products/" class="sm:ml-3">
                            <button
                                type="button"
                                class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Quay lại
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            </header>
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <!-- Replace with your content -->
                <div class="px-4 py-6 sm:px-0">
                    <form id="form-edit">
                        <input type="text" class="border border-black" id="title-product" placeholder="Title" value="${data.title}"/><br />
                        <div class="w-3xl grid grid-cols-2 gap-8">
                            <div><input type="file" class="border border-black" id="img-product" /></div>
                            <div><img width="200" src="${data.img}" id="img-preview"/></div>
                        </div>
                        <textarea name="" cols="30" rows="10" class="border border-black" id="desc-product" placeholder="Description"></textarea><br />
                        <input type="text" class="border border-black" id="title-post" placeholder="Price" /><br />
                        <button type="button"
                            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cập nhật</button>
                    </form>
                </div>
                <!-- /End replace -->
            </div>
            </main>
        </div>
        `;
    },
    afterRender(id) {
        const formEdit = document.querySelector("#form-edit");
        const imgPreview = document.querySelector("#img-preview");
        const imgProduct = document.querySelector("#img-product");
        let imgLink = "";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";
        const CLOUDINARY_PRESET = "jkbdphzy";

        // handle sự kiện change để xem ảnh trên local
        imgProduct.addEventListener('change', function (e) {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });

        formEdit.addEventListener("submit", async function (e) {
            e.preventDefault();
            const file = imgProduct.files[0];
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUDINARY_PRESET);

                // call api cloudinary
                const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                    headers: {
                        "Content-Type": "application/form-data"
                    }
                })
                imgLink = data.url
            }


            // call api thêm bài viết
            update({
                id: id,
                title: document.querySelector("#title-product").value,
                img: imgLink ? imgLink : imgPreview.src,
                desc: document.querySelector("#desc-product").value,
                price: document.querySelector("#price-product").value,
            });
        });
    },
};
export default AdminProductsEdit;