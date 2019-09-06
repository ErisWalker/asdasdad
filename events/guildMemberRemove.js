module.exports = member => {
  let guild = member.guild;
  member.send('Off ya Neden Cıktın');
  guild.defaultChannel.send(``);
};
