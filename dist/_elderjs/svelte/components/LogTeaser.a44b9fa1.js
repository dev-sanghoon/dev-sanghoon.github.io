import{S as s,i as e,s as t,e as a,t as r,a as l,c as o,b as i,d as n,f as c,g as f,h,j as u,k as g,l as d,n as p}from"../index-6b888c7d.js";function m(s){let e,t,m,v,j,$,k,x,E,b=s[0].frontmatter.slug+"",q=s[0].frontmatter.question+"";return{c(){e=a("div"),t=a("div"),m=r("["),v=r(b),j=r("]"),$=l(),k=a("a"),x=r(q),this.h()},l(s){e=o(s,"DIV",{class:!0});var a=i(e);t=o(a,"DIV",{});var r=i(t);m=n(r,"["),v=n(r,b),j=n(r,"]"),r.forEach(c),$=f(a),k=o(a,"A",{class:!0,href:!0});var l=i(k);x=n(l,q),l.forEach(c),a.forEach(c),this.h()},h(){h(k,"class","feed-title svelte-8o11jr"),h(k,"href",E=s[1].permalinks.articles({slug:`logs/${s[0].slug}`})),h(e,"class","feed-title-container svelte-8o11jr")},m(s,a){u(s,e,a),g(e,t),g(t,m),g(t,v),g(t,j),g(e,$),g(e,k),g(k,x)},p(s,[e]){1&e&&b!==(b=s[0].frontmatter.slug+"")&&d(v,b),1&e&&q!==(q=s[0].frontmatter.question+"")&&d(x,q),3&e&&E!==(E=s[1].permalinks.articles({slug:`logs/${s[0].slug}`}))&&h(k,"href",E)},i:p,o:p,d(s){s&&c(e)}}}function v(s,e,t){let{log:a}=e,{helpers:r}=e;return s.$$set=s=>{"log"in s&&t(0,a=s.log),"helpers"in s&&t(1,r=s.helpers)},[a,r]}export default class extends s{constructor(s){super(),e(this,s,v,m,t,{log:0,helpers:1})}}
