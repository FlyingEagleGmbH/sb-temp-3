import nodemailer from 'nodemailer'

/** @Deprecated Since version Netlify. No Evn Values present. Use Firebase Functions instead. **/ 

const config = useRuntimeConfig();

const transporter = nodemailer.createTransport({
    host: config.MAILHOST,
    port: config.MAILPORT,
    auth: {
        user: config.MAILUSER,
        pass: config.MAILPASSWORD
    }
})

export default defineEventHandler(async (event, response) => {
    try { 
        const body = await readBody(event);
        const mail = await transporter.sendMail({
            to: config.CONTACTMAIL,
            subject: `Kontaktanfrage von ${config.public.URL}`,
            text: `Name: ${body.name},\nTel.: ${body.phone},\nE-Mail: ${body.email},\nService: ${body.service}\n\nNachricht: ${body.message}`
        });

        /** Remove this on prod */
        console.log('Message sent: %s', mail.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(mail));
        /** -------------------- */

        return {status: 'OK', data: mail.messageId};
    } catch (error) {
        sendError(event, createError({ statusCode: 400, statusMessage: error }));
    }
});