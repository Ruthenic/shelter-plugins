(()=>{var o=Object.defineProperty;var a=Object.getOwnPropertyDescriptor;var i=Object.getOwnPropertyNames;var l=Object.prototype.hasOwnProperty;var n=(e,t)=>{for(var s in t)o(e,s,{get:t[s],enumerable:!0})},_=(e,t,s,p)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of i(t))!l.call(e,r)&&r!==s&&o(e,r,{get:()=>t[r],enumerable:!(p=a(t,r))||p.enumerable});return e};var c=e=>_(o({},"__esModule",{value:!0}),e);var u={};n(u,{onUnload:()=>h});shelter.flux.stores.NoticeStore.__getLocalVars().temporaryDismisses.SPOTIFY_AUTO_PAUSED=!0;var h=shelter.patcher.instead("send",XMLHttpRequest.prototype,function(e,t){if(!/https?:\/\/api.spotify.com.+\/me\/player\/pause/.test(this.__sentry_xhr__?.url))return t.apply(this,e)});return c(u);})();
