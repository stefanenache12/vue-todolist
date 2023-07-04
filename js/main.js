const { createApp } = Vue;

createApp({
    data() {
      return {
        newTask: '',
        tasks: [
          {
            name: 'Go to the grocery',
            done: false,
          },
          {
            name: 'Pay the bill',
            done: true,
          },
          {
            name: 'Wash the car',
            done: false,
          }
        ]
      }
    },
    methods: {

      addTask(){
          if(this.newTask.trim() != ''){
            
            const newTask = {
              name: this.newTask,
              done: false
            };

            this.tasks.push(newTask);

            this.newTask = '';
          };
      },

      removeTask(index){
        this.tasks.splice(index,1)
      },

      markAsDone(singleTask){

        if(singleTask.done == false) {
          singleTask.done = true;
        } else{
          singleTask.done = false;
        }
      }                                                                          
  }
  }).mount('#app');