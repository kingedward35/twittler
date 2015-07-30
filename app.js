

$(document).ready(function(){
  var $content = $('.content');

  function showTweets(data) {
    $content.html('');
    var $tweet = $('<div class="tweet"></div>');
    var store = streams.home.length - 1;

    if (data === 'all') {
      streams = streams.home;
    } else if (data) {
      streams = streams.users[data];
    }

    for (var i = store; i >= 0; i -= 1) {
      var tweet = streams.home[i];


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

      $tweet.appendTo($content);

    } 

    $('.username').on('click', function() {
      showTweets($(this).data('user'));
    });

    showTweets('all');

    }

});
  
/*    var tweet = $('<div></div>');
    var $tweet = $('<div class="tweet"></div>');


  function showTweets(object) {

    $content.html('');


    if (object === 'all') {
      streams = streams.home;
    } else if (object) {
      streams = streams.users[object];
    }

  
    while(index >= 0){
     
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

      index -= 1;
      }
      /*
      $('.username').on('click', function() {
        showTweets($(this).data('user'));
      });
    */

  //}
/*
  showTweets('all');
  $('.tweet').on('click', function() {
    showTweets('all');
  });

});


$(document).ready(function(){
        var $body = $('body');
        $body.html('');

        /*window.onload = autoUpdate;

        function autoUpdate() {
          setTimeout('updatePage();' 15000);
        }

        function updatePage() {
          window.location.href;
        }

        var index = streams.home.length - 1;
        while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $('<div></div>');
          $tweet.text('@' + tweet.user + ': ' + tweet.message);
          $tweet.appendTo($body);
          index -= 1;
        }

      });

*/




