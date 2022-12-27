var _self=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},Prism=function(u){var c=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,g=0,b={},s={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof A?new A(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++g}),e.__id},clone:function e(t,n){var a,i;switch(n=n||{},s.util.type(t)){case"Object":if(i=s.util.objId(t),n[i])return n[i];for(var l in n[i]=a={},t)t.hasOwnProperty(l)&&(a[l]=e(t[l],n));return a;case"Array":return i=s.util.objId(t),n[i]?n[i]:(n[i]=a=[],t.forEach(function(h,o){a[o]=e(h,n)}),a);default:return t}},getLanguage:function(e){for(;e;){var t=c.exec(e.className);if(t)return t[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,t){e.className=e.className.replace(RegExp(c,"gi"),""),e.classList.add("language-"+t)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var a="no-"+t;e;){var i=e.classList;if(i.contains(t))return!0;if(i.contains(a))return!1;e=e.parentElement}return!!n}},languages:{plain:b,plaintext:b,text:b,txt:b,extend:function(e,t){var n=s.util.clone(s.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){var i=(a=a||s.languages)[e],l={};for(var h in i)if(i.hasOwnProperty(h)){if(h==t)for(var o in n)n.hasOwnProperty(o)&&(l[o]=n[o]);n.hasOwnProperty(h)||(l[h]=i[h])}var p=a[e];return a[e]=l,s.languages.DFS(s.languages,function(v,O){O===p&&v!=e&&(this[v]=l)}),l},DFS:function e(t,n,a,i){i=i||{};var l=s.util.objId;for(var h in t)if(t.hasOwnProperty(h)){n.call(t,h,t[h],a||h);var o=t[h],p=s.util.type(o);"Object"!==p||i[l(o)]?"Array"===p&&!i[l(o)]&&(i[l(o)]=!0,e(o,n,h,i)):(i[l(o)]=!0,e(o,n,null,i))}}},plugins:{},highlightAll:function(e,t){s.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),s.hooks.run("before-all-elements-highlight",a);for(var l,i=0;l=a.elements[i++];)s.highlightElement(l,!0===t,a.callback)},highlightElement:function(e,t,n){var a=s.util.getLanguage(e),i=s.languages[a];s.util.setLanguage(e,a);var l=e.parentElement;l&&"pre"===l.nodeName.toLowerCase()&&s.util.setLanguage(l,a);var o={element:e,language:a,grammar:i,code:e.textContent};function p(O){o.highlightedCode=O,s.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,s.hooks.run("after-highlight",o),s.hooks.run("complete",o),n&&n.call(o.element)}if(s.hooks.run("before-sanity-check",o),(l=o.element.parentElement)&&"pre"===l.nodeName.toLowerCase()&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!o.code)return s.hooks.run("complete",o),void(n&&n.call(o.element));if(s.hooks.run("before-highlight",o),o.grammar)if(t&&u.Worker){var v=new Worker(s.filename);v.onmessage=function(O){p(O.data)},v.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else p(s.highlight(o.code,o.grammar,o.language));else p(s.util.encode(o.code))},highlight:function(e,t,n){var a={code:e,grammar:t,language:n};if(s.hooks.run("before-tokenize",a),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=s.tokenize(a.code,a.grammar),s.hooks.run("after-tokenize",a),A.stringify(s.util.encode(a.tokens),a.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var a in n)t[a]=n[a];delete t.rest}var i=new y;return N(i,i.head,e),L(e,i,t,i.head,0),function D(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}(i)},hooks:{all:{},add:function(e,t){var n=s.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=s.hooks.all[e];if(n&&n.length)for(var i,a=0;i=n[a++];)i(t)}},Token:A};function A(e,t,n,a){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length}function R(e,t,n,a){e.lastIndex=t;var i=e.exec(n);if(i&&a&&i[1]){var l=i[1].length;i.index+=l,i[0]=i[0].slice(l)}return i}function L(e,t,n,a,i,l){for(var h in n)if(n.hasOwnProperty(h)&&n[h]){var o=n[h];o=Array.isArray(o)?o:[o];for(var p=0;p<o.length;++p){if(l&&l.cause==h+","+p)return;var v=o[p],O=v.inside,U=!!v.lookbehind,M=!!v.greedy,B=v.alias;if(M&&!v.pattern.global){var k=v.pattern.toString().match(/[imsuy]*$/)[0];v.pattern=RegExp(v.pattern.source,k+"g")}for(var P=v.pattern||v,E=a.next,m=i;E!==t.tail&&!(l&&m>=l.reach);m+=E.value.length,E=E.next){var T=E.value;if(t.length>e.length)return;if(!(T instanceof A)){var I,C=1;if(M){if(!(I=R(P,m,e,U))||I.index>=e.length)break;var x=I.index,$=I.index+I[0].length,S=m;for(S+=E.value.length;x>=S;)S+=(E=E.next).value.length;if(m=S-=E.value.length,E.value instanceof A)continue;for(var F=E;F!==t.tail&&(S<$||"string"==typeof F.value);F=F.next)C++,S+=F.value.length;C--,T=e.slice(m,S),I.index-=m}else if(!(I=R(P,0,T,U)))continue;var H=I[0],G=T.slice(0,x=I.index),W=T.slice(x+H.length),z=m+T.length;l&&z>l.reach&&(l.reach=z);var _=E.prev;if(G&&(_=N(t,_,G),m+=G.length),w(t,_,C),E=N(t,_,new A(h,O?s.tokenize(H,O):H,B,H)),W&&N(t,E,W),C>1){var Y={cause:h+","+p,reach:z};L(e,t,n,E.prev,m,Y),l&&Y.reach>l.reach&&(l.reach=Y.reach)}}}}}}function y(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function N(e,t,n){var a=t.next,i={value:n,prev:t,next:a};return t.next=i,a.prev=i,e.length++,i}function w(e,t,n){for(var a=t.next,i=0;i<n&&a!==e.tail;i++)a=a.next;t.next=a,a.prev=t,e.length-=i}if(u.Prism=s,A.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var a="";return t.forEach(function(p){a+=e(p,n)}),a}var i={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},l=t.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(i.classes,l):i.classes.push(l)),s.hooks.run("wrap",i);var h="";for(var o in i.attributes)h+=" "+o+'="'+(i.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+h+">"+i.content+"</"+i.tag+">"},!u.document)return u.addEventListener&&(s.disableWorkerMessageHandler||u.addEventListener("message",function(e){var t=JSON.parse(e.data),n=t.language,i=t.immediateClose;u.postMessage(s.highlight(t.code,s.languages[n],n)),i&&u.close()},!1)),s;var d=s.util.currentScript();function r(){s.manual||s.highlightAll()}if(d&&(s.filename=d.src,d.hasAttribute("data-manual")&&(s.manual=!0)),!s.manual){var f=document.readyState;"loading"===f||"interactive"===f&&d&&d.defer?document.addEventListener("DOMContentLoaded",r):window.requestAnimationFrame?window.requestAnimationFrame(r):window.setTimeout(r,16)}return s}(_self);typeof module<"u"&&module.exports&&(module.exports=Prism),typeof global<"u"&&(global.Prism=Prism),Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(u){"entity"===u.type&&(u.attributes.title=u.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(c,g){var b={};b["language-"+g]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[g]},b.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:b}};s["language-"+g]={pattern:/[\s\S]+/,inside:Prism.languages[g]};var A={};A[c]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return c}),"i"),lookbehind:!0,greedy:!0,inside:s},Prism.languages.insertBefore("markup","cdata",A)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(u,c){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+u+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[c,"language-"+c],inside:Prism.languages[c]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml,function(u){var c=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;u.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+c.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+c.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+c.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+c.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:c,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},u.languages.css.atrule.inside.rest=u.languages.css;var g=u.languages.markup;g&&(g.tag.addInlined("style","css"),g.tag.addAttribute("style","css"))}(Prism),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),Prism.languages.js=Prism.languages.javascript,function(){if(!(typeof Prism>"u"||typeof document>"u")){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var b={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",A="loading",R="loaded",y="pre[data-src]:not(["+s+'="'+R+'"]):not(['+s+'="'+A+'"])';Prism.hooks.add("before-highlightall",function(d){d.selector+=", "+y}),Prism.hooks.add("before-sanity-check",function(d){var r=d.element;if(r.matches(y)){d.code="",r.setAttribute(s,A);var f=r.appendChild(document.createElement("CODE"));f.textContent="Loading\u2026";var e=r.getAttribute("data-src"),t=d.language;if("none"===t){var n=(/\.(\w+)$/.exec(e)||[,"none"])[1];t=b[n]||n}Prism.util.setLanguage(f,t),Prism.util.setLanguage(r,t);var a=Prism.plugins.autoloader;a&&a.loadLanguages(t),function N(d,r,f){var e=new XMLHttpRequest;e.open("GET",d,!0),e.onreadystatechange=function(){4==e.readyState&&(e.status<400&&e.responseText?r(e.responseText):f(e.status>=400?function(d,r){return"\u2716 Error "+d+" while fetching file: "+r}(e.status,e.statusText):"\u2716 Error: File does not exist or is empty"))},e.send(null)}(e,function(i){r.setAttribute(s,R);var l=function w(d){var r=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(d||"");if(r){var f=Number(r[1]),t=r[3];return r[2]?t?[f,Number(t)]:[f,void 0]:[f,f]}}(r.getAttribute("data-range"));if(l){var h=i.split(/\r\n?|\n/g),o=l[0],p=null==l[1]?h.length:l[1];o<0&&(o+=h.length),o=Math.max(0,Math.min(o-1,h.length)),p<0&&(p+=h.length),p=Math.max(0,Math.min(p,h.length)),i=h.slice(o,p).join("\n"),r.hasAttribute("data-start")||r.setAttribute("data-start",String(o+1))}f.textContent=i,Prism.highlightElement(f)},function(i){r.setAttribute(s,"failed"),f.textContent=i})}}),Prism.plugins.fileHighlight={highlight:function(r){for(var t,f=(r||document).querySelectorAll(y),e=0;t=f[e++];)Prism.highlightElement(t)}};var D=!1;Prism.fileHighlight=function(){D||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),D=!0),Prism.plugins.fileHighlight.highlight.apply(this,arguments)}}}(),function(u){var c=/%%?[~:\w]+%?|!\S+!/,g={pattern:/\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,alias:"attr-name",inside:{punctuation:/:/}},b=/"(?:[\\"]"|[^"])*"(?!")/,s=/(?:\b|-)\d+\b/;Prism.languages.batch={comment:[/^::.*/m,{pattern:/((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0}],label:{pattern:/^:.*/m,alias:"property"},command:[{pattern:/((?:^|[&(])[ \t]*)for(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* \S+ in \([^)]+\) do/im,lookbehind:!0,inside:{keyword:/\b(?:do|in)\b|^for\b/i,string:b,parameter:g,variable:c,number:s,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*)if(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|(?!")(?:(?!==)\S)+)?(?:==| (?:equ|geq|gtr|leq|lss|neq) )(?:"[^"]*"|[^\s"]\S*))/im,lookbehind:!0,inside:{keyword:/\b(?:cmdextversion|defined|errorlevel|exist|not)\b|^if\b/i,string:b,parameter:g,variable:c,number:s,operator:/\^|==|\b(?:equ|geq|gtr|leq|lss|neq)\b/i}},{pattern:/((?:^|[&()])[ \t]*)else\b/im,lookbehind:!0,inside:{keyword:/^else\b/i}},{pattern:/((?:^|[&(])[ \t]*)set(?: \/[a-z](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0,inside:{keyword:/^set\b/i,string:b,parameter:g,variable:[c,/\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],number:s,operator:/[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*@?)\w+\b(?:"(?:[\\"]"|[^"])*"(?!")|[^"^&)\r\n]|\^(?:\r\n|[\s\S]))*/m,lookbehind:!0,inside:{keyword:/^\w+\b/,string:b,parameter:g,label:{pattern:/(^\s*):\S+/m,lookbehind:!0,alias:"property"},variable:c,number:s,operator:/\^/}}],operator:/[&@]/,punctuation:/[()']/}}(),function(u){function c(S,F){return S.replace(/<<(\d+)>>/g,function(x,H){return"(?:"+F[+H]+")"})}function g(S,F,x){return RegExp(c(S,F),x||"")}function b(S,F){for(var x=0;x<F;x++)S=S.replace(/<<self>>/g,function(){return"(?:"+S+")"});return S.replace(/<<self>>/g,"[^\\s\\S]")}var s="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",A="class enum interface record struct",R="add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",L="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function y(S){return"\\b(?:"+S.trim().replace(/ /g,"|")+")\\b"}var N=y(A),w=RegExp(y(s+" "+A+" "+R+" "+L)),D=y(A+" "+R+" "+L),d=y(s+" "+A+" "+L),r=b("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>",2),f=b("\\((?:[^()]|<<self>>)*\\)",2),e="@?\\b[A-Za-z_]\\w*\\b",t=c("<<0>>(?:\\s*<<1>>)?",[e,r]),n=c("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*",[D,t]),a="\\[\\s*(?:,\\s*)*\\]",i=c("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?",[n,a]),l=c("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>",[r,f,a]),h=c("\\(<<0>>+(?:,<<0>>+)+\\)",[l]),o=c("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?",[h,n,a]),p={keyword:w,punctuation:/[<>()?,.:[\]]/},v="'(?:[^\r\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'",O='"(?:\\\\.|[^\\\\"\r\n])*"';u.languages.csharp=u.languages.extend("clike",{string:[{pattern:g("(^|[^$\\\\])<<0>>",['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']),lookbehind:!0,greedy:!0},{pattern:g("(^|[^@$\\\\])<<0>>",[O]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:g("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)",[n]),lookbehind:!0,inside:p},{pattern:g("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)",[e,o]),lookbehind:!0,inside:p},{pattern:g("(\\busing\\s+)<<0>>(?=\\s*=)",[e]),lookbehind:!0},{pattern:g("(\\b<<0>>\\s+)<<1>>",[N,t]),lookbehind:!0,inside:p},{pattern:g("(\\bcatch\\s*\\(\\s*)<<0>>",[n]),lookbehind:!0,inside:p},{pattern:g("(\\bwhere\\s+)<<0>>",[e]),lookbehind:!0},{pattern:g("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>",[i]),lookbehind:!0,inside:p},{pattern:g("\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))",[o,d,e]),inside:p}],keyword:w,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),u.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),u.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:g("([(,]\\s*)<<0>>(?=\\s*:)",[e]),lookbehind:!0,alias:"punctuation"}}),u.languages.insertBefore("csharp","class-name",{namespace:{pattern:g("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])",[e]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:g("(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))",[f]),lookbehind:!0,alias:"class-name",inside:p},"return-type":{pattern:g("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))",[o,n]),inside:p,alias:"class-name"},"constructor-invocation":{pattern:g("(\\bnew\\s+)<<0>>(?=\\s*[[({])",[o]),lookbehind:!0,inside:p,alias:"class-name"},"generic-method":{pattern:g("<<0>>\\s*<<1>>(?=\\s*\\()",[e,r]),inside:{function:g("^<<0>>",[e]),generic:{pattern:RegExp(r),alias:"class-name",inside:p}}},"type-list":{pattern:g("\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))",[N,t,e,o,w.source,f,"\\bnew\\s*\\(\\s*\\)"]),lookbehind:!0,inside:{"record-arguments":{pattern:g("(^(?!new\\s*\\()<<0>>\\s*)<<1>>",[t,f]),lookbehind:!0,greedy:!0,inside:u.languages.csharp},keyword:w,"class-name":{pattern:RegExp(o),greedy:!0,inside:p},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var U=O+"|"+v,M=c("/(?![*/])|//[^\r\n]*[\r\n]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>",[U]),B=b(c("[^\"'/()]|<<0>>|\\(<<self>>*\\)",[M]),2),k="\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",P=c("<<0>>(?:\\s*\\(<<1>>*\\))?",[n,B]);u.languages.insertBefore("csharp","class-name",{attribute:{pattern:g("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])",[k,P]),lookbehind:!0,greedy:!0,inside:{target:{pattern:g("^<<0>>(?=\\s*:)",[k]),alias:"keyword"},"attribute-arguments":{pattern:g("\\(<<0>>*\\)",[B]),inside:u.languages.csharp},"class-name":{pattern:RegExp(n),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var E=":[^}\r\n]+",m=b(c("[^\"'/()]|<<0>>|\\(<<self>>*\\)",[M]),2),T=c("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[m,E]),C=b(c("[^\"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)",[U]),2),I=c("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[C,E]);function $(S,F){return{interpolation:{pattern:g("((?:^|[^{])(?:\\{\\{)*)<<0>>",[S]),lookbehind:!0,inside:{"format-string":{pattern:g("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)",[F,E]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:u.languages.csharp}}},string:/[\s\S]+/}}u.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:g('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"',[T]),lookbehind:!0,greedy:!0,inside:$(T,m)},{pattern:g('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"',[I]),lookbehind:!0,greedy:!0,inside:$(I,C)}],char:{pattern:RegExp(v),greedy:!0}}),u.languages.dotnet=u.languages.cs=u.languages.csharp}(Prism),function(u){var c=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;u.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|"+c.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+c.source+"|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+c.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+c.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:c,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},u.languages.css.atrule.inside.rest=u.languages.css;var g=u.languages.markup;g&&(g.tag.addInlined("style","css"),g.tag.addAttribute("style","css"))}(Prism),function(u){var c="(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)".replace(/<SP_BS>/g,function(){return"\\\\[\r\n](?:\\s|\\\\[\r\n]|#.*(?!.))*(?![\\s#]|\\\\[\r\n])"}),g="\"(?:[^\"\\\\\r\n]|\\\\(?:\r\n|[^]))*\"|'(?:[^'\\\\\r\n]|\\\\(?:\r\n|[^]))*'",b="--[\\w-]+=(?:<STR>|(?![\"'])(?:[^\\s\\\\]|\\\\.)+)".replace(/<STR>/g,function(){return g}),s={pattern:RegExp(g),greedy:!0},A={pattern:/(^[ \t]*)#.*/m,lookbehind:!0,greedy:!0};function R(L,y){return L=L.replace(/<OPT>/g,function(){return b}).replace(/<SP>/g,function(){return c}),RegExp(L,y)}u.languages.docker={instruction:{pattern:/(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,lookbehind:!0,greedy:!0,inside:{options:{pattern:R("(^(?:ONBUILD<SP>)?\\w+<SP>)<OPT>(?:<SP><OPT>)*","i"),lookbehind:!0,greedy:!0,inside:{property:{pattern:/(^|\s)--[\w-]+/,lookbehind:!0},string:[s,{pattern:/(=)(?!["'])(?:[^\s\\]|\\.)+/,lookbehind:!0}],operator:/\\$/m,punctuation:/=/}},keyword:[{pattern:R("(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\\b","i"),lookbehind:!0,greedy:!0},{pattern:R("(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\\\]+<SP>)AS","i"),lookbehind:!0,greedy:!0},{pattern:R("(^ONBUILD<SP>)\\w+","i"),lookbehind:!0,greedy:!0},{pattern:/^\w+/,greedy:!0}],comment:A,string:s,variable:/\$(?:\w+|\{[^{}"'\\]*\})/,operator:/\\$/m}},comment:A},u.languages.dockerfile=u.languages.docker}(Prism),Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},function(){if(!(typeof Prism>"u"||typeof document>"u")&&document.querySelector){var d,u="line-numbers",c="linkable-line-numbers",g=/\n(?!$)/g,N=!0;Prism.plugins.lineHighlight={highlightLines:function(r,f,e){var t=(f="string"==typeof f?f:r.getAttribute("data-line")||"").replace(/\s+/g,"").split(",").filter(Boolean),n=+r.getAttribute("data-line-offset")||0,i=(function(){if(typeof d>"u"){var r=document.createElement("div");r.style.fontSize="13px",r.style.lineHeight="1.5",r.style.padding="0",r.style.border="0",r.innerHTML="&nbsp;<br />&nbsp;",document.body.appendChild(r),d=38===r.offsetHeight,document.body.removeChild(r)}return d}()?parseInt:parseFloat)(getComputedStyle(r).lineHeight),l=Prism.util.isActive(r,u),h=r.querySelector("code"),o=l?r:h||r,p=[],v=h.textContent.match(g),O=v?v.length+1:1,U=h&&o!=h?function L(d,r){var f=getComputedStyle(d),e=getComputedStyle(r);function t(n){return+n.substr(0,n.length-2)}return r.offsetTop+t(e.borderTopWidth)+t(e.paddingTop)-t(f.paddingTop)}(r,h):0;t.forEach(function(k){var P=k.split("-"),E=+P[0],m=+P[1]||E;if(!((m=Math.min(O+n,m))<E)){var T=r.querySelector('.line-highlight[data-range="'+k+'"]')||document.createElement("div");if(p.push(function(){T.setAttribute("aria-hidden","true"),T.setAttribute("data-range",k),T.className=(e||"")+" line-highlight"}),l&&Prism.plugins.lineNumbers){var C=Prism.plugins.lineNumbers.getLine(r,E),I=Prism.plugins.lineNumbers.getLine(r,m);if(C){var $=C.offsetTop+U+"px";p.push(function(){T.style.top=$})}if(I){var S=I.offsetTop-C.offsetTop+I.offsetHeight+"px";p.push(function(){T.style.height=S})}}else p.push(function(){T.setAttribute("data-start",String(E)),m>E&&T.setAttribute("data-end",String(m)),T.style.top=(E-n-1)*i+U+"px",T.textContent=new Array(m-E+2).join(" \n")});p.push(function(){T.style.width=r.scrollWidth+"px"}),p.push(function(){o.appendChild(T)})}});var M=r.id;if(l&&Prism.util.isActive(r,c)&&M){s(r,c)||p.push(function(){r.classList.add(c)});var B=parseInt(r.getAttribute("data-start")||"1");b(".line-numbers-rows > span",r).forEach(function(k,P){var E=P+B;k.onclick=function(){N=!1,location.hash=M+"."+E,setTimeout(function(){N=!0},1)}})}return function(){p.forEach(A)}}};var D=0;Prism.hooks.add("before-sanity-check",function(d){var r=d.element.parentElement;if(y(r)){var f=0;b(".line-highlight",r).forEach(function(e){f+=e.textContent.length,e.parentNode.removeChild(e)}),f&&/^(?: \n)+$/.test(d.code.slice(-f))&&(d.code=d.code.slice(0,-f))}}),Prism.hooks.add("complete",function d(r){var f=r.element.parentElement;if(y(f)){clearTimeout(D);var e=Prism.plugins.lineNumbers,t=r.plugins&&r.plugins.lineNumbers;s(f,u)&&e&&!t?Prism.hooks.add("line-numbers",d):(Prism.plugins.lineHighlight.highlightLines(f)(),D=setTimeout(w,1))}}),window.addEventListener("hashchange",w),window.addEventListener("resize",function(){b("pre").filter(y).map(function(r){return Prism.plugins.lineHighlight.highlightLines(r)}).forEach(A)})}function b(d,r){return Array.prototype.slice.call((r||document).querySelectorAll(d))}function s(d,r){return d.classList.contains(r)}function A(d){d()}function y(d){return!(!d||!/pre/i.test(d.nodeName)||!(d.hasAttribute("data-line")||d.id&&Prism.util.isActive(d,c)))}function w(){var d=location.hash.slice(1);b(".temporary.line-highlight").forEach(function(n){n.parentNode.removeChild(n)});var r=(d.match(/\.([\d,-]+)$/)||[,""])[1];if(r&&!document.getElementById(d)){var f=d.slice(0,d.lastIndexOf(".")),e=document.getElementById(f);e&&(e.hasAttribute("data-line")||e.setAttribute("data-line",""),Prism.plugins.lineHighlight.highlightLines(e,r,"temporary ")(),N&&document.querySelector(".temporary.line-highlight").scrollIntoView())}}}();