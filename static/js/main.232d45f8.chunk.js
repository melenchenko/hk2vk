(window.webpackJsonpundefined=window.webpackJsonpundefined||[]).push([[0],{107:function(e,t,a){"use strict";(function(e){e._quest_id=0;e._quest_id}).call(this,a(54))},110:function(e,t,a){"use strict";(function(e){var n=a(82),s=a.n(n),i=a(111),r=a(65),l=a(0),c=a.n(l),o=a(41),u=a.n(o),d=a(128),h=a.n(d),p=a(127),f=a.n(p),g=(a(268),a(112)),m=a(114),v=a(119),E=a(121),k=a(122),b=a(123),y=a(124),_=a(125),j=a(126),O=a(3);a(107);t.a=function(){var t=Object(l.useState)("home"),a=Object(r.a)(t,2),n=a[0],o=a[1],d=Object(l.useState)(null),p=Object(r.a)(d,2),q=p[0],R=p[1],C=Object(l.useState)(c.a.createElement(f.a,{size:"large"})),U=Object(r.a)(C,2),S=U[0],w=U[1];Object(l.useEffect)((function(){function e(){return(e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.sendPromise("VKWebAppGetUserInfo");case 2:t=e.sent,R(t),w(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}u.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var s=document.createAttribute("scheme");s.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(s)}})),function(){e.apply(this,arguments)}()}),[]);var Q=function(e){o(e.currentTarget.dataset.to)},T=function(t){e._quest_id=t.currentTarget.dataset.quest,o("quest")};return c.a.createElement(O.c,{tabbar:c.a.createElement(O.j,null,c.a.createElement(O.k,{onClick:Q,"data-to":"home"},"\u0412\u0441\u0435 \u043a\u0432\u0435\u0441\u0442\u044b"),c.a.createElement(O.k,{onClick:Q,"data-to":"myquests"},"\u041c\u043e\u0438 \u043a\u0432\u0435\u0441\u0442\u044b"),c.a.createElement(O.k,{onClick:Q,"data-to":"status"},"\u0414\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f"),c.a.createElement(O.k,{onClick:Q,"data-to":"profile"},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),c.a.createElement(O.k,{onClick:Q,"data-to":"users"},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"))},c.a.createElement(h.a,{activePanel:n,popout:S},c.a.createElement(g.a,{id:"home",fetchedUser:q,go:Q,goQuest:T}),c.a.createElement(m.a,{id:"persik",fetchedUser:q,go:Q}),c.a.createElement(v.a,{id:"quest",fetchedUser:q,go:Q}),c.a.createElement(E.a,{id:"myquests",fetchedUser:q,go:Q,goQuest:T}),c.a.createElement(k.a,{id:"status",fetchedUser:q,go:Q}),c.a.createElement(b.a,{id:"profile",fetchedUser:q,go:Q}),c.a.createElement(y.a,{id:"users",fetchedUser:q,go:Q}),c.a.createElement(_.a,{id:"map",fetchedUser:q,go:Q}),c.a.createElement(j.a,{id:"addquest",fetchedUser:q,go:Q,goQuest:T})))}}).call(this,a(54))},112:function(e,t,a){"use strict";var n=a(24),s=a(25),i=a(28),r=a(26),l=a(29),c=a(0),o=a.n(c),u=a(1),d=a.n(u),h=a(21),p=a.n(h),f=a(20),g=a.n(f),m=a(11),v=a.n(m),E=a(14),k=a.n(E),b=a(3),y=a(27),_=a.n(y),j=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).propTypes={id:d.a.string.isRequired,go:d.a.func.isRequired,goQuest:d.a.func.isRequired,fetchedUser:d.a.shape({id:d.a.string,photo_200:d.a.string,first_name:d.a.string,last_name:d.a.string,city:d.a.shape({title:d.a.string})})},a.state={quests:[]},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"getCatalog",value:function(){var e=this;fetch("https://lastweb.ru/stubs/hk2/getCatalog.php").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({quests:t})}),(function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.getCatalog()}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.go,n=(e.fetchedUser,e.goQuest),s=this.state.quests,i=[];return s.forEach((function(e){i.push(o.a.createElement(k.a,{key:e.id,"data-quest":e.id,onClick:n},e.title))})),o.a.createElement(p.a,{id:t},o.a.createElement(g.a,{left:o.a.createElement(b.e,{key:"addquest"},o.a.createElement(_.a,{onClick:a,"data-to":"addquest"}))},"\u0412\u0421\u0415 \u041a\u0412\u0415\u0421\u0422\u042b"),o.a.createElement(v.a,{title:"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u043a \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044e"},o.a.createElement(k.a,null,i)))}}]),t}(o.a.Component);t.a=j},114:function(e,t,a){"use strict";var n=a(0),s=a.n(n),i=a(3),r=a(21),l=a.n(r),c=a(20),o=a.n(c),u=a(118),d=a.n(u),h=a(115),p=a.n(h),f=a(116),g=a.n(f),m=a(117),v=a.n(m),E=(a(279),Object(i.m)());t.a=function(e){return s.a.createElement(l.a,{id:e.id},s.a.createElement(o.a,{left:s.a.createElement(d.a,{onClick:e.go,"data-to":"home"},E===i.f?s.a.createElement(p.a,null):s.a.createElement(g.a,null))},"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0437\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0430"),s.a.createElement(i.b,null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u043e\u0447\u0435\u043d\u044c \u0441\u043a\u043e\u0440\u043e \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f. \u041f\u043e\u043a\u0430 \u043f\u043e\u043b\u044e\u0431\u0443\u0439\u0442\u0435\u0441\u044c \u043d\u0430 \u043a\u043e\u0442\u0438\u043a\u0430."),s.a.createElement("img",{className:"Persik",src:v.a,alt:"Persik The Cat"}))}},117:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},119:function(e,t,a){"use strict";(function(e){var n=a(24),s=a(25),i=a(28),r=a(26),l=a(29),c=a(0),o=a.n(c),u=a(1),d=a.n(u),h=a(21),p=a.n(h),f=a(20),g=a.n(f),m=a(39),v=a.n(m),E=a(11),k=a.n(E),b=a(14),y=a.n(b),_=a(3),j=a(27),O=a.n(j),q=a(120),R=a.n(q),C=(a(107),function(t){function a(e){var t;return Object(n.a)(this,a),(t=Object(i.a)(this,Object(r.a)(a).call(this,e))).propTypes={id:d.a.string.isRequired,go:d.a.func.isRequired,fetchedUser:d.a.shape({id:d.a.string,photo_200:d.a.string,first_name:d.a.string,last_name:d.a.string,city:d.a.shape({title:d.a.string})})},t.state={quest:{},loading:!0,user_list:[]},t}return Object(l.a)(a,t),Object(s.a)(a,[{key:"getQuest",value:function(e){var t=this;fetch("https://lastweb.ru/stubs/hk2/getQuest.php?id="+e+"&vk_id="+this.props.fetchedUser.id).then((function(e){return e.json()})).then((function(e){console.log(e);var a=t.state.user_list;e.users.forEach((function(n){var s=o.a.createElement(v.a,{size:"xl",level:"2",onClick:t.props.go,"data-to":"persik"},"\u0418\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u044c"),i=o.a.createElement(y.a,{key:n.vk_id},o.a.createElement(_.h,{target:"_blank",href:"https://vk.com/id"+n.vk_id},n.vk_id," ",n._vk.first_name," ",n._vk.last_name),"1"==e.admin_mode&&s);a.push(i)})),t.setState({quest:e,loading:!1,user_list:a})}),(function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){var t=e._quest_id;this.getQuest(t)}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.go,n=(e.fetchedUser,this.state),s=n.quest,i=n.loading,r=n.user_list;if(i)return o.a.createElement(p.a,{id:t},o.a.createElement(g.a,null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"),o.a.createElement(R.a,null));if("1"==s.admin_mode)var l=o.a.createElement(v.a,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0435");else l=o.a.createElement(v.a,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"\u041d\u0430\u0447\u0430\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435");return o.a.createElement(p.a,{id:t},o.a.createElement(g.a,{left:o.a.createElement(_.e,{key:"addquest"},o.a.createElement(O.a,{onClick:a,"data-to":"addquest"}))},"\u041a\u0412\u0415\u0421\u0422"),o.a.createElement(k.a,{title:s.quest.title},o.a.createElement(y.a,null,s.quest.description),o.a.createElement(y.a,null,l)),o.a.createElement(k.a,{title:"\u0423\u0447\u0430\u0441\u0442\u0432\u0443\u044e\u0442"},o.a.createElement(y.a,null,r)))}}]),a}(o.a.Component));t.a=C}).call(this,a(54))},121:function(e,t,a){"use strict";var n=a(24),s=a(25),i=a(28),r=a(26),l=a(29),c=a(0),o=a.n(c),u=a(1),d=a.n(u),h=a(21),p=a.n(h),f=a(20),g=a.n(f),m=a(11),v=a.n(m),E=a(14),k=a.n(E),b=a(3),y=a(27),_=a.n(y),j=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).propTypes={id:d.a.string.isRequired,go:d.a.func.isRequired,goQuest:d.a.func.isRequired,fetchedUser:d.a.shape({id:d.a.string,photo_200:d.a.string,first_name:d.a.string,last_name:d.a.string,city:d.a.shape({title:d.a.string})})},a.state={quests:[]},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"getQuests",value:function(){var e=this;fetch("https://lastweb.ru/stubs/hk2/getQuestsByVkId.php?vk_id="+this.props.fetchedUser.id).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({quests:t})}),(function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.getQuests()}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.go,n=(e.fetchedUser,e.goQuest),s=this.state.quests,i=[],r=[],l=[],c=[];return s.forEach((function(e){var t=o.a.createElement(k.a,{key:e.id,"data-quest":e.id,onClick:n},e.title);i.push(t),1==e.is_own?c.push(t):2==e.status?l.push(t):r.push(t)})),o.a.createElement(p.a,{id:t},o.a.createElement(g.a,{left:o.a.createElement(b.e,{key:"addquest"},o.a.createElement(_.a,{onClick:a,"data-to":"addquest"}))},"\u041c\u043e\u0438 \u043a\u0432\u0435\u0441\u0442\u044b"),o.a.createElement(v.a,{title:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u043a\u0432\u0435\u0441\u0442\u044b"},o.a.createElement(k.a,null,r)),o.a.createElement(v.a,{title:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435 \u043a\u0432\u0435\u0441\u0442\u044b"},o.a.createElement(k.a,null,l)),o.a.createElement(v.a,{title:"\u0421\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0435 \u043c\u043d\u043e\u0439 \u043a\u0432\u0435\u0441\u0442\u044b"},o.a.createElement(k.a,null,c)))}}]),t}(o.a.Component);t.a=j},122:function(e,t,a){"use strict";var n=a(24),s=a(25),i=a(28),r=a(26),l=a(29),c=a(0),o=a.n(c),u=a(1),d=a.n(u),h=a(21),p=a.n(h),f=a(20),g=a.n(f),m=a(11),v=a.n(m),E=a(52),k=a.n(E),b=a(14),y=a.n(b),_=a(53),j=a.n(_),O=a(3),q=(a(79),a(27)),R=a.n(q),C=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).propTypes={id:d.a.string.isRequired,go:d.a.func.isRequired,fetchedUser:d.a.shape({id:d.a.string,photo_200:d.a.string,first_name:d.a.string,last_name:d.a.string,city:d.a.shape({title:d.a.string})})},a.state={user:{}},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"getStatus",value:function(){var e=this;fetch("https://lastweb.ru/stubs/hk2/getStatus.php?vk_id="+this.props.fetchedUser.id).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({user:t})}),(function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.getStatus()}},{key:"render",value:function(){var e=this.props.id,t=this.props.go,a=this.props.fetchedUser,n=this.state.user;return o.a.createElement(p.a,{id:e},o.a.createElement(g.a,{left:o.a.createElement(O.e,{key:"addquest"},o.a.createElement(R.a,{onClick:t,"data-to":"addquest"}))},"Status"),a&&o.a.createElement(v.a,{title:"User Data Fetched with VK Connect"},o.a.createElement(k.a,{before:a.photo_200?o.a.createElement(j.a,{src:a.photo_200}):null,description:a.city&&a.city.title?a.city.title:""},"".concat(a.first_name," ").concat(a.last_name))),o.a.createElement(v.a,{title:"\u041c\u043e\u0438 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438"},o.a.createElement(y.a,null,this.props.fetchedUser.id),o.a.createElement(y.a,null,"\u0411\u0430\u043b\u0430\u043d\u0441: "+n.balance),o.a.createElement(y.a,null,"\u0423\u0440\u043e\u0432\u0435\u043d\u044c: "+n.level)))}}]),t}(o.a.Component);t.a=C},123:function(e,t,a){"use strict";var n=a(24),s=a(25),i=a(28),r=a(26),l=a(22),c=a(29),o=a(0),u=a.n(o),d=a(1),h=a.n(d),p=a(21),f=a.n(p),g=a(20),m=a.n(g),v=a(39),E=a.n(v),k=a(11),b=a.n(k),y=a(52),_=a.n(y),j=a(53),O=a.n(j),q=a(3),R=a(27),C=a.n(R),U=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).propTypes={id:h.a.string.isRequired,go:h.a.func.isRequired,fetchedUser:h.a.shape({id:h.a.string,photo_200:h.a.string,first_name:h.a.string,last_name:h.a.string,city:h.a.shape({title:h.a.string})})},a.state={profile:{},cloth:void 0,gender:void 0,english:void 0},a.handleCloth=a.handleCloth.bind(Object(l.a)(a)),a.handleGender=a.handleGender.bind(Object(l.a)(a)),a.handleEnglish=a.handleEnglish.bind(Object(l.a)(a)),a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"getProfile",value:function(){var e=this;fetch("https://lastweb.ru/stubs/hk2/getProfile.php?vk_id="+this.props.fetchedUser.id).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({profile:t})}),(function(e){console.log(e)}))}},{key:"saveProfile",value:function(){var e=this;fetch("https://lastweb.ru/stubs/hk2/setProfile.php?vk_id="+this.props.fetchedUser.id+"&gender="+this.state.gender+"&speak_english="+this.state.english+"&cloth_size="+this.state.cloth).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({profile:t})}),(function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.getProfile()}},{key:"handleCloth",value:function(e){this.setState({cloth:e.target.value})}},{key:"handleGender",value:function(e){this.setState({gender:e.target.value})}},{key:"handleEnglish",value:function(e){this.setState({english:e.target.checked?"1":"0"})}},{key:"render",value:function(){var e=this,t=this.props.id,a=this.props.go,n=this.props.fetchedUser,s=this.state,i=s.profile,r=s.cloth,l=s.english,c=s.gender;return void 0===r&&void 0!==i.cloth_size&&this.setState({cloth:i.cloth_size}),void 0===l&&void 0!==i.speak_english&&this.setState({english:i.speak_english}),void 0===c&&void 0!==i.gender&&this.setState({gender:i.gender}),u.a.createElement(f.a,{id:t},u.a.createElement(m.a,{left:u.a.createElement(q.e,{key:"addquest"},u.a.createElement(C.a,{onClick:a,"data-to":"addquest"}))},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),n&&u.a.createElement(b.a,{title:"User Data Fetched with VK Connect"},u.a.createElement(_.a,{before:n.photo_200?u.a.createElement(O.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),u.a.createElement(b.a,{title:"\u041c\u043e\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},u.a.createElement(q.d,null,u.a.createElement(q.i,{"data-name":"gender",top:"\u041f\u043e\u043b",placeholder:("1"==c?"\u041c\u0443\u0436\u0441\u043a\u043e\u0439":"0"==c?"\u0416\u0435\u043d\u0441\u043a\u0438\u0439":"")+" (\u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435)",value:c,onChange:this.handleGender},u.a.createElement("option",{value:"1"},"\u041c\u0443\u0436\u0441\u043a\u043e\u0439"),u.a.createElement("option",{value:"0"},"\u0416\u0435\u043d\u0441\u043a\u0438\u0439")),u.a.createElement(q.g,{"data-name":"cloth",top:"\u0420\u0430\u0437\u043c\u0435\u0440 \u043e\u0434\u0435\u0436\u0434\u044b",value:r,onChange:this.handleCloth}),u.a.createElement(q.a,{checked:"1"==this.state.english,"data-name":"english",value:this.state.english,onChange:this.handleEnglish},"\u0417\u043d\u0430\u043d\u0438\u0435 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u044f\u0437\u044b\u043a\u0430"),u.a.createElement(E.a,{size:"xl",onClick:function(){return e.saveProfile()}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))}}]),t}(u.a.Component);t.a=U},124:function(e,t,a){"use strict";var n=a(24),s=a(25),i=a(28),r=a(26),l=a(29),c=a(0),o=a.n(c),u=a(1),d=a.n(u),h=a(21),p=a.n(h),f=a(20),g=a.n(f),m=a(11),v=a.n(m),E=a(14),k=a.n(E),b=a(3),y=a(27),_=a.n(y),j=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).propTypes={id:d.a.string.isRequired,go:d.a.func.isRequired,fetchedUser:d.a.shape({photo_200:d.a.string,first_name:d.a.string,last_name:d.a.string,city:d.a.shape({title:d.a.string})})},a.state={users:[]},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"getUsers",value:function(){var e=this;fetch("https://lastweb.ru/stubs/hk2/getUsers.php").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({users:t})}),(function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.getUsers()}},{key:"render",value:function(){var e=this.props.id,t=this.props.go,a=(this.props.fetchedUser,this.state.users),n=[];return a.forEach((function(e){n.push(o.a.createElement(k.a,{key:e.place},o.a.createElement(b.h,{target:"_blank",href:"https://vk.com/id"+e.vk_id},e.place+". "+e._vk.first_name+" "+e._vk.last_name+" \u0411\u0430\u043b\u0430\u043d\u0441: "+e.balance+". \u0423\u0440\u043e\u0432\u0435\u043d\u044c: "+e.level+e._vk.photo)))})),o.a.createElement(p.a,{id:e},o.a.createElement(g.a,{left:o.a.createElement(b.e,{key:"addquest"},o.a.createElement(_.a,{onClick:t,"data-to":"addquest"}))},"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438"),o.a.createElement(v.a,{title:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432"},o.a.createElement(k.a,null,n)))}}]),t}(o.a.Component);t.a=j},125:function(e,t,a){"use strict";var n=a(24),s=a(25),i=a(28),r=a(26),l=a(29),c=a(0),o=a.n(c),u=a(1),d=a.n(u),h=a(21),p=a.n(h),f=a(20),g=a.n(f),m=a(39),v=a.n(m),E=a(11),k=a.n(E),b=a(14),y=a.n(b),_=a(3),j=(a(79),a(27)),O=a.n(j),q=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).propTypes={id:d.a.string.isRequired,go:d.a.func.isRequired,fetchedUser:d.a.shape({id:d.a.string,photo_200:d.a.string,first_name:d.a.string,last_name:d.a.string,city:d.a.shape({title:d.a.string})})},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log("map mount")}},{key:"render",value:function(){var e=this.props.id,t=this.props.go;this.props.fetchedUser;return o.a.createElement(p.a,{id:e},o.a.createElement(g.a,{left:o.a.createElement(_.e,{key:"addquest"},o.a.createElement(O.a,{onClick:t,"data-to":"addquest"}))},"Map"),o.a.createElement(k.a,{title:"Navigation Example"},o.a.createElement(y.a,null,o.a.createElement(v.a,{size:"xl",level:"2",onClick:t,"data-to":"persik"},"Show me the Persik, please"))))}}]),t}(o.a.Component);t.a=q},126:function(e,t,a){"use strict";var n=a(24),s=a(25),i=a(28),r=a(26),l=a(22),c=a(29),o=a(0),u=a.n(o),d=a(1),h=a.n(d),p=a(21),f=a.n(p),g=a(20),m=a.n(g),v=a(39),E=a.n(v),k=a(11),b=a.n(k),y=a(3),_=(a(79),a(27)),j=a.n(_),O=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).propTypes={id:h.a.string.isRequired,go:h.a.func.isRequired,goQuest:h.a.func.isRequired,fetchedUser:h.a.shape({id:h.a.string,photo_200:h.a.string,first_name:h.a.string,last_name:h.a.string,city:h.a.shape({title:h.a.string})})},a.state={title:"",description:"",reward:"",msg:"",role1:"",roledesc1:"",rolecount1:"",role2:"",roledesc2:"",rolecount2:"",role3:"",roledesc3:"",rolecount3:""},a.handleTitle=a.handleTitle.bind(Object(l.a)(a)),a.handleDescription=a.handleDescription.bind(Object(l.a)(a)),a.handleReward=a.handleReward.bind(Object(l.a)(a)),a.handleR1=a.handleR1.bind(Object(l.a)(a)),a.handleRd1=a.handleRd1.bind(Object(l.a)(a)),a.handleRc1=a.handleRc1.bind(Object(l.a)(a)),a.handleR2=a.handleR2.bind(Object(l.a)(a)),a.handleRd2=a.handleRd2.bind(Object(l.a)(a)),a.handleRc2=a.handleRc2.bind(Object(l.a)(a)),a.handleR3=a.handleR3.bind(Object(l.a)(a)),a.handleRd3=a.handleRd3.bind(Object(l.a)(a)),a.handleRc3=a.handleRc3.bind(Object(l.a)(a)),a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log("addquest mount")}},{key:"handleR1",value:function(e){this.setState({role1:e.target.value})}},{key:"handleRd1",value:function(e){this.setState({roledesc1:e.target.value})}},{key:"handleRc1",value:function(e){this.setState({rolecount1:e.target.value})}},{key:"handleR2",value:function(e){this.setState({role2:e.target.value})}},{key:"handleRd2",value:function(e){this.setState({roledesc2:e.target.value})}},{key:"handleRc2",value:function(e){this.setState({rolecount2:e.target.value})}},{key:"handleR3",value:function(e){this.setState({role3:e.target.value})}},{key:"handleRd3",value:function(e){this.setState({roledesc3:e.target.value})}},{key:"handleRc3",value:function(e){this.setState({rolecount3:e.target.value})}},{key:"handleTitle",value:function(e){this.setState({title:e.target.value})}},{key:"handleDescription",value:function(e){this.setState({description:e.target.value})}},{key:"handleReward",value:function(e){this.setState({reward:e.target.value})}},{key:"saveQuest",value:function(e){var t=this,a="&role1="+this.state.role1+"&role2="+this.state.role2+"&role3="+this.state.role3,n="&roledesc1="+this.state.role1+"&roledesc2="+this.state.role2+"&roledesc3="+this.state.role3,s="&rolecount1="+this.state.role1+"&rolecount2="+this.state.role2+"&rolecount3="+this.state.role3;fetch("https://lastweb.ru/stubs/hk2/addQuest.php?vk_id="+this.props.fetchedUser.id+"&title="+this.state.title+"&description="+this.state.description+"&reward="+this.state.reward+a+n+s).then((function(e){return e.json()})).then((function(e){console.log(e),t.setState({title:"",description:"",reward:"",msg:"\u041a\u0432\u0435\u0441\u0442 \u0441\u043e\u0437\u0434\u0430\u043d"})}),(function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.go,s=(t.fetchedUser,t.goQuest,this.state),i=s.title,r=s.description,l=s.reward,c=s.msg,o=s.role1,d=s.role2,h=s.role3,p=s.roledesc1,g=s.roledesc2,v=s.roledesc3,k=s.rolecount1,_=s.rolecount2,O=s.rolecount3;return u.a.createElement(f.a,{id:a},u.a.createElement(m.a,{left:u.a.createElement(y.e,{key:"addquest"},u.a.createElement(j.a,{onClick:n,"data-to":"addquest"}))},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u0432\u0435\u0441\u0442"),u.a.createElement(b.a,{title:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043a\u0432\u0435\u0441\u0442\u0435"},u.a.createElement(y.b,null,c),u.a.createElement(y.d,null,u.a.createElement(y.g,{top:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:i,onChange:this.handleTitle}),u.a.createElement(y.l,{top:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",value:r,onChange:this.handleDescription}),u.a.createElement(y.g,{top:"\u041d\u0430\u0433\u0440\u0430\u0434\u0430 \u0432 \u0431\u0430\u043b\u043b\u0430\u0445",value:l,onChange:this.handleReward}),u.a.createElement(b.a,null,u.a.createElement(y.g,{top:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0440\u043e\u043b\u0438 \u21161",value:o,onChange:this.handleR1}),u.a.createElement(y.g,{top:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0440\u043e\u043b\u0438 \u21161",value:p,onChange:this.handleRd1}),u.a.createElement(y.g,{top:"\u041d\u0443\u0436\u043d\u043e \u043b\u044e\u0434\u0435\u0439",value:k,onChange:this.handleRc1})),u.a.createElement(b.a,null,u.a.createElement(y.g,{top:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0440\u043e\u043b\u0438 \u21162",value:d,onChange:this.handleR2}),u.a.createElement(y.g,{top:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0440\u043e\u043b\u0438 \u21162",value:g,onChange:this.handleRd2}),u.a.createElement(y.g,{top:"\u041d\u0443\u0436\u043d\u043e \u043b\u044e\u0434\u0435\u0439",value:_,onChange:this.handleRc2})),u.a.createElement(b.a,null,u.a.createElement(y.g,{top:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0440\u043e\u043b\u0438 \u21163",value:h,onChange:this.handleR3}),u.a.createElement(y.g,{top:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0440\u043e\u043b\u0438 \u21163",value:v,onChange:this.handleRd3}),u.a.createElement(y.g,{top:"\u041d\u0443\u0436\u043d\u043e \u043b\u044e\u0434\u0435\u0439",value:O,onChange:this.handleRc3})),u.a.createElement(E.a,{size:"xl",onClick:function(){return e.saveQuest()}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))}}]),t}(u.a.Component);t.a=O},189:function(e,t,a){e.exports=a(190)},190:function(e,t,a){"use strict";a.r(t);a(191),a(217),a(219),a(220),a(222),a(223),a(224),a(225),a(226),a(227),a(228),a(229),a(231),a(232),a(233),a(234),a(235),a(236),a(237),a(238),a(239),a(240),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258),a(259);var n=a(0),s=a.n(n),i=a(80),r=a.n(i),l=a(41),c=a.n(l),o=a(110);c.a.send("VKWebAppInit"),r.a.render(s.a.createElement(o.a,null),document.getElementById("root"))},279:function(e,t,a){}},[[189,1,2]]]);
//# sourceMappingURL=main.232d45f8.chunk.js.map