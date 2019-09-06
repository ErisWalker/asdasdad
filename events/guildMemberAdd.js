module.exports = member => {
    let username = member.user.username;
    member.send('Hey Sen Sunucuya Hoşgeldin **Heris Of Moon**');
    member.guild.defaultChannel.send('hosgeldiniz-log');
};
