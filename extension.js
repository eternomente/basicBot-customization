(function () {
    //Link location of your fork so you don't have to modify so many things.
    var fork = "fu";
		
    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:

         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }

         */

        bot.commands.baconCommand = {
            command: ['fu', 'rbt'],  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me BAN!?!?!?");
                }
            }
        };

        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "Farofa's Bot",
        language: "portuguese",
        startupCap: 1, // 1-200
        startupVolume: 0, // 0-100
        startupEmoji: true, // true or false
        chatLink: "https://rawgit.com/BotFarofa/Farofa-Bot/master/lang/pt.json",
        maximumAfk: 60,
        afkRemoval: false,
        maximumDc: 60,
        bouncerPlus: true,
        blacklistEnabled: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: true,
        voteSkipLimit: 20,
        timeGuard: true,
        maximumSongLength: 08,
        autodisable: false,
        commandCooldown: 30,
        usercommandsEnabled: false,
        lockskipPosition: 3,
        lockskipReasons: [
        	["tema", "A música não se encaixa nos padrões da sala. "],
        	["op", "Essa música está na lista OP. "],
        	["historico", "A música ainda está no histórico. "],
        	["mix", "Você tocou um mix (muito longo) - não permitido. "],
        	["som", "A música que você tocou tinha má qualidade ou estava sem som. "],
        	["nsfw", "A música que você tocou é NSFW (impróprio). "],
        	["indisponivel", "A música que você tocou está indisponível. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: true,
        motdInterval: 5,
        motd: "!roulette",
        filterChat: false,
        etaRestriction: false,
        welcome: true,
        opLink: null,
        rulesLink: null,
        themeLink: null,
        fbLink: "https://facebook.com/farofadasdivaspop",
        youtubeLink: null,
        website: "http://farofa-pop.blogspot.com.br",
        intervalMessages: [],
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/basicBot/source/master/basicBot.js", extend);

}).call(this);
