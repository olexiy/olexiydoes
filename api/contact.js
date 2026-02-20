const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message, website } = req.body;

  // Honeypot — Bot ignorieren
  if (website) return res.status(200).json({ ok: true });

  if (!name?.trim() || !email?.trim()) {
    return res.status(400).json({ error: 'Name und E-Mail sind erforderlich.' });
  }

  try {
    await resend.emails.send({
      from: 'Kontaktformular <noreply@DEINE_DOMAIN>',  // ← nach Domain-Verifikation ersetzen
      to: 'olexiy.sokurenko@gmail.com',
      replyTo: email,
      subject: `Shopify-Shop Anfrage von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message || '(keine Nachricht)'}`,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'E-Mail konnte nicht gesendet werden.' });
  }
};
