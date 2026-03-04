// api/sendEmail.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "ramonguima101@gmail.com",      // seu e-mail autorizado na Resend
        to: "ramonguima101@gmail.com",           // e-mail que vai receber a mensagem
        subject: `Novo contato de ${name}`,
        html: `<p><strong>Nome:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Mensagem:</strong> ${message}</p>`
      }),
    });

    const data = await response.json();
    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: "Erro ao enviar email" });
  }
}