function myFunction() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=1xLjZS7Nk6z3D2f8NkoDw0SimznD3DbA5&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/1.png";
    document.getElementById("video").addEventListener('ended',myFunction2,false);
}

function myFunction2() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=1xYnaAE78YeDvx1uU3Ui_F-eTWwCgsFPW&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/2.png";
    document.getElementById("video").addEventListener('ended',myFunction3,false);
}

function myFunction3() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=1Cq51zo3FrAdIK8PM10LJxY29oLYEhhrt&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/3.png";
    document.getElementById("video").addEventListener('ended',myFunction4,false);
}

function myFunction4() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=1ig1R4t3jG5i3pHCe4_5HYrIFqRP2qJjc&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/4.png";
    document.getElementById("video").addEventListener('ended',myFunction5,false);
}

function myFunction5() { 
    document.getElementById("mp4").src = "";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/refresh.png";
}