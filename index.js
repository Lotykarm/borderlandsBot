const Discord = require('discord.js');
const each = require('foreach');
const random = require('random');

const border = require('./border.js');
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
        var armeQualite = false;
        if (msgArray[3]) {
            armeQualite = msgArray[3];
        }


        var arme;
        if (command = "new") {

            if (charRank == "n" || charRank == "a" || charRank == "v" || charRank == "h" || charRank == "l") {

                arme = border.newArme(charRank);


                    if (armeQualite != false && armeQualite !== "vert" && armeQualite !== "bleu" && armeQualite !== "violet" && armeQualite !== "orange") {
                        message.channel.send("Mauvaise qualité !" +
                            "Les qualités disponibles sont:" +
                            "\n" +
                            "vert" +
                            "\n" +
                            "bleu" +
                            "\n" +
                            "violet" +
                            "\n" +
                            "orange \n\n" +
                            "Une qualité aléatoire a été choisie");
                    } else {
                        arme = border.newArme(charRank, armeQualite);

                    }

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
var token = process.env.token;
client.login(token);
