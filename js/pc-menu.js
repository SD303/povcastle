function ev_menu_jump(o) {
    let k = o.options[o.selectedIndex].value;
    window.location.href = ("?id=" + k); /* ("?p=html/m/" + k + ".html") */
}

window.onload = function (e) {
    console.log("ev-menu: window.onload", e, Date.now());
    //ev_shuffle_colours();
};
