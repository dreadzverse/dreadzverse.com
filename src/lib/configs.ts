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
		url: 'https://twitch.tv/dreadzverse',
		title: 'Twitch',
		icon: SiTwitch as unknown as Icon
	},
	{
		url: 'https://youtube.com/@dreadzverse',
		title: 'YouTube',
		icon: SiYoutube as unknown as Icon
	},
	{
		url: 'https://tiktok.com/@dreadzverse',
		title: 'TikTok',
		icon: SiTiktok as unknown as Icon
	},
	{
		url: 'https://instagram.com/dreadzverse',
		title: 'Instagram',
		icon: SiInstagram as unknown as Icon
	},
	{
		url: 'https://threads.com/dreadzverse',
		title: 'Threads',
		icon: SiThreads as unknown as Icon
	},
	{
		url: 'https://x.com/@dreadzverse',
		title: 'X',
		icon: SiX as unknown as Icon
	},
	{
		url: 'https://bsky.app/profile/dreadzverse.bsky.social',
		title: 'Bluesky',
		icon: SiBluesky as unknown as Icon
	},
	{
		url: 'https://rumble.com/user/dreadzverse',
		title: 'Rumble',
		icon: SiRumble as unknown as Icon
	},
	{
		url: 'https://github.com/dreadzverse',
		title: 'Github',
		icon: SiGithub as unknown as Icon
	}
];
