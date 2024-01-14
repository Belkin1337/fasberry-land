/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const path = require('path');
const BLOCK_SPACING_MAX = 99;
const background_obj = {};
const spacing_obj = {};
const safelist_array = [];
const fs = require('fs');

module.exports = {
	darkMode: ["class"],
	important: true,
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	plugins: [require("tailwindcss-animate")],
	theme: {
		screens: {
			'xs': '480px',
			...defaultTheme.screens
		},
		extend: {
			colors: {
				"link": "#aaaaff",
				"panel": "#C6C6C6",
				"panel-dark": "#373737",
				'gold': '#FFAA00',
				'gray': '#AAAAAA',
				'blue': '#5555FF',
				'green': '#55FF55',
				'aqua': '#55FFFF',
				'red': '#FF5555',
				'light-purple': '#FF55FF',
				'yellow': '#FFFF55',
				'discord-color': '#7289da',
				'purple-hue-1': '#B8AFF7',
				'purple-hue-2': '#B99CF3',
				'purple-hue-3': '#A976F8',
				'purple-hue-4': '#FABBFB',
				'discord-server-color': '#68FBAC',
				'blue-server-color': '#C2CBFB',
				'green-server-color': '#8FFD8F',
				'red-server-color': '#FB3E3E',
				'general-server-color': '#00E375',
				'muffin-server-color': '#FFC0CB',
				'bisquite-server-color': '#BEABF6',
				'project-color': '#00cdb0',
				'background-dark': '#0D0D0D',
				dark: {
					'blue': '#0000AA',
					'green': '#00AA00',
					'aqua': '#00AAAA',
					'red': '#AA0000',
					'purple': '#AA00AA',
					'gray': '#555555',
				},
				wool: {
					'orange': '#D87F33',
					'magenta': '#B24CD8',
					'light-blue': '#6699D8',
					'yellow': '#E5E533',
					'lime': '#7FCC19',
					'pink': '#F27FA5',
					'gray': '#4C4C4C',
					'light-gray': '#999999',
					'cyan': '#4C7F99',
					'purple': '#7F3FB2',
					'blue': '#334CB2',
					'brown': '#664C33',
					'green': '#667F33',
					'red': '#993333',
					'black': '#191919'
				},
				grass: {
					DEFAULT: '#79C05A',
					'jungle': '#59C93C',
					'dark-forest': '#507A32',
					'swamp-green': '#4C763C',
					'plains': '#91BD59',
					'forest': '#79C05A',
					'birch-forest': '#88BB67',
					'ocean': '#8EB971',
					'meadow': '#83BB6D',
					'tiaga': '#86B783',
					'snowy': '#80B497',
					'swamp': '#6A7039',
					'badlands': '#90814D',
					'desert': '#BFB755'
				},
				foilage: {
					DEFAULT: '#59AE30',
					'jungle': '#30BB0B',
					'dark-forest': '#507A32',
					'swamp-green': '#4C763C',
					'plains': '#77AB2F',
					'forest': '#59AE30',
					'birch-forest': '#6BA941',
					'ocean': '#71A74D',
					'meadow': '#63A948',
					'tiaga': '#68A464',
					'snowy': '#60A17B',
					'swamp': '#6A7039',
					'badlands': '#9E814D',
					'desert': '#AEA42A'
				},
				water: {
					DEFAULT: '#44AFF5',
					ocean: {
						DEFAULT: '#1787D4',
						'warm': '#02B0E5',
						'lukewarm': '#0D96DB',
						'cold': '#2080C9',
						'frozen': '#2570B5'
					},
					forest: {
						DEFAULT: '#1E97F2',
						'birch': '#0677CE',
						'birch-hills': '#0A74C4',
						'dark': '#3B6CD1',
						'flower': '#20A3CC',
					},
					'meadow': '#0E4ECF',
					'river': '#0084FF',
					'mountain-gravel': '#0E63AB',
					'mountain': '#007BF7',
					'beach': '#157CAB',
					'beach-snowy': '#1463A5',
					'stone-shore': '#0D67BB',
					'jungle': '#14A2C5',
					'jungle-hills': '#1B9ED8',
					'tiaga': '#287082',
					'tiaga-hills': '#236583',
					'tiaga-snowy': '#205E83',
					'savanna': '#2C8B9C',
					'savanna-plateau': '#2590A8',
					'desert': '#32A598',
					'desert-hills': '#1A7AA1',
					'badlands': '#4E7F81',
					'badlands-plateau': '#55809E',
					'swamp': '#4C6559',
					'swamp-hills': '#4C6156',
					'mushroom': '#8A8997',
					'mushroom-shore': '#818193',
					'end': '#62529E',
					'nether': '#905957'
				}
			},
			keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
		},
	},
}