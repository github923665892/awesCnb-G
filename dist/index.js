!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=27)}({0:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.load=function(e){var t=a.repositories.package,n="".concat(t,"/").concat(e,".js");$.getScript(n)},t.hasPostTitle=t.userAgent=t.pageName=t.getRandomNum=t.getClientRect=t.getRandomColor=t.getRandomProperty=t.throttle=t.debounce=void 0;var a=n(11);t.debounce=function(e,t,n){var a;return function(){var o=this,r=arguments,i=function(){a=null,n||e.apply(o,r)},l=n&&!a;clearTimeout(a),a=setTimeout(i,t),l&&e.apply(o,r)}};t.throttle=function(e,t,n){var a,o=new Date;return function(){var r=this,i=arguments,l=new Date;clearTimeout(a),l-o>=n?(e.apply(r,i),o=l):a=setTimeout(e,t)}};t.getRandomProperty=function(e){var t,n=0;for(var a in e)Math.random()<1/++n&&(t=a);return t};t.getRandomColor=function(e){var t="";if("rgba"===e){var n=Math.floor(256*Math.random()),a=Math.floor(256*Math.random()),o=Math.floor(256*Math.random());t="rgba(".concat(n,",").concat(a,",").concat(o,",").concat(.6,")")}else if("16"===e)t="#"+Math.floor(16777215*Math.random()).toString(16);else{var r=e||["#FE0302","#FF7204","#FFAA02","#FFD302","#FFFF00","#A0EE00","#00CD00","#019899","#4266BE","#89D5FF","#CC0273","#CC0273"];t=r[Math.floor(Math.random()*r.length)]}return t};t.getClientRect=function(e){var t=e.getBoundingClientRect(),n=t.top,a=t.bottom,o=t.left,r=t.right;return{top:n,bottom:a,left:o,right:r,height:t.height||a-n,width:t.width||r-o}};t.getRandomNum=function(e,t){return parseInt(Math.random()*(e-t+1)+t,10),Math.floor(Math.random()*(e-t+1)+t)};t.hasPostTitle=function(){return 0!==$("#cnblogs_post_body>h1,#cnblogs_post_body>h2,#cnblogs_post_body>h3,#cnblogs_post_body>h4").length};t.pageName=function(){return $("#post_detail").length>0?"post":$(".day").length>0?"index":$("#taglist_main").length>0?"tag":$(".entrylistPosttitle").length>0?"list":$("#myposts").length>0?"tag":void 0};t.userAgent=function(){return $(window).width()>768?"pc":"phone"}},11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.repositories=t.CDN=void 0;t.CDN={live2d:{url:"https://cdn.jsdelivr.net/gh/github923665892/awesCnb-live2dModels",version:"1.7"}};t.repositories={package:"https://guangzan.gitee.io/awescnb",gitee:"https://gitee.com/guangzan/awescnb",github:"https://github.com/github923665892"}},27:function(e,t,n){"use strict";(0,n(0)(n(28)).default)()},28:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(1),r=a(n(5));var i=function(){$.extend({awesCnb:function(e){e&&$.extend(!0,r.default,e),window.opts=r.default,function(){var e=window.opts.theme.name;console.log("正在使用的主题:",e),("acg"===e||"light"===e)&&(e="reacg");(0,o.load)(e)}()}})};t.default=i},5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={theme:{name:"reacg",color:"#FFB3CC",qrcode:"",title:"awescnb2.0",favicon:"https://guangzan.gitee.io/awescnb/assets/images/favicon.png",avatar:"//pic.cnblogs.com/avatar/1501373/20200119190802.png",headerBackground:"https://guangzan.gitee.io/awescnb/assets/images/acg/22.jpg"},emoji:{enable:!0},highLight:{type:"atomOneDark"},charts:{enable:!1},imagebox:{enable:!0},lineNumbers:{enable:!0},catalog:{enable:!0,position:"left"},back2top:{enable:!0,type:"complex"},bodyBackground:{enable:!1,type:"color",value:"#FDE6E0",opacity:1,repeat:!1},barrage:{enable:!1,opacity:.6,colors:["#FE0302","#FF7204","#FFAA02","#FFD302","#FFFF00","#A0EE00","#00CD00","#019899","#4266BE","#89D5FF","#CC0273","#CC0273"],barrages:[],indexBarrages:[],postPageBarrages:[]},live2d:{enable:!0,page:"all",agent:"pc",model:"haru-01",width:150,height:200,position:"right"},github:{enable:!0,color:"#ffb3cc",url:"https://gitee.com/guangzan/awescnb"},click:{enable:!0,page:"all",agent:"pc",auto:!1,colors:["#FF1461","#18FF92","#5A87FF","#FBF38C"]},musicPlayer:{enable:!0,page:"all",agent:"pc",autoplay:!1,audio:[{name:"イニシャル",artist:"Poppin'Party",url:"https://guangzan.gitee.io/imagehost/awescnb/music/demo1.mp3",cover:"//p2.music.126.net/ww7gcJ_erzPa8jgZesmTOA==/109951163271403502.jpg?param=90y90"}]},topProgress:{enable:!0,page:"all",agent:"pc",background:"#FFB3CC",height:"5px"},postSignature:{enable:!0,content:["<p>版权声明：本博客所有文章除特别声明外均为原创，采用 <a href=''>CC BY-NC-SA 4.0</a> 许可协议。转载请在文章开头明显位置注明原文链接和作者等相关信息，明确指出修改（如有），并通过 E-mail 等方式告知，谢谢合作！</p>"]},links:[{name:"awesCnb",link:"https://gitee.com/guangzan/awescnb"}]};t.default=a}});