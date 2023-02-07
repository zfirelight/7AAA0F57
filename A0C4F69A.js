function myFunction() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=1XCCpz5BdD3no1qnEAl7vsLTPAceCfBWA&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://zfirelight.github.io/5E06116F/1.png";
    document.getElementById("video").addEventListener('ended',myFunction2,false);
}

function myFunction2() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=1c21sLOje2roA92A3213d8Kw2vOLK0d3G&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://zfirelight.github.io/5E06116F/2.png";
    document.getElementById("video").addEventListener('ended',myFunction3,false);
}

function myFunction3() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=156T8RKat88GYvsg-4SsRdp_C6snyRBXb&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://zfirelight.github.io/5E06116F/3.png";
    document.getElementById("video").addEventListener('ended',myFunction4,false);
}

function myFunction4() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=1ocsm6WjZYPrtHRDf2cBPdQ2FPeFHNSCN&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://zfirelight.github.io/5E06116F/4.png";
    document.getElementById("video").addEventListener('ended',myFunction5,false);
}

function myFunction5() { 
    document.getElementById("mp4").src = "";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://zfirelight.github.io/5E06116F/refresh.png";
}