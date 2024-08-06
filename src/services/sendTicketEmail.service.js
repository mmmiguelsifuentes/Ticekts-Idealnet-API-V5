const nodemailer = require('nodemailer')
require('dotenv').config()

const serviceEmail = process.env.EMAIL_SERVICE;
const emailFrom = process.env.EMAIL_FROM;
const emailPass = process.env.EMAIL_PASS;
const emailsTo = process.env.EMAILS_TO;

const transporter = nodemailer.createTransport({
    service: serviceEmail,
    auth: {
        user: emailFrom,
        pass: emailPass
    },
});

const sendEmailSrv = async (driverName, deviceName, dateTime, dateReport, coordinates, comments) => {
    const emailText = `
        Información del Reporte:
        - Conductor: ${driverName}
        - Dispositivo: ${deviceName}
        - Fecha y Hora de Ultima Comunicación: ${dateTime}
        - Fecha del Reporte: ${dateReport}
        - Coordenadas: ${coordinates}
        - Comentarios: ${comments}
  `;

  const emailHtml = `
    <h2>Información del Reporte</h2>
    <ul>
      <li><strong>Conductor:</strong> ${driverName}</li>
      <li><strong>Dispositivo:</strong> ${deviceName}</li>
      <li><strong>Fecha y Hora de Ultima Comunicación:</strong> ${dateTime}</li>
      <li><strong>Fecha del Reporte:</strong> ${dateReport}</li>
      <li><strong>Coordenadas:</strong> ${coordinates}</li>
      <li><strong>Comentarios:</strong> ${comments}</li>
    </ul>
  `;

  try {
    let info = await transporter.sendMail({
        from: emailFrom,
        to: emailsTo,
        subject: `Solicitud de rescate, Unidad ${deviceName}`,
        text: emailText,
        html: emailHtml
    });

    return info;
  } catch (error) {
    throw new Error('Error al enviar el correo: ' + error.message);
  }
;}

module.exports = {
    sendEmailSrv
}
