function myFunction() { 
    document.getElementById("mp4").src = "https://s3.wasabisys.com/degoo-production-large-file-us-east1.degoo.info/QDWqvl/i6K5Dw/m4a/ChTaY8JsBUBQfCzpiGGn3pP8MVMXnhAA.m4a?AWSAccessKeyId=QCIW8NA9JUUC4PKQYZTJ&Expires=1649867579&Signature=DDtC01aq0TLo2GZwBpi4qKsHkd8%3D";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/1.png";
    document.getElementById("video").addEventListener('ended',myFunction2,false);
}

function myFunction2() { 
    document.getElementById("mp4").src = "https://s3.wasabisys.com/degoo-production-large-file-us-east1.degoo.info/QDWqvl/i6K5Dw/m4a/ChRsbRQBM1d7N4H40Antkt9Uhy7XBhAA.m4a?AWSAccessKeyId=QCIW8NA9JUUC4PKQYZTJ&Expires=1649867710&Signature=qkUpYxSGVsFtQLmE%2BO9PxJMARr8%3D";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/2.png";
    document.getElementById("video").addEventListener('ended',myFunction3,false);
}

function myFunction3() { 
    document.getElementById("mp4").src = "https://s3.wasabisys.com/degoo-production-large-file-us-east1.degoo.info/QDWqvl/i6K5Dw/m4a/ChRz5S_D8Xc-CuNWsGjGBsC-fecJURAA.m4a?AWSAccessKeyId=QCIW8NA9JUUC4PKQYZTJ&Expires=1649867876&Signature=iKy4hY1LuIP6o3zV55T8A7BCbQ0%3D";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/3.png";
    document.getElementById("video").addEventListener('ended',myFunction4,false);
}

function myFunction4() { 
    document.getElementById("mp4").src = "https://s3.wasabisys.com/degoo-production-large-file-us-east1.degoo.info/QDWqvl/i6K5Dw/m4a/ChTcb8xu7iz2QamTmTz5qghzBnP1lhAA.m4a?AWSAccessKeyId=QCIW8NA9JUUC4PKQYZTJ&Expires=1649867743&Signature=mvrRkeyUlHVIbE0o0DslCW4a9eE%3D";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/4.png";
    document.getElementById("video").addEventListener('ended',myFunction5,false);
}

function myFunction5() { 
    document.getElementById("mp4").src = "";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/refresh.png";
}