# otp-creator
======

node js otp creator

#1 load libs
======

const otpCreator = require('otp-creator');

#2 use
======

const secKey = otpCreator.generateSecretKey();

const otp = otpCreator.getOTP(secKey);

#3 test
======

npm test
