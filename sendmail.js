const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gologolo4567@gmail.com",       // Thay bằng Gmail của bạn
    pass: "mpnuuovuecdocyno",            // Thay bằng App Password
  },
});

const mailOptions = {
  from: '"THƯ CẢM ƠN " <gologolo4567@gmail.com>',
  to: " ",  // Thay bằng email người nhận
  // subject: "THƯ CẢM ƠN",
  html: `
   <div style="font-family: 'Arial', sans-serif; padding: 20px; background-color: #f4f4f9;">
  <h2 style="color: #2c3e50; font-family: 'Georgia', serif;"> 
Xin chào, đây là WODO đến từ Better World Camp 2025</h2>
  <p style="font-size: 16px; line-height: 1.6; color: #34495e;">
    Kính gửi anh/chị <span style="font-weight: bold; color: #e74c3c;">ĐẶNG VIỆT HƯNG</span>,
  </p>
  <p style="font-size: 16px; line-height: 1.6; color: #34495e;">
    Chúng tôi xin chân thành cảm ơn bạn đã tin tưởng và ủng hộ dự án cộng đồng của chúng tôi. 
    Sự đóng góp của bạn là nguồn động lực vô cùng lớn đối với chúng tôi trong việc thực hiện và phát triển dự án này.
  </p>
  <p style="font-size: 16px; line-height: 1.6; color: #34495e;">
    Nhờ sự giúp đỡ của bạn, chúng tôi tự tin hơn trong việc triển khai những kế hoạch sắp tới. Hy vọng rằng chúng ta sẽ có dịp gặp lại nhau để cùng trao đổi và phát triển thêm các sáng kiến mới cho dự án.
  </p>
  <p style="font-size: 15px; line-height: 1.6; color:rgb(0, 0, 0);">
    Trân trọng,
  </p>
  <p style="font-size: 25px; line-height: 1.6; color: #5D18E5;">
    𝓦𝓞𝓓𝓞
  </p>
  <p style="font-size: 18px; font-weight: bold; color:rgb(255, 0, 0);">𝒲𝒪𝒰𝐿𝒟 𝒯𝐻𝐼𝒩𝒦𝒮</p>
  <p style="font-size: 18px; font-weight: bold; color:rgb(255, 0, 0);">𝓦𝓞𝓤𝓛𝓓 𝓓𝓞</p>

  <!-- Giữ nguyên khung hình ảnh và mã CID -->
  <img src="cid:thanksImage" alt="thanks picture" style="width: 100%; height: auto; border-radius: 8px;"/>
</div>

  `,
  attachments: [
    {
      filename: 'image.jpg',
      path: 'https://drive.google.com/uc?export=view&id=17ttLcoDh2rll_DSG72pc0eqKBA_lRtr1', // Link trực tiếp từ Google Drive
      cid: 'thanksImage'  // Trùng với CID trong thẻ <img> để nhúng ảnh vào email
    }
  ]
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("Lỗi khi gửi mail:", error);
  }
  console.log("✅ Email đã được gửi:", info.response);
});
