(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],{22:function(e,t,n){e.exports=n(35)},35:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(1),o=n(6),s=n(7),c=n(9),i=n(8),l=n(0),d=n.n(l),u=n(10),b=n.n(u);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(27);var g=n(12),p={iteration:0,value:{},tasks:{},columns:{"column-1":{id:"column-1",title:"High Priority, Easy",taskIds:[]},"column-2":{id:"column-2",title:"High Priority, Hard",taskIds:[]},"column-3":{id:"column-3",title:"Low Priority, Easy",taskIds:[]},"column-4":{id:"column-4",title:"Low Priority, Hard",taskIds:[]}},columnOrder:["column-1","column-2","column-3","column-4"]},m=n(2),h=n(3),k=n(4);function v(){var e=Object(h.a)(["\n    float: right;\n"]);return v=function(){return e},e}function O(){var e=Object(h.a)(["\n    border: 1px solid lightgrey;\n    border-radius: 2px;\n    padding: 8px;\n    margin-bottom: 8px;\n    background-color: ",";\n"]);return O=function(){return e},e}var f=k.a.div(O(),(function(e){return e.isDragging?"lightgrey":"white"})),j=k.a.button(v()),y=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(m.a)(a)),a}return Object(s.a)(n,[{key:"handleClick",value:function(e){this.props.deleteTask(this)}},{key:"render",value:function(){var e=this;return d.a.createElement(g.b,{draggableId:this.props.task.id,index:this.props.index},(function(t,n){return d.a.createElement(f,Object.assign({},t.draggableProps,t.dragHandleProps,{ref:t.innerRef,isDragging:n.isDragging}),e.props.task.content,d.a.createElement(j,{onClick:e.handleClick},"Delete"))}))}}]),n}(d.a.Component);function I(){var e=Object(h.a)(["\n    padding 8px;\n    transition: background-color 0.2 ease;\n    background-color: ",";\n"]);return I=function(){return e},e}function x(){var e=Object(h.a)(["\n    padding: 8px;\n"]);return x=function(){return e},e}function E(){var e=Object(h.a)(["\n    margin: 8px;\n    border: 1px solid lightgrey;\n    border-radius: 2px;\n"]);return E=function(){return e},e}var C=k.a.div(E()),w=k.a.h3(x()),D=k.a.div(I(),(function(e){return e.isDraggingOver?"skyblue":"white"})),S=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).deleteTask=a.deleteTask.bind(Object(m.a)(a)),a}return Object(s.a)(n,[{key:"deleteTask",value:function(e){this.props.deleteTask(e,this)}},{key:"render",value:function(){var e=this;return d.a.createElement(C,null,d.a.createElement(w,null,this.props.column.title),d.a.createElement(g.c,{droppableId:this.props.column.id},(function(t,n){return d.a.createElement(D,Object.assign({ref:t.innerRef},t.droppableProps,{isDraggingOver:n.isDraggingOver}),e.props.tasks.map((function(t,n){return d.a.createElement(y,{key:t.id,task:t,index:n,deleteTask:e.deleteTask})})),t.placeholder)})))}}]),n}(d.a.Component);function T(){var e=Object(h.a)(["\n    border: 1px solid lightgrey;\n    border-radius: 2px;\n    padding: 8px;\n    margin-bottom: 8px;\n    background-color: ",";\n"]);return T=function(){return e},e}var A=k.a.div(T(),(function(e){return e.isDragging?"lightgrey":"white"})),H=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}return Object(s.a)(n,[{key:"handleChange",value:function(e){this.props.onHandleChange(e)}},{key:"handleSubmit",value:function(e){this.props.onSubmitForm(e),e.target.reset(),e.preventDefault()}},{key:"render",value:function(){return d.a.createElement(A,null,d.a.createElement("form",{onSubmit:this.handleSubmit},d.a.createElement("input",{placeholder:"Enter new task here",onChange:this.handleChange}),d.a.createElement("button",{type:"submit"},"Add")))}}]),n}(d.a.Component);n(21);var P=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state=p,e.onDragEnd=function(t){var n,o=t.destination,s=t.source,c=t.draggableId;if(o&&(o.droppableId!==s.droppableId||o.index!==s.index)){if(o.droppableId===s.droppableId&&o.index!==s.index){var i=e.state.columns[s.droppableId],l=Array.from(i.taskIds);l.splice(s.index,1),l.splice(o.index,0,c);var d=Object(r.a)(Object(r.a)({},i),{},{taskIds:l});n=Object(r.a)(Object(r.a)({},e.state),{},{columns:Object(r.a)(Object(r.a)({},e.state.columns),{},Object(a.a)({},d.id,d))})}else{var u,b=e.state.columns[s.droppableId],g=e.state.columns[o.droppableId],p=Array.from(b.taskIds),m=Array.from(g.taskIds);p.splice(s.index,1),m.splice(o.index,0,c);var h=Object(r.a)(Object(r.a)({},b),{},{taskIds:p}),k=Object(r.a)(Object(r.a)({},g),{},{taskIds:m});n=Object(r.a)(Object(r.a)({},e.state),{},{columns:Object(r.a)(Object(r.a)({},e.state.columns),{},(u={},Object(a.a)(u,h.id,h),Object(a.a)(u,k.id,k),u))})}e.setState(n)}},e.handleChange=function(t){var n={value:t.target.value};e.setState(n)},e.addTask=function(t){var n=Date.now().toString(),o=e.state.value,s=e.state.columns["column-1"],c=Array.from(s.taskIds);console.log(o);var i={id:n,content:o};c.push(n),console.log(c);var l=Object(r.a)(Object(r.a)({},s),{},{taskIds:c});console.log(l),console.log(l.taskIds);var d=Object(r.a)(Object(r.a)({},e.state),{},{tasks:Object(r.a)(Object(r.a)({},e.state.tasks),{},Object(a.a)({},n,i)),columns:Object(r.a)(Object(r.a)({},e.state.columns),{},Object(a.a)({},l.id,l))});console.log(d.tasks),console.log(d.columns),console.log(d.columns[l.id].taskIds),e.setState(d),t.preventDefault()},e.deleteTask=function(t,n){console.log(t),console.log(n);var o=n.props.column,s=Array.from(o.taskIds);console.log(s);var c=s.findIndex((function(e){return e===t.props.task.id}));console.log(c),s.splice(c,1),console.log(s);var i=n.props.column;i.taskIds=s;var l=e.state.tasks;console.log(l),delete l[t.props.task.id];var d=l;console.log(d);var u=Object(r.a)(Object(r.a)({},e.state),{},{tasks:d,columns:Object(r.a)(Object(r.a)({},e.state.columns),{},Object(a.a)({},i.id,i))});console.log(u.tasks),console.log(u.columns[i.id].taskIds),e.setState(u)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return d.a.createElement("div",null,d.a.createElement(H,{onSubmitForm:this.addTask,onHandleChange:this.handleChange}),d.a.createElement(g.a,{onDragEnd:this.onDragEnd},this.state.columnOrder.map((function(t){var n=e.state.columns[t],a=n.taskIds.map((function(t){return e.state.tasks[t]}));return d.a.createElement(S,{key:n.id,column:n,tasks:a,deleteTask:e.deleteTask})}))))}}]),n}(d.a.Component);b.a.render(d.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.f85f42c4.chunk.js.map