"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[7835],{876:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(2784);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=s,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5812:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=n(7896),s=n(1461),o=(n(2784),n(876)),r=["components"],i={id:"adding-a-sass-stylesheet",title:"Adding a Sass Stylesheet",sidebar_label:"Adding Sass Stylesheets"},l=void 0,p={unversionedId:"adding-a-sass-stylesheet",id:"adding-a-sass-stylesheet",title:"Adding a Sass Stylesheet",description:"Note: this feature is available with react-scripts@2.0.0 and higher.",source:"@site/../docs/adding-a-sass-stylesheet.md",sourceDirName:".",slug:"/adding-a-sass-stylesheet",permalink:"/docs/adding-a-sass-stylesheet",editUrl:"https://github.com/facebook/create-react-app/edit/main/docusaurus/website/../docs/adding-a-sass-stylesheet.md",tags:[],version:"current",lastUpdatedBy:"Dan Abramov",lastUpdatedAt:1625672679,formattedLastUpdatedAt:"7/7/2021",frontMatter:{id:"adding-a-sass-stylesheet",title:"Adding a Sass Stylesheet",sidebar_label:"Adding Sass Stylesheets"},sidebar:"docs",previous:{title:"Adding CSS Modules",permalink:"/docs/adding-a-css-modules-stylesheet"},next:{title:"Adding CSS Reset",permalink:"/docs/adding-css-reset"}},d=[],c={toc:d};function u(e){var t=e.components,n=(0,s.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: this feature is available with ",(0,o.kt)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," and higher.")),(0,o.kt)("p",null,"Generally, we recommend that you don\u2019t reuse the same CSS classes across different components. For example, instead of using a ",(0,o.kt)("inlineCode",{parentName:"p"},".Button")," CSS class in ",(0,o.kt)("inlineCode",{parentName:"p"},"<AcceptButton>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<RejectButton>")," components, we recommend creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"<Button>")," component with its own ",(0,o.kt)("inlineCode",{parentName:"p"},".Button")," styles, that both ",(0,o.kt)("inlineCode",{parentName:"p"},"<AcceptButton>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<RejectButton>")," can render (but ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/docs/composition-vs-inheritance.html"},"not inherit"),")."),(0,o.kt)("p",null,"Following this rule often makes CSS preprocessors less useful, as features like mixins and nesting are replaced by component composition. You can, however, integrate a CSS preprocessor if you find it valuable."),(0,o.kt)("p",null,"To use Sass, first install ",(0,o.kt)("inlineCode",{parentName:"p"},"sass"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm install sass\n# or\n$ yarn add sass\n")),(0,o.kt)("p",null,"Now you can rename ",(0,o.kt)("inlineCode",{parentName:"p"},"src/App.css")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"src/App.scss")," and update ",(0,o.kt)("inlineCode",{parentName:"p"},"src/App.js")," to import ",(0,o.kt)("inlineCode",{parentName:"p"},"src/App.scss"),".\nThis file and any other file will be automatically compiled if imported with the extension ",(0,o.kt)("inlineCode",{parentName:"p"},".scss")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".sass"),"."),(0,o.kt)("p",null,"To share variables between Sass files, you can use Sass's ",(0,o.kt)("a",{parentName:"p",href:"https://sass-lang.com/documentation/at-rules/use"},(0,o.kt)("inlineCode",{parentName:"a"},"@use")," rule"),". For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"src/App.scss")," and other component style files could include ",(0,o.kt)("inlineCode",{parentName:"p"},'@use "./shared.scss";')," with variable definitions."),(0,o.kt)("p",null,"This will allow you to do imports like"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"@use 'styles/_colors.scss'; // assuming a styles directory under src/\n@use '~nprogress/nprogress'; // loading a css file from the nprogress node module\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," You can prefix paths with ",(0,o.kt)("inlineCode",{parentName:"p"},"~"),", as displayed above, to resolve modules from ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),".")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sass")," also supports the ",(0,o.kt)("inlineCode",{parentName:"p"},"SASS_PATH")," variable."),(0,o.kt)("p",null,"To use imports relative to a path you specify, you can add a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/blob/main/docusaurus/docs/adding-custom-environment-variables.md#adding-development-environment-variables-in-env"},(0,o.kt)("inlineCode",{parentName:"a"},".env")," file")," at the project root with the path specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"SASS_PATH")," environment variable. To specify more directories you can add them to ",(0,o.kt)("inlineCode",{parentName:"p"},"SASS_PATH")," separated by a ",(0,o.kt)("inlineCode",{parentName:"p"},":")," like ",(0,o.kt)("inlineCode",{parentName:"p"},"path1:path2:path3"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," For the Windows operating system, separate your paths by semicolons."),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"SASS_PATH=path1;path2;path3\n"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Tip:")," You can opt into using this feature with ",(0,o.kt)("a",{parentName:"p",href:"/docs/adding-a-css-modules-stylesheet"},"CSS modules")," too!")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," If you're using Flow, override the ",(0,o.kt)("a",{parentName:"p",href:"https://flow.org/en/docs/config/options/#toc-module-file-ext-string"},"module.file_ext")," setting in your ",(0,o.kt)("inlineCode",{parentName:"p"},".flowconfig")," so it'll recognize ",(0,o.kt)("inlineCode",{parentName:"p"},".sass")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".scss")," files. You will also need to include the ",(0,o.kt)("inlineCode",{parentName:"p"},"module.file_ext")," default settings for ",(0,o.kt)("inlineCode",{parentName:"p"},".js"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".jsx"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".mjs")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".json")," files."),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"[options]\nmodule.file_ext=.js\nmodule.file_ext=.jsx\nmodule.file_ext=.mjs\nmodule.file_ext=.json\nmodule.file_ext=.sass\nmodule.file_ext=.scss\n"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," LibSass and the packages built on top of it, including Node Sass, are ",(0,o.kt)("a",{parentName:"p",href:"https://sass-lang.com/blog/libsass-is-deprecated"},"deprecated"),".\nIf you're a user of Node Sass, you can migrate to Dart Sass by replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"node-sass")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file with ",(0,o.kt)("inlineCode",{parentName:"p"},"sass")," or by running the following commands:"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm uninstall node-sass\n$ npm install sass\n# or\n$ yarn remove node-sass\n$ yarn add sass\n"))))}u.isMDXComponent=!0}}]);