import type { Author } from "@content.config";
import { menuLinks, siteConfig } from "@site.config";
import type { CollectionEntry } from "astro:content";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

/**
 * Sorting utils
 */

export function sortPublicationsByNewest(collection: CollectionEntry<"publications">[]): CollectionEntry<"publications">[] {
    return collection.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
}

export function sortPublicationsByOldest(collection: CollectionEntry<"publications">[]): CollectionEntry<"publications">[]{
    return collection.sort((a, b) => new Date(a.data.date).getTime() - new Date(b.data.date).getTime());
}

export function sortEntriesByNewest(collection: CollectionEntry<"entries">[]): CollectionEntry<"entries">[] {
    return collection.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
}

export function sortEntriesByOldest(collection: CollectionEntry<"entries">[]): CollectionEntry<"entries">[]{
    return collection.sort((a, b) => new Date(a.data.date).getTime() - new Date(b.data.date).getTime());
}

/**
 * Date utils
 */

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function getMonthYear(date: Date): string {

    const month = date.getMonth();
    const monthName = monthNames[month];

    const year = date.getFullYear();

    return `${monthName} ${year}`
}

export function getDayMonthYear(date: Date): string {

    const day = date.getDay();

    const month = date.getMonth();
    const monthName = monthNames[month];

    const year = date.getFullYear();

    return `${day} ${monthName} ${year}`
}

export function getDayjsMonthYear(date): string {
    return dayjs(date).utc().format("DD MMMM YYYY");
}

/**
 * Publication specific utils
 */

export function hasMultipleFirstAuthors(authors: Author[]): boolean {
    return authors.filter(author => author.firstAuthor).length > 1;
}

export function hasMultipleCorrespondingAuthors(authors: Author[]): boolean {
    return authors.filter(author => author.correspondingAuthor).length > 1;
}

export function constructAuthorString(authors: Author[]): string {

    let authorString = ""
    const multipleFirstAuthors = hasMultipleFirstAuthors(authors);
    const multipleCorrespondingAuthors = hasMultipleCorrespondingAuthors(authors);

    for (let i = 0; i < authors.length; i++) {

        const author = authors[i]

        let authorName = author.name

        if (multipleFirstAuthors && author.firstAuthor) {
            authorName = authorName.concat("*");
        }

        if (i === authors.length - 1) {
            authorString = authorString.concat(authorName);
            break;
        }

        if (author.name === siteConfig.author) {
            authorName = `<strong>${authorName}</strong>`;
        }

        if (multipleCorrespondingAuthors && author.correspondingAuthor) {
            authorName = authorName.concat(" & ");
        }
        else {
            authorName = authorName.concat(", ");
        }

        authorString = authorString.concat(authorName);
    }
    return authorString
}


export function getIconByTitle(title: string): string | undefined {
	const link = menuLinks.find(link => link.title.toLowerCase() === title.toLowerCase());
	return link ? link.icon : undefined;
}