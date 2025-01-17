import plugin from 'tailwindcss/plugin';
import tailwindAnimate from 'tailwindcss-animate';

import { colors } from './constants/colors';
import { customDropShadow } from './constants/styles';
import { typos } from './constants/typos';

import type { Config } from 'tailwindcss';

const config = {
	darkMode: ['class'],
	content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			colors: colors,
			fontFamily: {
				pretendard: ['var(--font-pretendard)'],
			},
		},
	},
	plugins: [
		plugin(({ addComponents }) => {
			addComponents(typos);
			addComponents(customDropShadow);
		}),
		require('tailwindcss-radix'),
		tailwindAnimate,
	],
	safelist: ['md:basis-full', 'md:basis-1/2', 'md:basis-1/3', 'md:basis-1/4', 'basis-full', 'basis-1/2'],
} satisfies Config;

export default config;
