const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const path = require("path");
const moment = require("moment-timezone");

module.exports.config = {
 name: "owner",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "ULLASH",
 description: "Sends owner info with video",
 commandCategory: "prefix",
 usages: "",
 cooldowns: 5,
 dependencies: {
 "axios": "",
 "fs-extra": ""
 }
};

module.exports.run = async function ({ api, event }) {
 const videoUrl = "https://files.catbox.moe/jcyxw8.mp4";
 const videoPath = path.join(__dirname, "cache", "ownerVideo.mp4");

 const currentTime = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");

 try {
 const response = await axios({
 method: "GET",
 url: videoUrl,
 responseType: "stream"
 });

 const writer = fs.createWriteStream(videoPath);
 response.data.pipe(writer);

 writer.on("finish", () => {
 api.sendMessage({
 body: `╭───❁ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 ❁───╮
|
| 𝗡𝗮𝗺𝗲: 𝐮 𝐥 𝐥 𝐚 𝐬 𝐡 ッ
| 𝗚𝗲𝗻𝗱𝗲𝗿: 𝐌𝐚𝐥𝐞
| 𝗔𝗴𝗲: 21
| 𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻: 𝐈𝐬𝐥𝐚𝐦
| 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽: 𝐢𝐧 𝐜𝐨𝐦𝐩𝐥𝐢𝐜𝐚𝐭𝐞𝐝
| 𝗧𝗶𝗸𝘁𝗼𝗸: ullash01
| 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: https://www.facebook.com/profile.php?id=100015168369582
| 𝗧𝗜𝗠𝗘: ${currentTime}
|
╰───❁ CYBER TEAM ❁───╯`,
 attachment: fs.createReadStream(videoPath)
 }, event.threadID, () => fs.unlinkSync(videoPath));
 });

 writer.on("error", err => {
 console.error("Video write error:", err);
 api.sendMessage("", event.threadID);
 });

 } catch (err) {
 console.error("Video download error:", err.message || err);
 api.sendMessage("", event.threadID);
 }
};
