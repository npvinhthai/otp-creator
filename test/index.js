/**
 * Created by thainpv on 3/21/2017.
 */
const otpCreator = require('../index');
const secKey = otpCreator.generateSecretKey();
const otp = otpCreator.getOTP(secKey);
console.log(secKey);
console.log(otp);
