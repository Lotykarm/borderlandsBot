const random = require('random');
const each = require('foreach');
const tables = require('./tables.json');

exports.newArme = function(charRank, armeQualite = false) {
    var arme = {};

    //arme.string => le texte à display
    arme.string = {};
    //arme.value => les string en camelCase pour identification
    arme.value = {};

    //type d'arme
    var rand = random.int(1, 20);
    // var rand = 15;
    each(tables.type, function(val, key) {
        if (rand >= val.value[0] && rand <= val.value[1]) {
            arme.string.type = val.string;
            arme.value.type = key;
        }
    });


    //qualité de l'arme

    if (!armeQualite) {


        rand = random.int(1, 20);
        each(tables.qualite, function(val, key) {
            if (rand >= val.value[0] && rand <= val.value[1]) {
                arme.string.qualite = val.string;
                arme.value.qualite = key;
            }
        });

    } else {
        arme.string.qualite = tables[armeQualite].string;
        arme.value.qualite = armeQualite;

    }

    //modèle de l'arme
    rand = random.int(1, 20);
    each(tables.modele[arme.value.type], function(val, key) {
        if (rand >= val.value[0] && rand <= val.value[1]) {
            arme.string.modele = val.string;
            arme.value.modele = key;
        }
    });

    //fabricant

    rand = random.int(1, 20);
    each(tables.modele[arme.value.type][arme.value.modele].fabricant, function(val, key) {
        if (rand >= val.value[0] && rand <= val.value[1]) {
            arme.string.fabricant = val.string;
            arme.value.fabricant = key;
        }
    });

    //nombre d'amelioration

    arme.value.nbAmeliorations = tables.nbAmeliorations.qualite[arme.value.qualite] + tables.nbAmeliorations.rang[charRank];

    return arme;
}
