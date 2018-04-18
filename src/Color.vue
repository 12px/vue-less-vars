<template>
	<div class="col-12 col-md-6 col-lg-3 cfg">
		<div class="input-group">
			<input 
				type="text"
				class="form-control form-control-sm"
				:value="value"
				@input="setNewVal($event.target.value)">
			<span class="input-group-append">
				<input type="color"
				:value="value"
				:style="{ backgroundColor: value }"
				@change="setNewVal($event.target.value)">
			</span>
		</div>
		<div class="label text-secondary pt-1">
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