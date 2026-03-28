export type SlideOpt = {
	icon: string;
	name: string;
	sub: string;
	notSure?: boolean;
	/** Only present on grid-type slides */
	bg?: string;
	/** Only present on grid-type slides */
	desc?: string;
};

export type SlideCheck = {
	q: string;
	icon: string;
	/** The answer-state key this check writes to */
	f: string;
	opts: string[];
};

/** Discriminated union — TypeScript can narrow by `slide.id` */
export type TradeSlide =
	| {
			id: "options";
			field: string;
			required: boolean;
			title: string;
			sub: string;
			opts: SlideOpt[];
	  }
	| {
			id: "grid";
			field: string;
			/** Grid slides are never required in canNext */
			required?: false;
			title: string;
			sub: string;
			opts: SlideOpt[];
	  }
	| {
			id: "checks";
			title: string;
			sub: string;
			checks: SlideCheck[];
	  }
	| { id: "size"; title: string; sub: string }
	| { id: "photos"; title: string; sub: string }
	| { id: "timeline"; title: string; sub: string }
	| { id: "done"; title: string; sub: string };
