const Discord = require('discord.js');
const each = require('foreach');
const random = require('random');

const border = require('border');

const conf = require('./config.json');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will trigger whenever your bot:
// - finishes logging in
// - reconnects after disconnecting

client.on('ready', () => {
    console.log('Ready!');
});


client.on('message', message => {


    if (/!b/.test(message.content)) {
        var msgArray = message.content.split(" ");
        var command = msgArray[1];
        var charRank = msgArray[2];

        if (command = "new") {

            if (charRank == "n" || charRank == "a" || charRank == "v" || charRank == "h" || charRank == "l") {

                var arme = border.newArme(charRank);

                // message.channel.send(arme.type);
                // message.channel.send(arme.qualite);
                message.channel.send("Vous avez trouvé un " + arme.string.fabricant + " !!" +
                    "\n" +
                    "Qualité : " + arme.string.qualite +
                    "\n" +
                    "Type : " + arme.string.type +
                    "\n" +
                    "Modèle : " + arme.string.modele +
                    "\n" +
                    "Fabricant : " + arme.string.fabricant.split(" ")[0] +
                    "\n" +
                    "Nombre d'améliorations : " + arme.value.nbAmeliorations);

                console.log(arme);

            } else {
                message.channel.send("Il manque le rang du personnage !" +
                    "\n" +
                    "\n" +
                    "n pour Novice" +
                    "\n" +
                    "a pour Aguerri" +
                    "\n" +
                    "v pour Vétéran" +
                    "\n" +
                    "h pour Héroïque" +
                    "\n" +
                    "l pour Légendaire");
            }
        } else {
            message.channel.send("Mauvaise commande")
        }


    }

});


// login to Discord with your app's token
client.login(conf.token);
