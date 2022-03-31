"use strict";(self.webpackChunkheighliner_website=self.webpackChunkheighliner_website||[]).push([[9121],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,g=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?i.createElement(g,r(r({ref:t},u),{},{components:n})):i.createElement(g,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2081:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var i=n(3117),a=n(102),o=(n(7294),n(3905)),r=["components"],l={slug:"what-is-heighliner-stack",title:"What is Heighliner Stack",authors:["zhenwei"],tags:["Heighliner","Cloud Native","Stack"]},s=void 0,c={permalink:"/blog/what-is-heighliner-stack",editUrl:"https://github.com/h8r-dev/heighliner-website/blog/2022-03-08-what-is-heighliner-stack/index.md",source:"@site/blog/2022-03-08-what-is-heighliner-stack/index.md",title:"What is Heighliner Stack",description:"The Heighliner Stack provides an easy way to build complex cloud-native applications.",date:"2022-03-08T00:00:00.000Z",formattedDate:"March 8, 2022",tags:[{label:"Heighliner",permalink:"/blog/tags/heighliner"},{label:"Cloud Native",permalink:"/blog/tags/cloud-native"},{label:"Stack",permalink:"/blog/tags/stack"}],readingTime:3.93,truncated:!1,authors:[{name:"Zhenwei Wang",title:"CEO of Heighliner",url:"https://github.com/jack230320",imageURL:"/img/zhenwei-wang-avatar.png",key:"zhenwei"}],frontMatter:{slug:"what-is-heighliner-stack",title:"What is Heighliner Stack",authors:["zhenwei"],tags:["Heighliner","Cloud Native","Stack"]}},u={authorsImageUrls:[void 0]},p=[{value:"Complexity of building cloud-native applications",id:"complexity-of-building-cloud-native-applications",level:2},{value:"Configuration! Configuration! Configuration!",id:"configuration-configuration-configuration",level:2},{value:"Preconfigured Best Practices",id:"preconfigured-best-practices",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],d={toc:p};function h(e){var t=e.components,l=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Heighliner Stack provides an easy way to build complex cloud-native applications.\nIt makes sure cloud native applications are developed and deployed with best practices."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"simplicity",src:n(8270).Z,width:"4191",height:"1677"})),(0,o.kt)("h2",{id:"complexity-of-building-cloud-native-applications"},"Complexity of building cloud-native applications"),(0,o.kt)("p",null,"The complexity of application architecture multiplies as the business grows. Say you start building a simple personal blog hosted on the cloud, what platform and tech stack would you choose? The answer might be Heroku, WordPress, Netlify, or even GitHub pages. They are simple, cheap, and reliable enough for simple applications such as personal blogs. In this case, no one cares about micro-service, containers, Kubernetes, Autoscaling, GitOps, so on and so forth."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"archtecture",src:n(8174).Z,width:"4191",height:"1584"})),(0,o.kt)("p",null,"Nonetheless, modern enterprises, such as e-commerce and/or social platforms, have employed thousands of developers to build software in a monolithic application. As the number of developers grows, so does the complexity of building such an application. The micro-service architecture supports separating concerns of different teams and better cooperation. As a result, micro-service architecture gets more and more popular."),(0,o.kt)("p",null,"To support such micro-service trends, cloud native technologies has been born to satisfy modern application architecture. Developers want their applications to be highly available and fault-tolerant. But the number of applications gets 100x bigger so they can't be managed and operated in the old way. Therefore, concepts such as elastic scaling, distributed monitoring, and deployment strategies have emerged to solve such problems."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cloud-native",src:n(6586).Z,width:"4191",height:"1086"})),(0,o.kt)("p",null,"Developers also want their applications to be highly available and fault-tolerant. But micro-service pattern will increase the number of applications to 100x bigger. This will make it hard if not impossible to manage or operate. Concepts such as service mesh, distributed tracing, continuous profling has emerged. Developers has been given the power to easily build CI/CD pipelines, elastic scaling solutions, observability stacks, canary deployment strategies, etc."),(0,o.kt)("p",null,"With great power comes great responsibility. Now the developers realize they spend more time dealing with archetecture than buisness code. Soon they realize this is wrong -- they need to focus on buisness logic that generates revenue! This is a new problem that developers face in the cloud native journey."),(0,o.kt)("h2",{id:"configuration-configuration-configuration"},"Configuration! Configuration! Configuration!"),(0,o.kt)("p",null,"The sheer number of tooling in cloud native community is growing fast. Soon developers are overwhelmed by the configuration work."),(0,o.kt)("p",null,"Here is the Cloud Native Landsacpe of CNCF (",(0,o.kt)("a",{parentName:"p",href:"https://l.cncf.io/"},"https://l.cncf.io/"),")"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"simplicity",src:n(3660).Z,width:"1024",height:"702"})),(0,o.kt)("p",null,"Turning this picture into a production toolchain requires tons of configuration. Terraform provides a good way to ochestrate the infrastructure. Kubernetes provides a good way to ochestrate the deployment. But there is still no good way to ochestrate the archetecture and DevOps workflow."),(0,o.kt)("p",null,"Consider the following questions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Should the source code and the Kubernetes Manifests be in the same Git repository?"),(0,o.kt)("li",{parentName:"ul"},"What is the mapping relationship between branches and  environments?"),(0,o.kt)("li",{parentName:"ul"},"What namespace monitoring metrics should Prometheus capture?"),(0,o.kt)("li",{parentName:"ul"},"What dashboard and graph should Golang developers focus on?"),(0,o.kt)("li",{parentName:"ul"},"What alert rules should be configured?"),(0,o.kt)("li",{parentName:"ul"},"Should I use a self-built open source product or a commercial product?"),(0,o.kt)("li",{parentName:"ul"},"How to remote debug container in Kubernetes cluster?")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cloud-stack",src:n(2130).Z,width:"5118",height:"2220"})),(0,o.kt)("p",null,"Everyone wants to know the industry standards to make their decisions. Thus we need well-defined cloud-native best practices as a collection of all proven and reliable methods."),(0,o.kt)("h2",{id:"preconfigured-best-practices"},"Preconfigured Best Practices"),(0,o.kt)("p",null,"We build these best practices into a project called Heighliner. Starting from developer-centric mind, we provides many pre-configured stacks covering popular programming languages and frameworks. For example, gin-vue is a toolchain preconfigured with the following tools and techniques:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Golang"),(0,o.kt)("li",{parentName:"ul"},"Git Repository(Currently provided by GitHub)"),(0,o.kt)("li",{parentName:"ul"},"Gin Framework"),(0,o.kt)("li",{parentName:"ul"},"Swagger"),(0,o.kt)("li",{parentName:"ul"},"Vue.js"),(0,o.kt)("li",{parentName:"ul"},"Gorm"),(0,o.kt)("li",{parentName:"ul"},"Docker"),(0,o.kt)("li",{parentName:"ul"},"CI pipeline(Currently provided by GitHub Actions)"),(0,o.kt)("li",{parentName:"ul"},"ArgoCD"),(0,o.kt)("li",{parentName:"ul"},"Mariadb"),(0,o.kt)("li",{parentName:"ul"},"Redis"),(0,o.kt)("li",{parentName:"ul"},"Helm"),(0,o.kt)("li",{parentName:"ul"},"Kubernetes"),(0,o.kt)("li",{parentName:"ul"},"Nocalhost"),(0,o.kt)("li",{parentName:"ul"},"Prometheus"),(0,o.kt)("li",{parentName:"ul"},"Grafana"),(0,o.kt)("li",{parentName:"ul"},"Jaeger"),(0,o.kt)("li",{parentName:"ul"},"Loki")),(0,o.kt)("p",null,"A toolchain composed of the above tools will support business development based on Golang. Preconfigured delivery flow speeds the DevOps process up.\nPre-configured observation capabilities covering logs, metrics and distributed tracing.\nDatabase and messaging middleware ensures applications can handle stateful and asynchronous tasks with ease.\nGitOps based on ArgoCD and helm makes application publishing simple and efficient."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gin-vue-stack",src:n(2112).Z,width:"5762",height:"3227"})),(0,o.kt)("p",null,"Based on a stack like this, developers can spin a cloud-navite application up in minutes without the complexcity of configuration. Stack is open source and transparent, which ensures that developers have no barriers to understand all the process of code from editing to deployment."),(0,o.kt)("p",null,"With this convention-over-configuration mindset, developers can enjoy the coding-testing-commiting inner development loop."),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"A developer console can be built to display key states in delivery flow, such as build results, deployment versions, logs, traffic control rules, alerts etc.\nDevelopers can get any useful information in that console and can manipulate the application the way they want.\nAlso, developers can customize by forking a copy on GitHub to meet their special needs."))}h.isMDXComponent=!0},8174:function(e,t,n){t.Z=n.p+"assets/images/archtecture-100x-ade005e20de8a5c499375b6df061c083.png"},6586:function(e,t,n){t.Z=n.p+"assets/images/cloud-native-120ee2a05fd3c2b361ff29b22c983769.png"},2130:function(e,t,n){t.Z=n.p+"assets/images/cloud-stack-3cd0ed295339091219e8d0a7979b2fae.png"},2112:function(e,t,n){t.Z=n.p+"assets/images/gin-vue-stack-174f4828058914784174db67ed479a4b.jpg"},3660:function(e,t,n){t.Z=n.p+"assets/images/landscape-1024x702-b29c9ac0199346a30888c2a7258cb3d3.jpeg"},8270:function(e,t,n){t.Z=n.p+"assets/images/simplicity-46240106847dd4aefc164327de906c7e.jpeg"}}]);