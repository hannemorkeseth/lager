(this.webpackJsonplager=this.webpackJsonplager||[]).push([[0],{40:function(t,e,a){"use strict";a.r(e);var n=a(17),l=a.n(n),s=a(31),i=a.n(s),c=a(0),r=a.n(c),o=a(23),u=a(3),d=a(1),b=a(2),h=a(11),j=a(5),p=a(6),O=a(7);var v=function(t){return Object(O.jsxs)("div",{className:"popup",children:[Object(O.jsx)("h2",{children:"Opprett ny liste"}),Object(O.jsxs)("form",{children:[Object(O.jsx)("input",{type:"text",placeholder:"Tittel..."}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"radio",id:"gronn",value:"166,216,146"}),Object(O.jsx)("label",{for:"gronn",children:"Gr\xf8nn"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"radio",id:"gul",value:"245,216,91"}),Object(O.jsx)("label",{for:"gul",children:"Gul"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"radio",id:"rod",value:"227,97,86"}),Object(O.jsx)("label",{for:"rod",children:"R\xf8d"}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{className:"btn btn-light",onClick:function(){return t.opprettListe()},children:"Opprett"})]})]})};var g=function(t){return Object(O.jsxs)("div",{className:"list-item-container",children:[Object(O.jsx)("p",{className:"text-field",children:Object(O.jsx)("span",{className:"align-middle",children:t.vare.vare})}),Object(O.jsx)("button",{className:"btn",onClick:function(){t.handlePlusClick(t.vare.id,t.vare.antall)},style:{backgroundColor:t.buttonColor},children:"+"}),Object(O.jsx)("p",{className:"number",children:Object(O.jsx)("span",{className:"align-middle",children:t.vare.antall})}),Object(O.jsx)("button",{className:"btn",onClick:function(){t.handleMinusClick(t.vare.id,t.vare.antall)},style:{backgroundColor:t.buttonColor},children:"-"}),Object(O.jsx)("button",{className:"btn btn-danger",onClick:function(){t.handleDelete(t.vare.id)},children:"Slett"})]})},C=function(t){Object(j.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleClick=n.handleClick.bind(Object(h.a)(n)),n}return Object(b.a)(a,[{key:"handleChange",value:function(t){this.props.handleInputChange(t.target.value)}},{key:"handleClick",value:function(){this.props.addItem(this.props.value)}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"input-container",children:[Object(O.jsx)("input",{type:"text",className:"text-field",placeholder:"Vare...",value:this.props.value,onChange:this.handleChange}),Object(O.jsx)("button",{onClick:this.handleClick,className:"btn input-btn",style:{backgroundColor:this.props.buttonColor},children:"Legg til"})]})}}]),a}(l.a.Component),f=a(32),k=a(25),m=Object(f.a)({apiKey:"AIzaSyCRkr2yNXm6sQUocWcWCMf28KzjYz7QFBQ",authDomain:"lager-49d43.firebaseapp.com",projectId:"lager-49d43",storageBucket:"lager-49d43.appspot.com",messagingSenderId:"560599513336",appId:"1:560599513336:web:dd67f45ebb8b2e2f77a30d"}),x=Object(k.f)(m),y=a(14),N=function(t){Object(j.a)(a,t);var e=Object(p.a)(a);function a(){var t;return Object(d.a)(this,a),(t=e.call(this)).state={data:[],inputvalue:"",loading:!1},t.handlePlusClick=t.handlePlusClick.bind(Object(h.a)(t)),t.handleMinusClick=t.handleMinusClick.bind(Object(h.a)(t)),t.handleDelete=t.handleDelete.bind(Object(h.a)(t)),t.handleInputChange=t.handleInputChange.bind(Object(h.a)(t)),t.addItem=t.addItem.bind(Object(h.a)(t)),t}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.setState({loading:!0});var e=Object(y.b)(x,this.props.saveState);Object(y.f)(e,(function(e){t.setState({data:e.docs.map((function(t){return Object(o.a)(Object(o.a)({},t.data()),{},{id:t.id})}))})}));this.setState({loading:!1})}},{key:"handlePlusClick",value:function(t,e){var a=Object(y.d)(x,this.props.saveState,t),n={antall:e+1};Object(y.g)(a,n)}},{key:"handleMinusClick",value:function(t,e){var a=Object(y.d)(x,this.props.saveState,t),n={antall:e-1};Object(y.g)(a,n)}},{key:"handleDelete",value:function(t){var e=Object(y.d)(x,this.props.saveState,t);Object(y.c)(e)}},{key:"handleInputChange",value:function(t){this.setState({inputvalue:t})}},{key:"addItem",value:function(t){var e=Object(y.b)(x,this.props.saveState);Object(y.a)(e,{vare:t,antall:1}),this.setState({inputvalue:""})}},{key:"render",value:function(){var t=this,e=(this.state.data.sort((function(t,e){return t.vare.localeCompare(e.vare)})),this.state.data.map((function(e,a){return Object(O.jsx)(g,{vare:e,handlePlusClick:t.handlePlusClick,handleMinusClick:t.handleMinusClick,handleDelete:t.handleDelete,buttonColor:t.props.buttonColor},"".concat(a))}))),a=this.state.loading?"Loading...":null;return Object(O.jsxs)("div",{className:"list",style:{backgroundColor:this.props.color},children:[Object(O.jsx)("h1",{className:"overskrift",children:this.props.tittel}),a,e,Object(O.jsx)(C,{value:this.state.inputvalue,handleInputChange:this.handleInputChange,addItem:this.addItem,buttonColor:this.props.buttonColor})]})}}]),a}(l.a.Component),L=function(t){Object(j.a)(a,t);var e=Object(p.a)(a);function a(){var t;return Object(d.a)(this,a),(t=e.call(this)).state={lister:[],toggleNyListe:!1},t.toggleNewList=t.toggleNewList.bind(Object(h.a)(t)),t.opprettListe=t.opprettListe.bind(Object(h.a)(t)),t}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var t=Object(u.a)(r.a.mark((function t(){var e,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(y.b)(x,"lister"),t.next=3,Object(y.e)(e);case 3:a=t.sent,this.setState({lister:a.docs.map((function(t){return Object(o.a)(Object(o.a)({},t.data()),{},{id:t.id})}))});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"toggleNewList",value:function(){this.setState({toggleNyListe:!this.state.toggleNyListe})}},{key:"opprettListe",value:function(){this.setState({toggleNyListe:!this.state.toggleNyListe})}},{key:"render",value:function(){var t=this.state.lister.map((function(t){return Object(O.jsx)(N,{tittel:t.tittel,saveState:t.state,color:t.color,buttonColor:t.buttonColor},t.id)})),e=this.state.toggleNyListe?Object(O.jsx)(v,{opprettListe:this.oprettListe}):null,a=this.state.toggleNyListe?null:Object(O.jsx)("button",{className:"btn btn-light ny-liste",onClick:this.toggleNewList,children:"Ny liste"});return Object(O.jsxs)("div",{className:"app",children:[a,e,t]})}}]),a}(l.a.Component),I=L;i.a.render(Object(O.jsx)(I,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.dac22700.chunk.js.map