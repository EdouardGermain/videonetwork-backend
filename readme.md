***********
INTRODUCTION
***********

Le serveur a été implémenté de façon à avoir un micro-framework qui génère (presque) automatiquement le "RESTfull routing".
Il suffit de copier/coller les trois templates (cf partie 3) ) et de les compléter en fonction de nos besoins.
- Avantages : gain en productivité sur le long terme, hautement maintenable, lisibilité du code
- Inconvénients : plus long à mettre en place

***********
1) START APP
***********

Lancer l'application : ```sh node app.js```
<br/>
Faire tourner en continue l'application  : ```sh forever start app.js``` (nécessite le paquet forever : npm install forever -g)
***********

Répartition du travail (côté serveur):

Nicolas Forget : 
- tests unitaires
- travail côté Front

Edouard Germain : 
- mise en place du serveur minimal
- refactoring avec des modules/requires
- compléter le serveur
- génération de la documentation
- déploiement sur le VPS

***********
2) MODULES
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


***********
3) TEMPLATES
***********

Template d'un modèle

```js
    var mongoose=require('mongoose');

    var ObjectSchema = mongoose.Schema({
       
       /* AJOUTER : Attributs de l'objet */
       ,
    {// optionnal : add createdAt and updatedAt fields
        timestamps: true
    });


    exports.Schema = ObjectSchema;

    exports.Model = mongoose.model('Comments', ObjectSchema);
```
Template d'un controleur 

```js
    var Object = require('../models/Annotation.js');
    var Video = require('../models/Video.js');

    module.exports = require('./base/index.js')(Object);

    /* AJOUTER/SURCHARGER des fonctionnalités ici */
```

Template des routes 

```js
module.exports = function(app,passport) {
        var 'Objet'Controller = require('../controllers/'Objet'Controller.js');
        require('./base/index')(app,passport,"'Objet'");
    
        /* AJOUTER DES ROUTES ICI */
    };
```
***********
4) APIDOC
***********

Pour générer la documentation (nécessite apidoc : npm install apidoc -g):
```sh apidoc -i routes/ -o apidoc```
<br/><br/>
Lien vers la documentation : https://node.edouardg.fr/apidoc/


***********
5) TESTS
***********
Lancer les tests : <br/><br/>
```sh mocha tests/MainTest.js``` <br/>
```sh mocha tests/UserTest.js```


***********
6) USEFULL CMD
***********
 KILL NODE - if IntelliJ let it run after exit<br/>
```sh ps -aef | grep 'node'``` <br/>
```sh kill pid```