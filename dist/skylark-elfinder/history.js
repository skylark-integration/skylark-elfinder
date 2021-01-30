/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
define(["./elFinder"],function(t){return t.prototype.history=function(t){"use strict";var n,e=this,r=!0,i=[],o=function(){i=[t.cwd().hash],n=0,r=!0},a=t.options.useBrowserHistory&&window.history&&window.history.pushState?window.history:null,s=function(a){return a&&e.canForward()||!a&&e.canBack()?(r=!1,t.exec("open",i[a?++n:--n]).fail(o)):$.Deferred().reject()},c=function(t){!a||a.state&&a.state.thash===t||a.pushState({thash:t},null,location.pathname+location.search+(t?"#elf_"+t:""))};this.canBack=function(){return n>0},this.canForward=function(){return n<i.length-1},this.back=s,this.forward=function(){return s(!0)},t.bind("init",function(){a&&!a.state&&c(t.startDir())}).open(function(){var e=i.length,o=t.cwd().hash;r&&(n>=0&&e>n+1&&i.splice(n+1),i[i.length-1]!=o&&i.push(o),n=i.length-1),r=!0,c(o)}).reload(t.options.reloadClearHistory&&o)},t});
//# sourceMappingURL=sourcemaps/history.js.map
