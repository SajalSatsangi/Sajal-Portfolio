"use strict";(self.webpackChunksajal_portfolio=self.webpackChunksajal_portfolio||[]).push([[5188],{5188:(o,t,i)=>{i.d(t,{Slower:()=>n});var s=i(4864);class a{constructor(){this.factor=3,this.radius=200}load(o){o&&(void 0!==o.factor&&(this.factor=o.factor),void 0!==o.radius&&(this.radius=o.radius))}}class n extends s.Ef{constructor(o){super(o)}clear(o,t,i){o.slow.inRange&&!i||(o.slow.factor=1)}init(){const o=this.container,t=o.actualOptions.interactivity.modes.slow;t&&(o.retina.slowModeRadius=t.radius*o.retina.pixelRatio)}async interact(){}isEnabled(o){var t;const i=this.container,a=i.interactivity.mouse,n=(null!==(t=null===o||void 0===o?void 0:o.interactivity)&&void 0!==t?t:i.actualOptions.interactivity).events;return n.onHover.enable&&!!a.position&&(0,s.Sc)("slow",n.onHover.mode)}loadModeOptions(o){o.slow||(o.slow=new a);for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];for(const a of i)o.slow.load(null===a||void 0===a?void 0:a.slow)}reset(o){o.slow.inRange=!1;const t=this.container,i=t.actualOptions,a=t.interactivity.mouse.position,n=t.retina.slowModeRadius,e=i.interactivity.modes.slow;if(!e||!n||n<0||!a)return;const r=o.getPosition(),l=(0,s.c$)(a,r),c=l/n,d=e.factor,{slow:u}=o;l>n||(u.inRange=!0,u.factor=c/d)}}}}]);
//# sourceMappingURL=5188.d5ead5bf.chunk.js.map