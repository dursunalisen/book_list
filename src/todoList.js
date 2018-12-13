import React from 'react';

export class TodoList extends React.Component{
/*
    constructor(){
        super();
        document.write("cons çalıştı <hr />");

    }
    componentWillMount(){

        document.write("will çalıştı <hr />");
    }
    componentDidMount(){
        document.write("did çalıştı");
    }       
    componentWillUnmount(){
        document.write("will çalıştı <hr />");

    }*/
   
    constructor(){
        super();
        
    };
    doneTask = (e)=>{
    this.props.doneTask(e.target.parentNode.id);
    };

    removeTask=(e)=>{
        this.props.removeTask(e.target.parentNode.id);
    };
    
    render(){
        const items_left=0;
        const items=this.props.myTasks.map((elem,i)=>{
        let task_id='task'+i;
            return(
                
                <li key={i} id={task_id} className={elem.status}>
                    <span className="id">{i+1}</span>
                    <span className="title">{elem.text}</span>
                    <span className="type" onClick={this.doneTask}/>
                    <span className="delete"onClick={this.removeTask}>?</span>
                    

                </li>

            )
        })
        return(
            <div>
            <div className="todo-list">
                <ul>
                    {items}
                </ul>
            </div>
            <div className="todo-filter">
            <div className="left">
            <span>{items_left} seçilen</span>
            </div>
            <div className="right">
                 <ul>
                     <li>  <span className="active">All</span>  </li>
                     <li><span>Active</span></li>
                     <li><span>Comploted</span></li>
                </ul>
            </div>
            </div>
        </div>
        )  
    }

}