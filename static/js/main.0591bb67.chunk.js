(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{44:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var r=a(3),c=a(16),s=a.n(c),l=a(5),n=a.n(l),o=a(17),i=a(6),u=a(18),b=a.n(u),d=a(2),j=a(4),p=a(0);function m(e){var t=e.globalFilter,a=e.setGlobalFilter,c=Object(r.useState)(t),s=Object(i.a)(c,2),l=s[0],n=s[1],o=Object(j.useAsyncDebounce)((function(e){a(e||void 0)}),200);return Object(p.jsx)("div",{className:"search-container",children:Object(p.jsx)("input",{className:"form-control search-input",placeholder:"Type to search directory...",value:l||"",onChange:function(e){n(e.target.value),o(e.target.value)}})})}var O=function(e){var t=e.columns,a=e.data,r=Object(j.useTable)({columns:t,data:a},j.useGlobalFilter,j.useSortBy),c=r.getTableProps,s=r.getTableBodyProps,l=r.headerGroups,n=r.rows,o=r.state,i=r.prepareRow,u=r.setGlobalFilter;return Object(p.jsxs)("div",{children:[Object(p.jsx)(m,{globalFilter:o.globalFilter,setGlobalFilter:u}),Object(p.jsxs)("table",Object(d.a)(Object(d.a)({className:"table border table-striped"},c()),{},{children:[Object(p.jsx)("thead",{className:"table-head",children:l.map((function(e){return Object(p.jsx)("tr",Object(d.a)(Object(d.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(p.jsxs)("th",Object(d.a)(Object(d.a)({scope:"col"},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),"picture"!==e.id&&Object(p.jsx)("i",{className:e.isSorted?e.isSortedDesc?"fas fa-sort-down":"fas fa-sort-up":"fas fa-sort"})]}))}))}))}))}),Object(p.jsx)("tbody",Object(d.a)(Object(d.a)({},s()),{},{children:n.map((function(e){return i(e),Object(p.jsx)("tr",Object(d.a)(Object(d.a)({className:"table-row"},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(p.jsx)("td",Object(d.a)(Object(d.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))]})},h=function(e){var t=[];return e.forEach((function(e){t.push({picture:e.picture.medium,firstName:e.name.first,lastName:e.name.last,email:e.email,cell:e.cell})})),t},f=(a(44),[{Header:"",Cell:function(e){return Object(p.jsx)("div",{children:Object(p.jsx)("img",{height:90,src:e.cell.value})},e.cell.value)},accessor:"picture",disableSortBy:!0,disableGlobalFilter:!0},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Email",accessor:"email"},{Header:"Phone Number",accessor:"cell"}]),x=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],s=function(){var e=Object(o.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://randomuser.me/api/?results=100&nat=us");case 2:t=e.sent,console.log(t.data.results),c(h(t.data.results));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){s()}),[]),Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)("h1",{className:"title",children:"Employee Directory"}),Object(p.jsx)("div",{className:"table-wrapper",children:Object(p.jsx)(O,{columns:f,data:a})})]})};a(45);s.a.render(Object(p.jsx)(x,{}),document.querySelector("#root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.0591bb67.chunk.js.map