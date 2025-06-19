const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gologolo4567@gmail.com",
    pass: "mpnuuovuecdocyno",
  },
});

app.post("/", (req, res) => {
  const { name, email, amount } = req.body;

  // Kiểm tra đầu vào
  if (!name || !email || !amount) {
    return res.status(400).json({ message: "Thiếu thông tin bắt buộc." });
  }

  const mailOptions = {
    from: '"THƯ CẢM ƠN" <gologolo4567@gmail.com>',
    to: email,
    subject: "Thư cảm ơn từ WODO 💖",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f9;">
        <h2 style="color: #2c3e50;">Xin chào, đây là WODO(hungdang) đến từ Better World Camp 2025</h2>
        <p>Kính gửi <strong style="color: #e74c3c;">${name}</strong>,</p>
        <p>Chúng tôi xin chân thành cảm ơn bạn vì đã donate <strong>${Number(amount).toLocaleString()} VNĐ(test server)</strong>.</p>
        <p>Sự đóng góp của bạn là nguồn động lực to lớn giúp chúng tôi tiếp tục hành trình phát triển.</p>
        <p>Chúc bạn nhiều sức khỏe và mãi giữ được lửa Hướng Đạo trong tim ⚜️🔥️⚜️💖⚜️</p>
        <p>Hy vọng sẽ gặp lại bạn trong dịp trại hoặc sự kiện Hướng Đạo cấp quốc gia gần nhất!</p>
        <p>𝓽𝓱â𝓷 𝓪́𝓲 𝓫ắ𝓽 𝓽𝓪𝔂 𝓽𝓻𝓪́𝓲</p>
        <p style="color: #5D18E5; font-size: 25px;"><strong>𝓦𝓞𝓓𝓞</strong></p>
        <p style="color: #F36A33; font-size: 20px;"><strong>𝔀𝓸𝓾𝓵𝓭 𝓽𝓱𝓲𝓷𝓴𝓼</strong></p>
        <p style="color: #F36A33; font-size: 20px;"><strong>𝔀𝓸𝓾𝓵𝓭 𝓭𝓸</strong></p>
        <img src="cid:thanksImage" style="width: 100%; max-width: 1600px;" alt="Thank You" />
      </div>
    `,
    attachments: [
      {
        filename: 'YF2.png',
        path: __dirname + "/assets/YF2.png",
        cid: 'thanksImage'
      }
    ]
  };

  // Gửi mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("❌ Gửi email thất bại:", error);
      return res.status(500).json({ message: "Lỗi khi gửi email" });
    }

    console.log("✅ Email đã gửi:", info.response);
    return res.status(200).json({ message: "Gửi thành công" });
  });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server chạy ở cổng ${PORT}`));
