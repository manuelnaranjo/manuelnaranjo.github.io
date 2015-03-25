$(function(){
  var notesUrl = false;
  var PREFIX = "jmpress-presentation-";

  $(window).on('message', function(event){
    if(typeof event.data !== "string" || event.data.indexOf(PREFIX) !== 0) {
      return;
    }

    var json = JSON.parse(event.data.slice(PREFIX.length));
    switch(json.type) {
    case "afterInit":
      event.source.postMessage(PREFIX + JSON.stringify({type:"listen"}), "*");
      break;
    case "select":
      window.opener.postMessage(PREFIX + JSON.stringify(json), "*");
      if(notesUrl && /[a-z0-9\-]+/i.test(json.targetId))
        $("#notesframe").attr("src", notesUrl+"#"+json.targetId);
      break;
    case "url":
      event.source.postMessage(PREFIX + JSON.stringify({type:"ok"}), "*");
      $("#frame").attr("src", json.url);
      notesUrl = json.notesUrl || notesUrl;
      if(notesUrl)
        $("#notesframe").attr("src", notesUrl);
      break;
    }
  });

  var start = null;

  $(window).on('keydown', function(event){
    if (event.which !== 155 && event.which !== 83) {
      return;
    }

    if (start !== null) {
      return;
    }

    start = new Date();

    setInterval(function(){
      var elapsed = new Date() - start;
      var hours = elapsed / 3600000;
      elapsed = elapsed %   3600000;
      var mins = elapsed / 60000;
      elapsed = elapsed %  60000;
      var secs = elapsed /  1000;
      var ms   = elapsed %  1000;
      var text = sprintf('%02d:%02d:%02d', hours, mins, secs);
      $('#clock').text(text);
    }, 251);

  });

})
