function myFunction() { 
    document.getElementById("mp4").src = "https://s3.wasabisys.com/degoo-production-large-file-us-east1.degoo.info/QDWqvl/i6K5Dw/m4a/ChQvjZt-asLstycYa2Wee726vCvlqxAA.m4a?AWSAccessKeyId=QCIW8NA9JUUC4PKQYZTJ&Expires=1650905171&Signature=QhyBZfVtOXPLpvL7%2B1pIjMUVCjM%3D";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/1.png";
    document.getElementById("video").addEventListener('ended',myFunction2,false);
}

function myFunction2() { 
    document.getElementById("mp4").src = "https://s3.wasabisys.com/degoo-production-large-file-us-east1.degoo.info/QDWqvl/i6K5Dw/m4a/ChSAm9XSxhMvau5xHo8LbJ4HLi-lJRAA.m4a?AWSAccessKeyId=QCIW8NA9JUUC4PKQYZTJ&Expires=1650905227&Signature=V8nvPlp8pyNCiTaqGpMGazx3J7I%3D";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/2.png";
    document.getElementById("video").addEventListener('ended',myFunction3,false);
}

function myFunction3() { 
    document.getElementById("mp4").src = "https://s3.wasabisys.com/degoo-production-large-file-us-east1.degoo.info/QDWqvl/i6K5Dw/m4a/ChSCYnV0kE8LKZsN62WMzG7Te1WQIBAA.m4a?AWSAccessKeyId=QCIW8NA9JUUC4PKQYZTJ&Expires=1650905264&Signature=kCoZ4CzO5zSqHa4LPOZZQ7R8V%2BE%3D";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/3.png";
    document.getElementById("video").addEventListener('ended',myFunction4,false);
}

function myFunction4() { 
    document.getElementById("mp4").src = "https://s3.wasabisys.com/degoo-production-large-file-us-east1.degoo.info/QDWqvl/i6K5Dw/m4a/ChRFAzWMpT0vuv54xhQdrghc7OfJ8RAA.m4a?AWSAccessKeyId=QCIW8NA9JUUC4PKQYZTJ&Expires=1650905299&Signature=Xo1mpPLNN0Z25%2FWyokIajrwuQz0%3D";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/4.png";
    document.getElementById("video").addEventListener('ended',myFunction5,false);
}

function myFunction5() { 
    document.getElementById("mp4").src = "";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/refresh.png";
}