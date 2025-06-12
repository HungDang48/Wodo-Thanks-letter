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

  const mailOptions = {
    from: '"THƯ CẢM ƠN" <gologolo4567@gmail.com>',
    to: email,
    subject: "Thư cảm ơn từ WODO 💖",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f9;">
        <h2 style="color: #2c3e50;">Xin chào, đây là WODO đến từ Better World Camp 2025</h2>
        <p style="font-size: 16px; color: #34495e;">
          Kính gửi <strong style="color: #e74c3c;">${name}</strong>,
        </p>
        <p style="font-size: 16px; color: #34495e;">
          Chúng tôi xin chân thành cảm ơn bạn vì đã donate <strong>${Number(amount).toLocaleString()} VNĐ</strong> để ủng hộ dự án cộng đồng của chúng tôi.
        </p>
        <p style="font-size: 16px; color: #34495e;">
          Sự đóng góp của bạn là nguồn động lực to lớn giúp chúng tôi tiếp tục hành trình phát triển.
        </p>
        <p style="font-size: 16px; color: #34495e;">
          Hy vọng sẽ gặp lại bạn trong những chương trình tiếp theo!
        </p>
        <p style="font-size: 16px; color: #000;">Trân trọng,</p>
        <p style="font-size: 24px; color: #5D18E5;">𝓦𝓞𝓓𝓞</p>
        <p style="font-size: 18px; font-weight: bold; color: red;">𝒲𝒪𝒰𝐿𝒟 𝒯𝐻𝐼𝒩𝒦𝒮</p>
        <p style="font-size: 18px; font-weight: bold; color: red;">𝓦𝓞𝓤𝓛𝓓 𝓓𝓞</p>
        <img src="cid:thanksImage" alt="thanks picture" style="width: 100%; border-radius: 8px; margin-top: 20px;" />
      </div>
    `,
    attachments: [
      {
        filename: 'image.jpg',
        path: 'https://drive.google.com/uc?export=view&id=17ttLcoDh2rll_DSG72pc0eqKBA_lRtr1',
        cid: 'thanksImage'
      }
    ]
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("❌ Lỗi gửi mail:", error);
      return res.status(500).json({ message: "Lỗi gửi email" });
    }
    console.log("✅ Đã gửi mail:", info.response);
    return res.status(200).json({ message: "Gửi thành công" });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server chạy ở cổng ${PORT}`));
