function myFunction() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=1t5p-p7V3OKsgUNiAXoLgnRY56afR8toC&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://zfirelight.github.io/5E06116F/1.png";
    document.getElementById("video").addEventListener('ended',myFunction2,false);
}

function myFunction2() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=1c7txqL1DoGvx6NaLrQoOrbVfSKCfbZu2&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://zfirelight.github.io/5E06116F/2.png";
    document.getElementById("video").addEventListener('ended',myFunction3,false);
}

function myFunction3() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=1XVGVy7lTynPjScXiGo1HYZq5P0oe1mZm&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://zfirelight.github.io/5E06116F/3.png";
    document.getElementById("video").addEventListener('ended',myFunction4,false);
}

function myFunction4() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=14U3vzLwzMQ7aC52Fy4KrhZxMNeCUIHu_&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://zfirelight.github.io/5E06116F/4.png";
    document.getElementById("video").addEventListener('ended',myFunction5,false);
}

function myFunction5() { 
    document.getElementById("mp4").src = "";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://zfirelight.github.io/5E06116F/refresh.png";
}