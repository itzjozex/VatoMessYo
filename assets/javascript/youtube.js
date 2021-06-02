$(document).ready(function(){

    var API_KEY = "AIzaSyCF7SRcPIJsOG1zjMyOmmRnBzqYXdJ1yF4"

    var video = ''

    $("#form").submit(function(event){
        event.preventDefault()

        var search = $("#search").val()

        videoSearch(API_KEY,search,5)
    })

    function videoSearch(key, search, maxsResults)

        $.get("https://www.googleapis.com/youtube/v3/search?key="+ key + "&type=video&part=snippet&maxResults=" + maxsResults + "&q=" + search,function(data){
            $(".result").html(data);
          console.log(data)

            data.items.forEach(item => {
            video = 
            `
             <iframe width="420" height="315" src="http://www.youtube.com.embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
            `

            $("#videos").append(video)
        });
    }); 
});