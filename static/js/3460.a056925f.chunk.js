"use strict";(self.webpackChunksajal_portfolio=self.webpackChunksajal_portfolio||[]).push([[3460],{3460:(i,n,t)=>{t.d(n,{LinkInstance:()=>s});var e=t(4864);function o(i,n){const t=((o=i.map((i=>i.id))).sort(((i,n)=>i-n)),o.join("_"));var o;let s=n.get(t);return void 0===s&&(s=(0,e.CE)(),n.set(t,s)),s}class s{constructor(i){this.container=i,this._drawLinkLine=(i,n)=>{const t=i.options.links;if(null===t||void 0===t||!t.enable)return;const o=this.container,s=o.actualOptions,a=n.destination,l=i.getPosition(),r=a.getPosition();let c=n.opacity;o.canvas.draw((n=>{var d,k,u;let f;const p=null===(d=i.options.twinkle)||void 0===d?void 0:d.lines;if(null!==p&&void 0!==p&&p.enable){const i=p.frequency,n=(0,e.Af)(p.color);(0,e.CE)()<i&&n&&(f=n,c=(0,e.qS)(p.opacity))}if(!f){const n=void 0!==t.id?o.particles.linksColors.get(t.id):o.particles.linksColor;f=(0,e.MF)(i,a,n)}if(!f)return;const h=null!==(k=i.retina.linksWidth)&&void 0!==k?k:0,y=null!==(u=i.retina.linksDistance)&&void 0!==u?u:0,{backgroundMask:g}=s;!function(i){let n=!1;const{begin:t,end:o,maxDistance:s,context:a,canvasSize:l,width:r,backgroundMask:c,colorLine:d,opacity:k,links:u}=i;if((0,e.c$)(t,o)<=s)(0,e.Cw)(a,t,o),n=!0;else if(u.warp){let i,r;const c={x:o.x-l.width,y:o.y},d=(0,e.If)(t,c);if(d.distance<=s){const n=t.y-d.dy/d.dx*t.x;i={x:0,y:n},r={x:l.width,y:n}}else{const n={x:o.x,y:o.y-l.height},a=(0,e.If)(t,n);if(a.distance<=s){const n=-(t.y-a.dy/a.dx*t.x)/(a.dy/a.dx);i={x:n,y:0},r={x:n,y:l.height}}else{const n={x:o.x-l.width,y:o.y-l.height},a=(0,e.If)(t,n);if(a.distance<=s){const n=t.y-a.dy/a.dx*t.x;i={x:-n/(a.dy/a.dx),y:n},r={x:i.x+l.width,y:i.y+l.height}}}}i&&r&&((0,e.Cw)(a,t,i),(0,e.Cw)(a,o,r),n=!0)}if(!n)return;a.lineWidth=r,c.enable&&(a.globalCompositeOperation=c.composite),a.strokeStyle=(0,e.a2)(d,k);const{shadow:f}=u;if(f.enable){const i=(0,e.Af)(f.color);i&&(a.shadowBlur=f.blur,a.shadowColor=(0,e.a2)(i))}a.stroke()}({context:n,width:h,begin:l,end:r,maxDistance:y,canvasSize:o.canvas.size,links:t,backgroundMask:g,colorLine:f,opacity:c})}))},this._drawLinkTriangle=(i,n,t)=>{var o;const s=i.options.links;if(null===s||void 0===s||!s.enable)return;const a=s.triangles;if(!a.enable)return;const l=this.container,r=l.actualOptions,c=n.destination,d=t.destination,k=null!==(o=a.opacity)&&void 0!==o?o:.5*(n.opacity+t.opacity);k<=0||l.canvas.draw((n=>{var t;const o=i.getPosition(),u=c.getPosition(),f=d.getPosition(),p=null!==(t=i.retina.linksDistance)&&void 0!==t?t:0;if((0,e.c$)(o,u)>p||(0,e.c$)(f,u)>p||(0,e.c$)(f,o)>p)return;let h=(0,e.Af)(a.color);if(!h){const n=void 0!==s.id?l.particles.linksColors.get(s.id):l.particles.linksColor;h=(0,e.MF)(i,c,n)}h&&function(i){const{context:n,pos1:t,pos2:o,pos3:s,backgroundMask:a,colorTriangle:l,opacityTriangle:r}=i;!function(i,n,t,e){i.beginPath(),i.moveTo(n.x,n.y),i.lineTo(t.x,t.y),i.lineTo(e.x,e.y),i.closePath()}(n,t,o,s),a.enable&&(n.globalCompositeOperation=a.composite),n.fillStyle=(0,e.a2)(l,r),n.fill()}({context:n,pos1:o,pos2:u,pos3:f,backgroundMask:r.backgroundMask,colorTriangle:h,opacityTriangle:k})}))},this._drawTriangles=(i,n,t,e)=>{var o,s,a;const l=t.destination;if(null===(o=i.links)||void 0===o||!o.triangles.enable||null===(s=l.options.links)||void 0===s||!s.triangles.enable)return;const r=null===(a=l.links)||void 0===a?void 0:a.filter((i=>{const n=this._getLinkFrequency(l,i.destination);return l.options.links&&n<=l.options.links.frequency&&e.findIndex((n=>n.destination===i.destination))>=0}));if(null!==r&&void 0!==r&&r.length)for(const c of r){const e=c.destination;this._getTriangleFrequency(n,l,e)>i.links.triangles.frequency||this._drawLinkTriangle(n,t,c)}},this._getLinkFrequency=(i,n)=>o([i,n],this._freqs.links),this._getTriangleFrequency=(i,n,t)=>o([i,n,t],this._freqs.triangles),this._freqs={links:new Map,triangles:new Map}}async drawParticle(i,n){const{links:t,options:e}=n;if(null===t||void 0===t||!t.length)return;const o=t.filter((i=>e.links&&this._getLinkFrequency(n,i.destination)<=e.links.frequency));for(const a of o){var s;this._drawTriangles(e,n,a,o),a.opacity>0&&(null!==(s=n.retina.linksWidth)&&void 0!==s?s:0)>0&&this._drawLinkLine(n,a)}await Promise.resolve()}async init(){this._freqs.links=new Map,this._freqs.triangles=new Map,await Promise.resolve()}particleCreated(i){if(i.links=[],!i.options.links)return;const n=this.container.retina.pixelRatio,{retina:t}=i,{distance:e,width:o}=i.options.links;t.linksDistance=e*n,t.linksWidth=o*n}particleDestroyed(i){i.links=[]}}}}]);
//# sourceMappingURL=3460.a056925f.chunk.js.map