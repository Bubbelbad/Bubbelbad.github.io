// direct browser to top right away
if (window.location.hash)
    scroll(0,0);
// takes care of some browsers issue
setTimeout(function(){scroll(0,0);},1);

