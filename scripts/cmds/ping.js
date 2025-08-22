module.exports = {
  config: {
    name: "ping",
    author: "GoatAI | Eldwin, Modified by حمودي سان 🇸🇩",
    aliases: [],
    category: "INFO",
    role: 0,
    shortDescription: {
      en: "Ping command",
      ar: "أمر قياس سرعة البوت"
    },
    longDescription: {
      en: "This command displays the bot's ping.",
      ar: "هذا الأمر يعرض سرعة استجابة البوت (Ping)."
    },
    guide: {
      en: "{p}ping",
      ar: "{p}بينغ"
    }
  },
  onStart: async function ({ event, message }) {
    const startTime = Date.now();
    const msg = await message.reply("⏳ جاري حساب البينغ...");
    const endTime = Date.now();

    const ping = endTime - startTime;

    message.reply(
      `🤖 اسم البوت: Dora Bot\n👨‍💻 المطور: حمودي سان 🇸🇩\n📡 سرعة البوت: ${ping}ms`
    );
  },
  onChat: async function () {
    // فارغ لهذا الأمر
  },
  onReply: async function () {
    // فارغ لهذا الأمر
  }
};
