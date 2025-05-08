import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{f as y}from"./index-BZkcKs8Z.js";import{c as s,B as g}from"./button-kk5tOuhN.js";import{r as p}from"./index-D4lIrffr.js";/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),J=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,o)=>o?o.toUpperCase():a.toLowerCase()),F=e=>{const t=J(e);return t.charAt(0).toUpperCase()+t.slice(1)},Q=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim(),V=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var X={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=p.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:o,className:x="",children:n,iconNode:U,...w},Z)=>p.createElement("svg",{ref:Z,...X,width:t,height:t,stroke:e,strokeWidth:o?Number(a)*24/Number(t):a,className:Q("lucide",x),...!n&&!V(w)&&{"aria-hidden":"true"},...w},[...U.map(([K,q])=>p.createElement(K,q)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=(e,t)=>{const a=p.forwardRef(({className:o,...x},n)=>p.createElement(Y,{ref:n,iconNode:t,className:Q(`lucide-${G(F(e))}`,`lucide-${e}`,o),...x}));return a.displayName=F(e),a};/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],re=z("circle-help",ee);function d({className:e,...t}){return r.jsx("div",{"data-slot":"card",className:s("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...t})}function m({className:e,...t}){return r.jsx("div",{"data-slot":"card-header",className:s("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...t})}function u({className:e,...t}){return r.jsx("div",{"data-slot":"card-title",className:s("leading-none font-semibold",e),...t})}function j({className:e,...t}){return r.jsx("div",{"data-slot":"card-description",className:s("text-muted-foreground text-sm",e),...t})}function h({className:e,...t}){return r.jsx("div",{"data-slot":"card-content",className:s("px-6",e),...t})}function f({className:e,...t}){return r.jsx("div",{"data-slot":"card-footer",className:s("flex justify-between items-center px-6 [.border-t]:pt-6",e),...t})}d.__docgenInfo={description:"",methods:[],displayName:"Card"};m.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};f.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};u.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};j.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};h.__docgenInfo={description:"",methods:[],displayName:"CardContent"};const se={title:"Example/Card",component:d,parameters:{layout:"centered"},argTypes:{className:{control:"text"}}},i={render:e=>r.jsxs(d,{...e,children:[r.jsxs(m,{children:[r.jsx(u,{children:"Basic Card"}),r.jsx(j,{children:"This is a simple card with header and content."})]}),r.jsx(h,{children:"Here is some content inside the card."})]})},c={render:e=>r.jsxs(d,{...e,children:[r.jsx(m,{children:r.jsx(u,{children:"Card with Footer"})}),r.jsx(h,{children:"This card has a footer section for actions or info."}),r.jsx(f,{children:r.jsx("p",{className:"text-muted-foreground text-sm flex justify-end w-full",children:"Card Footer"})})]})},l={render:e=>r.jsxs(d,{...e,children:[r.jsx(m,{children:r.jsx(u,{children:"Card with Action"})}),r.jsx(h,{children:"This card demonstrates the CardAction slot."}),r.jsx(f,{children:r.jsxs(g,{className:"w-full",children:[r.jsx(re,{})," Questions"]})})]})},C={render:e=>r.jsxs(d,{...e,children:[r.jsxs(m,{children:[r.jsx(u,{children:"Full Featured Card"}),r.jsx(j,{children:"All sections: header, content, action, footer."})]}),r.jsx(h,{children:"This card showcases all possible slots and layout options."}),r.jsxs(f,{children:[r.jsx(g,{variant:"outline",onClick:()=>y(),children:"Cancel"}),r.jsx(g,{onClick:()=>y(),children:"Save"})]})]})};var N,T,_,b,A;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <CardHeader>
        <CardTitle>Basic Card</CardTitle>
        <CardDescription>
          This is a simple card with header and content.
        </CardDescription>
      </CardHeader>
      <CardContent>Here is some content inside the card.</CardContent>
    </Card>
}`,...(_=(T=i.parameters)==null?void 0:T.docs)==null?void 0:_.source},description:{story:"Basic Card with header and content",...(A=(b=i.parameters)==null?void 0:b.docs)==null?void 0:A.description}}};var B,v,H,k,I;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <CardHeader>
        <CardTitle>Card with Footer</CardTitle>
      </CardHeader>
      <CardContent>
        This card has a footer section for actions or info.
      </CardContent>
      <CardFooter>
        <p className="text-muted-foreground text-sm flex justify-end w-full">
          Card Footer
        </p>
      </CardFooter>
    </Card>
}`,...(H=(v=c.parameters)==null?void 0:v.docs)==null?void 0:H.source},description:{story:"Card with footer section",...(I=(k=c.parameters)==null?void 0:k.docs)==null?void 0:I.description}}};var E,D,S,W,L;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <CardHeader>
        <CardTitle>Card with Action</CardTitle>
      </CardHeader>
      <CardContent>This card demonstrates the CardAction slot.</CardContent>
      <CardFooter>
        <Button className="w-full">
          <CircleHelp /> Questions
        </Button>
      </CardFooter>
    </Card>
}`,...(S=(D=l.parameters)==null?void 0:D.docs)==null?void 0:S.source},description:{story:"Card with action in header",...(L=(W=l.parameters)==null?void 0:W.docs)==null?void 0:L.description}}};var $,R,M,O,P;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <CardHeader>
        <CardTitle>Full Featured Card</CardTitle>
        <CardDescription>
          All sections: header, content, action, footer.
        </CardDescription>
      </CardHeader>
      <CardContent>
        This card showcases all possible slots and layout options.
      </CardContent>
      <CardFooter>
        <Button variant="outline" onClick={() => fn()}>
          Cancel
        </Button>
        <Button onClick={() => fn()}>Save</Button>
      </CardFooter>
    </Card>
}`,...(M=(R=C.parameters)==null?void 0:R.docs)==null?void 0:M.source},description:{story:"Full featured card with all components",...(P=(O=C.parameters)==null?void 0:O.docs)==null?void 0:P.description}}};const de=["Basic","WithFooter","WithAction","FullFeatured"];export{i as Basic,C as FullFeatured,l as WithAction,c as WithFooter,de as __namedExportsOrder,se as default};
