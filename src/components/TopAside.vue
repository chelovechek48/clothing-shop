<template>
	<aside class="aside">
		<AppContainer>
			Sign up and get 20% off to your first order.
			<NuxtLink
				to="/"
				class="aside__link"
			>
				Sign Up Now
			</NuxtLink>
		</AppContainer>
	</aside>
</template>

<style lang="scss" scoped>
@use '@vars/colors';

.aside {
	font-size: 1rem;
	text-align: center;

	color: colors.$white;
	background-color: colors.$black;
	padding-block: 0.75rem;

	&__link {
		position: relative;
		&::after {
			content: '';
			position: absolute;
			bottom: -3px;
			left: 0;
			width: 100%;
			height: 1px;
			background-color: colors.$white;
		}
	}
}
</style>