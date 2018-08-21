// $(function() {
//     var ac_tags = cmd_ac.sort();
//     var ts = new Date;
//     var ts_e = document.getElementById("ev-shell-ts");
//     ts_e.innerHTML = ts.toISOString();
//     /* complete only at start of term */
//     $("#cmd").autocomplete({
// 	delay: 0,
// 	source: function(req,rsp) {
//             var reg = new RegExp("^" + $.ui.autocomplete.escapeRegex(req.term),"i");
//             rsp($.grep(ac_tags,function(t){return reg.test(t);}));
// 	}
//     });
// });
//
// $(window).keydown(function(e){
//     if(e.which == $.ui.keyCode.TAB) {
//         document.getElementById("cmd").focus();
// 	c_do_autocomplete();
// 	e.preventDefault();
//     }
// });
//
// var h_cnt = 0; /* : int */
// var h_set = {}; /* : map(string,string) */
//
// function h_entry(h,s) {
//     var q = s == "?" ? "help" : s;
//     var t = document.createTextNode("> " + q);
//     var c = document.createElement("div");
//     var r = document.createElement("div");
//     var n = h_cnt.toString();
//     c.setAttribute("class","h_cmd");
//     c.setAttribute("id","h_c_" + n);
//     r.setAttribute("id","h_r_" + n);
//     c.appendChild(t);
//     h.appendChild(c);
//     h.appendChild(r);
//     h_cnt += 1;
//     h_loader("h_r_" + n,q);
// }
//
// function c_reset() {
//     var c = document.getElementById("cmd");
//     c.scrollIntoView();
//     c.focus();
//     c.value = "";
// }
//
// function h_loader(nid,k) {
//     var e = document.getElementById(nid);
//     e.innerHTML = "<div class='shell-load hdr'><strong>|</strong>q=" + k + "</div>";
//     document.title = "EV: " + k;
//     if (h_set[k] == undefined) {
//         var x;
//         if (window.XMLHttpRequest) {
//             x = new XMLHttpRequest();
//         } else {
//             return;
//         }
//         x.onreadystatechange = function() {
//             if (x.readyState == 4 && x.status == 200) {
// 		var ct = x.getResponseHeader("Content-type");
// 		/* console.log("headers:",x.getAllResponseHeaders()); */
//                 if(ct.substr(0,9) == "text/html") {
// 		    h_set[k] = x.responseText;
// 		    /* instead of e.innerHTML, jQuery runs eval, required for audio */
//                     $('#'+nid).html(h_set[k]);
// 		} else {
// 		    $('#'+nid).html("<p>" + ct /*.toUpperCase()*/ + "</p>");
// 		}
// 		c_reset();
//             }
//         }
// 	var g_cmd;
// 	if (k.substr(0,4) == "cat ") {
// 	    var k_ix = k.slice(4).indexOf(' ');
// 	    var k_ty = k.substr(4,k_ix);
// 	    var k_arg = k.slice(4 + k_ix + 1);
// 	    var k_fn = k_arg /*.toLowerCase()*/; /* filenames == lower case */
// 	    if (k_ty == "pdf") {
// 		window.open("ev/" + k_fn,"_blank");
// 	    }
// 	    if (k_ty == "url") {
// 		g_cmd = "./?u=" + k_arg;
// 	    } else {
// 		g_cmd = "./?c=ev/" + k_fn;
// 	    }
// 	} else {
// 	    var k_dot = k.replace(/ /g, '.');
// 	    g_cmd = "./?f=db/md/ev." + k_dot + ".md";
// 	}
// 	console.log ("g_cmd:",g_cmd);
//         x.open("GET",g_cmd,true);
//         x.send();
//     } else {
//         e.innerHTML = h_set[k]; /* multiple MP3... */
// 	c_reset();
//     }
// }
//
// /* is p a prefix of q */
// function str_is_prefix_of(p,q) {return (p == q.substr(0,p.length))}
// function str_is_prefix_of_C(p) {return (function (q) {return str_is_prefix_of(p,q)})};
//
// /* ci = case insensitive */
// function str_is_prefix_of_ci(p,q) {return (p.toUpperCase() == q.substr(0,p.length).toUpperCase())}
// function str_is_prefix_of_ci_C(p) {return (function (q) {return str_is_prefix_of_ci(p,q)})};
//
//
// function cmd_ac_complete(k) {
//     var r = cmd_ac.filter(str_is_prefix_of_ci_C(k))
//     /*console.log("cmd_ac_complete:",r);*/
//     return (r.length > 0 ? r[0] : k /*.toUpperCase()*/); /* upper case on _non_ autocomplete */
// }
//
// function c_do_autocomplete() {
//     var c = document.getElementById("cmd");
//     var t = c.value;
//     var r = cmd_ac.indexOf(t) == -1 ? cmd_ac_complete(t) : t;
//     c.value = r;
//     return r;
// }
//
// function c_run() {
//     var c = document.getElementById("cmd");
//     var h = document.getElementById("history");
//     var t = c_do_autocomplete(); /* c.value.toUpperCase(); */
//     console.log ("h_cmd:",t);
//     if (t == "exit") {
// 	window.location = "?p=html/o.html"; /* http://erkkiveltheim.com/ */
//     } else {
// 	h_entry(h,t);
//     }
// }
//
// function h_cmd(ev) {
//     var k = ev.keyCode;
//     if (k == $.ui.keyCode.ENTER) {
// 	c_run ();
//     };
// }
//
// function rem_nd() {
//     /*var run_sh = $(document).width() > 800;*/
//     var run_sh = navigator.userAgent.search("Mobi") == -1;
//     var rem_id = run_sh ? "noscript" : "shell";
//     var rem_el = document.getElementById(rem_id);
//     console.log ("rem:",run_sh,rem_id);
//     rem_el.parentNode.removeChild(rem_el);
// }
//
// $(function() {rem_nd()})
