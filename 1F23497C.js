function myFunction() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=1gqsZE0KqSFkeq60S_-kdAFK30OtZ7gHO&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://zfirelight.github.io/5E06116F/1.png";
    document.getElementById("video").addEventListener('ended',myFunction2,false);
}

function myFunction2() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=15Xhq1YBTfj_7pe0gCJzgazJ9N6csI_gJ&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://zfirelight.github.io/5E06116F/2.png";
    document.getElementById("video").addEventListener('ended',myFunction3,false);
}

function myFunction3() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=11tmfv1PrRpD0LLuORztfML5JlgOYraMe&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://zfirelight.github.io/5E06116F/3.png";
    document.getElementById("video").addEventListener('ended',myFunction4,false);
}

function myFunction4() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=1mssT0qjbvrenmojpKMt43Z_-Vf8q8a70&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://zfirelight.github.io/5E06116F/4.png";
    document.getElementById("video").addEventListener('ended',myFunction5,false);
}

function myFunction5() { 
    document.getElementById("mp4").src = "";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://zfirelight.github.io/5E06116F/refresh.png";
}