(()=>{var i=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var E=Object.prototype.hasOwnProperty;var f=(e,t)=>{for(var n in t)i(e,n,{get:t[n],enumerable:!0})},g=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of S(t))!E.call(e,o)&&o!==n&&i(e,o,{get:()=>t[o],enumerable:!(s=m(t,o))||s.enumerable});return e};var h=e=>g(i({},"__esModule",{value:!0}),e);var U={};f(U,{onLoad:()=>k,onUnload:()=>I});var{flux:{dispatcher:a,stores:{GuildMemberStore:p,ChannelStore:C,RelationshipStore:b}},util:{getFiber:N,reactFiberWalker:_},observeDom:x}=shelter;function A(){for(let e of document.querySelectorAll("[id^=message-username-]")){if(e?.dataset?.YSINK_SU)continue;e.dataset.YSINK_SU=!0;let t=_(N(e),"message",!0).pendingProps?.message,n=t.author?.username,s=t?.author?.id,{type:o,guild_id:d}=C.getChannel(t?.channel_id),l=o?b.getNickname(s):p.getNick(d,s);if(!n)continue;let r=document.createElement("span");r.textContent=n,r.style="font-weight: 600;border-radius: 5px;padding-left: 3px;padding-right: 3px;background: var(--background-secondary);",e.firstElementChild.textContent=l?" "+e.firstElementChild.textContent:"",e.firstElementChild.prepend(r)}}var c=["MESSAGE_CREATE","CHANNEL_SELECT","LOAD_MESSAGES_SUCCESS","UPDATE_CHANNEL_DIMENSIONS"];function u(){let e=x("[id^=message-username-]",()=>{e(),queueMicrotask(A)});setTimeout(e,500)}function k(){for(let e of c)a.subscribe(e,u)}function I(){for(let e of c)a.unsubscribe(e,u)}return h(U);})();
