const Language = require('copsnrobbers/core/language.js');

mp.events.add({
    "addPhrase": (lang) =>
    {
        Language.add(lang);
    },
    "setLanguage": (langID = 0) => {
        Language.set(langID);
    },
    "init": () => {
        require('copsnrobbers/events/gangzones.js');
        require('copsnrobbers/events/admin.js');
        require('copsnrobbers/events/animations.js');
        require('copsnrobbers/events/blips.js');
        require('copsnrobbers/events/police.js');
        require('copsnrobbers/events/round.js');
        require('copsnrobbers/events/sound.js');
        require('copsnrobbers/events/vehicle.js');
        require('copsnrobbers/events/spawns.js');
        require('copsnrobbers/events/labels.js');
        require('copsnrobbers/events/heli.js');
        require('copsnrobbers/menus/init.js');

        mp.events.callRemote('playerConnected', mp.players.local);
    }
});