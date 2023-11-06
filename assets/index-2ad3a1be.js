var k=Object.defineProperty;var U=(e,t,r)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var q=(e,t,r)=>(U(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))a(u);new MutationObserver(u=>{for(const n of u)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(u){const n={};return u.integrity&&(n.integrity=u.integrity),u.referrerPolicy&&(n.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?n.credentials="include":u.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(u){if(u.ep)return;u.ep=!0;const n=r(u);fetch(u.href,n)}})();function w(){}function V(e){return e()}function L(){return Object.create(null)}function A(e){e.forEach(V)}function O(e){return typeof e=="function"}function T(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let C;function R(e,t){return e===t?!0:(C||(C=document.createElement("a")),C.href=t,e===C.href)}function Y(e){return Object.keys(e).length===0}function P(e,t){e.appendChild(t)}function z(e,t,r){e.insertBefore(t,r||null)}function N(e){e.parentNode&&e.parentNode.removeChild(e)}function D(e){return document.createElement(e)}function K(e){return document.createTextNode(e)}function Q(e,t,r,a){return e.addEventListener(t,r,a),()=>e.removeEventListener(t,r,a)}function l(e,t,r){r==null?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)}function W(e){return Array.from(e.childNodes)}let b;function f(e){b=e}function X(){if(!b)throw new Error("Function called outside component initialization");return b}function Z(e){X().$$.on_mount.push(e)}const h=[],g=[];let m=[];const E=[],ee=Promise.resolve();let _=!1;function te(){_||(_=!0,ee.then(B))}function v(e){m.push(e)}const F=new Set;let p=0;function B(){if(p!==0)return;const e=b;do{try{for(;p<h.length;){const t=h[p];p++,f(t),re(t.$$)}}catch(t){throw h.length=0,p=0,t}for(f(null),h.length=0,p=0;g.length;)g.pop()();for(let t=0;t<m.length;t+=1){const r=m[t];F.has(r)||(F.add(r),r())}m.length=0}while(h.length);for(;E.length;)E.pop()();_=!1,F.clear(),f(e)}function re(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(v)}}function ae(e){const t=[],r=[];m.forEach(a=>e.indexOf(a)===-1?t.push(a):r.push(a)),r.forEach(a=>a()),m=t}const x=new Set;let ue;function H(e,t){e&&e.i&&(x.delete(e),e.i(t))}function ne(e,t,r,a){if(e&&e.o){if(x.has(e))return;x.add(e),ue.c.push(()=>{x.delete(e),a&&(r&&e.d(1),a())}),e.o(t)}else a&&a()}function ie(e){e&&e.c()}function I(e,t,r){const{fragment:a,after_update:u}=e.$$;a&&a.m(t,r),v(()=>{const n=e.$$.on_mount.map(V).filter(O);e.$$.on_destroy?e.$$.on_destroy.push(...n):A(n),e.$$.on_mount=[]}),u.forEach(v)}function j(e,t){const r=e.$$;r.fragment!==null&&(ae(r.after_update),A(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function se(e,t){e.$$.dirty[0]===-1&&(h.push(e),te(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function G(e,t,r,a,u,n,s=null,c=[-1]){const o=b;f(e);const i=e.$$={fragment:null,ctx:[],props:n,update:w,not_equal:u,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(o?o.$$.context:[])),callbacks:L(),dirty:c,skip_bound:!1,root:t.target||o.$$.root};s&&s(i.root);let y=!1;if(i.ctx=r?r(e,t.props||{},(d,$,...S)=>{const M=S.length?S[0]:$;return i.ctx&&u(i.ctx[d],i.ctx[d]=M)&&(!i.skip_bound&&i.bound[d]&&i.bound[d](M),y&&se(e,d)),$}):[],i.update(),y=!0,A(i.before_update),i.fragment=a?a(i.ctx):!1,t.target){if(t.hydrate){const d=W(t.target);i.fragment&&i.fragment.l(d),d.forEach(N)}else i.fragment&&i.fragment.c();t.intro&&H(e.$$.fragment),I(e,t.target,t.anchor),B()}f(o)}class J{constructor(){q(this,"$$");q(this,"$$set")}$destroy(){j(this,1),this.$destroy=w}$on(t,r){if(!O(r))return w;const a=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return a.push(r),()=>{const u=a.indexOf(r);u!==-1&&a.splice(u,1)}}$set(t){this.$$set&&!Y(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const oe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(oe);function ce(e){let t,r,a,u,n,s;return{c(){t=D("video"),r=D("source"),u=K(`
    Your browser does not support the video tag.`),R(r.src,a=e[0])||l(r,"src",a),l(r,"type","video/mp4"),l(t,"width","100%"),t.muted=!0,t.autoplay=!0,l(t,"preload","auto"),l(t,"aria-label",e[1]),l(t,"class","svelte-9t1d8s")},m(c,o){z(c,t,o),P(t,r),P(t,u),e[3](t),n||(s=Q(t,"stalled",e[4]),n=!0)},p(c,[o]){o&1&&!R(r.src,a=c[0])&&l(r,"src",a),o&2&&l(t,"aria-label",c[1])},i:w,o:w,d(c){c&&N(t),e[3](null),n=!1,s()}}}function de(e,t,r){let{url:a}=t,{description:u}=t,n;async function s(){r(2,n.src=a,n),n.load();try{await n.play()}catch(i){console.error("Error playing video:",i)}}function c(i){g[i?"unshift":"push"](()=>{n=i,r(2,n)})}const o=()=>console.warn("Video stalled");return e.$$set=i=>{"url"in i&&r(0,a=i.url),"description"in i&&r(1,u=i.description)},e.$$.update=()=>{e.$$.dirty&5&&n&&a&&s()},[a,u,n,c,o]}class le extends J{constructor(t){super(),G(this,t,de,ce,T,{url:0,description:1})}}const pe=[{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3399&format=mp4",description:"Aut. 13 à la hauteur de l'aut. 20"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3398&format=mp4",description:"Aut. 13 au nord de l'aut. 20"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3397&format=mp4",description:"Aut. 13 au sud de la rue Hickmore"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3396&format=mp4",description:"Aut. 13 au sud de l'aut. 520"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3395&format=mp4",description:"Aut. 13 au nord de l'aut. 520"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3394&format=mp4",description:"Aut. 13 au nord du boul. de la Côte-Vertu"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3393&format=mp4",description:"Aut. 13 à la hauteur de l'aut. 40"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3392&format=mp4",description:"Aut. 13 au nord de l'aut. 40"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3391&format=mp4",description:"Aut. 13 au nord du boul. Henri-Bourassa Ouest"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3390&format=mp4",description:"Aut. 13 à la hauteur du pont Louis-Bisson (côté Montréal)"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3960&format=mp4",description:"Aut. 15 au sud du boul. De La Vérendrye"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3892&format=mp4",description:"Aut. 15 au nord du boul. De La Vérendrye"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3340&format=mp4",description:`Aut. 15 à la hauteur du ch. de la Côte-Saint-Paul 
(Montréal)`},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3866&format=mp4",description:`Aut. 15 (direction sud) à la hauteur de la rue 
Saint-Jacques`},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3339&format=mp4",description:`Aut. 15 (direction nord) à la hauteur de la rue 
Saint-Jacques`},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3338&format=mp4",description:"Aut. 15 à la hauteur du ch. Upper-Lachine"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3337&format=mp4",description:"Aut. 15 à la hauteur de la rue Sherbrooke Ouest"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3891&format=mp4",description:`Aut. 15 à la hauteur du tunnel Notre-Dame-de-Grâce (côté 
sud)`},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3336&format=mp4",description:`Aut. 15 à la hauteur du tunnel Notre-Dame-de-Grâce (côté 
nord)`},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3335&format=mp4",description:"Aut. 15 à la hauteur du ch. de la Côte-Saint-Luc"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3334&format=mp4",description:"Aut. 15 à la hauteur du ch. Queen-Mary"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3333&format=mp4",description:"Aut. 15 à la hauteur du ch. de la Côte-Sainte-Catherine"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3332&format=mp4",description:"Aut. 15 à la hauteur de l'av. Plamondon"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3331&format=mp4",description:"Aut. 15 à la hauteur de la rue Jean-Talon Ouest"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3330&format=mp4",description:"Aut. 15 à la hauteur de l'av. Royalmount"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3329&format=mp4",description:"Aut. 15  (direction sud) au sud de l'échangeur Décarie"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3716&format=mp4",description:"Aut. 15  (direction nord) au sud de l'échangeur Décarie"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3413&format=mp4",description:"Aut. 15 (direction nord) à la hauteur de l'aut. 40"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3717&format=mp4",description:`Aut. 15 (direction sud) à la hauteur du boul. de la 
Côte-Vertu`},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3718&format=mp4",description:`Aut. 15 (direction nord) à la hauteur du boul. de la 
Côte-Vertu`},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3352&format=mp4",description:`Aut. 19 à la hauteur du pont Papineau-Leblanc (côté 
Montréal)`},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3373&format=mp4",description:`Aut. 20 à la hauteur du pont Galipeault (côté 
Sainte-Anne-de-Bellevue)`},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3319&format=mp4",description:"Aut. 20 à la hauteur de la rue Morgan"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3372&format=mp4",description:"Aut. 20 à la hauteur du boul. des Sources"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3371&format=mp4",description:"Aut. 20 à la hauteur de l'av. Oakville"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3370&format=mp4",description:"Aut. 20 à la hauteur du boul. Fénelon"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3369&format=mp4",description:"Aut. 20 à la hauteur de l'av. Dorval"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3899&format=mp4",description:"Aut. 20 à la hauteur de l'échangeur Dorval"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3368&format=mp4",description:"Aut. 20 (direction est) à la hauteur du boul. Bouchard"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3367&format=mp4",description:"Aut. 20 à la hauteur de la 55e Avenue"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3366&format=mp4",description:"Aut. 20 à la hauteur de la 48e Avenue"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3365&format=mp4",description:"Aut. 20 à la hauteur de la 24e Avenue"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3364&format=mp4",description:"Aut. 20 à la hauteur de la 4e Avenue"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3363&format=mp4",description:"Aut. 20 à la hauteur de la 1re Avenue"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3362&format=mp4",description:"Aut. 20 à l'ouest de l'échangeur Saint-Pierre"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3360&format=mp4",description:"Aut. 20 à l'est de l'échangeur Saint-Pierre"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3815&format=mp4",description:"Aut. 20 à la hauteur de la sortie 64 (boul. Angrignon)"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3814&format=mp4",description:"Aut. 20 à la hauteur du boul. Angrignon"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3828&format=mp4",description:"Aut. 20 à l'est du boul. Angrignon"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3816&format=mp4",description:"Aut. 20 à l'ouest de l'échangeur Turcot"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3895&format=mp4",description:"Aut. 20 au centre de l'échangeur Turcot"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3808&format=mp4",description:`Aut. 25 à la hauteur du pont-tunnel Louis-Hippolyte-La Fontaine (côté 
Montréal)`},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3386&format=mp4",description:"Aut. 25 à la hauteur de la rue Tellier"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3385&format=mp4",description:"Aut. 25 à la hauteur de la rue Hochelaga"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3384&format=mp4",description:"Aut. 25 à la hauteur de la rue Sherbrooke Est"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3383&format=mp4",description:"Aut. 25 à la hauteur du boul. Yves-Prévost"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3382&format=mp4",description:"Aut. 25 à la hauteur des Galeries d'Anjou"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3425&format=mp4",description:"Aut. 25 (direction sud) à la hauteur de l'aut. 40"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3381&format=mp4",description:"Aut. 25 à la hauteur de la rue Jarry Est"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3444&format=mp4",description:`Aut. 40 à la hauteur du pont de l'Île-aux-Tourtes (côté 
Sainte-Anne-de-Bellevue)`},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3961&format=mp4",description:"Aut. 40 à l'ouest du boul. des Anciens-Combattants"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3855&format=mp4",description:"Aut. 40 à l'est du boul. des Anciens-Combattants"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3962&format=mp4",description:"Aut. 40 à la hauteur du chemin des Pins"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3854&format=mp4",description:"Aut. 40 à la hauteur du boul. Morgan"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3963&format=mp4",description:"Aut. 40 à la hauteur de l'avenue Lee"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3853&format=mp4",description:"Aut. 40 à la hauteur du boul. Saint-Charles"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3443&format=mp4",description:"Aut. 40 à la hauteur du boul. Saint-Jean"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3442&format=mp4",description:"Aut. 40 à la hauteur de l'av. Tecumseh"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3441&format=mp4",description:"Aut. 40 à la hauteur du boul. des Sources"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3440&format=mp4",description:"Aut. 40 à la hauteur du boul. Sunnybrooke"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3439&format=mp4",description:"Aut. 40 à la hauteur du boul. Hymus"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3438&format=mp4",description:"Aut. 40 à la hauteur de la rue Halpern"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3437&format=mp4",description:"Aut. 40 à la hauteur de l'aut. 13"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3436&format=mp4",description:"Aut. 40 à la hauteur du boul. Poirier"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3435&format=mp4",description:"Aut. 40 à la hauteur du boul. de la Côte-Vertu"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3434&format=mp4",description:"Aut. 40 à la hauteur du boul. Cavendish (direction sud)"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3433&format=mp4",description:"Aut. 40 à la hauteur du boul. Cavendish (direction nord)"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3407&format=mp4",description:"Aut. 40 à la hauteur de l'échangeur Côte-de-Liesse"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3408&format=mp4",description:"Aut. 40 (direction ouest) au centre de l'échangeur Décarie"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3726&format=mp4",description:"Aut. 40 (direction ouest) à l'ouest de l'échangeur Décarie"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3727&format=mp4",description:"Aut. 40 (direction est) à l'ouest de l'échangeur Décarie"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3409&format=mp4",description:"Aut. 40 (direction est) au centre de l'échangeur Décarie"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3728&format=mp4",description:"Aut. 40 à l'est de l'échangeur Décarie"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3410&format=mp4",description:"Aut. 40 à la hauteur du boul. Sainte-Croix"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3411&format=mp4",description:"Aut. 40 à la hauteur de la rue Stinson"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3412&format=mp4",description:"Aut. 40 à la hauteur de l'av. Deslauriers"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3414&format=mp4",description:"Aut. 40 à la hauteur de l'aut. 15"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3729&format=mp4",description:"Aut. 40 à la hauteur de la rue du Marché-Central"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3415&format=mp4",description:"Aut. 40 à la hauteur du boul. Saint-Laurent"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3416&format=mp4",description:"Aut. 40 à la hauteur de la rue Saint-Denis"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3417&format=mp4",description:"Aut. 40 à la hauteur de l'av. Christophe-Colomb"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3418&format=mp4",description:"Aut. 40 à la hauteur de l'av. Papineau"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3419&format=mp4",description:"Aut. 40 à la hauteur de la rue d'Iberville"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3420&format=mp4",description:"Aut. 40 à la hauteur du boul. Saint-Michel"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3421&format=mp4",description:"Aut. 40 à la hauteur du boul. Pie-IX"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3422&format=mp4",description:"Aut. 40 à la hauteur du boul. Lacordaire"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3423&format=mp4",description:"Aut. 40 à la hauteur du boul. Langelier"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3424&format=mp4",description:"Aut. 40 à la hauteur du boul. des Galeries-d'Anjou"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3426&format=mp4",description:"Aut. 40 à l'est de l'échangeur d'Anjou"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3730&format=mp4",description:"Aut. 40 à la hauteur de l'av. Rhéaume"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3731&format=mp4",description:"Aut. 40 à la hauteur du boul. Bourget"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3427&format=mp4",description:"Aut. 40 à la hauteur de l'av. Marien"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3732&format=mp4",description:`Aut. 40 à la hauteur de  la sortie du boul. du 
Tricentenaire`},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3428&format=mp4",description:"Aut. 40 à la hauteur du boul. Henri-Bourassa"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3733&format=mp4",description:"Aut. 40 à la hauteur du pont d'étagement du CN"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3734&format=mp4",description:"Aut. 40 à la hauteur du Club de golf de l'île de Montréal"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3429&format=mp4",description:`Aut. 40 à la hauteur du pont Charles-De Gaulle (côté 
Montréal)`},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3446&format=mp4",description:"Aut. 520 à la hauteur de l’av. Michel-Jasmin"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3894&format=mp4",description:"Aut. 520 à la hauteur du boul. McMillan"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3900&format=mp4",description:"Aut. 520 à l’ouest de l’av. Marshall"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3901&format=mp4",description:"Aut. 520 à l’est de l’av. Marshall"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3377&format=mp4",description:`Route 112 (direction ouest) à la hauteur du pont Victoria (côté 
Montréal)`},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3378&format=mp4",description:`Route 112 (direction est) à la hauteur du pont Victoria (côté 
Montréal)`},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3917&format=mp4",description:`Route 136 (direction est) à la hauteur des bretelles 
Pullman`},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3830&format=mp4",description:`Route 136 (direction ouest) à la hauteur de l'échangeur 
Turcot`},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3829&format=mp4",description:`Route 136 (direction est) à la hauteur de l'échangeur 
Turcot`},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3809&format=mp4",description:"Route 136 (direction ouest) à l'est de l'échangeur Turcot"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3810&format=mp4",description:"Route 136 (direction est) à l’est de l’échangeur Turcot"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3811&format=mp4",description:"Route 136 à l'ouest de l'av. Atwater"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3451&format=mp4",description:"Route 136 à l'est de l'av. Atwater"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3959&format=mp4",description:`Route 136 (direction est) à la hauteur de la rue 
Rose-de-Lima`},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3452&format=mp4",description:"Route 136 à la hauteur du tunnel Ville-Marie"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3735&format=mp4",description:"Route 136 à la hauteur de la rue Panet"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3406&format=mp4",description:`Route 138 à la hauteur du pont Honoré-Mercier (côté 
Montréal)`},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3405&format=mp4",description:"Route 138 à la hauteur de la rue Airlie"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3404&format=mp4",description:"Route 138 à la hauteur de la rue Wanklyn"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3403&format=mp4",description:"Route 138 à la hauteur de la rue Clément"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3361&format=mp4",description:"Route 138 au sud de l'échangeur Saint-Pierre"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3402&format=mp4",description:"Route 138 à la hauteur du pont Le Gardeur (côté Montréal)"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3736&format=mp4",description:"Av. Souligny à la hauteur de la rue Dickson"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3737&format=mp4",description:"Av. Souligny à la hauteur de la rue De Cadillac"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3738&format=mp4",description:"Av. Souligny à la hauteur de l'av. Haig"},{url:"https://www.quebec511.info/Carte/Fenetres/camera.ashx?id=3739&format=mp4",description:"Av. Souligny à la hauteur de l'aut. 25"}];function he(e){let t,r;return t=new le({props:{url:e[1][e[0]],description:`Video ${e[0]+1}`}}),{c(){ie(t.$$.fragment)},m(a,u){I(t,a,u),r=!0},p(a,[u]){const n={};u&1&&(n.url=a[1][a[0]]),u&1&&(n.description=`Video ${a[0]+1}`),t.$set(n)},i(a){r||(H(t.$$.fragment,a),r=!0)},o(a){ne(t.$$.fragment,a),r=!1},d(a){j(t,a)}}}function me(e,t,r){let a=0,u=pe.map(s=>s.url);function n(){r(0,a=(a+1)%u.length)}return Z(()=>{const s=setInterval(n,3e3);return()=>{clearInterval(s)}}),[a,u]}class fe extends J{constructor(t){super(),G(this,t,me,he,T,{})}}new fe({target:document.getElementById("app")});
