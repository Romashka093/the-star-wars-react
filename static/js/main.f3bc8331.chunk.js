(this["webpackJsonpthe-star-wars-react"]=this["webpackJsonpthe-star-wars-react"]||[]).push([[0],{50:function(e,t,n){e.exports={conteiner:"Movie_conteiner__3OBwt"}},51:function(e,t,n){e.exports={conteiner:"App_conteiner__1Rp_J"}},58:function(e,t,n){e.exports=n(86)},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),i=n.n(o),s=n(28),l=n(29),c=n(34),u=n(33),m=n(25),d=n.n(m),h=n(36),v=n(35),p=n.n(v);p.a.defaults.baseURL="http://swapi.dev/api/";var f=function(){return Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("films/").then((function(e){return e.data.results}));case 3:return t=e.sent,e.abrupt("return",t);case 7:throw e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},g=function(e){return Object(h.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get("films/".concat(e));case 3:return n=t.sent,console.log(n),t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(0),console.log(t.t0),t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()},E=n(118),b=n(124),M=Object(E.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)},"& .MuiButton-containedPrimary":{color:"#151515",backgroundColor:"#EEDB00"}}}}));function w(e){var t=e.name,n=e.toggleSortMovies,a=M();return r.a.createElement("div",{className:a.root},r.a.createElement(b.a,{variant:"contained",color:"primary",href:"#contained-buttons",onClick:n},t))}var y=n(123),S=Object(E.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"},"& .MuiFormLabel-root":{fontFamily:"PollerOne"},"& .Mui-focused":{color:"#EEDB00"}}}}));function O(e){var t=e.handleSubmit,n=e.placeholder,a=e.value,o=e.handleChange,i=S();return r.a.createElement("form",{className:i.root,noValidate:!0,autoComplete:"off",onClick:t},r.a.createElement(y.a,{id:"outlined-basic",variant:"outlined",value:a,autoFocus:!0,label:n,onChange:o}))}var C=function(e){var t=e.handleChange,n=e.handleSubmit,o=e.searchQuery,i=e.toggleSortMovies;return r.a.createElement(a.Fragment,null,r.a.createElement(O,{handleSubmit:n,handleChange:t,value:o,placeholder:"Enter movie name"}),r.a.createElement(w,{name:"Sort",toggleSortMovies:i}))},k=n(122),_=n(87),j=Object(E.a)((function(e){return{root:{"& > * + *":{marginLeft:e.spacing(12)},"& .MuiTypography-colorPrimary":{color:"#EEDB00"}}}}));function I(e){var t=e.name,n=e.id,a=j();return r.a.createElement(_.a,{className:a.root},r.a.createElement(k.a,{href:"#",id:n},t))}var L=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.movies;return console.log(e),r.a.createElement(a.Fragment,null,e.map((function(e){return r.a.createElement("div",null,r.a.createElement("h2",{key:e.episode_id},e.title),r.a.createElement("p",null,"description: ",e.opening_crawl),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"director"),r.a.createElement("th",null,"producer"),r.a.createElement("th",null,"release date"),r.a.createElement("th",null,"director"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,e.director),r.a.createElement("td",null,e.producer),r.a.createElement("td",null,e.release_date),r.a.createElement("td",null,e.director)))))})))}}]),n}(a.Component),D=function(e){var t=e.movies,n=e.foundMovies,a=e.handleOpenItem,o=e.isOpen,i=e.movieID,s=e.targetMovie;return r.a.createElement("ul",null,0===n.length?t.map((function(e){return r.a.createElement("li",{key:e.episode_id,onClick:a},r.a.createElement(I,{id:e.episode_id,isOpen:o,handleOpenItem:a,name:e.title}),i===e.episode_id&&r.a.createElement(L,{movies:s}))})):n.map((function(e){return r.a.createElement("li",{key:e.episode_id},r.a.createElement(I,{id:e.episode_id,isOpen:o,handleOpenItem:a,name:e.title}),i===n.episode_id&&r.a.createElement(L,{movies:s}))})))},Q=n(50),x=n.n(Q),B=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],searchQuery:"",foundMovies:[],isSorted:!1,sortedMovies:[],isOpen:!1,movieID:[],targetMovie:[]},e.openMovie=function(t){g(t).then((function(t){var n=t.data.results;e.setState({movieID:n})}))},e.searchMovies=function(t){f(t).then((function(t){return e.setState({movies:t})}))},e.toggleSortMovies=function(){e.sortMovies()},e.handleChange=function(t){e.setState({searchQuery:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery&&e.state.searchQuery},e.handleOpenItem=function(t){var n=Number(t.target.id),a=e.state.movies.filter((function(e){return e.episode_id===n}));console.log("targetMovie",a),e.setState({isOpen:!e.state.isOpen,movieID:n,targetMovie:a})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){e.setState({movies:t})}))}},{key:"componentDidUpdate",value:function(e,t){var n=this;if(t.searchQuery!==this.state.searchQuery){this.searchMovies(this.state.searchQuery),this.toggleSortMovies();var a=this.state.movies.filter((function(e){return e.title.toLowerCase().includes(n.state.searchQuery.toLowerCase())}));this.setState({foundMovies:a})}}},{key:"sortMovies",value:function(){var e=this.state.movies,t=e;t=this.state.isSorted?e.sort((function(e,t){return e.title.toLowerCase()>t.title.toLowerCase()?1:-1})):e.sort((function(e,t){return e.title.toLowerCase()<t.title.toLowerCase()?1:-1})),this.setState({isSorted:!this.state.isSorted,sortedMovies:t});var n=this.state.foundMovies,a=n;a=this.state.isSorted?n.sort((function(e,t){return e.title.toLowerCase()>t.title.toLowerCase()?1:-1})):n.sort((function(e,t){return e.title.toLowerCase()<t.title.toLowerCase()?1:-1})),this.setState({isSorted:!this.state.isSorted,sortedMovies:a})}},{key:"render",value:function(){var e=this.state,t=e.movies,n=e.searchQuery,o=e.foundMovies,i=e.isOpen,s=e.movieID,l=e.targetMovie;return r.a.createElement(a.Fragment,null,r.a.createElement("header",null,r.a.createElement("h1",null,"The Star Wars movies")),r.a.createElement("main",{className:x.a.conteiner},r.a.createElement(C,{handleChange:this.handleChange,handleSubmit:this.handleSubmit,searchQuery:n,toggleSortMovies:this.toggleSortMovies.bind(this)}),r.a.createElement(D,{isOpen:i,movies:t,foundMovies:o,handleOpenItem:this.handleOpenItem,movieID:s,targetMovie:l})))}}]),n}(a.Component),F=n(51),N=n.n(F);var J=function(){return r.a.createElement("div",{className:N.a.conteiner},r.a.createElement(B,null))};n(84),n(85),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.f3bc8331.chunk.js.map