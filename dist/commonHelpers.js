/* empty css                      */(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const f=()=>{const r=document.querySelector(".advantages-list"),l=document.querySelectorAll(".egg"),c=document.querySelectorAll(".advantages-item");function s(){let e=Math.round(r.scrollLeft/c[0].offsetWidth);l.forEach((t,n)=>{t.classList.toggle("active",n===e)})}r.addEventListener("scroll",s),l.forEach((e,t)=>{e.addEventListener("click",()=>{r.scrollTo({left:t*c[0].offsetWidth,behavior:"smooth"})})}),r.addEventListener("wheel",e=>{e.preventDefault(),r.scrollBy({left:e.deltaY,behavior:"smooth"})}),document.querySelector(".advantages-list").addEventListener("wheel",e=>{e.stopPropagation()},{passive:!0}),s()},g=()=>{const r=document.querySelector(".gallery-list"),l=document.querySelectorAll(".gallery-egg"),c=document.querySelectorAll(".gallery-item"),s=document.querySelectorAll(".gallery-item img");let e=0;function t(){let o=Math.round(r.scrollLeft/c[0].offsetWidth);l.forEach((i,a)=>{i.classList.toggle("active",a===o)}),e=o}r.addEventListener("scroll",t),l.forEach((o,i)=>{o.addEventListener("click",()=>{e=i,r.scrollTo({left:i*c[0].offsetWidth,behavior:"smooth"}),s.forEach((a,u)=>{a.classList.remove("img-scale"),u===i&&a.classList.add("img-scale")})})});const n=document.querySelector(".left-button"),d=document.querySelector(".right-button");n.addEventListener("click",()=>{e=e>0?e-1:s.length-1,r.scrollTo({left:e*c[0].offsetWidth,behavior:"smooth"}),s.forEach((o,i)=>{o.classList.remove("img-scale"),i===e&&o.classList.add("img-scale")})}),d.addEventListener("click",()=>{e=e<s.length-1?e+1:0,r.scrollTo({left:e*c[0].offsetWidth,behavior:"smooth"}),s.forEach((o,i)=>{o.classList.remove("img-scale"),i===e&&o.classList.add("img-scale")})}),r.addEventListener("wheel",o=>{o.preventDefault(),r.scrollBy({left:o.deltaY,behavior:"smooth"})}),document.querySelector(".gallery-list").addEventListener("wheel",o=>{o.stopPropagation()},{passive:!0}),t()};document.addEventListener("DOMContentLoaded",()=>{window.innerWidth<1200&&f(),g()});
//# sourceMappingURL=commonHelpers.js.map
