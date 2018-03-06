document.getElementById("msvg").setAttribute("viewBox", "0 0 " + window.innerWidth + " " + window.innerHeight);

var b1 = document.getElementById("1");
var b2 = document.getElementById("2");
var b3 = document.getElementById("3");
var b4 = document.getElementById("4");
var b5 = document.getElementById("5");
var cover = document.getElementById("cover");
var maudio = document.getElementById("maudio"),
    src1 = "2.mp3";
var cover = document.getElementById("cover");
var lantern1 = document.getElementById("_1lantern");
var lantern2 = document.getElementById("_2lantern");
var lantern3 = document.getElementById("_3lantern");
var lantern4 = document.getElementById("_4lantern");
var lantern5 = document.getElementById("_5lantern");
var lantern6 = document.getElementById("_6lantern");
var lantern7 = document.getElementById("_7lantern");
var lantern8 = document.getElementById("_8lantern");
var lantern9 = document.getElementById("_9lantern");
var star1 = document.getElementById("_1star");
var star2 = document.getElementById("_2star");
var newpage = document.getElementById("newpage");
var num = "";

lantern1.addEventListener("click", function () {
    var btn = document.createElement("button");
    btn.style.position = "fixed";
    btn.style.height = "7vh";
    btn.style.width = "8vw";
    btn.style.bottom = "0";
    btn.style.right = "0";
    btn.innerHTML = "Continue";
    document.body.appendChild(btn);
    maudio.src = src1;
    maudio.play();
    
    btn.addEventListener("click", function () {
        var f1 = document.createElement("div");
        f1.style.position = "fixed";
        f1.style.height = "25vh";
        f1.style.width = "25vw";
        f1.style.top = "0";
        f1.style.bottom = "0";
        f1.style.left = "0";
        f1.style.right = "0";
        f1.style.margin = "auto";
        f1.innerHTML = "<img src='./tap2.svg'/>";
        document.body.appendChild(f1);
        
        lantern2.addEventListener("click", function () {
            document.body.removeChild(f1);
            btn.innerHTML = "Click first star";
                
            star1.addEventListener("click", function () {
                var f2 = document.createElement("img");
                f2.style.position = "fixed";
                f2.style.height = "50vh";
                f2.style.width = "35vw";
                f2.style.top = "0";
                f2.style.bottom = "0";
                f2.style.left = "0";
                f2.style.right = "0";
                f2.style.margin = "auto";
                f2.src = "fact1.svg";
                document.body.appendChild(f2);
                
                star2.addEventListener("click", function () {
                    document.body.removeChild(f2);
                    btn.innerHTML = "click background";
                    
                    cover.addEventListener("click", function () {
                        var nsvg = document.createElement("div");
                        nsvg.style.backgroundImage = "url(nbg.svg)";
                        nsvg.style.backgroundSize = "cover";
                        nsvg.style.position = "fixed";
                        nsvg.style.width = "100%";
                        nsvg.style.height = "100%";
                        nsvg.style.top = "0px";
                        nsvg.style.bottom = "0px";
                        nsvg.style.right = "0px";
                        nsvg.style.left = "0px";
                        nsvg.style.margin = "auto";
                        document.body.appendChild(nsvg);
           
                        nsvg.addEventListener("click", function () {
                            var mountain = document.createElement("img");
                            mountain.style.height = "100%";
                            mountain.style.width = "100%";
                            mountain.style.left = "0px";
                            mountain.style.top = "63%";
                            mountain.style.bottom = "0px";
                            mountain.style.right = "0px";
                            mountain.style.margin = "auto";
                            mountain.style.position = "fixed";
                            mountain.src = "mountain.svg";
                            document.body.appendChild(mountain);

       
                            mountain.addEventListener("click", function () {
                                var mond = document.createElement("img");
                                mond.style.height = "60vh";
                                mond.style.width = "60vw";
                                mond.style.position = "fixed";
                                mond.style.left = "0";
                                mond.style.right = "0";
                                mond.style.top = "150px";
                                mond.style.bottom = "0";
                                mond.style.margin = "0 auto";
                                mond.src = "mond.svg";
                                document.body.appendChild(mond);
            
                                mond.addEventListener("click", function () {
                                    var cloud = document.createElement("img");
                                    cloud.src = "clound1.svg";
                                    cloud.style.position = "fixed";
                                    cloud.style.height = "30vh";
                                    cloud.style.width = "30vw";
                                    cloud.style.top = "0";
                                    cloud.style.left = "0";
                                    cloud.style.transition = "left 2s";
                                    document.body.appendChild(cloud);
                                    setTimeout(function () {
                                        cloud.style.left = "1200px";
                                    }, 100);

                            
                                    cloud.addEventListener("click", function () {
                                        var cloud3 = document.createElement("img");
                                        cloud3.src = "clound1.svg";
                                        cloud3.style.position = "fixed";
                                        cloud3.style.height = "50vh";
                                        cloud3.style.width = "50vw";
                                        cloud3.style.top = "0";
                                        cloud3.style.right = "100px";
                                        cloud3.style.transition = "right 2s";
                                        document.body.appendChild(cloud3);
                                        setTimeout(function () {
                                            cloud3.style.right = "1200px";
                                        }, 100);
          
                            
                                        cloud3.addEventListener("click", function () {
                                            var t2 = document.createElement("img");
                                            t2.style.height = "40vh";
                                            t2.style.width = "40vw";
                                            t2.style.position = "fixed";
                                            t2.style.left = "0";
                                            t2.style.right = "0";
                                            t2.style.top = "300px";
                                            t2.style.bottom = "0";
                                            t2.style.margin = "0 auto";
                                            t2.src = "fact3.svg";
                                            document.body.appendChild(t2);
                                            
                                            t2.addEventListener("click", function () {
                                                var nbtn = document.createElement("button");
                                                nbtn.style.position = "fixed";
                                                nbtn.style.height = "7vh";
                                                nbtn.style.width = "8vw";
                                                nbtn.style.bottom = "0";
                                                nbtn.style.right = "0";
                                                nbtn.innerHTML = "Continue";
                                                document.body.appendChild(nbtn);
                                                
                                                nbtn.addEventListener("click", function () {
                                                   window.location = "Third.html";
                                                });
                                            });
                                        });
                                        
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

