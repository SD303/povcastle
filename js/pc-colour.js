// /* Fisher-Yates Shuffle  */
// function shuffle(a) {
//     var i = a.length;
//     while (i > 0) {
//         var j = Math.floor(Math.random() * i);
//         var k = i - 1;
//         var x = a[k];
//         a[k] = a[j];
//         a[j] = x;
//         i = k;
//     }
//     return a;
// }
//
// /* css_fn is substring to match in href */
// function css_get_rules_by_name(css_fn) {
//     var css_rule_code = document.all ? "rules" : "cssRules";
//     for(var n in document.styleSheets) {
//         if(document.styleSheets[n].href.indexOf(css_fn) != -1) {
//             return document.styleSheets[n][css_rule_code];
//         }
//     }
//     throw new Error("css_get_rules_by_name");
// }
//
// function css_set(css_rules, css_selector, css_property, css_value) {
//     for (var n in css_rules) {
//         if(css_rules[n].selectorText == css_selector) {
//             css_rules[n].style[css_property] = css_value;
//             return;
//         }
//     }
//     throw new Error("css_set");
// }
//
// function hash_rgb_inverse(c) {
//     return tinycolor(c).complement().toHexString();
// }
//
// /*original*/
// // function ev_shuffle_colours() {
// //     let r = css_get_rules_by_name("ev-colour");
// //     let c = shuffle(["#f00","#0f0","#00f","#0ff","#f0f","#ff0"]);
// //     css_set(r,".blk_1","background-color",c[0]);
// //     css_set(r,".blk_2","background-color",c[1]);
// //     css_set(r,".blk_3","background-color",c[2]);
// //     css_set(r,".blk_4","background-color",c[3]);
// //     css_set(r,".blk_5","background-color",c[4]);
// //     css_set(r,".blk_6","background-color",c[5]);
// //     css_set(r,".blk_1 .sh_control:hover","color",hash_rgb_inverse(c[0]));
// //     css_set(r,".blk_2 .sh_control:hover","color",hash_rgb_inverse(c[1]));
// //     css_set(r,".blk_3 .sh_control:hover","color",hash_rgb_inverse(c[2]));
// //     css_set(r,".blk_4 .sh_control:hover","color",hash_rgb_inverse(c[3]));
// //     css_set(r,".blk_5 .sh_control:hover","color",hash_rgb_inverse(c[4]));
// //     css_set(r,".blk_6 .sh_control:hover","color",hash_rgb_inverse(c[5]));
//
// function ev_shuffle_colours() {
//     let r = css_get_rules_by_name("ev-colour");
//     let c = shuffle(["black","white"]);
//     css_set(r,".blk_1","background-color",c[0]);
//     css_set(r,".blk_2","background-color",c[1]);
//     css_set(r,".blk_1 .sh_control:hover","color",hash_rgb_inverse(c[0]));
//     css_set(r,".blk_2 .sh_control:hover","color",hash_rgb_inverse(c[1]));
// }
