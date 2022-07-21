System.register(["./ba005aea.js"],(function(e){"use strict";var t,r,n,o,i,a,s,c,l,u,p,f,d,h,m,g,v,y,b,w,x,O,C,T,k,E,R;return{setters:[function(e){t=e.o,r=e.Z,n=e.g,o=e.c,i=e.d,a=e.h,s=e.a,c=e.b,l=e.W,u=e.J,p=e.t,f=e.m,d=e.i,h=e.j,m=e.k,g=e.l,v=e.p,y=e.q,b=e.s,w=e.u,x=e.v,O=e.w,C=e.x,T=e.y,k=e.z,E=e.B,R=e.C}],execute:function(){function P(e){return e?(e.nodeName||"").toLowerCase():null}function S(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function j(e){return e instanceof S(e).Element||e instanceof Element}function H(e){return e instanceof S(e).HTMLElement||e instanceof HTMLElement}function A(e){return"undefined"!=typeof ShadowRoot&&(e instanceof S(e).ShadowRoot||e instanceof ShadowRoot)}var L={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e];H(o)&&P(o)&&(Object.assign(o.style,r),Object.keys(n).forEach((function(e){var t=n[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{});H(n)&&P(n)&&(Object.assign(n.style,i),Object.keys(o).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]};function M(e){return e.split("-")[0]}var B=Math.max,D=Math.min,W=Math.round;function V(e,t){void 0===t&&(t=!1);var r=e.getBoundingClientRect(),n=1,o=1;if(H(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(n=W(r.width)/a||1),i>0&&(o=W(r.height)/i||1)}return{width:r.width/n,height:r.height/o,top:r.top/o,right:r.right/n,bottom:r.bottom/o,left:r.left/n,x:r.left/n,y:r.top/o}}function U(e){var t=V(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function F(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&A(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function N(e){return S(e).getComputedStyle(e)}function q(e){return["table","td","th"].indexOf(P(e))>=0}function X(e){return((j(e)?e.ownerDocument:e.document)||window.document).documentElement}function Y(e){return"html"===P(e)?e:e.assignedSlot||e.parentNode||(A(e)?e.host:null)||X(e)}function I(e){return H(e)&&"fixed"!==N(e).position?e.offsetParent:null}function z(e){for(var t=S(e),r=I(e);r&&q(r)&&"static"===N(r).position;)r=I(r);return r&&("html"===P(r)||"body"===P(r)&&"static"===N(r).position)?t:r||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&H(e)&&"fixed"===N(e).position)return null;for(var r=Y(e);H(r)&&["html","body"].indexOf(P(r))<0;){var n=N(r);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r;r=r.parentNode}return null}(e)||t}function _(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function J(e,t,r){return B(e,D(t,r))}function Z(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function $(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}var G={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,n=e.name,o=e.options,i=r.elements.arrow,a=r.modifiersData.popperOffsets,s=M(r.placement),c=_(s),l=[v,m].indexOf(s)>=0?"height":"width";if(i&&a){var u=function(e,t){return Z("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:$(e,w))}(o.padding,r),p=U(i),f="y"===c?h:v,d="y"===c?g:m,y=r.rects.reference[l]+r.rects.reference[c]-a[c]-r.rects.popper[l],b=a[c]-r.rects.reference[c],x=z(i),O=x?"y"===c?x.clientHeight||0:x.clientWidth||0:0,C=y/2-b/2,T=u[f],k=O-p[l]-u[d],E=O/2-p[l]/2+C,R=J(T,E,k),P=c;r.modifiersData[n]=((t={})[P]=R,t.centerOffset=R-E,t)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&F(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function K(e){return e.split("-")[1]}var Q={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ee(e){var t,r=e.popper,n=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,p=e.isFixed,f=a.x,d=void 0===f?0:f,b=a.y,w=void 0===b?0:b,x="function"==typeof u?u({x:d,y:w}):{x:d,y:w};d=x.x,w=x.y;var O=a.hasOwnProperty("x"),C=a.hasOwnProperty("y"),T=v,k=h,E=window;if(l){var R=z(r),P="clientHeight",j="clientWidth";R===S(r)&&"static"!==N(R=X(r)).position&&"absolute"===s&&(P="scrollHeight",j="scrollWidth"),(o===h||(o===v||o===m)&&i===y)&&(k=g,w-=(p&&E.visualViewport?E.visualViewport.height:R[P])-n.height,w*=c?1:-1),o!==v&&(o!==h&&o!==g||i!==y)||(T=m,d-=(p&&E.visualViewport?E.visualViewport.width:R[j])-n.width,d*=c?1:-1)}var H,A=Object.assign({position:s},l&&Q),L=!0===u?function(e){var t=e.x,r=e.y,n=window.devicePixelRatio||1;return{x:W(t*n)/n||0,y:W(r*n)/n||0}}({x:d,y:w}):{x:d,y:w};return d=L.x,w=L.y,c?Object.assign({},A,((H={})[k]=C?"0":"",H[T]=O?"0":"",H.transform=(E.devicePixelRatio||1)<=1?"translate("+d+"px, "+w+"px)":"translate3d("+d+"px, "+w+"px, 0)",H)):Object.assign({},A,((t={})[k]=C?w+"px":"",t[T]=O?d+"px":"",t.transform="",t))}var te={passive:!0},re={left:"right",right:"left",bottom:"top",top:"bottom"};function ne(e){return e.replace(/left|right|bottom|top/g,(function(e){return re[e]}))}var oe={start:"end",end:"start"};function ie(e){return e.replace(/start|end/g,(function(e){return oe[e]}))}function ae(e){var t=S(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function se(e){return V(X(e)).left+ae(e).scrollLeft}function ce(e){var t=N(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function le(e){return["html","body","#document"].indexOf(P(e))>=0?e.ownerDocument.body:H(e)&&ce(e)?e:le(Y(e))}function ue(e,t){var r;void 0===t&&(t=[]);var n=le(e),o=n===(null==(r=e.ownerDocument)?void 0:r.body),i=S(n),a=o?[i].concat(i.visualViewport||[],ce(n)?n:[]):n,s=t.concat(a);return o?s:s.concat(ue(Y(a)))}function pe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function fe(e,t){return t===T?pe(function(e){var t=S(e),r=X(e),n=t.visualViewport,o=r.clientWidth,i=r.clientHeight,a=0,s=0;return n&&(o=n.width,i=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=n.offsetLeft,s=n.offsetTop)),{width:o,height:i,x:a+se(e),y:s}}(e)):j(t)?function(e){var t=V(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):pe(function(e){var t,r=X(e),n=ae(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=B(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=B(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+se(e),c=-n.scrollTop;return"rtl"===N(o||r).direction&&(s+=B(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(X(e)))}function de(e,t,r){var n="clippingParents"===t?function(e){var t=ue(Y(e)),r=["absolute","fixed"].indexOf(N(e).position)>=0&&H(e)?z(e):e;return j(r)?t.filter((function(e){return j(e)&&F(e,r)&&"body"!==P(e)})):[]}(e):[].concat(t),o=[].concat(n,[r]),i=o[0],a=o.reduce((function(t,r){var n=fe(e,r);return t.top=B(n.top,t.top),t.right=D(n.right,t.right),t.bottom=D(n.bottom,t.bottom),t.left=B(n.left,t.left),t}),fe(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function he(e){var t,r=e.reference,n=e.element,o=e.placement,i=o?M(o):null,a=o?K(o):null,s=r.x+r.width/2-n.width/2,c=r.y+r.height/2-n.height/2;switch(i){case h:t={x:s,y:r.y-n.height};break;case g:t={x:s,y:r.y+r.height};break;case m:t={x:r.x+r.width,y:c};break;case v:t={x:r.x-n.width,y:c};break;default:t={x:r.x,y:r.y}}var l=i?_(i):null;if(null!=l){var u="y"===l?"height":"width";switch(a){case b:t[l]=t[l]-(r[u]/2-n[u]/2);break;case y:t[l]=t[l]+(r[u]/2-n[u]/2)}}return t}function me(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=void 0===n?e.placement:n,i=r.boundary,a=void 0===i?R:i,s=r.rootBoundary,c=void 0===s?T:s,l=r.elementContext,u=void 0===l?x:l,p=r.altBoundary,f=void 0!==p&&p,d=r.padding,v=void 0===d?0:d,y=Z("number"!=typeof v?v:$(v,w)),b=u===x?k:x,O=e.rects.popper,C=e.elements[f?b:u],E=de(j(C)?C:C.contextElement||X(e.elements.popper),a,c),P=V(e.elements.reference),S=he({reference:P,element:O,strategy:"absolute",placement:o}),H=pe(Object.assign({},O,S)),A=u===x?H:P,L={top:E.top-A.top+y.top,bottom:A.bottom-E.bottom+y.bottom,left:E.left-A.left+y.left,right:A.right-E.right+y.right},M=e.modifiersData.offset;if(u===x&&M){var B=M[o];Object.keys(L).forEach((function(e){var t=[m,g].indexOf(e)>=0?1:-1,r=[h,g].indexOf(e)>=0?"y":"x";L[e]+=B[r]*t}))}return L}var ge={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0===a||a,c=r.fallbackPlacements,l=r.padding,u=r.boundary,p=r.rootBoundary,f=r.altBoundary,d=r.flipVariations,y=void 0===d||d,x=r.allowedAutoPlacements,T=t.options.placement,k=M(T),R=c||(k!==T&&y?function(e){if(M(e)===O)return[];var t=ne(e);return[ie(e),t,ie(t)]}(T):[ne(T)]),P=[T].concat(R).reduce((function(e,r){return e.concat(M(r)===O?function(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,a=r.padding,s=r.flipVariations,c=r.allowedAutoPlacements,l=void 0===c?C:c,u=K(n),p=u?s?E:E.filter((function(e){return K(e)===u})):w,f=p.filter((function(e){return l.indexOf(e)>=0}));0===f.length&&(f=p);var d=f.reduce((function(t,r){return t[r]=me(e,{placement:r,boundary:o,rootBoundary:i,padding:a})[M(r)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:r,boundary:u,rootBoundary:p,padding:l,flipVariations:y,allowedAutoPlacements:x}):r)}),[]),S=t.rects.reference,j=t.rects.popper,H=new Map,A=!0,L=P[0],B=0;B<P.length;B++){var D=P[B],W=M(D),V=K(D)===b,U=[h,g].indexOf(W)>=0,F=U?"width":"height",N=me(t,{placement:D,boundary:u,rootBoundary:p,altBoundary:f,padding:l}),q=U?V?m:v:V?g:h;S[F]>j[F]&&(q=ne(q));var X=ne(q),Y=[];if(i&&Y.push(N[W]<=0),s&&Y.push(N[q]<=0,N[X]<=0),Y.every((function(e){return e}))){L=D,A=!1;break}H.set(D,Y)}if(A)for(var I=function(e){var t=P.find((function(t){var r=H.get(t);if(r)return r.slice(0,e).every((function(e){return e}))}));if(t)return L=t,"break"},z=y?3:1;z>0&&"break"!==I(z);z--);t.placement!==L&&(t.modifiersData[n]._skip=!0,t.placement=L,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function ve(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function ye(e){return[h,m,g,v].some((function(t){return e[t]>=0}))}var be={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=void 0===o?[0,0]:o,a=C.reduce((function(e,r){return e[r]=function(e,t,r){var n=M(e),o=[v,h].indexOf(n)>=0?-1:1,i="function"==typeof r?r(Object.assign({},t,{placement:e})):r,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[v,m].indexOf(n)>=0?{x:s,y:a}:{x:a,y:s}}(r,t.rects,i),e}),{}),s=a[t.placement],c=s.x,l=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[n]=a}},we={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0!==a&&a,c=r.boundary,l=r.rootBoundary,u=r.altBoundary,p=r.padding,f=r.tether,d=void 0===f||f,y=r.tetherOffset,w=void 0===y?0:y,x=me(t,{boundary:c,rootBoundary:l,padding:p,altBoundary:u}),O=M(t.placement),C=K(t.placement),T=!C,k=_(O),E="x"===k?"y":"x",R=t.modifiersData.popperOffsets,P=t.rects.reference,S=t.rects.popper,j="function"==typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,H="number"==typeof j?{mainAxis:j,altAxis:j}:Object.assign({mainAxis:0,altAxis:0},j),A=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(R){if(i){var W,V="y"===k?h:v,F="y"===k?g:m,N="y"===k?"height":"width",q=R[k],X=q+x[V],Y=q-x[F],I=d?-S[N]/2:0,Z=C===b?P[N]:S[N],$=C===b?-S[N]:-P[N],G=t.elements.arrow,Q=d&&G?U(G):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[V],re=ee[F],ne=J(0,P[N],Q[N]),oe=T?P[N]/2-I-ne-te-H.mainAxis:Z-ne-te-H.mainAxis,ie=T?-P[N]/2+I+ne+re+H.mainAxis:$+ne+re+H.mainAxis,ae=t.elements.arrow&&z(t.elements.arrow),se=ae?"y"===k?ae.clientTop||0:ae.clientLeft||0:0,ce=null!=(W=null==A?void 0:A[k])?W:0,le=q+ie-ce,ue=J(d?D(X,q+oe-ce-se):X,q,d?B(Y,le):Y);R[k]=ue,L[k]=ue-q}if(s){var pe,fe="x"===k?h:v,de="x"===k?g:m,he=R[E],ge="y"===E?"height":"width",ve=he+x[fe],ye=he-x[de],be=-1!==[h,v].indexOf(O),we=null!=(pe=null==A?void 0:A[E])?pe:0,xe=be?ve:he-P[ge]-S[ge]-we+H.altAxis,Oe=be?he+P[ge]+S[ge]-we-H.altAxis:ye,Ce=d&&be?function(e,t,r){var n=J(e,t,r);return n>r?r:n}(xe,he,Oe):J(d?xe:ve,he,d?Oe:ye);R[E]=Ce,L[E]=Ce-he}t.modifiersData[n]=L}},requiresIfExists:["offset"]};function xe(e,t,r){void 0===r&&(r=!1);var n,o,i=H(t),a=H(t)&&function(e){var t=e.getBoundingClientRect(),r=W(t.width)/e.offsetWidth||1,n=W(t.height)/e.offsetHeight||1;return 1!==r||1!==n}(t),s=X(t),c=V(e,a),l={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(i||!i&&!r)&&(("body"!==P(t)||ce(s))&&(l=(n=t)!==S(n)&&H(n)?{scrollLeft:(o=n).scrollLeft,scrollTop:o.scrollTop}:ae(n)),H(t)?((u=V(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):s&&(u.x=se(s))),{x:c.left+l.scrollLeft-u.x,y:c.top+l.scrollTop-u.y,width:c.width,height:c.height}}function Oe(e){var t=new Map,r=new Set,n=[];function o(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var n=t.get(e);n&&o(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||o(e)})),n}var Ce={placement:"bottom",modifiers:[],strategy:"absolute"};function Te(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}var ke=function(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,o=t.defaultOptions,i=void 0===o?Ce:o;return function(e,t,r){void 0===r&&(r=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ce,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],l=!1,u={state:s,setOptions:function(r){var o="function"==typeof r?r(s.options):r;p(),s.options=Object.assign({},i,s.options,o),s.scrollParents={reference:j(e)?ue(e):e.contextElement?ue(e.contextElement):[],popper:ue(t)};var a,l,d=function(e){var t=Oe(e);return f.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}((a=[].concat(n,s.options.modifiers),l=a.reduce((function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e}),{}),Object.keys(l).map((function(e){return l[e]}))));return s.orderedModifiers=d.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:u,options:n});c.push(i||function(){})}})),u.update()},forceUpdate:function(){if(!l){var e=s.elements,t=e.reference,r=e.popper;if(Te(t,r)){s.rects={reference:xe(t,z(r),"fixed"===s.options.strategy),popper:U(r)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<s.orderedModifiers.length;n++)if(!0!==s.reset){var o=s.orderedModifiers[n],i=o.fn,a=o.options,c=void 0===a?{}:a,p=o.name;"function"==typeof i&&(s=i({state:s,options:c,name:p,instance:u})||s)}else s.reset=!1,n=-1}}},update:(o=function(){return new Promise((function(e){u.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){p(),l=!0}};if(!Te(e,t))return u;function p(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(r).then((function(e){!l&&r.onFirstUpdate&&r.onFirstUpdate(e)})),u}}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=void 0===o||o,a=n.resize,s=void 0===a||a,c=S(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&l.forEach((function(e){e.addEventListener("scroll",r.update,te)})),s&&c.addEventListener("resize",r.update,te),function(){i&&l.forEach((function(e){e.removeEventListener("scroll",r.update,te)})),s&&c.removeEventListener("resize",r.update,te)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=he({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=void 0===n||n,i=r.adaptive,a=void 0===i||i,s=r.roundOffsets,c=void 0===s||s,l={placement:M(t.placement),variation:K(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ee(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ee(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},L,be,ge,we,G,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=me(t,{elementContext:"reference"}),s=me(t,{altBoundary:!0}),c=ve(a,n),l=ve(s,o,i),u=ye(c),p=ye(l);t.modifiersData[r]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}}]}),Ee=t.exports.createContext(),Re=t.exports.createContext();function Pe(e){var r=e.children,n=t.exports.useState(null),o=n[0],i=n[1],a=t.exports.useRef(!1);t.exports.useEffect((function(){return function(){a.current=!0}}),[]);var s=t.exports.useCallback((function(e){a.current||i(e)}),[]);return t.exports.createElement(Ee.Provider,{value:o},t.exports.createElement(Re.Provider,{value:s},r))}var Se=function(e){return Array.isArray(e)?e[0]:e},je=function(e){if("function"==typeof e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e.apply(void 0,r)}},He=function(e,t){if("function"==typeof e)return je(e,t);null!=e&&(e.current=t)},Ae=function(e){return e.reduce((function(e,t){var r=t[0],n=t[1];return e[r]=n,e}),{})},Le="undefined"!=typeof window&&window.document&&window.document.createElement?t.exports.useLayoutEffect:t.exports.useEffect,Me=[],Be=function(){},De=function(){return Promise.resolve(null)},We=[];function Ve(e){var r=e.placement,n=void 0===r?"bottom":r,o=e.strategy,i=void 0===o?"absolute":o,a=e.modifiers,s=void 0===a?We:a,c=e.referenceElement,l=e.onFirstUpdate,u=e.innerRef,p=e.children,f=t.exports.useContext(Ee),h=t.exports.useState(null),m=h[0],g=h[1],v=t.exports.useState(null),y=v[0],b=v[1];t.exports.useEffect((function(){He(u,m)}),[u,m]);var w=t.exports.useMemo((function(){return{placement:n,strategy:i,onFirstUpdate:l,modifiers:[].concat(s,[{name:"arrow",enabled:null!=y,options:{element:y}}])}}),[n,i,l,s,y]),x=function(e,r,n){void 0===n&&(n={});var o=t.exports.useRef(null),i={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||Me},a=t.exports.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=a[0],c=a[1],l=t.exports.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,r=Object.keys(t.elements);c({styles:Ae(r.map((function(e){return[e,t.styles[e]||{}]}))),attributes:Ae(r.map((function(e){return[e,t.attributes[e]]})))})},requires:["computeStyles"]}}),[]),u=t.exports.useMemo((function(){var e={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[l,{name:"applyStyles",enabled:!1}])};return d(o.current,e)?o.current||e:(o.current=e,e)}),[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,l]),p=t.exports.useRef();return Le((function(){p.current&&p.current.setOptions(u)}),[u]),Le((function(){if(null!=e&&null!=r){var t=(n.createPopper||ke)(e,r,u);return p.current=t,function(){t.destroy(),p.current=null}}}),[e,r,n.createPopper]),{state:p.current?p.current.state:null,styles:s.styles,attributes:s.attributes,update:p.current?p.current.update:null,forceUpdate:p.current?p.current.forceUpdate:null}}(c||f,m,w),O=x.state,C=x.styles,T=x.forceUpdate,k=x.update,E=t.exports.useMemo((function(){return{ref:g,style:C.popper,placement:O?O.placement:n,hasPopperEscaped:O&&O.modifiersData.hide?O.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:O&&O.modifiersData.hide?O.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:C.arrow,ref:b},forceUpdate:T||Be,update:k||De}}),[g,b,n,O,C,k,T]);return Se(p)(E)}function Ue(e){var r=e.children,n=e.innerRef,o=t.exports.useContext(Re),i=t.exports.useCallback((function(e){He(n,e),je(o,e)}),[n,o]);return t.exports.useEffect((function(){return function(){return He(n,null)}})),t.exports.useEffect((function(){}),[o]),Se(r)({ref:i})}var Fe=r.createContext({}),Ne=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.forEach((function(e){return e&&e.apply(void 0,r)}))}},qe=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)},Xe=function(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)},Ye=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).observer=void 0,t.tooltipRef=void 0,t.handleOutsideClick=function(e){if(t.tooltipRef&&!t.tooltipRef.contains(e.target)){var r=t.context.parentOutsideClickHandler,n=t.props,o=n.hideTooltip;(0,n.clearScheduled)(),o(),r&&r(e)}},t.handleOutsideRightClick=function(e){if(t.tooltipRef&&!t.tooltipRef.contains(e.target)){var r=t.context.parentOutsideRightClickHandler,n=t.props,o=n.hideTooltip;(0,n.clearScheduled)(),o(),r&&r(e)}},t.addOutsideClickHandler=function(){document.body.addEventListener("touchend",t.handleOutsideClick),document.body.addEventListener("click",t.handleOutsideClick)},t.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",t.handleOutsideClick),document.body.removeEventListener("click",t.handleOutsideClick)},t.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",t.handleOutsideRightClick)},t.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",t.handleOutsideRightClick)},t.getTooltipRef=function(e){t.tooltipRef=e,Xe(t.props.innerRef,e)},t.getArrowProps=function(e){return void 0===e&&(e={}),i({},e,{style:i({},e.style,t.props.arrowProps.style)})},t.getTooltipProps=function(e){return void 0===e&&(e={}),i({},e,t.isTriggeredBy("hover")&&{onMouseEnter:Ne(t.props.clearScheduled,e.onMouseEnter),onMouseLeave:Ne(t.props.hideTooltip,e.onMouseLeave)},{style:i({},e.style,t.props.style)})},t.contextValue={isParentNoneTriggered:"none"===t.props.trigger,addParentOutsideClickHandler:t.addOutsideClickHandler,addParentOutsideRightClickHandler:t.addOutsideRightClickHandler,parentOutsideClickHandler:t.handleOutsideClick,parentOutsideRightClickHandler:t.handleOutsideRightClick,removeParentOutsideClickHandler:t.removeOutsideClickHandler,removeParentOutsideRightClickHandler:t.removeOutsideRightClickHandler},t}n(t,e);var o=t.prototype;return o.componentDidMount=function(){var e=this;if((this.observer=new MutationObserver((function(){e.props.update()}))).observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var t=this.context,r=t.removeParentOutsideClickHandler,n=t.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),r&&r(),n&&n()}},o.componentDidUpdate=function(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},o.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var e=this.context,t=e.isParentNoneTriggered,r=e.addParentOutsideClickHandler,n=e.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!t&&r&&r(),!t&&n&&n()}},o.render=function(){var e=this.props,t=e.arrowProps,n=e.placement,o=e.tooltip;return r.createElement(Fe.Provider,{value:this.contextValue},o({arrowRef:t.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:n,tooltipRef:this.getTooltipRef}))},o.isTriggeredBy=function(e){var t=this.props.trigger;return t===e||Array.isArray(t)&&t.includes(e)},t}(t.exports.Component);Ye.contextType=Fe;var Ie=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={tooltipShown:t.props.defaultTooltipShown},t.hideTimeout=void 0,t.showTimeout=void 0,t.popperOffset=void 0,t.setTooltipState=function(e){var r=function(){return t.props.onVisibilityChange(e.tooltipShown)};t.isControlled()?r():t.setState(e,r)},t.clearScheduled=function(){clearTimeout(t.hideTimeout),clearTimeout(t.showTimeout)},t.showTooltip=function(e){var r=e.pageX,n=e.pageY;t.clearScheduled();var o={tooltipShown:!0};t.props.followCursor&&(o=i({},o,{pageX:r,pageY:n})),t.showTimeout=window.setTimeout((function(){return t.setTooltipState(o)}),t.props.delayShow)},t.hideTooltip=function(){t.clearScheduled(),t.hideTimeout=window.setTimeout((function(){return t.setTooltipState({tooltipShown:!1})}),t.props.delayHide)},t.toggleTooltip=function(e){var r=e.pageX,n=e.pageY,o=t.getState()?"hideTooltip":"showTooltip";t[o]({pageX:r,pageY:n})},t.clickToggle=function(e){e.preventDefault();var r=e.pageX,n=e.pageY,o=t.props.followCursor?"showTooltip":"toggleTooltip";t[o]({pageX:r,pageY:n})},t.contextMenuToggle=function(e){e.preventDefault();var r=e.pageX,n=e.pageY,o=t.props.followCursor?"showTooltip":"toggleTooltip";t[o]({pageX:r,pageY:n})},t.getTriggerProps=function(e){return void 0===e&&(e={}),i({},e,t.isTriggeredBy("click")&&{onClick:Ne(t.clickToggle,e.onClick),onTouchEnd:Ne(t.clickToggle,e.onTouchEnd)},t.isTriggeredBy("right-click")&&{onContextMenu:Ne(t.contextMenuToggle,e.onContextMenu)},t.isTriggeredBy("hover")&&i({onMouseEnter:Ne(t.showTooltip,e.onMouseEnter),onMouseLeave:Ne(t.hideTooltip,e.onMouseLeave)},t.props.followCursor&&{onMouseMove:Ne(t.showTooltip,e.onMouseMove)}),t.isTriggeredBy("focus")&&{onFocus:Ne(t.showTooltip,e.onFocus),onBlur:Ne(t.hideTooltip,e.onBlur)})},t}n(t,e);var s=t.prototype;return s.componentWillUnmount=function(){this.clearScheduled()},s.render=function(){var e=this,t=this.props,n=t.children,s=t.tooltip,c=t.placement,l=t.trigger,u=t.getTriggerRef,p=t.modifiers,f=t.closeOnReferenceHidden,d=t.usePortal,h=t.portalContainer,m=t.followCursor,g=t.getTooltipRef,v=t.mutationObserverOptions,y=o(t,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),b=r.createElement(Ve,i({innerRef:g,placement:c,modifiers:[{name:"followCursor",enabled:m,phase:"main",fn:function(t){e.popperOffset=t.state.rects.popper}}].concat(p)},y),(function(t){var n=t.ref,o=t.style,a=t.placement,c=t.arrowProps,u=t.isReferenceHidden,p=t.update;if(m&&e.popperOffset){var d=e.state,h=d.pageX,g=d.pageY,y=e.popperOffset,b=y.width,w=y.height,x=h+b>window.pageXOffset+document.body.offsetWidth?h-b:h,O=g+w>window.pageYOffset+document.body.offsetHeight?g-w:g;o.transform="translate3d("+x+"px, "+O+"px, 0"}return r.createElement(Ye,i({arrowProps:c,closeOnReferenceHidden:f,isReferenceHidden:u,placement:a,update:p,style:o,tooltip:s,trigger:l,mutationObserverOptions:v},{clearScheduled:e.clearScheduled,hideTooltip:e.hideTooltip,innerRef:n}))}));return r.createElement(Pe,null,r.createElement(Ue,{innerRef:u},(function(t){var r=t.ref;return n({getTriggerProps:e.getTriggerProps,triggerRef:r})})),this.getState()&&(d?a.exports.createPortal(b,h):b))},s.isControlled=function(){return void 0!==this.props.tooltipShown},s.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},s.isTriggeredBy=function(e){var t=this.props.trigger;return t===e||Array.isArray(t)&&t.includes(e)},t}(t.exports.Component);Ie.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:function(){},placement:"right",portalContainer:qe()?document.body:null,trigger:"hover",usePortal:qe(),mutationObserverOptions:{childList:!0,subtree:!0},modifiers:[]};var ze=Ie;function _e(){return _e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_e.apply(this,arguments)}var Je,Ze,$e=s(1e3)((function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return t.split("-")[0]===e?r:n})),Ge=c.div({position:"absolute",borderStyle:"solid"},(function(e){var t=e.placement,r=0,n=0;switch(!0){case t.startsWith("left")||t.startsWith("right"):n=8;break;case t.startsWith("top")||t.startsWith("bottom"):r=8}return{transform:"translate3d(".concat(r,"px, ").concat(n,"px, 0px)")}}),(function(e){var t=e.theme,r=e.color,n=e.placement;return{bottom:"".concat($e("top",n,-8,"auto"),"px"),top:"".concat($e("bottom",n,-8,"auto"),"px"),right:"".concat($e("left",n,-8,"auto"),"px"),left:"".concat($e("right",n,-8,"auto"),"px"),borderBottomWidth:"".concat($e("top",n,"0",8),"px"),borderTopWidth:"".concat($e("bottom",n,"0",8),"px"),borderRightWidth:"".concat($e("left",n,"0",8),"px"),borderLeftWidth:"".concat($e("right",n,"0",8),"px"),borderTopColor:$e("top",n,t.color[r]||r||"light"===t.base?l(t.background.app):u(t.background.app),"transparent"),borderBottomColor:$e("bottom",n,t.color[r]||r||"light"===t.base?l(t.background.app):u(t.background.app),"transparent"),borderLeftColor:$e("left",n,t.color[r]||r||"light"===t.base?l(t.background.app):u(t.background.app),"transparent"),borderRightColor:$e("right",n,t.color[r]||r||"light"===t.base?l(t.background.app):u(t.background.app),"transparent")}})),Ke=c.div((function(e){return{display:e.hidden?"none":"inline-block",zIndex:2147483647}}),(function(e){var t=e.theme,r=e.color;return e.hasChrome?{background:t.color[r]||r||"light"===t.base?l(t.background.app):u(t.background.app),filter:"\n            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))\n            drop-shadow(0 1px 3px rgba(0,0,0,0.1))\n          ",borderRadius:2*t.appBorderRadius,fontSize:t.typography.size.s1}:{}})),Qe=function(e){var t=e.placement,n=e.hasChrome,o=e.children,i=e.arrowProps,a=e.tooltipRef,s=e.arrowRef,c=e.color,l=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["placement","hasChrome","children","arrowProps","tooltipRef","arrowRef","color"]);return r.createElement(Ke,_e({hasChrome:n,placement:t,ref:a},l,{color:c}),n&&r.createElement(Ge,_e({placement:t,ref:s},i,{color:c})),o)};function et(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function tt(){return tt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},tt.apply(this,arguments)}function rt(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function nt(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Qe.displayName="Tooltip",Qe.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var ot=p.document,it=c.div(Je||(Je=nt(["\n  display: inline-block;\n  cursor: ",";\n"])),(function(e){return"hover"===e.mode?"default":"pointer"})),at=c.g(Ze||(Ze=nt(["\n  cursor: ",";\n"])),(function(e){return"hover"===e.mode?"default":"pointer"})),st=e("WithTooltipPure",(function(e){var t=e.svg,n=e.trigger;e.closeOnClick;var o=e.placement,i=e.modifiers,a=e.hasChrome,s=e.tooltip,c=e.children,l=e.tooltipShown,u=e.onVisibilityChange,p=rt(e,["svg","trigger","closeOnClick","placement","modifiers","hasChrome","tooltip","children","tooltipShown","onVisibilityChange"]),f=t?at:it;return r.createElement(ze,{placement:o,trigger:n,modifiers:i,tooltipShown:l,onVisibilityChange:u,tooltip:function(e){var t=e.getTooltipProps,n=e.getArrowProps,o=e.tooltipRef,i=e.arrowRef,c=e.placement;return r.createElement(Qe,tt({hasChrome:a,placement:c,tooltipRef:o,arrowRef:i,arrowProps:n()},t()),"function"==typeof s?s({onHide:function(){return u(!1)}}):s)}},(function(e){var t=e.getTriggerProps,n=e.triggerRef;return r.createElement(f,tt({ref:n},t(),p),c)}))}));st.displayName="WithTooltipPure",st.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var ct=function(e){var n=e.startOpen,o=e.onVisibilityChange,i=rt(e,["startOpen","onVisibilityChange"]),a=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return et(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?et(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t.exports.useState(n||!1),2),s=a[0],c=a[1],l=t.exports.useCallback((function(e){o&&!1===o(e)||c(e)}),[o]);return t.exports.useEffect((function(){var e=function(){return l(!1)};ot.addEventListener("keydown",e,!1);var t=Array.from(ot.getElementsByTagName("iframe")),r=[];return t.forEach((function(t){var n=function(){try{t.contentWindow.document&&(t.contentWindow.document.addEventListener("click",e),r.push((function(){try{t.contentWindow.document.removeEventListener("click",e)}catch(e){}})))}catch(e){}};n(),t.addEventListener("load",n),r.push((function(){t.removeEventListener("load",n)}))})),function(){ot.removeEventListener("keydown",e),r.forEach((function(e){e()}))}})),r.createElement(st,tt({},i,{tooltipShown:s,onVisibilityChange:l}))};e({WithToolTipState:ct,WithTooltip:ct}),ct.displayName="WithToolTipState"}}}));
