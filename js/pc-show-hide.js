function show_hide(url,ln,id,md) {
    var e = document.getElementById(id);
    if (e.style.display == md) {
        e.style.display = 'none';
        e.style.visibility = 'hidden';
        ln.style.textDecoration = "";
        ev_shuffle_colours();
        if(url) {
            window.history.pushState(null,document.title,document.location.pathname);
        }
    } else {
        e.style.display = md;
        e.style.visibility = 'visible';
        e.style.opacity = '1';
        e.style.animation = 'fade 0.65s';
        ln.style.textDecoration = "line-through";
        if(url) {
            window.history.pushState(null,document.title,url);
        }
    }
}
