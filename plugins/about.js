const config = require('../config');
const { cmd } = require('../command');

cmd({
    pattern: "nyoni",
    desc: "Show information about the developer",
    category: "main",
    react: "ℹ️",
    filename: __filename
}, async (conn, mek, m, { from, text }) => {
    try {
        
        const aboutBody = `
*╭═══〔 👤 BIOGRAPHY 〕═══╮*
┃
┃ ◦ *Lead Dev:* ZORAIB KASHMIRI
┃ ◦ *Real Name:* ZORAIB 
┃ ◦ *Nickname:* ..
┃ ◦ *Age:* private issue😂😪
┃ ◦ *City:* dar es salaam
┃ ◦ *Role:* Passionate WhatsApp Dev
┃
*╰━━━━━━━━━━━━━━━━━━━━╯*

*╭═══〔 🛠️ DEVELOPMENT 〕═══╮*
┃
┃ ◦ *Project:* ZORAIB-MD
┃ ◦ *Collaborators:* 2 dev
┃ ◦ *Main Dev:* ZORAIB-MD
┃ ◦ *Status:* Active & Secure
┃
*╰━━━━━━━━━━━━━━━━━━━━╯*

> *“Coding is not just a hobby, it's a lifestyle.”*
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴇᴇᴍ-ᴄᴍ*
`;

        await conn.sendMessage(
            from,
            {
                image: { url: "https://files.catbox.moe/9gl0l8.jpg" },
                caption: aboutBody.trim(),
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363405633935764@newsletter',
                        newsletterName: "ZORAIB-MD",
                        serverMessageId: 1
                    },
                    externalAdReply: {
                        title: "ZORAIB-MD DEVELOPER INFO",
                        body: "MEET THE BRAIN BEHIND ZORAIB-MD",
                        mediaType: 1,
                        sourceUrl: "https://github.com/Zoraibxhassan/ZORAIB-MD",
                        thumbnailUrl: "https://files.catbox.moe/vgrjdx.jpg",
                        renderLargerThumbnail: true,
                        showAdAttribution: true
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, { text: "❌ About system error!" }, { quoted: mek });
    }
});
