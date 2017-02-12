***********
VIDEONETWORK-BACKEND
***********

L'application web a été développé en Javascript , avec NodeJS dans le cadre du cours "Programable Web". 
Pour la persistance des données et des sessions, nous avons utilisés MongoDB pour appliquer les notions vues en cours.
Il aurait pu être pertinent d'utiliser une BDD NoSQL key-value comme Redis pour stocker les sessions.<br/>
Notre serveur permet de gérer :
utilisateur (connexion , déconnexion, s'inscrire, supprimer son compte), photo (upload/récupération), video (S/CRUD), playlist (CRUD), annotation (CRUD), commentaire (CRUD), likes (CRUD)..
<br/>En somme, toutes les fonctionnalités dont a besoin un bon "videonetwork".


Le serveur a été implémenté de façon à avoir un framework "fait maison" réutilisable pour d'autres projets. 
Il génère (presque) automatiquement le "RESTfull routing" à partir des modèles.
Il suffit de copier/coller les trois templates (cf partie 3) et de les compléter en fonction de nos besoins.
Un script sera fait pour automatiser cette tâche.

Avantages : 
- gain en productivité sur le long terme
- hautement maintenable
- lisibilité du code

Inconvénients : 
- plus long à mettre en place

<br/>
Répartition du travail (côté serveur):

Nicolas Forget : 
- élaboration du modèle de donnée
- tests unitaires
- travail côté Front

Edouard Germain : 
- mise en place du serveur minimal
- refactoring avec des modules/requires
- compléter le serveur
- génération de la documentation
- déploiement 
- aide intégration (cf XMLhhtpRequests_examples)

***********
1) START APP
***********
Lancer mongo : ```mongod --dbpath /var/lib/mongodb/ --sslMode requireSSL --sslPEMKeyFile ./config/certificate/mongodb.pem``` 
<br/>
Lancer l'application : ```node app.js```
<br/>
Faire tourner en continue l'application  : ```forever start app.js``` 
<br/>(nécessite le paquet forever : ```npm install forever -g```)
***********
Liens vers l'API :<br/>
API REST /Annotation : https://node.edouardg.fr/Annotation<br/>
API REST /Comment : https://node.edouardg.fr/Comment<br/>
API REST /Like : https://node.edouardg.fr/Like<br/>
API REST /Playlist : https://node.edouardg.fr/Playlist<br/>
API REST /User : https://node.edouardg.fr/User<br/>
API REST /Video : https://node.edouardg.fr/Video<br/>

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

Template des tests 

```js
describe("SAMPLE unit tests",function(){

    it("should do something",function(done){
        server
            .get("/")                       // Ou .post() ou .delete() etc...avec les parametres entre parenthèse
            .expect("Content-type",/json/)
            .expect(200)                    // Réponse HTTP 
            .end(function(err, res){
            
            /* Traitement de la reponse et/ou de l'erreur */
            
            done();
        });
    });
});
```
    
***********
4) APIDOC
***********

Pour générer la documentation (nécessite apidoc : ```npm install apidoc -g```):<br/>
```apidoc -i routes/ -o apidoc```
<br/><br/>
Lien vers la documentation : https://node.edouardg.fr/apidoc/


***********
5) TESTS
***********
Lancer les tests : <br/><br/>
```mocha tests/MainTest.js```

Tout les tests sont regroupé dans un seul fichier.
Il n'y en a pas pour toute les fonctionnalitées de toute les entitées.
Le but est simplement de tester que la plupart des actions marchent pour plusieurs entitées différentes.
Les premiers tests servent a vérifier la connexion avec le server et a ajouter un login (utilisateur)
Ensuite nous avons une partie test sur les utilisateur (récupération, ajout).
Puis des tests sur des commentaires pour voir si notre utilisateur peut ajouter, récupérer, changer et supprimer un commentaire.
Enfin on vérifie la suppression de cet utilisateur.

Le fichier de test contient les information suivantes :

```
//message de retour du server lors d'une suppression 
var deleteMessage = "removed";

//information d'un nouvel utilisateur
var otherName = "other";
var otherPass = "otherpass";
var otherId;
var otherCookie;

//information d'un commentaire
var commentText = "first!";
var commentId;

//taille de la liste d'utilisateur et de commentaire
var listUserLength;
var listCommLength;
```

Puis nous avons les test unitaires suivant :

```
it("should contact server and handle 404",function(done){
it("should add a login",function(done){

//User test part1
it("should return list user length",function(done){
it("should add a user",function(done){
it("should return list with the new user",function(done){
it("should login the new user",function(done){

//Comment test
it("should return list of comment length",function(done){
it("should add a new comment from the new user",function(done){
it("should return comment list length with one more",function(done){
it("should get the new comment by id",function(done){
it("should update the new comment with new text",function(done){
it("should delete the new comment",function(done){
it("should return comment list length with one less",function(done){
 
//User test part2
it("should delete a user",function(done){
it("should return list with one user less"

```

***********
6) USEFULL CMD
***********
 KILL NODE - if IntelliJ let it run after exit<br/>
```ps -aef | grep 'node'``` <br/>
```kill pid```