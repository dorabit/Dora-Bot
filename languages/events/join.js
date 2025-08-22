module.exports = async function ({ event, api, threadsData}) {
  const { threadID, logMessageData} = event;

  // استخراج بيانات العضو الجديد
  const userID = logMessageData?.addedParticipants?.[0]?.userFbId;
  const userName = logMessageData?.addedParticipants?.[0]?.fullName;

  // استخراج اسم المجموعة
  const threadInfo = await threadsData.get(threadID);
  const threadName = threadInfo?.threadName || "المجموعة";

  // تحديد الفترة الزمنية حسب الوقت الحالي
  const hour = new Date().getHours();
  let session = "مساءً";
  if (hour < 12) session = "صباحًا";
  else if (hour < 15) session = "ظهرًا";
  else if (hour < 18) session = "عصرًا";

  // رسالة الترحيب
  const welcomeMessage = `🎉 أهلاً وسهلاً بـ ${userName} في مجموعة ${threadName}!\n🕒 الوقت: ${hour}:00 ${session}\n🤖 Dora Bot | المطور: حمودي سان 🇸🇩`;

  // إرسال الرسالة مع mention
  api.sendMessage({
    body: welcomeMessage,
    mentions: [{
      tag: userName,
      id: userID
}]
}, threadID);
};
