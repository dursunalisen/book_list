import React, { Component } from 'react';
import {TodoList} from './todoList';
import {TodoForm} from './todoForm';
import {Header} from './inc/header';
import {Footer} from './inc/footer';


 const myTasks=[

  "Kardeşini Doğurmak",
  "Hayvan Çiftliği",
  "Karamazov Kardeşler",
  "1984",
  "Çocukluğum"
      ];

class App extends Component {
  constructor(){
    super();
    this.state ={myTasks:[

      {text:"Kardeşini Doğurmak", status:"passive"},
      {text:"Hayvan Çiftliği", status:"passive"},
      {text:"Karamazov Kardeşler", status:"passive"},
      {text:"1984", status:"passive"},
      {text:"Çocukluğum", status:"passive"}
    ]};
    this.addTask=this.addTask.bind(this);
    this.removeTask=this.removeTask.bind(this);
    this.doneTask=this.doneTask.bind(this);


  }

    addTask(val){
      let updatedList=this.state.myTasks;
      updatedList.push([{text:val,status:"passive"}]);
      this.setState({myTasks:updatedList});

      
    }
    doneTask(task_id){
      task_id=task_id.replace('task_','');
      let updatedList=this.state.myTasks;
      updatedList[task_id].status = "active";
      this.setState({myTasks:updatedList});
    }
    removeTask(task_id){
      console.log(task_id +'silindi');

    }
  render() {    
    return (
 
      <div className="content">
          <Header/>
          <TodoForm addTask={this.addTask}/>
          <TodoList myTasks={this.state.myTasks}
           doneTask={this.doneTask} 
           removeTask={this.removeTask}/>
          <Footer/>
      </div>
    );
  }
}

export default App;
