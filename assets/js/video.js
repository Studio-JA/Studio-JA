var id = document.URL.split('?v=')[1]
if (id == "vKsic5CEf78") {
    document.getElementById("name").innerHTML = "Extreme House Damage 2 Official Trailer"
    document.getElementById("des").innerHTML = "J&A Studios is starting a brand new movie franchise called Extreme House Damage. Watch the premier of the new franchise."
   setTimeout(function(){
    let m = `<iframe id="ytplayer" type="text/html" frameborder="0"
    style="width: 70%; height: 600px; margin-left: 310px;"
    src="https://www.youtube.com/embed/vKsic5CEf78?modestbranding=1" allowfullscreen></iframe>`
    $("#player").append(m)
    }, 1000)
}
if (id == "JdfHxknFkDs") {
    document.getElementById("name").innerHTML = "Extreme House Damage 2 Official Final Trailer"
    document.getElementById("des").innerHTML = "J&A Studios presents a brand new series to you, featuring all you favorite actors like Pete and Om Nom. Watch four gangsters try and take over the world, and see if anyone can stop them."
    setTimeout(function(){
    let m = ` <iframe id="ytplayer" type="text/html" frameborder="0"
    style="width: 70%; height: 600px; margin-left: 310px;"
    src="https://www.youtube.com/embed/JdfHxknFkDs?modestbranding=1" allowfullscreen></iframe>`
    $("#player").append(m)
}, 1000)
}
if (id == "dxzlHI-mGyA") {
    document.getElementById("name").innerHTML = "Extreme House Damage 2"
    document.getElementById("des").innerHTML = "J&A Studios presents a brand new story of four former-mafia gangsters who are trying to take over the world. With over 100K kills in 3 days, nobody knows what will happen, where it will happen, or who the victims will be."
    setTimeout(function(){
    let m = ` <iframe id="ytplayer" type="text/html" frameborder="0"
    style="width: 70%; height: 600px; margin-left: 310px;"
    src="https://www.youtube.com/embed/dxzlHI-mGyA?modestbranding=1" allowfullscreen></iframe>`
    $("#player").append(m)
}, 1000)
}
if (id == "WS0ANTYaj9Y") {
    document.getElementById("name").innerHTML = "Extreme House Damage 3 Official Trailer"
    document.getElementById("des").innerHTML = "On February 25, come watch the minions return. After murdering Pete’s family, along with thousands of others, Pete is out on the run with no supervision, and no where to go. The minions are out for Pete along with anyone who they see. Come see all your favorite actors back on the big screen again!"
    setTimeout(function(){
    let m = ` <iframe id="ytplayer" type="text/html" frameborder="0"
    style="width: 70%; height: 600px; margin-left: 310px;"
    src="https://www.youtube.com/embed/WS0ANTYaj9Y?modestbranding=1" allowfullscreen></iframe>`
    $("#player").append(m)
}, 1000)
}
if (id == "dGnBIR1wThM") {
    document.getElementById("name").innerHTML = "Extreme House Damage 3 | Final Trailer"
    document.getElementById("des").innerHTML = "In 5 days, witness what a few changes of a life can do to a person, as Pete turns to a vicious member of the Moscow Massacre."
    setTimeout(function(){
    let m = ` <iframe id="ytplayer" type="text/html" frameborder="0"
    style="width: 70%; height: 600px; margin-left: 310px;"
    src="https://www.youtube.com/embed/dGnBIR1wThM?modestbranding=1" allowfullscreen></iframe>`
    $("#player").append(m)
}, 1000)
}
if (id == "r9PnyLOQg5I") {
    document.getElementById("name").innerHTML = "Extreme House Damage 3"
    document.getElementById("des").innerHTML = "After Kevin murdered Pete's family, Pete is on his own running from the Moscow Massacre. Come see all your favorite actors in the second addition to the Extreme House Damage film series, and see what will happen to Pete and the rest of the gang in the new movie, Extreme House Damage 3!"
    setTimeout(function(){
    let m = ` <iframe id="ytplayer" type="text/html" frameborder="0"
    style="width: 70%; height: 600px; margin-left: 310px;"
    src="https://www.youtube.com/embed/r9PnyLOQg5I?modestbranding=1" allowfullscreen></iframe>`
    $("#player").append(m)
}, 1000)
}

var disqus_config = function () {
    this.page.url = `https://ja-studio.co/videos?v=${id}`  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = `https://ja-studio.co/videos?v=${id}`; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

  (function () { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://ja-studios.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();

  document.getElementById('head').addEventListener('click', function () {
    window.location.href = "./";
    });