export const homeContent = {
	hero: {
		lines: ['Construire les systèmes', 'embarqués de l’ère IA.'],
	},
	featuredProject: {
		href: '/projets#miel',
		title: 'Projet Miel',
		intro: 'Découvrez Miel',
		name: 'Model Inference Engine Lite',
		description: 'Un framework open source pour déployer l’IA sur systèmes contraints.',
		cta: 'En savoir plus',
	},
	articles: {
		title: 'Comprendre l’Edge AI',
		moreHref: '/blog',
		moreLabel: 'Voir plus d’articles',
		cardCta: 'Lire l’article',
		items: [
			{
				name: 'Architecture réseau et déploiement',
				description:
					'Comment les choix d’architecture influencent les bottlenecks mémoire, calcul et latence lors du déploiement de réseaux de neurones profonds.',
				href: '/blog',
			},
			{
				name: 'OTA pour objets AIoT',
				description:
					'Bootloader, déploiement progressif et rollback : concevoir des mises à jour fiables pour objets connectés intelligents, avec une étude de cas concrète.',
				href: '/blog',
			},
			{
				name: 'Retour sur les Assises de l’Embarqué 2026',
				description:
					'L’IA embarquée au cœur des enjeux de souveraineté technologique et d’industrie en France.',
				href: '/blog',
			},
		],
	},
	projects: {
		title: 'Résoudre des problèmes réels',
		moreHref: '/projets',
		moreLabel: 'Voir plus de projets',
		items: [
			{
				name: 'Projet ÅRIM',
				description:
					'Vision embarquée et détection d’objets pour classifier automatiquement des déchets dangereux sur NVIDIA Jetson.',
				href: '/projets#arim',
				visual:
					'bg-[radial-gradient(circle_at_34%_46%,rgba(255,255,255,0.82)_0_14%,transparent_15%),radial-gradient(circle_at_68%_44%,rgba(17,17,17,0.92)_0_13%,transparent_14%),linear-gradient(135deg,#efe3cc,#d9c5a5)]',
			},
			{
				name: 'Projet Knob — TinyML pour l’assistance aux personnes âgées',
				description:
					'Reconnaissance vocale sur microcontrôleur pour transformer d’anciens appareils électroménagers en objets connectés plus accessibles.',
				href: '/projets#knob',
				visual:
					'bg-[linear-gradient(90deg,rgba(17,17,17,0.09)_1px,transparent_1px),linear-gradient(rgba(17,17,17,0.09)_1px,transparent_1px),linear-gradient(135deg,#f7f2e7,#ded4c2)] bg-[length:28px_28px,28px_28px,auto]',
			},
			{
				name: 'Maintenance prédictive de systèmes motorisés',
				description:
					'Analyse de signaux capteurs pour prédire l’état de santé de systèmes motorisés avant la panne.',
				href: '/projets#predic',
				visual:
					'bg-[radial-gradient(circle_at_72%_38%,rgba(155,104,30,0.34),transparent_22%),linear-gradient(135deg,#f2e7d3,#ddd1bf)]',
			},
		],
	},
	contact: {
		title: 'Construisons quelque chose ensemble !',
		description:
			'Vous développez un produit, un prototype ou une idée autour de l’IA embarquée ? Que ce soit pour une collaboration professionnelle, un projet expérimental, une question technique ou simplement une discussion entre passionnés, n’hésitez pas à me contacter.',
		href: '/contact',
		label: 'Me contacter',
	},
};
