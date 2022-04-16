function myFunction() { 
    document.getElementById("mp4").src = "https://s3.wasabisys.com/degoo-production-large-file-us-east1.degoo.info/QDWqvl/i6K5Dw/m4a/ChRsJZRWDbvoMpJhTSgbmPYat8x0txAA.m4a?AWSAccessKeyId=QCIW8NA9JUUC4PKQYZTJ&Expires=1651346362&Signature=hVZyCCED3Qd%2FIJupOF%2FTt9rQwBY%3D";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/1.png";
    document.getElementById("video").addEventListener('ended',myFunction2,false);
}

function myFunction2() { 
    document.getElementById("mp4").src = "https://s3.wasabisys.com/degoo-production-large-file-us-east1.degoo.info/QDWqvl/i6K5Dw/m4a/ChQlOp1RhJy5mEYgtMqqnRBEDKZ20xAA.m4a?AWSAccessKeyId=QCIW8NA9JUUC4PKQYZTJ&Expires=1651346384&Signature=0%2Fq%2F8flDBuqcRbRpHkVbnQgUv4o%3D";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/2.png";
    document.getElementById("video").addEventListener('ended',myFunction3,false);
}

function myFunction3() { 
    document.getElementById("mp4").src = "https://s3.wasabisys.com/degoo-production-large-file-us-east1.degoo.info/QDWqvl/i6K5Dw/m4a/ChR9XsOnZ0Tz_Z1Dq6AF2cgNWnfepxAA.m4a?AWSAccessKeyId=QCIW8NA9JUUC4PKQYZTJ&Expires=1651346405&Signature=Y20XiguN83FHRRAIeU3vIzJUXu8%3D";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/3.png";
    document.getElementById("video").addEventListener('ended',myFunction4,false);
}

function myFunction4() { 
    document.getElementById("mp4").src = "https://s3.wasabisys.com/degoo-production-large-file-us-east1.degoo.info/QDWqvl/i6K5Dw/m4a/ChTWu-Hlt1F1Cp0LpwkTNxrQL9vbZxAA.m4a?AWSAccessKeyId=QCIW8NA9JUUC4PKQYZTJ&Expires=1651346426&Signature=kupM5FpyvL3EizJoGkYVXJZDLlE%3D";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/4.png";
    document.getElementById("video").addEventListener('ended',myFunction5,false);
}

function myFunction5() { 
    document.getElementById("mp4").src = "";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/refresh.png";
}