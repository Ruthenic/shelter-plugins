(()=>{var G=Object.create;var f=Object.defineProperty;var Z=Object.getOwnPropertyDescriptor;var j=Object.getOwnPropertyNames;var q=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty;var U=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Q=(t,e)=>{for(var n in e)f(t,n,{get:e[n],enumerable:!0})},$=(t,e,n,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of j(e))!D.call(t,s)&&s!==n&&f(t,s,{get:()=>e[s],enumerable:!(o=Z(e,s))||o.enumerable});return t};var i=(t,e,n)=>(n=t!=null?G(q(t)):{},$(e||!t||!t.__esModule?f(n,"default",{value:t,enumerable:!0}):n,t)),z=t=>$(f({},"__esModule",{value:!0}),t);var r=U((mt,b)=>{b.exports=shelter.solidWeb});var dt={};Q(dt,{onLoad:()=>pt,onUnload:()=>ht});var M=i(r(),1);var a=i(r(),1),L=i(r(),1),m=i(r(),1),p=i(r(),1),h=i(r(),1),u=i(r(),1),_=i(r(),1);var S=(t,e)=>window.open(`spotify:${t}:${e}`),K="https://api.spotify.com/v1/me/player",x=()=>Object.values(shelter.flux.stores.SpotifyStore.__getLocalVars().accounts)[0],W=async()=>(x().handleDeviceStateChange(),new Promise(t=>setTimeout(t,1e3))),E=()=>{let t=x().accessToken;if(t)return t;shelter.util.log("No Spotify Token","error"),shelter.ui.showToast({title:"No Spotify Token",content:"uhoh"})},H=async(t,e,n)=>{let o=K+e;return new Promise((s,d)=>{let c={method:t,headers:{"Content-Type":"application/json",Authorization:`Bearer ${E()}`},body:n};fetch(o,c).then(async g=>{if(console.log(g),g.ok){s();return}if(g.status===401){await W(),c.headers.Authorization=`Bearer ${E()}`,fetch(o,c).then(B=>{B.ok&&s(),d()});return}d()})})},V=(t,e)=>{H("PUT",`/play?device_id=${Object.values(shelter.flux.stores.SpotifyStore.__getLocalVars().playerDevices)[0][0].id}`,JSON.stringify({uris:[`spotify:${t}:${e}`]})).then(()=>shelter.ui.showToast({title:"success"}),()=>shelter.ui.showToast({title:"no success"}))},N=(t,e)=>{H("POST",`/queue?uri=spotify:${t}:${e}&device_id=${Object.values(shelter.flux.stores.SpotifyStore.__getLocalVars().playerDevices)[0][0].id}`).then(()=>shelter.ui.showToast({title:"success"}),()=>shelter.ui.showToast({title:"no success"}))};var T="._button_622u1_1{background-color:rgba(0,0,0,0);color:var(--interactive-active);transition:opacity 250ms;padding:0;height:20px}._button_622u1_1:hover{color:var(--interactive-hover)}._wrapper_622u1_1{display:inline-block;height:20px;border-radius:5px;padding:0 3px;background:var(--background-secondary)}._container_622u1_1{margin:0 2px 0 6px;display:inline-flex;gap:10px;vertical-align:bottom}",l={button:"_button_622u1_1",wrapper:"_wrapper_622u1_1",container:"_container_622u1_1"};var J=(0,a.template)('<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6438 2.15465C11.4612 2.19322 11.2874 2.28356 11.1453 2.42565L7.59106 5.97985C7.4563 6.36608 7.54272 6.81285 7.85181 7.12194C8.17065 7.44078 8.63647 7.52281 9.03101 7.36803L10.8528 5.54674V13.0223C10.8528 13.5746 11.3 14.0223 11.8528 14.0223C12.405 14.0223 12.8528 13.5746 12.8528 13.0223V5.54674L14.6746 7.36901C15.0691 7.52281 15.5344 7.44078 15.8528 7.12194C16.1624 6.81285 16.2488 6.36559 16.113 5.97887L12.5598 2.42565C12.3113 2.17711 11.9641 2.08678 11.6438 2.15465Z" fill="currentColor"></path><path d="M4.18774 8.0775C3.6355 8.0775 3.18774 8.52526 3.18774 9.0775V20.8671C3.18774 21.4193 3.6355 21.8671 4.18774 21.8671H19.8123C20.3645 21.8671 20.8123 21.4193 20.8123 20.8671V9.0775C20.8123 8.52526 20.3645 8.0775 19.8123 8.0775H16.8743V10.0775H18.8123V19.8671H5.18774V10.0775H6.83032V8.0775H4.18774Z" fill="currentColor"></path></svg>',6),X=(0,a.template)('<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.02637 1.04321H6.02637V4.04321H9.02637V6.04321H6.02637V9.04321H4.02637V6.04321H1.02637V4.04321H4.02637V1.04321Z" fill="currentColor"></path><path d="M12.0776 5.53198C12.0493 5.76099 12.0103 5.98657 11.9604 6.20825H19.1411C19.7939 6.20825 20.3237 6.73804 20.3237 7.39087C20.3237 8.0437 19.7939 8.57349 19.1411 8.57349H10.9424C10.48 9.26099 9.89844 9.86206 9.22754 10.3474C8.92041 10.5696 8.59473 10.7673 8.25293 10.9382H19.4263C21.3853 10.9382 22.9736 9.34985 22.9736 7.39087C22.9736 5.43188 21.3853 3.84351 19.4263 3.84351H12.0815C12.1133 4.11499 12.1299 4.39136 12.1299 4.67163C12.1299 4.96265 12.1123 5.24976 12.0776 5.53198Z" fill="currentColor"></path><path d="M22.0928 14.8972H4.05469V17.262H22.0928V14.8972Z" fill="currentColor"></path><path d="M4.05469 20.592H22.0928V22.9568H4.05469V20.592Z" fill="currentColor"></path></svg>',10),Y=(0,a.template)('<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM9.04596 8.19684V15.8123C9.04596 16.1973 9.4628 16.4378 9.79614 16.2452L16.3167 12.477C16.6481 12.2855 16.6502 11.8079 16.3206 11.6134L9.80004 7.76621C9.46673 7.56955 9.04596 7.80984 9.04596 8.19684Z" fill="currentColor"></path></svg>',4),F=(0,a.template)("<div></div>",2),tt=(0,a.template)('<button title="Open in Spotify"></button>',2),et=(0,a.template)('<button title="Add to queue"></button>',2),ot=(0,a.template)('<button title="Play in Spotify"></button>',2),{plugin:{store:y}}=shelter,nt=()=>J.cloneNode(!0),st=()=>X.cloneNode(!0),rt=()=>Y.cloneNode(!0);function k(t){return(()=>{let e=F.cloneNode(!0);return(0,u.insert)(e,(()=>{let n=(0,_.memo)(()=>!!y.showOpen);return()=>n()&&(()=>{let o=tt.cloneNode(!0);return o.$$click=()=>S(t.type,t.id),(0,u.insert)(o,(0,m.createComponent)(nt,{})),(0,h.effect)(()=>(0,p.className)(o,l.button)),o})()})(),null),(0,u.insert)(e,(()=>{let n=(0,_.memo)(()=>!!y.showQueue);return()=>n()&&(()=>{let o=et.cloneNode(!0);return o.$$click=()=>N(t.type,t.id),(0,u.insert)(o,(0,m.createComponent)(st,{})),(0,h.effect)(()=>(0,p.className)(o,l.button)),o})()})(),null),(0,u.insert)(e,(()=>{let n=(0,_.memo)(()=>!!y.showPlay);return()=>n()&&(()=>{let o=ot.cloneNode(!0);return o.$$click=()=>V(t.type,t.id),(0,u.insert)(o,(0,m.createComponent)(rt,{})),(0,h.effect)(()=>(0,p.className)(o,l.button)),o})()})(),null),(0,h.effect)(()=>(0,p.className)(e,l.container)),e})()}(0,L.delegateEvents)(["click"]);var{plugin:{store:v},flux:{dispatcher:C,stores:{SelectedChannelStore:ct}},ui:{injectCss:it},observeDom:at}=shelter,A='main[class^="chatContent"] a[href^="https://open.spotify.com"], main[class^="chatContent"] a[href^="https://spotify.link/"]',lt=/(?:https?:\/\/open.spotify.com\/)(track|album|playlist)(?:\/)([a-z0-9]*)/i;function ut(){document.querySelectorAll(A).forEach(e=>{if(e?.dataset?.ioj4_pos)return;let n=e.href.match(lt)??[];if(n.length<3)return;let[,o,s]=n,d=e.parentNode,c=document.createElement("div");c.classList.add(l.wrapper),d.replaceChild(c,e),c.appendChild(e),e.dataset.ioj4_pos=!0,shelter.solidWeb.render(()=>(0,M.createComponent)(k,{type:o,id:s}),c)})}function w(){let t=at(A,()=>{t(),queueMicrotask(ut)});setTimeout(t,500)}function O(t){t.message.channel_id===ct.getCurrentlySelectedChannelId()&&w()}var I=["MESSAGE_CREATE","MESSAGE_UPDATE"],P=["CHANNEL_SELECT","UPDATE_CHANNEL_DIMENSIONS"],R;function pt(){v.showOpen??=!0,v.showQueue??=!0,v.showPlay??=!0,R=it(T),P.forEach(t=>C.subscribe(t,w)),I.forEach(t=>C.subscribe(t,O))}function ht(){R(),P.forEach(t=>C.unsubscribe(t,w)),I.forEach(t=>C.unsubscribe(t,O))}return z(dt);})();