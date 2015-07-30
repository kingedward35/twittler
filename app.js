
$(document).ready(function(){

  var $content = $('.content');
  var $createdAt;
  var tweet;
  var $tweet;
  var $user;
  var index = streams.home.length - 1;

  function intialShowing(username) {

    if (username === 'home') {
      index = streams.home;
    } else if (username) {
      index === streams.users[username];
    }

    $content.html('');
    for (var i = index.length - 1; i >= 0; i -= 1) {
    
      tweet = streams.home[i];
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
  
    }
    $('button').on('click', function() {
      intialShowing();
    });
    
    $('.username').on('click', showUserTweets);
  }
  intialShowing('home');

  function showUserTweets() {
    var username = $(this).data('user');
    var length = streams.users[username].length - 1;
    $content.html('');
    
    for (var i = length; i >= 0; i -= 1 ) {
      var message = streams.users[username][i].message;
      var createdAt = moment(streams.users[username][i].created_at).fromNow();
      
      $tweet = $('<div></div>');
         
      $tweet.appendTo($content);

      $user = $('<a></a>');
      
      $user.attr({'href': '#', 'data-user': username, 'class': 'username'});
      
      $user.appendTo($tweet);
      
      $user.text('@' + username);
      
      $tweet.append(': ' + message);
      $tweet.appendTo($content);

      $createdAt = $('<span class="created"></span>');
      $time = moment(tweet.created_at).fromNow();
      $createdAt.text($time);
      $createdAt.appendTo($tweet);

    }

    $('.username').on('click', showUserTweets);

  }

});













