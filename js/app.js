const { createApp } = Vue;

createApp({
    data() {
        return {
            logoPath: "./img/logo.png",
            newTask: '',
            error: false,
            errorMessage: 'Devi inserire una task di almeno 5 caratteri',
            errorTimeout: null,
            tasks: [],
        }
    },
    mounted() {
        console.log('Vue OK')
    },
    methods: {
        removeTask(taskIndex) {
            console.log(taskIndex)
            this.tasks.splice(taskIndex, 1)
        },

        addNewTask() {
            const trimmedTask = this.newTask.trim()

            if (trimmedTask.length >= 5) {
                const objectElement = {
                    text: trimmedTask.charAt(0).toUpperCase() + trimmedTask.slice(1),
                    done: false
                }
                this.tasks.unshift(objectElement)
                this.newTask = ''
                this.error = false
            } else {
                this.error = true
                this.newTask = ''
                this.errorHidden()
            }
        },

        taskDone(taskIndex) {
            if (this.tasks[taskIndex].done === false) {
                this.tasks[taskIndex].done = true
            } else {
                this.tasks[taskIndex].done = false
            }
        },

        errorHidden() {
            if(this.error === true) {
                if(this.errorTimeout) {
                    clearTimeout(this.errorTimeout)
                }
                this.errorTimeout = setTimeout(() => {
                    this.error = false
                },2500)
            }
        }
    },
}).mount('#app')


