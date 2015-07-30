/*
$(document).ready(function() {
  var $content = $('.content');

  var $test = $('<div></div>');
    $test.appendTo($content);

  function showTweets(data) {
    
    $content.html('');
    var $tweet = $('<div class="tweet"></div>');
    var store = streams.home.length - 1;

    if (data === 'all') {
      store = streams.home;
    } else if (data) {
      store = streams.users[data];
    }

    //for (var i = store.length - 1; i >= 0; i -= 1) {
      while(store >= 0) {
      var tweet = streams.home[store];


      $tweet.appendTo($content);

      $user = $('<a></a>');
      
      $user.attr({'href': '#', 'data-user': tweet.user, 'class': 'username'});
      
      $user.appendTo($tweet);
      
      $user.text('@' + tweet.user);
      
      $tweet.append(': ' + tweet.message);
      

      $createdAt = $('<span class="created"></span>');
      $time = moment(tweet.created_at).fromNow();
      $createdAt.text($time);
      $createdAt.appendTo($tweet);

      $tweet.appendTo($test);
      store -= 1;

    } 

    $('.username').on('click', function() {
      showTweets($(this).data('user'));
    });

  }

    showTweets('all');

});
  
*/
$(document).ready(function(){

  var $content = $('.content');
  var $update = $('.update');
  var $createdAt;
  var tweet;
  var $tweet;
  var $user;
  var index = streams.home.length - 1;

  function intialShowing() {
    while(index >= 0){
  
      tweet = streams.home[index];
      $tweet = $('<div></div>');
         
      $tweet.appendTo($content);

      $user = $('<a></a>');
      
      $user.attr({'href': '#', 'data-user': tweet.user, 'class': 'username'});
      
      $user.appendTo($tweet);
      
      $user.text('@' + tweet.user);
      
      $tweet.append(': ' + tweet.message);
      $tweet.appendTo($content);

      $createdAt = $('<span class="created"></span>');
      $time = moment(tweet.created_at).fromNow();
      $createdAt.text($time);
      $createdAt.appendTo($tweet);

      index -= 1;
    }
    $('#button').on('click', intialShowing);
  }
  intialShowing();



  var changeStyleSheet = stylesheet('style2.css');

  function stylesheet(sheet) {
    return function() {
      document.getElementById('changeuser').setAttribute('href', sheet);
    }
  }

  function showUserTweets() {
    var username = $(this).data('user');
    var length = streams.users[username].length - 1;
    $update.html('');
    
    for (var i = length; i >= 0; i -= 1 ) {

  
      $('.content').hide();
      var message = streams.users[username][i].message;
      var createdAt = moment(streams.users[username][i].created_at).fromNow();
      
      $tweet = $('<div></div>');
         
      $tweet.appendTo($update);

      $user = $('<a></a>');
      
      $user.attr({'href': '#', 'data-user': username, 'class': 'username'});
      
      $user.appendTo($tweet);
      
      $user.text('@' + username);
      
      $tweet.append(': ' + message);
      $tweet.appendTo($update);

      $createdAt = $('<span class="created"></span>');
      $time = moment(tweet.created_at).fromNow();
      $createdAt.text($time);
      $createdAt.appendTo($tweet);

      console.log('@' + username + ': ' + message + '         ' + createdAt + ': ' + i);

    }
     
    $('.username').on('click', showUserTweets);

  }
  
  $('.username').on('click', showUserTweets);
  $('.username').on('click', changeStyleSheet);
    


});













