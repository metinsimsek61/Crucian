module.exports.run = async (bot, message, args) => {
    if (args.length < 1) {
        message.reply(bot.lang.lackOfArguments);

        return;
    }

    message.reply(bot.lang.chooseEnd.random().format(args.random()));
};

module.exports.config = {
    name: 'select',
    description: 'Select one between multiple items',
    alias: ['choice', 'choose', '골라', '뽑아', '선택'],
    cooltime: 500,
    isOwnerOnly: false
};