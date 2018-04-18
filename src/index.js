
import Text from './Text.vue'
import Color from './Color.vue'
import Toggle from './Toggle.vue'
import Section from './Section.vue'

const plugins = {
	install (vm) {
		vm.component('lv-section', Text)
		vm.component('lv-section', Color)
		vm.component('lv-section', Toggle)
		vm.component('lv-section', Section)
	}
}

const InitPlugin = function(plugin) {
	if (typeof window !== 'undefined' && window.Vue) window.Vue.use(plugin);
}