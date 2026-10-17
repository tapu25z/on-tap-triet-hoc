// Bộ dữ liệu 100 câu hỏi ôn tập Triết học Mác - Lênin
// Đáp án gốc trong file docx là câu A, các lựa chọn đã được xáo trộn ngẫu nhiên.
const RAW_QUESTIONS = [
  {
    "id": 1,
    "question": "Theo quan điểm của triết học Mác - Lênin, với tư cách là một hình thái ý thức xã hội, triết học ra đời dựa trên những nguồn gốc cơ bản nào?",
    "originalA": "Nguồn gốc nhận thức và nguồn gốc xã hội.",
    "originalOptions": {
      "A": "Nguồn gốc nhận thức và nguồn gốc xã hội.",
      "B": "Nguồn gốc tự nhiên và nguồn gốc xã hội.",
      "C": "Nguồn gốc tư duy và nguồn gốc thực tiễn.",
      "D": "Nguồn gốc con người và nguồn gốc tự nhiên."
    },
    "correctAnswer": "Nguồn gốc nhận thức và nguồn gốc xã hội.",
    "options": [
      "Nguồn gốc tư duy và nguồn gốc thực tiễn.",
      "Nguồn gốc con người và nguồn gốc tự nhiên.",
      "Nguồn gốc tự nhiên và nguồn gốc xã hội.",
      "Nguồn gốc nhận thức và nguồn gốc xã hội."
    ]
  },
  {
    "id": 2,
    "question": "Ph. Ăngghen đã chỉ rõ: \"Vấn đề cơ bản lớn của mọi triết học, đặc biệt là của triết học hiện đại, là vấn đề...\" gì?",
    "originalA": "Quan hệ giữa tư duy với tồn tại.",
    "originalOptions": {
      "A": "Quan hệ giữa tư duy với tồn tại.",
      "B": "Quan hệ giữa con người với giới tự nhiên.",
      "C": "Quan hệ giữa lý luận với thực tiễn.",
      "D": "Quan hệ giữa vật chất với sự vận động."
    },
    "correctAnswer": "Quan hệ giữa tư duy với tồn tại.",
    "options": [
      "Quan hệ giữa tư duy với tồn tại.",
      "Quan hệ giữa vật chất với sự vận động.",
      "Quan hệ giữa lý luận với thực tiễn.",
      "Quan hệ giữa con người với giới tự nhiên."
    ]
  },
  {
    "id": 3,
    "question": "Loại hình thế giới quan nào được coi là đỉnh cao của các loại thế giới quan trong lịch sử vì đòi hỏi thế giới phải được xem xét dựa trên nguyên lý về mối liên hệ phổ biến và sự phát triển?",
    "originalA": "Thế giới quan duy vật biện chứng.",
    "originalOptions": {
      "A": "Thế giới quan duy vật biện chứng.",
      "B": "Thế giới quan tôn giáo.",
      "C": "Thế giới quan huyền thoại.",
      "D": "Thế giới quan thông thường."
    },
    "correctAnswer": "Thế giới quan duy vật biện chứng.",
    "options": [
      "Thế giới quan duy vật biện chứng.",
      "Thế giới quan tôn giáo.",
      "Thế giới quan huyền thoại.",
      "Thế giới quan thông thường."
    ]
  },
  {
    "id": 4,
    "question": "Phương pháp tư duy nào đòi hỏi phải nhận thức đối tượng ở trạng thái luôn vận động biến đổi, nằm trong khuynh hướng phổ quát là phát triển và nguồn gốc của sự biến đổi là do mâu thuẫn nội tại?",
    "originalA": "Phương pháp biện chứng.",
    "originalOptions": {
      "A": "Phương pháp biện chứng.",
      "B": "Phương pháp siêu hình.",
      "C": "Phương pháp duy tâm chủ quan.",
      "D": "Phương pháp chiết trung, ngụy biện."
    },
    "correctAnswer": "Phương pháp biện chứng.",
    "options": [
      "Phương pháp chiết trung, ngụy biện.",
      "Phương pháp duy tâm chủ quan.",
      "Phương pháp biện chứng.",
      "Phương pháp siêu hình."
    ]
  },
  {
    "id": 5,
    "question": "Sự khác biệt cơ bản giữa chủ nghĩa duy tâm chủ quan và chủ nghĩa duy tâm khách quan là gì?",
    "originalA": "Chủ nghĩa duy tâm chủ quan thừa nhận tính thứ nhất của ý thức con người; còn chủ nghĩa duy tâm khách quan coi ý thức là thứ tinh thần khách quan có trước và tồn tại độc lập với con người.",
    "originalOptions": {
      "A": "Chủ nghĩa duy tâm chủ quan thừa nhận tính thứ nhất của ý thức con người; còn chủ nghĩa duy tâm khách quan coi ý thức là thứ tinh thần khách quan có trước và tồn tại độc lập với con người.",
      "B": "Chủ nghĩa duy tâm chủ quan phủ nhận khả năng nhận thức thế giới; còn chủ nghĩa duy tâm khách quan khẳng định khả năng nhận thức của con người.",
      "C": "Chủ nghĩa duy tâm chủ quan lấy tự nhiên để giải thích tự nhiên; còn chủ nghĩa duy tâm khách quan lấy ý niệm để giải thích giới tự nhiên.",
      "D": "Chủ nghĩa duy tâm chủ quan thừa nhận sự tồn tại của vật chất; còn chủ nghĩa duy tâm khách quan hoàn toàn phủ nhận sự tồn tại của vật chất."
    },
    "correctAnswer": "Chủ nghĩa duy tâm chủ quan thừa nhận tính thứ nhất của ý thức con người; còn chủ nghĩa duy tâm khách quan coi ý thức là thứ tinh thần khách quan có trước và tồn tại độc lập với con người.",
    "options": [
      "Chủ nghĩa duy tâm chủ quan lấy tự nhiên để giải thích tự nhiên; còn chủ nghĩa duy tâm khách quan lấy ý niệm để giải thích giới tự nhiên.",
      "Chủ nghĩa duy tâm chủ quan thừa nhận sự tồn tại của vật chất; còn chủ nghĩa duy tâm khách quan hoàn toàn phủ nhận sự tồn tại của vật chất.",
      "Chủ nghĩa duy tâm chủ quan phủ nhận khả năng nhận thức thế giới; còn chủ nghĩa duy tâm khách quan khẳng định khả năng nhận thức của con người.",
      "Chủ nghĩa duy tâm chủ quan thừa nhận tính thứ nhất của ý thức con người; còn chủ nghĩa duy tâm khách quan coi ý thức là thứ tinh thần khách quan có trước và tồn tại độc lập với con người."
    ]
  },
  {
    "id": 6,
    "question": "Hình thức triết học nào thừa nhận tính thứ nhất của ý thức con người, khẳng định mọi sự vật, hiện tượng chỉ là phức hợp của những cảm giác?",
    "originalA": "Chủ nghĩa duy tâm chủ quan.",
    "originalOptions": {
      "A": "Chủ nghĩa duy tâm chủ quan.",
      "B": "Chủ nghĩa duy tâm khách quan.",
      "C": "Chủ nghĩa duy vật chất phác.",
      "D": "Thuyết bất khả tri."
    },
    "correctAnswer": "Chủ nghĩa duy tâm chủ quan.",
    "options": [
      "Chủ nghĩa duy vật chất phác.",
      "Chủ nghĩa duy tâm khách quan.",
      "Chủ nghĩa duy tâm chủ quan.",
      "Thuyết bất khả tri."
    ]
  },
  {
    "id": 7,
    "question": "Chọn phát biểu KHÔNG ĐÚNG về đặc trưng của phương pháp tư duy biện chứng?",
    "originalA": "Coi nguyên nhân của sự biến đổi của đối tượng nằm ở các lực lượng siêu nhiên bên ngoài đối tượng.",
    "originalOptions": {
      "A": "Coi nguyên nhân của sự biến đổi của đối tượng nằm ở các lực lượng siêu nhiên bên ngoài đối tượng.",
      "B": "Nhận thức đối tượng trong các mối liên hệ phổ biến vốn có của nó.",
      "C": "Nhận thức đối tượng ở trạng thái luôn vận động biến đổi, nằm trong khuynh hướng phổ quát là phát triển.",
      "D": "Khẳng định nguồn gốc của sự biến đổi là do sự đấu tranh giữa các mặt đối lập của mâu thuẫn nội tại."
    },
    "correctAnswer": "Coi nguyên nhân của sự biến đổi của đối tượng nằm ở các lực lượng siêu nhiên bên ngoài đối tượng.",
    "options": [
      "Khẳng định nguồn gốc của sự biến đổi là do sự đấu tranh giữa các mặt đối lập của mâu thuẫn nội tại.",
      "Nhận thức đối tượng trong các mối liên hệ phổ biến vốn có của nó.",
      "Coi nguyên nhân của sự biến đổi của đối tượng nằm ở các lực lượng siêu nhiên bên ngoài đối tượng.",
      "Nhận thức đối tượng ở trạng thái luôn vận động biến đổi, nằm trong khuynh hướng phổ quát là phát triển."
    ]
  },
  {
    "id": 8,
    "question": "C. Mác và Ph. Ăngghen đã kế thừa và cải tạo những yếu tố nào trong triết học cổ điển Đức để xây dựng nên triết học duy vật biện chứng?",
    "originalA": "Kế thừa \"hạt nhân hợp lý\" trong phép biện chứng của Hegel và quan điểm duy vật trong triết học của Feuerbach.",
    "originalOptions": {
      "A": "Kế thừa \"hạt nhân hợp lý\" trong phép biện chứng của Hegel và quan điểm duy vật trong triết học của Feuerbach.",
      "B": "Kế thừa nguyên si hệ thống triết học duy tâm khách quan của Hegel và phép siêu hình của Feuerbach.",
      "C": "Kế thừa quan điểm triết học nhân bản của Feuerbach và phương pháp tư duy siêu hình của Hegel.",
      "D": "Kế thừa chủ nghĩa duy vật máy móc của Feuerbach và quan niệm duy tâm về lịch sử xã hội của Hegel."
    },
    "correctAnswer": "Kế thừa \"hạt nhân hợp lý\" trong phép biện chứng của Hegel và quan điểm duy vật trong triết học của Feuerbach.",
    "options": [
      "Kế thừa \"hạt nhân hợp lý\" trong phép biện chứng của Hegel và quan điểm duy vật trong triết học của Feuerbach.",
      "Kế thừa chủ nghĩa duy vật máy móc của Feuerbach và quan niệm duy tâm về lịch sử xã hội của Hegel.",
      "Kế thừa nguyên si hệ thống triết học duy tâm khách quan của Hegel và phép siêu hình của Feuerbach.",
      "Kế thừa quan điểm triết học nhân bản của Feuerbach và phương pháp tư duy siêu hình của Hegel."
    ]
  },
  {
    "id": 9,
    "question": "Trong quá trình lãnh đạo cách mạng, Đảng Cộng sản Việt Nam đã đóng góp quan trọng vào sự phát triển kho tàng triết học Mác - Lênin thông qua việc hoạch định đường lối thực hiện đồng thời hai nhiệm vụ chiến lược nào sau năm 1954?",
    "originalA": "Xây dựng chủ nghĩa xã hội ở miền Bắc; đấu tranh giải phóng dân tộc, thống nhất Tổ quốc ở miền Nam.",
    "originalOptions": {
      "A": "Xây dựng chủ nghĩa xã hội ở miền Bắc; đấu tranh giải phóng dân tộc, thống nhất Tổ quốc ở miền Nam.",
      "B": "Xây dựng nền tảng công nghiệp nặng ở miền Bắc và phát triển nông nghiệp toàn diện ở miền Nam.",
      "C": "Đẩy mạnh hội nhập quốc tế ở miền Bắc và đấu tranh chính trị - ngoại giao ở miền Nam.",
      "D": "Tiến hành cách mạng tư sản dân quyền ở miền Bắc và cách mạng ruộng đất ở miền Nam."
    },
    "correctAnswer": "Xây dựng chủ nghĩa xã hội ở miền Bắc; đấu tranh giải phóng dân tộc, thống nhất Tổ quốc ở miền Nam.",
    "options": [
      "Xây dựng nền tảng công nghiệp nặng ở miền Bắc và phát triển nông nghiệp toàn diện ở miền Nam.",
      "Xây dựng chủ nghĩa xã hội ở miền Bắc; đấu tranh giải phóng dân tộc, thống nhất Tổ quốc ở miền Nam.",
      "Đẩy mạnh hội nhập quốc tế ở miền Bắc và đấu tranh chính trị - ngoại giao ở miền Nam.",
      "Tiến hành cách mạng tư sản dân quyền ở miền Bắc và cách mạng ruộng đất ở miền Nam."
    ]
  },
  {
    "id": 10,
    "question": "Khi làm việc nhóm để giải quyết một đề tài nghiên cứu về nguyên nhân sụp đổ của mô hình chủ nghĩa xã hội ở Liên Xô và Đông Âu, sinh viên cần vận dụng phương pháp luận triết học Mác - Lênin như thế nào để có cách phân tích khoa học nhất?",
    "originalA": "Phân tích sự việc một cách toàn diện, lịch sử - cụ thể, tìm ra nguyên nhân từ những sai lầm chủ quan, giáo điều, xa rời lập trường Mác - Lênin chứ không phải do bản chất của chủ nghĩa xã hội.",
    "originalOptions": {
      "A": "Phân tích sự việc một cách toàn diện, lịch sử - cụ thể, tìm ra nguyên nhân từ những sai lầm chủ quan, giáo điều, xa rời lập trường Mác - Lênin chứ không phải do bản chất của chủ nghĩa xã hội.",
      "B": "Chỉ tập trung phân tích các số liệu thống kê kinh tế tại thời điểm sụp đổ mà bỏ qua yếu tố chính trị, tư tưởng và sự chống phá của các thế lực thù địch.",
      "C": "Khẳng định sự sụp đổ đó là định mệnh tất yếu do phương thức sản xuất xã hội chủ nghĩa không thể tồn tại trong thực tế khách quan.",
      "D": "Dựa hoàn toàn vào các nhận định trên báo chí phương Tây để kết luận rằng chủ nghĩa Mác - Lênin đã lỗi thời."
    },
    "correctAnswer": "Phân tích sự việc một cách toàn diện, lịch sử - cụ thể, tìm ra nguyên nhân từ những sai lầm chủ quan, giáo điều, xa rời lập trường Mác - Lênin chứ không phải do bản chất của chủ nghĩa xã hội.",
    "options": [
      "Dựa hoàn toàn vào các nhận định trên báo chí phương Tây để kết luận rằng chủ nghĩa Mác - Lênin đã lỗi thời.",
      "Chỉ tập trung phân tích các số liệu thống kê kinh tế tại thời điểm sụp đổ mà bỏ qua yếu tố chính trị, tư tưởng và sự chống phá của các thế lực thù địch.",
      "Phân tích sự việc một cách toàn diện, lịch sử - cụ thể, tìm ra nguyên nhân từ những sai lầm chủ quan, giáo điều, xa rời lập trường Mác - Lênin chứ không phải do bản chất của chủ nghĩa xã hội.",
      "Khẳng định sự sụp đổ đó là định mệnh tất yếu do phương thức sản xuất xã hội chủ nghĩa không thể tồn tại trong thực tế khách quan."
    ]
  },
  {
    "id": 11,
    "question": "Bản chất của ý thức là:",
    "originalA": "Là sự phản ánh hiện thực khách quan vào đầu óc con người một cách năng động và sáng tạo.",
    "originalOptions": {
      "A": "Là sự phản ánh hiện thực khách quan vào đầu óc con người một cách năng động và sáng tạo.",
      "B": "Là sự hồi tưởng lại kiếp trước.",
      "C": "Là sự mách bảo của thượng đế.",
      "D": "Là sự phản ánh nguyên vẹn cái bên ngoài."
    },
    "correctAnswer": "Là sự phản ánh hiện thực khách quan vào đầu óc con người một cách năng động và sáng tạo.",
    "options": [
      "Là sự phản ánh nguyên vẹn cái bên ngoài.",
      "Là sự phản ánh hiện thực khách quan vào đầu óc con người một cách năng động và sáng tạo.",
      "Là sự hồi tưởng lại kiếp trước.",
      "Là sự mách bảo của thượng đế."
    ]
  },
  {
    "id": 12,
    "question": "Thực tiễn là:",
    "originalA": "Hoạt động vật chất của con người nhằm cải tạo tự nhiên và xã hội theo nhu cầu của con người ở mỗi giai đoạn lịch sử.",
    "originalOptions": {
      "A": "Hoạt động vật chất của con người nhằm cải tạo tự nhiên và xã hội theo nhu cầu của con người ở mỗi giai đoạn lịch sử.",
      "B": "Hoạt động của con người nhằm cải tạo tự nhiên và xã hội theo nhu cầu của con người ở mỗi giai đoạn lịch sử.",
      "C": "Hoạt động vật chất của con người nhằm cải tạo thế giới",
      "D": "Hoạt động vật chất."
    },
    "correctAnswer": "Hoạt động vật chất của con người nhằm cải tạo tự nhiên và xã hội theo nhu cầu của con người ở mỗi giai đoạn lịch sử.",
    "options": [
      "Hoạt động vật chất.",
      "Hoạt động của con người nhằm cải tạo tự nhiên và xã hội theo nhu cầu của con người ở mỗi giai đoạn lịch sử.",
      "Hoạt động vật chất của con người nhằm cải tạo tự nhiên và xã hội theo nhu cầu của con người ở mỗi giai đoạn lịch sử.",
      "Hoạt động vật chất của con người nhằm cải tạo thế giới"
    ]
  },
  {
    "id": 13,
    "question": "Con đường phát triển của sự vật mà quy luật phủ định của phủ định vạch ra là con đường nào?",
    "originalA": "Đường xoáy ốc đi lên",
    "originalOptions": {
      "A": "Đường xoáy ốc đi lên",
      "B": "Đường thẳng đi lên",
      "C": "Đường tròn khép kín",
      "D": "Đường mòn"
    },
    "correctAnswer": "Đường xoáy ốc đi lên",
    "options": [
      "Đường xoáy ốc đi lên",
      "Đường mòn",
      "Đường thẳng đi lên",
      "Đường tròn khép kín"
    ]
  },
  {
    "id": 14,
    "question": "Phạm trù triết học nào dùng để chỉ tổng hợp tất cả những mặt, những yếu tố, những quá trình tạo nên sự vật?",
    "originalA": "Nội dung",
    "originalOptions": {
      "A": "Nội dung",
      "B": "Bản chất",
      "C": "Hiện thực",
      "D": "Mục đích"
    },
    "correctAnswer": "Nội dung",
    "options": [
      "Mục đích",
      "Hiện thực",
      "Bản chất",
      "Nội dung"
    ]
  },
  {
    "id": 15,
    "question": "Thống nhất của hai mặt đối lập là:",
    "originalA": "Sự nương tựa lẫn nhau, tồn tại không tách rời nhau, mặt này lấy mặt kia làm tiền đề cho sự tồn tại của mình và ngược lại.",
    "originalOptions": {
      "A": "Sự nương tựa lẫn nhau, tồn tại không tách rời nhau, mặt này lấy mặt kia làm tiền đề cho sự tồn tại của mình và ngược lại.",
      "B": "Sự bài trừ, gạt bỏ lẫn nhau giữa hai mặt đối lập",
      "C": "Hai mặt đối lập có tính chất, đặc điểm, khuynh hướng phát triển trái ngược nhau",
      "D": "Quá trình cái mới ra đời thay thế cái cũ"
    },
    "correctAnswer": "Sự nương tựa lẫn nhau, tồn tại không tách rời nhau, mặt này lấy mặt kia làm tiền đề cho sự tồn tại của mình và ngược lại.",
    "options": [
      "Quá trình cái mới ra đời thay thế cái cũ",
      "Hai mặt đối lập có tính chất, đặc điểm, khuynh hướng phát triển trái ngược nhau",
      "Sự bài trừ, gạt bỏ lẫn nhau giữa hai mặt đối lập",
      "Sự nương tựa lẫn nhau, tồn tại không tách rời nhau, mặt này lấy mặt kia làm tiền đề cho sự tồn tại của mình và ngược lại."
    ]
  },
  {
    "id": 16,
    "question": "Giai đoạn mà con người sử dụng các giác quan để tác động trực tiếp vào các sự vật nhằm nắm bắt các sự vật ấy được gọi là:",
    "originalA": "Nhận thức cảm tính",
    "originalOptions": {
      "A": "Nhận thức cảm tính",
      "B": "Nhận thức thông thường",
      "C": "Nhận thức lý tính",
      "D": "Nhận thức gián tiếp"
    },
    "correctAnswer": "Nhận thức cảm tính",
    "options": [
      "Nhận thức cảm tính",
      "Nhận thức thông thường",
      "Nhận thức lý tính",
      "Nhận thức gián tiếp"
    ]
  },
  {
    "id": 17,
    "question": "Theo quan điểm của chủ nghĩa duy vật biện chứng luận điểm nào sau đây là sai?",
    "originalA": "Phủ định biện chứng phụ thuộc vào ý thức của con người",
    "originalOptions": {
      "A": "Phủ định biện chứng phụ thuộc vào ý thức của con người",
      "B": "Phủ định biện chứng có tính khách quan",
      "C": "Phủ định biện chứng là kết quả giải quyết những mâu thuẫn bên trong sự vật",
      "D": "Phủ định biện chứng có tính đa dạng, phong phú"
    },
    "correctAnswer": "Phủ định biện chứng phụ thuộc vào ý thức của con người",
    "options": [
      "Phủ định biện chứng phụ thuộc vào ý thức của con người",
      "Phủ định biện chứng có tính khách quan",
      "Phủ định biện chứng là kết quả giải quyết những mâu thuẫn bên trong sự vật",
      "Phủ định biện chứng có tính đa dạng, phong phú"
    ]
  },
  {
    "id": 18,
    "question": "Chọn câu trả lời đúng theo quan điểm của triết học Mác-Lênin:",
    "originalA": "Ý thức được hình thành trực tiếp từ lao động.",
    "originalOptions": {
      "A": "Ý thức được hình thành trực tiếp từ lao động.",
      "B": "Ý thức có nguồn gốc từ một ý niệm",
      "C": "Ý thức là hiện tượng bẩm sinh ở con người.",
      "D": "Ý thức là quá trình tiến hóa cao của giới tự nhiên."
    },
    "correctAnswer": "Ý thức được hình thành trực tiếp từ lao động.",
    "options": [
      "Ý thức có nguồn gốc từ một ý niệm",
      "Ý thức là quá trình tiến hóa cao của giới tự nhiên.",
      "Ý thức là hiện tượng bẩm sinh ở con người.",
      "Ý thức được hình thành trực tiếp từ lao động."
    ]
  },
  {
    "id": 19,
    "question": "Ph.Ăngghen viết: “...... là điều kiện cơ bản đầu tiên của toàn bộ đời sống loài người, và như thế đến một mức mà trên một ý nghĩa nào đó, chúng ta phải nói: ....... đã sáng tạo ra bản thân con người”. Hãy điền một từ vào chỗ trống để hoàn thiện câu trên.",
    "originalA": "Lao động",
    "originalOptions": {
      "A": "Lao động",
      "B": "Vật chất",
      "C": "Tự nhiên",
      "D": "Sản xuất"
    },
    "correctAnswer": "Lao động",
    "options": [
      "Sản xuất",
      "Tự nhiên",
      "Lao động",
      "Vật chất"
    ]
  },
  {
    "id": 20,
    "question": "Phép biện chứng duy vật là:",
    "originalA": "Phép biện chứng được xác lập trên lập trường của chủ nghĩa duy vật.",
    "originalOptions": {
      "A": "Phép biện chứng được xác lập trên lập trường của chủ nghĩa duy vật.",
      "B": "Phép biện chứng của ý niệm tuyệt đối.",
      "C": "Phép biện chứng do Ăngghen sáng lập.",
      "D": "Phép biện chứng do V.I. Lênin sáng lập."
    },
    "correctAnswer": "Phép biện chứng được xác lập trên lập trường của chủ nghĩa duy vật.",
    "options": [
      "Phép biện chứng do Ăngghen sáng lập.",
      "Phép biện chứng được xác lập trên lập trường của chủ nghĩa duy vật.",
      "Phép biện chứng của ý niệm tuyệt đối.",
      "Phép biện chứng do V.I. Lênin sáng lập."
    ]
  },
  {
    "id": 21,
    "question": "Khả năng được hình thành do quy luật vận động nội tại của sự vật quy định thì được gọi là:",
    "originalA": "Khả năng tất nhiên.",
    "originalOptions": {
      "A": "Khả năng tất nhiên.",
      "B": "Khả năng thực tế.",
      "C": "Khả năng ngẫu nhiên.",
      "D": "Khả năng nội tại."
    },
    "correctAnswer": "Khả năng tất nhiên.",
    "options": [
      "Khả năng thực tế.",
      "Khả năng ngẫu nhiên.",
      "Khả năng tất nhiên.",
      "Khả năng nội tại."
    ]
  },
  {
    "id": 22,
    "question": "Quy luật được coi là hạt nhân của phép biện chứng duy vật là:",
    "originalA": "Quy luật thống nhất và đấu tranh của các mặt đối lập",
    "originalOptions": {
      "A": "Quy luật thống nhất và đấu tranh của các mặt đối lập",
      "B": "Quy luật từ những thay đổi về lượng dẫn đến những thay đổi về chất và ngược lại",
      "C": "Quy luật phủ định của phủ định",
      "D": "Quy luật tự nhiên"
    },
    "correctAnswer": "Quy luật thống nhất và đấu tranh của các mặt đối lập",
    "options": [
      "Quy luật thống nhất và đấu tranh của các mặt đối lập",
      "Quy luật từ những thay đổi về lượng dẫn đến những thay đổi về chất và ngược lại",
      "Quy luật phủ định của phủ định",
      "Quy luật tự nhiên"
    ]
  },
  {
    "id": 23,
    "question": "Thuộc tính đặc trưng của vật chất theo quan niệm của triết học Mác - Lênin là:",
    "originalA": "Là tồn tại khách quan, độc lập với ý thức con người.",
    "originalOptions": {
      "A": "Là tồn tại khách quan, độc lập với ý thức con người.",
      "B": "Là phạm trù triết học.",
      "C": "Là tất cả những gì đem lại cho con người cảm giác.",
      "D": "Là toàn bộ thế giới khách quan."
    },
    "correctAnswer": "Là tồn tại khách quan, độc lập với ý thức con người.",
    "options": [
      "Là tồn tại khách quan, độc lập với ý thức con người.",
      "Là phạm trù triết học.",
      "Là toàn bộ thế giới khách quan.",
      "Là tất cả những gì đem lại cho con người cảm giác."
    ]
  },
  {
    "id": 24,
    "question": "Quy luật vạch ra cách thức của sự phát triển là:",
    "originalA": "Quy luật từ những sự thay đổi về lượng thành những sự thay đổi về chất và ngược lại.",
    "originalOptions": {
      "A": "Quy luật từ những sự thay đổi về lượng thành những sự thay đổi về chất và ngược lại.",
      "B": "Quy luật thống nhất và đấu tranh của các mặt đối lập.",
      "C": "Quy luật phủ định của phủ định.",
      "D": "Quy luật quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất."
    },
    "correctAnswer": "Quy luật từ những sự thay đổi về lượng thành những sự thay đổi về chất và ngược lại.",
    "options": [
      "Quy luật từ những sự thay đổi về lượng thành những sự thay đổi về chất và ngược lại.",
      "Quy luật thống nhất và đấu tranh của các mặt đối lập.",
      "Quy luật quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất.",
      "Quy luật phủ định của phủ định."
    ]
  },
  {
    "id": 25,
    "question": "Theo quan điểm của chủ nghĩa duy vật biện chứng, luận điểm nào sau đây là đúng?",
    "originalA": "Trong hoạt động thực tiễn phải dựa vào hiện thực, đồng thời phải tính đến khả năng",
    "originalOptions": {
      "A": "Trong hoạt động thực tiễn phải dựa vào hiện thực, đồng thời phải tính đến khả năng",
      "B": "Trong hoạt động thực tiễn phải dựa vào khả năng",
      "C": "Trong hoạt động thực tiễn phải dựa vào hiện thực, không cần tính đến khả năng",
      "D": "Hoạt động thực tiễn không bao hàm hoạt động sáng tạo"
    },
    "correctAnswer": "Trong hoạt động thực tiễn phải dựa vào hiện thực, đồng thời phải tính đến khả năng",
    "options": [
      "Trong hoạt động thực tiễn phải dựa vào hiện thực, không cần tính đến khả năng",
      "Trong hoạt động thực tiễn phải dựa vào hiện thực, đồng thời phải tính đến khả năng",
      "Trong hoạt động thực tiễn phải dựa vào khả năng",
      "Hoạt động thực tiễn không bao hàm hoạt động sáng tạo"
    ]
  },
  {
    "id": 26,
    "question": "“Trong quá trình xây dựng đại học số, cần kế thừa những giá trị của giáo dục truyền thống nhưng phải đổi mới phương pháp dạy học, ứng dụng công nghệ và phát triển năng lực người học”. Đây là quan điểm:",
    "originalA": "Phát triển",
    "originalOptions": {
      "A": "Phát triển",
      "B": "Bảo thủ",
      "C": "Định kiến",
      "D": "Truyền thống"
    },
    "correctAnswer": "Phát triển",
    "options": [
      "Truyền thống",
      "Phát triển",
      "Bảo thủ",
      "Định kiến"
    ]
  },
  {
    "id": 27,
    "question": "Quan điểm cho rằng: “Phụ nữ chỉ nên làm công việc nội trợ, không phù hợp với các vị trí lãnh đạo”. Đây là quan điểm:",
    "originalA": "Định kiến",
    "originalOptions": {
      "A": "Định kiến",
      "B": "Phát triển",
      "C": "Biện chứng",
      "D": "Hợp khoa học."
    },
    "correctAnswer": "Định kiến",
    "options": [
      "Biện chứng",
      "Phát triển",
      "Hợp khoa học.",
      "Định kiến"
    ]
  },
  {
    "id": 28,
    "question": "Trong xã hội sự phát triển biểu hiện ra như thế nào?",
    "originalA": "Sự thay thế chế độ xã hội này bằng một chế độ xã hội khác cao hơn dân chủ, văn minh hơn",
    "originalOptions": {
      "A": "Sự thay thế chế độ xã hội này bằng một chế độ xã hội khác cao hơn dân chủ, văn minh hơn",
      "B": "Sự xuất hiện các hợp chất mới",
      "C": "Sự xuất hiện các giống loài động vật, thực vật mới thích ứng tốt hơn với môi trường",
      "D": "Sự thay thế cấu trúc xã hội"
    },
    "correctAnswer": "Sự thay thế chế độ xã hội này bằng một chế độ xã hội khác cao hơn dân chủ, văn minh hơn",
    "options": [
      "Sự xuất hiện các giống loài động vật, thực vật mới thích ứng tốt hơn với môi trường",
      "Sự thay thế chế độ xã hội này bằng một chế độ xã hội khác cao hơn dân chủ, văn minh hơn",
      "Sự xuất hiện các hợp chất mới",
      "Sự thay thế cấu trúc xã hội"
    ]
  },
  {
    "id": 29,
    "question": "Cơ sở lý luận của quan điểm lịch sử - cụ thể là:",
    "originalA": "Nguyên lý về mối liên hệ phổ biến.",
    "originalOptions": {
      "A": "Nguyên lý về mối liên hệ phổ biến.",
      "B": "Nguyên lý về sự phát triển.",
      "C": "Nguyên lý về sự tồn tại khách quan của thế giới vật chất.",
      "D": "Nguyên lý về tính đa dạng, phong phú của thế giới vật chất."
    },
    "correctAnswer": "Nguyên lý về mối liên hệ phổ biến.",
    "options": [
      "Nguyên lý về mối liên hệ phổ biến.",
      "Nguyên lý về sự phát triển.",
      "Nguyên lý về tính đa dạng, phong phú của thế giới vật chất.",
      "Nguyên lý về sự tồn tại khách quan của thế giới vật chất."
    ]
  },
  {
    "id": 30,
    "question": "Trong hoạt động thực tiễn sai lầm của trì trệ bảo thủ là do không tôn trọng quy luật nào của phép biện chứng duy vật?",
    "originalA": "Quy luật lượng - chất",
    "originalOptions": {
      "A": "Quy luật lượng - chất",
      "B": "Quy luật phủ định của phủ định",
      "C": "Quy luật mâu thuẫn",
      "D": "Quy luật tự nhiên"
    },
    "correctAnswer": "Quy luật lượng - chất",
    "options": [
      "Quy luật lượng - chất",
      "Quy luật phủ định của phủ định",
      "Quy luật mâu thuẫn",
      "Quy luật tự nhiên"
    ]
  },
  {
    "id": 31,
    "question": "Theo quan điểm của chủ nghĩa duy vật biện chứng, luận điểm nào sau đây là sai?",
    "originalA": "Trong giới hạn của độ sự thay đổi của lượng đều đưa đến sự thay đổi về chất của sự vật",
    "originalOptions": {
      "A": "Trong giới hạn của độ sự thay đổi của lượng đều đưa đến sự thay đổi về chất của sự vật",
      "B": "Trong giới hạn của độ sự thay đổi của lượng chưa làm cho chất của sự vật biến đổi",
      "C": "Chỉ khi lượng đạt đến giới hạn của độ mới làm cho chất của sự vật thay đổi",
      "D": "Khi bước nhảy được thực hiện thì sự vật chuyển hóa"
    },
    "correctAnswer": "Trong giới hạn của độ sự thay đổi của lượng đều đưa đến sự thay đổi về chất của sự vật",
    "options": [
      "Trong giới hạn của độ sự thay đổi của lượng chưa làm cho chất của sự vật biến đổi",
      "Trong giới hạn của độ sự thay đổi của lượng đều đưa đến sự thay đổi về chất của sự vật",
      "Chỉ khi lượng đạt đến giới hạn của độ mới làm cho chất của sự vật thay đổi",
      "Khi bước nhảy được thực hiện thì sự vật chuyển hóa"
    ]
  },
  {
    "id": 32,
    "question": "Trong sản xuất xã hội, loại hình sản xuất nào là cơ bản nhất?",
    "originalA": "Sản xuất vật chất.",
    "originalOptions": {
      "A": "Sản xuất vật chất.",
      "B": "Sản xuất tinh thần.",
      "C": "Sản xuất ra bản thân con người.",
      "D": "Các loại hình sản xuất có vai trò ngang nhau."
    },
    "correctAnswer": "Sản xuất vật chất.",
    "options": [
      "Sản xuất vật chất.",
      "Các loại hình sản xuất có vai trò ngang nhau.",
      "Sản xuất tinh thần.",
      "Sản xuất ra bản thân con người."
    ]
  },
  {
    "id": 33,
    "question": "Phương diện nào trong phương thức sản xuất thể hiện mối quan hệ giữa con người với tự nhiên trong quá trình sản xuất vật chất?",
    "originalA": "Lực lượng sản xuất.",
    "originalOptions": {
      "A": "Lực lượng sản xuất.",
      "B": "Quan hệ sản xuất.",
      "C": "Đối tượng lao động.",
      "D": "Tư liệu lao động."
    },
    "correctAnswer": "Lực lượng sản xuất.",
    "options": [
      "Tư liệu lao động.",
      "Đối tượng lao động.",
      "Quan hệ sản xuất.",
      "Lực lượng sản xuất."
    ]
  },
  {
    "id": 34,
    "question": "Mặt nào sau đây trong quan hệ sản xuất giữ vai trò quyết định?",
    "originalA": "Quan hệ sở hữu đối với tư liệu sản xuất.",
    "originalOptions": {
      "A": "Quan hệ sở hữu đối với tư liệu sản xuất.",
      "B": "Không có mặt nào quyết định.",
      "C": "Quan hệ về tổ chức – quản lý quá trình sản xuất.",
      "D": "Quan hệ về phân phối kết quả của quá trình sản xuất."
    },
    "correctAnswer": "Quan hệ sở hữu đối với tư liệu sản xuất.",
    "options": [
      "Quan hệ về tổ chức – quản lý quá trình sản xuất.",
      "Không có mặt nào quyết định.",
      "Quan hệ sở hữu đối với tư liệu sản xuất.",
      "Quan hệ về phân phối kết quả của quá trình sản xuất."
    ]
  },
  {
    "id": 35,
    "question": "Trong bối cảnh hội nhập quốc tế và chuyển đổi số của Việt Nam hiện nay, yêu cầu quan trọng nhất đối với người lao động là gì?",
    "originalA": "Có chuyên môn, kỹ năng nghề nghiệp vững vàng; chủ động rèn luyện sức khỏe và học tập suốt đời, nâng cao năng lực số, tác phong công nghiệp, kỷ luật lao động và tuân thủ pháp luật.",
    "originalOptions": {
      "A": "Có chuyên môn, kỹ năng nghề nghiệp vững vàng; chủ động rèn luyện sức khỏe và học tập suốt đời, nâng cao năng lực số, tác phong công nghiệp, kỷ luật lao động và tuân thủ pháp luật.",
      "B": "Chỉ cần có trình độ chuyên môn cao, không cần thường xuyên cập nhật kiến thức và kỹ năng.",
      "C": "Chỉ tập trung nâng cao năng suất lao động, không cần quan tâm đến đạo đức nghề nghiệp và trách nhiệm xã hội.",
      "D": "Chỉ cần thành thạo ngoại ngữ để đáp ứng yêu cầu của thị trường lao động quốc tế."
    },
    "correctAnswer": "Có chuyên môn, kỹ năng nghề nghiệp vững vàng; chủ động rèn luyện sức khỏe và học tập suốt đời, nâng cao năng lực số, tác phong công nghiệp, kỷ luật lao động và tuân thủ pháp luật.",
    "options": [
      "Chỉ tập trung nâng cao năng suất lao động, không cần quan tâm đến đạo đức nghề nghiệp và trách nhiệm xã hội.",
      "Chỉ cần có trình độ chuyên môn cao, không cần thường xuyên cập nhật kiến thức và kỹ năng.",
      "Có chuyên môn, kỹ năng nghề nghiệp vững vàng; chủ động rèn luyện sức khỏe và học tập suốt đời, nâng cao năng lực số, tác phong công nghiệp, kỷ luật lao động và tuân thủ pháp luật.",
      "Chỉ cần thành thạo ngoại ngữ để đáp ứng yêu cầu của thị trường lao động quốc tế."
    ]
  },
  {
    "id": 36,
    "question": "Một doanh nghiệp tại Việt Nam đầu tư dây chuyền sản xuất tự động nhằm nâng cao năng lực sản xuất, đồng thời thực hiện đầy đủ các quy định pháp luật về lao động và bảo vệ môi trường. Tình huống trên là biểu hiện phương diện nào của nền sản xuất xã hội",
    "originalA": "Phát triển lực lượng sản xuất.",
    "originalOptions": {
      "A": "Phát triển lực lượng sản xuất.",
      "B": "Duy trì quan hệ sản xuất.",
      "C": "Bảo vệ cơ sở hạ tầng.",
      "D": "Tất cả các câu trả lời đều đúng."
    },
    "correctAnswer": "Phát triển lực lượng sản xuất.",
    "options": [
      "Bảo vệ cơ sở hạ tầng.",
      "Phát triển lực lượng sản xuất.",
      "Duy trì quan hệ sản xuất.",
      "Tất cả các câu trả lời đều đúng."
    ]
  },
  {
    "id": 37,
    "question": "Theo quan điểm của chủ nghĩa duy vật lịch sử, trong bối cảnh Cách mạng công nghiệp lần thứ tư hiện nay, nhận định nào sau đây không đúng về sự phát triển của trí tuệ nhân tạo (AI)?",
    "originalA": "AI không làm thay đổi quan hệ sản xuất của xã hội.",
    "originalOptions": {
      "A": "AI không làm thay đổi quan hệ sản xuất của xã hội.",
      "B": "AI biến khoa học thành lực lượng sản xuất trực tiếp.",
      "C": "AI nâng cấp chất lượng công cụ lao động.",
      "D": "AI làm thay đổi vị trí, vai trò của người lao động."
    },
    "correctAnswer": "AI không làm thay đổi quan hệ sản xuất của xã hội.",
    "options": [
      "AI không làm thay đổi quan hệ sản xuất của xã hội.",
      "AI làm thay đổi vị trí, vai trò của người lao động.",
      "AI nâng cấp chất lượng công cụ lao động.",
      "AI biến khoa học thành lực lượng sản xuất trực tiếp."
    ]
  },
  {
    "id": 38,
    "question": "Thực chất của quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng là:",
    "originalA": "Quan hệ giữa kinh tế và chính trị.",
    "originalOptions": {
      "A": "Quan hệ giữa kinh tế và chính trị.",
      "B": "Quan hệ giữa vật chất và tinh thần.",
      "C": "Quan hệ giữa xã hội và chính trị.",
      "D": "Quan hệ giữa xã hội và sản xuất."
    },
    "correctAnswer": "Quan hệ giữa kinh tế và chính trị.",
    "options": [
      "Quan hệ giữa xã hội và chính trị.",
      "Quan hệ giữa kinh tế và chính trị.",
      "Quan hệ giữa xã hội và sản xuất.",
      "Quan hệ giữa vật chất và tinh thần."
    ]
  },
  {
    "id": 39,
    "question": "Căn cứ vào đâu để phân chia giai cấp thành giai cấp cơ bản và giai cấp không cơ bản ?",
    "originalA": "Vào phương thức sản xuất mà giai cấp đó đại diện.",
    "originalOptions": {
      "A": "Vào phương thức sản xuất mà giai cấp đó đại diện.",
      "B": "Vào hệ tư tưởng của giai cấp đó.",
      "C": "Vào số lượng.",
      "D": "Vào cương lĩnh chính trị, đường lối của giai cấp đó."
    },
    "correctAnswer": "Vào phương thức sản xuất mà giai cấp đó đại diện.",
    "options": [
      "Vào số lượng.",
      "Vào hệ tư tưởng của giai cấp đó.",
      "Vào cương lĩnh chính trị, đường lối của giai cấp đó.",
      "Vào phương thức sản xuất mà giai cấp đó đại diện."
    ]
  },
  {
    "id": 40,
    "question": "Nghị quyết số 57-NQ/TW về đột phá, phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia của Bộ Chính trị ban hành năm 2024 phản ánh sự vận dụng nội dung nào trong học thuyết hình thái kinh tế - xã hội?",
    "originalA": "Quy luật về sự phù hợp của quan hệ sản xuất với trình độ của lực lượng sản xuất.",
    "originalOptions": {
      "A": "Quy luật về sự phù hợp của quan hệ sản xuất với trình độ của lực lượng sản xuất.",
      "B": "Quy luật về mối quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng.",
      "C": "Quy luật tồn tại xã hội quyết định ý thức xã hội.",
      "D": "Quy luật về sự phát triển của cách mạng xã hội."
    },
    "correctAnswer": "Quy luật về sự phù hợp của quan hệ sản xuất với trình độ của lực lượng sản xuất.",
    "options": [
      "Quy luật về mối quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng.",
      "Quy luật về sự phát triển của cách mạng xã hội.",
      "Quy luật tồn tại xã hội quyết định ý thức xã hội.",
      "Quy luật về sự phù hợp của quan hệ sản xuất với trình độ của lực lượng sản xuất."
    ]
  },
  {
    "id": 41,
    "question": "Yếu tố cơ bản nhất trong kiến trúc thượng tầng của xã hội có giai cấp là: …",
    "originalA": "Chính trị và nhà nước",
    "originalOptions": {
      "A": "Chính trị và nhà nước",
      "B": "Giai cấp và nhà nước.",
      "C": "Đảng phái và nhà nước",
      "D": "Pháp luật và nhà nước"
    },
    "correctAnswer": "Chính trị và nhà nước",
    "options": [
      "Pháp luật và nhà nước",
      "Đảng phái và nhà nước",
      "Chính trị và nhà nước",
      "Giai cấp và nhà nước."
    ]
  },
  {
    "id": 42,
    "question": "Mối quan hệ giữa lĩnh vực kinh tế và lĩnh vực chính trị của xã hội được khái quát trong quy luật nào?",
    "originalA": "Quy luật về mối quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng.",
    "originalOptions": {
      "A": "Quy luật về mối quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng.",
      "B": "Quy luật tồn tại xã hội quyết định ý thức xã hội.",
      "C": "Quy luật đấu tranh giai cấp.",
      "D": "Tất cả các câu trả lời đều đúng."
    },
    "correctAnswer": "Quy luật về mối quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng.",
    "options": [
      "Quy luật về mối quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng.",
      "Quy luật tồn tại xã hội quyết định ý thức xã hội.",
      "Tất cả các câu trả lời đều đúng.",
      "Quy luật đấu tranh giai cấp."
    ]
  },
  {
    "id": 43,
    "question": "Trong bối cảnh chuyển đổi số ở Việt Nam hiện nay, việc xây dựng Chính phủ số phản ánh yếu tố nào trong kiến trúc thượng tầng?",
    "originalA": "Chính trị và pháp quyền.",
    "originalOptions": {
      "A": "Chính trị và pháp quyền.",
      "B": "Khoa học và giáo dục.",
      "C": "Văn hóa và xã hội.",
      "D": "Sản xuất và kinh tế."
    },
    "correctAnswer": "Chính trị và pháp quyền.",
    "options": [
      "Văn hóa và xã hội.",
      "Sản xuất và kinh tế.",
      "Chính trị và pháp quyền.",
      "Khoa học và giáo dục."
    ]
  },
  {
    "id": 44,
    "question": "Việc các trường đại học đưa nội dung phòng chống tham nhũng, an ninh mạng vào chương trình đào tạo là sự vận dụng chủ yếu của hình thái ý thức xã hội nào?",
    "originalA": "Ý thức pháp quyền.",
    "originalOptions": {
      "A": "Ý thức pháp quyền.",
      "B": "Ý thức đạo đức.",
      "C": "Ý thức khoa học.",
      "D": "Ý thức chính trị."
    },
    "correctAnswer": "Ý thức pháp quyền.",
    "options": [
      "Ý thức đạo đức.",
      "Ý thức pháp quyền.",
      "Ý thức khoa học.",
      "Ý thức chính trị."
    ]
  },
  {
    "id": 45,
    "question": "Bài học kinh nghiệm mà Đảng cộng sản Việt Nam rút ra trong công cuộc đổi mới là gì?",
    "originalA": "Kết hợp đổi mới kinh tế và đổi mới chính trị.",
    "originalOptions": {
      "A": "Kết hợp đổi mới kinh tế và đổi mới chính trị.",
      "B": "Đổi mới kinh tế trước, đổi mới chính trị sau.",
      "C": "Đổi mới chính trị trước, đổi mới kinh tế sau.",
      "D": "Chỉ đổi mới chính trị, không đổi mới kinh tế."
    },
    "correctAnswer": "Kết hợp đổi mới kinh tế và đổi mới chính trị.",
    "options": [
      "Đổi mới chính trị trước, đổi mới kinh tế sau.",
      "Kết hợp đổi mới kinh tế và đổi mới chính trị.",
      "Chỉ đổi mới chính trị, không đổi mới kinh tế.",
      "Đổi mới kinh tế trước, đổi mới chính trị sau."
    ]
  },
  {
    "id": 46,
    "question": "Theo chủ nghĩa duy vật lịch sử, nhà nước mang bản chất của:",
    "originalA": "Giai cấp thống trị.",
    "originalOptions": {
      "A": "Giai cấp thống trị.",
      "B": "Nhân dân.",
      "C": "Tầng lớp bị áp bức.",
      "D": "Giai cấp bị thống trị."
    },
    "correctAnswer": "Giai cấp thống trị.",
    "options": [
      "Giai cấp bị thống trị.",
      "Nhân dân.",
      "Giai cấp thống trị.",
      "Tầng lớp bị áp bức."
    ]
  },
  {
    "id": 47,
    "question": "Nhận định nào sau đây là sai?",
    "originalA": "Trong kết cấu của ý thức xã hội, tâm lý xã hội và hệ tư tưởng tách rời nhau.",
    "originalOptions": {
      "A": "Trong kết cấu của ý thức xã hội, tâm lý xã hội và hệ tư tưởng tách rời nhau.",
      "B": "Trong kết cấu của ý thức xã hội, tâm lý xã hội và hệ tưởng tác động qua lại lẫn nhau",
      "C": "Trong kết cấu của ý thức xã hội, tâm lý xã hội và hệ tư tưởng kế thừa lẫn nhau.",
      "D": "Tâm lý xã hội và hệ tư tưởng là hai cấp độ của ý thức xã hội"
    },
    "correctAnswer": "Trong kết cấu của ý thức xã hội, tâm lý xã hội và hệ tư tưởng tách rời nhau.",
    "options": [
      "Trong kết cấu của ý thức xã hội, tâm lý xã hội và hệ tư tưởng kế thừa lẫn nhau.",
      "Tâm lý xã hội và hệ tư tưởng là hai cấp độ của ý thức xã hội",
      "Trong kết cấu của ý thức xã hội, tâm lý xã hội và hệ tư tưởng tách rời nhau.",
      "Trong kết cấu của ý thức xã hội, tâm lý xã hội và hệ tưởng tác động qua lại lẫn nhau"
    ]
  },
  {
    "id": 48,
    "question": "Việc các trường đại học tăng cường giáo dục đạo đức nghề nghiệp, trách nhiệm xã hội và văn hóa ứng xử cho sinh viên trong nội dung chương trình đào tạo là sự thể hiện của hình thái ý thức xã hội nào?",
    "originalA": "Ý thức đạo đức.",
    "originalOptions": {
      "A": "Ý thức đạo đức.",
      "B": "Ý thức chính trị.",
      "C": "Ý thức pháp quyền.",
      "D": "Ý thức khoa học."
    },
    "correctAnswer": "Ý thức đạo đức.",
    "options": [
      "Ý thức pháp quyền.",
      "Ý thức đạo đức.",
      "Ý thức chính trị.",
      "Ý thức khoa học."
    ]
  },
  {
    "id": 49,
    "question": "Quan điểm nào sau đây không phải là của chủ nghĩa duy vật lịch sử?",
    "originalA": "Con người không khác biệt so với con vật khi họ bắt đầu sản xuất ra những tư liệu sinh hoạt của mình.",
    "originalOptions": {
      "A": "Con người không khác biệt so với con vật khi họ bắt đầu sản xuất ra những tư liệu sinh hoạt của mình.",
      "B": "Hoạt động xã hội quan trọng nhất của con người là lao động sản xuất.",
      "C": "Con người là sản phẩm của lịch sử và của chính bản thân con người.",
      "D": "Con người vừa là chủ thể của lịch sử, vừa là sản phẩm của lịch sử."
    },
    "correctAnswer": "Con người không khác biệt so với con vật khi họ bắt đầu sản xuất ra những tư liệu sinh hoạt của mình.",
    "options": [
      "Con người là sản phẩm của lịch sử và của chính bản thân con người.",
      "Con người không khác biệt so với con vật khi họ bắt đầu sản xuất ra những tư liệu sinh hoạt của mình.",
      "Con người vừa là chủ thể của lịch sử, vừa là sản phẩm của lịch sử.",
      "Hoạt động xã hội quan trọng nhất của con người là lao động sản xuất."
    ]
  },
  {
    "id": 50,
    "question": "Theo quan điểm của chủ nghĩa duy vật lịch sử về bản chất con người, câu ca dao: “Trong đầm gì đẹp bằng sen, lá xanh bông trắng lại chen nhị vàng, nhị vàng bông trắng lá xanh, gần bùn mà chẳng hôi tanh mùi bùn” nói lên điều gì?",
    "originalA": "Mặc dù chịu tác động của hoàn cảnh xã hội, con người vẫn có khả năng rèn luyện, phát huy những giá trị tốt đẹp để hoàn thiện bản thân.",
    "originalOptions": {
      "A": "Mặc dù chịu tác động của hoàn cảnh xã hội, con người vẫn có khả năng rèn luyện, phát huy những giá trị tốt đẹp để hoàn thiện bản thân.",
      "B": "Con người có bản chất bẩm sinh, không chịu ảnh hưởng của hoàn cảnh xã hội.",
      "C": "Con người luôn bị hoàn cảnh xã hội quyết định hoàn toàn.",
      "D": "Con người không thể vượt lên những điều kiện bất lợi."
    },
    "correctAnswer": "Mặc dù chịu tác động của hoàn cảnh xã hội, con người vẫn có khả năng rèn luyện, phát huy những giá trị tốt đẹp để hoàn thiện bản thân.",
    "options": [
      "Con người luôn bị hoàn cảnh xã hội quyết định hoàn toàn.",
      "Con người không thể vượt lên những điều kiện bất lợi.",
      "Con người có bản chất bẩm sinh, không chịu ảnh hưởng của hoàn cảnh xã hội.",
      "Mặc dù chịu tác động của hoàn cảnh xã hội, con người vẫn có khả năng rèn luyện, phát huy những giá trị tốt đẹp để hoàn thiện bản thân."
    ]
  },
  {
    "id": 51,
    "question": "Khi giải quyết mặt thứ nhất vấn đề cơ bản của triết học, trường phái nào cho rằng ý thức, tinh thần, ý niệm, cảm giác là cái có trước giới tự nhiên?",
    "originalA": "Chủ nghĩa duy tâm.",
    "originalOptions": {
      "A": "Chủ nghĩa duy tâm.",
      "B": "Chủ nghĩa duy vật.",
      "C": "Thuyết bất khả tri (Không thể biết).",
      "D": "Nhị nguyên luận."
    },
    "correctAnswer": "Chủ nghĩa duy tâm.",
    "options": [
      "Nhị nguyên luận.",
      "Thuyết bất khả tri (Không thể biết).",
      "Chủ nghĩa duy vật.",
      "Chủ nghĩa duy tâm."
    ]
  },
  {
    "id": 52,
    "question": "Đoạn tuyệt triệt để với tham vọng coi triết học là “khoa học của các khoa học”, triết học Mác xác định đối tượng nghiên cứu của mình là gì?",
    "originalA": "Giải quyết mối quan hệ giữa vật chất và ý thức trên lập trường duy vật biện chứng và nghiên cứu những quy luật chung nhất của tự nhiên, xã hội và tư duy.",
    "originalOptions": {
      "A": "Giải quyết mối quan hệ giữa vật chất và ý thức trên lập trường duy vật biện chứng và nghiên cứu những quy luật chung nhất của tự nhiên, xã hội và tư duy.",
      "B": "Nghiên cứu những quy luật trong các lĩnh vực riêng biệt về tự nhiên, xã hội hoặc tư duy.",
      "C": "Mô tả những hiện tượng tinh thần, phân tích ngữ nghĩa và chú giải các văn bản triết học cổ đại.",
      "D": "Nghiên cứu các chủ đề như niềm tin tôn giáo, thiên đường, địa ngục hoặc chú giải các tín điều phi thế tục."
    },
    "correctAnswer": "Giải quyết mối quan hệ giữa vật chất và ý thức trên lập trường duy vật biện chứng và nghiên cứu những quy luật chung nhất của tự nhiên, xã hội và tư duy.",
    "options": [
      "Mô tả những hiện tượng tinh thần, phân tích ngữ nghĩa và chú giải các văn bản triết học cổ đại.",
      "Nghiên cứu những quy luật trong các lĩnh vực riêng biệt về tự nhiên, xã hội hoặc tư duy.",
      "Nghiên cứu các chủ đề như niềm tin tôn giáo, thiên đường, địa ngục hoặc chú giải các tín điều phi thế tục.",
      "Giải quyết mối quan hệ giữa vật chất và ý thức trên lập trường duy vật biện chứng và nghiên cứu những quy luật chung nhất của tự nhiên, xã hội và tư duy."
    ]
  },
  {
    "id": 53,
    "question": "Việc giải quyết mặt thứ nhất vấn đề cơ bản của triết học (giữa ý thức và vật chất thì cái nào có trước) đã chia các nhà triết học thành hai trường phái lớn nào?",
    "originalA": "Chủ nghĩa duy vật và chủ nghĩa duy tâm.",
    "originalOptions": {
      "A": "Chủ nghĩa duy vật và chủ nghĩa duy tâm.",
      "B": "Thuyết khả tri và thuyết bất khả tri.",
      "C": "Phương pháp biện chứng và phương pháp siêu hình.",
      "D": "Nhất nguyên luận và nhị nguyên luận."
    },
    "correctAnswer": "Chủ nghĩa duy vật và chủ nghĩa duy tâm.",
    "options": [
      "Chủ nghĩa duy vật và chủ nghĩa duy tâm.",
      "Thuyết khả tri và thuyết bất khả tri.",
      "Nhất nguyên luận và nhị nguyên luận.",
      "Phương pháp biện chứng và phương pháp siêu hình."
    ]
  },
  {
    "id": 54,
    "question": "Hình thức nào của chủ nghĩa duy vật thừa nhận tính thứ nhất của vật chất nhưng lại đồng nhất vật chất với một hay một số chất cụ thể của vật chất?",
    "originalA": "Chủ nghĩa duy vật chất phác.",
    "originalOptions": {
      "A": "Chủ nghĩa duy vật chất phác.",
      "B": "Chủ nghĩa duy vật siêu hình.",
      "C": "Chủ nghĩa duy vật biện chứng.",
      "D": "Chủ nghĩa duy tâm khách quan."
    },
    "correctAnswer": "Chủ nghĩa duy vật chất phác.",
    "options": [
      "Chủ nghĩa duy vật biện chứng.",
      "Chủ nghĩa duy vật chất phác.",
      "Chủ nghĩa duy vật siêu hình.",
      "Chủ nghĩa duy tâm khách quan."
    ]
  },
  {
    "id": 55,
    "question": "Khi xem xét một sự vật, nếu chủ thể nhận thức \"chỉ nhìn thấy cây mà không thấy rừng\", chỉ nhìn thấy trạng thái tĩnh mà quên mất sự vận động của sự vật, thì chủ thể đó đang mắc phải sai lầm của phương pháp tư duy nào?",
    "originalA": "Phương pháp siêu hình.",
    "originalOptions": {
      "A": "Phương pháp siêu hình.",
      "B": "Phương pháp biện chứng.",
      "C": "Phương pháp duy tâm chủ quan.",
      "D": "Phương pháp ngụy biện và chiết trung."
    },
    "correctAnswer": "Phương pháp siêu hình.",
    "options": [
      "Phương pháp duy tâm chủ quan.",
      "Phương pháp siêu hình.",
      "Phương pháp biện chứng.",
      "Phương pháp ngụy biện và chiết trung."
    ]
  },
  {
    "id": 56,
    "question": "Một nhà khoa học khi nghiên cứu một hiện tượng xã hội chỉ chú ý đến các yếu tố thống kê tĩnh tại ở một thời điểm, tách rời hiện tượng đó khỏi hoàn cảnh lịch sử và phủ nhận mâu thuẫn bên trong của nó. Cách nghiên cứu này mang đặc trưng của phương pháp tư duy nào?",
    "originalA": "Phương pháp siêu hình.",
    "originalOptions": {
      "A": "Phương pháp siêu hình.",
      "B": "Phương pháp biện chứng duy vật.",
      "C": "Phương pháp lịch sử - cụ thể.",
      "D": "Phương pháp biện chứng tự phát."
    },
    "correctAnswer": "Phương pháp siêu hình.",
    "options": [
      "Phương pháp biện chứng tự phát.",
      "Phương pháp siêu hình.",
      "Phương pháp lịch sử - cụ thể.",
      "Phương pháp biện chứng duy vật."
    ]
  },
  {
    "id": 57,
    "question": "Khi thu thập và phân tích tài liệu để viết báo cáo khoa học về sự biến đổi của triết học phương Tây thế kỷ XV - XVII, sinh viên cần vạch ra đặc trưng cốt lõi nào làm nền tảng cho sự chuyển biến tư tưởng ở thời kỳ này?",
    "originalA": "Sự ra đời và phát triển mạnh mẽ của khoa học thực nghiệm đã thúc đẩy chủ nghĩa duy vật đấu tranh chống lại chủ nghĩa duy tâm và tôn giáo.",
    "originalOptions": {
      "A": "Sự ra đời và phát triển mạnh mẽ của khoa học thực nghiệm đã thúc đẩy chủ nghĩa duy vật đấu tranh chống lại chủ nghĩa duy tâm và tôn giáo.",
      "B": "Sự ra đời của triết học Mác đã đoạn tuyệt triệt để với tham vọng coi triết học là “khoa học của các khoa học”.",
      "C": "Quyền lực của Giáo hội bao trùm mọi lĩnh vực làm cho triết học trở thành nữ tì của thần học, nặng về tư biện.",
      "D": "Tư duy huyền thoại suy giảm, tư duy lý luận xuất hiện đóng vai trò giải quyết tất cả các vấn đề về tự nhiên, xã hội."
    },
    "correctAnswer": "Sự ra đời và phát triển mạnh mẽ của khoa học thực nghiệm đã thúc đẩy chủ nghĩa duy vật đấu tranh chống lại chủ nghĩa duy tâm và tôn giáo.",
    "options": [
      "Sự ra đời và phát triển mạnh mẽ của khoa học thực nghiệm đã thúc đẩy chủ nghĩa duy vật đấu tranh chống lại chủ nghĩa duy tâm và tôn giáo.",
      "Sự ra đời của triết học Mác đã đoạn tuyệt triệt để với tham vọng coi triết học là “khoa học của các khoa học”.",
      "Quyền lực của Giáo hội bao trùm mọi lĩnh vực làm cho triết học trở thành nữ tì của thần học, nặng về tư biện.",
      "Tư duy huyền thoại suy giảm, tư duy lý luận xuất hiện đóng vai trò giải quyết tất cả các vấn đề về tự nhiên, xã hội."
    ]
  },
  {
    "id": 58,
    "question": "Khi làm việc nhóm để giải quyết một bài tập khoa học chuyên ngành, theo triết học Mác - Lênin, việc các thành viên trong nhóm (dù vô tình hay hữu ý) đều bị chi phối bởi một thế giới quan triết học nhất định được lý giải do đâu?",
    "originalA": "Vì tư duy triết học luôn ẩn giấu sâu trong mỗi suy nghĩ, hành vi, là chỗ dựa tiềm thức của kinh nghiệm cá nhân và là thành tố hữu cơ trong tri thức khoa học.",
    "originalOptions": {
      "A": "Vì tư duy triết học luôn ẩn giấu sâu trong mỗi suy nghĩ, hành vi, là chỗ dựa tiềm thức của kinh nghiệm cá nhân và là thành tố hữu cơ trong tri thức khoa học.",
      "B": "Vì mọi cá nhân đều bắt buộc phải tham gia các khóa học về triết học trước khi có thể tiến hành nghiên cứu các khoa học chuyên ngành.",
      "C": "Vì triết học là khoa học của mọi khoa học, cung cấp trực tiếp các công thức và định lý để giải quyết mọi tình huống chuyên sâu cụ thể.",
      "D": "Vì thế giới quan triết học là sự phản chiếu trực tiếp của tín ngưỡng tôn giáo, điều mà con người không thể rũ bỏ trong hoạt động thực tiễn."
    },
    "correctAnswer": "Vì tư duy triết học luôn ẩn giấu sâu trong mỗi suy nghĩ, hành vi, là chỗ dựa tiềm thức của kinh nghiệm cá nhân và là thành tố hữu cơ trong tri thức khoa học.",
    "options": [
      "Vì mọi cá nhân đều bắt buộc phải tham gia các khóa học về triết học trước khi có thể tiến hành nghiên cứu các khoa học chuyên ngành.",
      "Vì tư duy triết học luôn ẩn giấu sâu trong mỗi suy nghĩ, hành vi, là chỗ dựa tiềm thức của kinh nghiệm cá nhân và là thành tố hữu cơ trong tri thức khoa học.",
      "Vì triết học là khoa học của mọi khoa học, cung cấp trực tiếp các công thức và định lý để giải quyết mọi tình huống chuyên sâu cụ thể.",
      "Vì thế giới quan triết học là sự phản chiếu trực tiếp của tín ngưỡng tôn giáo, điều mà con người không thể rũ bỏ trong hoạt động thực tiễn."
    ]
  },
  {
    "id": 59,
    "question": "Khi thảo luận nhóm để phân tích nguyên nhân thất bại của một phong trào xã hội, nếu một sinh viên chỉ liệt kê các dữ kiện tĩnh tại ở một thời điểm, tách rời phong trào đó khỏi hoàn cảnh lịch sử, sinh viên này cần phải điều chỉnh phương pháp tư duy nào để phù hợp với yêu cầu phân tích khoa học?",
    "originalA": "Từ bỏ phương pháp tư duy siêu hình để chuyển sang phương pháp tư duy biện chứng.",
    "originalOptions": {
      "A": "Từ bỏ phương pháp tư duy siêu hình để chuyển sang phương pháp tư duy biện chứng.",
      "B": "Từ bỏ phương pháp ngụy biện để chuyển sang phương pháp duy tâm chủ quan.",
      "C": "Từ bỏ phương pháp biện chứng tự phát để chuyển sang phương pháp chiết trung.",
      "D": "Từ bỏ phương pháp nhận thức kinh nghiệm để trở về với phương pháp tư duy giáo điều."
    },
    "correctAnswer": "Từ bỏ phương pháp tư duy siêu hình để chuyển sang phương pháp tư duy biện chứng.",
    "options": [
      "Từ bỏ phương pháp nhận thức kinh nghiệm để trở về với phương pháp tư duy giáo điều.",
      "Từ bỏ phương pháp ngụy biện để chuyển sang phương pháp duy tâm chủ quan.",
      "Từ bỏ phương pháp biện chứng tự phát để chuyển sang phương pháp chiết trung.",
      "Từ bỏ phương pháp tư duy siêu hình để chuyển sang phương pháp tư duy biện chứng."
    ]
  },
  {
    "id": 60,
    "question": "Khi giải quyết mặt thứ hai của vấn đề cơ bản của triết học, học thuyết nào khẳng định về nguyên tắc con người có thể hiểu được bản chất của sự vật?",
    "originalA": "Thuyết khả tri (Thuyết có thể biết).",
    "originalOptions": {
      "A": "Thuyết khả tri (Thuyết có thể biết).",
      "B": "Thuyết bất khả tri (Thuyết không thể biết).",
      "C": "Hoài nghi luận.",
      "D": "Nhị nguyên luận."
    },
    "correctAnswer": "Thuyết khả tri (Thuyết có thể biết).",
    "options": [
      "Thuyết bất khả tri (Thuyết không thể biết).",
      "Hoài nghi luận.",
      "Nhị nguyên luận.",
      "Thuyết khả tri (Thuyết có thể biết)."
    ]
  },
  {
    "id": 61,
    "question": "Một nhóm sinh viên khi phân tích sự thất bại của một chính sách kinh tế đã chỉ ra rằng: Người ban hành chính sách chỉ mang nguyên lý chung áp dụng vào thực tế mà không tính đến \"kinh nghiệm cụ thể của lịch sử\" và hoàn cảnh thực tại. Theo triết học Mác - Lênin, người ban hành chính sách đã mắc phải sai lầm gì?",
    "originalA": "Vi phạm nguyên tắc lịch sử - cụ thể, sa vào chủ nghĩa giáo điều khi vận dụng lý luận.",
    "originalOptions": {
      "A": "Vi phạm nguyên tắc lịch sử - cụ thể, sa vào chủ nghĩa giáo điều khi vận dụng lý luận.",
      "B": "Vi phạm nguyên tắc khách quan, sa vào chủ nghĩa duy tâm chủ quan.",
      "C": "Vi phạm nguyên tắc phát triển, sa vào chủ nghĩa bảo thủ, trì trệ.",
      "D": "Vi phạm nguyên tắc toàn diện, sa vào thuật ngụy biện và chiết trung."
    },
    "correctAnswer": "Vi phạm nguyên tắc lịch sử - cụ thể, sa vào chủ nghĩa giáo điều khi vận dụng lý luận.",
    "options": [
      "Vi phạm nguyên tắc khách quan, sa vào chủ nghĩa duy tâm chủ quan.",
      "Vi phạm nguyên tắc toàn diện, sa vào thuật ngụy biện và chiết trung.",
      "Vi phạm nguyên tắc phát triển, sa vào chủ nghĩa bảo thủ, trì trệ.",
      "Vi phạm nguyên tắc lịch sử - cụ thể, sa vào chủ nghĩa giáo điều khi vận dụng lý luận."
    ]
  },
  {
    "id": 62,
    "question": "Khi các thế lực thù địch lợi dụng sự sụp đổ của mô hình chủ nghĩa xã hội ở Liên Xô và Đông Âu để rêu rao rằng \"Chủ nghĩa Mác - Lênin đã lỗi thời\", sinh viên cần vận dụng lập trường triết học nào để phản bác luận điệu này?",
    "originalA": "Khẳng định sự sụp đổ đó là do sai lầm chủ quan, giáo điều, xa rời lập trường Mác - Lênin trong quá trình lãnh đạo, chứ không phải do bản chất khoa học và cách mạng của chủ nghĩa Mác - Lênin đã lỗi thời.",
    "originalOptions": {
      "A": "Khẳng định sự sụp đổ đó là do sai lầm chủ quan, giáo điều, xa rời lập trường Mác - Lênin trong quá trình lãnh đạo, chứ không phải do bản chất khoa học và cách mạng của chủ nghĩa Mác - Lênin đã lỗi thời.",
      "B": "Thừa nhận chủ nghĩa Mác - Lênin đã lỗi thời về mặt mô hình chính trị nhưng vẫn còn giá trị về mặt nhân văn, đạo đức.",
      "C": "Khẳng định sự sụp đổ đó là một bước lùi ngẫu nhiên không có nguyên nhân cụ thể, không liên quan đến học thuyết.",
      "D": "Phủ nhận hoàn toàn sự sụp đổ của mô hình Xô Viết, coi đó chỉ là thông tin bịa đặt của truyền thông phương Tây."
    },
    "correctAnswer": "Khẳng định sự sụp đổ đó là do sai lầm chủ quan, giáo điều, xa rời lập trường Mác - Lênin trong quá trình lãnh đạo, chứ không phải do bản chất khoa học và cách mạng của chủ nghĩa Mác - Lênin đã lỗi thời.",
    "options": [
      "Thừa nhận chủ nghĩa Mác - Lênin đã lỗi thời về mặt mô hình chính trị nhưng vẫn còn giá trị về mặt nhân văn, đạo đức.",
      "Khẳng định sự sụp đổ đó là do sai lầm chủ quan, giáo điều, xa rời lập trường Mác - Lênin trong quá trình lãnh đạo, chứ không phải do bản chất khoa học và cách mạng của chủ nghĩa Mác - Lênin đã lỗi thời.",
      "Khẳng định sự sụp đổ đó là một bước lùi ngẫu nhiên không có nguyên nhân cụ thể, không liên quan đến học thuyết.",
      "Phủ nhận hoàn toàn sự sụp đổ của mô hình Xô Viết, coi đó chỉ là thông tin bịa đặt của truyền thông phương Tây."
    ]
  },
  {
    "id": 63,
    "question": "Một cán bộ quản lý cho rằng chỉ cần học thuộc lòng các nguyên lý triết học Mác - Lênin là có thể tự động giải quyết mọi vấn đề phức tạp tại địa phương mà không cần khảo sát thực tiễn. Theo phương pháp luận mácxít, cán bộ này đã mắc phải sai lầm gì?",
    "originalA": "Tuyệt đối hóa vai trò của triết học, sa vào chủ nghĩa giáo điều khi áp dụng máy móc các nguyên lý chung mà không tính đến “kinh nghiệm cụ thể của lịch sử”.,",
    "originalOptions": {
      "A": "Tuyệt đối hóa vai trò của triết học, sa vào chủ nghĩa giáo điều khi áp dụng máy móc các nguyên lý chung mà không tính đến “kinh nghiệm cụ thể của lịch sử”.,",
      "B": "Phủ nhận hoàn toàn vai trò của lý luận triết học, sa vào chủ nghĩa kinh nghiệm thuần túy, mù quáng.",
      "C": "Rơi vào chủ nghĩa hoài nghi, không tin tưởng vào sự tồn tại của các quy luật khách quan trong xã hội.",
      "D": "Sa vào chủ nghĩa chiết trung, lắp ghép vô nguyên tắc các định lý khoa học tự nhiên vào quản lý xã hội."
    },
    "correctAnswer": "Tuyệt đối hóa vai trò của triết học, sa vào chủ nghĩa giáo điều khi áp dụng máy móc các nguyên lý chung mà không tính đến “kinh nghiệm cụ thể của lịch sử”.,",
    "options": [
      "Phủ nhận hoàn toàn vai trò của lý luận triết học, sa vào chủ nghĩa kinh nghiệm thuần túy, mù quáng.",
      "Tuyệt đối hóa vai trò của triết học, sa vào chủ nghĩa giáo điều khi áp dụng máy móc các nguyên lý chung mà không tính đến “kinh nghiệm cụ thể của lịch sử”.,",
      "Rơi vào chủ nghĩa hoài nghi, không tin tưởng vào sự tồn tại của các quy luật khách quan trong xã hội.",
      "Sa vào chủ nghĩa chiết trung, lắp ghép vô nguyên tắc các định lý khoa học tự nhiên vào quản lý xã hội."
    ]
  },
  {
    "id": 64,
    "question": "Vận dụng phương pháp luận của triết học Mác - Lênin vào thực tiễn Đổi mới, Đảng Cộng sản Việt Nam xác định mối quan hệ nào là cốt lõi, mang tính nền tảng cho việc giải quyết các mối quan hệ khác?",
    "originalA": "Mối quan hệ giữa đổi mới kinh tế và đổi mới chính trị.",
    "originalOptions": {
      "A": "Mối quan hệ giữa đổi mới kinh tế và đổi mới chính trị.",
      "B": "Mối quan hệ giữa đổi mới văn hóa và đổi mới giáo dục.",
      "C": "Mối quan hệ giữa hội nhập quốc tế và bảo vệ an ninh quốc gia.",
      "D": "Mối quan hệ giữa phát triển lực lượng sản xuất và phát triển khoa học công nghệ."
    },
    "correctAnswer": "Mối quan hệ giữa đổi mới kinh tế và đổi mới chính trị.",
    "options": [
      "Mối quan hệ giữa phát triển lực lượng sản xuất và phát triển khoa học công nghệ.",
      "Mối quan hệ giữa đổi mới kinh tế và đổi mới chính trị.",
      "Mối quan hệ giữa hội nhập quốc tế và bảo vệ an ninh quốc gia.",
      "Mối quan hệ giữa đổi mới văn hóa và đổi mới giáo dục."
    ]
  },
  {
    "id": 65,
    "question": "Nguyên lý cơ bản của phép biện chứng duy vật là nguyên lý nào?",
    "originalA": "Nguyên lý về mối liên hệ phổ biến và về sự phát triển",
    "originalOptions": {
      "A": "Nguyên lý về mối liên hệ phổ biến và về sự phát triển",
      "B": "Nguyên lý về sự tồn tại khách quan của vật chất",
      "C": "Nguyên lý về sự vận động và đứng im của các sự vật",
      "D": "Nguyên lý về tính liên tục và tính gián đoạn của thế giới vật chất"
    },
    "correctAnswer": "Nguyên lý về mối liên hệ phổ biến và về sự phát triển",
    "options": [
      "Nguyên lý về tính liên tục và tính gián đoạn của thế giới vật chất",
      "Nguyên lý về sự vận động và đứng im của các sự vật",
      "Nguyên lý về mối liên hệ phổ biến và về sự phát triển",
      "Nguyên lý về sự tồn tại khách quan của vật chất"
    ]
  },
  {
    "id": 66,
    "question": "Theo quan điểm của chủ nghĩa Mác-Lênin:",
    "originalA": "Vật chất quyết định nội dung, bản chất và sự vận động, phát triển của ý thức.",
    "originalOptions": {
      "A": "Vật chất quyết định nội dung, bản chất và sự vận động, phát triển của ý thức.",
      "B": "Vật chất chỉ quyết định nội dung của ý thức, không quyết định sự vận động, phát triển của ý thức.",
      "C": "Vật chất quyết định sự vật động và bản chất của thức, không quyết định nội dung của ý thức.",
      "D": "Vật chất chỉ quyết định bản chất của ý thức, không quyết định sự vận động của ý thức"
    },
    "correctAnswer": "Vật chất quyết định nội dung, bản chất và sự vận động, phát triển của ý thức.",
    "options": [
      "Vật chất quyết định nội dung, bản chất và sự vận động, phát triển của ý thức.",
      "Vật chất quyết định sự vật động và bản chất của thức, không quyết định nội dung của ý thức.",
      "Vật chất chỉ quyết định nội dung của ý thức, không quyết định sự vận động, phát triển của ý thức.",
      "Vật chất chỉ quyết định bản chất của ý thức, không quyết định sự vận động của ý thức"
    ]
  },
  {
    "id": 67,
    "question": "Phạm trù nói lên bước ngoặt của sự thay đổi về lượng đưa đến sự thay đổi về chất là:",
    "originalA": "Bước nhảy.",
    "originalOptions": {
      "A": "Bước nhảy.",
      "B": "Độ.",
      "C": "Điểm nút.",
      "D": "Đột biến."
    },
    "correctAnswer": "Bước nhảy.",
    "options": [
      "Điểm nút.",
      "Độ.",
      "Bước nhảy.",
      "Đột biến."
    ]
  },
  {
    "id": 68,
    "question": "Quy luật vạch ra nguồn gốc của sự phát triển là:",
    "originalA": "Quy luật thống nhất và đấu tranh của các mặt đối lập.",
    "originalOptions": {
      "A": "Quy luật thống nhất và đấu tranh của các mặt đối lập.",
      "B": "Quy luật từ những sự thay đổi về lượng thành những sự thay đổi về chất và ngược lại.",
      "C": "Quy luật phủ định của phủ định.",
      "D": "Quy luật quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất."
    },
    "correctAnswer": "Quy luật thống nhất và đấu tranh của các mặt đối lập.",
    "options": [
      "Quy luật quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất.",
      "Quy luật từ những sự thay đổi về lượng thành những sự thay đổi về chất và ngược lại.",
      "Quy luật thống nhất và đấu tranh của các mặt đối lập.",
      "Quy luật phủ định của phủ định."
    ]
  },
  {
    "id": 69,
    "question": "Tính quy định nói lên quy mô trình độ phát triển của sự vật được gọi là gì?",
    "originalA": "Lượng",
    "originalOptions": {
      "A": "Lượng",
      "B": "Chất",
      "C": "Độ",
      "D": "Điểm nút"
    },
    "correctAnswer": "Lượng",
    "options": [
      "Lượng",
      "Độ",
      "Điểm nút",
      "Chất"
    ]
  },
  {
    "id": 70,
    "question": "Yếu tố quan trọng nhất trong kết cấu của ý thức:",
    "originalA": "Tri thức.",
    "originalOptions": {
      "A": "Tri thức.",
      "B": "Ý chí.",
      "C": "Niềm tin.",
      "D": "Tình cảm."
    },
    "correctAnswer": "Tri thức.",
    "options": [
      "Tri thức.",
      "Niềm tin.",
      "Ý chí.",
      "Tình cảm."
    ]
  },
  {
    "id": 71,
    "question": "Lựa chọn câu đúng nhất theo quan điểm của chủ nghĩa duy vật biện chứng",
    "originalA": "Mối liên hệ của sự vật hiện tượng không chỉ diễn ra giữa các sự vật hiện tượng mà còn diễn ra ngay trong sự vật hiện tượng.",
    "originalOptions": {
      "A": "Mối liên hệ của sự vật hiện tượng không chỉ diễn ra giữa các sự vật hiện tượng mà còn diễn ra ngay trong sự vật hiện tượng.",
      "B": "Mối liên hệ chỉ diễn ra giữa các sự vật hiện tượng với nhau còn trong bản thân sự vật hiện tượng không có sự liên hệ.",
      "C": "Mối liên hệ của sự vật hiện tượng chỉ do ý chí con người tạo ra còn bản thân sự vật hiện tượng không có sự liên hệ.",
      "D": "Tất cả các câu đều sai"
    },
    "correctAnswer": "Mối liên hệ của sự vật hiện tượng không chỉ diễn ra giữa các sự vật hiện tượng mà còn diễn ra ngay trong sự vật hiện tượng.",
    "options": [
      "Mối liên hệ của sự vật hiện tượng chỉ do ý chí con người tạo ra còn bản thân sự vật hiện tượng không có sự liên hệ.",
      "Mối liên hệ chỉ diễn ra giữa các sự vật hiện tượng với nhau còn trong bản thân sự vật hiện tượng không có sự liên hệ.",
      "Mối liên hệ của sự vật hiện tượng không chỉ diễn ra giữa các sự vật hiện tượng mà còn diễn ra ngay trong sự vật hiện tượng.",
      "Tất cả các câu đều sai"
    ]
  },
  {
    "id": 72,
    "question": "Trong một doanh nghiệp đang gặp khủng hoảng tài chính, đâu là mâu thuẫn chủ yếu?",
    "originalA": "Giữa chi phí quá cao và doanh thu quá thấp.",
    "originalOptions": {
      "A": "Giữa chi phí quá cao và doanh thu quá thấp.",
      "B": "Giữa các phòng ban.",
      "C": "Giữa nhân viên và quản lý.",
      "D": "Giữa doanh nghiệp với đối thủ cạnh tranh."
    },
    "correctAnswer": "Giữa chi phí quá cao và doanh thu quá thấp.",
    "options": [
      "Giữa nhân viên và quản lý.",
      "Giữa chi phí quá cao và doanh thu quá thấp.",
      "Giữa các phòng ban.",
      "Giữa doanh nghiệp với đối thủ cạnh tranh."
    ]
  },
  {
    "id": 73,
    "question": "Tìm đáp án sai theo quan điểm của chủ nghĩa duy vật biện chứng:",
    "originalA": "Ý thức là thuộc tính của một dạng vật chất.",
    "originalOptions": {
      "A": "Ý thức là thuộc tính của một dạng vật chất.",
      "B": "Ý thức là hình thức phản ánh chỉ có ở con người.",
      "C": "Thuộc tính phản ánh cũng phát triển từ thấp đến cao, từ đơn giản đến phức tạp.",
      "D": "Phản ánh là thuộc tính của mọi dạng vật chất."
    },
    "correctAnswer": "Ý thức là thuộc tính của một dạng vật chất.",
    "options": [
      "Ý thức là hình thức phản ánh chỉ có ở con người.",
      "Phản ánh là thuộc tính của mọi dạng vật chất.",
      "Ý thức là thuộc tính của một dạng vật chất.",
      "Thuộc tính phản ánh cũng phát triển từ thấp đến cao, từ đơn giản đến phức tạp."
    ]
  },
  {
    "id": 74,
    "question": "Tìm đáp án sai theo quan điểm của chủ nghĩa duy vật biện chứng về vai trò của thực tiễn đối với nhận thức:",
    "originalA": "Nhận thức không cần có thực tiễn.",
    "originalOptions": {
      "A": "Nhận thức không cần có thực tiễn.",
      "B": "Mục đích của nhận thức.",
      "C": "Động lực của nhận thức.",
      "D": "Nguồn gốc của nhận thức."
    },
    "correctAnswer": "Nhận thức không cần có thực tiễn.",
    "options": [
      "Nguồn gốc của nhận thức.",
      "Động lực của nhận thức.",
      "Nhận thức không cần có thực tiễn.",
      "Mục đích của nhận thức."
    ]
  },
  {
    "id": 75,
    "question": "Cơ sở lý luận của quan điểm toàn diện là:",
    "originalA": "Nguyên lý về mối liên hệ phổ biến.",
    "originalOptions": {
      "A": "Nguyên lý về mối liên hệ phổ biến.",
      "B": "Nguyên lý về sự phát triển.",
      "C": "Quy luật phủ định của phủ định.",
      "D": "Quy luật mâu thuẫn."
    },
    "correctAnswer": "Nguyên lý về mối liên hệ phổ biến.",
    "options": [
      "Nguyên lý về mối liên hệ phổ biến.",
      "Nguyên lý về sự phát triển.",
      "Quy luật phủ định của phủ định.",
      "Quy luật mâu thuẫn."
    ]
  },
  {
    "id": 76,
    "question": "Trong hoạt động thực tiễn, sai lầm của sự chủ quan nóng vội là do không tôn trọng quy luật nào?",
    "originalA": "Quy luật lượng - chất",
    "originalOptions": {
      "A": "Quy luật lượng - chất",
      "B": "Quy luật mâu thuẫn",
      "C": "Quy luật phủ định của phủ định",
      "D": "Quy luật về mối quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng."
    },
    "correctAnswer": "Quy luật lượng - chất",
    "options": [
      "Quy luật mâu thuẫn",
      "Quy luật lượng - chất",
      "Quy luật phủ định của phủ định",
      "Quy luật về mối quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng."
    ]
  },
  {
    "id": 77,
    "question": "Cơ sở lý luận của quan điểm phát triển là:",
    "originalA": "Nguyên lý về sự phát triển.",
    "originalOptions": {
      "A": "Nguyên lý về sự phát triển.",
      "B": "Nguyên lý về mối liên hệ phổ biến.",
      "C": "Nguyên lý về sự tồn tại khách quan của thế giới.",
      "D": "Nguyên lý ý thức tác động đến vật chất."
    },
    "correctAnswer": "Nguyên lý về sự phát triển.",
    "options": [
      "Nguyên lý về sự tồn tại khách quan của thế giới.",
      "Nguyên lý ý thức tác động đến vật chất.",
      "Nguyên lý về mối liên hệ phổ biến.",
      "Nguyên lý về sự phát triển."
    ]
  },
  {
    "id": 78,
    "question": "Theo quan điểm của chủ nghĩa duy vật biện chứng, luận điểm nào sau đây là sai?",
    "originalA": "Chất đồng nhất với thuộc tính",
    "originalOptions": {
      "A": "Chất đồng nhất với thuộc tính",
      "B": "Chất là tính quy định vốn có của sự vật",
      "C": "Chất là tổng hợp hữu cơ các thuộc tính của sự vật nói lên sự vật là cái gì",
      "D": "Chất là cái để phân biệt nó với cái khác"
    },
    "correctAnswer": "Chất đồng nhất với thuộc tính",
    "options": [
      "Chất là tính quy định vốn có của sự vật",
      "Chất đồng nhất với thuộc tính",
      "Chất là cái để phân biệt nó với cái khác",
      "Chất là tổng hợp hữu cơ các thuộc tính của sự vật nói lên sự vật là cái gì"
    ]
  },
  {
    "id": 79,
    "question": "Trường phái triết học nào cho vận động là tuyệt đối, đứng im là tương đối?",
    "originalA": "Chủ nghĩa duy vật biện chứng",
    "originalOptions": {
      "A": "Chủ nghĩa duy vật biện chứng",
      "B": "Chủ nghĩa duy vật tự phát",
      "C": "Chủ nghĩa duy tâm khách quan",
      "D": "Chủ nghĩa duy vật siêu hình thế kỷ XVII – XVIII"
    },
    "correctAnswer": "Chủ nghĩa duy vật biện chứng",
    "options": [
      "Chủ nghĩa duy vật siêu hình thế kỷ XVII – XVIII",
      "Chủ nghĩa duy vật tự phát",
      "Chủ nghĩa duy tâm khách quan",
      "Chủ nghĩa duy vật biện chứng"
    ]
  },
  {
    "id": 80,
    "question": "Theo quan điểm của chủ nghĩa duy vật biện chứng, luận điểm nào sau đây là sai?",
    "originalA": "Chất tồn tại khách quan bên ngoài sự vật",
    "originalOptions": {
      "A": "Chất tồn tại khách quan bên ngoài sự vật",
      "B": "Chất tồn tại khách quan gắn liền với sự vật",
      "C": "Không có chất thuần tuý bên ngoài sự vật",
      "D": "Chất là cái vốn có của sự vật"
    },
    "correctAnswer": "Chất tồn tại khách quan bên ngoài sự vật",
    "options": [
      "Chất tồn tại khách quan bên ngoài sự vật",
      "Chất là cái vốn có của sự vật",
      "Không có chất thuần tuý bên ngoài sự vật",
      "Chất tồn tại khách quan gắn liền với sự vật"
    ]
  },
  {
    "id": 81,
    "question": "Phương thức sản xuất bao gồm những yếu tố nào?",
    "originalA": "Lực lượng sản xuất và quan hệ sản xuất.",
    "originalOptions": {
      "A": "Lực lượng sản xuất và quan hệ sản xuất.",
      "B": "Quan hệ sản xuất và kiến trúc thượng tầng.",
      "C": "Lực lượng sản xuất và kiến trúc thượng tầng.",
      "D": "Lực lượng sản xuất và cơ sở hạ tầng."
    },
    "correctAnswer": "Lực lượng sản xuất và quan hệ sản xuất.",
    "options": [
      "Quan hệ sản xuất và kiến trúc thượng tầng.",
      "Lực lượng sản xuất và quan hệ sản xuất.",
      "Lực lượng sản xuất và cơ sở hạ tầng.",
      "Lực lượng sản xuất và kiến trúc thượng tầng."
    ]
  },
  {
    "id": 82,
    "question": "Phương diện nào trong phương thức sản xuất thể hiện mối quan hệ giữa con người với con người trong quá trình sản xuất vật chất?",
    "originalA": "Quan hệ sản xuất.",
    "originalOptions": {
      "A": "Quan hệ sản xuất.",
      "B": "Lực lượng sản xuất.",
      "C": "Đối tượng lao động.",
      "D": "Tư liệu lao động."
    },
    "correctAnswer": "Quan hệ sản xuất.",
    "options": [
      "Đối tượng lao động.",
      "Tư liệu lao động.",
      "Lực lượng sản xuất.",
      "Quan hệ sản xuất."
    ]
  },
  {
    "id": 83,
    "question": "Quan hệ sản xuất không bao gồm quan hệ nào dưới đây?",
    "originalA": "Quan hệ tình cảm giữa nhà tư bản và công nhân.",
    "originalOptions": {
      "A": "Quan hệ tình cảm giữa nhà tư bản và công nhân.",
      "B": "Quan hệ về phân phối kết quả của quá trình sản xuất.",
      "C": "Quan hệ về tổ chức – quản lý quá trình sản xuất.",
      "D": "Quan hệ sở hữu đối với tư liệu sản xuất."
    },
    "correctAnswer": "Quan hệ tình cảm giữa nhà tư bản và công nhân.",
    "options": [
      "Quan hệ về phân phối kết quả của quá trình sản xuất.",
      "Quan hệ về tổ chức – quản lý quá trình sản xuất.",
      "Quan hệ tình cảm giữa nhà tư bản và công nhân.",
      "Quan hệ sở hữu đối với tư liệu sản xuất."
    ]
  },
  {
    "id": 84,
    "question": "Trong bối cảnh Cách mạng công nghiệp lần thứ tư, sự phát triển của trí tuệ nhân tạo (AI) có tác động như thế nào đối với hoạt động sản xuất của các doanh nghiệp Việt Nam?",
    "originalA": "AI làm thay đổi cách thức tổ chức, quản lý sản xuất.",
    "originalOptions": {
      "A": "AI làm thay đổi cách thức tổ chức, quản lý sản xuất.",
      "B": "AI thay thế hoàn toàn lực lượng sản xuất.",
      "C": "AI chỉ tác động đến tư liệu lao động nên không ảnh hưởng đến quan hệ sản xuất.",
      "D": "AI làm cho quan hệ sản xuất không còn chịu sự chi phối của các quy luật kinh tế."
    },
    "correctAnswer": "AI làm thay đổi cách thức tổ chức, quản lý sản xuất.",
    "options": [
      "AI chỉ tác động đến tư liệu lao động nên không ảnh hưởng đến quan hệ sản xuất.",
      "AI làm cho quan hệ sản xuất không còn chịu sự chi phối của các quy luật kinh tế.",
      "AI thay thế hoàn toàn lực lượng sản xuất.",
      "AI làm thay đổi cách thức tổ chức, quản lý sản xuất."
    ]
  },
  {
    "id": 85,
    "question": "Chủ trương thực hiện nhất quán cơ cấu kinh tế nhiều thành phần ở nước ta hiện nay là:",
    "originalA": "Sự vận dụng đúng đắn quy luật về sự phù hợp của quan hệ sản xuất với trình độ của lực lượng sản xuất.",
    "originalOptions": {
      "A": "Sự vận dụng đúng đắn quy luật về sự phù hợp của quan hệ sản xuất với trình độ của lực lượng sản xuất.",
      "B": "Nhằm đáp ứng yêu cầu hội nhập kinh tế thế giới.",
      "C": "Nhằm thúc đẩy sự phát triển kinh tế.",
      "D": "Nhằm phát triển quan hệ sản xuất."
    },
    "correctAnswer": "Sự vận dụng đúng đắn quy luật về sự phù hợp của quan hệ sản xuất với trình độ của lực lượng sản xuất.",
    "options": [
      "Nhằm phát triển quan hệ sản xuất.",
      "Nhằm đáp ứng yêu cầu hội nhập kinh tế thế giới.",
      "Nhằm thúc đẩy sự phát triển kinh tế.",
      "Sự vận dụng đúng đắn quy luật về sự phù hợp của quan hệ sản xuất với trình độ của lực lượng sản xuất."
    ]
  },
  {
    "id": 86,
    "question": "Bộ phận có quyền lực mạnh nhất trong kiến trúc thượng tầng của xã hội có đối kháng giai cấp là bộ phận nào?",
    "originalA": "Nhà nước",
    "originalOptions": {
      "A": "Nhà nước",
      "B": "Tôn giáo",
      "C": "Đạo đức",
      "D": "Triết học"
    },
    "correctAnswer": "Nhà nước",
    "options": [
      "Tôn giáo",
      "Nhà nước",
      "Triết học",
      "Đạo đức"
    ]
  },
  {
    "id": 87,
    "question": "Thực chất của quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng là:",
    "originalA": "Quan hệ giữa kinh tế và chính trị.",
    "originalOptions": {
      "A": "Quan hệ giữa kinh tế và chính trị.",
      "B": "Quan hệ giữa vật chất và tinh thần.",
      "C": "Quan hệ giữa xã hội và chính trị.",
      "D": "Quan hệ giữa xã hội và sản xuất."
    },
    "correctAnswer": "Quan hệ giữa kinh tế và chính trị.",
    "options": [
      "Quan hệ giữa xã hội và sản xuất.",
      "Quan hệ giữa kinh tế và chính trị.",
      "Quan hệ giữa vật chất và tinh thần.",
      "Quan hệ giữa xã hội và chính trị."
    ]
  },
  {
    "id": 88,
    "question": "Yếu tố nào không thuộc kiến trúc thượng tầng của xã hội Việt Nam hiện nay?",
    "originalA": "Nền kinh tế thị trường định hướng xã hội chủ nghĩa Việt Nam.",
    "originalOptions": {
      "A": "Nền kinh tế thị trường định hướng xã hội chủ nghĩa Việt Nam.",
      "B": "Đảng Cộng sản Việt Nam.",
      "C": "Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam.",
      "D": "Mặt trận Tổ quốc Việt Nam."
    },
    "correctAnswer": "Nền kinh tế thị trường định hướng xã hội chủ nghĩa Việt Nam.",
    "options": [
      "Mặt trận Tổ quốc Việt Nam.",
      "Nền kinh tế thị trường định hướng xã hội chủ nghĩa Việt Nam.",
      "Đảng Cộng sản Việt Nam.",
      "Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam."
    ]
  },
  {
    "id": 89,
    "question": "Bản chất chế độ sở hữu xã hội chủ nghĩa là:",
    "originalA": "Chế độ công hữu về tư liệu sản xuất.",
    "originalOptions": {
      "A": "Chế độ công hữu về tư liệu sản xuất.",
      "B": "Đa hình thức sở hữu.",
      "C": "Sở hữu hỗn hợp.",
      "D": "Không có câu trả lời đúng."
    },
    "correctAnswer": "Chế độ công hữu về tư liệu sản xuất.",
    "options": [
      "Không có câu trả lời đúng.",
      "Sở hữu hỗn hợp.",
      "Đa hình thức sở hữu.",
      "Chế độ công hữu về tư liệu sản xuất."
    ]
  },
  {
    "id": 90,
    "question": "Căn cứ vào đâu để phân chia giai cấp thành giai cấp cơ bản và giai cấp không cơ bản ?",
    "originalA": "Vào phương thức sản xuất mà giai cấp đó đại diện.",
    "originalOptions": {
      "A": "Vào phương thức sản xuất mà giai cấp đó đại diện.",
      "B": "Vào hệ tư tưởng của giai cấp đó.",
      "C": "Vào số lượng.",
      "D": "Vào cương lĩnh chính trị, đường lối của giai cấp đó."
    },
    "correctAnswer": "Vào phương thức sản xuất mà giai cấp đó đại diện.",
    "options": [
      "Vào hệ tư tưởng của giai cấp đó.",
      "Vào số lượng.",
      "Vào phương thức sản xuất mà giai cấp đó đại diện.",
      "Vào cương lĩnh chính trị, đường lối của giai cấp đó."
    ]
  },
  {
    "id": 91,
    "question": "Sự phân chia giai cấp trong xã hội bắt đầu từ hình thái kinh tế - xã hội nào?",
    "originalA": "Chiếm hữu nô lệ.",
    "originalOptions": {
      "A": "Chiếm hữu nô lệ.",
      "B": "Công xã nguyên thủy.",
      "C": "Phong kiến.",
      "D": "Tư bản chủ nghĩa."
    },
    "correctAnswer": "Chiếm hữu nô lệ.",
    "options": [
      "Công xã nguyên thủy.",
      "Phong kiến.",
      "Tư bản chủ nghĩa.",
      "Chiếm hữu nô lệ."
    ]
  },
  {
    "id": 92,
    "question": "Trong quá trình lãnh đạo con thuyền cách mạng của dân tộc, Đảng Cộng sản Việt Nam luôn khẳng định “lực lượng đi đầu trong sự nghiệp công nghiệp hóa, hiện đại hóa và xây dựng chủ nghĩa xã hội” là:",
    "originalA": "Giai cấp công nhân.",
    "originalOptions": {
      "A": "Giai cấp công nhân.",
      "B": "Tầng lớp trí thức.",
      "C": "Giai cấp nông dân.",
      "D": "Doanh nhân."
    },
    "correctAnswer": "Giai cấp công nhân.",
    "options": [
      "Tầng lớp trí thức.",
      "Doanh nhân.",
      "Giai cấp công nhân.",
      "Giai cấp nông dân."
    ]
  },
  {
    "id": 93,
    "question": "Hiện nay, Việt Nam tham gia nhiều hiệp ước và tổ chức kinh tế quốc tế lớn như WTO, APEC, ASEAN, CPTPP v.v... Theo quan điểm của chủ nghĩa duy vật lịch sử, hoạt động này phản ánh chức năng nào của nhà nước?",
    "originalA": "Chức năng đối ngoại.",
    "originalOptions": {
      "A": "Chức năng đối ngoại.",
      "B": "Chức năng quản lý xã hội.",
      "C": "Chức năng thống trị chính trị.",
      "D": "Chức năng đối nội"
    },
    "correctAnswer": "Chức năng đối ngoại.",
    "options": [
      "Chức năng đối ngoại.",
      "Chức năng đối nội",
      "Chức năng quản lý xã hội.",
      "Chức năng thống trị chính trị."
    ]
  },
  {
    "id": 94,
    "question": "Việc các trường đại học đưa nội dung phòng chống tham nhũng, an ninh mạng vào chương trình đào tạo là sự vận dụng chủ yếu của hình thái ý thức xã hội nào?",
    "originalA": "Ý thức pháp quyền.",
    "originalOptions": {
      "A": "Ý thức pháp quyền.",
      "B": "Ý thức đạo đức.",
      "C": "Ý thức khoa học.",
      "D": "Ý thức chính trị."
    },
    "correctAnswer": "Ý thức pháp quyền.",
    "options": [
      "Ý thức chính trị.",
      "Ý thức khoa học.",
      "Ý thức đạo đức.",
      "Ý thức pháp quyền."
    ]
  },
  {
    "id": 95,
    "question": "Chủ trương bảo tồn di sản văn hóa ở Việt Nam hiện nay là sự vận dụng tính độc lập tương đối của ý thức xã hội ở phương diện nào?",
    "originalA": "Tính kế thừa.",
    "originalOptions": {
      "A": "Tính kế thừa.",
      "B": "Tính lệ thuộc.",
      "C": "Tính lạc hậu.",
      "D": "Tính vượt trước."
    },
    "correctAnswer": "Tính kế thừa.",
    "options": [
      "Tính kế thừa.",
      "Tính vượt trước.",
      "Tính lạc hậu.",
      "Tính lệ thuộc."
    ]
  },
  {
    "id": 96,
    "question": "Quá trình chuyển đổi số và phát triển kinh tế số ở Việt Nam đã làm thay đổi phương thức sáng tạo, phổ biến và tiếp nhận các sản phẩm văn hóa. Đây là sự phản ánh của nội dung nào trong chủ nghĩa duy vật lịch sử?",
    "originalA": "Tồn tại xã hội quyết định ý thức xã hội.",
    "originalOptions": {
      "A": "Tồn tại xã hội quyết định ý thức xã hội.",
      "B": "Ý thức xã hội tác động trở lại tồn tại xã hội.",
      "C": "Ý thức xã hội độc lập hoàn toàn với tồn tại xã hội.",
      "D": "Ý thức xã hội quyết định tồn tại xã hội."
    },
    "correctAnswer": "Tồn tại xã hội quyết định ý thức xã hội.",
    "options": [
      "Ý thức xã hội tác động trở lại tồn tại xã hội.",
      "Tồn tại xã hội quyết định ý thức xã hội.",
      "Ý thức xã hội độc lập hoàn toàn với tồn tại xã hội.",
      "Ý thức xã hội quyết định tồn tại xã hội."
    ]
  },
  {
    "id": 97,
    "question": "Nhóm sinh viên được giao chuẩn bị bài thuyết trình về tính độc lập tương đối của ý thức xã hội, một thành viên cho rằng: “ý thức xã hội phụ thuộc hoàn toàn vào tồn tại xã hội”. Để nhóm đạt kết quả tốt nhất, các thành viên nên làm gì?",
    "originalA": "Cùng phân tích tài liệu và thống nhất rằng ý thức xã hội vừa được quyết định bởi tồn tại xã hội, vừa có tính độc lập tương đối và có thể tác động trở lại tồn tại xã hội.",
    "originalOptions": {
      "A": "Cùng phân tích tài liệu và thống nhất rằng ý thức xã hội vừa được quyết định bởi tồn tại xã hội, vừa có tính độc lập tương đối và có thể tác động trở lại tồn tại xã hội.",
      "B": "Bỏ qua ý kiến đó để tiết kiệm thời gian.",
      "C": "Để người có học lực tốt nhất trong nhóm quyết định.",
      "D": "Giữ nguyên hai quan điểm khác nhau trong bài trình bày."
    },
    "correctAnswer": "Cùng phân tích tài liệu và thống nhất rằng ý thức xã hội vừa được quyết định bởi tồn tại xã hội, vừa có tính độc lập tương đối và có thể tác động trở lại tồn tại xã hội.",
    "options": [
      "Cùng phân tích tài liệu và thống nhất rằng ý thức xã hội vừa được quyết định bởi tồn tại xã hội, vừa có tính độc lập tương đối và có thể tác động trở lại tồn tại xã hội.",
      "Bỏ qua ý kiến đó để tiết kiệm thời gian.",
      "Giữ nguyên hai quan điểm khác nhau trong bài trình bày.",
      "Để người có học lực tốt nhất trong nhóm quyết định."
    ]
  },
  {
    "id": 98,
    "question": "Khi thuyết trình về nội dung ý thức thẩm mỹ, sinh viên chỉ nêu tên tác phẩm nghệ thuật mà không giải thích. Đây là biểu hiện hạn chế của kỹ năng nào trong thuyết trình?",
    "originalA": "Kỹ năng sử dụng dẫn chứng và minh họa.",
    "originalOptions": {
      "A": "Kỹ năng sử dụng dẫn chứng và minh họa.",
      "B": "Kỹ năng thiết kế phương tiện trình chiếu.",
      "C": "Kỹ năng tương tác với người nghe.",
      "D": "Kỹ năng quản lý thời gian."
    },
    "correctAnswer": "Kỹ năng sử dụng dẫn chứng và minh họa.",
    "options": [
      "Kỹ năng sử dụng dẫn chứng và minh họa.",
      "Kỹ năng tương tác với người nghe.",
      "Kỹ năng thiết kế phương tiện trình chiếu.",
      "Kỹ năng quản lý thời gian."
    ]
  },
  {
    "id": 99,
    "question": "Để viết báo cáo nội dung tính lạc hậu của ý thức xã hội, nguồn minh chứng nào sau đây phù hợp nhất?",
    "originalA": "Tập quán, hủ tục còn tồn tại ở địa phương.",
    "originalOptions": {
      "A": "Tập quán, hủ tục còn tồn tại ở địa phương.",
      "B": "Một câu chuyện lấy từ mạng xã hội.",
      "C": "Một bài báo điện tử không rõ tác giả.",
      "D": "Tất cả các câu trả lời đều đúng."
    },
    "correctAnswer": "Tập quán, hủ tục còn tồn tại ở địa phương.",
    "options": [
      "Tất cả các câu trả lời đều đúng.",
      "Một câu chuyện lấy từ mạng xã hội.",
      "Một bài báo điện tử không rõ tác giả.",
      "Tập quán, hủ tục còn tồn tại ở địa phương."
    ]
  },
  {
    "id": 100,
    "question": "Theo quan điểm của chủ nghĩa duy vật lịch sử, con người là gì?",
    "originalA": "Là thực thể thống nhất giữa mặt sinh học và mặt xã hội.",
    "originalOptions": {
      "A": "Là thực thể thống nhất giữa mặt sinh học và mặt xã hội.",
      "B": "Là thực thể vật chất tự nhiên thuần túy.",
      "C": "Là thực thể chính trị - xã hội.",
      "D": "Là thực thể siêu tự nhiên, sản phẩm của đấng sáng tạo."
    },
    "correctAnswer": "Là thực thể thống nhất giữa mặt sinh học và mặt xã hội.",
    "options": [
      "Là thực thể siêu tự nhiên, sản phẩm của đấng sáng tạo.",
      "Là thực thể chính trị - xã hội.",
      "Là thực thể vật chất tự nhiên thuần túy.",
      "Là thực thể thống nhất giữa mặt sinh học và mặt xã hội."
    ]
  }
];
