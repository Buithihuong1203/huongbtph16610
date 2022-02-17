const Form = {
    render() {
        return `<div class="mt-10 sm:mt-0 my-2 bg-orange-600 ">
            <div class="md:grid md:grid-cols-3 md:gap-6 my-2">
                <div class="md:col-span-1 bg-orange-600">
                    <div class="px-4 sm:px-0">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Đăng ký học Fpoly 2022</h3>
                    </div>
                </div>
                <div class="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST" id="formDangky">
                        <div class="shadow overflow-hidden sm:rounded-md ">
                            <div class="px-4 py-5 bg-orange-600 sm:p-6">
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="first-name" class="block text-sm font-medium text-gray-700">Họ và tên</label>
                                        <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="last-name" class="block text-sm font-medium text-gray-700">Số điện thoại </label>
                                        <input type="text" name="sdt" id="sdt" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                    </div>

                                    <div class="col-span-6 sm:col-span-4">
                                        <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                                        <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="majors" class="block text-sm font-medium text-gray-700">Chọn ngành học</label>
                                        <select id="majors name="majors" autocomplete="majors" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option>Chọn ngành học</option>
                                            <option>Làm đẹp</option>
                                            <option>Thiết kế web</option>
                                            <option>Thiết kế đồ họa</option>
                                            <option>Marketing</option>
                                            <option>Digital Marketing</option>
                                        </select>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="address" class="block text-sm font-medium text-gray-700">Địa chỉ học</label>
                                        <select id="address" name="address" autocomplete="address" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option></option>
                                             <option>Hà Nội</option>
                                            <option>Đà Nẵng</option>
                                            <option>Tây Nguyên</option>
                                            <option>Hồ Chí Minh</option>
                                            <option>Cần Thơ</option>
                                        </select>
                                    </div>
                                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Đăng ký</button>
                                    </div>
                                    </form>
                                    </div>
                                    </div>
                                    `;


    }
}
export default Form;