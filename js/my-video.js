$(function(){
    $('my-video').each(function(){
        var url = $(this).attr('url');
        var klass = $(this).attr('class');

        var template = ' \
<section class="video-container"> \
  <video controls muted loop > \
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


    // $('img').load(function(){
    //     $(document).find('source[src2]')
    //         .each(function(){
    //             var url = $(this).attr('src2');
    //             $(this).attr('src', url);
    //             $(this).removeAttr('src2');
    //         });
    // });
});
