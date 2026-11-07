<script lang="ts">
	import { formatPrice } from '#lib/format.ts';
	import { products } from '#lib/products.ts';
</script>

<h1>Shop</h1>

<ul>
	{#each products as product (product.name)}
		<li>{product.name}: {formatPrice(product.price)}</li>
	{/each}
</ul>
