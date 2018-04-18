<template>
	<div class="col-12 col-md-6 col-lg-3 mb-3">
		<div class="input-group">
			<input 
				type="text"
				class="form-control form-control-sm"
				:value="value"
				@input="setNewVal($event.target.value)">
		</div>
		<div class="label text-center text-secondary pt-1">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			value: {
				type: Boolean,
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