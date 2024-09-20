<script lang="ts" setup>
import spritePath from '@icons/sprite.svg';

defineProps({
	iconId: {
		type: String,
		required: true,
	},
	sprite: {
		type: String,
		required: false,
		default: spritePath,
	},
	viewBox: {
		type: String,
		required: false,
		default: '0 0 1 1',
	},
});
</script>

<template>
	<svg :viewBox="viewBox">
		<use :href="`${sprite}#${iconId}`" />
	</svg>
</template>