(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{225:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(85),c=n.n(o),i=n(5),l=n(6),u=n(8),m=n(7),s=n(9),d=(n(97),n(2)),f=n(14),p=n(3);function h(){var t=Object(d.a)(['\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n  background: #b0d4fd;\n  font-size: 1.5em;\n  font-family: "Josefin Sans", sans-serif;\n  padding: 0.2em;\n']);return h=function(){return t},t}var g=p.a.h1(h());function b(t){var e=t.title;return r.a.createElement(g,null,e)}function v(){var t=Object(d.a)(["\n  background: #d0fff6;\n  width: 50%;\n  margin: 1em auto;\n  padding: 1em 0;\n  list-style: none;\n  flex-direction: column;\n  min-width: 100px;\n  @media (max-width: 768px) {\n    width: 95%;\n  }\n"]);return v=function(){return t},t}var E=p.a.ul(v());function x(t){var e=t.author,n=t.topic,a=t.votes,o=t.commentCount,c=t.formattedDate;return r.a.createElement(E,null,r.a.createElement("li",null,r.a.createElement("h3",null,r.a.createElement("strong",null,"by: "),e)),r.a.createElement("li",null,r.a.createElement("strong",null,"Topic:")," ",n),r.a.createElement("li",null,r.a.createElement("strong",null,"Votes:")," ",a),r.a.createElement("li",null,r.a.createElement("strong",null,"Comments:")," ",o),r.a.createElement("li",null,r.a.createElement("strong",null,"Created:")),r.a.createElement("li",null,"".concat(c," ago")))}function w(){var t=Object(d.a)(["\n    border: 2px solid #eccbd9;\n    border-radius: 25px;\n    background: #afb3f7;\n    width: 100%;\n    margin-top: 5vh;\n    margin-bottom: 15vh;\n    color: #15212e;\n    -webkit-box-shadow: 3px 3px 0px 1px #f2dde6;\n    -moz-box-shadow: 3px 3px 0px 1px #f2dde6;\n    box-shadow: 3px 3px 0px 1px #f2dde6;\n\n    :active {\n      background-color: #80ffe8;\n    }\n    @media (max-width: 768px) {\n      -webkit-box-shadow: 0px 0px 0px 0px #f2dde6;\n      -moz-box-shadow: 0px 0px 0px 0px #f2dde6;\n      box-shadow: 0px 0px 0px 0px #f2dde6;\n      margin-bottom: 5vh;\n    }\n  "]);return w=function(){return t},t}function y(t){var e=t.title,n=t.author,a=t.topic,o=t.votes,c=t.commentCount,i=t.createdAt,l=Object(f.distanceInWords)(i,new Date),u=p.a.section(w());return r.a.createElement(u,null,r.a.createElement(b,{title:e}),r.a.createElement(x,{author:n,topic:a,votes:o,commentCount:c,formattedDate:l}))}var j=n(88),O=n.n(j).a.create({baseURL:"https://rich-james-nc-news.herokuapp.com/api/"}),k=function(t,e){return O.get("/articles",{params:{topic:t,sort_by:e}}).then(function(t){return t.data.articles})},C=function(t){return O.get("/articles/".concat(t)).then(function(t){return t.data.article})},S=function(t){return O.get("articles/".concat(t,"/comments")).then(function(t){return t.data.comments})},_=function(t,e){return O.post("articles/".concat(t.article_id,"/comments"),t).then(function(t){return t})},D=function(t,e){return O.patch("/articles/".concat(t),{inc_votes:e}).then(function(t){return t.data.votes})},A=function(t,e){return O.patch("/comments/".concat(t),{inc_votes:e}).then(function(t){return t.data.votes})},M=function(t){return O.delete("comments/".concat(t))},I=n(10);function B(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"loader"}))}function U(){var t=Object(d.a)(["\n  border: 2px solid #eccbd9;\n  border-radius: 25px;\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-bottom: 1em;\n  padding-top: 1em;\n  background: #b0d4fd;\n  -webkit-box-shadow: 3px 3px 0px 1px #f2dde6;\n  -moz-box-shadow: 3px 3px 0px 1px #f2dde6;\n  box-shadow: 3px 3px 0px 1px #f2dde6;\n  @media (max-width: 768px) {\n    width: 85%;\n    box-shadow: 0px 0px 0px 0px #fff;\n  }\n"]);return U=function(){return t},t}var z=p.a.section(U());function V(t){return r.a.createElement(z,null,r.a.createElement("h4",null,"Sort By:"),r.a.createElement("br",null),r.a.createElement("form",{onChange:t.dropDownSubmit},r.a.createElement("select",{name:"sort-by"},r.a.createElement("option",{value:"created_at"},"Date Created"),r.a.createElement("option",{value:"comment_count"},"Comment Count"),r.a.createElement("option",{value:"votes"},"Votes"))))}function J(t){var e=t.errMsg;return r.a.createElement("div",null,r.a.createElement("h1",null,"Error"),r.a.createElement("p",null,e))}function N(){var t=Object(d.a)(['\n  padding-left: 10vw;\n  padding-right: 10vw;\n  padding-top: 2vh;\n  background: #e1eff6;\n  width: 50vw;\n  min-height: 50vw;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 15vh;\n  margin-bottom: 15vh;\n  font-family: "Roboto", sans-serif;\n  border: 2px solid #6fb1fc;\n  border-radius: 25px;\n  @media (max-width: 768px) {\n    width: 90%;\n    padding-left: 2%;\n    padding-right: 3%;\n    margin-top: 5vh;\n  }\n']);return N=function(){return t},t}var W=p.a.section(N()),F=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).state={topics:[],articles:[],hasError:!1,errMsg:"",loading:!0,sortBy:"created_at"},n.dropDownSubmit=function(t){n.setState({sortBy:t.target.value})},n.fetchArticles=function(t,e){k(t,e).then(function(t){return n.setState({articles:t,loading:!1,hasError:!1})}).catch(function(t){return n.setState({errMsg:t.response.data.msg,hasError:t,loading:!1})})},n}return Object(s.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.state.hasError,e=this.state.errMsg;return t?r.a.createElement(J,{errMsg:e}):r.a.createElement(W,null,this.state.loading?r.a.createElement(B,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{dropDownSubmit:this.dropDownSubmit}),this.state.articles.map(function(t){return r.a.createElement(I.a,{to:"/article/".concat(t.article_id),key:t.title},r.a.createElement(y,{author:t.author,title:t.title,topic:t.topic,votes:t.votes,commentCount:t.comment_count,createdAt:t.created_at}))})))}},{key:"componentDidMount",value:function(){var t=this,e=this.props.topic;this.fetchArticles(e),k(e).then(function(e){t.setState({articles:e})})}},{key:"componentDidUpdate",value:function(t,e){var n=this.props.topic,a=this.state.sortBy,r=t.topic!==n,o=e.sortBy!==a;(r||o)&&this.fetchArticles(n,a)}}]),e}(a.Component),R=n(38);function T(){var t=Object(d.a)(["\n  width: 90px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 2vh;\n  padding-top: 1vh;\n  padding-bottom: 1vh;\n  display: block;\n  border: solid 1px #eccbd9;\n"]);return T=function(){return t},t}function q(){var t=Object(d.a)(["\n  height: 25px;\n  position: relative;\n"]);return q=function(){return t},t}var Y=p.a.button(q()),L=p.a.section(T()),P=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).state={voteChange:0},n.handleVote=function(t){var e=n.props.article_id,a=n.props.comment_id;e&&D(e,t).catch(function(e){n.setState(function(e){return{voteChange:e.voteChange-t}})}),a&&A(a,t).catch(function(e){n.setState(function(e){return{voteChange:e.voteChange-t}})}),n.setState(function(e){return{voteChange:e.voteChange+t}})},n}return Object(s.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.state.voteChange,n=this.props.votes;return r.a.createElement(L,null,r.a.createElement(Y,{onClick:function(){return t.handleVote(1)},disabled:e>0},r.a.createElement("i",{className:"fas fa-thumbs-up"})),r.a.createElement("br",null),"Votes: ",n+e,r.a.createElement("br",null),r.a.createElement(Y,{onClick:function(){return t.handleVote(-1)},disabled:e<0},r.a.createElement("i",{className:"fas fa-thumbs-down"})))}}]),e}(a.Component);function G(){var t=Object(d.a)(["\n  border: solid 1px #eccbd9;\n  padding: 10px;\n"]);return G=function(){return t},t}var H=p.a.p(G());function K(t){var e=t.body;return r.a.createElement(H,null,e)}function Q(){var t=Object(d.a)(["\n  border: solid 1px #bcb6ff;\n  margin: 10px;\n"]);return Q=function(){return t},t}var X=p.a.div(Q());function Z(t){var e=t.author,n=t.createdAt,a="".concat(Object(f.distanceInWords)(n,new Date)," ago");return r.a.createElement(X,null,r.a.createElement("p",null,"By: ",e),r.a.createElement("p",null,a))}function $(){var t=Object(d.a)(["\n  margin: 0;\n  padding: 1em 0;\n  padding-left: 5vw;\n  padding-right: 5vw;\n  background: #d0fff6;\n  border-bottom: solid 1px #bcb6ff;\n\n  :nth-child(odd) {\n    background: #cae2fd;\n  }\n"]);return $=function(){return t},t}var tt=p.a.div($());function et(t){var e=t.comment,n=t.handleDelete,a=t.username;return r.a.createElement(tt,{key:e.body},r.a.createElement(K,{body:e.body}),r.a.createElement(Z,{author:e.author,createdAt:e.created_at}),e.author===a&&r.a.createElement("button",{onClick:function(){return n(e.comment_id)}},"Delete"),r.a.createElement("div",null,r.a.createElement(P,{votes:e.votes,comment_id:e.comment_id})))}function nt(){var t=Object(d.a)(["\n  background: #cae2fd;\n  padding-top: 2vh;\n  padding-bottom: 2vh;\n  margin-left: auto;\n  margin-right: auto;\n  border-bottom: solid 1px #bcb6ff;\n  display: block;\n"]);return nt=function(){return t},t}var at=p.a.div(nt());function rt(){return r.a.createElement(at,null,r.a.createElement("h2",null,"Comments:"))}function ot(){var t=Object(d.a)([""]);return ot=function(){return t},t}function ct(){var t=Object(d.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 2vh;\n  padding-bottom: 2vh;\n  min-height: 30px;\n  background: #aefff0;\n  border-bottom: solid 1px #bcb6ff;\n"]);return ct=function(){return t},t}function it(){var t=Object(d.a)([""]);return it=function(){return t},t}var lt=p.a.section(it()),ut=p.a.section(ct()),mt=p.a.section(ot()),st=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).state={comments:[],commentBody:"",loading:!0,hasError:!1,errorMsg:""},n.handleChange=function(t){n.setState({commentBody:t.target.value})},n.handleSubmit=function(t){var e=n.props.articleId,a=n.props.loggedInUser.username;t.preventDefault();var r={article_id:e,username:a,body:n.state.commentBody};_(r,e).then(function(t){var e=t.data.comment;n.setState(function(t){return{comments:[e].concat(Object(R.a)(t.comments)),commentBody:""}})}).catch(function(t){return n.setState({hasError:!0,errorMsg:t})})},n.fetchComments=function(t){S(t).then(function(t){n.setState({comments:t,loading:!1})}).catch(function(t){return n.setState({hasError:!0,errorMsg:t})})},n.handleDelete=function(t){var e=n.state.comments;M(t).then(function(a){n.setState(function(n){return{comments:Object(R.a)(e.filter(function(e){return e.comment_id!==t}))}})}).catch(function(t){return n.setState({hasError:!0,errorMsg:t})})},n}return Object(s.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.votes,a=e.articleId,o=this.props.loggedInUser.username;return this.state.hasError?r.a.createElement("h3",null,"Error loading comments"):r.a.createElement(lt,null,r.a.createElement(ut,null,r.a.createElement(P,{votes:n,article_id:a}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Comment:"," ",r.a.createElement("input",{type:"text",name:"userComment",placeholder:"Write your comment here",value:this.state.commentBody,onChange:this.handleChange,required:!0})),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit"}))),r.a.createElement(mt,null,r.a.createElement(rt,null),this.state.comments.map(function(e){return r.a.createElement(et,{handleDelete:t.handleDelete,username:o,comment:e,key:e.comment_id})})))}},{key:"componentDidMount",value:function(){var t=this.props.articleId;this.fetchComments(t)}}]),e}(a.Component);function dt(){var t=Object(d.a)(["\n  display: flex;\n  justify-items: space-between;\n  background: #d0fff6;\n  border-top: solid 1px #bcb6ff;\n  border-bottom: solid 1px #bcb6ff;\n  margin: 0 auto;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 1vh 0;\n  list-style: none;\n  flex-direction: column;\n  min-width: 100px;\n  text-align: center;\n"]);return dt=function(){return t},t}var ft=p.a.ul(dt());function pt(t){var e=t.commentCount,n=t.createdAt,a=t.topic,o=Object(f.distanceInWords)(n,new Date);return r.a.createElement(ft,null,r.a.createElement("li",null,"Comments: ",e),r.a.createElement("li",null,"Written: ".concat(o," ago")),r.a.createElement("li",null,"Topic: ",a))}function ht(){var t=Object(d.a)(["\n  width: 70%;\n  margin-right: auto;\n  margin-left: auto;\n"]);return ht=function(){return t},t}function gt(){var t=Object(d.a)(["\n  background: #cae2fd;\n  padding-top: 0.25vh;\n  padding-bottom: 0.25vh;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n"]);return gt=function(){return t},t}var bt=p.a.section(gt()),vt=p.a.h1(ht());function Et(t){var e=t.title,n=t.author;return r.a.createElement(bt,null,r.a.createElement(vt,null,e),r.a.createElement("h2",null,"By ",n),r.a.createElement("br",null))}function xt(){var t=Object(d.a)(["\n  text-align: left;\n  padding-left: 10vw;\n  padding-right: 10vw;\n  margin-top: 4vh;\n  margin-bottom: 4vh;\n"]);return xt=function(){return t},t}var wt=p.a.div(xt());function yt(t){var e=t.body;return r.a.createElement(wt,null,e)}function jt(){var t=Object(d.a)(['\n  background: #e1eff6;\n  width: 80vw;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 15vh;\n  margin-bottom: 15vh;\n  font-family: "Roboto", sans-serif;\n  border: 2px solid #6fb1fc;\n  border-radius: 25px;\n']);return jt=function(){return t},t}var Ot=p.a.section(jt()),kt=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).state={article:{},comments:[],hasError:!1,errMsg:"",loading:!0},n.fetchArticle=function(t){C(t).then(function(t){n.setState({article:t,loading:!1,hasError:!1})}).catch(function(t){n.setState({hasError:!0,loading:!1,errMsg:t.response.data.msg})})},n}return Object(s.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.state.article,e=t.author,n=t.body,a=t.comment_count,o=t.created_at,c=t.title,i=t.topic,l=t.votes,u=this.state.errMsg,m=this.props.article_id,s=this.state.hasError,d=this.state.loading;return s?r.a.createElement(J,{errMsg:u}):d?r.a.createElement(B,null):r.a.createElement(Ot,null,this.state.loading?r.a.createElement(B,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(Et,{title:c,author:e}),r.a.createElement(yt,{body:n}),r.a.createElement(pt,{commentCount:a,createdAt:o,topic:i}),r.a.createElement(st,{articleId:m,votes:l,loggedInUser:this.props.loggedInUser})))}},{key:"componentDidMount",value:function(){var t=this.props.article_id;this.fetchArticle(t)}}]),e}(a.Component);function Ct(){var t=Object(d.a)(["\n  height: 20px;\n  float: right;\n  @media (max-width: 768px) {\n    font-size: 0.75em;\n  }\n"]);return Ct=function(){return t},t}var St=p.a.div(Ct());function _t(){return r.a.createElement(St,null,r.a.createElement("p",null,"You are logged in as: jessjelly"))}function Dt(){var t=Object(d.a)(["\n  font-size: 70px;\n  margin-top: 2vw;\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]);return Dt=function(){return t},t}var At=p.a.span(Dt());function Mt(){return r.a.createElement(At,null,r.a.createElement("i",{className:"far fa-newspaper"}))}function It(){var t=Object(d.a)(["\n  display: flex;\n  justify-content: space-around;\n  height: 10vw;\n  min-height: 110px;\n  background: #0052d4; /* fallback for old browsers */\n  background: -webkit-linear-gradient(\n    to right,\n    #6fb1fc,\n    #4364f7,\n    #0052d4\n  ); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(\n    to right,\n    #6fb1fc,\n    #4364f7,\n    #0052d4\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n\n  h1 {\n    padding-top: 1.5vw;\n  }\n  @media (max-width: 768px) {\n    h1 {\n      font-size: 2em;\n    }\n  }\n"]);return It=function(){return t},t}var Bt=p.a.span(It());function Ut(){return r.a.createElement(Bt,null,r.a.createElement("h1",null,"NC News"),r.a.createElement(Mt,null),r.a.createElement(_t,null))}function zt(){var t=Object(d.a)(["\n  width: 15vw;\n  padding-top: 0.5vh;\n  padding-bottom: 0.5vh;\n  border: 1px solid #6fb1fc;\n  :hover {\n    border: 1px solid #fff;\n  }\n  :active {\n    background: #cae2fd;\n    color: #cae2fd;\n  }\n  @media (max-width: 768px) {\n    width: 100%;\n    padding: 0.5vw;\n    justify-content: flex-start;\n    margin-bottom: 2.5vh;\n  }\n"]);return zt=function(){return t},t}function Vt(){var t=Object(d.a)([""]);return Vt=function(){return t},t}function Jt(){var t=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  list-style: none;\n  width: 75%;\n  padding: 0;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 1.1em;\n  flex-wrap: wrap;\n  h3 {\n    text-decoration: underline;\n  }\n\n  @media (max-width: 768px) {\n    width: 85%;\n    margin-bottom: 0.5vh;\n    margin-top: 1vh;\n    h3 {\n      width: 100%;\n      margin-bottom: 1vh;\n      grid-area: header;\n    }\n  }\n"]);return Jt=function(){return t},t}var Nt=p.a.ul(Jt()),Wt=p.a.span(Vt()),Ft=p.a.li(zt());function Rt(t){return r.a.createElement("nav",null,r.a.createElement(Nt,null,r.a.createElement("h3",null,"Topics:"),t.topics.map(function(t){return r.a.createElement(Wt,{key:t.slug},r.a.createElement(I.a,{to:"/topics/".concat(t.slug)},r.a.createElement(Ft,null,t.slug)))}),r.a.createElement(Wt,null,r.a.createElement(I.a,{to:"/"},r.a.createElement(Ft,null,"view all articles")))))}function Tt(){var t=Object(d.a)(["\n  background: #0052d4;\n"]);return Tt=function(){return t},t}var qt=p.a.span(Tt());function Yt(t){return r.a.createElement(qt,null,r.a.createElement(Rt,{topics:t.topics}))}function Lt(){var t=Object(d.a)(['\n  display: grid;\n  grid-template-rows: 1fr, 1fr;\n  color: white;\n  font-family: "Josefin Sans", sans-serif;\n']);return Lt=function(){return t},t}var Pt=p.a.header(Lt());function Gt(t){return r.a.createElement(Pt,null,r.a.createElement(I.a,{to:"/"},r.a.createElement(Ut,null)),r.a.createElement(Yt,{topics:t.topics}))}var Ht=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).state={topics:[],loggedInUser:{username:"jessjelly",avatar:"https://i.ytimg.com/vi/RUP4dCucVnY/hqdefault.jpg",name:"Jess Jelly"}},n}return Object(s.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.state.topics;return r.a.createElement("div",{className:"App"},r.a.createElement(Gt,{topics:t}),r.a.createElement(I.b,null,r.a.createElement(F,{path:"/"}),r.a.createElement(F,{path:"/topics/:topic"}),r.a.createElement(kt,{loggedInUser:this.state.loggedInUser,path:"/article/:article_id"}),r.a.createElement(J,{default:!0})))}},{key:"componentDidMount",value:function(){var t=this;O.get("topics").then(function(t){return t.data.topics}).then(function(e){return t.setState({topics:e})})}}]),e}(a.Component);n(224);c.a.render(r.a.createElement(Ht,null),document.getElementById("root"))},92:function(t,e,n){t.exports=n(225)},97:function(t,e,n){}},[[92,1,2]]]);
//# sourceMappingURL=main.571835e2.chunk.js.map