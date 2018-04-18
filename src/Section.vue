<template>
	<div class="conf card bg-light mb-3">
		<div class="card-header" v-if="title">{{ title }}</div>
		<div class="card-body row"><slot></slot></div>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: 'string',
				default: ''
			}
		}
	}
</script>