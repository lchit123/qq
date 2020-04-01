/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);/**
 * @Checkbox.js
 * @author xunxuzhang
 * @version
 * Created: 15-06-18
 */
(function() {
	var CHECKED = 'checked';
	
	/**
     * jQuery模式下的扩展方法，
	 * 只针对IE8-浏览器进行处理
	 * 根据当前单复选框的选中态toggle类名checked
	 * @example
	 *  $('[type=radio]').propMatch();
     */
	
	$.fn.propMatch = function() {
		if (!window.addEventListener) {
			var _match = function(element) {
				element = $(element);
				if (element.prop(CHECKED)) {
					element.attr(CHECKED, CHECKED);
				} else {
					element.removeAttr(CHECKED);
				}
				// 触发重绘，使相邻选择器渲染
				element.parent().addClass('z').toggleClass('i_i');
			};
			
			if ($(this).length == 1 && $(this).attr('type') == 'radio') {
				// 单选框含有组的概念
				// 也就是a选中的时候，b则变成非选中态					
				// 因此，类名切换不能只关注当前元素
				var name = $(this).attr('name');
				$('input[type=radio][name='+ name +']').each(function() {
					_match(this);	
				});
			} else {
				$(this).each(function() {
					_match(this);
				});
			}
			
			
			return $(this);
		}
	};

	if (!window.addEventListener && !window.initedCheckbox) {
		var selector = 'input[type=checkbox]';
		
		$(document.body).delegate(selector, 'click', function() {
			$(this).propMatch();
		});
		
		// 首次页面载入，对页面所有复选框（根据是否选中态）进行初始化				
		$(selector).propMatch();
		
		// 防止多次初始化
		window.initedCheckbox = true;
	}
	
    if (!window.addEventListener && !window.initedRadio) {
		// 压缩的时候少36字节
		var selector = 'input[type=radio]';
		// 全局委托
		$(document.body).delegate(selector, 'click', function() {
			$(this).propMatch();
		});
		
		// 首次页面载入，对页面所有单选框（根据是否选中态）进行初始化				
		$(selector).propMatch();
		
		// 防止多次初始化
		window.initedRadio = true;								
	}
})();
$.fn.selectMatch = function(options) {
	// 常量变量
	var SELECT = 'select', SELECTED = 'selected', DISABLED = 'disabled',  ACTIVE = 'active', REVERSE = 'reverse';

	// 默认参数
	var defaults = {
		prefix: 'ui-',    // 一些UI样式类名的前缀
		trigger: ['change']     // 触发原始下拉框的事件，默认只触发change事件
	};
	// 参数合并
	var params = $.extend({}, defaults, options || {});
	
	// 通用前缀
	var PREFIX = params.prefix + SELECT, joiner = params.prefix.replace(/[a-z]/gi, '');
	
	// 根据下拉框获得相关数据的私有方法
	var _get = function(el) {
		var selectedIndex = 0, htmlOptions = '';
		
		// 遍历下拉框的options选项
		el.find('option').each(function(index) {
			var arrCl = [PREFIX + joiner + 'datalist'+ joiner +'li', this.className];
			
			if (this[SELECTED]) {
				selectedIndex = index;
				arrCl.push(SELECTED); 
			}
			if (this[DISABLED]) {
				arrCl.push(DISABLED); 
			}
			
			htmlOptions = htmlOptions + '<li class="'+ arrCl.join(' ') +'" data-index='+ index +'>'+ this.innerHTML +'</li>';
		});
		
		return {
			index: selectedIndex,
			html: htmlOptions
		}
	}

	return $(this).each(function(index, element) {
        var sel = $(this).hide().data(SELECT);
		if (!sel) {
			// 如果没有关联的模拟下拉元素生成
			// 创建新的模拟下拉元素
			sel = $('<div></div>').on('click', 'a', function() {
				if ($(element).prop(DISABLED)) return false;
				// 显示与隐藏
				sel.toggleClass(ACTIVE);
				// 边界判断
				if (sel.hasClass(ACTIVE)) {
					var ul = sel.find('ul'), 
					overflow = ul.offset().top + ul.outerHeight() > Math.max($(document.body).height(), $(window).height());
					sel[overflow? 'addClass': 'removeClass'](REVERSE);

					// 滚动与定位
					var arrData = sel.data('scrollTop'), selected = ul.find('.' + SELECTED);
					// 严格验证
					if (arrData && arrData[1] == selected.attr('data-index') && arrData[2] == selected.text()) {
						ul.scrollTop(arrData[0]);
						// 重置
						sel.removeData('scrollTop');
					}						
				} else {
					sel.removeClass(REVERSE);
				}
			}).on('click', 'li', function(event, istrigger) {
				var indexOption = $(this).attr('data-index'),
					scrollTop = $(this).parent().scrollTop();	
				// 下拉收起
				sel.removeClass(ACTIVE);
				// 存储可能的滚动定位需要的数据
				sel.data('scrollTop', [scrollTop, indexOption, $(this).text()]);
				// 修改下拉选中项
				$(element).find('option').eq(indexOption).get(0)[SELECTED] = true;
				// 更新下拉框
				$(element).selectMatch(params);
				// 回调处理
                $.each(params.trigger, function(i, eventType) {
					$(element).trigger(eventType, [istrigger]);	
				});
			});
			// 存储对象
			$(this).data(SELECT, sel);
			// 载入元素
			$(this).after(sel);
			
			// 点击页面空白要隐藏
			$(document).mouseup(function(event) {
				var target = event.target;
				if (target && sel.hasClass(ACTIVE) && sel.get(0) !== target && sel.get(0).contains(target) == false) {
					sel.removeClass(ACTIVE).removeClass(REVERSE);
				}
			});
		}
		
		// 根据当前下拉元素，重新刷新
		// 0. 获得我们需要的一些数据
		var data = _get($(this)), option = $(this).find('option').eq(data.index);
		// 1. 与select元素匹配的类名, 以及宽度
		sel.attr('class', element.className + ' ' + PREFIX).width($(this).outerWidth());
		// 2. 全新的按钮元素
        var areaNo = option.html().split(' ')[0];
        var button = '<a href="javascript:" class="'+ PREFIX + joiner + 'button">'+
            '<span class="'+ PREFIX + joiner + 'text">' + areaNo + '</span>'+
            '<i class="'+ PREFIX + joiner + 'icon"></i></a>';
		// 3. 全新的列表
		var datalist = '<ul class="'+ PREFIX + joiner + 'datalist">'+ data.html +'</ul>';
		
		// 4. 刷新
		sel.html(button + datalist);
    });
};

$('select').selectMatch();try {
    var Statistics = {
        uuid  : '',
        popup : '',
        params: {
            ctime       : '', //日志生成时间
            sid         : '', //当前会话id
            uuid         : '', //浏览器唯一用户标识
            guid        : '', //统一用户id
            ip          : '',
            sh          : '',
            sw          : '',
            ua          : '',
            appid       : '',
            areaid      : '',
            title       : '',
            url         : '',
            ref         : '',
            path        : 'typclog',
            cname       : 'TYlogin',
            event_type  : 'P',
            eid         : '',
            e1          : '',
            e2          : '',
            pid         : '',
            x           : '',
            y           : ''
        },
        eventIds: {
            alipay      : {eid:'ty_A05',pid:'ty_P_landlogin'},
            sina        : {eid:'ty_A25',pid:'ty_P_landlogin'},
            baidu       : {eid:'ty_A15',pid:'ty_P_landlogin'},
            jumpaq      : {eid:'ty_A35',pid:'ty_P_landlogin'}
        },
        eventIdsPopup: {
            alipay      : {eid:'ty_A04',pid:'ty_P_login'},
            sina        : {eid:'ty_A24',pid:'ty_P_login'},
            baidu       : {eid:'ty_A14',pid:'ty_P_login'},
            jumpaq      : {eid:'ty_A34',pid:'ty_P_login'}
        },
        pageIds: {
            loginShow       : 'ty_P_landlogin',
            readXShow       : 'ty_P_zylogin',
            readXPhoneShow  : 'ty_P_zyphsec',
            qqShow          : 'ty_P_landqqlogin',
            weixinShow      : 'ty_P_landwelogin',
            fastregShow     : 'ty_P_landfastreg',
            scanShow        : 'ty_P_landscan',
            phoneShow       : 'ty_P_landphsec',
            riskShow        : 'ty_P_landhirsk',
            loginSuc        : 'ty_P_landlogin_suc',
            readXSuc        : 'ty_P_zylogin_suc',
            readXPhoneSuc   : 'ty_P_zyphsec_suc',
            scanSuc         : 'ty_P_landscan_suc',
            phoneSuc        : 'ty_P_landphsec_suc',
            qqSuc           : 'ty_P_landqqlogin_suc',
            weixinSuc       : 'ty_P_landwelogin_suc',
            alipaySuc       : 'ty_P_landzfblogin_suc',
            sinaSuc         : 'ty_P_landwblogin_suc',
            baiduSuc        : 'ty_P_landbdlogin_suc'
        },
        pageIdsPopup: {
            loginShow       : 'ty_P_login',
            readXShow       : 'ty_P_zylogin',
            readXPhoneShow  : 'ty_P_zyphsec',
            qqShow          : 'ty_P_qqlogin',
            weixinShow      : 'ty_P_welogin',
            fastregShow     : 'ty_P_fastreg',
            scanShow        : 'ty_P_scan',
            phoneShow       : 'ty_P_phsec',
            riskShow        : 'ty_P_hirsk',
            loginSuc        : 'ty_P_login_suc',
            readXSuc        : 'ty_P_zylogin_suc',
            readXPhoneSuc   : 'ty_P_zyphsec_suc',
            scanSuc         : 'ty_P_scan_suc',
            phoneSuc        : 'ty_P_phsec_suc',
            qqSuc           : 'ty_P_qqlogin_suc',
            weixinSuc       : 'ty_P_welogin_suc',
            alipaySuc       : 'ty_P_zfblogin_suc',
            sinaSuc         : 'ty_P_wblogin_suc',
            baiduSuc        : 'ty_P_bdlogin_suc'
        },

        init: function(data) {
            if(data == 'undefined' || data == null){
                data = {appid:'',areaid:'',popup:'',userip:'',uuid:''};
            }

            Statistics.uuid = data.uuid;
            Statistics.popup = data.popup;
            Statistics.commonParams(data);

            Statistics.curPage($('#j_loginTab li.act').attr('tab'));

            $('.other-way .icon-alipay').on('click', function(e) {
                Statistics.clickParams(e,'alipay');
            });

            $('.other-way .icon-sina').on('click', function(e) {
                Statistics.clickParams(e,'sina');
            });

            $('.other-way .icon-baidu').on('click', function(e) {
                Statistics.clickParams(e,'baidu');
            });

            //高危跳安全中心
            $('#jumpAq').on('click', function(e) {
                Statistics.clickParams(e,'jumpaq');
            });

            //手机登录展示
            $('#j-switchToggle').on('click', function(e) {
                var name = Statistics.getCurPidName();
                if(name == '') return true;
                Statistics.showParams(name);
            });

            //扫码登录展示
            $('#j-switchLoginMode').on('click', function(e) {
                var name = Statistics.getCurPidName();
                if(name == '') return true;
                Statistics.showParams(name);
            });

            //QQ,微信，快速注册展示
            $('#j_loginTab').on('click', 'li', function () {
                var tab = $(this).attr('tab');
                if(tab == 'qidian' || tab == 'tabReadX'){
                    var name = Statistics.getCurPidName();
                    if(name == '') return true;
                    Statistics.showParams(name);
                }else{
                    Statistics.curPage(tab);
                }
            });

        },

        getCurPidName: function() {
            var pidName = '';
            var isReadX = $('#j_loginTab li.act').attr('tab') == 'tabReadX' ? 1 : 0 ;
            if($("#j-scanMode").length > 0 && !$("#j-scanMode").is(":hidden")){
                pidName = 'scanShow';
            }else if($("#j-inputMode").length > 0 && !$("#j-inputMode").is(":hidden")){
                pidName = isReadX ? 'readXShow' : 'loginShow';
            }else if($("#j-phoneMode").length > 0 && !$("#j-phoneMode").is(":hidden")){
                pidName = isReadX ? 'readXPhoneShows' : 'phoneShow';
            }
            return pidName;
        },

        clickParams: function(e,name) {
            Statistics.params.x = e.pageX;
            Statistics.params.y = e.pageY;
            Statistics.params.event_type = 'A';
            if(Statistics.popup == 1){
                Statistics.params.eid = Statistics.eventIdsPopup[name].eid;
                Statistics.params.pid = Statistics.eventIdsPopup[name].pid;
            }else{
                Statistics.params.eid = Statistics.eventIds[name].eid;
                Statistics.params.pid = Statistics.eventIds[name].pid;
            }
            Statistics.send();
        },

        showParams: function(name){
            Statistics.params.x = '';
            Statistics.params.y = '';
            Statistics.params.event_type = 'P';
            if(Statistics.popup == 1){
                Statistics.params.eid = '';
                Statistics.params.pid = Statistics.pageIdsPopup[name];
            }else{
                Statistics.params.eid = '';
                Statistics.params.pid = Statistics.pageIds[name];
            }
            Statistics.send();
        },

        commonParams: function(data) {
            Statistics.params.sh = window.screen.height;
            Statistics.params.sw = window.screen.width;
            Statistics.params.ua = navigator.userAgent;
            Statistics.params.title = document.title;
            Statistics.params.url = encodeURIComponent(window.location.href);
            Statistics.params.ref = encodeURIComponent(document.referrer);
            Statistics.params.appid = data.appid;
            Statistics.params.areaid = data.areaid;
            Statistics.params.ip = data.userip;
        },

        curPage: function(tab){
            if(tab == 'qq'){
                Statistics.showParams('qqShow');
            }else if(tab == 'weixin'){
                Statistics.showParams('weixinShow');
            }else if(tab == 'fastreg'){
                Statistics.showParams('fastregShow');
            }else if(tab == 'qidian'){
                Statistics.showParams('loginShow');
            }else if(tab == 'tabReadX'){
                Statistics.showParams('readXShow');
            }
        },

        loginSuc: function(name){
            if(name == 'qq'){
                Statistics.showParams('qqSuc');
            }else if(name == 'weixin'){
                Statistics.showParams('weixinSuc');
            }else if(name == 'alipay'){
                Statistics.showParams('alipaySuc');
            }else if(name == 'baidu'){
                Statistics.showParams('baiduSuc');
            }else if(name == 'sina'){
                Statistics.showParams('sinaSuc');
            }else if(name == 'risk'){
                Statistics.showParams('riskShow');
            }else if(name == 'scan'){
                Statistics.showParams('scanSuc');//扫码
            }else if(name == 'login'){
                if($('#j_loginTab li').attr('tab') == 'tabReadX'){
                    if($('#j-switchToggle').hasClass('phone')){
                        Statistics.showParams('readXPhoneSuc');//手机
                    }else if($('#j-switchToggle').hasClass('input')){
                        Statistics.showParams('readXSuc');//账号密码
                    }
                }else{
                    if($('#j-switchToggle').hasClass('phone')){
                        Statistics.showParams('phoneSuc');//手机
                    }else if($('#j-switchToggle').hasClass('input')){
                        Statistics.showParams('loginSuc');//账号密码
                    }
                }
            }
        },

        getUniqueId: function(name,days){
            var uniqueId = Statistics.getCookie(name);
            if(uniqueId != 'undefined' && uniqueId != null && uniqueId != '') return uniqueId;

            uniqueId = Statistics.uuid;
            Statistics.setCookie(name,uniqueId,days);
            return uniqueId;
        },
        getDate: function(){
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth()+1;
            if(month < 10) month = '0'+month;
            var day = date.getDate();
            if(day < 10) day = '0'+day;
            var hour = date.getHours();
            if(hour < 10) hour = '0'+hour;
            var minute = date.getMinutes();
            if(minute < 10) minute = '0'+minute;
            var second = date.getSeconds();
            if(second < 10) second = '0'+second;
            return year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second;
        },

        getCookie: function(name){
            var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
            if(arr=document.cookie.match(reg))  return unescape(arr[2]);
            else return '';
        },

        setCookie: function(name,value,days){
            var exp = new Date();
            var host = window.location.host;
            exp.setTime(exp.getTime() + days*24*60*60*1000);
            var str = name + "="+ escape (value);
            if(host.indexOf('yuewen.com') > 0) str += ';domain=.yuewen.com';
            else if(host.indexOf('qidian.com') > 0 && name == 'newstatisticUUID') str+= ';domain=.qidian.com;path=/';
            if(days > 0) str += ";expires=" + exp.toGMTString();
            document.cookie = str;
        },

        send: function() {
            var url = 'https://path.book.qq.com/unifyreport?';
            Statistics.params.ctime = Statistics.getDate();
            Statistics.params.guid = Statistics.getCookie('ywguid');
            Statistics.params.sid = Statistics.getUniqueId('newstatisticSID',0);
            Statistics.params.uuid = Statistics.getUniqueId('newstatisticUUID',365);

            if(Statistics.params.uuid == 'undefined' || Statistics.params.uuid == null || Statistics.params.uuid == '') return false;

            $.each(Statistics.params, function(k, v){
                url += k+'='+v+'&';
            });

            url = url .substring(0,url.length - 1);

            $.ajax({
                type: "get",
                url: url,
                data: {},
                dataType: "jsonp",
                success: function() {},
                error: function(xhr, status, err) {},
                timeout: 3000
            });
        }
    };
    
    function OK(){}
} catch (e) {}
var LoginV1 = {
    config:  {
        code         : -1,
        domain       : 'qidian.com',
        message      : '',
        appId        : 0,
        areaId       : 0,
        format       : 'json',
        method       : '', // jsonp方式下执行的函数
        autoTime     : 14,
        autoShow     : '',
        target       : '',
        returnUrl    : '',
        source       : '',
        version      : '',
        imei         : '',
        qimei        : '',
        unionShow    : '',
        loginfrom    : '',
        ticket       : 0,
        tab          : 'qidian', // 默认展现起点tab，可选qq 和 weixin
        popup        : 0, // 是否是弹窗
        baseUrl      : '',
        qqBaseUrl    : '',
        cssPath      : 'https://passport.qidian.com',
        type         : '',
        loginPostfix : '',
        lastLoginPostfix: '',
        sdkversion   : '',
        modulus      : '',
        exponent     : '',
        aqurl        : '',
        ywtoken      : ''
    },


    currentType     : 0, //当前的登录方式: 0静态密码登录、1图片验证码、6自动登录、9二维码登录、11滑动验证码登录
    sessionKey      : '',
    helpTip         : '',
    codeKey         : '',
    nextAction      : 0,
    isLogin         : false,
    ajaxLock        : false,
    qrCodeCheckTime : 0, // 二维码检测次数
    qrCodeCheckInterval: 3000, // 二维码检测间隔
    qrCodeCheckTimeMax : 60, // 二维码检测最大次数
    loginClock      : '',
    loginTimeout    : '',
    loginInvalid    : !1,
    thirdLogin      : ['alipay', 'weibo', 'baidu', 'qqconnect'],
    commonInterval  : '',
    scanSuccess     : 0,

    weixinWrapIframe: $('#div_weixinlogin'),
    qqWrapIframe    : $('#div_qqlogin'),
    weixinWrapUrl   : '/login/weixinlogin',
    weixinAuthUrl   : '/login/weixinauth',
    qqWrapUrl       : '/qqptlogin.html',
    validateSrc     : '',     // 快速注册验证码 src
    validateShow    : false,  // 标识是否出腾讯验证码   flase 出图片验证码   true 出腾讯验证码
    sig             : '',
    code            : '',
    checkAccount    : false,
    isNeedSendMsg   : 0,
    captchaObj      : '',
    captchaType     : 0,
    captchaAppId    : "1600000770",
    
    ajaxUrls: {
        'staticLogin'   : '/login/login',
        'checkCodeLogin': '/login/checkcode',
        'autoLogin'     : '/login/autologin',
        'updateCode'    : '/login/updatecode',
        'ssoLogin'      : '/login/ssologin',
        'validateTicket': '/login/validate',
        'checkStatus'   : '/login/checkStatus',
        'getCaptcha'    : '/userSdk/getvalidatecode',
        'qrCode'        : '/login/qrcode',
        'qrCodeLogin'   : '/login/qrcodelogin',
        'qqCallbackUrl' : '/login/qqptcallback',
        'qqUnbanCallbackUrl' : '/login/qqunbancallback',
        'qqLoginQidian' : '/login/qqptloginqidian',
        'phoneSendMsg'  : '/userSdk/sendmsgnew',
        'phoneCodeLogin': '/userSdk/phonecodelogin',
        'phoneMsgByKey' : '/login/sendphonemsg',
        'phoneKeyLogin' : '/login/phonekeycodelogin',
        'logout'        : '/login/logout',
        'slideVerify'   : '/login/slideverifycodelogin',
        'register'      : '/userSdk/doregister',    // FastReg
        'getCaptchaNew' : '/userSdk/getvalidatecodenew',
        'checkAccount'  : '/userSdk/checkaccount'
    },

    errors: {
        '-11003'   : '验证码超时',
        '-11020'   : '您输入的账号或密码不正确，请重新输入',
        '-11016'   : '您输入的账号或密码不正确，请重新输入',
        '-10503'   : '验证码不能为空',
        '-11033'   : '当前账号已被禁止登录，请稍后重试',
        '-1'       : '登录失败，请稍后重试'
    },

    // 初始化一些登录时间，检测二维码等
    beginLogin: function() {
        LoginV1.loginInvalid = !1;
    },

    // 初始化样式，登录定制功能
    initStyle: function() {
        switch (LoginV1.config.style) {
            case 1: // 支持天方听书申请视听证配合登录界面调整
                $('#forgetPsw').hide();
                $('#forgetPsw').next().hide();
                $('#regQd').hide();
                $('#emRegQd').hide();
				if($('#username').length > 0){
					var placeholder = $('#username').attr('placeholder');
					placeholder = placeholder.replace('起点', '');
					$('#username').attr('placeholder', placeholder);
				}
                break;
        }
    },

    //获取url中的参数
    getUrlParam: function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    },

    init: function(params) {
        LoginV1.setParams(params);
        LoginV1.initRsaEncrypt();

        var domain = LoginV1.config.domain || 'qidian.com';
        domain = domain.split('.');
        var length = domain.length;
        if (length >= 2) {
            domain = domain[length - 2] + '.' + domain[length - 1];
            document.domain = domain;
        } else {
            document.domain = 'qidian.com';
        }

        if (LoginV1.getCookie('hightip') === "1") {
            $('.noNeedWarnTip').attr('checked', 'checked');
        }

        LoginV1.initStyle();

        // 检查是否已经登录
        // 检查是否选中自动登录
        // 查看登录模式，是否是qq登录
        // 第三方申诉解禁不需要校验
        LoginV1.beginLogin(); 
        
        // 检查登录tab
        if ($('.login-tab li').length == 2) {
            $('.login-tab').addClass('two');
        } else if ($('.login-tab li').length == 1) {
            $('.login-tab').addClass('one');
        }

        if ($('#j_loginTab .fastreg').hasClass('act')) {
            LoginV1.showFastImgCode();
        }

        // 隐藏或展现自动登录
        var autoShow = LoginV1.config.autoShow;
        if (autoShow == 1) {
            $('#autologin').show();
            $('#autologin').next('label').show();
            $('#autologin').next('label').next('label').show();
        } else {
            $('#autologin').hide();
            $('#autologin').next('label').hide();
            $('#autologin').next('label').next('label').hide();
        }
        
        //除申诉解禁外检测是否登录
        if(LoginV1.config.type !=  'ywauth'){
            if (LoginV1.checkStatus() == true) {
                return;
            }
        }
        // 转到相应的tab
        if (LoginV1.config.tab != 'qidian' && LoginV1.config.tab != '') {
            $('#j_loginTab li').each(function(index) {
                if ($(this).attr('tab') == LoginV1.config.tab) {
                    $('.act').removeClass('act');
                    $(this).addClass('act');

                    $('#j_loginSwitchWrap > .login-box').eq(index).show().siblings().hide();

                    LoginV1.changeTab(LoginV1.config.tab);
                    return;
                }
            });
        }

        $(document).on('keyup', function(e) {
            var keyCode = e.which || e.keyCode;
            if (keyCode == 13) {
                if($('#j_loginTab .fastreg').hasClass('act')){
                    if (LoginV1.checkFastForm()){
                        LoginV1.fastRegLogin();
                    }
                }else{
                    if($('#j-switchLoginMode').is(":hidden")) return false;
                    if($("#j-switchToggle").hasClass('input')){
                        if (LoginV1.checkForm()) {
                            LoginV1.login();
                        }
                    }else if($("#j-switchToggle").hasClass('phone')){
                        if (LoginV1.checkMobileForm()) {
                            LoginV1.phoneCodeLogin();
                        }
                    }
                }
                e.preventDefault();
            }
        });

        $('#close,#weixinclose').on('click', function(e) {
            LoginV1.notifyClose(e, {});
            e.preventDefault();
        });

        $('.btnLogin').on('click', function(e) {
            if (LoginV1.checkForm()) {
                LoginV1.login();
            }
            e.preventDefault();
        });

        $('.phoneBtnLogin').on('click', function(e) {
            if (LoginV1.checkMobileForm()) {
                LoginV1.phoneCodeLogin();
            }
            e.preventDefault();
        });

        // 快速注册
        $('.fastregBtn').on('click',function (e) {
            if (LoginV1.checkFastForm()){
                LoginV1.fastRegLogin();
            }
            e.preventDefault();
        });

        $('#fast-username').on('blur',function (e) {
            LoginV1.checkPhoneNumber();
            e.preventDefault();
        });


        $("#fast-username").change(function(){
            LoginV1.checkAccount = false;
        });

        // 快速注册tab
        $('#j_loginTab .fastreg').on('click', function (e) {
            LoginV1.config.getslidejs = 0;
            try{capDestroy();}catch(o){}
            LoginV1.showFastImgCode();
            LoginV1.initPhoneAreaSelect();
            e.preventDefault();
        });

        // 快速注册，点击获取短信验证码
        $('#fast-send-dpw').on('click',function (e) {
            LoginV1.isNeedSendMsg = 1;
            LoginV1.checkPhoneNumber();
            e.preventDefault();
        });

        $('#sendPhoneMsg').on('click', function(e) {
            if($('#sendPhoneMsg').hasClass('disabled')) return false;

            var mobilephone = $.trim($('#mobilephone').val());
            if (mobilephone.length == 0) {
                $('#mobilephone').focus();
                $('#mobilephone').parent().addClass('error');
                return;
            }

            //出了图片验证并且没填验证码
            if (LoginV1.codeKey && !$("#phoneCodeInput").is(':hidden') && !LoginV1.checkVerifyForm()) return;

            LoginV1.phoneSendMsg();
            e.preventDefault();
        });

        $('#sendPhoneMsgByKey').on('click', function(e) {
            LoginV1.phoneSendMsgByKey();
            e.preventDefault();
        });

        $('#riskSendPhoneMsgSubmit').on('click', function(e) {
            LoginV1.phoneKeyCodeLogin();
            e.preventDefault();
        });

        $('#logout').on('click', function(e) {
            LoginV1.logout();
            e.preventDefault();
        });
        $('#username').on('keyup', function(e) {
            $('#username').parent().removeClass('error');
            e.preventDefault();
        });
        $('#password').on('keyup', function(e) {
            $('#password').parent().removeClass('error');
            e.preventDefault();
        });

        $('#txtCode').on('keyup', function(e) {
            $('#txtCode').parent().removeClass('error');
            e.preventDefault();
        });
        $('#imgCode').on('click', function(e) {
            LoginV1.refreshCode();
            e.preventDefault();
        });
        $('.ImgCodeCommon').on('click', function(e) {
            LoginV1.commonRefreshCode();
            e.preventDefault();
        });
        $('#fastRegImgCode').on('click', function(e) {
            LoginV1.commonRefreshCode();
            //LoginV1.getFastRegCaptcha(1);
            e.preventDefault();
        });
        $('#btnRefreshCode').on('click', function(e) {
            LoginV1.refreshCode();
            e.preventDefault();
        });

        $('#fast-username').on('keyup', function(e) {
            $('#fast-username').parent().removeClass('error');
            e.preventDefault();
        });
        $('#fast-password').on('keyup', function(e) {
            $('#fast-password').parent().removeClass('error');
            e.preventDefault();
        });
        $('#fast-code-input').on('keyup', function(e) {
            $('#code-input').removeClass('error');
            e.preventDefault();
        });

        $('#riskChangeAccount').on('click', function(e) {
            LoginV1.hideError();
            LoginV1.hideRiskSendPhoneMsg();
            e.preventDefault();
        });

        $('#mobilephone').on('keyup', function () {
            if ($('#mobilephone').val().trim().length > 0)
                $('#mobilephone').parent().removeClass('error');
        });

        $('#mobilephone , #fast-username').on('change', function () {
            LoginV1.sessionKey = '';
        });

        $('#j-phoneMode .code-input input').on('keyup', function () {
            if ($('#j-phoneMode .code-input input').val().trim().length > 0)
                $('#j-phoneMode .code-input input').parent().removeClass('error');
        });
        $('#j-phoneMode .repeat-pw input').on('keyup', function () {
            if ($('#j-phoneMode .repeat-pw input').val().trim().length > 0)
                $('#j-phoneMode .repeat-pw input').parent().removeClass('error');

        });

        $('#fast-username').on('keyup', function () {
            if ($('#fast-username').val().trim().length > 0)
                $('.error-tip').addClass('hidden');
        });

        $('#fast-code-input').on('keyup', function () {
            if ($('#fast-code-input').val().trim().length > 0)
                $('#fast-code-input').parent().removeClass('error');

        });

        /* 登录切换tab */
        $('#j_loginTab').on('click', 'li', function () {
            if($(this).hasClass('act')) return false;
            var hasFlag = $('#j_loginTab ul li.tabReadX').length;
            $(this).addClass('act').siblings().removeClass('act');
            $('.error-tip').addClass('hidden').html('');
            if(hasFlag > 0){
                if($(this).hasClass('tabReadX')){
                    $('#j_loginSwitchWrap > .login-box.qd-login').show().siblings().hide();
                }else{
                    $('#j_loginSwitchWrap > .login-box').hide();
                    $('#j_loginSwitchWrap').find('.'+$(this).attr('tab')+'-login').show();
                }
            }else{
                $('#j_loginSwitchWrap > .login-box').eq($("#j_loginTab li").index(this)).show().siblings().hide();
            }
            LoginV1.config.getslidejs = 0;
            try{capDestroy();}catch(e){}
            LoginV1.changeTab($(this).attr('tab'));
            LoginV1.setCookie('ywtab', $(this).attr('tab'), (new Date()).AddDays(30), '/');
        });

        /*切换扫码和输入模式*/
        $('#j-switchLoginMode a').on('click', function (e) {
            if ($('#j-switchLoginMode').hasClass('scan')) {
                $('#j-scanMode').show();
                $('#j-loginInputMode').hide();
                $('#j-switchLoginMode').removeClass('scan').addClass('input');
                LoginV1.qrCode();
            } else {
                $('#j-scanMode').hide();
                $('#j-loginInputMode').show();
                $('#j-switchLoginMode').removeClass('input').addClass('scan');
                LoginV1.staticLogin();
            }
            e.preventDefault();
        });

        /*切换到手机验证码模式*/
        $('#j-switchToggle').on('click', function (e) {
            LoginV1.hideError();
            LoginV1.config.getslidejs = 0;
            try{capDestroy();}catch(o){}
            if ($('#j-switchToggle').hasClass('input')) {
                $('#j-switchToggle').html('账号密码登录');
                $('#j-switchToggle').removeClass('input').addClass('phone');
                $('#j-phoneMode').addClass('show');
                $('#j-inputMode').removeClass('show');
            } else {
                $('#j-switchToggle').html('手机验证码登录');
                $('#j-switchToggle').removeClass('phone').addClass('input');
                $('#j-phoneMode').removeClass('show');
                $('#j-inputMode').addClass('show');
            }
            e.preventDefault();
        });

        /*展开更多readx登录方式*/
        $('#j-readxMoreBtn').on('click', function (e) {
            $(this).remove();
            $('#j-readxOtherWay').show();
            e.preventDefault();
        });

        /* 更多登录方式 */
        $('#j_moreLogin').on('mouseenter', function () {
            $('#j_otherWay p').fadeIn();
            LoginV1.config.isInOtherWays = true;
        }).on('mouseleave', function () {
            setTimeout(function() {
                if (!LoginV1.config.isInOtherWays) {
                    $('#j_otherWay p').stop().fadeOut();
                }
            }, 500);
            LoginV1.config.isInOtherWays = false;
        });
        $('#j_otherWay').on('mouseleave', function () {
            $('#j_otherWay p').stop().fadeOut();
        });
        $('#j_otherWay p').on('mouseenter', function() {
            LoginV1.config.isInOtherWays = true;
        }).on('mouseleave', function() {
            LoginV1.config.isInOtherWays = false;
        });

        // 小阅的更多方式
        $('#j_readx_moreLogin').on('click', function(e) {
            $(this).hide();
            $(this).next('span').show();
            e.preventDefault();
        });

        $('#imgQrCodeReload').on('click', function(e) {
            $('.qr-code .qrcodeNotice').addClass('hidden');
            $('.qr-code .reload').addClass('hidden');
            $('.qr-code .scanSuccess').addClass('hidden');
            LoginV1.getQrCode();
            e.preventDefault();
        });

        $('#iconImgQrCodeReload').on('click', function(e) {
            $('.qr-code .qrcodeNotice').addClass('hidden');
            $('.qr-code .reload').addClass('hidden');
            $('.qr-code .scanSuccess').addClass('hidden'); 
            LoginV1.getQrCode();
            e.preventDefault();
        });

        // 切换扫码和普通登录方式
        $('#j_scanLoginBtn').on('click', function(e) {
            if (LoginV1.currentType == 9) { // 二维码
                LoginV1.staticLogin();
            } else {
                LoginV1.qrCode();
            }
            e.preventDefault();
        });

        $('#agree').click(function(e){
            if ($('#agree').is(':checked') != true) {
                $(".red-btn").addClass('disabled');
            }else {
                $(".red-btn").removeClass('disabled');
            }
        });

        // 小阅和阅文账号切换
        $('#j_loginTabOld li').on('click', function() {
            return false;
            if($(this).hasClass('act'))
                return ;
            LoginV1.setCookie('ywtab', $(this).attr('tab'), (new Date()).AddDays(30), '/');
            $('.act').removeClass('act');
            $(this).addClass('act');
            if (LoginV1.config.loginPostfix == '') { // 阅文账号
                LoginV1.config.loginPostfix = LoginV1.config.lastLoginPostfix;
                //$('.login-button').removeClass('blue-btn').addClass('red-btn');
            } else {
                LoginV1.config.lastLoginPostfix = LoginV1.config.loginPostfix;
                LoginV1.config.loginPostfix = '';
                //$('.login-button').removeClass('red-btn').addClass('blue-btn');
            }
        });

        $('#j-subLogo').on('click', function () {
            if ($(this).hasClass('up')) {
                $(this).removeClass('up');
                $('.body-mask').hide();
                $('#j-subLogoList').slideUp(100);
            } else {
                $(this).addClass('up');
                $('.body-mask').show();
                $('.body-mask').css('height', $('body').height() - 49);
                $('#j-subLogoList').slideDown(200);
            }
        });

        $('.body-mask').on('click', function () {
            $('#j-subLogo').removeClass('up');
            $('.body-mask').hide();
            $('#j-subLogoList').slideUp(100);
        })

        if(!LoginV1.isSupportPlaceholder()) {
            // 遍历所有除了密码框input对象
            $("input[type='text']").each(
                function() {
                    var self = $(this);
                    var val = self.attr("placeholder");
                    LoginV1.input(self, val);
                }
            );

            /* 对password框的特殊处理
             * a.创建一个text框
             * b.获取焦点和失去焦点的时候切换
             */
            $('input[type="password"]').each(
                function() {
                    var pwdField    = $(this);
                    var pwdVal      = pwdField.attr('placeholder');
                    var pwdId       = pwdField.attr('id');

                    // 重命名该input的id为原id后跟1
                    pwdField.after('<input id="' + pwdId +'1" type="text" value='+pwdVal+' autocomplete="off" class="input_pwd gray_txt"/>');
                    var pwdPlaceholder = $('#' + pwdId + '1');
                    pwdPlaceholder.show();
                    pwdField.hide();

                    pwdPlaceholder.focus(function(){
                        pwdPlaceholder.hide();
                        pwdField.show();
                        pwdField.focus();

                    });

                    pwdField.blur(function(){
                        if(pwdField.val() == '') {
                            pwdPlaceholder.show();
                            pwdField.hide();

                        }
                    });
                }
            );
        }
    },

    initRsaEncrypt: function() {
        var rsaurl = LoginV1.config.cssPath + '/rsa/rsa_encrypt.js';
        $.getScript(rsaurl, function() {

        });
    },

    initPhoneAreaSelect: function() {
        if(typeof(GPhoneArea) == 'undefined')
            return;

        var data = GPhoneArea;
        var areaHtml = '';
        var hotArea = data.hot;

        var processName = function(name) {
            name = name.replace(/\(|\)/, '');
            return name;
        }

        $.each(hotArea, function(key1, area) {
            areaHtml += '<option>+' +  area.code + ' ' + processName(area.chineseName) + '</option>';
        });
        $.each(data, function(key, areaArr){
            if(key == 'hot') return;
            $.each(areaArr, function(key1, area) {
                areaHtml += '<option>+' + area.code  + ' ' + processName(area.chineseName) + '</option>';
            });
        });

        $("#txtphonearea").html(areaHtml);
        $('#txtphonearea').selectMatch();
        if($("#game_phonearea").length > 0){
            $("#game_phonearea").html(areaHtml);
            $("#game_phonearea").selectMatch();
        }
    },

    phoneInterval: function(obj) {
        var count = obj.children('i').length > 0 ? parseInt(obj.children('i').text()) : 60;
        var interval = setInterval(function() {
            count--;
            if (count <= 0) {
                LoginV1.codeKey = '';
                clearInterval(interval);
                obj.html('发送动态密码').removeClass('disabled');
            }
            else {
                obj.html("(<i>" + count + "</i>)重新发送");
            }
        }, 1000);
    },

    commonPhoneInterval: function(obj) {
        var count = obj.children('i').length > 0 ? parseInt(obj.children('i').text()) : 60;
        LoginV1.commonInterval = setInterval(function() {
            count--;
            if (count <= 0) {
                LoginV1.codeKey = '';
                clearInterval(LoginV1.commonInterval);
                obj.html('发送动态密码').removeClass('disabled');
            }
            else {
                obj.html("(<i>" + count + "</i>)重新发送");
            }
        }, 1000);
    },

    input: function(obj, val) {
        var $input = obj;
        var val = val;
        $input.attr({value:val});
        $input.focus(function() {
            if ($input.val() == val) {
                $(this).attr({value:""});
            }
        }).blur(function() {
            if ($input.val() == "") {
                $(this).attr({value:val});
            }
        });
    },

    staticLogin: function() {
        LoginV1.currentType = 0;
        LoginV1.hideError();
        $('#j_scanLoginBtn').text('扫码登录');
        $('#j_scanLoginBtn').attr('data-report', '0'); // 此处标志是否需要上报，由于该事件在stat.click事件之前，所以值为相反的
        $('#j_normalLogin').show();
        $('#j_scanLogin').hide();

        LoginV1.codeKey = '';
        LoginV1.nextAction = 0;
    },

    qrCode: function() {
        LoginV1.currentType = 9;
        LoginV1.hideError();
        $('#j_scanLoginBtn').text('账号密码登录');
        $('#j_scanLoginBtn').attr('data-report', '1'); // 此处标志是否需要上报，由于该事件在stat.click事件之前，所以值为相反的
        $('#j_normalLogin').hide();
        $('#j_scanLogin').show();
        $('#j_codeLogin').hide();
        
        if($(".qrcodeNotice").length > 0){
            $(".qrcodeNotice").addClass('hidden');
            $(".qrcodeNotice .reload").addClass('hidden');
            $(".qrcodeNotice .scanSuccess").addClass('hidden');
        }
        
        LoginV1.getQrCode();
    },

    getQrCode: function() {
        LoginV1.qrCodeCheckTime = 0;
        // 请求ajax获取二维码
        var data = LoginV1.buildBaseData();
        data.method = 'LoginV1.qrCodeCallback';

        LoginV1.hideError();

        LoginV1.jsonp(LoginV1.config.baseUrl + LoginV1.ajaxUrls.qrCode, data);
        // 增加time事件，检查是否扫描成功
        // 在切换至其他登录方式时，删除该事件
    },

    qrCodeCallback: function(data) {
        if (data && data.code == 0 && data.data) {
            $('#imgQrCode').attr('src', data.data.image);
            LoginV1.sessionKey = data.data.sessionKey;

            setTimeout(function() {LoginV1.qrCodeLogin();}, 3000);
        } else {
            LoginV1.showError(data.message || LoginV1.errors[-1]);
        }
    },

    qrCodeLogin: function() {
        if (LoginV1.currentType != 9) {
            return;
        }

        var data = LoginV1.buildBaseData();
        data.method = 'LoginV1.qrCodeLoginCallback';
        data.qrcode = LoginV1.sessionKey;
        LoginV1.jsonp(LoginV1.config.baseUrl + LoginV1.ajaxUrls.qrCodeLogin, data);
    },

    qrCodeLoginCallback: function(data) {
        //扫码成功超时逻辑为taf端提供
        if (LoginV1.qrCodeCheckTime >= LoginV1.qrCodeCheckTimeMax && LoginV1.scanSuccess == 0) {
            // 超过次数不再检测二维码
            if($('.qr-code .reload').length > 0){
                 $('.qr-code .qrcodeNotice').removeClass('hidden');
                 $('.qr-code .reload').removeClass('hidden');
                 $('.qr-code .scanSuccess').addClass('hidden');
             }else{ 
                LoginV1.showError('超时了 请点击刷新');
            }
            return;
        }
        LoginV1.qrCodeCheckTime++;

        if (data && data.code == -11033) {
            LoginV1.showError(data.message || LoginV1.errors[data.code]);
            return;
        }
        
         //如果手机端点击取消登录刷新PC端登录二维码
        if(data.scanStatus == 3){
            $('.qr-code .qrcodeNotice').addClass('hidden');
            $('.qr-code .reload').addClass('hidden');
            $('.qr-code .scanSuccess').addClass('hidden');
            LoginV1.qrCodeCheckTime = 0 ;
            LoginV1.getQrCode();
            return;
        }
         
        //如果扫码成功显示状态
        if(data.scanStatus == 1){ 
            //重新开始轮询
            LoginV1.qrCodeCheckTime = 0;
            LoginV1.scanSuccess = 1;
            if($('.qr-code .scanSuccess').length > 0){
                $('.qr-code .qrcodeNotice').removeClass('hidden');
                $('.qr-code .scanSuccess').removeClass('hidden');
            }
        }
        
        //扫码成功后，二维码超时
        if(LoginV1.scanSuccess == 1 && data.scanStatus == 4){
            if($('.qr-code .reload').length > 0){
                 $('.qr-code .qrcodeNotice').removeClass('hidden');
                 $('.qr-code .reload').removeClass('hidden');
                 $('.qr-code .scanSuccess').addClass('hidden');
            }else{
                LoginV1.showError('超时了 请点击刷新');
            }
            return;
        }
        
        if (data && data.scanStatus == 5 && data.code == 0 && data.data) {
            addStat('scan');
            LoginV1.loginSuccess(data.data);
        } else {
            setTimeout(function() {
                LoginV1.qrCodeLogin();
            }, LoginV1.qrCodeCheckInterval);
        }
    },
    
    showReadNovelTip: function() {
        if (LoginV1.config.loginPostfix != '.xsyd') return false;
        if ((new Date()) > (new Date(LoginV1.config.endShowNoveTipDate))) {
            return false;
        }
        var readNovelTip = LoginV1.getCookie('rdnovel');
        if (readNovelTip == '' || readNovelTip == undefined) {
            $('#usernameSpan').html($('#username').val() + LoginV1.config.loginPostfix);
            $('#readNovelTip').show();
            //$('body').append('<div class="mask"></div>');
            LoginV1.setCookie('rdnovel', 1, (new Date()).AddDays(30), '/');
            setTimeout(function() { LoginV1.readNovelTimer(); }, 1000);
            $('.login-wrap').hide();
            return true;
        }
        return false;
    },

    readNovelTimer: function() {
        var timer = $('#timer').text();
        timer = parseInt(timer);
        if (isNaN(timer)) return;
        timer--;
        if (timer <= 0) {
            $("#nove-close").attr('href', "javascript:LoginV1.isCloseNove=true;$('#readNovelTip').hide();$('.mask').remove();void(0);");
            $("#nove-close").html('知道了');
            return;
        }
        $('#timer').text(timer);
        setTimeout(function() { LoginV1.readNovelTimer(); }, 1000);
    },

    changeTab: function(tab) {
        switch (tab) {
            case 'qq':
                if($("#qqLoginIframe").length > 0 && $("#qqLoginIframe").attr("srcUrl") != ''){
                    $("#qqLoginIframe").attr("src",$("#qqLoginIframe").attr('srcUrl'));
                    $("#qqLoginIframe").attr('srcUrl','');
                }
                break;
            case 'weixin':
                LoginV1.weixin();
                break;
            default:
                /**if (LoginV1.config.domain.indexOf('.qidian.com') > -1) {
                    //LoginV1.qidian();
                } else {
                    LoginV1.qidianWrap();
                }*/
                $('#div_qqlogin iframe').hide();
                $('#div_weixinlogin iframe').hide();
                break;
        }
    },

    checkForm: function() {
        var username = $('#username').val().trim();
        var password = $('#password').val();

        if (username.length == 0) {
            $('#username').focus();
            $('#username').parent().addClass('error');
            return;
        }
        if (password.length == 0) {
            $('#password').parent().addClass('error');
            $('#password').focus();
            return;
        }

        if (LoginV1.nextAction == 8) {
            var code = $('#txtCode').val().trim();
            if (code.length == 0) {
                $('#txtCode').focus();
                $('#txtCode').parent().addClass('error');
                return;
            }
        }
        return true;
    },
    checkMobileForm: function() {
        var mobilephone = $.trim($('#mobilephone').val());
        var validateCode = $.trim($('#j-phoneMode .repeat-pw input').val());

        if (mobilephone.length == 0) {
            $('#mobilephone').focus();
            $('#mobilephone').parent().addClass('error');
            return;
        }

        if(LoginV1.validateShow){
            var verifyCode = LoginV1.code + LoginV1.sig;
            if (verifyCode.length == 0 ){
                LoginV1.showError('验证不正确，请重新验证');
                return false;
            }
        }else if(LoginV1.codeKey && !$('#j-phoneMode .code-input input').is(':hidden')){
            var verifyCode = $.trim($('#j-phoneMode .code-input input').val());
            if (verifyCode.length == 0 ){
                $('#j-phoneMode .code-input input').parent().addClass('error');
                $('#j-phoneMode .code-input input').focus();
                return;
            }
        }

        if (validateCode.length == 0) {
            $('#j-phoneMode .repeat-pw input').focus();
            $('#j-phoneMode .repeat-pw input').parent().addClass('error');
            return;
        }
        return true;
    },

    //展示快速注册验证码
    showFastImgCode: function() {
        //var method = 'LoginV1.getFastRegValidateCodeCallback';
        //LoginV1.getCaptchaNewCommon(method);
    },

    getFastRegValidateCodeCallback: function (data) {
        LoginV1.getCaptchaCommonCallback(data,$("#code-input"),$('#fastRegImgCode'));
    },

    // 快速注册
    checkFastForm: function() {
        var username = $.trim($('#fast-username').val());      // 手机号
        var code =  $('#fast-code').val();                     // 动态验证码
        var agree = $('#agree').is(":checked") ? 1 : 0;

        if(!LoginV1.checkAccount) return false;

        // 动态验证码
        if (code.length == 0 ){
            $('#fast-code').parent().addClass('error');
            $('#fast-code').focus();
            return;
        }
        //  密码
        var password = $('#fast-password').val();
        if(!LoginV1.validatePassword(password)) return;

        if (agree == false){
           $("#agree").focus();
           return;
        }
        return true;
    },

    validatePassword:function (password){
        var old_password = password;
        password = password.replace(/\s/g, "");
        if(old_password.length < 6){
            LoginV1.showPasswordError('密码至少6位字符');
            return false;
        }

        var password_reg = /^[0-9]{1,8}$/;
        if(password != old_password || password_reg.test(password)){
            LoginV1.showPasswordError('密码格式不正确');
            return false;
        }

        if(password.length > 18){
            LoginV1.showPasswordError('密码不能大于18位字符');
            return false;
        }

        return true;
    },

    showPasswordError : function(msg){
        $('.error-tip').html(msg).removeClass('hidden');
        $('#fast-password').parent().addClass('error');
        $('#fast-password').focus();
    },

  // 检查手机是否合法和是否已注册
    checkPhoneNumber : function() {
        if(LoginV1.checkAccount){
            if(LoginV1.isNeedSendMsg){
                LoginV1.fastRegisterSendMsg();
            }
            return false;
        }
        // 检查手机号码
        var phonearea = $('.fastreg-login .ui-select-text').text();   //  地区
        var phone = $('#fast-username').val();         // 手机号
        var accountType = 101;                         //中国大陆

        phone = phone.replace(/[ ]/g, "");
        phone = $.trim(phone);

        if (phonearea.indexOf('+86') == 0) {
            //var re = /^(13[0-9]|15[0-9]|18[0-9]|145|147|17[0-9])\d{8}$/;
			var re = /^1\d{10}$/;
            if (re.test(phone) != true) {
                LoginV1.showError('请输入有效的手机号');
                $('#fast-username').parent().addClass('error');
                return;
            }

        }
        else {
            var re = /^\d+$/;
            if (re.test(phone) != true) {
                LoginV1.showError('请输入有效的手机号');
                return;
            }
            phone = phonearea + phone;
            accountType = 105; //海外
        }

        var data = {
            appId: LoginV1.config.appId,
            format: LoginV1.config.format,
            account: phone,
            accountType: accountType,
            areaId: LoginV1.config.areaId,
            method: 'LoginV1.checkAccountCallback'
        };
        if(LoginV1.ajaxLock) return false;
        LoginV1.ajaxLock = true;
        var url = LoginV1.ajaxUrls.checkAccount;
        LoginV1.jsonp(LoginV1.config.baseUrl + url, data);

    },

    checkAccountCallback:function(result){
        LoginV1.ajaxLock = false;
        if(result && result.data.existing == true) {
            LoginV1.checkAccount = false;
            LoginV1.showError('该手机号已注册，请尝试直接登录');
            $('#fast-username').parent().addClass('error');
            return ;
        }
        else if(result && result.code != 0) {
            LoginV1.checkAccount = false;
            LoginV1.showError( result.message);
            $('#fast-username').parent().addClass('error');
            return ;
        }

        if(result.code == 0 && result.data.existing == false ) {
            LoginV1.checkAccount = true;
            if(LoginV1.isNeedSendMsg) LoginV1.fastRegisterSendMsg();
        }

        return false;
    },

    fastRegisterSendMsg : function () {
        LoginV1.isNeedSendMsg = 0;
        LoginV1.validateSrc = '';

        var fastAccount = $.trim($("#fast-username").val());   //  手机号
        if (fastAccount.length == 0 ){
            LoginV1.showError('请输入有效的手机号');
            $('#phone-input').focus();
            $('#fast-username').parent().addClass('error');
            return ;
        }

        if (!$('#code-input').is(":hidden") && !LoginV1.checkVerifyFastFrom()) return;

        LoginV1.phoneSendMsgByCode();
    },

    fastRegAfterSendMsg: function () {
        //滑动验证码发送短信
        if (LoginV1.checkSlideFastFrom()){
            var slidePhoneSendMsgByCodeFun = function(retJson) {
                if(retJson.ret != 0){
                    LoginV1.showError('验证不正确，请重新验证');
                    return false;
                }

                $("#j-slideChecks").hide();
                LoginV1.setSigAndCode(retJson);

                var areaId = $.trim($('#j-phoneModes a.ui-select-button .ui-select-text').text());
                var data = LoginV1.buildBaseData();
                data.type = 0; // 注册
                data.mobilePhone = $.trim($('#fast-username').val());
                data.validateCode = LoginV1.code + ';'+ LoginV1.sig;
                data.method = 'LoginV1.slidePhoneSendMsgByCodeFunCallback';

                LoginV1.phoneSendMsgByCodeCommon($('#fast-send-dpw'),data,areaId);
            };

            LoginV1.slidePhoneSendMsgByCode($("#j-slideChecks"),'cap_iframes',slidePhoneSendMsgByCodeFun);
        }
    },

    //  出图片验证码时  检查表单
    checkVerifyFastFrom : function () {
        var fastAccount = $.trim($("#fast-username").val());   //  手机号
        var verifyCode =  $.trim($('#fast-code-input').val());  // 图片验证码
        if (fastAccount.length == 0 ){
            LoginV1.showError('请输入有效的手机号');
            $('#phone-input').focus();
            $('#fast-username').parent().addClass('error');
            return ;
        }

        if (verifyCode.length == 0 ){
            $('#code-input').focus();
            $('#fast-code-input').parent().addClass('error');
            return ;
        }
        return true;

    },
    // 出滑动验证码时，检查表单
    checkSlideFastFrom :  function () {
        var fastAccount = $.trim($("#fast-username").val());   //  手机号
        if (fastAccount.length == 0 ){
            LoginV1.showError('请输入有效的手机号');
            $('#phone-input').focus();
            $('#fast-username').parent().addClass('error');
            return ;
        }
        return true;

    },

    checkVerifyForm : function () {
        var mobilephone = $.trim($('#mobilephone').val());
        var verifyCode =  $.trim($('#j-phoneMode .code-input input').val());
        if (mobilephone.length == 0) {
            $('#mobilephone').focus();
            $('#mobilephone').parent().addClass('error');
            return false;
        }

        if (verifyCode.length == 0){
            $('#j-phoneMode .code-input input').parent().addClass('error');
            $('#j-phoneMode .code-input input').focus();
            return false;
        }

        return true;
    },

    addReadxTip: function(objname) {
        var tip = $(objname).parent().attr('data-tip');
        if (tip != '' && tip != undefined) {
            if (LoginV1.config.loginPostfix != '.xsyd') {
                // 不是小阅账号
                tip = tip.replace('小阅', '');
            }
            LoginV1.hideReadxTip(objname);
            $(objname).parent().append('<div class="error-tip">' + tip + '</div>');
        }
    },

    hideReadxTip: function(objname) {
        $(objname).parent().find('.error-tip').remove();
    },

    // 快速注册
    fastRegLogin: function () {
        var username = $('#fast-username').val();         // 手机号
        var code = $('#fast-code').val();                 //  动态验证码
        var password = $('#fast-password').val().trim();  // 密码
        var phonearea = $('.fastreg-login .ui-select-text').text();
        var accountType = 101;
        if(phonearea != '+86') username = phonearea + username;

        var url = LoginV1.ajaxUrls.register;
        var data = LoginV1.buildBaseData();
            data.account = username;
            data.password = password;
            data.phoneCode = code;
            data.accountType = accountType;
            data.phoneKey = LoginV1.sessionKey;
            data.sessionKey = LoginV1.sessionKey;
            data.backUrl = LoginV1.config.returnUrl;
            data.method = 'LoginV1.fastRegCallback';
        LoginV1.hideError();
        if (LoginV1.ajaxLock || $('.red-btn').hasClass('loading')) {
            return;
        }

        LoginV1.ajaxLock = true;
        $('.red-btn').addClass('loading');
        LoginV1.jsonp(LoginV1.config.baseUrl + url, data);
    },

    fastRegCallback : function (data) {
        LoginV1.ajaxLock = false;

        if (!data || data.code !== 0 ){
            if (LoginV1.validateShow == false){
                LoginV1.getFastRegCaptcha(1);
            }
            $('.error-tip').html(data.message).removeClass('hidden');
            $('.red-btn').removeClass('loading');
            return false;
        }else{
            window[LoginV1.config.target === 'iframe' ? 'self' : 'top'].location = data.data.backUrl;
        }
    },

    login: function() {

        var username = $('#username').val();
        var password = $('#password').val();
        var autologin = $('#autologin').is(":checked") ? 1 : 0;
        var code = $('#txtCode').val();
        var url = LoginV1.nextAction === 0 ? LoginV1.ajaxUrls.staticLogin : LoginV1.ajaxUrls.checkCodeLogin;
        var data = LoginV1.buildBaseData();
        data.ywtoken = LoginV1.config.ywtoken,
            data.username = username,
            data.password = rsa_encryption(password),
            data.auto = autologin,
            data.code = code,
            data.method = 'LoginV1.loginCallback';
        data.sessionkey = LoginV1.codeKey;
        if($('#j_loginTab ul li.act').hasClass('tabReadX')){
            data.username += LoginV1.config.loginPostfix;
        }

        LoginV1.hideError();

        if (LoginV1.ajaxLock || $('.login-button').hasClass('loading')) {
            return;
        }

        LoginV1.ajaxLock = true;
        $('.login-button').addClass('loading');
        LoginV1.jsonp(LoginV1.config.baseUrl + url, data);
    },

    loginCallback: function(data) {
        LoginV1.ajaxLock = false;
        var code = data ? data.code : -1;
        if (!data || code !== 0) { // 登录失败
            var error = LoginV1.errors[code] || data.message || LoginV1.errors[-1];
            $('.login-button').removeClass('loading');
            if (code == -11004 && data.data && data.data.imgSrc) {
                LoginV1.showCheckCode(data.data.imgSrc);
                LoginV1.codeKey = data.data.sessionKey;
                $('.error-tip').html(error).removeClass('hidden');
            } else {
                if(code == 10570){
                    error = '登录失败，请点击<a href="javascript:location.reload();">刷新</a>重试';
                }
                LoginV1.showError(error);
            }
            return;
        }

        data = data.data;
        LoginV1.nextAction = data.nextAction;
        if (code === 0 && data.nextAction === 0) { // 登录成功
            var statName = 'login';
            if (data.isRiskAccount === true && LoginV1.getCookie('hightip') !== "1") statName = 'risk';
            addStat(statName);

            var loginTip = function() {
                // 考虑到js报错情况，此处设置3s后remove loading
                setTimeout(function(){ $('.login-button').removeClass('loading'); }, 3000);
                LoginV1.loginSuccess(data);
            };
            // 展现高危账号的提示
            if (data.isRiskAccount === true && LoginV1.getCookie('hightip') !== "1") {
                $('#riskTip').show();
                $('#j-loginInputMode').hide();
                $('#j-slideCheck').hide();
                $('#j-switchLoginMode').hide();
                $('#riskSendPhoneMsg').hide();
                $('#ignoreTip').on('click', function(e) {
                    loginTip(); // 执行登录的提示
                    e.preventDefault();
                });
                $('.noNeedWarnTip').on('click', function() {
                    var ischecked = $(this).is(':checked') ? 1 : 0;
                    LoginV1.setCookie('hightip', ischecked, (new Date()).AddDays(7), '/');
                });
                return;
            }

            loginTip(); // 执行登录的提示

            return;
        }

        $('.login-button').removeClass('loading');
        if (data && data.nextAction) {
            switch (data.nextAction) {
                case 2: //重新认证静密
                    LoginV1.showError(-11020);
                    return;
                case 8: //图片验证码
                    LoginV1.showCheckCode(data.imgSrc);
                    LoginV1.codeKey = data.sessionKey;
                    $('#txtCode').focus();
                    return;
                case 11 : // 滑动验证码
                    LoginV1.showSlideCode(data.sessionKey,data.imgSrc);
                    return;
                case 12 : // 发短信
                    LoginV1.showSendMsg(data.sessionKey,data.challenge);
                    return;
                default:
                    LoginV1.showError(LoginV1.errors[-1]);
                    return;
            }
        }

        // 显示错误
        if (code !== 0) {
            var error = LoginV1.errors[code] || LoginV1.errors[-1];
            if(code == 10570){
                error = '登录失败，请点击<a href="javascript:location.reload();">刷新</a>重试';
            }
            LoginV1.showError(error);
        }
    },

    loginSuccess: function(data) {
        // 登录成功
        if (LoginV1.config.format == 'jsonp') {
            LoginV1.config.method;
            return;
        }

        if (data.needSecureCookie) {
            var domain = LoginV1.config.secureDomain;
            LoginV1.changeDomain(domain);
            if (LoginV1.config.ywGuidShow && data.ywGuid) LoginV1.setCookie('ywguid', data.ywGuid, null, '/', domain, true, 'None');
            if (data.ywKey) LoginV1.setCookie('ywkey', data.ywKey, null, '/', domain, true, 'None');
            if (data.ywOpenId) LoginV1.setCookie('ywopenid', data.ywOpenId, null, '/', domain, true, 'None');

            if (data.alk !== undefined && data.alk != '' && domain == '.yuewen.com') {
                var days = data.alkts || 15;
                LoginV1.setCookie('alk', data.alk, (new Date()).AddDays(days), '/', domain, true, 'None');
            }
        }

        //  查看是否需要302跳转，如果需要的话，先执行302跳转
        if (data['302url']) {
            if ($('#subloginFrame').length > 0) {
                $('#subloginFrame').attr('src', data['302url']);
            } else {
                location.href = data['302url'];
            }
        } else {
            LoginV1.redirect(data.ticket, data.ywGuid, data.ywOpenId);
        }
    },

    checkStatus: function() {
        var data = LoginV1.buildBaseData();
        data.auto = LoginV1.getCookie('al') || '',
            data.method = 'LoginV1.checkStatusCallback';

        if (LoginV1.ajaxLock) {
            return;
        }

        LoginV1.ajaxLock = true;
        LoginV1.jsonp(LoginV1.config.baseUrl + LoginV1.ajaxUrls.checkStatus, data);

        return false;
    },

    checkStatusCallback: function(data) {
        LoginV1.ajaxLock = false;
        var code = data ? data.code : -1;
        var ticket = data && data.data ? data.data.ticket : '';

        if (code === 0 && ticket !== '') { // 校验成功
            LoginV1.loginSuccess(data.data);
            return true;
        }
    },

    qqLoginQidian: function() {
        if (LoginV1.config.code != 0) {
            var message = LoginV1.config.message || '登录失败';
            var message = message + '，请<span onclick="LoginV1.reload()" style="color:#3481cf;cursor:pointer;">刷新</span>后重试';
            setTimeout('LoginV1.reload()',3000);
            $('#error').html(message || '登录失败，请选用其他方式登录');
            return;
        }

        var data = LoginV1.buildBaseData();
        data.ywticket = LoginV1.config.ywticket,
            data.method = 'LoginV1.qqLoginQidianCallback',
            data.ywopenid = LoginV1.config.ywOpenId,
            data.ywguid = LoginV1.config.ywGuid;

        if (LoginV1.ajaxLock) {
            return;
        }

        LoginV1.ajaxLock = true;
        LoginV1.jsonp(LoginV1.config.baseUrl + LoginV1.ajaxUrls.qqLoginQidian, data);

        return false;
    },

    qqLoginQidianCallback: function(data) {
        LoginV1.ajaxLock = false;
        var code = data ? data.code : -1;
        var ticket = data && data.data ? data.data.ticket : '';

        if (LoginV1.config.type == 'wap') {
            var url = LoginV1.config.returnUrl || 'http://m.qidian.com';

            var ticket = data.data.ticket || '';
            var ywGuid = data.data.ywGuid || '';
            var ywOpenId = data.data.ywOpenId || '';

            if (ticket != '') {
                if (url.indexOf('?') == -1) {
                    url += '?';
                } else {
                    url += '&';
                }
                url += 'ticket=' + ticket + '&ywguid=' + ywGuid + '&ywopenid=' + ywOpenId;
            }

            // H5直接跳转
            location.href = url;
            return;
        }

        LoginV1.config.refreshParent = 1;
        LoginV1.jump(data);
    },

    getCaptcha: function(force) {
        var data = LoginV1.buildBaseData();
        data.force = force;
        data.method = 'LoginV1.getCaptchaCallback';
        LoginV1.jsonp(LoginV1.config.baseUrl + LoginV1.ajaxUrls.getCaptcha, data);
    },
    // 快速注册更新验证码
    getFastRegCaptcha: function(force) {
        var data = LoginV1.buildBaseData();
        data.force = force;
        data.method = 'LoginV1.getCaptchaCallback';
        LoginV1.jsonp(LoginV1.config.baseUrl + LoginV1.ajaxUrls.getCaptchaNew, data);
    },

    getCaptchaCallback: function(data){
        if(data.code != 0){
            LoginV1.showError(data.message,data.code);
            return false;
        }
        if(!data.data.needValidateCode || data.data.imgSrc == '') return false;
        LoginV1.codeKey = data.data.sessionKey;
        $('.ImgCodeCommon').attr('src',data.data.imgSrc).removeClass('hidden');
    },

    getCaptchaNew: function(){
        var method = 'LoginV1.getCaptchaNewCallback';
        LoginV1.getCaptchaNewCommon(method);
    },

    getCaptchaNewCallback: function(data){
        LoginV1.getCaptchaCommonCallback(data,$('#phoneCodeInput'),$('#phoneCodeInput .ImgCodeCommon'));
    },

    getCaptchaNewCommon: function(method){
        var data = LoginV1.buildBaseData();
        data.force = 1 ;
        data.method = method;
        LoginV1.hideError();
        LoginV1.jsonp(LoginV1.config.baseUrl + LoginV1.ajaxUrls.getCaptchaNew, data);
    },

    getCaptchaCommonCallback: function(data,wrapObj,imgObj){
        if(data.code != 0){
            LoginV1.showError(data.message,data.code);
            return false;
        }

        if(data.data.imgSrc == '' || !data.data.needValidateCode) return false;

        LoginV1.sig = '';
        LoginV1.code = '';
        LoginV1.captchaType = 0;
        LoginV1.validateShow = false;
        LoginV1.codeKey = data.data.sessionKey;
        // 出腾讯验证码 隐藏图片验证码框
        if(data.data.imgSrc.indexOf('tencentCode;') == 0 ){
            //标识是否出腾讯验证码
            LoginV1.validateShow = true;
            LoginV1.validateSrc = data.data.imgSrc.slice(12);
            //LoginV1.validateSrc = 'https://ssl.captcha.qq.com/TCaptcha.js';
            LoginV1.setCaptchaType(LoginV1.validateSrc);
            wrapObj.hide();
        }

        //出图片验证码,展示图片验证码,隐藏滑动验证码
        if (LoginV1.validateShow == false){
            LoginV1.validateSrc = data.data.imgSrc;
            imgObj.attr('src',data.data.imgSrc).removeClass('hidden');
            wrapObj.show();
        }
    },

    refreshCode: function() {
        var url = $('#imgCode').attr('src');
        if (url.indexOf('&r=') > -1) {
            url = url.substr(0, url.indexOf('&r='));
        }
        url += '&r=' + (Math.random() * 10);
        $('#imgCode').attr('src', url);
    },

    commonRefreshCode: function() {
        var url = $('.ImgCodeCommon').attr('src');
        if (url.indexOf('&r=') > -1) {
            url = url.substr(0, url.indexOf('&r='));
        }
        url += '&r=' + (Math.random() * 10);
        $('.ImgCodeCommon').attr('src', url);
    },

    validate: function(ticket) {
        var data = LoginV1.buildBaseData();
        data.ticket = ticket;
        LoginV1.jsonp(LoginV1.config.baseUrl + LoginV1.ajaxUrls.validateTicket, data, LoginV1.config.method);
    },

    logout: function() {
        var data = LoginV1.buildBaseData();
        data.autoTicket = LoginV1.getCookie('al');

        LoginV1.jsonp(LoginV1.config.baseUrl + LoginV1.ajaxUrls.logout, data, LoginV1.config.method);
    },

    tencentAfterSendMsg: function() {
        var mobilephone = $.trim($('#mobilephone').val());
        if (mobilephone.length == 0) {
            $('#mobilephone').focus();
            $('#mobilephone').parent().addClass('error');
            return;
        }

        var slidePhoneSendMsgByCodeFun = function(retJson) {
            if(retJson.ret != 0){
                LoginV1.showError('验证不正确，请重新验证');
                return false;
            }

            $("#j-slideChecks-phone").hide();
            LoginV1.setSigAndCode(retJson);

            var areaId = $.trim($('#j-phoneMode a.ui-select-button .ui-select-text').text());
            var data = LoginV1.buildBaseData();
            data.mobilePhone = $.trim($('#mobilephone').val());
            data.validateCode = LoginV1.code + ';'+ LoginV1.sig;
            data.method = 'LoginV1.slidePhoneSendMsgByCodeLoginCallback';
            data.type = 1;
            data.needRegister = 0;

            LoginV1.phoneSendMsgByCodeCommon($('#sendPhoneMsg'),data,areaId);
        };

        LoginV1.slidePhoneSendMsgByCode($("#j-slideChecks-phone"),'cap_iframe_phone',slidePhoneSendMsgByCodeFun);
    },

    phoneSendMsg: function() {
        LoginV1.hideError();

        if($('#sendPhoneMsg').hasClass('disabled')) return false;

        if (LoginV1.ajaxLock || $('.login-button').hasClass('loading')) {
            return false;
        }

        var data = LoginV1.buildBaseData();
        var areaId = $.trim($('#j-phoneMode a.ui-select-button .ui-select-text').text());
        data.phoneIsAbroad = areaId == '+86' ? 0 : 1;
        var mobilePhone = $.trim($('#mobilephone').val());
        data.auto = LoginV1.getCookie('al') || '',
            data.inputUserId = areaId+mobilePhone,
            data.sessionKey = LoginV1.codeKey,
            data.type = 1,
            data.validateCode = $.trim($('#j-phoneMode .code-input input').val()),
            data.needRegister = 0,
            data.method = 'LoginV1.phoneSendMsgCallback';

        LoginV1.ajaxLock = true;
        $('#sendPhoneMsg').addClass('disabled');
        LoginV1.jsonp(LoginV1.config.baseUrl + LoginV1.ajaxUrls.phoneSendMsg, data);
    },

    phoneSendMsgCallback: function(data) {
        LoginV1.slidePhoneSendMsgByCodeCommonCallback(data, $('#sendPhoneMsg'), $('#phoneCodeInput'));
    },

    //处理发短信后的验证
    dealSendMsgValidate:function(data , wrapObj) {
        if(data.imgSrc == '' || data.sessionKey == '') return false;

        var imgObj = wrapObj.find('img');

        LoginV1.sig = '';
        LoginV1.code = '';
        LoginV1.captchaType = 0;
        LoginV1.validateShow = false;
        LoginV1.codeKey = data.sessionKey;
        LoginV1.validateSrc = data.imgSrc;
        // 出腾讯验证码 隐藏图片验证码框
        if(data.nextAction == 11 ){
            //标识是否出腾讯验证码
            wrapObj.hide();
            LoginV1.validateShow = true;
            //LoginV1.validateSrc = 'https://ssl.captcha.qq.com/TCaptcha.js';
            LoginV1.setCaptchaType(LoginV1.validateSrc);
            if(wrapObj.attr('id') == 'code-input'){
                LoginV1.fastRegAfterSendMsg();
            }else if(wrapObj.attr('id') == 'phoneCodeInput'){
                LoginV1.tencentAfterSendMsg();
            }
        }else if(data.nextAction == 8){
            LoginV1.validateShow = false;
            imgObj.attr('src',LoginV1.validateSrc).removeClass('hidden');
            wrapObj.show();
        }
    },

    //快速注册 通过图片验证获取短信验证码
    phoneSendMsgByCode:function () {
        var areaId = $.trim($('#j-phoneModes a.ui-select-button .ui-select-text').text());
        var data = LoginV1.buildBaseData();
        data.mobilePhone = $.trim($('#fast-username').val());
        data.validateCode = $.trim($('#fast-code-input').val());
        data.method = 'LoginV1.slidePhoneSendMsgByCodeFunCallback';
        data.type = 0;

        LoginV1.phoneSendMsgByCodeCommon($('#fast-send-dpw'),data,areaId);
    },

    phoneSendMsgByCodeCommon: function(sendMsgObj,data,areaId){
        LoginV1.hideError();
        if(sendMsgObj.hasClass('disabled')) return false;
        if(LoginV1.validateSrc && (data.validateCode == undefined || data.validateCode == null || !data.validateCode)){
            LoginV1.showError('验证不正确，请重新验证');
            return false;
        }

        data.phoneIsAbroad = areaId == '+86' ? 0 : 1;
        data.inputUserId = areaId + data.mobilePhone;  // 86　+ 手机号
        data.sessionKey = LoginV1.codeKey;

        LoginV1.ajaxLock = true;
        sendMsgObj.addClass('disabled');

        LoginV1.jsonp(LoginV1.config.baseUrl + LoginV1.ajaxUrls.phoneSendMsg, data);
    },

    //通过滑动验证码获取短信验证码
    slidePhoneSendMsgByCode:function (obj,capName,callbackName) {
        if(obj.length <= 0) return false;
        $('#'+capName).html('');
        var url = LoginV1.validateSrc;
        if(!LoginV1.captchaType) url += "&clientype=2";

        if (LoginV1.config.getslidejs == 1) {
            if(!LoginV1.captchaType) obj.show();
            LoginV1.refreshCaptcha(capName,callbackName);
        } else {
            LoginV1.config.getslidejs = 1;
            $.getScript(url, function () {
                if(!LoginV1.captchaType) obj.show();
                LoginV1.showCaptcha(capName,callbackName);
            });
        }
    },

    slidePhoneSendMsgByCodeFunCallback: function (data) {
        LoginV1.slidePhoneSendMsgByCodeCommonCallback(data,$('#fast-send-dpw'),$('#code-input'));
    },

    slidePhoneSendMsgByCodeLoginCallback: function (data){
        LoginV1.slidePhoneSendMsgByCodeCommonCallback(data,$('#sendPhoneMsg'),$('#phoneCodeInput'));
    },

    slidePhoneSendMsgByCodeCommonCallback: function (data,obj,wrapObj) {
        LoginV1.ajaxLock = false;
        if(data.code == -11003 || data.code == -10092){
            obj.removeClass('disabled');
            LoginV1.codeKey = "";
            LoginV1.showError('会话失效，请点击<a href="javascript:location.reload();">刷新</a>重试');
            return false;
        }
        if(data.code != 0){
            obj.removeClass('disabled');
            LoginV1.codeKey = "";
            LoginV1.showError(data.message);
            return false;
        }

        if (data.data && data.data.nextAction !== undefined) {
            switch (data.data.nextAction) {
                case 0:
                    obj.addClass('hasClick');
                    LoginV1.sessionKey = data.data.sessionKey;  //  短信回调的sessionKey
                    LoginV1.phoneInterval(obj);
                    return;
                case 8:
                case 11 : // 滑动验证码
                    obj.removeClass('disabled');
                    LoginV1.dealSendMsgValidate(data.data,wrapObj);
                    return;
                default:
                    LoginV1.showError(LoginV1.errors[-1]);
                    return;
            }
        }
    },

    phoneSendMsgByKey: function(){
        LoginV1.hideError();
        if(LoginV1.ajaxLock || $('#sendPhoneMsgByKey').hasClass('disabled')) return false;
        if(LoginV1.sendMsgKey == "undefined" || LoginV1.sendMsgKey == null || LoginV1.sendMsgKey == '') return false;

        var data = LoginV1.buildBaseData();
        data.sessionKey = LoginV1.sendMsgKey;

        data.method = 'LoginV1.phoneSendMsgByKeyCallback';
        LoginV1.ajaxLock = true;
        $('#sendPhoneMsgByKey').addClass('disabled');
        LoginV1.jsonp(LoginV1.config.baseUrl + LoginV1.ajaxUrls.phoneMsgByKey, data);
    },

    phoneSendMsgByKeyCallback: function(data){
        LoginV1.ajaxLock = false;
        if(data.code == -11003 || data.code == -10092){
            LoginV1.hideRiskSendPhoneMsg();
            LoginV1.showError('会话失效，请重试');
            return false;
        }
        if(data.code != 0){
            $('#sendPhoneMsgByKey').removeClass('disabled');
            LoginV1.showError(data.message);
            return false;
        }
        $('#sendPhoneMsgByKey').addClass('hasClick');
        LoginV1.commonPhoneInterval($('#sendPhoneMsgByKey'));
    },

    phoneKeyCodeLogin: function(){
        LoginV1.hideError();
        if(!$('#sendPhoneMsgByKey').hasClass('hasClick')){
            LoginV1.showError('请点击发送手机短信验证码');
            return false;
        }
        if(LoginV1.ajaxLock || $('#riskSendPhoneMsgSubmit').hasClass('loading')) return false;
        if(LoginV1.sendMsgKey == "undefined" || LoginV1.sendMsgKey == null || LoginV1.sendMsgKey == '') return false;
        var code = $('#riskSendPhoneMsg .repeat-pw input').val();
        if(code == "undefined" || code == null || code == ''){
            LoginV1.showError('验证码不能为空');
            return false;
        }

        var data = LoginV1.buildBaseData();
        data.code = code;
        data.sessionkey = LoginV1.sendMsgKey;

        data.method = 'LoginV1.phoneKeyCodeLoginCallback';
        LoginV1.ajaxLock = true;
        $('#riskSendPhoneMsgSubmit').addClass('loading');
        LoginV1.jsonp(LoginV1.config.baseUrl + LoginV1.ajaxUrls.phoneKeyLogin, data);
    },

    phoneKeyCodeLoginCallback: function(data){
        LoginV1.ajaxLock = false;
        $('#riskSendPhoneMsgSubmit').removeClass('loading');

        if(data.code == -11003 || data.code == -10092){
            LoginV1.hideRiskSendPhoneMsg();
            LoginV1.showError('会话失效，请重试');
            return false;
        }
        if(data.code != 0){
            LoginV1.showError(data.message,data.code);
            return false;
        }

        LoginV1.loginCallback(data);
    },

    hideRiskSendPhoneMsg: function(){
        $('.web-login-wrap').show();
        $('#j-loginInputMode').show();
        $('#riskSendPhoneMsg').hide();
    },

    phoneCodeLogin: function() {
        var data = LoginV1.buildBaseData();
        data.auto = LoginV1.getCookie('al') || '',
            data.inputUserId = $.trim($('#mobilephone').val()),
            data.sessionKey = LoginV1.sessionKey,
            data.validateCode = $.trim($('#j-phoneMode .repeat-pw input').val()),
            data.method = 'LoginV1.phoneCodeLoginCallback';

        LoginV1.hideError();
        if (LoginV1.ajaxLock || $('.login-button').hasClass('loading')) {
            return;
        }
        LoginV1.ajaxLock = true;
        $('.login-button').addClass('loading');

        LoginV1.jsonp(LoginV1.config.baseUrl + LoginV1.ajaxUrls.phoneCodeLogin, data);
    },

    phoneCodeLoginCallback: function(data){
        LoginV1.ajaxLock = false;
        $('.login-button').removeClass('loading');
        if(data.code != 0){
            LoginV1.showError(data.message,data.code);
            return false;
        }
        data.data.nextAction = 0;
        LoginV1.loginCallback(data);
    },

    showCheckCode: function(url) {
        LoginV1.currentType = 1;
        $('#imgCode').attr('src', url).slideDown(200);
        $('#txtCode').val('').focus();
        $('#dvCode').show();

        if ($('#j_codeLogin').length > 0) {
            $('#j_normalLogin').hide();
            $('#j_codeLogin').show();
        }
    },

    showSendMsg: function(sessionKey,challenge){
        LoginV1.sendMsgKey = sessionKey;
        LoginV1.nextAction = 0;
        
        if(challenge == "undefined" || challenge == null || challenge == ''){
            LoginV1.showError('安全手机未绑定');
            return false;
        }
        if(sessionKey == "undefined" || sessionKey == null || sessionKey == ''){
            LoginV1.showError('会话失效，请重试');
            return false;
        }

        $('.web-login-wrap').hide();     // 隐藏登录框
        $('#j-slideCheck').hide();       // 隐藏验证码
        
        LoginV1.hideError();
        clearInterval(LoginV1.commonInterval);  //清除定时
        $('#riskSendPhoneMsg input').val('');
        $('#sendPhoneMsgByKey').html('发送动态密码').removeClass('disabled hasClick');
        $('#sendMsgPhoneTips').html(challenge);
        $('#riskSendPhoneMsg').show();         // 显示滑动模块
    },

    // 出滑动验证码 start
    showSlideCode:function (sessionKey,url) {
        LoginV1.captchaType = 0;
        LoginV1.currentType = 11;
        LoginV1.sessionKey = sessionKey;
        //url = 'https://ssl.captcha.qq.com/TCaptcha.js';
        LoginV1.setCaptchaType(url);

        var handelEle = function(){
            $('#j-loginInputMode').hide();     // 隐藏登录框
            $('#j-switchLoginMode').hide();    // 隐藏右下角二维码
            $('#j-slideCheck').show();         // 显示滑动模块
        };

        var callbackFun = function(retJson) {
            if(retJson.ret == 0) {
                var ret = LoginV1.buildBaseData();
                LoginV1.setSigAndCode(retJson);

                ret.sig = LoginV1.sig;
                ret.code = LoginV1.code;
                ret.ywtoken = LoginV1.config.ywtoken;
                ret.sessionkey = LoginV1.sessionKey ;
                ret.username = $("#username").val().trim();
                if($('#j_loginTab ul li.act').hasClass('tabReadX')){
                    ret.username += LoginV1.config.loginPostfix;
                }
                ret.password = rsa_encryption($("#password").val());
                ret.logintype = 23 ;
                ret.auto = $('#autologin').is(":checked") ? 1 : 0;
                ret.method = 'LoginV1.slideVerifyCodeLoginCallback';
                LoginV1.jsonp(LoginV1.config.baseUrl + LoginV1.ajaxUrls.checkCodeLogin,ret);

            } else {
                LoginV1.showError('验证不正确，请重新验证');
            }
        };

        if ($('#j-slideCheck').length > 0){
            $('#cap_iframe').html('');
            if(!LoginV1.captchaType) var url = url + "&clientype=2";

            if (LoginV1.config.getslidejs == 1){
                if(!LoginV1.captchaType) handelEle();
                LoginV1.refreshCaptcha('cap_iframe',callbackFun);
            }else{
                LoginV1.config.getslidejs = 1;
                $.getScript(url, function() {
                    if(!LoginV1.captchaType) handelEle();
                    LoginV1.showCaptcha('cap_iframe',callbackFun);
                });
            }

        }
    },

    setSigAndCode: function (retJson) {
        if(!LoginV1.captchaType){
            var ticket = capGetTicket();
            LoginV1.sig = ticket.ticket;
            LoginV1.code = ticket.randstr;
        }else if(LoginV1.captchaType == 1){
            LoginV1.sig = retJson.ticket;
            LoginV1.code = retJson.randstr;
        }
    },

    setCaptchaType: function (url) {
        LoginV1.captchaType = url.indexOf("ssl.captcha.qq.com/TCaptcha.js") > 0 ? 1 : 0;
    },

    showCaptcha: function (capName, callbackFun) {
        if (!LoginV1.captchaType){
            //显示验证码
            var capOption={callback:callbackFun, type:"embed", firstvrytype:1};
            capInit(document.getElementById(capName), capOption);
            //回调函数：验证码页面关闭时回调
        } else if(LoginV1.captchaType == 1) {
            LoginV1.captchaObj = new TencentCaptcha( document.getElementById(capName), LoginV1.captchaAppId, callbackFun);
            LoginV1.captchaObj.show();
        }
    },

    refreshCaptcha: function (capName,callbackFun) {
        if (!LoginV1.captchaType){
            capRefresh();
        } else if(LoginV1.captchaType == 1) {
            LoginV1.captchaObj = new TencentCaptcha( document.getElementById(capName), LoginV1.captchaAppId, callbackFun);
            LoginV1.captchaObj.show();
        }
    },

    slideVerifyCodeLoginCallback : function (data) {
        if(data.code != 0){
            LoginV1.showError(data.message,data.code);
            return false;
        }

        LoginV1.loginCallback(data);
    },

    // 出滑动验证码 end


    setParam: function(key, value) {
        LoginV1.config[key] = value;
    },

    setParams: function(params) {
        for(var _key in params) {
            LoginV1.config[_key] = params[_key];
        }
    },

    buildBaseData: function() {
        return {
            appId: LoginV1.config.appId,
            areaId: LoginV1.config.areaId,
            source: LoginV1.config.source,
            returnurl: LoginV1.config.returnUrl,
            version: LoginV1.config.version,
            imei: LoginV1.config.imei,
            qimei: LoginV1.config.qimei,
            target: LoginV1.config.target,
            ticket: LoginV1.config.ticket,
            autotime: LoginV1.config.autoTime,
            jumpdm: LoginV1.config.jumpdm,
            ajaxdm: LoginV1.config.ajaxdm,
            auto: LoginV1.config.autoLoginFlag || 0,
            sdkversion: LoginV1.config.sdkversion
        };
    },

    buildBaseDataString: function() {
        var data = LoginV1.buildBaseData();
        data.popup = LoginV1.config.popup;
        var url = '';
        for (var key in data) {
            url += key + '=' + encodeURIComponent(data[key]) + '&';
        }
        return url;
    },

    notifyClose: function(e, data) {
        e && e.preventDefault();
        var e = {};
        e.action = "close";
        e.data = data;
        LoginV1.crossMessage(e),
            LoginV1.cancelLogin();
    },

    cancelLogin: function() {
        window.clearInterval(LoginV1.loginClock),
            window.clearTimeout(LoginV1.loginTimeout),
            LoginV1.loginInvalid = !0

        $('#div_qqlogin iframe').remove();
        $('#div_weixinlogin iframe').remove();
        LoginV1.currentType = 0;
    },

    isPopupStyle: function() {
        return LoginV1.config.popup === 1;
    },

    isUIStyle: function() {
        return LoginV1.config.popup !== 1;
    },

    qidianWrap: function() {
        var iframe = '<iframe id="qidian_login_frame" name="qidian_login_frame" frameborder="0" scrolling="no" width="100%" height="100%" src="' + LoginV1.config.qqBaseUrl + LoginV1.qqWrapUrl + '?' + LoginV1.buildBaseDataString() + '"></iframe>';
        $('#div_qidianlogin').html(iframe);
    },

    qqWrap: function() {
        if ($('#div_qqlogin iframe').length > 0) {
            $('#div_qqlogin iframe').show();
            return;
        }
        var iframe = '<iframe id="qq_login_frame" name="qq_login_frame" frameborder="0" scrolling="no" width="100%" height="100%" src="' + LoginV1.config.qqBaseUrl + LoginV1.qqWrapUrl + '?' + LoginV1.buildBaseDataString() + '"></iframe>';
        $('#div_qqlogin').html(iframe);
    },

    qq: function() {
        if ($('#div_qqlogin iframe').length > 0) {
            $('#div_qqlogin iframe').show();
            return;
        }

        $.getScript("https://xui.ptlogin2.qq.com/js/ptlogin_v1.js", function() {
            var target = 'self';
            var query = LoginV1.buildBaseDataString() + '&jump=' + (LoginV1.config.jump || 0);
            var url = 'https://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=780038201&target=' + target + '&proxy_url=' + encodeURIComponent(LoginV1.config.cssPath + '/js/proxy.js') + '&style=22&s_url=' + encodeURIComponent(LoginV1.config.qqBaseUrl + LoginV1.ajaxUrls.qqCallbackUrl + '?' + query);

            var qqIframe = LoginV1.qqWrapIframe;
            qqIframe.html('<iframe name="ui_qqlogin" id="ui_qqlogin" allowtransparency="true" scrolling="no" frameborder="0" width="100%" height="100%" style="top:0; left:0;' + "border:0px;" + '" src="' + url + '">');
            pt.setParams({
                "hide_close_icon":1
            });
        });
    },
    
    qqUnban:function(){
       if ($('#div_qqlogin iframe').length > 0) {
            $('#div_qqlogin iframe').show();
            return;
        }

        $.getScript("https://xui.ptlogin2.qq.com/js/ptlogin_v1.js", function() {
            var target = 'self';
            var query = LoginV1.buildBaseDataString() + '&jump=' + (LoginV1.config.jump || 0);
            var url = 'https://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=780038201&target=' + target + '&proxy_url=' + encodeURIComponent(LoginV1.config.cssPath + '/js/proxy.js') + '&style=22&s_url=' + encodeURIComponent(LoginV1.config.qqBaseUrl + LoginV1.ajaxUrls.qqUnbanCallbackUrl + '?' + query);

            var qqIframe = LoginV1.qqWrapIframe;
            qqIframe.html('<iframe name="ui_qqlogin" id="ui_qqlogin" allowtransparency="true" scrolling="no" frameborder="0" width="100%" height="100%" style="top:0; left:0;' + "border:0px;" + '" src="' + url + '">');
            pt.setParams({
                "hide_close_icon":1
            });
        });
    },

    weixin: function() {
        if ($('#div_weixinlogin iframe').length > 0) {
            $('#div_weixinlogin iframe').show();
            return;
        }
        var url = LoginV1.config.baseUrl + LoginV1.weixinWrapUrl + '?' + LoginV1.buildBaseDataString();

        var weixinWrapIframe = LoginV1.weixinWrapIframe;
        url += '&domain=' + encodeURIComponent(LoginV1.config.domain) + '&target=' + LoginV1.config.target + '&popup=' + LoginV1.config.popup;
        weixinWrapIframe.html('<iframe name="ui_weixinwraplogin" id="ui_weixinwraplogin" allowtransparency="true" scrolling="no" frameborder="0" width="100%" height="100%" style="top:0; left:0;' + "border-radius:5px;" + '" src="' + url + '">');
    },
    
    weixinAuth: function() {
        if ($('#div_weixinlogin iframe').length > 0) {
            $('#div_weixinlogin iframe').show();
            return;
        }
        var url = LoginV1.config.baseUrl + LoginV1.weixinAuthUrl + '?' + LoginV1.buildBaseDataString();

        var weixinWrapIframe = LoginV1.weixinWrapIframe;
        url += '&domain=' + encodeURIComponent(LoginV1.config.domain) + '&target=' + LoginV1.config.target + '&popup=' + LoginV1.config.popup;
        weixinWrapIframe.html('<iframe name="ui_weixinwraplogin" id="ui_weixinwraplogin" allowtransparency="true" scrolling="no" frameborder="0" width="100%" height="100%" style="top:0; left:0;' + "border-radius:5px;" + '" src="' + url + '">');
    },
    
    json2str: function(json) {
        var data = "";
        if ("undefined" != typeof JSON)
            data = JSON.stringify(json);
        else {
            var arr = [];
            for(var key in json) {
                if (typeof json[key] == 'object') {
                    arr.push('"' + key + '":' + LoginV1.json2str(json[key]) + '');
                } else {
                    arr.push('"' + key + '":"' + json[key] + '"');
                }
            }
            data = "{" + arr.join(",") + "}"
        }

        return data;
    },

    uiStyleAgent: function(t) {
        var e = /^https:\/\/ssl./.test(location.href),
            i = encodeURIComponent(LoginV1.json2str(t)),
            n = document.location.protocol + "//" + (e ? "ssl." : "") + "ui.ptlogin2." + LoginV1.domain + "/cross_proxy.html#" + i,
            o = $("#proxy");
        o && (o.html('<iframe  allowtransparency="true" scrolling="no" frameborder="0" width="1" height="1" src="' + n + '">'));
    },

    crossMessage: function(t) {
        if (LoginV1.isUIStyle && LoginV1.uiStyleAgent(t), "undefined" != typeof window.postMessage)
            window.parent.postMessage(LoginV1.json2str(t), "*");
        else if (LoginV1.agentUrl) {
            var e = LoginV1.agentUrl + "#";

            for (var i in t)
                e += i + "=" + t[i] + "&";
            $("#proxy") && ($("#proxy").html('<iframe src="' + encodeURI(e) + '"></iframe>'));
        } else try {
            navigator.ywlogincallback && navigator.ywlogincallback(LoginV1.json2str(t))
        } catch (n) {
            console.log("ptlogincallback " + n.message)
        }
    },

    getCookie: function(name) {
        var arg = name + '=';
        var alen = arg.length;
        var clen = document.cookie.length,
            i = 0;
        while (i < clen) {
            var j = i + alen;
            if (document.cookie.substring(i, j) == arg) {
                var _endstr = document.cookie.indexOf(';', j);
                if (_endstr == -1) _endstr = document.cookie.length;
                return unescape(document.cookie.substring(j, _endstr));
            }
            i = document.cookie.indexOf(' ', i) + 1;
            if (i == 0) break;
        };
        return null;
    },

    setCookie: function(name, value) {
        var argv = LoginV1.setCookie.arguments;
        var argc = LoginV1.setCookie.arguments.length;
        var expires = (argc > 2) ? argv[2] : null;
        var path = (argc > 3) ? argv[3] : null;
        var domain = (argc > 4) ? argv[4] : null;
        var secure = (argc > 5) ? argv[5] : false;
        var samesite = (argc > 6) ? 'SameSite=' + argv[6] : false;
        
        document.cookie = name + '=' + escape(value) + ((expires == null) ? '' : ('; expires=' + expires.toGMTString())) + ((path == null) ? '' : ('; path=' + path)) + ((domain == null) ? '' : ('; domain=' + domain)) + ((samesite != false) ? '; ' + samesite : '') + ((secure == true) ? '; secure' : '');
    },

    deleteCookie: function(name) {
        var domain = LoginV1.domain;
        if (arguments != null && arguments.length >= 2) {
            domain = arguments[1];
        }
        LoginV1.setCookie(name, -1, (new Date()).AddDays(-1), '/', domain);
    },

    redirect: function(ticket, ywGuid, ywOpenId) {
        var url = LoginV1.config.returnUrl;
        if (url.indexOf('?') === -1) {
            url += '?';
        } else {
            url += '&';
        }
        var data = {
            'code': 0,
            'data': {
                'ywOpenId': ywOpenId,
                'ywGuid': ywGuid,
                'ticket': ticket
            }
        };

        if (LoginV1.config.popup == 1 && LoginV1.config.target == 'callback') {
            LoginV1.notifyClose(null, data);
        } else {
            if (LoginV1.config.ticket != '0' && LoginV1.config.ticket != '') {
                url += 'ticket=' + ticket + '&ywguid=' + ywGuid + '&ywOpenId=' + ywOpenId + '&';
            }
            url = url.substr(0, url.length - 1);
            try {
                window.opener.jump(url, data);
                LoginV1.closeWin();
            } catch (e) {
                try {
                    window[LoginV1.config.target === 'iframe' ? 'self' : 'top'].location = url;
                } catch(e) {
                    window.parent.topjump(url);
                }
            }
        }
    },

    showError: function(msg, code) {
        $('.error-tip').html(msg).removeClass('hidden');
        if (LoginV1.currentType == 0 || LoginV1.currentType == 1 ) {
            LoginV1.nextAction = 0;
            $('#j_codeLogin').hide();
            $('#j_normalLogin').show();

        }
        if (LoginV1.currentType == 11) {
            LoginV1.nextAction = 0;
            $('#j-loginInputMode').show();     // 显示登录框
            $('#j-switchLoginMode').show();    // 显示右下角二维码
            $('#j-slideCheck').hide();         // 隐藏滑动模块
        }
    },

    hideError: function() {
        $('.error-tip').html('').addClass('hidden');
    },

    json: function(url, data, callback, method) {
        LoginV1.ajaxProxy(
            url, data, callback, method
        );
        return;
        $.ajax({
            type: method || "post",
            url: url,
            data: data,
            dataType: "json",
            success: callback || function (data) {},
            timeout: 3000
        });
    },

    jsonp: function(url, data, success) {
        data.format = 'jsonp';
        $.ajax({
            type: "get",
            url: url,
            data: data,
            dataType: "jsonp",
            success: success || function() {},
            error: function(xhr, status, err) {
                if (err) {
                    LoginV1.ajaxLock = false;
                    //if (url.toLowerCase().indexOf('checkstatus') == -1) {
                    //    LoginV1.showError('出错啦，请稍后再试');
                    //}
                }
            },
            timeout: 12000,
            complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
                if (XMLHttpRequest.status != 200) {
                    if (url.toLowerCase().indexOf('checkstatus') == -1) {
                        LoginV1.showError('网络异常，请稍后再试');
                    }
                    LoginV1.ajaxLock = false;
                }
            }
        });
    },

    ajaxProxy: function(url, data, callback, method) {
        document.domain="qidian.com";
        var proxyId = '__yw_login_js_proxy__';
        var proxyUrl = LoginV1.config.cssPath + '/js/proxy.js';
        var iframe = document.getElementById(proxyId);
        if (!iframe) {
            iframe = document.createElement('iframe');
            iframe.id = proxyId;
            iframe.src = proxyUrl;
            iframe.style.display = 'none';
            document.body.insertBefore(iframe, document.body.childNodes[0]);
        }

        var iserroraccess = 0;
        try { if (iframe.contentWindow.ajax) { } } catch (e) { iserroraccess = 1 };
        if (iserroraccess == 0 && iframe.contentWindow.ajax) {
            new iframe.contentWindow.ajax(url, data, callback, method);
        }
    },

    baiduLogin: function(data) {
        addStat('baidu');
        LoginV1.openerJump(data, LoginV1.getReturnUrl(data));
    },

    alipayLogin: function(data) {
        addStat('alipay');
        LoginV1.openerJump(data, LoginV1.getReturnUrl(data));
    },

    sinaLogin: function(data) {
        addStat('sina');
        LoginV1.openerJump(data, LoginV1.getReturnUrl(data));
    },

    qqLogin: function(data) {
        addStat('qq');
        if ((window.opener == null || window.opener == self) && LoginV1.config.target == 'top') {
            var url = LoginV1.getReturnUrl(data);
            top.location = url;
            return;
        }
        LoginV1.openerJump(data, LoginV1.getReturnUrl(data));
    },

    gotoJumpUrl: function(data, logintype) {
        var url = LoginV1.getReturnUrl(data);
        var ticket = data.data.ticket || '';
        var ywGuid = data.data.ywGuid || '';
        var ywOpenId = data.data.ywOpenId || '';

        var jumpUrl = LoginV1.config.jumpUrl || 'https://ptlogin.yuewen.com/login/redirect';
        jumpUrl += '?appid=' + LoginV1.config.appId + '&ticket=' + ticket + '&ywguid=' + ywGuid + '&ywopenid=' + ywOpenId + '&returnurl=' + encodeURIComponent(url) + '&jumpdm=' + LoginV1.config.jumpdm +
            '&logintype=' + logintype;
        location.href = jumpUrl;
    },

    openerJump: function(data, url) {
        LoginV1.changeDomain();
        if (url == undefined) {
            url = LoginV1.getReturnUrl(data);
        }
        if (window.opener != null && window.opener != self) {
            try{
                window.opener.jump(url, data);
                window.opener = null;
                window.open("","_self");

                LoginV1.closeWin();
                return;
            } catch (e) {
                try{
                    LoginV1.gotoJumpUrl(data, 'redirect');
                } catch (e) {
                }
            };
        }

        location.href = url;
    },

    getReturnUrl: function(data) {
        var url = LoginV1.config.returnUrl || 'http://www.qidian.com';
        var ticket = data.data.ticket || '';
        var ywGuid = data.data.ywGuid || '';
        var ywOpenId = data.data.ywOpenId || '';

        if (ticket != '') {
            if (url.indexOf('?') == -1) {
                url += '?';
            } else {
                url += '&';
            }
            url += 'ticket=' + ticket + '&ywguid=' + ywGuid + '&ywopenid=' + ywOpenId;
        }

        return url;
    },

    changeDomain: function() {
        var domain = document.domain.split('.');
        var length = domain.length;
        if (length >= 2) {
            domain = domain[length - 2] + '.' + domain[length - 1];
            document.domain = domain;
        } else {
            document.domain = 'qidian.com';
        }
    },

    // 非起点域名的中转页面
    unQdRedirect: function(data) {
        LoginV1.changeDomain();
        var url = LoginV1.getReturnUrl(data);
        var logintype = LoginV1.getUrlParam('logintype');
        try {
            switch (logintype) {
                case 'qqpt':
                    // qq跳转过来的中转页是两个parent
                    window.parent.parent.jump(url, data);
                    break;
                default:
                    // 其他第三方登录过来的中转页是一个parent
                    LoginV1.openerJump(data, url);
                    break;
            }

        } catch (e) {
            location.href = url;
        }
    },

    qqptLogin: function(data) {
        addStat('qq');
        var url = LoginV1.getReturnUrl(data);
        if (LoginV1.config.target == 'top') {
            top.location = url;
            return;
        }

        LoginV1.changeDomain();
        window.parent.parent.jump(url, data);
    },

    // 弹窗情况需要，先跳转至中转页，top情况可直接跳转
    weixinLogin: function(data) {
        if (LoginV1.config.code != 0) { // 表示登录失败
            $('#error').html(LoginV1.config.message || '登录失败，请选用其他方式登录');
            return;
        }
        addStat('weixin');
        var url = LoginV1.getReturnUrl(data);
        if (LoginV1.config.target == 'top' && (window.opener == null || window.opener == self)) {
            top.location = url;
            return;
        }

        LoginV1.openerJump(data, url);
    },

    jump: function(data) {
        var loginType = LoginV1.config.loginType;
        if ((loginType == 'qqptlogin' || loginType == 'qqlogin') && LoginV1.config.code != 0) { // 表示登录失败
            var message = LoginV1.config.message || '登录失败';
            var message = message + '，请<span onclick="LoginV1.reload()" style="color:#3481cf;cursor:pointer;">刷新</span>后重试';
            setTimeout('LoginV1.reload()',3000);
            $('#error').html(message);
            return;
        }

        if (data.data.needSecureCookie) {
            var domain = LoginV1.config.secureDomain;
            LoginV1.changeDomain(domain);
            if (LoginV1.config.ywGuidShow && data.data.ywGuid) LoginV1.setCookie('ywguid', data.data.ywGuid, null, '/', domain, true, 'None');
            if (data.data.ywKey) LoginV1.setCookie('ywkey', data.data.ywKey, null, '/', domain, true, 'None');
            if (data.data.ywOpenId) LoginV1.setCookie('ywopenid', data.data.ywOpenId, null, '/', domain, true, 'None');
            
            if (data.data.alk !== undefined && data.data.alk != '' && domain == '.yuewen.com') {
                var days = data.data.alkts || 15;
                LoginV1.setCookie('alk', data.data.alk, (new Date()).AddDays(days), '/', domain, true, 'None');
            }
        }

        //  查看是否需要302跳转，如果需要的话，先执行302跳转
        if (data['data']['302url']) {
            try {
                window.opener.jump(data['data']['302url'], data['data']);
                LoginV1.closeWin();
                
            } catch (e) {
                if ($('#subloginFrame').length > 0) {
                    $('#subloginFrame').attr('src', data['data']['302url']);
                } else {
                    location.href = data['data']['302url'];
                }
            }

            return;
        }

        switch (LoginV1.config.loginType) {
            case 'sinalogin':
                LoginV1.sinaLogin(data);
                break;
            case 'alipaylogin':
                LoginV1.alipayLogin(data);
                break;
            case 'baidulogin':
                LoginV1.baiduLogin(data);
                break;
            case 'qqptlogin':
                LoginV1.qqptLogin(data);
                break;
            case 'qqlogin': // qq 联合登录
                LoginV1.qqLogin(data);
                break;
            case 'weixinlogin':
                LoginV1.weixinLogin(data);
                break;
            case 'redirect':
                LoginV1.unQdRedirect(data);
                break;
        }
    },

    isSupportPlaceholder: function() {
        var input = document.createElement('input');
        return 'placeholder' in input;
    },

    closeWin: function() {
        var browser = navigator.appName;
        if (browser=="Netscape") {
            var opened=window.open('about:blank','_self');
            opened.opener=null;
            opened.close();
        }
        else if (browser=="Microsoft Internet Explorer") {
            window.opener=null;
            window.open('','_self');
            window.close();
        } else {
            window.close();
        }
    }
};

Date.prototype.AddDays = function(interval) {
    var dateObj = this;
    var millisecond = 1;
    var second = millisecond * 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var year = day * 365;

    var newDate;
    var dVal = new Date(dateObj);
    dVal = dVal.valueOf();

    newDate = new Date(dVal + day * interval);
    newDate = new Date(newDate);
    return newDate;
};

String.prototype.trim = function() {
    if (this == '' || this == null || this == undefined) return '';
    return this.replace(/(^\s*)|(\s*$)/g, "");
};

function jump(url, data) {
    try {
        window.opener.jump(url, data);
        LoginV1.closeWin();
    } catch (e) {

    }

    //兼容IE7，IE7不支持window.parent.postMessage
    if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0") {
        if(LoginV1.config.target == 'callback') LoginV1.config.target = 'iframe';
    }

    if (LoginV1.config.target == 'top') {
        top.location = url;
        return;
    }
    if (LoginV1.config.target == 'callback') {
        LoginV1.notifyClose(null, data);
    } else {
        if (url.indexOf('.com/login/sublogin') > 0 && $('#subloginFrame').length > 0) {
            $('#subloginFrame').attr('src', url);
        } else {
            location.href = url;
        }
    }
}

function rsa_encryption(password) {
    var rsa = new RSAKey();
    rsa.setPublic(LoginV1.config.modulus, LoginV1.config.exponent);  // 生成公钥
    var encrypt_password = rsa.encrypt(password);   // 加密数据
    if (encrypt_password.length > 50) {
        return encrypt_password ;
    }else{
        return password ;
    }
}

function addStat(name){
    try{
        if(Statistics == 'undefined' || Statistics == null) return false;
        Statistics.loginSuc(name);
    }catch (e) {}
}

function topjump(url) {
    top.location = url;
}var GPhoneArea = {"a":[{"country":"Afghanistan","chineseName":"\u963f\u5bcc\u6c57","shortName":"AF","code":"93","area":"\u4e9a\u6d32","section":"a"},{"country":"Albania","chineseName":"\u963f\u5c14\u5df4\u5c3c\u4e9a","shortName":"AL","code":"355","area":"\u6b27\u6d32","section":"a"},{"country":"Algeria","chineseName":"\u963f\u5c14\u53ca\u5229\u4e9a","shortName":"DZ","code":"213","area":"\u6b27\u6d32","section":"a"},{"country":"Andorra","chineseName":"\u5b89\u9053\u5c14\u5171\u548c\u56fd","shortName":"AD","code":"376","area":"\u5927\u6d0b\u6d32","section":"a"},{"country":"Angola","chineseName":"\u5b89\u54e5\u62c9","shortName":"AO","code":"244","area":"\u975e\u6d32","section":"a"},{"country":"Anguilla","chineseName":"\u5b89\u572d\u62c9\u5c9b","shortName":"AI","code":"1264","area":"\u7f8e\u6d32","section":"a"},{"country":"Antigua &amp; Barbuda","chineseName":"\u5b89\u63d0\u74dc\u53ca\u5df4\u5e03\u8fbe","shortName":"ATG","code":"1268","area":"\u5317\u7f8e\u6d32","section":"a"},{"country":"Argentina","chineseName":"\u963f\u6839\u5ef7","shortName":"AR","code":"54","area":"\u5357\u7f8e\u6d32","section":"a"},{"country":"Aruba","chineseName":"\u963f\u9c81\u5df4","shortName":"ALB","code":"297","area":"\u5357\u7f8e\u6d32","section":"a"},{"country":"Austria","chineseName":"\u5965\u5730\u5229","shortName":"AT","code":"43","area":"\u6b27\u6d32","section":"a"},{"country":"Azerbaijan","chineseName":"\u963f\u585e\u62dc\u7586","shortName":"AZ","code":"994","area":"\u4e9a\u6d32","section":"a"},{"country":"Egypt","chineseName":"\u57c3\u53ca","shortName":"EG","code":"20","area":"\u975e\u6d32","section":"a"},{"country":"Estonia","chineseName":"\u7231\u6c99\u5c3c\u4e9a","shortName":"EE","code":"372","area":"\u6b27\u6d32","section":"a"},{"country":"Ethiopia","chineseName":"\u57c3\u585e\u4fc4\u6bd4\u4e9a","shortName":"ET","code":"251","area":"\u975e\u6d32","section":"a"},{"country":"Ireland","chineseName":"\u7231\u5c14\u5170(\u5c9b)","shortName":"IE","code":"353","area":"\u6b27\u6d32","section":"a"},{"country":"Oman","chineseName":"\u963f\u66fc","shortName":"OM","code":"968","area":"\u4e9a\u6d32","section":"a"},{"country":"United Arab Emirates","chineseName":"\u963f\u8054\u914b","shortName":"AE","code":"971","area":"\u4e9a\u6d32","section":"a"}],"b":[{"country":"Bahamas","chineseName":"\u5df4\u54c8\u9a6c","shortName":"BS","code":"1242","area":"\u5317\u7f8e\u6d32","section":"b"},{"country":"Bahrain","chineseName":"\u5df4\u6797","shortName":"BH","code":"973","area":"\u4e9a\u6d32","section":"b"},{"country":"Bangladesh","chineseName":"\u5b5f\u52a0\u62c9\u5171\u548c\u56fd","shortName":"BD","code":"880","area":"\u4e9a\u6d32","section":"b"},{"country":"Barbados","chineseName":"\u5df4\u5df4\u591a\u65af","shortName":"BB","code":"1246","area":"\u7f8e\u6d32","section":"b"},{"country":"Belarus","chineseName":"\u767d\u4fc4\u7f57\u65af","shortName":"BY","code":"375","area":"\u6b27\u6d32","section":"b"},{"country":"Belgium","chineseName":"\u6bd4\u5229\u65f6","shortName":"BE","code":"32","area":"\u6b27\u6d32","section":"b"},{"country":"Belize","chineseName":"\u4f2f\u5229\u5179","shortName":"BZ","code":"501","area":"\u7f8e\u6d32","section":"b"},{"country":"Benin","chineseName":"\u8d1d\u5b81","shortName":"BJ","code":"229","area":"\u975e\u6d32","section":"b"},{"country":"Bermuda","chineseName":"\u767e\u6155\u5927","shortName":"BMD","code":"1441","area":"\u5317\u7f8e\u6d32","section":"b"},{"country":"Bhutan","chineseName":"\u4e0d\u4e39","shortName":"BHU","code":"975","area":"\u4e9a\u6d32","section":"b"},{"country":"Bolivia","chineseName":"\u73bb\u5229\u7ef4\u4e9a","shortName":"BO","code":"591","area":"\u5357\u7f8e\u6d32","section":"b"},{"country":"Bosnia and Herzegovina","chineseName":"\u6ce2\u65af\u5c3c\u4e9a\u548c\u9ed1\u585e\u54e5\u7ef4\u90a3","shortName":"BIH","code":"387","area":"\u6b27\u6d32","section":"b"},{"country":"Botswana","chineseName":"\u535a\u8328\u74e6\u7eb3","shortName":"BW","code":"267","area":"\u975e\u6d32","section":"b"},{"country":"Brazil","chineseName":"\u5df4\u897f","shortName":"BR","code":"55","area":"\u7f8e\u6d32","section":"b"},{"country":"British Virgin Islands","chineseName":"\u82f1\u5c5e\u7ef4\u4eac\u7fa4\u5c9b","shortName":"BVI","code":"1284","area":"\u7f8e\u6d32","section":"b"},{"country":"Bulgaria","chineseName":"\u4fdd\u52a0\u5229\u4e9a","shortName":"BG","code":"359","area":"\u6b27\u6d32","section":"b"},{"country":"Burkina Faso","chineseName":"\u5e03\u57fa\u7eb3\u6cd5\u7d22\u56fd","shortName":"BFA","code":"226","area":"\u975e\u6d32","section":"b"},{"country":"Burundi","chineseName":"\u5e03\u9686\u8fea","shortName":"BI","code":"257","area":"\u975e\u6d32","section":"b"},{"country":"Iceland","chineseName":"\u51b0\u5c9b","shortName":"IS","code":"354","area":"\u6b27\u6d32","section":"b"},{"country":"Pakistan","chineseName":"\u5df4\u57fa\u65af\u5766","shortName":"PK","code":"92","area":"\u4e9a\u6d32","section":"b"},{"country":"Palestine\/Israel","chineseName":"\u5df4\u52d2\u65af\u5766","shortName":"PS","code":"970","area":"\u4e9a\u6d32","section":"b"},{"country":"Panama","chineseName":"\u5df4\u62ff\u9a6c","shortName":"PA","code":"507","area":"\u7f8e\u6d32","section":"b"},{"country":"Papua New Guinea","chineseName":"\u5df4\u5e03\u4e9a\u65b0\u51e0\u5185\u4e9a","shortName":"PNG","code":"675","area":"\u5927\u6d0b\u6d32","section":"b"},{"country":"Paraguay","chineseName":"\u5df4\u62c9\u572d","shortName":"PY","code":"595","area":"\u7f8e\u6d32","section":"b"},{"country":"Puerto Rico","chineseName":"\u6ce2\u591a\u9ece\u5404","shortName":"PR","code":"1787","area":"\u7f8e\u6d32","section":"b"}],"c":[{"country":"Equatorial Guinea","chineseName":"\u8d64\u9053\u51e0\u5185\u4e9a","shortName":"GEQ","code":"240","area":"\u975e\u6d32","section":"c"},{"country":"Korea Democratic Rep","chineseName":"\u671d\u9c9c","shortName":"KP","code":"850","area":"\u4e9a\u6d32","section":"c"}],"d":[{"country":"Denmark","chineseName":"\u4e39\u9ea6","shortName":"DK","code":"45","area":"\u6b27\u6d32","section":"d"},{"country":"Dominica","chineseName":"\u591a\u7c73\u5c3c\u514b","shortName":"DMA","code":"1767","area":"\u5317\u7f8e\u6d32","section":"d"},{"country":"Dominican Republic","chineseName":"\u591a\u660e\u5c3c\u52a0\u5171\u548c\u56fd","shortName":"DOM","code":"1809","area":"\u5317\u7f8e\u6d32","section":"d"},{"country":"East Timor","chineseName":"\u4e1c\u5e1d\u6c76","shortName":"TMP","code":"670","area":"\u4e9a\u6d32","section":"d"},{"country":"Germany","chineseName":"\u5fb7\u56fd","shortName":"DEU","code":"49","area":"\u6b27\u6d32","section":"d"},{"country":"Togo","chineseName":"\u591a\u54e5","shortName":"TG","code":"228","area":"\u5927\u6d0b\u6d32","section":"d"}],"e":[{"country":"Ecuador","chineseName":"\u5384\u74dc\u591a\u5c14","shortName":"EC","code":"593","area":"\u7f8e\u6d32","section":"e"},{"country":"Russia","chineseName":"\u4fc4\u7f57\u65af","shortName":"RU","code":"7","area":"\u6b27\u6d32","section":"e"},{"country":"Eritrea","chineseName":"\u5384\u7acb\u7279\u91cc\u4e9a","shortName":"ER","code":"291","area":"\u975e\u6d32","section":"e"}],"f":[{"country":"Cape Verde","chineseName":"\u4f5b\u5f97\u89d2","shortName":"CPV","code":"238","area":"\u975e\u6d32","section":"f"},{"country":"Faroe Islands","chineseName":"\u6cd5\u7f57\u7fa4\u5c9b","shortName":"FLA","code":"298","area":"\u6b27\u6d32","section":"f"},{"country":"Fiji Islands                                      ","chineseName":"\u6590\u6d4e","shortName":"FJI","code":"679","area":"\u5927\u6d0b\u6d32","section":"f"},{"country":"Finland","chineseName":"\u82ac\u5170","shortName":"FI","code":"358","area":"\u6b27\u6d32 ","section":"f"},{"country":"France","chineseName":"\u6cd5\u56fd","shortName":"FRA","code":"33","area":"\u6b27\u6d32","section":"f"},{"country":"French Guiana","chineseName":"\u6cd5\u5c5e\u572d\u4e9a\u90a3","shortName":"GF","code":"594","area":"\u7f8e\u6d32","section":"f"},{"country":"French Polynesia","chineseName":"\u6cd5\u5c5e\u6ce2\u5229\u5c3c\u897f\u4e9a","shortName":"PF","code":"689","area":"\u5927\u6d0b\u6d32","section":"f"},{"country":"French West Indies","chineseName":"\u6cd5\u5c5e\u897f\u5370\u5ea6\u7fa4\u5c9b","shortName":"SIA","code":"809","area":"\u5317\u7f8e\u6d32","section":"f"},{"country":"Philippines","chineseName":"\u83f2\u5f8b\u5bbe","shortName":"PH","code":"63","area":"\u4e9a\u6d32","section":"f"},{"country":"Poland","chineseName":"\u6ce2\u5170","shortName":"PL","code":"48","area":"\u6b27\u6d32","section":"f"}],"g":[{"country":"Colombia","chineseName":"\u54e5\u4f26\u6bd4\u4e9a","shortName":"CO","code":"57","area":"\u5357\u7f8e\u6d32","section":"g"},{"country":"Congo","chineseName":"\u521a\u679c","shortName":"CG","code":"242","area":"\u975e\u6d32","section":"g"},{"country":"Congo Democratic Repu","chineseName":"\u521a\u679c\u6c11\u4e3b\u5171\u548c\u56fd","shortName":"COD","code":"243","area":"\u975e\u6d32","section":"g"},{"country":"Costa Rica","chineseName":"\u54e5\u65af\u8fbe\u9ece\u52a0","shortName":"CR","code":"506","area":"\u7f8e\u6d32","section":"g"},{"country":"Cuba","chineseName":"\u53e4\u5df4","shortName":"CU","code":"53","area":"\u7f8e\u6d32","section":"g"},{"country":"Gambia","chineseName":"\u5188\u6bd4\u4e9a","shortName":"GM","code":"220","area":"\u975e\u6d32","section":"g"},{"country":"Georgia","chineseName":"\u683c\u9c81\u5409\u4e9a","shortName":"GE","code":"995","area":"\u4e9a\u6d32","section":"g"},{"country":"Greenland","chineseName":"\u683c\u9675\u5170\u5c9b","shortName":"GLA","code":"299","area":"\u7f8e\u6d32","section":"g"},{"country":"Grenada","chineseName":"\u683c\u6797\u7eb3\u8fbe","shortName":"GD","code":"1473","area":"\u7f8e\u6d32","section":"g"},{"country":"Guadeloupe","chineseName":"\u74dc\u5fb7\u7f57\u666e\u5c9b","shortName":"GDLP","code":"590","area":"\u7f8e\u6d32","section":"g"},{"country":"Guam","chineseName":"\u5173\u5c9b","shortName":"GU","code":"1671","area":"\u5927\u6d0b\u6d32","section":"g"},{"country":"Guernsey","chineseName":"\u683c\u6069\u897f\u5c9b","shortName":"GH","code":"44","area":"\u6b27\u6d32","section":"g"},{"country":"GUINEA (BISSAU)","chineseName":"\u757f\u5c3c","shortName":"\u975e\u6d32","code":"245","area":"\u975e\u6d32","section":"g"},{"country":"Guyana","chineseName":"\u572d\u4e9a\u90a3","shortName":"GY","code":"592","area":"\u7f8e\u6d32","section":"g"}],"h":[{"country":"Haiti","chineseName":"\u6d77\u5730","shortName":"HT","code":"509","area":"\u7f8e\u6d32","section":"h"},{"country":"Honduras","chineseName":"\u6d2a\u90fd\u62c9\u65af","shortName":"HN","code":"504","area":"\u7f8e\u6d32","section":"h"},{"country":"Kazakhstan","chineseName":"\u54c8\u8428\u514b\u65af\u5766","shortName":"KZ","code":"7","area":"\u4e9a\u6d32","section":"h"},{"country":"Caribisch Nederland","chineseName":"\u8377\u5170\u52a0\u52d2\u6bd4","shortName":"BQ","code":"599","area":"\u6b27\u6d32","section":"h"},{"country":"Netherlands","chineseName":"\u8377\u5170","shortName":"NL","code":"31","area":"\u6b27\u6d32","section":"h"},{"country":"South Korea","chineseName":"\u97e9\u56fd","shortName":"SK","code":"82","area":"\u4e9a\u6d32","section":"h"}],"j":[{"country":"Cambodia","chineseName":"\u67ec\u57d4\u5be8","shortName":"KHM","code":"855","area":"\u4e9a\u6d32","section":"j"},{"country":"Canada","chineseName":"\u52a0\u62ff\u5927","shortName":"CA","code":"1","area":"\u7f8e\u6d32","section":"j"},{"country":"Czech Republic","chineseName":"\u6377\u514b\u5171\u548c\u56fd","shortName":"CZ","code":"420","area":"\u6b27\u6d32","section":"j"},{"country":"Kiribati","chineseName":"\u57fa\u91cc\u5df4\u65af","shortName":"KI","code":"686","area":"\u5927\u6d0b\u6d32","section":"j"},{"country":"Djibouti","chineseName":"\u5409\u5e03\u63d0","shortName":"DJ","code":"253","area":"\u975e\u6d32","section":"j"},{"country":"Gabonese Republic","chineseName":"\u52a0\u84ec","shortName":"GAB","code":"241","area":"\u975e\u6d32","section":"j"},{"country":"Ghana","chineseName":"\u52a0\u7eb3","shortName":"GH","code":"233","area":"\u975e\u6d32","section":"j"},{"country":"Guinea","chineseName":"\u51e0\u5185\u4e9a","shortName":"GN","code":"224","area":"\u975e\u6d32","section":"j"},{"country":"Kyrgyzstan","chineseName":"\u5409\u5c14\u5409\u65af\u65af\u5766","shortName":"KG","code":"996","area":"\u4e9a\u6d32","section":"j"},{"country":"Zimbabwe","chineseName":"\u6d25\u5df4\u5e03\u97e6","shortName":"ZW","code":"263","area":"\u975e\u6d32","section":"j"}],"k":[{"country":"Cameroon","chineseName":"\u5580\u9ea6\u9686","shortName":"CM","code":"237","area":"\u975e\u6d32","section":"k"},{"country":"Cayman Islands","chineseName":"\u5f00\u66fc\u7fa4\u5c9b","shortName":"CYM","code":"1345","area":"\u7f8e\u6d32","section":"k"},{"country":"Comoros","chineseName":"\u79d1\u6469\u6d1b","shortName":"COM","code":"269","area":"\u975e\u6d32","section":"k"},{"country":"Cook Islands","chineseName":"\u5e93\u514b\u7fa4\u5c9b","shortName":"COK","code":"682","area":"\u5927\u6d0b\u6d32","section":"k"},{"country":"Cote d&#039;Ivoire","chineseName":"\u79d1\u7279\u8fea\u74e6\u5171\u548c\u56fd ","shortName":"CIV","code":"225","area":"\u975e\u6d32","section":"k"},{"country":"Croatia","chineseName":"\u514b\u7f57\u5730\u4e9a\u5171\u548c\u56fd","shortName":"HRV","code":"385","area":"\u6b27\u6d32","section":"k"},{"country":"Kenya","chineseName":"\u80af\u5c3c\u4e9a","shortName":"KE","code":"254","area":"\u975e\u6d32","section":"k"},{"country":"Kuwait","chineseName":"\u79d1\u5a01\u7279","shortName":"KW","code":"965","area":"\u4e9a\u6d32","section":"k"},{"country":"Qatar","chineseName":"\u5361\u5854\u5c14","shortName":"QA","code":"974","area":"\u4e9a\u6d32","section":"k"}],"l":[{"country":"Latvia","chineseName":"\u62c9\u8131\u7ef4\u4e9a","shortName":"LV","code":"371","area":"\u6b27\u6d32","section":"l"},{"country":"Lesotho","chineseName":"\u83b1\u7d22\u6258","shortName":"LS","code":"266","area":"\u975e\u6d32","section":"l"},{"country":"Liberia","chineseName":"\u5229\u6bd4\u91cc\u4e9a","shortName":"LR","code":"231","area":"\u975e\u6d32","section":"l"},{"country":"Libya","chineseName":"\u5229\u6bd4\u4e9a","shortName":"LY","code":"218","area":"\u975e\u6d32","section":"l"},{"country":"Liechenstein","chineseName":"\u5217\u652f\u6566\u58eb\u767b","shortName":"LIE","code":"423","area":"\u6b27\u6d32","section":"l"},{"country":"Lithuania","chineseName":"\u7acb\u9676\u5b9b","shortName":"LT","code":"370","area":"\u6b27\u6d32","section":"l"},{"country":"Luxembourg","chineseName":"\u5362\u68ee\u5821","shortName":"LU","code":"352","area":"\u6b27\u6d32","section":"l"},{"country":"Reunion","chineseName":"\u7559\u5c3c\u6c6a","shortName":"0","code":"262","area":"\u6b27\u6d32","section":"l"},{"country":"Romania","chineseName":"\u7f57\u9a6c\u5c3c\u4e9a","shortName":"RO","code":"40","area":"\u6b27\u6d32","section":"l"},{"country":"Rwanda","chineseName":"\u5362\u65fa\u8fbe","shortName":"RWA","code":"250","area":"\u975e\u6d32","section":"l"}],"m":[{"country":"American Samoa","chineseName":"\u7f8e\u5c5e\u8428\u6469\u4e9a\u7fa4\u5c9b","shortName":"ASA","code":"1684","area":"\u7f8e\u6d32","section":"m"},{"country":"Micronesia","chineseName":"\u5bc6\u514b\u7f57\u5c3c\u897f\u4e9a","shortName":"FM","code":"691","area":"\u5927\u6d0b\u6d32","section":"m"},{"country":"Marshall Islands","chineseName":"\u9a6c\u7ecd\u5c14\u7fa4\u5c9b","shortName":"MH","code":"692","area":"\u5927\u6d0b\u6d32","section":"m"},{"country":"Falkland Islands","chineseName":"\u9a6c\u5c14\u7ef4\u7eb3\u65af\u7fa4\u5c9b","shortName":"MEN","code":"500","area":"\u5357\u7f8e\u6d32","section":"m"},{"country":"Isle of Man","chineseName":"\u9a6c\u6069\u5c9b","shortName":"MEA","code":"44","area":"\u6b27\u6d32","section":"m"},{"country":"Macedonia","chineseName":"\u9a6c\u5176\u987f","shortName":"MKD","code":"389","area":"\u6b27\u6d32","section":"m"},{"country":"Madagascar","chineseName":"\u9a6c\u8fbe\u52a0\u65af\u52a0","shortName":"MG","code":"261","area":"\u975e\u6d32","section":"m"},{"country":"Malawi","chineseName":"\u9a6c\u62c9\u7ef4","shortName":"MW","code":"265","area":"\u975e\u6d32","section":"m"},{"country":"Maldives","chineseName":"\u9a6c\u5c14\u4ee3\u592b","shortName":"MV","code":"960","area":"\u4e9a\u6d32","section":"m"},{"country":"Mali","chineseName":"\u9a6c\u91cc","shortName":"ML","code":"223","area":"\u975e\u6d32","section":"m"},{"country":"Malta","chineseName":"\u9a6c\u8033\u4ed6","shortName":"MT","code":"356","area":"\u6b27\u6d32","section":"m"},{"country":"Martinique","chineseName":"\u9a6c\u63d0\u5c3c\u514b\u5c9b","shortName":"0","code":"596","area":"\u975e\u6d32","section":"m"},{"country":"Mauritania","chineseName":"\u6bdb\u91cc\u5854\u5c3c\u4e9a","shortName":"MRT","code":"222","area":"\u975e\u6d32","section":"m"},{"country":"Mauritius","chineseName":"\u6bdb\u91cc\u6c42\u65af","shortName":"MU","code":"230","area":"\u975e\u6d32","section":"m"},{"country":"Mexico","chineseName":"\u58a8\u897f\u54e5","shortName":"MX","code":"52","area":"\u5317\u7f8e\u6d32","section":"m"},{"country":"Moldova","chineseName":"\u6469\u5c14\u591a\u74e6","shortName":"MDA","code":"373","area":"\u6b27\u6d32","section":"m"},{"country":"Monaco","chineseName":"\u6469\u7eb3\u54e5\u516c\u56fd ","shortName":"MC","code":"377","area":"\u6b27\u6d32","section":"m"},{"country":"Mongolia","chineseName":"\u8499\u53e4","shortName":"MN","code":"976","area":"\u4e9a\u6d32","section":"m"},{"country":"Montenegro","chineseName":"\u9ed1\u5c71\u5171\u548c\u56fd","shortName":"MNE","code":"382","area":"\u6b27\u6d32","section":"m"},{"country":"Montserrat","chineseName":"\u8499\u7279\u585e\u62c9\u7279","shortName":"MS","code":"1664","area":"\u6b27\u6d32","section":"m"},{"country":"Morocco","chineseName":"\u6469\u6d1b\u54e5","shortName":"MA","code":"212","area":"\u975e\u6d32","section":"m"},{"country":"Mozambique","chineseName":"\u83ab\u6851\u6bd4\u514b","shortName":"MZ","code":"258","area":"\u975e\u6d32","section":"m"},{"country":"Peru","chineseName":"\u79d8\u9c81","shortName":"PE","code":"51","area":"\u7f8e\u6d32","section":"m"}],"n":[{"country":"Laos","chineseName":"\u8001\u631d","shortName":"LA","code":"856","area":"\u4e9a\u6d32","section":"n"},{"country":"Lebanon","chineseName":"\u9ece\u5df4\u5ae9","shortName":"LB","code":"961","area":"\u4e9a\u6d32","section":"n"},{"country":"Namibia","chineseName":"\u7eb3\u7c73\u6bd4\u4e9a","shortName":"NA","code":"264","area":"\u975e\u6d32","section":"n"},{"country":"Nauru","chineseName":"\u62ff\u9c81\u5c9b","shortName":"NR","code":"674","area":"\u4e9a\u6d32","section":"n"},{"country":"Nepal","chineseName":"\u5c3c\u6cca\u5c14","shortName":"NP","code":"977","area":"\u4e9a\u6d32","section":"n"},{"country":"Nicaragua","chineseName":"\u5c3c\u52a0\u62c9\u74dc","shortName":"NI","code":"505","area":"\u5317\u7f8e\u6d32","section":"n"},{"country":"Niger","chineseName":"\u5c3c\u65e5\u5c14","shortName":"NE","code":"227","area":"\u975e\u6d32","section":"n"},{"country":"Nigeria","chineseName":"\u5c3c\u65e5\u5229\u4e9a","shortName":"NG","code":"234","area":"\u975e\u6d32","section":"n"},{"country":"Norway","chineseName":"\u632a\u5a01","shortName":"NO","code":"47","area":"\u6b27\u6d32","section":"n"},{"country":"South Africa","chineseName":"\u5357\u975e","shortName":"ZA","code":"27","area":"\u975e\u6d32","section":"n"},{"country":"South Sudan","chineseName":"\u5357\u82cf\u4e39","shortName":"SSD","code":"211","area":"\u975e\u6d32","section":"n"}],"p":[{"country":"Portugal","chineseName":"\u8461\u8404\u7259","shortName":"PT","code":"351","area":"\u6b27\u6d32","section":"p"},{"country":"Palau","chineseName":"\u5e15\u52b3","shortName":"PW","code":"680","area":"\u5927\u6d0b\u6d32","section":"p"}],"r":[{"country":"Japan ","chineseName":"\u65e5\u672c","shortName":"JP","code":"81","area":"\u4e9a\u6d32","section":"r"},{"country":"Sweden","chineseName":"\u745e\u5178","shortName":"SE","code":"46","area":"\u6b27\u6d32","section":"r"},{"country":"Switzerland","chineseName":"\u745e\u58eb","shortName":"CH","code":"41","area":"\u6b27\u6d32","section":"r"}],"s":[{"country":"Cyprus","chineseName":"\u585e\u6d66\u8def\u65af","shortName":"CY","code":"357","area":"\u6b27\u6d32","section":"s"},{"country":"El Salvador","chineseName":"\u8428\u5c14\u74e6\u591a","shortName":"SLV","code":"503","area":"\u7f8e\u6d32","section":"s"},{"country":"Saint Kitts and Nevis","chineseName":"\u5723\u9a6c\u4e01\u5c9b","shortName":"KNA","code":"1809","area":"\u7f8e\u6d32","section":"s"},{"country":"Saint Lucia","chineseName":"\u5723\u9732\u897f\u4e9a","shortName":"LCA","code":"1758","area":"\u7f8e\u6d32","section":"s"},{"country":"Saint Vincent and the Grenadines","chineseName":"\u5723\u6587\u68ee\u7279\u548c\u683c\u6797\u7eb3\u4e01\u65af","shortName":"VCT","code":"784","area":"\u5317\u7f8e\u6d32","section":"s"},{"country":"Samoa","chineseName":"\u8428\u6469\u4e9a","shortName":"WS","code":"685","area":"\u5927\u6d0b\u6d32","section":"s"},{"country":"San Marino","chineseName":"\u5723\u9a6c\u529b\u8bfa","shortName":"SM","code":"378","area":"\u6b27\u6d32","section":"s"},{"country":"Sao Tome and Principe","chineseName":"\u5723\u591a\u7f8e\u548c\u666e\u6797\u897f\u6bd4","shortName":"ST","code":"239","area":"\u975e\u6d32","section":"s"},{"country":"Saudi Arabia","chineseName":"\u6c99\u7279\u963f\u62c9\u4f2f","shortName":"SA","code":"966","area":"\u4e9a\u6d32","section":"s"},{"country":"Senegal","chineseName":"\u585e\u5185\u52a0\u5c14","shortName":"SN","code":"221","area":"\u975e\u6d32","section":"s"},{"country":"Serbia","chineseName":"\u585e\u5c14\u7ef4\u4e9a\u5171\u548c\u56fd","shortName":"SRB","code":"381","area":"\u6b27\u6d32","section":"s"},{"country":"Saint Pierreand Miquelon","chineseName":"\u5723\u5f7c\u57c3\u5c14\u548c\u5bc6\u514b\u9686\u5c9b","shortName":"PM","code":"508","area":"\u6b27\u6d32","section":"s"},{"country":"Saint Kitts and Nevis","chineseName":"\u5723\u57fa\u8328\u548c\u5c3c\u7ef4\u65af","shortName":"KN","code":"1869","area":"\u5317\u7f8e\u6d32","section":"s"},{"country":"Seychelles","chineseName":"\u585e\u820c\u5c14\u7fa4\u5c9b","shortName":"SC","code":"248","area":"\u975e\u6d32","section":"s"},{"country":"Sierra Leone","chineseName":"\u585e\u62c9\u5229\u6602","shortName":"SL","code":"232","area":"\u975e\u6d32","section":"s"},{"country":"Slovakia","chineseName":"\u65af\u6d1b\u4f10\u514b","shortName":"SK","code":"421","area":"\u6b27\u6d32","section":"s"},{"country":"Slovenia","chineseName":"\u65af\u6d1b\u6587\u5c3c\u4e9a","shortName":"SI","code":"386","area":"\u6b27\u6d32","section":"s"},{"country":"Solomon Islands","chineseName":"\u6240\u7f57\u95e8\u7fa4\u5c9b","shortName":"SOL","code":"677","area":"\u5927\u6d0b\u6d32","section":"s"},{"country":"Somalia","chineseName":"\u7d22\u9a6c\u91cc","shortName":"RWA","code":"252","area":"\u975e\u6d32","section":"s"},{"country":"Sri Lanka","chineseName":"\u65af\u91cc\u5170\u5361","shortName":"LK","code":"94","area":"\u4e9a\u6d32","section":"s"},{"country":"Sudan","chineseName":"\u82cf\u4e39","shortName":"SD","code":"249","area":"\u975e\u6d32","section":"s"},{"country":"Suriname","chineseName":"\u82cf\u91cc\u5357","shortName":"SR","code":"597","area":"\u5357\u7f8e\u6d32","section":"s"},{"country":"Swaziland","chineseName":"\u53f2\u74e6\u6d4e\u5170","shortName":"SZ","code":"268","area":"\u975e\u6d32","section":"s"}],"t":[{"country":"Tajikistan","chineseName":"\u5854\u5409\u514b\u65af\u5766","shortName":"TJ","code":"992","area":"\u4e9a\u6d32","section":"t"},{"country":"Tanzania","chineseName":"\u5766\u6851\u5c3c\u4e9a","shortName":"TZ","code":"255","area":"\u975e\u6d32","section":"t"},{"country":"Thailand","chineseName":"\u6cf0\u56fd","shortName":"TH","code":"66","area":"\u4e9a\u6d32","section":"t"},{"country":"Tonga","chineseName":"\u6c64\u52a0\u7fa4\u5c9b","shortName":"TO","code":"676","area":"\u5927\u6d0b\u6d32","section":"t"},{"country":"Trinidad &amp; Tobago","chineseName":"\u7279\u7acb\u5c3c\u8fbe\u5c9b\u548c\u591a\u5df4\u54e5","shortName":"TTO","code":"1868","area":"\u7f8e\u6d32","section":"t"},{"country":"Tunisia","chineseName":"\u7a81\u5c3c\u65af","shortName":"TN","code":"216","area":"\u975e\u6d32","section":"t"},{"country":"Turkey","chineseName":"\u571f\u8033\u5176","shortName":"TR","code":"90","area":"\u6b27\u6d32","section":"t"},{"country":"Turkmenistan","chineseName":"\u571f\u5e93\u66fc","shortName":"TM","code":"993","area":"\u4e9a\u6d32","section":"t"},{"country":"Turks and Caicos Islands","chineseName":"\u7279\u514b\u65af\u548c\u51ef\u79d1\u65af\u7fa4\u5c9b","shortName":"TC","code":"1649","area":"\u7f8e\u6d32","section":"t"},{"country":"Tuvalu","chineseName":"\u56fe\u74e6\u5362","shortName":"TUV","code":"688","area":"\u5927\u6d0b\u6d32","section":"t"}],"w":[{"country":"Brunei","chineseName":"\u6587\u83b1","shortName":"BN","code":"673","area":"\u4e9a\u6d32","section":"w"},{"country":"Guatemala","chineseName":"\u5371\u5730\u9a6c\u62c9","shortName":"GT","code":"502","area":"\u7f8e\u6d32","section":"w"},{"country":"Uganda","chineseName":"\u4e4c\u5e72\u8fbe","shortName":"UG","code":"256","area":"\u975e\u6d32","section":"w"},{"country":"Ukraine","chineseName":"\u4e4c\u514b\u5170","shortName":"UA","code":"380","area":"\u6b27\u6d32","section":"w"},{"country":"Uruguay","chineseName":"\u4e4c\u62c9\u572d","shortName":"UY","code":"598","area":"\u7f8e\u6d32","section":"w"},{"country":"Uzbekistan","chineseName":"\u4e4c\u5179\u522b\u514b\u65af\u5766","shortName":"UZ","code":"998","area":"\u4e9a\u6d32","section":"w"},{"country":"Vanuatu","chineseName":"\u74e6\u52aa\u963f\u56fe","shortName":"VUT","code":"678","area":"\u5927\u6d0b\u6d32","section":"w"}],"x":[{"country":"Greece","chineseName":"\u5e0c\u814a","shortName":"GR","code":"30","area":"\u6b27\u6d32","section":"x"},{"country":"Hungary","chineseName":"\u5308\u7259\u5229","shortName":"HU","code":"36","area":"\u6b27\u6d32","section":"x"},{"country":"New Caledonia","chineseName":"\u65b0\u5580\u91cc\u591a\u5c3c\u4e9a\u5c9b","shortName":"NCA","code":"687","area":"\u5927\u6d0b\u6d32","section":"x"},{"country":"Spain","chineseName":"\u897f\u73ed\u7259","shortName":"ES","code":"34","area":"\u6b27\u6d32","section":"x"},{"country":"Syria","chineseName":"\u53d9\u5229\u4e9a","shortName":"SY","code":"963","area":"\u4e9a\u6d32","section":"x"}],"y":[{"country":"Armenia","chineseName":"\u4e9a\u7f8e\u5c3c\u4e9a","shortName":"AM","code":"374","area":"\u4e9a\u6d32","section":"y"},{"country":"India","chineseName":"\u5370\u5ea6","shortName":"IN","code":"91","area":"\u4e9a\u6d32 ","section":"y"},{"country":"Indonesia","chineseName":"\u5370\u5ea6\u5c3c\u897f\u4e9a","shortName":"ID","code":"62","area":"\u4e9a\u6d32","section":"y"},{"country":"Iran","chineseName":"\u4f0a\u6717","shortName":"IR","code":"98","area":"\u4e9a\u6d32","section":"y"},{"country":"Iraq","chineseName":"\u4f0a\u62c9\u514b","shortName":"IQ","code":"964","area":"\u4e9a\u6d32","section":"y"},{"country":"Israel","chineseName":"\u4ee5\u8272\u5217","shortName":"IL","code":"972","area":"\u4e9a\u6d32","section":"y"},{"country":"Italy","chineseName":"\u610f\u5927\u5229","shortName":"ITA","code":"39","area":"\u6b27\u6d32","section":"y"},{"country":"Jamaica","chineseName":"\u7259\u4e70\u52a0","shortName":"JM","code":"1876","area":"\u7f8e\u6d32","section":"y"},{"country":"Jordan","chineseName":"\u7ea6\u65e6","shortName":"JO","code":"962","area":"\u4e9a\u6d32","section":"y"},{"country":"United Kingdom","chineseName":"\u82f1\u56fd","shortName":"UK","code":"44","area":"\u6b27\u6d32","section":"y"},{"country":"Venezuela","chineseName":"\u59d4\u5185\u745e\u62c9","shortName":"VE","code":"58","area":"\u7f8e\u6d32","section":"y"},{"country":"Viet Nam","chineseName":"\u8d8a\u5357","shortName":"VN","code":"84","area":"\u4e9a\u6d32","section":"y"},{"country":"Virgin Islands","chineseName":"\u82f1\u5c5e\u7ef4\u5c14\u4eac\u7fa4\u5c9b","shortName":"VG","code":"1284","area":"\u5317\u7f8e\u6d32","section":"y"}],"z":[{"country":"Central African Republic","chineseName":"\u4e2d\u975e\u5171\u548c\u56fd","shortName":"CF","code":"236","area":"\u975e\u6d32","section":"z"},{"country":"Chad","chineseName":"\u4e4d\u5f97","shortName":"TD","code":"235","area":"\u975e\u6d32","section":"z"},{"country":"Chile","chineseName":"\u667a\u5229","shortName":"CL","code":"56","area":"\u7f8e\u6d32","section":"z"},{"country":"Gibraltar","chineseName":"\u76f4\u5e03\u7f57\u9640","shortName":"GI","code":"350","area":"\u6b27\u6d32","section":"z"},{"country":"Jersey","chineseName":"\u6cfd\u897f\u5c9b","shortName":"ZXA","code":"44","area":"\u6b27\u6d32","section":"z"},{"country":"Yemen","chineseName":"\u4e5f\u95e8","shortName":"YE","code":"967","area":"\u4e9a\u6d32","section":"z"},{"country":"Zambia","chineseName":"\u8d5e\u6bd4\u4e9a","shortName":"ZM","code":"260","area":"\u975e\u6d32","section":"z"}],"hot":[{"country":"China","chineseName":"\u4e2d\u56fd\u5927\u9646","shortName":"CN","code":"86","area":"\u4e9a\u6d32","section":"hot"},{"country":"Hong Kong","chineseName":"\u4e2d\u56fd\u9999\u6e2f","shortName":"HK","code":"852","area":"\u4e9a\u6d32","section":"hot"},{"country":"Macau","chineseName":"\u4e2d\u56fd\u6fb3\u95e8","shortName":"MO","code":"853","area":"\u4e9a\u6d32","section":"hot"},{"country":"Taiwan","chineseName":"\u4e2d\u56fd\u53f0\u6e7e","shortName":"TW","code":"886","area":"\u4e9a\u6d32","section":"hot"},{"country":"Malaysia","chineseName":"\u9a6c\u6765\u897f\u4e9a","shortName":"MAS","code":"60","area":"\u4e9a\u6d32","section":"hot"},{"country":"Australia","chineseName":"\u6fb3\u5927\u5229\u4e9a","shortName":"AU","code":"61","area":"\u5927\u6d0b\u6d32","section":"hot"},{"country":"New Zealand","chineseName":"\u65b0\u897f\u5170","shortName":"NZ","code":"64","area":"\u5927\u6d0b\u6d32","section":"hot"},{"country":"Singapore","chineseName":"\u65b0\u52a0\u5761","shortName":"SG","code":"65","area":"\u4e9a\u6d32","section":"hot"},{"country":"United States of America","chineseName":"\u7f8e\u56fd","shortName":"US","code":"1","area":"\u7f8e\u6d32","section":"hot"}]};