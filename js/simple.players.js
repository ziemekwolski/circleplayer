var initSimplePlayer = function(selector) {
  $(selector).each(function( index ) {
    var playerId = 'sm_jquery_jplayer_' + index;
    var palyerSelector = '#' + playerId;
    var playerDiv = '<div id="' + playerId + '" class="cp-jplayer"></div>';
    var playerSnippetClass = 'cp2_container_' + index;
    var playerSnippetSelector = '#' + playerSnippetClass;
    var playerSnippet = $([
      '<div id="' + playerSnippetClass + '" class="cp-container">',
      ' <div class="cp-buffer-holder"> <!-- .cp-gt50 only needed when buffer is > than 50% -->',
      '   <div class="cp-buffer-1"></div>',
      '   <div class="cp-buffer-2"></div>',
      ' </div>',
      ' <div class="cp-progress-holder"> <!-- .cp-gt50 only needed when progress is > than 50% -->',
      '   <div class="cp-progress-1"></div>',
      '   <div class="cp-progress-2"></div>',
      ' </div>',
      ' <div class="cp-circle-control"></div>',
      ' <ul class="cp-controls">',
      '   <li><a href="#" class="cp-play" tabindex="1">play</a></li>',
          //Needs the inline style here, or jQuery.show() uses display:inline instead of display:block
      '   <li><a href="#" class="cp-pause" style="display:none;" tabindex="1">pause</a></li>', 
      ' </ul>',
      '</div>'
    ].join(""));
    var playerFiles = $(this).data();

    $('#simple-jplayer').append(playerDiv);
    $(this).html(playerSnippet);

    //Add the player
    var myCirclePlayer = new CirclePlayer(palyerSelector, playerFiles, { cssSelectorAncestor: playerSnippetSelector});

  });
};