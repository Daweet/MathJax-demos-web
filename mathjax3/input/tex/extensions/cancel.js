!function(n){var a={};function o(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,n){"use strict";n(1)},function(t,e,n){"use strict";var a=n(2),o=function(t){{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}}(n(3));(0,a.combineWithMathJax)({_:{input:{tex:{cancel:{CancelConfiguration:o}}}}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.combineConfig=MathJax._.components.global.combineConfig,e.combineDefaults=MathJax._.components.global.combineDefaults,e.combineWithMathJax=MathJax._.components.global.combineWithMathJax,e.MathJax=MathJax._.components.global.MathJax},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(4),i=n(5),o=n(6),c=n(7),u={color:1,mathcolor:1,background:1,mathbackground:1,padding:1,thickness:1};e.CancelMethods={},e.CancelMethods.Cancel=function(t,e,n){var a=t.GetBrackets(e,""),o=t.ParseArg(e),r=c.default.splitPackageOptions(a,u);r.notation=n,t.Push(t.create("node","menclose",[o],r))},e.CancelMethods.CancelTo=function(t,e){var n=t.GetBrackets(e,""),a=t.ParseArg(e),o=t.ParseArg(e),r=c.default.splitPackageOptions(n,u);r.notation=i.TexConstant.Notation.UPDIAGONALSTRIKE+" "+i.TexConstant.Notation.UPDIAGONALARROW,a=t.create("node","mpadded",[a],{depth:"-.1em",height:" + .1em",voffset:".1em"}),t.Push(t.create("node","msup",[t.create("node","menclose",[o],r),a]))},new o.CommandMap("cancel",{cancel:["Cancel",i.TexConstant.Notation.UPDIAGONALSTRIKE],bcancel:["Cancel",i.TexConstant.Notation.DOWNDIAGONALSTRIKE],xcancel:["Cancel",i.TexConstant.Notation.UPDIAGONALSTRIKE+" "+i.TexConstant.Notation.DOWNDIAGONALSTRIKE],cancelto:"CancelTo"},e.CancelMethods),e.CancelConfiguration=a.Configuration.create("cancel",{handler:{macro:["cancel"]}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Configuration=MathJax._.input.tex.Configuration.Configuration,e.ConfigurationHandler=MathJax._.input.tex.Configuration.ConfigurationHandler},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TexConstant=MathJax._.input.tex.TexConstants.TexConstant},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AbstractSymbolMap=MathJax._.input.tex.SymbolMap.AbstractSymbolMap,e.RegExpMap=MathJax._.input.tex.SymbolMap.RegExpMap,e.AbstractParseMap=MathJax._.input.tex.SymbolMap.AbstractParseMap,e.CharacterMap=MathJax._.input.tex.SymbolMap.CharacterMap,e.DelimiterMap=MathJax._.input.tex.SymbolMap.DelimiterMap,e.MacroMap=MathJax._.input.tex.SymbolMap.MacroMap,e.CommandMap=MathJax._.input.tex.SymbolMap.CommandMap,e.EnvironmentMap=MathJax._.input.tex.SymbolMap.EnvironmentMap},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=MathJax._.input.tex.ParseUtil.default}]);