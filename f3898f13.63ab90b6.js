(window.webpackJsonp=window.webpackJsonp||[]).push([[338],{464:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t(1),r=t(9),i=(t(0),t(483)),o={id:"hiding-tabbar-in-screens",title:"Hiding tab bar in specific screens",sidebar_label:"Hiding tab bar in specific screens"},c={id:"version-5.x/hiding-tabbar-in-screens",title:"Hiding tab bar in specific screens",description:"Sometimes we may want to hide the tab bar in specific screens in a stack navigator nested in a tab navigator. Let's say we have 5 screens: `Home`, `Feed`, `Notifications`, `Profile` and `Settings`, and your navigation structure looks like this:",source:"@site/versioned_docs/version-5.x/hiding-tabbar-in-screens.md",permalink:"/docs/hiding-tabbar-in-screens",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/hiding-tabbar-in-screens.md",version:"5.x",sidebar_label:"Hiding tab bar in specific screens",sidebar:"version-5.x/docs",previous:{title:"Supporting safe areas",permalink:"/docs/handling-safe-area"},next:{title:"Different status bar configuration based on route",permalink:"/docs/status-bar"}},s=[],b={rightToc:s};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Sometimes we may want to hide the tab bar in specific screens in a stack navigator nested in a tab navigator. Let's say we have 5 screens: ",Object(i.b)("inlineCode",{parentName:"p"},"Home"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Feed"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Notifications"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Profile")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Settings"),", and your navigation structure looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function HomeStack() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="Home" component={Home} />\n      <Stack.Screen name="Profile" component={Profile} />\n      <Stack.Screen name="Settings" component={Settings} />\n    </Stack.Navigator>\n  );\n}\n\nfunction App() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Home" component={HomeStack} />\n      <Tab.Screen name="Feed" component={Feed} />\n      <Tab.Screen name="Notifications" component={Notifications} />\n    </Tab.Navigator>\n  );\n}\n')),Object(i.b)("p",null,"With this structure, when we navigate to the ",Object(i.b)("inlineCode",{parentName:"p"},"Profile")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Settings")," screen, the tab bar will still stay visible over those screens."),Object(i.b)("p",null,"But if we want to show the tab bar only on the ",Object(i.b)("inlineCode",{parentName:"p"},"Home"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Feed")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Notifications")," screens, but not on the ",Object(i.b)("inlineCode",{parentName:"p"},"Profile")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Settings")," screens, we'll need to change the navigation structure. The easiest way to achieve this is to nest the tab navigator inside the first screen of the stack instead of nesting stack inside tab navigator:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function HomeTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Home" component={Home} />\n      <Tab.Screen name="Feed" component={Feed} />\n      <Tab.Screen name="Notifications" component={Notifications} />\n    </Tab.Navigator>\n  );\n}\n\nfunction App() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="Home" component={HomeTabs} />\n      <Stack.Screen name="Profile" component={Profile} />\n      <Stack.Screen name="Settings" component={Settings} />\n    </Stack.Navigator>\n  );\n}\n')),Object(i.b)("p",null,"After re-organizing the navigation structure, now if we navigate to the ",Object(i.b)("inlineCode",{parentName:"p"},"Profile")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Settings")," screens, the tab bar won't be visible over the screen anymore."),Object(i.b)("p",null,"Some tab navigators such as ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/bottom-tab-navigator"}),"bottom tab navigator")," also have a ",Object(i.b)("inlineCode",{parentName:"p"},"tabBarVisible")," option which can be used to hide the tab bar based on instructions in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/screen-options-resolution"}),"Screen options resolution guide"),". However, we don't recommend using it since showing/hiding the tab bar mid-navigation can affect the animation of the stack navigator causing glitchy behaviour."))}p.isMDXComponent=!0},483:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),p=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},l=function(e){var n=p(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),l=p(t),m=a,d=l["".concat(o,".").concat(m)]||l[m]||u[m]||i;return t?r.a.createElement(d,c({ref:n},b,{components:t})):r.a.createElement(d,c({ref:n},b))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<i;b++)o[b]=t[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);