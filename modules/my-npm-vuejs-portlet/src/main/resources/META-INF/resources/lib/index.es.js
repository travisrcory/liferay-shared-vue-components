import Vue from 'vue/dist/vue.common';

import {TodoItem} from 'vue-component-library';

export default function(portletNamespace) {
	new Vue({
		el: `#${portletNamespace}-1`,
		data: {
			message: 'Hello from Vue.js!'
		},
		methods: {
			reverseMessage: function() {
				this.message = this.message
					.split('')
					.reverse()
					.join('');
			}
		}
	});

	new Vue({
		el: `#${portletNamespace}-2`,
        components: {
			TodoItem
        },
		data: {
			groceryList: [
				{id: 0, text: 'Vegetables'},
				{id: 1, text: 'Cheese'},
				{id: 2, text: 'Whatever else humans are supposed to eat'}
			]
		}
	});
}