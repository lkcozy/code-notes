"use strict";(self.webpackChunkcode_notes=self.webpackChunkcode_notes||[]).push([[210],{5260:function(e,t,n){n.d(t,{h:function(){return p}});var o=n(977),r=n(5510),a=n(7294),i=n(8391),s=n(7244),c=function(e,t){if(t)return t.key===e?"active "+t.direction:void 0},d=function(e){var t=e.requestSort,n=e.sortKey,o=e.sortConfig,i=e.children;return a.createElement(r.zx,{variant:"sort",type:"button",onClick:function(){return t(n)},className:c(n,o)},i,o.key===n&&a.createElement(a.Fragment,null,"descending"===o.direction?a.createElement(s.PNI,{sx:{color:"inherit",pointerEvents:"none"},size:"15px"}):a.createElement(s.a7d,{sx:{color:"inherit",pointerEvents:"none"},size:"15px"})))},l=n(2982),u=n(885);var g=function(e,t){void 0===t&&(t=null);var n,o,r,i,s,c,d=(n="codeNotesSortConfig",o=t,r=a.useState((function(){try{var e=window.localStorage.getItem(n);if(e){var t=e.match(/^(\[|\{|\d).*(\]|\}|\d)?$/gm);return t&&t.length?JSON.parse(e):e}return o}catch(r){return o}})),i=(0,u.Z)(r,2),s=i[0],c=i[1],[s,a.useCallback((function(e){try{c(e),"object"==typeof e?window.localStorage.setItem(n,JSON.stringify(e)):window.localStorage.setItem(n,e)}catch(t){console.error(t)}}),[n])]),g=d[0],m=d[1];return{items:(0,a.useMemo)((function(){var t=(0,l.Z)(e);return null!==g&&t.sort((function(e,t){var n,o,r,a;return(null===(n=e.node.frontmatter[g.key])||void 0===n?void 0:n.toLowerCase())<(null===(o=t.node.frontmatter[g.key])||void 0===o?void 0:o.toLowerCase())?"ascending"===g.direction?-1:1:(null===(r=e.node.frontmatter[g.key])||void 0===r?void 0:r.toLowerCase())>(null===(a=t.node.frontmatter[g.key])||void 0===a?void 0:a.toLowerCase())?"ascending"===g.direction?1:-1:0})),t}),[e,g]),requestSort:function(e){var t="ascending";g&&g.key===e&&"ascending"===g.direction&&(t="descending"),m({key:e,direction:t})},sortConfig:g}},m=n(5040),f=n.n(m),v=function(e){var t=e.notes,n=g(t,{key:"title",direction:"ascending"}),o=n.items,s=n.requestSort,c=n.sortConfig;return a.createElement(a.Fragment,null,a.createElement(r.kC,{sx:{justifyContent:"flex-end",alignItems:"center",mb:2}},a.createElement(d,{requestSort:s,sortKey:"title",sortConfig:c},"A-Z"),a.createElement(d,{requestSort:s,sortKey:"modifiedTimestamp",sortConfig:c},"Date")),o.map((function(e){var t=e.node,n=t.frontmatter,o=n.title,r=n.tags,s=n.emoji,c=n.modified,d=n.modifiedTimestamp,l="/"+f()(t.fields.slug);return a.createElement(i.y,{title:o,emoji:s,tags:r,slug:l,key:l,dateModified:c,modifiedTimestamp:d})})))},y=n(5337),h=n(1421),k=n(4364),p=function(e){var t=e.data,n=e.pageContext,i=e.location,s=t.allMdx.edges,c=(0,h.$)().title;return(0,o.tZ)(y.A,{activeTag:n.tag,path:i.pathname,basePath:n.basePath,hasUntagged:n.hasUntagged,tags:n.tags,title:n.tag?"Tag: "+n.tag:c},n.tag&&(0,o.tZ)(r.X6,{as:"h1",variant:"noteTitle"},"untagged"!==n.tag?(0,o.tZ)(a.Fragment,null,(0,o.tZ)(k.Y,{tag:n.tag,size:"0.5em"})," ",n.tag):(0,o.tZ)(a.Fragment,null,"Untagged Notes")),(0,o.tZ)(v,{notes:s}))}},1407:function(e,t,n){n.r(t);var o=n(5260);t.default=o.h}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-7321f2a4068972c7580d.js.map