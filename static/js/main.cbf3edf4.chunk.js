(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],{21:function(t,e,n){t.exports=n(34)},34:function(t,e,n){"use strict";n.r(e);var a=n(8),r=n(1),o=n(2),c=n(3),s=n(5),i=n(4),l=n(0),u=n.n(l),d=n(9),b=n.n(d);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(26);var p=n(11),m=n(6),g=n(7);function h(){var t=Object(m.a)(["\n    border: 1px solid lightgrey;\n    border-radius: 2px;\n    padding: 8px;\n    margin-bottom: 8px;\n    background-color: ",";\n"]);return h=function(){return t},t}var O=g.a.div(h(),(function(t){return t.isDragging?"lightgrey":"white"})),k=function(t){Object(s.a)(n,t);var e=Object(i.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var t=this;return u.a.createElement(p.b,{draggableId:this.props.task.id,index:this.props.index},(function(e,n){return u.a.createElement(O,Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef,isDragging:n.isDragging}),t.props.task.content)}))}}]),n}(u.a.Component);function v(){var t=Object(m.a)(["\n    padding 8px;\n    transition: background-color 0.2 ease;\n    background-color: ",";\n"]);return v=function(){return t},t}function j(){var t=Object(m.a)(["\n    padding: 8px;\n"]);return j=function(){return t},t}function f(){var t=Object(m.a)(["\n    margin: 8px;\n    border: 1px solid lightgrey;\n    border-radius: 2px;\n"]);return f=function(){return t},t}var I=g.a.div(f()),x=g.a.h3(j()),y=g.a.div(v(),(function(t){return t.isDraggingOver?"skyblue":"white"})),E=function(t){Object(s.a)(n,t);var e=Object(i.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var t=this;return u.a.createElement(I,null,u.a.createElement(x,null,this.props.column.title),u.a.createElement(p.c,{droppableId:this.props.column.id},(function(e,n){return u.a.createElement(y,Object.assign({ref:e.innerRef},e.droppableProps,{isDraggingOver:n.isDraggingOver}),t.props.tasks.map((function(t,e){return u.a.createElement(k,{key:t.id,task:t,index:e})})),e.placeholder)})))}}]),n}(u.a.Component),w=n(13);function C(){var t=Object(m.a)(["\n    border: 1px solid lightgrey;\n    border-radius: 2px;\n    padding: 8px;\n    margin-bottom: 8px;\n    background-color: ",";\n"]);return C=function(){return t},t}var D=g.a.div(C(),(function(t){return t.isDragging?"lightgrey":"white"})),S=function(t){Object(s.a)(n,t);var e=Object(i.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).handleChange=a.handleChange.bind(Object(w.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(w.a)(a)),a}return Object(c.a)(n,[{key:"handleChange",value:function(t){this.props.onHandleChange(t)}},{key:"handleSubmit",value:function(t){this.props.onSubmitForm(t),t.preventDefault()}},{key:"render",value:function(){return u.a.createElement(D,null,u.a.createElement("form",{onSubmit:this.handleSubmit},u.a.createElement("input",{placeholder:"Enter new task here",onChange:this.handleChange}),u.a.createElement("button",{type:"submit"},"Add")))}}]),n}(u.a.Component),A=function(t){Object(s.a)(n,t);var e=Object(i.a)(n);function n(t){var c;return Object(o.a)(this,n),(c=e.call(this,t)).onDragEnd=function(t){var e,n=t.destination,o=t.source,s=t.draggableId;if(n&&(n.droppableId!==o.droppableId||n.index!==o.index)){if(n.droppableId===o.droppableId&&n.index!==o.index){var i=c.state.columns[o.droppableId],l=Array.from(i.taskIds);l.splice(o.index,1),l.splice(n.index,0,s);var u=Object(r.a)(Object(r.a)({},i),{},{taskIds:l});e=Object(r.a)(Object(r.a)({},c.state),{},{columns:Object(r.a)(Object(r.a)({},c.state.columns),{},Object(a.a)({},u.id,u))})}else{var d,b=c.state.columns[o.droppableId],p=c.state.columns[n.droppableId],m=Array.from(b.taskIds),g=Array.from(p.taskIds);m.splice(o.index,1),g.splice(n.index,0,s);var h=Object(r.a)(Object(r.a)({},b),{},{taskIds:m}),O=Object(r.a)(Object(r.a)({},p),{},{taskIds:g});e=Object(r.a)(Object(r.a)({},c.state),{},{columns:Object(r.a)(Object(r.a)({},c.state.columns),{},(d={},Object(a.a)(d,h.id,h),Object(a.a)(d,O.id,O),d))})}c.setState(e)}},c.handleChange=function(t){var e={value:t.target.value};c.setState(e)},c.addTask=function(t){var e=Date.now().toString(),n=c.state.value,o=c.state.columns["column-1"],s=Array.from(o.taskIds);console.log(n);var i={id:e,content:n};s.push(e),console.log(s);var l=Object(r.a)(Object(r.a)({},o),{},{taskIds:s});console.log(l),console.log(l.taskIds);var u=Object(r.a)(Object(r.a)({},c.state),{},{tasks:Object(r.a)(Object(r.a)({},c.state.tasks),{},Object(a.a)({},e,i)),columns:Object(r.a)(Object(r.a)({},c.state.columns),{},Object(a.a)({},l.id,l))});console.log(u.tasks),console.log(u.columns),console.log(u.columns[l.id].taskIds),c.setState(u),t.preventDefault()},c.state={iteration:0,value:{},tasks:{"task-1":{id:"task-1",content:"do something"},"task-2":{id:"task-2",content:"do nothing"},"task-3":{id:"task-3",content:"just do it"}},columns:{"column-1":{id:"column-1",title:"to do",taskIds:["task-1","task-2"]},"column-2":{id:"column-2",title:"not do",taskIds:["task-3"]},"column-3":{id:"column-3",title:"not important",taskIds:[]},"column-4":{id:"column-4",title:"important",taskIds:[]}},columnOrder:["column-1","column-2","column-3","column-4"]},c}return Object(c.a)(n,[{key:"render",value:function(){var t=this;return u.a.createElement("div",null,u.a.createElement(S,{onSubmitForm:this.addTask,onHandleChange:this.handleChange}),u.a.createElement(p.a,{onDragEnd:this.onDragEnd},this.state.columnOrder.map((function(e){var n=t.state.columns[e],a=n.taskIds.map((function(e){return t.state.tasks[e]}));return u.a.createElement(E,{key:n.id,column:n,tasks:a})}))))}}]),n}(u.a.Component);b.a.render(u.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.cbf3edf4.chunk.js.map