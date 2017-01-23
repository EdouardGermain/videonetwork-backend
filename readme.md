/*
 APIDOC
*/

Pour générer la documentation :
apidoc -i routes/ -o apidoc

Il faut au préalable avoir installer apidoc :
npm install apidoc -g

/*
 TESTS
*/

mocha tests/MainTest.js 


/*
 KILL NODE
*/

ps -aef | grep 'node' 
kill pid