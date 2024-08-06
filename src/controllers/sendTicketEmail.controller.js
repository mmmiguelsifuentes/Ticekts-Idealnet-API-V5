const { sendTicketEmailService } = require('../services/index.service');

const sendEmailCtl = async (req, res, next) => {
    //recibo los params de la ruta
    const {  driverName, deviceName, dateTime, dateReport, coordinates, comments } = req.body;

    try {
        //envio de params para formatear el correo
        const info = await sendTicketEmailService.sendEmailSrv(driverName, deviceName, dateTime, dateReport, coordinates, comments);
        res.status(200).json({ message: 'Correo Enviado'});
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}

module.exports = {
    sendEmailCtl
}