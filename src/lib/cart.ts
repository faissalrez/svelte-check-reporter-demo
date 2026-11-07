import type { Product } from './products.ts';

export function total(products: Product[]): number {
	return products.reduce((sum, product) => sum + product.prise, 0);
}
