(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{QeBL:function(e,t,n){"use strict";n.r(t),n.d(t,"indexPageQuery",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n("dI71"),r=n("q1tI"),l=n.n(r);function u(e,t,n,a,r,l,u){try{var o=e[l](u),i=o.value}catch(c){return void n(c)}o.done?t(i):Promise.resolve(i).then(a,r)}function o(e){var t=e.validate,n=Object(r.useState)(null),a=n[0],o=n[1],i=Object(r.useState)(null),c=i[0],d=i[1],s=Object(r.useState)(!1),f=s[0],m=s[1];Object(r.useEffect)((function(){var e,n=!1;return(e=function*(){if(null!==a){m(!0);var e=yield t(a);n||(m(!1),d(e))}},function(){var t=this,n=arguments;return new Promise((function(a,r){var l=e.apply(t,n);function o(e){u(l,a,r,o,i,"next",e)}function i(e){u(l,a,r,o,i,"throw",e)}o(void 0)}))})(),function(){n=!0}}),[t,a]);var v=Object(r.useCallback)((function(e){return o(e.target.value)}),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{style:{border:!f&&c?"1px solid #f33":"1px solid currentColor"},value:a||"",onChange:v}),f?l.a.createElement("div",null,'checking value "'+a+'"...'):c?l.a.createElement("div",{style:{color:"#f33"}},c):null!==a?l.a.createElement("div",null,"You're good."):null)}var i=n("Wp5m"),c="1219901537";function d(e){return new Promise((function(t){setTimeout((function(){e&&e.indexOf("foo")>=0&&t(null),t("Value does not contain foo.")}),1e3)}))}var s=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.name;e.tagline;return r.createElement(r.Fragment,null,r.createElement("main",null,r.createElement("header",null,r.createElement("h1",null,t)),r.createElement("div",{className:i.Container},r.createElement("p",null,'Enter a value. It will validate with a simulated API call, and determine if the value contains the text "foo".'),r.createElement(o,{validate:d}))))},t}(r.Component)},Wp5m:function(e,t,n){e.exports={Container:"Index-module--Container--xn-23"}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-53e0f779dbf1e1d414d8.js.map