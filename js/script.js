const {createApp} = Vue
createApp({
    // contiene tutti i dati / le variabili 
    data(){
        return {
            tasks: [],
            lastId: 4,
            todoText: '',
            filterValue: '',
            apiUrl: 'server.php'
        }
    },
    // contiene le funzioni e i metodi 
    methods: {
        removeTask(id){
            const index = this.getIndex(id, this.tasks)
            this.tasks.splice(index, 1);
        },
        addTask(){
            this.tasks.unshift({
                id: ++this.lastId,
                text: this.todoText,
                done: false,
            });
            this.todoText = '';
        },
        markAsDone(id){
            const index = this.getIndex(id, this.tasks)
            this.tasks[index].done = !this.tasks[index].done
        },
        getIndex(id, array){
            return array.findIndex((el) => el.id === id);
        },
        filteredTasks(){
            return this.tasks.filter((task)=>{
                if(this.filterValue === '2' && !task.done){
                    return true;
                } else if(this.filterValue === '1' && task.done){
                    return true;
                } else if(this.filterValue === ''){
                    return true;
                } 
            });
        },

        readList(){
            axios
                .get(this.apiUrl)
                .then((response) => {
                    this.tasks = response.data
                    console.log(this.tasks)
                })
        },
        addTodo(){
            let data = new FormData();
            data.append('text', this.todoText)
            axios.post(this.apiUrl, data).then((response) => {
                this.tasks = response.data;
            })
            this.todoText = '';
        }
    },
    mounted(){
        this.readList();
    }
}).mount('#app')
