
// Get the twitch api loaded.
  Twitch.init({clientId: 'mzbri5lzbhbj9fpi0d1ip91hz4lw2b3'}, function(error, status) {
   console.log("Twitch API Loaded");
  });
var spotlight = 1
var member = "mylittlepwn1e"


if (spotlight === 1) {
   document.getElementById('spotlight').innerHTML += ' <iframe src="http://player.twitch.tv/?channel=' + member + '&autoplay=true" frameborder="0" scrolling="no" height="378" width="620"></iframe><br><a href="http://twitch.tv/' + member + '">Check them out on Twitch!</a>';
Twitch.api({method: 'channels/' + member },  function(error, channel) {
  document.getElementById('info').innerHTML +=  channel.display_name + ' currently playing: ' + channel.game + '<br>' + channel.status;
    if (channel.logo === null) {
    document.getElementById('picture').innerHTML += '<img src="http://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png" class="img-responsive img-circle"> <br>';
  } else {
    document.getElementById('picture').innerHTML += '<img src="' + channel.logo + '" height="150" width="150" class="img-responsive img-circle"> <br>';
  }
});
 } else {
  document.getElementById('spotlight').innerHTML += '<h3>No spotlight is currently active.</h3>';
 }


