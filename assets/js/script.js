$(document).ready(function() {
    var API_KEY = "AIzaSyBoZgvrEEGazge4914muy8Yia9I2HUVK4s";

    var video = ''

    $("form").submit(function(event) {
        event.preventDefault();

        var search = $("#search").val();
        videoSearch(API_KEY, search, 12);
    })

    function videoSearch(key, search, maxResults) {

        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search, function(data) {
            console.log(data);

            data.items.forEach(item => {

                video = `
                            <iframe width="300" height="300" src="https://www.youtube.com/embed/${item.id.videoId}"  frameborder="5"  allowfullscreen></iframe>
                            `
                console.log(video);
                $("#Bideos").append(video);

            });
        })

    }



})
