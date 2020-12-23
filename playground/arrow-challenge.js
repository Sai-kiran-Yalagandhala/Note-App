const tasks = {
    tasks:[{
        text:'Grocery Shopping',
        completed:true
    },{
        text:'Clean yard',
        completed:false
    },{
        text:'Grocery Shopping',
        completed:false
    }],
    getTasksToDo(){
        return this.tasks.filter((task) => task.completed===true)
    }
}

console.log(tasks.getTasksToDo());