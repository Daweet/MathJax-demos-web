!function(o){var r={};function n(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return o[t].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=o,n.c=r,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.sreReady=MathJax._.a11y.sre.sreReady},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.combineConfig=MathJax._.components.global.combineConfig,e.combineDefaults=MathJax._.components.global.combineDefaults,e.combineWithMathJax=MathJax._.components.global.combineWithMathJax,e.MathJax=MathJax._.components.global.MathJax},function(t,e,o){"use strict";var r,n=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__assign||Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},s=this&&this.__read||function(t,e){var o="function"==typeof Symbol&&t[Symbol.iterator];if(!o)return t;var r,n,i=o.call(t),s=[];try{for(;(void 0===e||0<e--)&&!(r=i.next()).done;)s.push(r.value)}catch(t){n={error:t}}finally{try{r&&!r.done&&(o=i.return)&&o.call(i)}finally{if(n)throw n.error}}return s},a=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(s(arguments[e]));return t},l=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],o=0;return e?e.call(t):{next:function(){return t&&o>=t.length&&(t=void 0),{value:t&&t[o++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var h=o(7),u=o(8),c=o(9),p=o(10),d=o(3),f=o(4);function y(t,r){return function(o){function t(){var t=null!==o&&o.apply(this,arguments)||this;return t.explorer=null,t.restart=!1,t.refocus=!1,t}return n(t,o),t.prototype.explorable=function(t){if(!(this.state()>=h.STATE.EXPLORER)){var e=this.typesetRoot,o=r(this.root);this.explorer=d.SpeechExplorer.create(t,t.explorerObjects.region,e,o),this.state(h.STATE.EXPLORER)}},t.prototype.rerender=function(t,e){void 0===e&&(e=h.STATE.RERENDER),this.refocus=window.document.activeElement===this.typesetRoot,this.explorer&&this.explorer.active&&(this.restart=!0,this.explorer.Stop()),o.prototype.rerender.call(this,t,e)},t.prototype.updateDocument=function(t){o.prototype.updateDocument.call(this,t),this.refocus&&this.typesetRoot.focus(),this.restart&&this.explorer.Start(),this.refocus=this.restart=!1},t}(t)}function v(t){return(e=function(i){function t(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var o=i.apply(this,a(t))||this,r=o.constructor.ProcessBits;r.has("explorer")||r.allocate("explorer");var n=new p.SerializedMmlVisitor(o.mmlFactory);return o.options.MathItem=y(o.options.MathItem,function(t){return n.visitTree(t)}),o.explorerObjects={region:new f.LiveRegion(o),tooltip:new f.ToolTip(o),tooltip2:new f.ToolTip(o),tooltip3:new f.ToolTip(o),magnifier:new f.HoverRegion(o)},o}return n(t,i),t.prototype.explorable=function(){if(!this.processed.isSet("explorer")){try{for(var t=l(this.math),e=t.next();!e.done;e=t.next()){e.value.explorable(this)}}catch(t){o={error:t}}finally{try{e&&!e.done&&(r=t.return)&&r.call(t)}finally{if(o)throw o.error}}this.processed.set("explorer")}return this;var o,r},t.prototype.state=function(t,e){return void 0===e&&(e=!1),i.prototype.state.call(this,t,e),t<h.STATE.EXPLORER&&this.processed.clear("explorer"),this},t}(t)).OPTIONS=i({},t.OPTIONS,{renderActions:c.expandable(i({},t.OPTIONS.renderActions,{explorable:[h.STATE.EXPLORER]}))}),e;var e}h.newState("EXPLORER",160),e.ExplorerMathItemMixin=y,e.ExplorerMathDocumentMixin=v,e.ExplorerHandler=function(t,e){return void 0===e&&(e=null),!t.documentClass.prototype.enrich&&e&&(t=u.EnrichHandler(t,e)),t.documentClass=v(t.documentClass),t}},function(t,e,o){"use strict";var r,n=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),a=this&&this.__read||function(t,e){var o="function"==typeof Symbol&&t[Symbol.iterator];if(!o)return t;var r,n,i=o.call(t),s=[];try{for(;(void 0===e||0<e--)&&!(r=i.next()).done;)s.push(r.value)}catch(t){n={error:t}}finally{try{r&&!r.done&&(o=i.return)&&o.call(i)}finally{if(n)throw n.error}}return s},s=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(a(arguments[e]));return t},l=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],o=0;return e?e.call(t):{next:function(){return t&&o>=t.length&&(t=void 0),{value:t&&t[o++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var h=o(0),u=function(){function t(t,e,o){for(var r=[],n=3;n<arguments.length;n++)r[n-3]=arguments[n];this.document=t,this.region=e,this.node=o,this.events=[],this.active=!1,this.oldIndex=null}return t.stopEvent=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopImmediatePropagation?t.stopImmediatePropagation():t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0},t.prototype.Events=function(){return this.events},t.create=function(t,e,o){for(var r=[],n=3;n<arguments.length;n++)r[n-3]=arguments[n];var i=new(this.bind.apply(this,s([void 0,t,e,o],r)));return i.Attach(),i},t.prototype.Attach=function(){this.oldIndex=this.node.tabIndex,this.node.tabIndex=1,this.AddEvents()},t.prototype.Detach=function(){this.node.tabIndex=this.oldIndex,this.oldIndex=null,this.RemoveEvents()},t.prototype.Start=function(){this.active=!0},t.prototype.Stop=function(){this.active&&(this.region.Clear(),this.region.Hide(),this.active=!1)},t.prototype.AddEvents=function(){try{for(var t=l(this.events),e=t.next();!e.done;e=t.next()){var o=a(e.value,2),r=o[0],n=o[1];this.node.addEventListener(r,n)}}catch(t){i={error:t}}finally{try{e&&!e.done&&(s=t.return)&&s.call(t)}finally{if(i)throw i.error}}var i,s},t.prototype.RemoveEvents=function(){try{for(var t=l(this.events),e=t.next();!e.done;e=t.next()){var o=a(e.value,2),r=o[0],n=o[1];this.node.removeEventListener(r,n)}}catch(t){i={error:t}}finally{try{e&&!e.done&&(s=t.return)&&s.call(t)}finally{if(i)throw i.error}}var i,s},t}(),i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.events=e.prototype.Events.call(t).concat([["keydown",t.KeyDown.bind(t)],["focusin",t.FocusIn.bind(t)],["focusout",t.FocusOut.bind(t)]]),t}return n(t,e),t.prototype.FocusIn=function(t){},t.prototype.FocusOut=function(t){this.Stop()},t}(e.AbstractExplorer=u),c=function(i){function t(t,e,o,r){var n=i.call(this,t,e,o)||this;return n.document=t,n.region=e,n.node=o,n.mml=r,n.started=!1,n.foreground={color:"red",alpha:1},n.background={color:"blue",alpha:.2},n.initWalker(),n}return n(t,i),t.prototype.initWalker=function(){var t=this.document.outputJax.name;this.highlighter=sre.HighlighterFactory.highlighter(this.background,this.foreground,{renderer:"CHTML"===t?"CommonHTML":t}),this.speechGenerator=new sre.TreeSpeechGenerator;var e=new sre.DummyWalker(this.node,this.speechGenerator,this.highlighter,this.mml);this.Speech(e),this.speechGenerator=new sre.DirectSpeechGenerator,this.walker=new sre.TableWalker(this.node,this.speechGenerator,this.highlighter,this.mml)},t.prototype.Start=function(){i.prototype.Start.call(this),this.region.Show(this.node,this.highlighter),this.walker.activate(),this.highlighter.highlight(this.walker.getFocus().getNodes()),this.region.Update(this.walker.speech())},t.prototype.Stop=function(){this.active&&this.highlighter.unhighlight(),i.prototype.Stop.call(this)},t.prototype.Speech=function(t){var e=this;h.sreReady.then(function(){t.speech();e.node.setAttribute("hasspeech","true")}).catch(function(t){return console.log(t.message)})},t.prototype.KeyDown=function(t){var e=t.keyCode;return 27===e?(this.Stop(),void u.stopEvent(t)):this.active?(this.Move(e),void u.stopEvent(t)):void(32===e&&t.shiftKey&&(this.Start(),u.stopEvent(t)))},t.prototype.Move=function(t){this.walker.move(t),this.highlighter.unhighlight(),this.highlighter.highlight(this.walker.getFocus().getNodes()),this.region.Update(this.walker.speech())},t}(e.AbstractKeyExplorer=i),p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.Start=function(){t.prototype.Start.call(this),this.region.Show(this.node,this.highlighter),this.walker.activate(),this.highlighter.highlight(this.walker.getFocus().getNodes()),this.showFocus()},e.prototype.showFocus=function(){var t=this.walker.getFocus().getNodes()[0],e=t.cloneNode(!0),o=this.region;o.Show(t,this.highlighter),o.AddNode(e)},e.prototype.Move=function(t){this.walker.move(t),this.showFocus()},e}(e.SpeechExplorer=c);e.Magnifier=p;var d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.events=e.prototype.Events.call(t).concat([["mouseover",t.MouseOver.bind(t)],["mouseout",t.MouseOut.bind(t)]]),t}return n(t,e),t.prototype.MouseOver=function(t){this.Start()},t.prototype.MouseOut=function(t){this.Stop()},t}(u),f=function(i){function t(t,e,o){var r=i.call(this,t,e,o)||this;return r.document=t,r.region=e,r.node=o,r.foreground={color:"red",alpha:1},r.background={color:"blue",alpha:.2},r.nodeQuery=function(t){return!0},r.nodeAccess=function(t){return""},r.highlighter=sre.HighlighterFactory.highlighter(r.background,r.foreground,{renderer:r.document.outputJax.name}),r}return n(t,i),t.prototype.MouseDown=function(t){},t.prototype.MouseUp=function(t){},t.prototype.MouseOut=function(t){this.highlighter.unhighlight(),this.region.Hide(),i.prototype.MouseOut.call(this,t)},t.prototype.MouseOver=function(t){i.prototype.MouseOver.call(this,t);var e=t.target,o=a(this.getNode(e),2),r=o[0],n=o[1];r&&(this.highlighter.unhighlight(),this.highlighter.highlight([r]),this.region.Show(r,this.highlighter),this.region.Update(n))},t.prototype.getNode=function(t){for(var e=t;t&&t!==this.node;){if(this.nodeQuery(t))return[t,this.nodeAccess(t)];t=t.parentNode}for(t=e;t;){if(this.nodeQuery(t))return[t,this.nodeAccess(t)];t=t.childNodes[0]}return[null,""]},t}(e.AbstractMouseExplorer=d),y=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.nodeQuery=function(t){return t.hasAttribute("data-semantic-type")},t.nodeAccess=function(t){return t.getAttribute("data-semantic-type")},t}return n(t,e),t}(e.HoverExplorer=f);e.TypeExplorer=y;var v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.nodeQuery=function(t){return t.hasAttribute("data-semantic-role")},t.nodeAccess=function(t){return t.getAttribute("data-semantic-role")},t}return n(t,e),t}(f);e.RoleExplorer=v;var g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.nodeQuery=function(t){return!!t.tagName},t.nodeAccess=function(t){return t.tagName},t}return n(t,e),t}(f);e.TagExplorer=g},function(t,e,o){"use strict";var r,n=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var i=o(11);o(0);var s=function(){function t(t){this.document=t,this.CLASS=this.constructor,this.AddStyles(),this.AddElement()}return t.prototype.AddStyles=function(){if(!this.CLASS.styleAdded){var t=this.document.adaptor.node("style");t.innerHTML=this.CLASS.style.cssText,this.document.adaptor.head(this.document.adaptor.document).appendChild(t),this.CLASS.styleAdded=!0}},t.prototype.AddElement=function(){var t=this.document.adaptor.node("div");t.classList.add(this.CLASS.className),t.style.backgroundColor="white",this.div=t,this.inner=this.document.adaptor.node("div"),this.div.appendChild(this.inner),this.document.adaptor.body(this.document.adaptor.document).appendChild(this.div)},t.prototype.Show=function(t,e){this.position(t),this.highlight(e),this.div.classList.add(this.CLASS.className+"_Show")},t.prototype.Hide=function(){this.div.classList.remove(this.CLASS.className+"_Show")},t.prototype.Clear=function(){this.Update(""),this.inner.style.top="",this.inner.style.backgroundColor=""},t.prototype.Update=function(t){this.inner.textContent="",this.inner.textContent=t},t}();s.styleAdded=!1;var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.position=function(t){for(var e=t.getBoundingClientRect(),o=0,r=Number.POSITIVE_INFINITY,n=this.document.adaptor.document.getElementsByClassName(this.CLASS.className+"_Show"),i=0,s=void 0;s=n[i];i++)s!==this.div&&(o=Math.max(s.getBoundingClientRect().bottom,o),r=Math.min(s.getBoundingClientRect().left,r));var a=(o||e.bottom+10)+window.pageYOffset,l=(r<Number.POSITIVE_INFINITY?r:e.left)+window.pageXOffset;this.div.style.top=a+"px",this.div.style.left=l+"px"},e.prototype.highlight=function(t){var e=t.colorString();this.inner.style.backgroundColor=e.background,this.inner.style.color=e.foreground},e}(e.AbstractRegion=s);a.className="MJX_ToolTip",a.style=new i.CssStyles(((h={})["."+a.className]={position:"absolute",display:"inline-block",height:"1px",width:"1px"},h["."+a.className+"_Show"]={width:"auto",height:"auto",opacity:1,"text-align":"center","border-radius":"6px",padding:"0px 0px","border-bottom":"1px dotted black",position:"absolute","z-index":202},h)),e.ToolTip=a;var l=function(o){function t(t){var e=o.call(this,t)||this;return e.document=t,e.div.setAttribute("aria-live","assertive"),e}return n(t,o),t.prototype.Show=function(t,e){o.prototype.Show.call(this,t,e)},t.prototype.position=function(t){var e=t.getBoundingClientRect(),o=e.bottom+10+window.pageYOffset,r=e.left+window.pageXOffset;this.div.style.top=o+"px",this.div.style.left=r+"px"},t.prototype.highlight=function(t){var e=t.colorString();this.inner.style.backgroundColor=e.background,this.inner.style.color=e.foreground},t}(s);l.className="MJX_LiveRegion",l.style=new i.CssStyles(((u={})["."+l.className]={position:"absolute",top:"0",height:"1px",width:"1px",padding:"1px",overflow:"hidden"},u["."+l.className+"_Show"]={top:"0",position:"absolute",width:"auto",height:"auto",padding:"0px 0px",opacity:1,"z-index":"202",left:0,right:0,margin:"0 auto","background-color":"rgba(0, 0, 255, 0.2)","box-shadow":"0px 10px 20px #888",border:"2px solid #CCCCCC"},u)),e.LiveRegion=l;var h,u,c,p=function(o){function t(t){var e=o.call(this,t)||this;return e.document=t,e.div.style.fontSize="800%",e.inner.classList.add("MJX-TEX"),e}return n(t,o),t.prototype.Show=function(t,e){o.prototype.Show.call(this,t,e)},t.prototype.position=function(t){var e=t.getBoundingClientRect(),o=e.top,r=e.left;this.div.style.top=o+"px",this.div.style.left=r+"px"},t.prototype.highlight=function(t){},t.prototype.AddNode=function(t){this.Clear(),this.inner.appendChild(t)},t}(s);p.className="MJX_HoverRegion",p.style=new i.CssStyles(((c={})["."+p.className]={position:"absolute",top:"0",height:"1px",width:"1px",padding:"1px",overflow:"hidden"},c["."+p.className+"_Show"]={top:"0",position:"absolute",width:"max-content",height:"auto",padding:"0px 0px",opacity:1,"z-index":"202",left:0,right:0,margin:"0 auto","background-color":"rgba(0, 0, 255, 0.2)","box-shadow":"0px 10px 20px #888",border:"2px solid #CCCCCC"},c)),e.HoverRegion=p},function(t,e,o){"use strict";o(6);o(1);var r=o(2);MathJax.startup&&MathJax.startup.extendHandler(function(t){return(0,r.ExplorerHandler)(t)})},function(t,e,o){"use strict";var r=o(1),n=l(o(2)),i=l(o(3)),s=l(o(4)),a=l(o(0));function l(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}(0,r.combineWithMathJax)({_:{a11y:{explorer_ts:n,explorer:{Explorer:i,Region:s},sre:a}}})},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.protoItem=MathJax._.core.MathItem.protoItem,e.AbstractMathItem=MathJax._.core.MathItem.AbstractMathItem,e.STATE=MathJax._.core.MathItem.STATE,e.newState=MathJax._.core.MathItem.newState},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EnrichedMathItemMixin=MathJax._.a11y["semantic-enrich"].EnrichedMathItemMixin,e.EnrichedMathDocumentMixin=MathJax._.a11y["semantic-enrich"].EnrichedMathDocumentMixin,e.EnrichHandler=MathJax._.a11y["semantic-enrich"].EnrichHandler},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.APPEND=MathJax._.util.Options.APPEND,e.REMOVE=MathJax._.util.Options.REMOVE,e.Expandable=MathJax._.util.Options.Expandable,e.expandable=MathJax._.util.Options.expandable,e.makeArray=MathJax._.util.Options.makeArray,e.keys=MathJax._.util.Options.keys,e.copy=MathJax._.util.Options.copy,e.insert=MathJax._.util.Options.insert,e.defaultOptions=MathJax._.util.Options.defaultOptions,e.userOptions=MathJax._.util.Options.userOptions,e.selectOptions=MathJax._.util.Options.selectOptions,e.selectOptionsFromKeys=MathJax._.util.Options.selectOptionsFromKeys,e.separateOptions=MathJax._.util.Options.separateOptions},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SerializedMmlVisitor=MathJax._.core.MmlTree.SerializedMmlVisitor.SerializedMmlVisitor},function(t,e,o){"use strict";var h=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],o=0;return e?e.call(t):{next:function(){return t&&o>=t.length&&(t=void 0),{value:t&&t[o++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t){void 0===t&&(t=null),this.styles={},this.addStyles(t)}return Object.defineProperty(t.prototype,"cssText",{get:function(){return this.getStyleString()},enumerable:!0,configurable:!0}),t.prototype.addStyles=function(t){var e,o;if(t)try{for(var r=h(Object.keys(t)),n=r.next();!n.done;n=r.next()){var i=n.value;this.styles[i]||(this.styles[i]={}),Object.assign(this.styles[i],t[i])}}catch(t){e={error:t}}finally{try{n&&!n.done&&(o=r.return)&&o.call(r)}finally{if(e)throw e.error}}},t.prototype.removeStyles=function(){for(var e,t,o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];try{for(var n=h(o),i=n.next();!i.done;i=n.next()){var s=i.value;delete this.styles[s]}}catch(t){e={error:t}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}},t.prototype.clear=function(){this.styles={}},t.prototype.getStyleString=function(){var e,t,o=Object.keys(this.styles),r=new Array(o.length),n=0;try{for(var i=h(o),s=i.next();!s.done;s=i.next()){var a=s.value;r[n++]=a+" {\n"+this.getStyleDefString(this.styles[a])+"\n}"}}catch(t){e={error:t}}finally{try{s&&!s.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}return r.join("\n\n")},t.prototype.getStyleDefString=function(t){var e,o,r=Object.keys(t),n=new Array(r.length),i=0;try{for(var s=h(r),a=s.next();!a.done;a=s.next()){var l=a.value;n[i++]="  "+l+": "+t[l]+";"}}catch(t){e={error:t}}finally{try{a&&!a.done&&(o=s.return)&&o.call(s)}finally{if(e)throw e.error}}return n.join("\n")},t}();e.CssStyles=r}]);