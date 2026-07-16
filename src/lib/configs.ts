import {
	SiBluesky,
	SiGithub,
	SiInstagram,
	SiRumble,
	SiThreads,
	SiTiktok,
	SiTwitch,
	SiX,
	SiYoutube
} from '@icons-pack/svelte-simple-icons';

import type { Icon, Link } from './types';

export const username = 'dreadzverse';
export const name = 'Dreadz';
export const currentYear = new Date().getFullYear();
export const navbarLinks = [{ name: 'Blog', path: '/blog' }];
export const socialLinks: Link[] = [
	{
		url: 'https://links.dreadzverse.com/twitch',
		title: 'Twitch',
		icon: SiTwitch as unknown as Icon
	},
	{
		url: 'https://links.dreadzverse.com/youtube',
		title: 'YouTube',
		icon: SiYoutube as unknown as Icon
	},
	{
		url: 'https://links.dreadzverse.com/instagram',
		title: 'Instagram',
		icon: SiInstagram as unknown as Icon
	},
	{
		url: 'https://links.dreadzverse.com/tiktok',
		title: 'TikTok',
		icon: SiTiktok as unknown as Icon
	},
	{
		url: 'https://links.dreadzverse.com/threads',
		title: 'Threads',
		icon: SiThreads as unknown as Icon
	},
	{
		url: 'https://links.dreadzverse.com/x',
		title: 'X',
		icon: SiX as unknown as Icon
	},
	{
		url: 'https://links.dreadzverse.com/bsky',
		title: 'Bluesky',
		icon: SiBluesky as unknown as Icon
	},
	{
		url: 'https://links.dreadzverse.com/github',
		title: 'Github',
		icon: SiGithub as unknown as Icon
	}
];
