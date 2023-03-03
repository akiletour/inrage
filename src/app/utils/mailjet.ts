export class Mailjet {
  name: string;

  email: string;

  phone: string;

  message: string;

  referrer: string;

  constructor(
    name: string,
    email: string,
    phone: string,
    message: string,
    referrer: string
  ) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.message = message;
    this.referrer = referrer;
  }

  getToken() {
    return Buffer.from(
      `${process.env.MJ_APIKEY_PUBLIC}:${process.env.MJ_APIKEY_PRIVATE}`
    ).toString('base64');
  }

  getMessageBody() {
    const contentWithBreaks = this.message.replace(/\n/g, '<br />');

    return `<p>
            <strong>Provenant de :</strong> ${this.referrer}<br />
            <strong>Nom :</strong> ${this.name}<br />
            <strong>Email :</strong> ${this.email}<br />
            <strong>Téléphone :</strong> ${this.phone}<br />
            <strong>Message :</strong> ${contentWithBreaks}
          </p>`;
  }

  prepareMailjetBody() {
    return JSON.stringify({
      Messages: [
        {
          From: {
            Email: 'pascal@inrage.fr',
            Name: 'Pascal GAULT',
          },
          To: [
            {
              Email: 'pascal@inrage.fr',
              Name: 'Pascal GAULT',
            },
          ],
          Subject: `[inRage] Demande de contact ${this.name}`,
          HTMLPart: this.getMessageBody(),
          ReplyTo: {
            Email: this.email,
            Name: this.name,
          },
        },
      ],
    });
  }

  async send() {
    return fetch('https://api.mailjet.com/v3.1/send', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${this.getToken()}`,
        'Content-Type': 'application/json',
      },
      body: this.prepareMailjetBody(),
    }).catch(() => {
      throw new Error('Mailjet API error');
    });
  }
}
