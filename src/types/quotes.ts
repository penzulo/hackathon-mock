type CurrencyString = `₹${string}`;

interface LineItem {
	name: string;
	qty: string;
	rate: string;
	total: CurrencyString;
}

interface CategoryBlock {
	category: string;
	subtotal: CurrencyString;
	items: LineItem[];
}

export type LineItemsMap = Record<number, CategoryBlock[]>;
