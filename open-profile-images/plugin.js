(()=>{var O=Object.create;var u=Object.defineProperty;var P=Object.getOwnPropertyDescriptor;var W=Object.getOwnPropertyNames;var M=Object.getPrototypeOf,F=Object.prototype.hasOwnProperty;var j=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),q=(e,t)=>{for(var r in t)u(e,r,{get:t[r],enumerable:!0})},x=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of W(t))!F.call(e,i)&&i!==r&&u(e,i,{get:()=>t[i],enumerable:!(o=P(t,i))||o.enumerable});return e};var a=(e,t,r)=>(r=e!=null?O(M(e)):{},x(t||!e||!e.__esModule?u(r,"default",{value:e,enumerable:!0}):r,e)),z=e=>x(u({},"__esModule",{value:!0}),e);var s=j((ne,w)=>{w.exports=shelter.solidWeb});var te={};q(te,{onLoad:()=>Z,onUnload:()=>ee,settings:()=>L});var I=a(s(),1);var E="._container_14h8u_1{display:flex;justify-content:center;pointer-events:none}._wrapper_14h8u_1{position:relative;pointer-events:initial}._imageWrapper_14h8u_1{display:block;position:relative;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;overflow:hidden;border-radius:3px}._downloadLink_14h8u_1{font-size:14px;font-weight:500;display:inline-block;color:var(--white-500) !important;text-decoration:none;line-height:30px;-webkit-transition:opacity .15s ease;transition:opacity .15s ease;opacity:.5;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0}._downloadLink_14h8u_1:hover{opacity:1;text-decoration:underline}",l={container:"_container_14h8u_1",wrapper:"_wrapper_14h8u_1",imageWrapper:"_imageWrapper_14h8u_1",downloadLink:"_downloadLink_14h8u_1"};var $=a(s(),1),c=a(s(),1),k=a(s(),1),_=a(s(),1);var D=(0,$.template)('<div><div><div><img ioj4-opi></div><a rel="noreferrer noopener" target="_blank" tabindex="0">Open in Browser</a></div></div>',9),{plugin:{store:H}}=shelter,R=e=>{e.url.searchParams.set("size",H.fullResolution?"4096":"512");let t=e.url.toString();e.url.searchParams.set("size","4096");let r=e.url.toString();return(()=>{let o=D.cloneNode(!0),i=o.firstChild,d=i.firstChild,A=d.firstChild,m=d.nextSibling;return(0,_.setAttribute)(A,"src",t),(0,_.setAttribute)(m,"href",r),(0,k.effect)(n=>{let v=l.container,b=l.wrapper,h=l.imageWrapper,g=l.downloadLink;return v!==n._v$&&(0,c.className)(o,n._v$=v),b!==n._v$2&&(0,c.className)(i,n._v$2=b),h!==n._v$3&&(0,c.className)(d,n._v$3=h),g!==n._v$4&&(0,c.className)(m,n._v$4=g),n},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),o})()};var C=a(s(),1),{plugin:{store:y},ui:{SwitchItem:K}}=shelter,L=()=>(0,C.createComponent)(K,{get value(){return y.fullResolution},onChange:e=>{y.fullResolution=e},children:"Display images in their full resolution"});var{plugin:{store:B},flux:{dispatcher:p,intercept:Q},ui:{openModal:X,injectCss:Y},observeDom:G}=shelter;function J(e){console.log(e);let t=e.querySelector('div[class*="banner-"]');t&&(t.addEventListener("click",r=>U(r?.target?.style?.backgroundImage?.slice(5,-2))),t.style.cursor="pointer"),e.querySelectorAll('div[class*="wrapper-"]').forEach(r=>{avatarWrapper=r.parentElement.parentElement,!(avatarWrapper.className.includes("clickable-")&&avatarWrapper.onclick)&&(r.addEventListener("click",o=>U(o?.target?.querySelector('img[class*="avatar"]')?.src)),r.style.cursor="pointer")})}function U(e){e&&X(()=>(0,I.createComponent)(R,{url:new URL(e)}))}var V='[class*="userProfileModalInner"],[class*="userPopoutInner"]';function f(){let e=G(V,t=>{e(),queueMicrotask(J.bind(null,t))});setTimeout(e,1e3)}function N(e){(e.event==="open_popout"||e.event==="open_modal")&&f()}var S,T;function Z(){S=Y(E),T=Q(e=>{if(e?.type==="CONTEXT_MENU_OPEN"&&e?.contextMenu?.target?.hasAttribute("ioj4-opi"))return!1}),B.fullResolution??=!1,p.subscribe("TRACK",N),p.subscribe("USER_PROFILE_FETCH_FAILURE",f)}function ee(){p.unsubscribe("TRACK",N),p.unsubscribe("USER_PROFILE_FETCH_FAILURE",f),S(),T()}return z(te);})();
