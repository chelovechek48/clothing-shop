<script lang="ts" setup>
import svgBundle from '@icons/sprite-header.svg';
</script>

<template>
	<header class="header">
		<AppContainer class="header__container">
			<NuxtLink
				to="/"
				class="header__title"
			>
				shop.co
			</NuxtLink>
			<label class="header__search" for="search">
				<input
					id="search" type="search"
					class="header__search-input"
					placeholder="Search for products..."
				>
				<SvgIcon
					class="header__search-icon"
					icon-id="search" :sprite="svgBundle"
				/>
			</label>
			<nav class="header__navigation">
				<button class="header__navigation-button">
					<SvgIcon
						class="header__navigation-icon"
						icon-id="search" :sprite="svgBundle"
					/>
				</button>
				<button class="header__navigation-button">
					<SvgIcon
						class="header__navigation-icon"
						icon-id="search" :sprite="svgBundle"
					/>
				</button>
			</nav>
		</AppContainer>
	</header>
</template>

<style lang="scss" scoped>
.header {
	background-color: white;
}
</style>