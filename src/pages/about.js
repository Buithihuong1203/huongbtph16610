import Footer from "../components/footer";
import Header from "../components/header";
const AboutPage = {
    render() {
        return `
            <div class="max-w-5xl mx-auto">
                <header>
                    ${Header.render()}
                </header>
                <main>
                    <h1 class="text-center text-green-900 leading-loose text-5xl ">Bài hát Chúc Tết</h1>
                    <h4>Mùa Xuân sang mọi người thường gửi tới nhau những lời chúc tốt đẹp nhất, cầu cho một năm mới an khang thịnh vượng. Giai điệu bài hát Chúc Tết vui tươi mang đến niềm hân hoan. VnDoc.com xin gửi tới bạn đọc lời bài hát Chúc Tết để bạn đọc cùng tham khảo.</h4>
                    <img src="https://placeimg.com/1200/480/any" href="" class=" ">
                    <p class="font-bold text-center">Lyrics bài hát Chúc Tết</p>
                    <div class="flex">
                      <div class="item">
                    <p>Mùa xuân sang ta chúc nhau.<br>
                    
                    Bao ước muốn bao hy vọng.<br>
                    
                    Cùng rủ nhau mau bay về.<br>
                    
                    Thắm trên môi người xinh tươi.<br>
                    
                    Ta chúc nhau những lời chúc lành.<br>
                    
                    Ước mong tết này tiếng cười khắp trời.<br>
                    
                    Mùa xuân sang ta chúc nhau.<br>
                    
                    Năm mới đến mong bao người.</p><br>
                    
                    <p>Hạnh phúc ơi xin bay về.<br>
                    
                    Xóa tan bao buồn lo âu.<br>
                    
                    Ta nhắp cạn chén rượi ấm nồng.<br>
                    
                    Chúc nhau những lời ước hẹn thắm nồng.<br>
                    Mùa xuân sang ta chúc nhau.<br>
                    
                    Cho ước muốn bay cao vời.<br>
                    
                    Cùng nỗi vui luôn bên người.<br>
                    
                    Xóa ưu tư dài đêm đông.<br>
                    
                    Ta hãy cùng chúc mừng xuân về.<br>
                    
                    Ước mong tết này mỗi nhà phát tài.</p></div>
                    
                    
                </main>
                <footer>
                    ${Footer.render()}
                </footer>
            </div>
            
        `;
    },
};

export default AboutPage;