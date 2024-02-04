/*Se mete la lógica que hemos hecho antes de mandar el correo.
 Se trae "dotenv" ya que necesitamos name y password y el seteo
 del estado.*/
const dotenv = require("dotenv");
dotenv.config();
const nodemailer = require("nodemailer");
const { setTestEmailSend } = require("../state/state.data");

const sendEmail = (userEmail, name, confirmationCode) => {
  /*Se resetea estado a false ---> Es el estado inicial */
  setTestEmailSend(false);
  //Traemos el email y password
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;

  //Se crea el transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass: password,
    },
  });
  //Se crean las opciones del email
  const mailOptions = {
    from: email,
    to: userEmail,
    subject: "Confirmation code",
    text: `tu codigo es ${confirmationCode}, gracias por confiar en nosotros ${name}`,
  };

  //Se realiza el transporte de "sendMail"
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      //setea el estado del test
      console.log(error);
      setTestEmailSend(false);
      return; //Si hay error comunica que el email no ha sido enviado
    }
    console.log("Email sent: " + info.response);
    setTestEmailSend(true);
  }); //Si no hay error, comunica que el email ha sido enviado
};

module.exports = sendEmail;

/*Resumido*/
