let handler = async (m, { conn, command, text }) => {
let love = `
*☬ ⊱⊶✤⊷⊰ •〔🐉〕• ⊱⊶✤⊷⊰ ☬*

*〘🎈༻نتائج فعالية البوالين ༺🎈〙*
*الـــــجـوائــــ💰ـــز:*

*الـمــقــــ👮🏻‍♂️ـــدم⇜. •〖〗• .*
                *✣༺【𝟔𝟎𝐤】༻✣*

*الـمــ🥇ــــــركز الاول⇜. •〖〗• .*
                *✣༺【𝟓𝟎𝐤】༻✣*

*الـمــ🥈ـــــركز الثاني⇜. •〖〗• .*
                *✣༺【𝟒𝟎𝐤】༻✣*

*المـــ🥉ــــــركز الثالث⇜. •〖〗• .*
                *✣༺【𝟑𝟎𝐤】༻✣*

*بــــــ🎗️ـاقي الـمــراكز⇜. •〖𝟏𝟎𝐤〗• .*

*₪【】₪*
*₪【】₪*
*₪【】₪*
*₪【】₪*
*₪【】₪*
*₪【】₪*
*₪【】₪*
*₪【】₪*
*₪【】₪*
*₪【】₪*

*☬ ⊱⊶✤⊷⊰ •〔🐉〕• ⊱⊶✤⊷⊰ ☬*

*~تــ✍︎ــوقــيــع اداࢪة┊📜┊↯:~*
   *~〘☬╎𝐑.𝐍.𝐍 𓆩❄𓆪 𝑺𝑶𝑼𝑳╎☬〙~* 
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['estupidez']
handler.tags = ['fun']
handler.command = /^(البوالين|بوالين)$/i
export default handler
