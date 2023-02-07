function myFunction() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=1Bxq5gub3aEbk50JoJg-UlX5qx2B8orZ6&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://zfirelight.github.io/5E06116F/1.png";
    document.getElementById("video").addEventListener('ended',myFunction2,false);
}

function myFunction2() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=1TEea3MQNw89-fO_Ae6puEP41fXtg34Vu&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://zfirelight.github.io/5E06116F/2.png";
    document.getElementById("video").addEventListener('ended',myFunction3,false);
}

function myFunction3() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=1xX99vzzdAQl__woCFffTYLSeOqXf1qad&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://zfirelight.github.io/5E06116F/3.png";
    document.getElementById("video").addEventListener('ended',myFunction4,false);
}

function myFunction4() { 
    document.getElementById("mp4").src = "https://drive.google.com/uc?id=1UQGiO5D7Yhn4FJbx6cEaX8FHsDk8GzRW&export=download";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://zfirelight.github.io/5E06116F/4.png";
    document.getElementById("video").addEventListener('ended',myFunction5,false);
}

function myFunction5() { 
    document.getElementById("mp4").src = "";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://zfirelight.github.io/5E06116F/refresh.png";
}