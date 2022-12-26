function myFunction() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=1UQ998OyR-KgUvATMBq2D9IYXdvvoXyCq&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/1.png";
    document.getElementById("video").addEventListener('ended',myFunction2,false);
}

function myFunction2() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=12sRzXnkZoEa0hE-R4A-iAu8QQmsfETqG&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/2.png";
    document.getElementById("video").addEventListener('ended',myFunction3,false);
}

function myFunction3() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=19HAxLht6QyJXaev0SgCoNM1C8hkqxZLO&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/3.png";
    document.getElementById("video").addEventListener('ended',myFunction4,false);
}

function myFunction4() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=15lvUUYW5L597OnY1zHuCymzQcFUEKYjd&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/4.png";
    document.getElementById("video").addEventListener('ended',myFunction5,false);
}

function myFunction5() { 
    document.getElementById("mp4").src = "";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/refresh.png";
}