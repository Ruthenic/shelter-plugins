(()=>{var q=Object.create;var s=Object.defineProperty;var S=Object.getOwnPropertyDescriptor;var E=Object.getOwnPropertyNames;var x=Object.getPrototypeOf,A=Object.prototype.hasOwnProperty;var I=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports),$=(n,t)=>{for(var i in t)s(n,i,{get:t[i],enumerable:!0})},_=(n,t,i,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of E(t))!A.call(n,o)&&o!==i&&s(n,o,{get:()=>t[o],enumerable:!(e=S(t,o))||e.enumerable});return n};var c=(n,t,i)=>(i=n!=null?q(x(n)):{},_(t||!n||!n.__esModule?s(i,"default",{value:n,enumerable:!0}):i,n)),C=n=>_(s({},"__esModule",{value:!0}),n);var r=I((O,m)=>{m.exports=shelter.solidWeb});var Y={};$(Y,{onLoad:()=>R,onUnload:()=>U});var b=c(r(),1);var l="._indicator_1obqu_1{margin-left:4px}._indicator_1obqu_1 span{height:6px;width:6px;float:left;margin:0 1px;background-color:var(--text-normal);display:block;border-radius:50%;opacity:.3}._indicator_1obqu_1 span:nth-child(1){animation:1s ease-in 0.2s _typingAnimation_1obqu_1;animation-iteration-count:infinite}._indicator_1obqu_1 span:nth-child(2){animation:1s ease-in 0.4s _typingAnimation_1obqu_1;animation-iteration-count:infinite}._indicator_1obqu_1 span:nth-child(3){animation:1s ease-in 0.6s _typingAnimation_1obqu_1;animation-iteration-count:infinite}@keyframes _typingAnimation_1obqu_1{33.3%{opacity:1;transform:scale(1.2)}}",a={indicator:"_indicator_1obqu_1",typingAnimation:"_typingAnimation_1obqu_1"};var d=c(r(),1),u=c(r(),1),f=c(r(),1);var N=(0,d.template)("<div><span></span><span></span><span></span></div>",8),h=()=>(()=>{let n=N.cloneNode(!0);return(0,f.effect)(()=>(0,u.className)(n,a.indicator)),n})();var{ui:{injectCss:v},flux:{stores:{UserStore:G,TypingStore:P},dispatcher:g},solidWeb:{render:k}}=shelter;function y(n){if(n?.userId===G?.getCurrentUser()?.id)return;let t=document.querySelector(`[data-list-item-id="channels___${n?.channelId}"]`)?.parentElement;if(!t)return;let i=t.querySelector('div[class^="children-"]');if(i)switch(n?.type){case"TYPING_START":{if(!i.querySelector(`.${a.indicator}`)){let e=document.createElement("div");i.prepend(e),k(()=>(0,b.createComponent)(h,{}),e)}return}case"TYPING_STOP":case"MESSAGE_CREATE":{let e=i.querySelector(`.${a.indicator}`);e&&Object.keys(P.getTypingUsers(n?.channelId)).length===0&&e.remove()}}}var p,T=["TYPING_START","TYPING_STOP","MESSAGE_CREATE"];function R(){T.forEach(n=>g.subscribe(n,y)),p=v(l)}function U(){T.forEach(n=>g.unsubscribe(n,y)),p&&p()}return C(Y);})();
