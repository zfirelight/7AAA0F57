function myFunction() { 
    document.getElementById("mp4").src = "https://s3.wasabisys.com/degoo-production-large-file-us-east1.degoo.info/QDWqvl/i6K5Dw/m4a/ChShrJx6GttECjfmjh09ovjUOLVXDRAA.m4a?AWSAccessKeyId=QCIW8NA9JUUC4PKQYZTJ&Expires=1651149971&Signature=FMCl9VEriX%2BqQ03SnzSoSCdelDA%3D";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/1.png";
    document.getElementById("video").addEventListener('ended',myFunction2,false);
}

function myFunction2() { 
    document.getElementById("mp4").src = "https://s3.wasabisys.com/degoo-production-large-file-us-east1.degoo.info/QDWqvl/i6K5Dw/m4a/ChTdd4W97HbZYhdyoFeHGRAn6DMEpBAA.m4a?AWSAccessKeyId=QCIW8NA9JUUC4PKQYZTJ&Expires=1651150001&Signature=76TcxlhGgl5RjU3gEYPdUquyGgc%3D";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/2.png";
    document.getElementById("video").addEventListener('ended',myFunction3,false);
}

function myFunction3() { 
    document.getElementById("mp4").src = "https://s3.wasabisys.com/degoo-production-large-file-us-east1.degoo.info/QDWqvl/i6K5Dw/m4a/ChT5BaHNb_o8anFWO7ztIzgbE4xnpBAA.m4a?AWSAccessKeyId=QCIW8NA9JUUC4PKQYZTJ&Expires=1651150020&Signature=C6d9irtTxtVIsheR%2B%2B9WQxv4zLg%3D";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/3.png";
    document.getElementById("video").addEventListener('ended',myFunction4,false);
}

function myFunction4() { 
    document.getElementById("mp4").src = "https://s3.wasabisys.com/degoo-production-large-file-us-east1.degoo.info/QDWqvl/i6K5Dw/m4a/ChRTbYG4JseiSXc6PMhnR5PNQHkwXhAA.m4a?AWSAccessKeyId=QCIW8NA9JUUC4PKQYZTJ&Expires=1651150043&Signature=yadLzyB2xixc1XE0giVt36z5Ww8%3D";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/4.png";
    document.getElementById("video").addEventListener('ended',myFunction5,false);
}

function myFunction5() { 
    document.getElementById("mp4").src = "";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/refresh.png";
}