const {createApp} = Vue
createApp({
    // contiene tutti i dati / le variabili 
    data(){
        return {
            tasks: [
                {
                    id: 1,
                    text: 'Diventare imperatore del mare',
                    done: false,
                }, 
                {
                    id: 2,
                    text: 'Sconfiggere Kaido',
                    done: true,
                }, 
                {
                    id: 3,
                    text: 'Usare nuove tecniche',
                    done: false,
                },
                {
                    id: 4,
                    text: 'Trovare il One Piece',
                    done: true,
                },
            ],
            lastId: 4,
            todoText: '',
            filterValue: '',
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
    }
}).mount('#app')
