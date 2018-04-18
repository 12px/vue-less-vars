<template>
	<div class="col-12 mb-3">
		<span
			@click="setNewVal(!value)"
			:class="{
				'btn-danger': !value,
				'btn-success': value,
				'btn btn-sm mr-3': 1
			}">
			<span v-if="value">ON</span>
			<span v-if="!value">OFF</span>
		</span>
		<span class="label mr-4">{{ label }}</span>
		<span class="label text-secondary pt-1">
			<slot></slot>
		</span>
	</div>
</template>

<script>
	export default {
		props: {
			value: {
				type: Boolean,
				default: false
			},
			label: {
				type: String,
				default: false
			}
		},
		methods: {
			setNewVal(newVal) {
				this.$emit('input', val);
			}
		}
	}
</script>