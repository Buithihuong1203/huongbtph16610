import { get } from "../api/posts";
import Header from "../components/header";
import Footer from "../components/footer";


const DetailPage = {
    async render(id) {
        const { data } = await get(id);
        return `
        <div class="mx-auto ">
        <header>
            ${Header.render()}
        </header>
        <main>
            <div class="text-2xl text-white bg-orange-600 text-center"></div>
            <h1 class="text-2xl text-stone-900 font-semibold px-20">${data.title}</h1>
            <div class="">
            <div class="">
            <p class ="py-1 px-32">${data.desc}</p>
            <p class =" px-32">Lượt xem: 200</p>
            </div>
            <div class="">
            <img src="${data.img}" class="px-60 "/>
            </div>
            
            </div>
            <p class="px-32">Kế đó, cũng trong tháng 1/2022, Bộ Xây dựng đã có công văn gửi UBND các tỉnh, thành phố trực thuộc Trung ương về việc thúc đẩy phát triển nhà ở xã hội, nhà ở cho công nhân khu công nghiệp. Trong công văn này, Bộ Xây dựng xác định cụ thể các chỉ tiêu phát triển nhà ở, đặc biệt là các chỉ tiêu về nhà ở xã hội (trong đó có nhà ở công nhân khu công nghiệp), chỉ tiêu về cải tạo, xây dựng lại chung cư cũ. Bên cạnh đó, Bộ Xây dựng đề nghị các địa phương khẩn trương nghiên cứu điều chỉnh, phê duyệt các chương trình, kế hoạch phát triển nhà ở đảm bảo phù hợp với Chiến lược phát triển nhà ở Quốc gia giai đoạn 2021-2030 và tầm nhìn đến 2040 được Thủ tướng Chính phủ phê duyệt tại Quyết định số 2161/QĐ-TTg ngày 22/12/2021. Đồng thời, rà soát, kiểm tra việc bố trí quỹ đất nhà ở xã hội tại các dự án nhà ở thương mại, khu đô thị trên địa bàn đảm bảo theo đúng quy định pháp luật về nhà ở; khi lập, phê duyệt quy hoạch xây dựng khu công nghiệp, phải bố trí diện tích đất phù hợp trên địa bàn để xây dựng nhà công nhân, thiết chế của công đoàn đảm bảo đồng bộ hệ thống hạ tầng kỹ thuật, hạ tầng xã hội để phục vụ công nhân, người lao động làm việc tại khu công nghiệp đó.</p>

            <p class="px-32 py-10">Trước đó, Chiến lược phát triển nhà ở quốc gia đến năm 2020 và tầm nhìn đến năm 2030 do Thủ tướng Chính phủ phê duyệt ngày 30/11/2011 xác định giai đoạn 2016-2020 đặt mục tiêu là đầu tư xây dựng tối thiểu khoảng 12,5 triệu m2 nhà ở xã hội tại khu vực đô thị; đáp ứng cho khoảng 80% số sinh viên, học sinh các trường đại học, cao đẳng, trung cấp chuyên nghiệp, dạy nghề và khoảng 70% công nhân lao động tại các khu công nghiệp có nhu cầu được giải quyết chỗ ở. Tuy nhiên, kết quả Kết quả phát triển nhà ở xã hội chỉ đạt được 41,6% mục tiêu đề ra.</p>
            
            
                  
        </main>    
        <footer>
            ${Footer.render()}
        </footer>
            </div>
        `;
    },
};
export default DetailPage;