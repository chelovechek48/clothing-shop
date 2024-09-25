<script setup lang="ts">
const features = [
	{
		count: 200,
		label: 'International Brands',
	},
	{
		count: 2000,
		label: 'High-Quality Products',
	},
	{
		count: 30000,
		label: 'Happy Customers',
	},
];

const formatNumber = (num: number) => new Intl.NumberFormat('en-US').format(num);
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
					<li
						v-for="item in features" :key="item.label"
						class="hero__features-item"
					>
						<span class="hero__features-count">
							{{ formatNumber(item.count) }}
						</span>
						<span class="hero__features-label">
							{{ item.label }}
						</span>
					</li>
				</ul>
			</div>
			<picture>
				<source
					type="image/webp"
					srcset="
						@images/hero@1x.webp 1x,
						@images/hero@2x.webp 2x
					"
				>
				<source
					type="image/jpeg"
					srcset="
						@images/hero@1x.jpg 1x,
						@images/hero@2x.jpg 2x
					"
				>
				<img
					class="hero__image"
					src="@images/hero@1x.jpg"
					alt="Парень и девушка, одетые в белую рубашку с капюшоном и чёрную джинсовую куртку"
					loading="lazy"
				>
			</picture>
		</AppContainer>
	</section>
</template>

<style lang="scss" scoped>
@use '@vars/colors';
@use '@vars/mixins';

.hero {
	background-color: colors.$gray;

	&__container {
		display: flex;
		align-items: flex-end;
	}

	&__text {
		padding-block: 6rem;

		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 2rem;
	}

	&__title {
		@include mixins.title(4rem);
	}

	&__paragraph {
		color: colors.$black-60;
		font-size: 1.125rem;
		font-weight: 500;
	}

	&__button {
		color: colors.$white;
		font-size: 1.125rem;
		font-weight: 500;

		background-color: colors.$black;
		padding: 1rem 3rem;
		border-radius: 5rem;
	}

	&__features {
		$list-gap: 3rem;
		$separator-width: 2px;

		display: flex;
		gap: $list-gap;

		&-item {
			display: flex;
			flex-direction: column;

			position: relative;
			&:not(:last-child)::after {
				content: '';
				position: absolute;
				top: 0;
				right: calc(($list-gap + $separator-width) / -2);
				width: $separator-width;
				height: 100%;
				background-color: rgba(#000, 0.1);
			}
		}

		&-count {
			color: colors.$black;
			font-size: 2.5rem;
			font-weight: 600;

			&::after {
				content: '+';
			}
		}

		&-label {
			color: colors.$black-60;
			font-size: 1rem;
			font-weight: 500;
		}
	}
}
</style>