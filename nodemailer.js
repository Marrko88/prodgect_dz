const nodemailer = require('nodemailer');
const events = require("events");

const transporter = nodemailer.createTransport(
    {
        host: 'smtp.mail.ru',
        port: 465,
        tls: {
            secure: true,

        },
        secure: true, // 465
        auth: {
            user: 'markianec@mail.ru',
            pass: 'hJnCskJTk3Pz2ngex49A'
        }
    }
);

let emitter = new events();
let name_sendmailer = "send_mailer";

emitter.on(name_sendmailer, ()=> {
    const mailer = transporter.sendMail({
        from: '"Node js" <markianec@mail.ru>',
        to: 'oulina@mail.ru',
        subject: 'Message from Node js',
        text: 'This message was sent from Node js server.',
        html:
            'This <i>message</i> was sent from <strong>Node js</strong> server.',
    })
});

module.exports.emitter = emitter;
