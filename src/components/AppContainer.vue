<template>
	<div class="container">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
@use '@vars/breakpoints';

.container {
	max-width: breakpoints.$container;
	margin: 0 auto;
	padding-inline: 1rem;
}
</style>