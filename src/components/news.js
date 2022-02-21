import { getAll } from '../api/posts';

const News = {
    async render() {
        const { data } = await getAll();
        console.log(data);
        return /* html */` 
        <div class="px-20 py-10" style="background-image:url(http://dongshop158.webmienphi.vn/userfiles/img/606849/bg_gioithieu.png)">
        <h1 class="text-center text-2xl text-sky-500 font-semibold"> GIỚI THIỆU </h1>
        <p>Công ty chúng tôi hoạt động trên các lĩnh vực đầu tư và kinh doanh bất động sản; xây dựng công trình; giám sát thi công và hoàn thiện công trình dân dụng, công nghiệp; tư vấn đầu tư; tư vấn, thiết kế kiến trúc công trình dân dụng. Chúng tôi tin rằng mọi nỗ lực trong công việc sẽ mang lại những thành quả xứng đáng và chính là chiếc chìa khóa vàng mở ra cánh cửa thành công. Vì vậy, mỗi ngày chúng tôi không ngừng phấn đấu với tất cả nhiệt huyết kết hợp với kiến thức – kinh nghiệm của mình để hoàn thành tốt những hoạch định trong tương lai…</p>
        <div class="flex p-2">
              <div class="flex-1 ">
                 <h3 class="text-center text-slate-500 font-semibold p-2">TỔNG DIỆN TÍCH DỰ ÁN</h3><br>
                 <div class="flex pl-3.5">
                 <img src="http://dongshop158.webmienphi.vn/userfiles/img/606849/icon1.png" class="w-35">
                 <p class="pl-3.5">3,625</p>
                 </div>
              </div>
              <div class="flex-1">
                 <h3 class="text-center text-slate-500 font-semibold p-2">CĂN HỘ BÁN RA MỖI NĂM</h3><br>
                 <div class="flex pl-3.5">
                 <img src="http://dongshop158.webmienphi.vn/userfiles/img/606849/icon2.png" class="w-35">
                 <p class="pl-3.5">1000</p>
                 </div>
              </div>
              <div class="flex-1">
                 <h3 class="text-center text-slate-500 font-semibold p-2">DỰ ÁN TRẢI DÀI CẢ NƯỚC</h3><br>
                 <div class="flex pl-3.5">
                 <img src="http://dongshop158.webmienphi.vn/userfiles/img/606849/icon3.png" class="w-35">
                 <p class="pl-3.5">320</p>
                 </div>
              </div>
              <div class="flex-1">
                 <h3 class="text-center text-slate-500 font-semibold p-2">ĐỘI NGŨ NHÂN LỰC</h3><br>
                 <div class="flex pl-3.5">
                 <img src="http://dongshop158.webmienphi.vn/userfiles/img/606849/icon1.png" class="w-35 pl-1.5">
                 <p class="pl-3.5">800</p>
                 </div>
              </div>
              
            
        </div>

        </div>
        <div class="bg-cyan-50 px-20">
            <h2 class="font-semibold text-blue-900 my-4 uppercase text-2xl text-center">Lĩnh vực hoạt động</h2>
            <div class="grid grid-cols-3 gap-8">
                ${data.map((post) => `
                <div class="border p-3">
                    <a href="/news/${post.id}"><img src="${post.img}" alt="" class="w-full h-64"/></a>
                    <h3 class="my-3"><a href="/news/${post.id}" class="font-semibold text-orange-800 text-lg">${post.title}</a></h3>
                    <p class="hidden">${post.desc}</p>
                </div>
                `).join("")}
            </div>
            </div>
        <div class="">
            <h2 class="font-semibold text-blue-900 my-4 uppercase text-2xl text-center">dự án tiêu biểu</h2>
            <div class="flex px-20">
                <div class="flex-1">
                    <img src="http://dongshop158.webmienphi.vn/files/sanpham/7/300_1/jpg/ten-san-pham-bat-dong-san.jpg" class="rounded-2xl">
                    <h2 class="px-20 text-xl">Nhà đất thổ cư</h2>
                </div>
                <div class="flex-1">
                    <img src="http://dongshop158.webmienphi.vn/files/sanpham/7/300_1/jpg/ten-san-pham-bat-dong-san.jpg" class="rounded-2xl">
                    <h2 class="px-20 text-xl">Nhà liền kề</h2>
                </div>
                <div class="flex-1">
                    <img src="http://dongshop158.webmienphi.vn/files/sanpham/7/300_1/jpg/ten-san-pham-bat-dong-san.jpg" class="rounded-2xl">
                    <h2 class="px-20 text-xl">Chung cư cao cấp</h2>
                </div>

            </div>
            <div class="" style=" background-image: url(http://dongshop158.webmienphi.vn/userfiles/img/606849/2.jpg)">
            <h2 class="font-semibold text-blue-900 my-4 uppercase text-2xl text-center">dự án đang triển khai</h2>
            <div class="flex px-20">
                <div class="flex-1">
                    <img src="http://dongshop158.webmienphi.vn/files/sanpham/7/300_1/jpg/ten-san-pham-bat-dong-san.jpg" class="rounded-2xl">
                    <h2 class="px-20 text-xl">Chung cư bình dân</h2>
                </div>
                <div class="flex-1">
                    <img src="http://dongshop158.webmienphi.vn/files/sanpham/7/300_1/jpg/ten-san-pham-bat-dong-san.jpg" class="rounded-2xl">
                    <h2 class="px-20 text-xl">Nhà ở xã hội</h2>
                </div>
                <div class="flex-1">
                    <img src="http://dongshop158.webmienphi.vn/files/sanpham/7/300_1/jpg/ten-san-pham-bat-dong-san.jpg" class="rounded-2xl">
                    <h2 class="px-20 text-xl">Khu nhà liền kề</h2>
                </div>

            </div>
            <div class="px-20 ">
            <h2 class="font-semibold text-blue-900 my-4 uppercase text-2xl text-center">Tin tức mới nhất</h2>
            <div class="flex border p-3">
                <div class="flex-1 border p-3">
                <img src="http://dongshop158.webmienphi.vn/files/tin/5/jpg/gioi-thieu.jpg" class="w-4/5">
                <h2 class="uppercase text-xl py-2">Giới thiệu</h2>
                <p>Mai Huy Company là công ty chuyên về lĩnh vực thiết kế và lập trình phần mềm. Với kinh nghiệm chuyên môn sâu sắc, đội ngũ nhân viên giàu kinh nghiệm, quy mô trên cả nước. Mai Huy Company định hướng phát triển bền vững và duy trì chất lượng dịch vụ tốt để luôn khẳng định là nhà cung cấp dịch vụ trực tuyến uy tín nhất Việt Nam.</p>

                </div>
                <div class="flex-1 border p-3">
                <img src="http://dongshop158.webmienphi.vn/files/tin/4/jpg/khuyen-mai-nhan-dip-khai-truong.jpg" class="w-5/6">
                <h2 class="uppercase text-xl py-2">khuyến mại nhân dịp khai trương</h2>
                <p>Mai Huy Company là công ty chuyên về lĩnh vực thiết kế và lập trình phần mềm. Với kinh nghiệm chuyên môn sâu sắc, đội ngũ nhân viên giàu kinh nghiệm, quy mô trên cả nước. Mai Huy Company định hướng phát triển bền vững và duy trì chất lượng dịch vụ tốt để luôn khẳng định là nhà cung cấp dịch vụ trực tuyến uy tín nhất Việt Nam.</p>

                </div>
                <div class="flex-1 border p-3">
                <img src="http://dongshop158.webmienphi.vn/files/tin/3/jpg/huong-dan-dat-hang.jpg" class="w-4/5">
                <h2 class="uppercase text-xl py-2">Hướng dẫn đặt hàng</h2>
                <p>Mai Huy Company là công ty chuyên về lĩnh vực thiết kế và lập trình phần mềm. Với kinh nghiệm chuyên môn sâu sắc, đội ngũ nhân viên giàu kinh nghiệm, quy mô trên cả nước. Mai Huy Company định hướng phát triển bền vững và duy trì chất lượng dịch vụ tốt để luôn khẳng định là nhà cung cấp dịch vụ trực tuyến uy tín nhất Việt Nam.</p>

                </div>
                </div>

            </div>
        </div>    
        `

    },


};
export default News;