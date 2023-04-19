function myFunction() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=18jzzOGvdH_uGN1XHUDnDWZQbgTUy772g&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://zfirelight.github.io/5E06116F/1.png";
    document.getElementById("video").addEventListener('ended',myFunction2,false);
}

function myFunction2() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=1y0lik2AEYeAXPgrXmaQHoWntfn6q4O44&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://zfirelight.github.io/5E06116F/2.png";
    document.getElementById("video").addEventListener('ended',myFunction3,false);
}

function myFunction3() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=16FleCSKvabpXW1Hr-jisKYZuEVCd11nK&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://zfirelight.github.io/5E06116F/3.png";
    document.getElementById("video").addEventListener('ended',myFunction4,false);
}

function myFunction4() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=1LNARjTk1JHSH6Kb26pY8q_xanTDoLNjh&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://zfirelight.github.io/5E06116F/4.png";
    document.getElementById("video").addEventListener('ended',myFunction5,false);
}

function myFunction5() { 
    document.getElementById("mp4").src = "";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://zfirelight.github.io/5E06116F/refresh.png";
}