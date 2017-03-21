/**
 * Created by thainpv on 3/21/2017.
 */
const speakeasy = require("speakeasy");

const OTPService = {

    generateSecretKey: function (length = 16) {
        const secret = speakeasy.generateSecret({length: length});
        return secret.base32;
    },

    getOTP: function (secretKey) {
        const otp = speakeasy.totp({
            secret: secretKey,
            encoding: 'base32'
        });
        return otp;
    },

    verify: function (secretKey, otp, expiry = 300) {
        var verified = speakeasy.totp.verify({
            secret: secretKey,
            encoding: 'base32',
            token: otp,
            step: 30,
            window: expiry / 30,
        });

        return verified;
    },

    getTimeUpdateOTP: function () {
        return Math.round(new Date().getTime() / 1000) % 30;
    }
}

module.exports = OTPService;
