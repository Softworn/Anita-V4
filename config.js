require('dotenv').config();


// Helper function to convert "true"/"false" strings to real booleans
const toBool = (value) => value === "true";

// Owner & Bot Details
global.owner = process.env.OWNER_NUMBER;
global.anitav4 = process.env.BOT_NAME || "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒";
global.ownername = process.env.OWNER_NAME || "Onyemetu Michael";
global.packname = process.env.PACK_NAME || "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒";
global.author = process.env.AUTHOR || "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋";
global.channelname = process.env.CHANNEL_NAME || "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋";
global.channeljid = process.env.CHANNEL_JID || "120363315231436175@newsletter";

// Auto-Features
global.autoTyping = toBool(process.env.AUTO_TYPING);true
global.autoRecord = toBool(process.env.AUTO_RECORD);true
global.autoViewStatus = toBool(process.env.AUTO_VIEW_STATUS);true
global.AUTO_STATUS_REACT = toBool(process.env.AUTO_STATUS_REACT);true
global.autoLikeEmoji = process.env.AUTO_LIKE_EMOJI || "💚";true
global.LEVELUP = toBool(process.env.LEVELUP);true
global.ANTIVIEWONCE = toBool(process.env.ANTIVIEWONCE);true

global.public = process.env.PUBLIC === 'true';
// Group & Security Settings

global.ANTIDELETE = toBool(process.env.ANTIDELETE);true
global.unavailable = toBool(process.env.UNAVAILABLE);
global.available = toBool(process.env.AVAILABLE);
global.autoreadmessages = toBool(process.env.AUTO_READ_MESSAGES);true
global.chatbot = toBool(process.env.CHATBOT);true
global.autoreact = toBool(process.env.AUTO_REACT);true
global.WELCOME = toBool(process.env.WELCOME);true

// Prefix & Other Settings
global.prefix = process.env.PREFIX || '.';
global.autobio = toBool(process.env.AUTO_BIO);true
global.ANTI_TEMU = toBool(process.env.ANTI_TEMU);true
global.ANTI_TAG = toBool(process.env.ANTI_TAG);true
global.ANTICALL = toBool(process.env.ANTICALL);true
global.antilink = toBool(process.env.ANTILINK);true
global.antilinkkick = toBool(process.env.ANTILINK_KICK);true
global.antilinkwarn = toBool(process.env.ANTILINK_WARN);true

// Messages
global.mess = {
    success: process.env.MESSAGE_SUCCESS || '𝙳𝚘𝚗𝚎',
    admin: process.env.MESSAGE_ADMIN || '_*❗This Command Can Only Be Used By Group Admins !*_',
    botAdmin: process.env.MESSAGE_BOT_ADMIN || '_*❗This Command Can Only Be Used When Bot Becomes Group Admin !*_',
    OnlyOwner: process.env.MESSAGE_OWNER || '_*❗This Command Can Only Be Used By My Owner !*_',
    OnlyGrup: process.env.MESSAGE_GROUP || '_*❗This Command Can Only Be Used In Group Chat !*_',
    private: process.env.MESSAGE_PRIVATE || '_*❗This Command Can Only Be Used In Private Chat !*_',
    wait: process.env.MESSAGE_WAIT || '_*Please Wait*_',
    notregist: process.env.MESSAGE_NOT_REGIST || '_*You are not registered in the Bot Database. Please register first*_',
    premium: process.env.MESSAGE_PREMIUM || '_*Premium only" Want Premium? Chat Owner*_',
    endLimit: process.env.MESSAGE_END_LIMIT || '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 AM_*.',
};


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
