const handler = async (m, {conn}) => {
  m.reply(global.Masc18);
};
handler.command = /^(Masc18|Masc18)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Masc18 = `
🌟 Lista 4 VS 4 Masculino 🌟

🕘 Horario:
🇲🇽 8:00 PM
🇨🇴 9:00 PM

         Jugadores

🪐- 
🪐- 
🪐- 
🪐- 

          Suplentes

🌕- 
🌕- 

 Donador: 

💫-
`;
