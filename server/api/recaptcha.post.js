import request from 'request'

/** @Deprecated Since version Netlify. No Evn Values present. Use Firebase Functions instead. **/ 

const config = useRuntimeConfig();
var secretKey = config.GRECAPTCHASECRETKEY;

export default defineEventHandler(async (event, response) => {
    try {
        const eventBody = await readBody(event);
        console.log(eventBody.token)

        var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + eventBody.token;

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
            body['status'] = false;
            body['errSource'] = "recaptcha";
            body['message'] = "Failed to pass captcha verification.";
        } else {
            body['status'] = true;
            body['message'] = "Successfully passed captcha verification!";
        }
    
        console.log(`Google returns: ${JSON.stringify(body)}`);
    
        return body;
    } catch (error) {
        sendError(event, createError({ statusCode: 400, statusMessage: error }));
    }
});

