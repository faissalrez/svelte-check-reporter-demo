<script lang="ts">
	import { total } from '#lib/cart.ts';
	import { formatPrice } from '#lib/format.ts';
	import { products } from '#lib/products.ts';
</script>

<h1><img src="/logo.svg" /> Shop</h1>

<ul>
	{#each products as product (product.name)}
		<li>{product.name}: {formatPrice(product.price)}</li>
	{/each}
</ul>

<p>Total: {formatPrice(total(products), 'EUR')}</p>
