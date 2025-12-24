import type { MenuLink, SiteConfig } from "@types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "Melih Darcan",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "en-US",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	// Used as the default description meta property and webmanifest description
	description:
		"Expedition - charting the frontiers of knowledge through a personal archive of discoveries and the ongoing pursuit of understanding.",

	// HTML lang property, found in src/layouts/Base.astro L:18 & astro.config.ts L:48
	lang: "en-US",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "en_US",
	/* 
		- Used to construct the meta title property found in src/components/BaseHead.astro L:11 
		- The webmanifest name found in astro.config.ts L:42
		- The link value found in src/components/layout/Header.astro L:35
		- In the footer found in src/components/layout/Footer.astro L:12
	*/
	title: "Expedition",
	// ! Please remember to replace the following site property with your own domain, used in astro.config.ts
	url: "https://melihdarcan.dev",
};

// Used to generate links in both the Header & Footer.
export const menuLinks: MenuLink[] = [
	{
		path: "/entries/",
		title: "Entries",
		icon: "mingcute:paper-2-line",
	},
	{
		path: "/expeditions/",
		title: "Expeditions",
		icon: "mingcute:campground-line",
	},
	{
		path: "/publications/",
		title: "Publications",
		icon: "mingcute:book-6-line",
	},
];

export const socialLinks: MenuLink[] = [
	{
		path: "https://github.com/MelihDarcanxyz",
		title: "GitHub",
		icon: "mdi:github",
	},
	{
		path: "https://www.linkedin.com/in/melih-darcan/",
		title: "LinkedIn",
		icon: "mdi:linkedin",
	},
	{
		path: "https://scholar.google.com/citations?hl=en&user=nJqH9sgAAAAJ&view_op=list_works&sortby=pubdate",
		title: "Scholar",
		icon: "academicons:google-scholar-square",
	},
	{
		path: "https://orcid.org/0009-0002-7620-6286",
		title: "ORCİD",
		icon: "academicons:orcid",
	},
	{
		path: "mailto:melih.darcan@tutamail.com",
		title: "E-mail",
		icon: "mdi:email",
	},
	{
		path: "https://melihdarcan.dev/cv.pdf",
		title: "CV",
		icon: "mdi:file"
	}
];
