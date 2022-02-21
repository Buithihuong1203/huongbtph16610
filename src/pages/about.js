import Footer from "../components/footer";
import Header from "../components/header";
const AboutPage = {
    render() {
        return `
            <div class="mx-auto">
                <header>
                    ${Header.render()}
                </header>
                <main>
                <div class="">
                <img src="https://nhaphovietnamele.vn/wp-content/uploads/2020/09/ta-canh-dep-o-dia-phuong-em.jpg" class="">
                </div>
                <div class="whitespace-normal px-40 py-10">
                <h1 class="text-center py-5 text-2xl font-semibold">GIỚI THIỆU</h1>
                <p><a class="font-bold">Công ty Cổ phần Thiết bị và Thang máy Tập đoàn Nhà Phố Việt Nam (NPE)</a> được thành lập năm 2012. Công ty được dẫn dắt các kỹ sư hàng đầu trong lĩnh vực công nghệ tự động hóa. NPE khẳng định mình là đơn vị tiên phong áp dụng công nghệ thông minh, dây chuyền sản xuất hiện đại, nhập khẩu đơn vị uy tín trong lĩnh vực cung cấp lắp đặt thang máy thang cuốn, hệ thống đỗ xe tự động, thiết bị tòa nhà. NPE nỗ lực nâng cao chất lượng dịch vụ và công nghệ sản xuất, số nhân sự của công ty hiện trên 300 kỹ sư, nhân viên.</p>
                <p><a class="font-bold">I. LĨNH VỰC HOẠT ĐỘNG:</a></p>
                   <p>- Sản xuất, nhập khẩu, lắp đặt thang máy, thang cuốn.</p>
                   <p>- Nhập khẩu, lắp đặt hệ thống đỗ xe tự động  Các thiết bị tòa nhà.</p>
                   <p>- Mua bán vật tư, máy móc, phụ tùng thiết bị, phục vụ cho việc sản xuất máy phát điện thang máy và thang nâng chuyển.</p>
                <p><a class="font-bold">II. NĂNG LỰC SẢN XUẤT - NHẬP KHẨU</a></p>
                  <p>- Liên danh sản xuất OEM ( Original Equipment Manufacture ), lắp đặt thang máy hiệu NPE ( Tập đoàn Nhà Phố Việt Nam): 250 thang/tháng.</p>
                  <p>- Nhập khẩu: Hệ thống đỗ xe tự động - Các thiết bị tòa nhà
                  <p>- Nhập khẩu:  Nhập khẩu đồng bộ, mới 100% thiết bị thang máy, thang cuốn chính hãng uy tín của Mitsubishi ( Nhật Bản), Hyundai ( Hàn Quốc), ThyssenKrupp (CHLB Đức), Homelift ( Thụy Điển, Italia).</p>

                <p><a class="font-bold">III. CHIẾN LƯỢC PHÁT TRIỂN</a></p>
                   <p>    - Với đội ngũ với hơn 300 cán bộ công nhân viên có chuyên môn cao, được đào tạo chuyên nghiệp, giàu kinh nghiệm triển khai công việc như: Sản xuất, lắp đặt, hiệu chỉnh, bảo hành bảo trì.</p>
                <p>Chúng tôi cam kết đưa tới sản phẩm và dịch vụ tốt nhất cho Quý khách hàng với tiêu chí:</p>

                <p><a class="font-bold">“ CÔNG NGHỆ THÔNG MINH - AN TOÀN CHẤT LƯỢNG”</a></p>

                <p>Kiến tạo không gian sang trọng - Tận hưởng giá trị cuộc sống”</p>

                <p>Công ty Cổ phần Thiết bị và Thang máy Tập đoàn Nhà Phố Việt Nam xin cảm ơn tới Quý Khách hàng đã quan tâm, tín nhiệm và ủng hộ Chúng tôi trong suốt nhiều năm qua. Công ty chúng tôi hân hạnh được hợp tác và phục vụ dịch vụ 24/24.</p>

                <p><a class="font-bold">CÔNG TY CỔ PHẦN THIẾT BỊ VÀ THANG MÁY TẬP ĐOÀN NHÀ PHỐ VIỆT NAM</a></p>

                <p><a class="font-bold">Trụ sở chính Hà Nội:</a> Tầng 03, tòa Hà Thành Plaza, Thái Thịnh, Quận Đống Đa, Thành Phố Hà Nội</p>

                <p><a class="font-bold">VPĐD TP Hồ Chí Minh:</a> 166 Nguyễn Công Trứ - Phường Nguyễn Thái Bình - Quận 1- Thành phố Hồ Chí Minh</p>

                <p><a class="font-bold">VPĐD Đà Nẵng:<a> 21 Trần Quốc Toản - Phường Phước Ninh - Quận Hải Châu - Thành Phố Đà Nẵng.</p>

                <p>Hotline: 0888 232 629   
                </div>
                    
                    
                </main>
                <footer>
                    ${Footer.render()}
                </footer>
            </div>
            
        `;
    },
};

export default AboutPage;