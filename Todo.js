import React from "react";


class Todo extends React.Component{
    constructor(props){
        super(props);
        this.input=React.createRef()
        this.state={
            list:[]
        }
    }

    addTodo=()=>{
        const Items={
            value:this.input.current.value
        }
        if(localStorage.getItem('list')==null){
            const list=[]
            list.push(Items)
            localStorage.setItem('list',JSON.stringify(list))
        }
        else{
            const list=JSON.parse(localStorage.getItem("list"))
            list.push(Items)
            localStorage.setItem('list',JSON.stringify(list))

        }
        this.setState({
            list:JSON.parse(localStorage.getItem("list"))
        })
    }
    componentDidMount(){
        const list=window.localStorage.getItem('list')
        const data=JSON.parse(list)
        if(list == null){
            return false
        }
        else{
            this.setState({
                list:data
            })
        }
    }
    deleteItem=()=>{
        const value=JSON.parse(localStorage.getItem("list"))
        value.splice(0,1)
        this.setState({list:value})
        localStorage.setItem('list',JSON.stringify(value))

    }

    render(){
        return(
            <div>
                <input type="text" placeholder="Enter your Todo...." ref={this.input} />
                <button onClick={this.addTodo}>Add</button>
                {
                    this.state.list.map((items,index)=>{
                        return(
                            <li>{items.value}
                            <button onClick={this.deleteItem}>Delete</button>
                            </li>
                        )
                    })
                }

            </div>
        )
    }
}
export default Todo;
