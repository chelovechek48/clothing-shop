<script setup lang="ts">
</script>

<template>
	<section class="hero">
		<AppContainer class="hero__container">
			<div class="hero__text">
				<h1 class="hero__title">
					Find clothes that matches your style
				</h1>
				<p class="hero__paragraph">
					Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
				</p>
				<NuxtLink
					to="/"
					class="hero__button"
				>
					Shop Now
				</NuxtLink>
				<ul class="hero__features">
					<li class="hero__features-item">
						<span class="hero__features-count">
							200+
						</span>
						<span class="hero__features-label">
							International Brands
						</span>
					</li>
				</ul>
			</div>
			<img
				src="" alt=""
				class="hero__image"
			>
		</AppContainer>
	</section>
</template>

<style lang="scss" scoped>
@use '@vars/colors';

.hero {
	background-color: colors.$gray;
	height: 3000px;
}
</style>