var YouTube = require('youtube-node');

var youTube = new YouTube();

// Set the key (using google developer)
youTube.setKey('AIzaSyB1OOSpTREs85WUMvIgJvLTZKye4BVsoFU');

// Search with id/name, number and result
youTube.search('Amixem', 2, function(error, result) {
  if (error) {
    console.log(error);
  }
  else {
    console.log(JSON.stringify(result, null, 2));
  }
});