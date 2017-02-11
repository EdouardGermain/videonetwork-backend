***********
VIDEONETWORK-BACKEND
***********

L'application web a été développé en Javascript , avec Node JS dans le cadre du cours "Programable Web". 
Pour la persistence des données et des sessions, nous avons utilisés MongoDB même s'il aurait été peut-être
plus pertinent d'utiliser une BDD NoSQL key-value comme Redis pour gérer les sessions.<br/>
Notre serveur permet de gérer :
utilisateur (connexion , déconnexion, s'inscrire, supprimer son compte), photo , video, playlist, annotation, commentaire, likes..
En somme, tous les modèles dont a besoin un bon "videonetwork".


Le serveur a été implémenté de façon à avoir un micro-framework qui génère (presque) automatiquement le "RESTfull routing".
Il suffit de copier/coller les trois templates (cf partie 3) ) et de les compléter en fonction de nos besoins.

Avantages : 
- gain en productivité sur le long terme
- hautement maintenable
- lisibilité du code

Inconvénients : 
- plus long à mettre en place

<br/>
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
1) START APP
***********

Lancer l'application : ```sh node app.js```
<br/>
Faire tourner en continue l'application  : ```sh forever start app.js``` 
<br/>(nécessite le paquet forever : ```sh npm install forever -g```)
***********
Liens vers l'API :
API REST /Annotation : https://node.edouardg.fr/Annotation
API REST /Comment : https://node.edouardg.fr/Comment
API REST /Like : https://node.edouardg.fr/Like
API REST /Playlist : https://node.edouardg.fr/Playlist
API REST /User : https://node.edouardg.fr/User
API REST /Video : https://node.edouardg.fr/Video

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

    exports.Model = mongoose.model('to_replace', ObjectSchema);
```
Template d'un controleur 

```js
    var Object = require('../models/to_replace.js');

    module.exports = require('./base/index.js')(Object);

    /* AJOUTER/SURCHARGER des fonctionnalités ici */
```

Template des routes 

```js
module.exports = function(app,passport) {
        var to_replaceController = require('../controllers/to_replaceController.js');
        require('./base/index')(app,passport,"to_replace");
    
        /* AJOUTER DES ROUTES ICI */
    };
```
***********
4) APIDOC
***********

Pour générer la documentation (nécessite apidoc : ```sh npm install apidoc -g```):<br/>
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