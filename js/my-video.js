$(function(){
    $('my-video').each(function(){
        var url = $(this).attr('url');
        var klass = $(this).attr('class');

        var template = ' \
<section style="width: 950px; max-height: 700px"> \
  <video controls muted loop style="width: 950px; max-height: 700px"> \
    <source type="video/mp4"> \
  </video> \
  <span class="hito glyphicon glyphicon-ok" data-jmpress="fade"></span> \
</section> \
';
        template = $(template)
        template.find('source').attr('src', url);
        template.find('video').attr('class', klass);
        $(this).replaceWith(template);
    });
});
