const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
    ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/a7ca8d4777fa8ad977795.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "Yoh. I am Savage Md created by Mbuvi Tech.",
};
