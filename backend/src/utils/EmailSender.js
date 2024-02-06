import nodemailer from "nodemailer";



const sendMessageToUser = async (name, userEmail, message) => {
    try {
        // Create a transporter using Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'message.reponse.web@gmail.com',
                pass: process.env.PASSKEY,
            }
        });

        // Email options
        let mailOptions = {
            from: 'message.reponse.web@gmail.com',
            to: userEmail,
            subject: `ThankYou for contacting me 🚀`,
            cc: process.env.ADMIN_GMAIL,
            html: `
                <p><big>Dear ${name} ,</big></p>
                <p>Your Message to Me is : </p>
                <p style="color: green;">${message}</p>
                <p><big><b>Greetings from Lokeshwar!</b></big></p>
                <p>Thank you for contacting me. I appreciate your message and will respond to you as soon as possible.</p>
                <p>Best regards,</p>
                <p><b>Lokeshwar Prasad </b></p>
            `
        };

        // Send email
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        console.log('Email sent successfully!', userEmail);
    } catch (error) {
        console.error('Error sending email:', error);
        throw error
    }
}


export { sendMessageToUser }