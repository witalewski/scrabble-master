(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(n,e,t){n.exports=t(31)},20:function(n,e,t){},30:function(n,e){},31:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(8),i=t.n(o),c=(t(20),t(1)),u=t(2);function l(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  height: 80vh;\n"]);return l=function(){return n},n}var f=u.a.div(l()),s=t(12);function d(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n\n  padding: 40px;\n\n  width: 800px;\n  max-width: 80vw;\n\n  background: #32302f;\n"]);return d=function(){return n},n}var h=u.a.div(d());function v(){var n=Object(c.a)(["\n  font-size: 36px;\n  background: #f9f5d7;\n"]);return v=function(){return n},n}var m=u.a.input(v()),p=function(n){var e=n.onChange,t=n.value;return a.a.createElement(m,{type:"text",placeholder:"Type in your letters, e.g. AWESOME",onChange:e,value:t})};function w(){var n=Object(c.a)(["\n  color: #8ec07c;\n"]);return w=function(){return n},n}function g(){var n=Object(c.a)(["\n  margin-top: 32px;\n  color: #fabd2f;\n  font-size: 24px;\n"]);return g=function(){return n},n}function b(){var n=Object(c.a)(["\n  margin: 32px 0 0;\n  color: #d5c4a1;\n  font-size: 24px;\n  line-height: 1.5;\n"]);return b=function(){return n},n}var E=u.a.p(b()),x=u.a.p(g()),j=u.a.span(w());function y(){var n=Object(c.a)(["\n  color: #b8bb26;\n"]);return y=function(){return n},n}var O=u.a.a(y()),k=function(n){var e=n.word;return a.a.createElement(O,{href:"https://en.wiktionary.org/wiki/".concat(e)},e)},C=function(n){var e=n.letters,t=n.permutations;return t.length?a.a.createElement(E,null,"Permutations of ",a.a.createElement(j,null,e)," ","which are valid English words:"," ",t.map(function(n,e){return a.a.createElement("span",{key:n},a.a.createElement(k,{word:n}),e<t.length-1&&", ")})):a.a.createElement(x,null,"There are no permutations of"," ",a.a.createElement(j,null,e)," which are longer than ",2," and valid English words.")},W=function(n){for(var e=n.substr(0,7),t={},r=function(n){var r=[],a=[];!function o(i){for(var c=0;c<e.length;c++)a[c]||(a[c]=!0,r[i]=e[c],i<n-1?o(i+1):t[r.join("")]=!0,a[c]=!1)}(0)},a=e.length;a>=3;a--)r(a);return Object.keys(t)},P=t(11),S=new(t.n(P).a)("en_US",!1,!1,{dictionaryPath:"dictionaries"}),z=S.check.bind(S),A=function(n){return W(n).filter(z)},B=function(){var n=Object(r.useState)("AWESOME"),e=Object(s.a)(n,2),t=e[0],o=e[1],i=A(t.toLowerCase());return a.a.createElement(h,null,a.a.createElement(p,{onChange:function(n){var e=n.target.value;return e.length>=3&&o(e.toUpperCase())}}),a.a.createElement(C,{letters:t.substr(0,7),permutations:i}))};var J=function(){return a.a.createElement(f,null,a.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));window.getValidPermutations=A,window.getPermutations=W,window.isValidWord=z,i.a.render(a.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.4cc43bab.chunk.js.map