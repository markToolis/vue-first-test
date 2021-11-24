const app = {
	data() {
		return {
			title : "Note list:",
			inputValue: '',
			notes: ["Yuor first note"],
			placeholder: "Enter a title for the note (max 15)"
		}
	},
	methods:{
		addNewNote() {
			if(this.inputValue !== ''){
				this.notes.unshift(this.inputValue)
				this.inputValue = ''
			}
		},
		deleteNote(e) {
			this.notes.shift(e.target)
		},
	},
	watch: {
		inputValue(value) {
			if (value.length > 15) {
				this.inputValue = 0
			}
			console.log(value)
		}

	}
}

Vue.createApp(app).mount('#app')