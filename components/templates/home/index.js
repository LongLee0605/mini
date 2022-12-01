import FadeContent from "components/atoms/Animate/FadeContent";
import Title from "components/atoms/Title";
import Image from "next/image";

const HomeTemplate = ({ dataStatic }) => {
  return (
    <div className="h-[2000px]">
      <div className="section">
        <div className="container">
          <FadeContent>
            <p>
              Dịch vụ SEO - Search Engine Optimize là một chiến lược digital
              marketing giúp website hiển thị trong kết quả tìm kiếm có liên
              quan trên các công cụ tìm kiếm như Google.com, Bing.com,
              Yahoo.com... Công việc của chuyên viên SEO Gleads là tối ưu hóa
              các từ khóa liên quan đến sản phẩm, dịch vụ của doanh nghiệp, đạt
              thứ hạng cao trên trang đầu của các công cụ tìm kiếm, mang lại lưu
              lượng truy cập organic search cho website của khách hàng.
            </p>
            <p>
              Chiến dịch SEO của Gleads cung cấp giải pháp All-in-one bao gồm
              Onpage SEO, Offpage SEO, Content và Technical SEO. Đây chính là
              nền tảng để cải thiện khả năng hiển thị, phát triển lưu lượng truy
              cập, tăng tốc website, quảng bá thương hiệu, chăm sóc khách hàng
              và tối ưu hóa từ khóa cho doanh nghiệp để kiếm thêm doanh thu từ
              chúng.
            </p>
            <p>
              Vậy tại sao các doanh nghiệp và công ty Việt Nam cần đến dịch vụ
              SEO?
            </p>
            <p>
              Trong thời buổi bùng nổ và phát triển của công nghệ, hành vi và
              thói quen mua sắm của người tiêu dùng cũng thay đổi mỗi ngày, để
              thích ứng với điều đó doanh nghiệp cũng cần phải tự làm mới. Bất
              kể có nhu cầu mua sắm hay chỉ ở giai đoạn nhận thức và tìm hiểu về
              sản phẩm của một dịch vụ cụ thể, người tiêu dùng đều bắt đầu bằng
              việc tìm kiếm thông tin trên Google. Thế nên việc doanh nghiệp
              hiện hữu ở thứ hạng cao trên các công cụ tìm kiếm là một điều cần
              thiết cho tất cả các công ty trên thị trường. Đặc biệt đối với
              người tiêu dùng Việt Nam, ngoài việc thăm hỏi người thân thì việc
              tự tra cứu, đọc review trên Google chiếm hơn 50% một đơn hàng được
              chốt. Do đó, việc doanh nghiệp tập trung cho việc SEO website là
              vấn đề cấp bách để có thể tăng sức cạnh tranh trên thị trường
              internet.
            </p>
            <p> So sánh SEO với dịch vụ PPC?</p>
            <p>
              Nếu SEO là 1 kênh marketing để đạt được organic traffic từ Google,
              Bing, thì Google/Bing Ads cũng là một giải pháp PPC được nhiều
              công ty hay doanh nghiệp dùng để thu hút khách hàng từ các công cụ
              tìm kiếm.
            </p>
            <p>
              Trong khi với SEO, 1 chiến dịch thường tốn 5-8 tháng để thấy kết
              quả thì với PPC, doanh nghiệp có thể thúc đẩy tăng trưởng traffic
              và chuyển đổi thành đơn hàng trong một khoảng thời gian ngắn. Tuy
              nhiên vấn đề của Google/Bing Ads cũng như các giải pháp PPC khác
              đó là khi doanh nghiệp phải đầu tư tiền cho những chiến dịch quảng
              cáo hoạt động liên tục, để duy trì lượng khách hàng đổ về từ các
              kênh thu phí này.
            </p>
            <p>
              Song, SEO lại là chiến lược dành cho một cuộc chơi dài hạn. Việc
              tối ưu hóa các keyword chủ chốt trong lĩnh vực của mình là việc
              các doanh nghiệp có thể kiểm soát được thông qua SEO và tiết kiệm
              được nhiều tài nguyên để giữ vững nó. Lên top 1 lần và duy trì mãi
              mãi chính là lợi thế của SEO trước PPC.
            </p>
            <p>
              Do đó, SEO và PPC đều là những channel marketing tốt nhất cho
              doanh nghiệp. Việc của khách hàng chỉ là lựa chọn giải pháp cho
              phù hợp với mục tiêu tăng trưởng doanh số của mình mà thôi, công
              ty SEO Gleads luôn sẵn sàng tư vấn và hỗ trợ.
            </p>
            <p> Một vài số liệu về sự phát triển của SEO:</p>
            <div>
              <ul
                role="list"
                className="ml-6 list-outside list-disc marker:text-gleads-buttonBlue-600"
              >
                <li>
                  <p>
                    75% chuyên gia marketing được phỏng vấn chọn thứ hạng
                    keyword và organic traffic là tiêu chuẩn để đo lường sự
                    thành công của chiến lược marketing tổng thể
                  </p>
                </li>
                <li>
                  <p>69% chuyên viên marketing tiếp tục đầu tư vào SEO</p>
                </li>
                <li>
                  <p>
                    71% các nhà tiếp thị nói rằng sử dụng các strategic keyword
                    là chiến lược số một của họ
                  </p>
                </li>
                <li>
                  <p>
                    64% SEOer ưu tiên cho việc tối ưu website trên thiết bị di
                    động thông minh
                  </p>
                </li>
              </ul>
            </div>
          </FadeContent>
        </div>
      </div>
    </div>
  );
};
export default HomeTemplate;
