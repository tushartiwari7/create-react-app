"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[7902],{876:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9783:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var o=n(7896),r=n(1461),a=(n(2784),n(876)),i=["components"],p={id:"importing-a-component",title:"Importing a Component"},l=void 0,s={unversionedId:"importing-a-component",id:"importing-a-component",title:"Importing a Component",description:"This project setup supports ES6 modules thanks to webpack.",source:"@site/../docs/importing-a-component.md",sourceDirName:".",slug:"/importing-a-component",permalink:"/docs/importing-a-component",editUrl:"https://github.com/facebook/create-react-app/edit/main/docusaurus/website/../docs/importing-a-component.md",tags:[],version:"current",lastUpdatedBy:"Max Romanyuta",lastUpdatedAt:1618194630,formattedLastUpdatedAt:"4/11/2021",frontMatter:{id:"importing-a-component",title:"Importing a Component"},sidebar:"docs",previous:{title:"Installing a Dependency",permalink:"/docs/installing-a-dependency"},next:{title:"Using Global Variables",permalink:"/docs/using-global-variables"}},u=[{value:"<code>Button.js</code>",id:"buttonjs",children:[],level:2},{value:"<code>DangerButton.js</code>",id:"dangerbuttonjs",children:[],level:2},{value:"Absolute Imports",id:"absolute-imports",children:[],level:2}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This project setup supports ES6 modules thanks to webpack."),(0,a.kt)("p",null,"While you can still use ",(0,a.kt)("inlineCode",{parentName:"p"},"require()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"module.exports"),", we encourage you to use ",(0,a.kt)("a",{parentName:"p",href:"https://exploringjs.com/es6/ch_modules.html"},(0,a.kt)("inlineCode",{parentName:"a"},"import")," and ",(0,a.kt)("inlineCode",{parentName:"a"},"export"))," instead."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("h2",{id:"buttonjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"Button.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React, { Component } from 'react';\n\nclass Button extends Component {\n  render() {\n    // ...\n  }\n}\n\nexport default Button; // Don\u2019t forget to use export default!\n")),(0,a.kt)("h2",{id:"dangerbuttonjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"DangerButton.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React, { Component } from 'react';\nimport Button from './Button'; // Import a component from another file\n\nclass DangerButton extends Component {\n  render() {\n    return <Button color=\"red\" />;\n  }\n}\n\nexport default DangerButton;\n")),(0,a.kt)("p",null,"Be aware of the ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281"},"difference between default and named exports"),". It is a common source of mistakes."),(0,a.kt)("p",null,"We suggest that you stick to using default imports and exports when a module only exports a single thing (for example, a component). That\u2019s what you get when you use ",(0,a.kt)("inlineCode",{parentName:"p"},"export default Button")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"import Button from './Button'"),"."),(0,a.kt)("p",null,"Named exports are useful for utility modules that export several functions. A module may have at most one default export and as many named exports as you like."),(0,a.kt)("p",null,"Learn more about ES6 modules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281"},"When to use the curly braces?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://exploringjs.com/es6/ch_modules.html"},"Exploring ES6: Modules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leanpub.com/understandinges6/read#leanpub-auto-encapsulating-code-with-modules"},"Understanding ES6: Modules"))),(0,a.kt)("h2",{id:"absolute-imports"},"Absolute Imports"),(0,a.kt)("p",null,"You can configure your application to support importing modules using absolute paths. This can be done by configuring a ",(0,a.kt)("inlineCode",{parentName:"p"},"jsconfig.json")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file in the root of your project. If you're using TypeScript in your project, you will already have a ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file."),(0,a.kt)("p",null,"Below is an example ",(0,a.kt)("inlineCode",{parentName:"p"},"jsconfig.json")," file for a JavaScript project. You can create the file if it doesn't already exist:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "baseUrl": "src"\n  },\n  "include": ["src"]\n}\n')),(0,a.kt)("p",null,"If you're using TypeScript, you can configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"baseUrl")," setting inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"compilerOptions")," of your project's ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file."),(0,a.kt)("p",null,"Now that you've configured your project to support absolute imports, if you want to import a module located at ",(0,a.kt)("inlineCode",{parentName:"p"},"src/components/Button.js"),", you can import the module like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import Button from 'components/Button';\n")),(0,a.kt)("p",null,"For more information on these configuration files, see the ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/languages/jsconfig"},"jsconfig.json reference")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"},"tsconfig.json reference")," documentation."))}m.isMDXComponent=!0}}]);