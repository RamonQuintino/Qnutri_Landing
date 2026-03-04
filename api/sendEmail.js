export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, company, phone, email, message } = req.body;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`, // Variável de ambiente
      },
      body: JSON.stringify({
        from: "contato@suaempresa.com",
        to: "empresa@dominio.com",
        subject: `Novo contato de ${name} - ${company}`,
        html: `<p><strong>Nome:</strong> ${name}</p>
               <p><strong>Empresa:</strong> ${company}</p>
               <p><strong>Telefone:</strong> ${phone}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Mensagem:</strong> ${message}</p>`
      }),
    });

    const data = await response.json();
    return res.status(200).json({ success: true, data });
  } catch(err) {
    console.error(err);
    return res.status(500).json({ success: false, error: "Erro ao enviar email" });
  }
}