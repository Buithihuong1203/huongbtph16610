import NavAdmin from "../../../components/NavAdmin";
import axios from 'axios';
import { add } from "../../../api/posts";

const AdminNewsAdd = {
    render() {
        return /*html*/`
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="lg:flex lg:items-center lg:justify-between">
                    <div class="flex-1 min-w-0">
                        <h2
                        class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                        >
                        Thêm mới
                        </h2>
                    </div>
                    <div class="mt-5 flex lg:mt-0 lg:ml-4">
                        <a href="/admin/news/add" class="sm:ml-3">
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
                    <form id="form-add-post">
                        <input type="text" class="border border-black" id="title-post" placeholder="Title"/><br />

                        <input type="file" class="border border-black" id="img-post" " /><br />

                        <textarea name="" cols="30" rows="10" class="border border-black" id="desc-post" placeholder="Description"></textarea><br />

                        <button class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thêm</button>
                    </form>
                </div>
                <!-- /End replace -->
            </div>
            </main>
        </div>
        `
    },
    afterRender() {
        // console.log(document.querySelector('#form-add-post'));
        const formAdd = document.querySelector('#form-add-post');
        const imgPost = document.querySelector("#img-post");
        imgPost.addEventListener("change", (e) => {
            const file = e.target.files[0];
            console.log(file);

            // lấy giá trị của file upload cho sử dụng formData
            const formData = new formData();
            formData.append("file", file);
            formData.append("upload_preset", "jkbdphzy");
            //call api
            axios({
                url: "https://cloudinary.com/documentation/image_upload_api_reference",
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-formendcoded",

                },
                data: formData,

            });
        });

        formAdd.addEventListener('submit', function (e) {
            e.preventDefault();
            add({
                title: document.querySelector('#title-post').value,
                img: document.querySelector('#img-post').value,
                desc: document.querySelector('#desc-post').value
            });
        });
    }
}
export default AdminNewsAdd;