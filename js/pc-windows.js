// function ev_loader(div_id,html_fn) {
//     var x = new XMLHttpRequest();
//     var e = document.getElementById(div_id);
//     e.innerHTML = "<div class=\"ev-loader hdr\">EV_LOADER=" + html_fn + "</div>";
//     x.onreadystatechange = function() {
//         if (x.readyState == 4 && x.status == 200) {
//             e.innerHTML = x.responseText;
//         }
//     }
//     console.log("ev_loader:",div_id,html_fn);
//     x.open("GET","?f=" + html_fn,true);
//     x.send();
// }
//
// function ev_mk_window(w_key,w_name,html_fn) {
//     if(document.getElementById(w_key) == null) {
//         var t_key = "t_" + w_key;
//         var c_key = "c_" + w_key;
//         var d = document.createElement("div");
//         var t = document.createElement("div");
//         var c = document.createElement("div");
//         d.setAttribute("id",w_key);
//         d.setAttribute("class","ev-window");
//         t.setAttribute("id",t_key);
//         t.setAttribute("class","ev-title");
//         t.appendChild(document.createTextNode(w_name));
//         c.setAttribute("id",c_key);
//         c.setAttribute("class","ev-content");
//         d.appendChild(t);
//         d.appendChild(c);
//         document.body.appendChild(d);
//         jQuery('#' + w_key).draggable({handle:'#' + t_key}).resizable({});
//         ev_loader(c_key,html_fn);
//     }
// }
