const Form = {
    render() {
        return `<div class="mt-10 sm:mt-0 my-2 px-20 ">
            <div class="md:grid md:grid-cols-3 md:gap-6 my-2 px-20 ">
                <div class="mt-5 md:mt-0 md:col-span-2 px-20">
                <div class="px-4 sm:px-0 px-20">
                        <h3 class="text-lg font-medium leading-6 text-gray-900 px-30">Đăng ký nhận tin khi có thông tin nhà bạn cần mua</h3>
                    </div>
                    <form action="#" method="POST" id="formDangky">
                        <div class="shadow overflow-hidden sm:rounded-md px-20 ">
                            <div class="px-4 py-5 sm:p-6 px-30">
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
                                        <label for="majors" class="block text-sm font-medium text-gray-700">Chọn nhà cần mua</label>
                                        <select id="majors name="majors" autocomplete="majors" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option>Chọn nhà</option>
                                            <option>Chung cư</option>
                                            <option>Nhà đất thổ cư</option>
                                            <option>Nhà ở xã hội</option>
                                            <option>Biệt thự</option>
                                            <option>Đất trồng</option>
                                        </select>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="address" class="block text-sm font-medium text-gray-700">Chọn thành phố</label>
                                        <select id="address" name="address" autocomplete="address" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option></option>
                                             <option>Hà Nội</option>
                                            <option>Nam Định</option>
                                            <option>Hồ Chí Minh</option>
                                            <option>Bình Dương</option>
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