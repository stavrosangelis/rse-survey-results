(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1307:(e,t,r)=>{Promise.resolve().then(r.bind(r,5436)),Promise.resolve().then(r.bind(r,3345)),Promise.resolve().then(r.bind(r,9241)),Promise.resolve().then(r.bind(r,8562)),Promise.resolve().then(r.bind(r,1349)),Promise.resolve().then(r.bind(r,6704)),Promise.resolve().then(r.bind(r,989)),Promise.resolve().then(r.bind(r,1123)),Promise.resolve().then(r.bind(r,1632))},1349:(e,t,r)=>{"use strict";r.d(t,{AverageCompletionTime:()=>o});var s=r(5155),l=r(9305),n=r(3691),i=r.n(n);let a=e=>{let t=Math.floor(e.asDays()),r=e.hours(),s=e.minutes();return"".concat(t>0?"".concat(t," day").concat(t>1?"s":""," "):"").concat(r>0&&"".concat(r," hour").concat(r>1?"s":""," ")||"").concat(s," minutes")},o=e=>{let{data:t,index:r}=e,{length:n}=t,o=[];for(let e of t){let t=e.split("-"),r=i()(t[0],"DD/MM/YYYY HH:mm"),s=i()(t[1],"DD/MM/YYYY HH:mm"),l=i().duration(s.diff(r)).asMinutes();o.push(l)}let d=[];for(let e=0;e<n;e+=1)d.push(e+1);let c=a(i().duration((e=>e.reduce((e,t)=>e+t)/e.length)(o),"minutes"));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("h3",{children:[r,". Average completion time"]}),(0,s.jsx)("p",{style:{paddingBottom:"15px"},children:c}),(0,s.jsxs)("h3",{children:["Survey completion time ",(0,s.jsx)("small",{children:"(in minutes)"})]}),(0,s.jsx)(l.b,{xAxis:[{data:d,label:"Survey answers"}],yAxis:[{label:"Minutes"}],series:[{data:o,valueFormatter:e=>a(i().duration(e,"minutes"))}],width:400,height:200,sx:{".MuiChartsAxis-directionY .MuiChartsAxis-label":{transform:"translate(-4px, 60px)"}}})]})}},6704:(e,t,r)=>{"use strict";r.d(t,{Legend:()=>c});var s=r(5155),l=r(8204),n=r(4035),i=r(2738),a=r(4918),o=r(7778);let d=e=>{let{color:t,label:r}=e;return(0,s.jsxs)(l.Ay,{disablePadding:!0,children:[(0,s.jsx)(n.A,{children:(0,s.jsx)(o.A,{sx:{color:t}})}),(0,s.jsx)(i.A,{primary:r})]})},c=e=>{let{data:t}=e;return t.sort((e,t)=>t.value-e.value),(0,s.jsx)(a.A,{sx:{maxHeight:"300px",overflowY:"auto"},children:t.map(e=>{let{id:t,label:r,color:l}=e;return(0,s.jsx)(d,{label:r,color:l},t)})})}},989:(e,t,r)=>{"use strict";r.d(t,{OpenResponses:()=>o});var s=r(5155),l=r(4918),n=r(8204),i=r(9438),a=r(2738);let o=e=>{let{data:t,title:r}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:r}),(0,s.jsx)(l.A,{sx:{maxHeight:"300px",overflowY:"auto"},children:t.map((e,t)=>e&&(0,s.jsx)(n.Ay,{disablePadding:!0,children:(0,s.jsx)(i.A,{children:(0,s.jsx)(a.A,{primary:e})})},t)||null)})]})}},1123:(e,t,r)=>{"use strict";r.d(t,{OrderResponses:()=>d});var s=r(5155),l=r(4918),n=r(8204),i=r(9438),a=r(2738),o=r(8860);let d=e=>{let{data:t,title:r}=e,d=(0,o.rc)(t);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:r}),(0,s.jsx)(l.A,{sx:{maxHeight:"300px",overflowY:"auto"},children:d.map((e,t)=>e&&(0,s.jsx)(n.Ay,{disablePadding:!0,children:(0,s.jsx)(i.A,{children:(0,s.jsx)(a.A,{primary:"".concat(t+1,". ").concat(e.label)})})},t)||null)})]})}},1632:(e,t,r)=>{"use strict";r.d(t,{Pie:()=>d});var s=r(5155),l=r(2115),n=r(5179),i=r(9241),a=r(6704),o=r(8860);let d=e=>{let{data:t,title:r}=e,[d,c]=(0,l.useState)([]);(0,l.useEffect)(()=>{c((0,o.dq)({data:t}))},[t]);let h=t.map(e=>e.value).reduce((e,t)=>e+t);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:r}),(0,s.jsxs)(i.default,{container:!0,spacing:2,children:[(0,s.jsx)(i.default,{size:{xs:12,sm:6},children:(0,s.jsx)(n.r,{series:[{arcLabel:e=>"".concat(e.value),data:d,valueFormatter:e=>{let{value:t}=e;return" value: ".concat(t,",\n percentage: ").concat((t/h*100).toFixed(2),"%")},highlightScope:{fade:"global",highlight:"item"},faded:{innerRadius:30,additionalRadius:-30,color:"gray"}}],width:300,height:300,slotProps:{legend:{hidden:!0}}})}),(0,s.jsx)(i.default,{size:{xs:12,sm:6},children:(0,s.jsx)(a.Legend,{data:d})})]})]})}},8860:(e,t,r)=>{"use strict";function s(e){let t=[],r=[];for(let s of e){let e=s?s.trim().toLocaleLowerCase():"";if(e){let s=e.split(";"),l=0;for(let e of s)e&&(l+=1);for(let e of s)if(e){if(r.includes(e)){let r=t.findIndex(t=>t.label===e),s=t.find(t=>t.label===e);if(r>-1&&s){let e={...s},{value:n}=s;e.value=n+l-r,t[r]=e}}else t.push({id:Number(r.length),value:1,label:e}),r.push(e)}}}return t.sort((e,t)=>t.value-e.value),t}function l(e){let{data:t}=e,{length:r}=t,s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hex",r=[];for(let s=0;s<e;s+=1)r.push("hex"===t?function(){let e="#";for(let t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}():function(){let e=Math.floor(256*Math.random()),t=Math.floor(256*Math.random()),r=Math.floor(256*Math.random());return"rgb(".concat(e,", ").concat(t,", ").concat(r,")")}());return r}(r),l=[];for(let e=0;e<r;e+=1){let r=t[e];r.color=s[e],l.push(r)}return l}r.d(t,{dq:()=>l,rc:()=>s})}},e=>{var t=t=>e(e.s=t);e.O(0,[586,216,714,441,517,358],()=>t(1307)),_N_E=e.O()}]);