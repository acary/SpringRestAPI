(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{31:function(e,t,a){e.exports=a(60)},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(14),r=a.n(s),c=a(1),o=a(12),m=(a(36),a(4)),i=a(5),u=a(7),d=a(6),h=a(2),p=a.n(h),b=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={tasks:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/tasks").then((function(t){e.setState({tasks:t.data}),console.log(e.state.tasks)}))}},{key:"render",value:function(){return l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"panel panel-default"},l.a.createElement("div",{class:"panel-heading"},l.a.createElement("br",null),l.a.createElement("h3",{class:"panel-title"},"Task Dashboard")),l.a.createElement("div",{class:"panel-body"},l.a.createElement(c.b,{to:"/task_add"},l.a.createElement("button",{id:"add_task",class:"my-2 btn btn-primary mx-1"},"Add Task")),l.a.createElement(c.b,{to:"/task"},l.a.createElement("button",{id:"view_tasks",class:"my-2 mx-1 btn btn-info"},"View Tasks")),l.a.createElement(c.b,{to:"/create"},l.a.createElement("button",{id:"create_user",class:"my-2 mx-1 btn btn-info"},"Create User")),l.a.createElement(c.b,{to:"/user"},l.a.createElement("button",{id:"view_users",class:"my-2 mx-1 btn btn-info"},"View Users")),l.a.createElement("table",{class:"table table-stripe"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Item"),l.a.createElement("th",null,"Status"))),l.a.createElement("tbody",null,this.state.tasks.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(c.b,{to:"/task_show/".concat(e.id)},e.name)),l.a.createElement("td",null,e.status))})))),l.a.createElement("div",{class:"ml-2"},l.a.createElement("small",null,"End of list")))))}}]),a}(n.Component),E=(a(59),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={tasks:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/tasks").then((function(t){e.setState({tasks:t.data}),console.log(e.state.tasks)}))}},{key:"render",value:function(){return l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"panel panel-default"},l.a.createElement("div",{class:"panel-heading"},l.a.createElement("br",null),l.a.createElement("h3",{class:"panel-title"},"All Tasks")),l.a.createElement("div",{class:"panel-body"},l.a.createElement(c.b,{to:"/task_add"},l.a.createElement("button",{id:"add_task",class:"my-2 btn btn-primary mx-2"},"Add Task")),l.a.createElement(c.b,{to:"/"},l.a.createElement("button",{id:"dashboard",class:"my-2 btn btn-info"},"Return to Dashboard")),l.a.createElement("table",{class:"table table-stripe"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Item"),l.a.createElement("th",null,"Status"))),l.a.createElement("tbody",null,this.state.tasks.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(c.b,{to:"/task_show/".concat(e.id)},e.name)),l.a.createElement("td",null,e.status))})))),l.a.createElement("div",{class:"ml-2"},l.a.createElement("small",null,"End of list")))))}}]),a}(n.Component)),f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).onChange=function(t){var a=e.state;a[t.target.name]=t.target.value,e.setState(a)},e.onSubmit=function(t){t.preventDefault();var a=e.state,n=a.name,l=a.status;p.a.post("/tasks",{name:n,status:l}).then((function(t){e.props.history.push("/")}))},e.state={name:"",status:""},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.status;return l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"panel panel-default"},l.a.createElement("div",{class:"panel-heading"},l.a.createElement("br",null),l.a.createElement("h3",{class:"panel-title"},"Add Task")),l.a.createElement("div",{class:"panel-body"},l.a.createElement(c.b,{to:"/"},l.a.createElement("button",{id:"dashboard",class:"my-2 mx-2 btn btn-info"},"Return to Dashboard")),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"isbn"},"Name"),l.a.createElement("input",{type:"text",class:"form-control",name:"name",value:t,onChange:this.onChange,placeholder:"Name"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"title"},"Status"),l.a.createElement("input",{type:"text",class:"form-control",name:"status",value:a,onChange:this.onChange,placeholder:"Status"})),l.a.createElement("button",{id:"add_task",type:"submit",class:"btn btn-primary btn-default"},"Add Task")))))}}]),a}(n.Component),v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){e.preventDefault(),n.state={task:{status:"Completed"}},p.a.put("/tasks/"+n.props.match.params.id,n.state.task).then((function(e){n.props.history.push("/")}))},n.state={task:{}},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/tasks/"+this.props.match.params.id).then((function(t){e.setState({task:t.data}),console.log(e.state.task)}))}},{key:"delete",value:function(e){var t=this;console.log(e),p.a.delete("/tasks/"+e).then((function(e){t.props.history.push("/")}))}},{key:"render",value:function(){return l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"panel panel-default"},l.a.createElement("div",{class:"panel-heading"},l.a.createElement("br",null),l.a.createElement("h3",{class:"panel-title"},"Task Details")),l.a.createElement("div",{class:"panel-body"},l.a.createElement(c.b,{to:"/task"},l.a.createElement("button",{id:"view_tasks",class:"my-2 mx-1 btn btn-info"},"View Tasks")),l.a.createElement(c.b,{to:"/"},l.a.createElement("button",{id:"dashboard",class:"my-2 btn btn-info"},"Return to Dashboard")),l.a.createElement("dl",null,l.a.createElement("dt",null,"Name"),l.a.createElement("dd",null,this.state.task.name),l.a.createElement("dt",null,"Status"),l.a.createElement("dd",null,this.state.task.status)),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{class:"form-group"},l.a.createElement("input",{type:"hidden",class:"form-control",name:"status",value:"Completed"})),l.a.createElement("button",{type:"submit",id:"complete",class:"my-2 btn btn-primary"},"Mark Complete")),l.a.createElement(c.b,{to:"/task_edit/".concat(this.state.task.id),id:"edit_task",class:"btn btn-secondary"},"Edit Task"),"\xa0",l.a.createElement("button",{onClick:this.delete.bind(this,this.state.task.id),id:"delete_task",class:"btn btn-danger"},"Delete Task"))))}}]),a}(n.Component),y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onChange=function(e){var t=n.state.tasks;t[e.target.name]=e.target.value,n.setState({tasks:t})},n.onSubmit=function(e){e.preventDefault();var t=n.state.tasks,a=t.name,l=t.status;p.a.put("/tasks/"+n.props.match.params.id,{name:a,status:l}).then((function(e){n.props.history.push("/task_show/"+n.props.match.params.id)}))},n.state={tasks:{}},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/tasks/"+this.props.match.params.id).then((function(t){e.setState({tasks:t.data}),console.log(e.state.tasks)}))}},{key:"render",value:function(){return l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"panel panel-default"},l.a.createElement("div",{class:"panel-heading"},l.a.createElement("br",null),l.a.createElement("h3",{class:"panel-title"},"Edit Task")),l.a.createElement("div",{class:"panel-body"},l.a.createElement(c.b,{to:"/task"},l.a.createElement("button",{class:"my-2 mx-1 btn btn-info"},"View Tasks")),l.a.createElement(c.b,{to:"/"},l.a.createElement("button",{class:"my-2 btn btn-info"},"Return to Dashboard")),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"name"},"Name"),l.a.createElement("input",{type:"text",class:"form-control",name:"name",value:this.state.tasks.name,onChange:this.onChange,placeholder:"Name"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"status"},"Status"),l.a.createElement("input",{type:"text",class:"form-control",name:"status",value:this.state.tasks.status,onChange:this.onChange,placeholder:"Status"})),l.a.createElement("button",{type:"submit",class:"my-2 btn btn-success"},"Update Task")))))}}]),a}(n.Component),k=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={contacts:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/user").then((function(t){e.setState({contacts:t.data}),console.log(e.state.contacts)}))}},{key:"render",value:function(){return l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"panel panel-default"},l.a.createElement("div",{class:"panel-heading"},l.a.createElement("br",null),l.a.createElement("h3",{class:"panel-title"},"Users")),l.a.createElement("div",{class:"panel-body"},l.a.createElement(c.b,{to:"/create"},l.a.createElement("button",{id:"create_user",class:"my-2 mx-2 btn btn-primary"},"Create User")),l.a.createElement(c.b,{to:"/"},l.a.createElement("button",{id:"dashboard",class:"my-2 btn btn-info"},"Return to Dashboard")),l.a.createElement("table",{class:"table table-stripe"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Address"))),l.a.createElement("tbody",null,this.state.contacts.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(c.b,{to:"/show/".concat(e.id)},e.name)),l.a.createElement("td",null,e.address))})))))),l.a.createElement("div",{class:"ml-2"},l.a.createElement("small",null,"End of list")))}}]),a}(n.Component),g=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onChange=function(e){var t=n.state.contact;t[e.target.name]=e.target.value,n.setState({contact:t})},n.onSubmit=function(e){e.preventDefault();var t=n.state.contact,a=t.name,l=t.address,s=t.city,r=t.postalCode,c=t.phone;p.a.put("/user/"+n.props.match.params.id,{name:a,address:l,city:s,postalCode:r,phone:c}).then((function(e){n.props.history.push("/show/"+n.props.match.params.id)}))},n.state={contact:{}},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/user/"+this.props.match.params.id).then((function(t){e.setState({contact:t.data}),console.log(e.state.contact)}))}},{key:"render",value:function(){return l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"panel panel-default"},l.a.createElement("div",{class:"panel-heading"},l.a.createElement("br",null),l.a.createElement("h3",{class:"panel-title"},"Edit User")),l.a.createElement("div",{class:"panel-body"},l.a.createElement(c.b,{to:"/contact"},l.a.createElement("button",{class:"my-2 mx-1 btn btn-info"},"View Users")),l.a.createElement(c.b,{to:"/"},l.a.createElement("button",{class:"my-2 btn btn-info"},"Return to Dashboard")),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"name"},"Name:"),l.a.createElement("input",{type:"text",class:"form-control",name:"name",value:this.state.contact.name,onChange:this.onChange,placeholder:"Name"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"title"},"Address:"),l.a.createElement("input",{type:"text",class:"form-control",name:"address",value:this.state.contact.address,onChange:this.onChange,placeholder:"Address"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"author"},"City:"),l.a.createElement("input",{type:"text",class:"form-control",name:"city",value:this.state.contact.city,onChange:this.onChange,placeholder:"City"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"published_date"},"Phone Number:"),l.a.createElement("input",{type:"text",class:"form-control",name:"phone",value:this.state.contact.phone,onChange:this.onChange,placeholder:"Phone Number"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"description"},"Email:"),l.a.createElement("input",{type:"email",class:"form-control",name:"email",value:this.state.contact.email,onChange:this.onChange,placeholder:"Email Address"})),l.a.createElement("button",{type:"submit",class:"my-2 btn btn-success"},"Update User")))))}}]),a}(n.Component),C=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).onChange=function(t){var a=e.state;a[t.target.name]=t.target.value,e.setState(a)},e.onSubmit=function(t){t.preventDefault();var a=e.state,n=a.name,l=a.address,s=a.city,r=a.phone,c=a.email;p.a.post("/user",{name:n,address:l,city:s,phone:r,email:c}).then((function(t){e.props.history.push("/")}))},e.state={name:"",address:"",city:"",phone:"",email:""},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.address,n=e.city,s=e.phone,r=e.email;return l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"panel panel-default"},l.a.createElement("div",{class:"panel-heading"},l.a.createElement("br",null),l.a.createElement("h3",{class:"panel-title"},"Create User")),l.a.createElement("div",{class:"panel-body"},l.a.createElement(c.b,{to:"/"},l.a.createElement("button",{id:"dashboard",class:"my-2 mx-2 btn btn-info"},"Return to Dashboard")),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"isbn"},"Name"),l.a.createElement("input",{type:"text",class:"form-control",name:"name",value:t,onChange:this.onChange,placeholder:"Name"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"title"},"Address"),l.a.createElement("input",{type:"text",class:"form-control",name:"address",value:a,onChange:this.onChange,placeholder:"Address"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"author"},"City"),l.a.createElement("input",{type:"text",class:"form-control",name:"city",value:n,onChange:this.onChange,placeholder:"City"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"published_date"},"Phone"),l.a.createElement("input",{type:"text",class:"form-control",name:"phone",value:s,onChange:this.onChange,placeholder:"Phone Number"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"publisher"},"Email"),l.a.createElement("input",{type:"email",class:"form-control",name:"email",value:r,onChange:this.onChange,placeholder:"Email Address"})),l.a.createElement("button",{id:"create_user",type:"submit",class:"btn btn-primary btn-default"},"Create User")))))}}]),a}(n.Component),j=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={contact:{}},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/user/"+this.props.match.params.id).then((function(t){e.setState({contact:t.data}),console.log(e.state.contact)}))}},{key:"delete",value:function(e){var t=this;console.log(e),p.a.delete("/user/"+e).then((function(e){t.props.history.push("/")}))}},{key:"render",value:function(){return l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"panel panel-default"},l.a.createElement("div",{class:"panel-heading"},l.a.createElement("br",null),l.a.createElement("h3",{class:"panel-title"},"User Details")),l.a.createElement("div",{class:"panel-body"},l.a.createElement(c.b,{to:"/user"},l.a.createElement("button",{id:"view_users",class:"my-2 mx-1 btn btn-info"},"View Users")),l.a.createElement(c.b,{to:"/"},l.a.createElement("button",{id:"dashboard",class:"my-2 btn btn-info"},"Return to Dashboard")),l.a.createElement("dl",null,l.a.createElement("dt",null,"Name"),l.a.createElement("dd",null,this.state.contact.name),l.a.createElement("dt",null,"Address"),l.a.createElement("dd",null,this.state.contact.address),l.a.createElement("dt",null,"City"),l.a.createElement("dd",null,this.state.contact.city),l.a.createElement("dt",null,"Phone Number"),l.a.createElement("dd",null,this.state.contact.phone),l.a.createElement("dt",null,"Email Address"),l.a.createElement("dd",null,this.state.contact.email)),l.a.createElement(c.b,{to:"/edit/".concat(this.state.contact.id),class:"btn btn-success"},"Edit"),"\xa0",l.a.createElement("button",{onClick:this.delete.bind(this,this.state.contact.id),class:"btn btn-danger"},"Delete"))))}}]),a}(n.Component);r.a.render(l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(o.a,{exact:!0,path:"/",component:b}),l.a.createElement(o.a,{path:"/task",component:E}),l.a.createElement(o.a,{path:"/task_add",component:f}),l.a.createElement(o.a,{path:"/task_show/:id",component:v}),l.a.createElement(o.a,{path:"/task_edit/:id",component:y}),l.a.createElement(o.a,{path:"/user",component:k}),l.a.createElement(o.a,{path:"/edit/:id",component:g}),l.a.createElement(o.a,{path:"/create",component:C}),l.a.createElement(o.a,{path:"/show/:id",component:j}))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.25ae3048.chunk.js.map