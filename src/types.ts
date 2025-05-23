export interface SiteConfig {
	author: string;
	date: {
		locale: string | string[] | undefined;
		options: Intl.DateTimeFormatOptions;
	};
	description: string;
	lang: string;
	ogLocale: string;
	title: string;
	url: string;
}

export interface MenuLink {
	path: string;
	title: string;
	icon?: string;
}
