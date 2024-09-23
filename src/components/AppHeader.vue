<script lang="ts" setup>
import svgBundle from '@icons/sprite-header.svg';
</script>

<template>
	<header class="header">
		<AppContainer class="header__container">
			<NuxtLink
				to="/"
				class="header__item header__title"
			>
				shop.co
			</NuxtLink>
			<label class="header__item header__search" for="search">
				<SvgIcon
					class="header__search-icon"
					icon-id="search" :sprite="svgBundle"
				/>
				<input
					id="search" type="search"
					class="header__search-input"
					placeholder="Search for products..."
				>
			</label>
			<nav class="header__item header__navigation">
				<button class="header__navigation-button">
					<SvgIcon
						class="header__navigation-icon"
						icon-id="cart" :sprite="svgBundle"
					/>
				</button>
				<button class="header__navigation-button">
					<SvgIcon
						class="header__navigation-icon"
						icon-id="user" :sprite="svgBundle"
					/>
				</button>
			</nav>
		</AppContainer>
	</header>
</template>

<style lang="scss" scoped>
@use '@vars/breakpoints' as *;
@use '@vars/colors';
@use '@vars/mixins';

.header {
	$title-font-size: 2rem;
	$title-line-height: 1.25;
	$padding-block: clamp(0.75rem, 2vw, 1.5rem);

	background-color: colors.$white;
	padding-block: $padding-block;

	position: sticky;
	@media (min-width: calc($tablet-portrait + 1px)) {
		top: 0;
	}
	@media (max-width: $tablet-portrait) {
		top: calc(0px - ($title-font-size * $title-line-height + $padding-block));
	}

	&__container {
		display: flex;
		align-items: center;
		column-gap: clamp(1rem, 3vw, 2.5rem);
		@media (max-width: $tablet-portrait) {
			flex-wrap: wrap;
			row-gap: $padding-block;
		}
	}

	&__title {
		@include mixins.title($title-font-size);
		@media (max-width: $tablet-portrait) {
			flex: 1 1 100%;
			text-align: center;
			line-height: $title-line-height;
		}
	}

	&__search {
		flex: 1 1 0;
		display: flex;
		align-items: center;
		gap: 0.75rem;

		font-size: 1.125rem;
		color: colors.$black-60;
		background-color: colors.$gray;
		padding: 0.75rem 1rem;
		border-radius: 3rem;

		&-icon {
			height: 1.25em;
		}

		&-input {
			font-size: 1em;
			width: 100%;
			background-color: transparent;

			&::placeholder {
				color: colors.$black-40;
			}
		}

		&-input {
			outline: none;
		}
		&:focus-within {
			outline: auto;
		}
	}

	&__navigation {
		display: flex;
		gap: 1rem;

		&-button {
			background-color: transparent;
		}
		&-icon {
			height: 1.65rem;
		}
	}
}
</style>