function myFunction() { 
    document.getElementById("mp4").src = "https://s3.wasabisys.com/degoo-production-large-file-us-east1.degoo.info/QDWqvl/i6K5Dw/m4a/ChQYMPkLwwzXGY-vEG0dtOK0ala-3hAA.m4a?AWSAccessKeyId=QCIW8NA9JUUC4PKQYZTJ&Expires=1651842817&Signature=LwdtyqOg3PqyeD%2FG9mm7oYLAfn4%3D";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/1.png";
    document.getElementById("video").addEventListener('ended',myFunction2,false);
}

function myFunction2() { 
    document.getElementById("mp4").src = "https://s3.wasabisys.com/degoo-production-large-file-us-east1.degoo.info/QDWqvl/i6K5Dw/m4a/ChQSnG4OMvq7zppWXis7sNkDeniOLhAA.m4a?AWSAccessKeyId=QCIW8NA9JUUC4PKQYZTJ&Expires=1651842845&Signature=cnSmZu0KzhdLMtRRxxzPqicTCMM%3D";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/2.png";
    document.getElementById("video").addEventListener('ended',myFunction3,false);
}

function myFunction3() { 
    document.getElementById("mp4").src = "https://s3.wasabisys.com/degoo-production-large-file-us-east1.degoo.info/QDWqvl/i6K5Dw/m4a/ChQTk65bM0U5VKiQ0OwDqx1oUZzBgBAA.m4a?AWSAccessKeyId=QCIW8NA9JUUC4PKQYZTJ&Expires=1651842866&Signature=h2GFrXMeWQFIppEodLcDGbn4Bf8%3D";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/3.png";
    document.getElementById("video").addEventListener('ended',myFunction4,false);
}

function myFunction4() { 
    document.getElementById("mp4").src = "https://s3.wasabisys.com/degoo-production-large-file-us-east1.degoo.info/QDWqvl/i6K5Dw/m4a/ChTVsDRcfALaD10Y-HQZ5JxBlF4l4BAA.m4a?AWSAccessKeyId=QCIW8NA9JUUC4PKQYZTJ&Expires=1651842894&Signature=FUamFOz9SBx8iP76wW%2Fku8i1R2g%3D";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/4.png";
    document.getElementById("video").addEventListener('ended',myFunction5,false);
}

function myFunction5() { 
    document.getElementById("mp4").src = "";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/refresh.png";
}