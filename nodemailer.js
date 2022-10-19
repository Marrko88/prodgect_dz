const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
    {
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // 465
        auth: {
            user: 'dewayne.oconner61@ethereal.email',
            pass: '4RJAm64cktaAtKY3CT'
        }
    }
);


const mailer = transporter.sendMail({
    from: '"Node js" <dewayne.oconner61@ethereal.email>',
    to: 'markianec@mail.ru',
    subject: 'Message from Node js',
    text: 'This message was sent from Node js server.',
    html:
        'This <i>message</i> was sent from <strong>Node js</strong> server.',
})

console.log(mailer);

// module.exports = mailer;