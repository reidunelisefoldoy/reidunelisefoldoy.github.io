var i = document.querySelector("#forsidebilde").clientHeight;

    window.addEventListener("scroll", () => {
        //document.getElementById("forsidebilde").style.marginTop = String(-1 * parseInt(window.scrollY)) + "px";
        document.getElementById("underforsidebilde").style.height = String(i - 1 * parseInt(window.scrollY)) + "px";
    });