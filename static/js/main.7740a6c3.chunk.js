(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],{21:function(t,e,n){t.exports=n(34)},34:function(t,e,n){"use strict";n.r(e);var a=n(11),r=n(1),o=n(2),i=n(3),s=n(5),c=n(4),u=n(0),d=n.n(u),l=n(8),b=n.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(26);var p=n(10),m=n(6),g=n(7);function h(){var t=Object(m.a)(["\n    border: 1px solid lightgrey;\n    border-radius: 2px;\n    padding: 8px;\n    margin-bottom: 8px;\n    background-color: ",";\n"]);return h=function(){return t},t}var O=g.a.div(h(),(function(t){return t.isDragging?"lightgrey":"white"})),k=function(t){Object(s.a)(n,t);var e=Object(c.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return d.a.createElement(p.b,{draggableId:this.props.task.id,index:this.props.index},(function(e,n){return d.a.createElement(O,Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef,isDragging:n.isDragging}),t.props.task.content)}))}}]),n}(d.a.Component);function j(){var t=Object(m.a)(["\n    padding 8px;\n    transition: background-color 0.2 ease;\n    background-color: ",";\n"]);return j=function(){return t},t}function v(){var t=Object(m.a)(["\n    padding: 8px;\n"]);return v=function(){return t},t}function f(){var t=Object(m.a)(["\n    margin: 8px;\n    border: 1px solid lightgrey;\n    border-radius: 2px;\n"]);return f=function(){return t},t}var I=g.a.div(f()),x=g.a.h3(v()),y=g.a.div(j(),(function(t){return t.isDraggingOver?"skyblue":"white"})),E=function(t){Object(s.a)(n,t);var e=Object(c.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return d.a.createElement(I,null,d.a.createElement(x,null,this.props.column.title),d.a.createElement(p.c,{droppableId:this.props.column.id},(function(e,n){return d.a.createElement(y,Object.assign({ref:e.innerRef},e.droppableProps,{isDraggingOver:n.isDraggingOver}),t.props.tasks.map((function(t,e){return d.a.createElement(k,{key:t.id,task:t,index:e})})),e.placeholder)})))}}]),n}(d.a.Component),w=n(13);function D(){var t=Object(m.a)(["\n    border: 1px solid lightgrey;\n    border-radius: 2px;\n    padding: 8px;\n    margin-bottom: 8px;\n    background-color: ",";\n"]);return D=function(){return t},t}var C=g.a.div(D(),(function(t){return t.isDragging?"lightgrey":"white"})),S=function(t){Object(s.a)(n,t);var e=Object(c.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).handleChange=a.handleChange.bind(Object(w.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(w.a)(a)),a}return Object(i.a)(n,[{key:"handleChange",value:function(t){this.props.onInputChange(t.target.value)}},{key:"handleSubmit",value:function(t){this.props.onSubmitForm(t.target.value),t.preventDefault()}},{key:"render",value:function(){return d.a.createElement(C,null,d.a.createElement("form",{onSubmit:this.handleSubmit},d.a.createElement("input",{placeholder:"Enter new task here"}),d.a.createElement("button",{type:"submit"},"Add")))}}]),n}(d.a.Component),A=function(t){Object(s.a)(n,t);var e=Object(c.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).onDragEnd=function(t){var e,n=t.destination,o=t.source,s=t.draggableId;if(n&&(n.droppableId!==o.droppableId||n.index!==o.index)){if(n.droppableId===o.droppableId&&n.index!==o.index){var c=i.state.columns[o.droppableId],u=Array.from(c.taskIds);u.splice(o.index,1),u.splice(n.index,0,s);var d=Object(r.a)(Object(r.a)({},c),{},{taskIds:u});e=Object(r.a)(Object(r.a)({},i.state),{},{columns:Object(r.a)(Object(r.a)({},i.state.columns),{},Object(a.a)({},d.id,d))})}else{var l,b=i.state.columns[o.droppableId],p=i.state.columns[n.droppableId],m=Array.from(b.taskIds),g=Array.from(p.taskIds);m.splice(o.index,1),g.splice(n.index,0,s);var h=Object(r.a)(Object(r.a)({},b),{},{taskIds:m}),O=Object(r.a)(Object(r.a)({},p),{},{taskIds:g});e=Object(r.a)(Object(r.a)({},i.state),{},{columns:Object(r.a)(Object(r.a)({},i.state.columns),{},(l={},Object(a.a)(l,h.id,h),Object(a.a)(l,O.id,O),l))})}i.setState(e)}},i.state={iteration:0,value:{},tasks:{"task-1":{id:"task-1",content:"do something"},"task-2":{id:"task-2",content:"do nothing"},"task-3":{id:"task-3",content:"just do it"}},columns:{"column-1":{id:"column-1",title:"to do",taskIds:["task-1","task-2"]},"column-2":{id:"column-2",title:"not do",taskIds:[]},"column-3":{id:"column-3",title:"not important",taskIds:[]},"column-4":{id:"column-4",title:"important",taskIds:[]}},columnOrder:["column-1","column-2","column-3","column-4"]},i}return Object(i.a)(n,[{key:"handleChange",value:function(t){var e=Object(r.a)({value:t},this.state);this.setState(e)}},{key:"addTask",value:function(t){var e=Date.now(),n=Date.now(),a=t,o=this.state.columnns[0],i={newTaskId:{id:n,content:a}},s=o.taskIds.push(e),c=Object(r.a)(Object(r.a)({},o),{},{taskIds:s}),u=Object(r.a)(Object(r.a)({},this.state),{},{tasks:Object(r.a)(Object(r.a)({},this.state.tasks),{},{newTask:i}),columns:Object(r.a)(Object(r.a)({},this.state.columns),{},{newColumn:c})});this.setState(u)}},{key:"render",value:function(){var t=this;return d.a.createElement("div",null,d.a.createElement(S,{onHandleSubmit:this.addTask,onHandleChange:this.handleChange}),d.a.createElement(p.a,{onDragEnd:this.onDragEnd},this.state.columnOrder.map((function(e){var n=t.state.columns[e],a=n.taskIds.map((function(e){return t.state.tasks[e]}));return d.a.createElement(E,{key:n.id,column:n,tasks:a})}))))}}]),n}(d.a.Component);b.a.render(d.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.7740a6c3.chunk.js.map