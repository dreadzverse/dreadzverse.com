import type { Component } from 'svelte';

export type Icon = Component<{
	color?: string | undefined;
	size?: number | undefined;
	title?: string | undefined;
}>;

export type Link = {
	url: string;
	title: string;
	icon: Icon;
};

export interface Post {
	title: string;
	date: string;
	description: string;
	slug: string;
}
