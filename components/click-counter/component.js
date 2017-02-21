module.exports = {
	onInput(input) {
		this.state = {
			count: input.count || 0
		};
	},
	increment() {
		this.state.count++;
	}
};
