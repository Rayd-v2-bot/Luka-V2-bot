const axios = require('axios');

const Prefixes = [
  '/ai',
  'ai+',
  'ben',
  '+ai',
  'ai',
  'ask',
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("✌ 𝐑𝐚𝐲𝐝 𝐛𝐨𝐭 😉 (⁠╯⁠°⁠□⁠°⁠）⁠╯ 𝐬𝐚𝐥𝐮𝐭 𝐣𝐞 𝐬𝐮𝐢𝐬 𝐥𝐞 𝐛𝐨𝐭 𝐝𝐞 𝐑𝐀𝐘𝐃 𝐜𝐨𝐦𝐦𝐞𝐦𝐭 𝐩𝐮𝐢𝐬-𝐣𝐞 𝐭'𝐚𝐢𝐝𝐞𝐫 !:");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply({ body: ` 🎉 𝐑𝐚𝐲𝐝 𝐛𝐨𝐭 : 
______________________________  
${answer}
🎉 🏅 𝐑𝐚𝐲𝐝 𝐛𝐨𝐭 🏅`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
