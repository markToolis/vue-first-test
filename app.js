const app = {
	data() {
		return {
			title : "Note list:",
			inputValue: '',
			notes: ["Yuor first note"],
			placeholder: "Enter a title for the note"
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
	}
}

Vue.createApp(app).mount('#app')