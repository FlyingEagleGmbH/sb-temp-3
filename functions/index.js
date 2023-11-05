const functions = require("firebase-functions");
const request = require("request");
const nodemailer = require("nodemailer");

exports.verifyCaptcha3Dummy = functions.https.onCall(async (data, context) => {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY_SB3;
    const verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + data;

    try {
        const response = await new Promise((resolve, reject) => {
            request(verificationUrl, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(body);
                }
            });
        });

        const body = JSON.parse(response);

        // Success will be true or false depending upon captcha validation.
        if (!body.success) {
            body["status"] = false;
            body["errSource"] = "recaptcha";
            body["message"] = "Failed to pass captcha verification.";
        } else {
            body["status"] = true;
            body["message"] = "Successfully passed captcha verification!";
        }

        console.log(`Google returns: ${JSON.stringify(body)}`);

        return body;
    } catch (error) {
        console.error("Error during captcha verification:", error);
        throw new functions.https.HttpsError("internal", error);
    }
});

exports.sendMail = functions.https.onCall(async (data, context) => {

    const transporter = nodemailer.createTransport({
        host: process.env.MAILHOST,
        port: process.env.MAILPORT,
        auth: {
            user: process.env.MAILUSER,
            pass: process.env.MAILPASSWORD
        }
    });

    try {
        const mail = await transporter.sendMail({
            to: process.env.CONTACTMAIL,
            subject: `Kontaktanfrage von ${data.url}`,
            text: `Name: ${data.name},\nTel.: ${data.phone},\nE-Mail: ${data.email},\nService: ${data.service}\n\nNachricht: ${data.message}`,
        });

        return { status: "OK", data: mail.messageId };
    } catch (error) {
        console.error("Error during sending Mail:", error);
        throw new functions.https.HttpsError("internal", error);
    }

});


