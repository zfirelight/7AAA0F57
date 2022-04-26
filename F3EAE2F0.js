function myFunction() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?export=view&id=1Nfe-4EAvI6Sjs9no_izGS24awFJllHLJ";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/1.png";
    document.getElementById("video").addEventListener('ended',myFunction2,false);
}

function myFunction2() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?export=view&id=1YW6LZhpZAqruQJeXPWQyhw2ZtyWBUR8P";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/2.png";
    document.getElementById("video").addEventListener('ended',myFunction3,false);
}

function myFunction3() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?export=view&id=1qDz-YtPTvHASu93NdnkSNGeHlxknZDcl";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/3.png";
    document.getElementById("video").addEventListener('ended',myFunction4,false);
}

function myFunction4() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?export=view&id=1tpx9peYwAIJfaJ2wNhsP8HGMK6pBFXQU";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/4.png";
    document.getElementById("video").addEventListener('ended',myFunction5,false);
}

function myFunction5() { 
    document.getElementById("mp4").src = "";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/refresh.png";
}