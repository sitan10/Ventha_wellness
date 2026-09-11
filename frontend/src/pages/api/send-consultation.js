import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const {
      fullName,
      phone,
      email,
      age,
      gender,
      consultationMode,
      concern,
      preferredDate,
      preferredTime,
      message,
    } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "venthawellness@gmail.com",
      replyTo: email,

      subject: `New Consultation Request - ${fullName}`,

      html: `
        <h2>New Consultation Request</h2>

        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Consultation Mode:</strong> ${consultationMode}</p>
        <p><strong>Health Concern:</strong> ${concern}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime}</p>

        <h3>Additional Message</h3>
        <p>${message || "No additional message provided."}</p>

        <hr />

        <p>
          This consultation request was submitted through the
          Ventha Wellness website.
        </p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Consultation request sent successfully.",
    });
  } catch (error) {
    console.error("Email error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send consultation request.",
    });
  }
}