(()=>{var l=Object.defineProperty;var I=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var y=Object.prototype.hasOwnProperty;var T=(e,t)=>{for(var o in t)l(e,o,{get:t[o],enumerable:!0})},_=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of x(t))!y.call(e,s)&&s!==o&&l(e,s,{get:()=>t[s],enumerable:!(r=I(t,s))||r.enumerable});return e};var j=e=>_(l({},"__esModule",{value:!0}),e);var M={};T(M,{onUnload:()=>L});var u=()=>shelter.flux.stores.UserStore.getCurrentUser(),i,a=()=>{i||(i=u().premiumType,u().premiumType=2)},d=()=>{i!==void 0&&(u().premiumType=i,i=void 0)};var{plugin:{store:p},flux:{stores:{SelectedGuildStore:N,EmojiStore:v}}}=shelter,C=()=>!!document.querySelector('[data-list-item-id="guildsnav___home"][class*="selected"]'),z=()=>Number.isSafeInteger(parseInt(p.size))?p.size:64,f=e=>{let t=[],o=[];for(let r of e){let s=[];for(let n of r.children){if(n.emoji){let c=v.getCustomEmojiById(n.emoji.emojiId);if(c.guildId!==N.getLastSelectedGuildId()||c.animated||C()){t.push(`${c.url.split("?")[0]}?size=${z()}`);continue}}s.push(n)}o.push({type:"line",children:s})}for(let r of t)o.push({type:"line",children:[{text:r}]});return o};var{flux:{dispatcher:h},plugin:{store:m},observeDom:b,util:{getFiber:k}}=shelter;m.size===void 0&&(m.size=64);function g(e){let t=(o,r)=>{if(e.event===o){a();let s=b(r,n=>{n.isConnected||(setTimeout(()=>d(),5e3),s())})}};t("expression_picker_opened","#emoji-picker-tab-panel"),t("channel_autocomplete_open","[class*=autocomplete]")}var S=!1,E=e=>{if(e.dataset.YSINK_FM)return;e.dataset.YSINK_FM="1";let o=k(e).child.pendingProps.editor;e.onkeydown=r=>{S||r.key==="Enter"&&!document.querySelector("[class*=autocomplete],[class*=attachedBars]")&&(o.children=f(o.children))}},K=b('[class*="slateContainer-"]',e=>{E(e)});h.subscribe("TRACK",g);var L=()=>{h.unsubscribe("TRACK",g),K(),S=!0};return j(M);})();