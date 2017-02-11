Lancer l'application : node app.js
***********
Faire tourner en continue l'application  : forever start app.js (nécessite le paquet forever : npm install forever -g)
***********

Répartition du travail (côté serveur):

Nicolas Forget : tests unitaires, + travail côté Front
Edouard Germain : 
- mise en place du serveur minimal
- refactoring avec des modules/requires
- compléter le serveur
- génération de la documentation
- déploiement sur le VPS

***********
MODULES
***********

Nous avons utilisé pour la partie serveur les modules suivants :
- passport : pour la gestion de l'authentification
- express : comme middleware 
- express-session : pour la gestion des cookies / sessions
- fs (filestream) : pour récupérer la liste des fichiers du dossier route et les importer
- body-parser : pour gérer les requêtes JSON
- mongoose : pour la gestion des modèles & mongoDB
- bcrypt-nodejs : pour hasher les mots de passe
- multer : pour gérer les requêtes multipart et l'upload de fichier
- apidoc : pour générer notre documentation 


Pour les tests nous avons utilisé : 
- mocha 
- should 
- supertest.


Le serveur a été implémenté de façon à avoir un micro-framework qui génère (presque) automatiquement le "RESTfull routing".
Il suffit de copier/coller les trois templates suivants et de les compléter en fonction de nos besoins.
Avantages : gain en productivité sur le long terme, hautement maintenable, lisibilité du code
Inconvénients : plus long à mettre en place

***********
Template d'un modèle : 'Objet'.js
***********

    var mongoose=require('mongoose');

    var ObjectSchema = mongoose.Schema({
       
       /* AJOUTER : Attributs de l'objet */
       ,
    {// optionnal : add createdAt and updatedAt fields
        timestamps: true
    });


    exports.Schema = ObjectSchema;

    exports.Model = mongoose.model('Comments', ObjectSchema);

***********
Template d'un controleur : 'Objet'Controller.js
***********

    var Object = require('../models/Annotation.js');
    var Video = require('../models/Video.js');

    module.exports = require('./base/index.js')(Object);

    AJOUTER/SURCHARGER des fonctionnalités ici 

***********
Template  route : 'Objet'Routes.js
***********

    module.exports = function(app,passport) {
        var 'Objet'Controller = require('../controllers/'Objet'Controller.js');
        require('./base/index')(app,passport,"'Objet'");
    
        /* AJOUTER DES ROUTES ICI */
    };

***********
APIDOC
***********

Pour générer la documentation (nécessite apidoc : npm install apidoc -g):
apidoc -i routes/ -o apidoc
***********
disponible ici : https://node.edouardg.fr/apidoc/


***********
 TESTS
***********

mocha tests/MainTest.js 
mocha tests/UserTest.js 


***********
 KILL NODE - if IntelliJ let it run after exit
***********

ps -aef | grep 'node' 
kill pid