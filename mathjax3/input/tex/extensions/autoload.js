!function(o){var r={};function a(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return o[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=o,a.c=r,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(o,r,function(t){return e[t]}.bind(null,r));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=0)}([function(t,e,o){"use strict";o(1)},function(t,e,o){"use strict";var r=o(2),a=function(t){{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}}(o(3));(0,r.combineWithMathJax)({_:{input:{tex:{autoload:{AutoloadConfiguration:a}}}}})},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.combineConfig=MathJax._.components.global.combineConfig,e.combineDefaults=MathJax._.components.global.combineDefaults,e.combineWithMathJax=MathJax._.components.global.combineWithMathJax,e.MathJax=MathJax._.components.global.MathJax},function(t,e,o){"use strict";var r,a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),P=this&&this.__read||function(t,e){var o="function"==typeof Symbol&&t[Symbol.iterator];if(!o)return t;var r,a,n=o.call(t),i=[];try{for(;(void 0===e||0<e--)&&!(r=n.next()).done;)i.push(r.value)}catch(t){a={error:t}}finally{try{r&&!r.done&&(o=n.return)&&o.call(n)}finally{if(a)throw a.error}}return i},C=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],o=0;return e?e.call(t):{next:function(){return t&&o>=t.length&&(t=void 0),{value:t&&t[o++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var n=o(4),i=o(5),w=o(6),S=o(7),m=o(8),u=o(9),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.remove=function(t){this.map.delete(t)},e}(i.CommandMap);function q(t,e,o,r){if(m.Package.packages.has(t.options.require.prefix+o)){var a=t.options.autoload[o],n=P(2===a.length&&Array.isArray(a[0])?a:[a,[]],2),i=n[0],u=n[1];try{for(var l=C(i),c=l.next();!c.done;c=l.next()){var p=c.value;j.remove(p)}}catch(t){x={error:t}}finally{try{c&&!c.done&&(y=l.return)&&y.call(l)}finally{if(x)throw x.error}}try{for(var s=C(u),f=s.next();!f.done;f=s.next()){var d=f.value;k.remove(d)}}catch(t){h={error:t}}finally{try{f&&!f.done&&(M=s.return)&&M.call(s)}finally{if(h)throw h.error}}t.i-=e.length+(r?0:7)}var x,y,h,M;S.RequireLoad(t,o)}var j=new(e.AutoloadCommandMap=l)("autoload-macros",{},{}),k=new l("autoload-environments",{},{});e.AutoloadConfiguration=n.Configuration.create("autoload",{handler:{macro:["autoload-macros"],environment:["autoload-environments"]},options:{autoload:u.expandable({action:["toggle","mathtip","texttip"],amsCd:[[],["CD"]],bbox:["bbox"],boldsymbol:["boldsymbol"],braket:["bra","ket","braket","set","Bra","Ket","Braket","Set","ketbra","Ketbra"],cancel:["cancel","bcancel","xcancel","cancelto"],color:["color","definecolor","textcolor","colorbox","fcolorbox"],enclose:["enclose"],extpfeil:["xtwoheadrightarrow","xtwoheadleftarrow","xmapsto","xlongequal","xtofrom","Newextarrow"],html:["href","class","style","cssId"],mhchem:["ce","pu"],newcommand:["newcommand","renewcommand","newenvironment","renewenvironment","def","let"],unicode:["unicode"],verb:["verb"]})},config:function(t,e){var o,r,a,n,i,u,l=e.parseOptions,c=l.handlers.get("macro"),p=l.handlers.get("environment"),s=l.options.autoload;try{for(var f=C(Object.keys(s)),d=f.next();!d.done;d=f.next()){var x=d.value,y=s[x],h=P(2===y.length&&Array.isArray(y[0])?y:[y,[]],2),M=h[0],m=h[1];try{for(var b=C(M),_=b.next();!_.done;_=b.next()){var v=_.value;c.lookup(v)&&"color"!==v||j.add(v,new w.Macro(v,q,[x,!0]))}}catch(t){a={error:t}}finally{try{_&&!_.done&&(n=b.return)&&n.call(b)}finally{if(a)throw a.error}}try{for(var g=C(m),O=g.next();!O.done;O=g.next()){var J=O.value;p.lookup(J)||k.add(J,new w.Macro(J,q,[x,!1]))}}catch(t){i={error:t}}finally{try{O&&!O.done&&(u=g.return)&&u.call(g)}finally{if(i)throw i.error}}}}catch(t){o={error:t}}finally{try{d&&!d.done&&(r=f.return)&&r.call(f)}finally{if(o)throw o.error}}l.options.require.jax||S.RequireConfiguration.config(t,e)},configPriority:10,init:function(t){t.options.require||u.defaultOptions(t.options,S.RequireConfiguration.options)},priority:10})},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Configuration=MathJax._.input.tex.Configuration.Configuration,e.ConfigurationHandler=MathJax._.input.tex.Configuration.ConfigurationHandler},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AbstractSymbolMap=MathJax._.input.tex.SymbolMap.AbstractSymbolMap,e.RegExpMap=MathJax._.input.tex.SymbolMap.RegExpMap,e.AbstractParseMap=MathJax._.input.tex.SymbolMap.AbstractParseMap,e.CharacterMap=MathJax._.input.tex.SymbolMap.CharacterMap,e.DelimiterMap=MathJax._.input.tex.SymbolMap.DelimiterMap,e.MacroMap=MathJax._.input.tex.SymbolMap.MacroMap,e.CommandMap=MathJax._.input.tex.SymbolMap.CommandMap,e.EnvironmentMap=MathJax._.input.tex.SymbolMap.EnvironmentMap},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Symbol=MathJax._.input.tex.Symbol.Symbol,e.Macro=MathJax._.input.tex.Symbol.Macro},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.RequireLoad=MathJax._.input.tex.require.RequireConfiguration.RequireLoad,e.RequireMethods=MathJax._.input.tex.require.RequireConfiguration.RequireMethods,e.options=MathJax._.input.tex.require.RequireConfiguration.options,e.RequireConfiguration=MathJax._.input.tex.require.RequireConfiguration.RequireConfiguration},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PackageError=MathJax._.components.package.PackageError,e.Package=MathJax._.components.package.Package},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.APPEND=MathJax._.util.Options.APPEND,e.REMOVE=MathJax._.util.Options.REMOVE,e.Expandable=MathJax._.util.Options.Expandable,e.expandable=MathJax._.util.Options.expandable,e.makeArray=MathJax._.util.Options.makeArray,e.keys=MathJax._.util.Options.keys,e.copy=MathJax._.util.Options.copy,e.insert=MathJax._.util.Options.insert,e.defaultOptions=MathJax._.util.Options.defaultOptions,e.userOptions=MathJax._.util.Options.userOptions,e.selectOptions=MathJax._.util.Options.selectOptions,e.selectOptionsFromKeys=MathJax._.util.Options.selectOptionsFromKeys,e.separateOptions=MathJax._.util.Options.separateOptions}]);