import { m } from "./paraglide/messages";

export const HOSTING = {
    link: "https://www.hetzner.com/",
    address: [
        'Hetzner Online GmbH',
        'Industriestr. 25',
        '91710 Gunzenhausen',
        'Germany',
    ],
}

export const LANGUAGES = [
    {
        label: m.French(),
        level: m.Native(),
        icon: 'flag-FR.svg',
        stars: 5
    },
    {
        label: m.English(),
        level: m.Fluent(),
        icon: 'flag-EN.svg',
        stars: 4,
    },
    {
        label: m.German(),
        level: m.Basis(),
        icon: 'flag-DE.svg',
        stars: 2,
    },
]

export const ENVIRONMENTS = [
    ["Mac OS X", "Windows", "Linux"],
    ["VS Code", "Atom", "XCode", "Coda", "PHPStorm"],
    ["SourceTree", "Git"],
    ["Photoshop", "Illustrator"],
]

export const TECHNOLOGIES = [
    ["Laravel", "VueJS", "Astro"],
    ["PHP", "MySQL", "Javascript", "Symfony"],
    ["Ionic", "Electron", "Objective-C", "Swift"],
    ["C", "C++", "Java", "Python"],
    ["PCRE Regex", "FFMpeg"],
]

export const SOCIAL = {
    github: {
        label: "Github",
        icon: "fa6-brands:github",
        url: "https://github.com/7ute",
        accentColor: "#232266",
    },
    bsky: {
        label: "Bluesky",
        icon: "fa6-brands:bluesky",
        url: "https://bsky.app/profile/7ute.fr",
        accentColor: "#0085ff",
    },
    linkedin: {
        label: "LinkedIn",
        icon: "fa6-brands:linkedin-in",
        url: "https://fr.linkedin.com/in/juliencauvin",
        accentColor: "#0a66c2",
    },
    facebook: {
        label: "Facebook",
        icon: "fa6-brands:facebook-f",
        url: "https://facebook.com/julien.cauvin",
        accentColor: "#0866ff",
    },
    twitter: {
        label: "Twitter",
        icon: "fa6-brands:twitter",
        url: "https://twitter.com/7ute",
        accentColor: "#00a7e7",
    },
    mastodon: {
        label: "Mastodon",
        icon: "fa6-brands:mastodon",
        url: "https://metalhead.club/@7ute",
        accentColor: "#5845d6",
    },
}

export const BACKGROUNDS = import.meta.glob('/src/images/projects/backgrounds/*.{jpeg,jpg,png,gif}')
export const THUMBNAILS = import.meta.glob('/src/images/projects/thumbnails/*.{jpeg,jpg,png,gif}')

export const getSvgIconPath = (label) => {
    const slug = label.toLowerCase()
        .replaceAll(/[+]/gui, 'p')
        .replaceAll(/\s/gui, '-')
    return `/icons/icone-${slug}.svg`
}

export const FORMATIONS = [
    {
        title: "BTS in Business Computering System",
        school: "ILEC Nice",
    },
    {
        title: "Licence Math-Computering",
        school: "University of Nice / Sophia-Antipolis",
    },
    {
        title: "Scientific bachelor’s degree",
        school: "Henri Matisse High School",
    },
]

export const EXPERIENCES = [
    {
        titles: ["Apps Craftsman"],
        company: 'Quality Referencement / See-U-Better',
        dates: { from: 2021, to: (new Date()).getFullYear() },
    },
    {
        titles: ["Fullstack developper", "Sysadmin"],
        company: 'La Petite Industry / Comback / MyCoach',
        dates: { from: 2016, to: 2021 },
    },
    {
        titles: ["Software developper", "Webdesigner"],
        company: 'Freelance',
        dates: { from: 2013, to: 2016 },
    },
    {
        titles: ["Software developper", "Webdesigner", "Sysadmin"],
        company: 'Soft Gestion Services',
        dates: { from: 2010, to: 2013 },
    },
    {
        titles: ["Software developper", "Sysadmin"],
        company: 'Association Club Azur Services',
        dates: { from: 2008, to: 2010 },
    },
]

export const PROJECTS = {
    mapduo: {
        title: 'MapDuo',
        thumb: 'mapduo.jpg',
        video: 'mapduo.mp4',
        link: 'https://mapduo.com',
        description: {
            en: "Website and management app for the maps SEO product MapDuo",
            fr: "Site internet et application de gestion pour l'outil de référencement sur les cartes MapDuo"
        },
        techs: ['Astro', 'VueJS', 'Node', 'Laravel', 'Wasabi', 'Git'],
        types: ['Web', 'Desktop', 'Tablet']
    },
    seeubetter: {
        title: 'See-U-Better',
        image: 'see-u-better.jpg',
        thumb: 'see-u-better.jpg',
        link: 'https://see-u-better.com',
        description: {
            en: "Website and management app for the natural SEO leading agency See-U-Better",
            fr: "Site internet et application de gestion pour l'agence leader en référencement Naturel See-U-Better"
        },
        techs: ['Laravel', 'Nuxt', 'VueJS', 'Render', 'Wasabi'],
        types: ['Web', 'Desktop', 'Tablet']
    },
    wipicut: {
        title: 'wipicut',
        image: 'wipicut.jpg',
        thumb: 'wipicut.jpg',
        link: 'https://www.wipicut.com',
        description: {
            en: "Online sport scouting / analysis web application",
            fr: "Application de scouting / analyse sportive en ligne"
        },
        techs: ['Laravel', 'Quasar', 'VueJS', 'PHP','MySQL','Apache','jQuery'],
        types: ['Web', 'Desktop', 'Tablet']
    },
    ballanger: {
        title: 'Ballanger Stock App',
        image: 'ballanger.jpg',
        thumb: 'ballanger.jpg',
        link: 'https://www.confiserie-ballanger.fr/',
        description: {
            en: "Store and inventory management tablet app for the successful confectioner Ballanger.",
            fr: "Application tablette de gestion des stocks pour la société de confiserie Ballanger."
        },
        techs: ['Laravel', 'VueJS', 'PHP','MySQL','Apache','jQuery'],
        types: ['Web', 'Desktop', 'Tablet']
    },
    aef: {
        title: 'AEF',
        image: 'aef.jpg',
        thumb: 'aef.jpg',
        link: 'https://www.aefoot.com',
        description: {
            en: "Website and management software for the AEF (Amicale des Educateurs de Football - Soccer Teachers Association).",
            fr: "Site et application de gestion pour l'Amicale des Educateurs de Football."
        },
        techs: ['Laravel', 'VueJS', 'PHP','MySQL','Apache','jQuery'],
        types: ['Web', 'Desktop']
    },
    symbolsList: {
        title: 'Symbols List',
        image: 'symbolslist.jpg',
        thumb: 'symbolslist.jpg',
        link: 'https://github.com/7ute/symbols-list',
        description: {
            en: "An Atom.io editor plugin to ease browsing the file through its symbols.",
            fr: "Un plugin pour l’éditeur Atom.io qui facilite la navigation parmi les symboles."
        },
        techs: ['Atom', 'Electron', 'CoffeeScript'],
        types: ['Desktop']
    },
    imujam: {
        title: 'imujam',
        image: 'imujam.png',
        thumb: 'imujam.jpg',
        link: 'https://www.imujam.com',
        description: {
            en: "Website with video/sound recording to create multiplayer musical jam online.",
            fr: "Site collaboratif musical avec enregistrement video/audio pour créer des jams."
        },
        techs: ['Laravel', 'FFMPEG', 'PHP','MySQL','Apache','jQuery'],
        types: ['Web', 'Desktop', 'Tablet']
    },
    bougainville: {
        title: 'Edition Bougainville',
        image: 'bougainville.jpg',
        thumb: 'bougainville.jpg',
        link: 'https://www.editionbougainville.com',
        description: {
            en: "Website and management backoffice for the luxury carpet brand.",
            fr: "Site internet et back-office de gestion pour le vendeur de tapis de luxe."
        },
        techs: ['Laravel', 'VueJS', 'PHP','MySQL','Apache','jQuery'],
        types: ['Web']
    },
    maisonEtAppartement: {
        title: 'Maisons & Appartements App',
        image: 'meta.png',
        thumb: 'meta.png',
        link: 'https://www.maisonsetappartements.fr/',
        description: {
            en: "Mobile app for the website Maisons & Appartements.",
            fr: "Application mobile du site Maisons & Appartements."
        },
        techs: ['Ionic','Objective-C'],
        types: ['Mobile']
    },
    rivieraluxuryrentals: {
        title: 'Riviera Luxury Rentals',
        image: 'rivieraluxuryrentals.jpg',
        thumb: 'rivieraluxuryrentals.jpg',
        link: 'https://www.rivieraluxuryrentals.com',
        description: {
            en: "Premium real estate website and estates management back-office.",
            fr: "Site internet et back-office de gestion immobilière."
        },
        techs: ['Laravel', 'VueJS', 'PHP', 'MySQL', 'Apache', 'jQuery'],
        types: ['Web']
    },
    timetofly: {
        title: 'TimeToFly App',
        image: 'timetofly.jpg',
        thumb: 'timetofly.jpg',
        link: 'http://www.timetofly.eu/',
        description: {
            en: "Tablet app companion for jet flight checklists and manuals.",
            fr: "Application tablette de saisie et d’affichage des checklists et manuel de pilotes de jet."
        },
        techs: ['Laravel', 'Ionic', 'PHP','MySQL','Apache','jQuery','Objective-C'],
        types: ['Web', 'Desktop', 'Tablet']
    },
    ogcnhandball: {
        title: 'OGCN Handball',
        image: 'ogcnhandball.jpg',
        thumb: 'ogcnhandball.jpg',
        link: 'http://www.ogcnicehandball.com/',
        description: {
            en: "Website for the OGCNice handball team.",
            fr: "Site internet de l’équipe de handball OGCNice."
        },
        techs: ['Wordpress', 'PHP','MySQL','Apache','jQuery'],
        types: ['Web']
    },
    lagardere: {
        title: 'Lagardère Sport App',
        image: 'lagardere.jpg',
        thumb: 'lagardere.jpg',
        link: 'https://www.lagardere.com',
        description: {
            en: "Tablet app for commercials showcasing Lagardère Sports solutions.",
            fr: "Application tablette pour montrer les solutions Lagardère Sports."
        },
        techs: ['Laravel', 'Ionic', 'PHP','MySQL','Apache','jQuery','Objective-C'],
        types: ['Web', 'Desktop', 'Tablet']
    },
    ikki: {
        title: 'IKKI.DESIGN',
        image: 'ikki.jpg',
        thumb: 'ikki.jpg',
        description: {
            en: "IKKI is an intuitive online website creator, for professionals to create their website easily.",
            fr: "IKKI est un outil intuitif de création de site internet en ligne, fait pour les professionnels."
        },
        techs: ['PHP','MySQL','Apache','jQuery','Photoshop'],
        types: ['Web']
    },
    nhc: {
        title: 'Natural Health Centre',
        image: 'nhc.jpg',
        thumb: 'nhc.jpg',
        description: {
            en: "Natural Health Centre french website features a custom dynamic and responsive theme for IKKI.",
            fr: "Le site Natural Health Centre utilise un thème IKKI dynamique et adaptatif créé sur mesure."
        },
        techs: ['HTML','CSS','jQuery'],
        types: ['Web']
    },
    vuesdensemble: {
        title: 'Vues d’ensemble',
        image: 'vuesdensemble.jpg',
        thumb: 'vuesdensemble.jpg',
        link: 'https://vuesdensemble.com',
        description: {
            en: "Impulsed by Marine Badin, vuesdensemble.com is an art-dedicated social network, build to fit the art professionnals needs.",
            fr: "Impulsé par Marine Badin, vuesdensemble.com est un réseau, conçu pour répondre aux attentes des professionnels de l’art."
        },
        techs: ['PHP','MySQL','Apache','jQuery','Bootstrap'],
        types: ['Web']
    },
    vde: {
        title: 'Vues d’ensemble App',
        image: 'vde.jpg',
        thumb: 'vde.jpg',
        link: 'https://vuesdensemble.com',
        description: {
            en: "Vues d'ensemble's dedicated smartphone free app, listing all the artists and galeries around.",
            fr: "L'application smartphone de Vues d'ensemble, listant les artistes et lieux d'art à proximité."
        },
        techs: ['PHP','MySQL','Apache','XCode'],
        types: ['Mobile']
    },
    etharia: {
        title: 'Etharia',
        image: 'etharia.jpg',
        thumb: 'etharia.jpg',
        description: {
            en: "Graphism for Magali Giraudo and Mr Soon's album Etharia.",
            fr: "Réalisation du packaging pour l'album Etharia de Magali Giraudo et Mr Soon."
        },
        techs: ['Photoshop', 'Illustrator'],
        types: ['Desktop']
    },
    quai34: {
        title: 'Quai 34',
        image: 'quai34.jpg',
        thumb: 'quai34.jpg',
        description: {
            en: "Complete non-flash version website frontend and administration panel for Quai34 Nice.",
            fr: "Réalisation de la version non-flash du site Quai 34 Nice ainsi que son interface d'administration."
        },
        techs: ['PHP','MySQL','Apache'],
        types: ['Web']
    },
    sgs: {
        title: 'SGS',
        image: 'cassgs.jpg',
        thumb: 'cassgs.jpg',
        description: {
            en: "SGS is a complete business software dedicated to the personnal care sector. It features client and employees management, calendars, dependency testing, and a geolocation tool for sector managers",
            fr: "SGS est un progiciel dédié au domaine de l'aide à la personne. Il inclu un gestionnaire de client et de salariés, un calendrier complet, un test de dépendance, et des outils de géolocalisation pour les responsables de secteurs."
        },
        techs: ['PHP','MySQL','Apache','jQuery'],
        types: ['Web', 'Desktop']
    },
    marrica: {
        title: 'Marica Quartuccia',
        image: 'marica.jpg',
        thumb: 'marica.jpg',
        description: {
            en: "Marica Quartuccia is an artist living in Marseille. She wanted a website that reflects its art, colored and unique.",
            fr: "Marica Quartuccia est une artiste plasticienne sur Marseille. Elle souhaitait un site reflétant son art, coloré et unique."
        },
        techs: ['PHP','MySQL','Apache','jQuery'],
        types: ['Web']
    },
    weelink: {
        title: 'Weelink',
        image: 'weelink.jpg',
        thumb: 'weelink.jpg',
        description: {
            en: "Weelink is an ecosystem of projects, with a social network, an event manager, and a dating app.",
            fr: "Weelink est un écosystème de projets comprenant un réseau social, un site d'évenementiel et une application de rencontre."
        },
        techs: ['PHP','MySQL','Apache','jQuery'],
        types: ['Desktop','Mobile']
    },
    warhammer: {
        title: 'MyHammer',
        image: 'warhammer.jpg',
        thumb: 'warhammer.jpg',
        description: {
            en: "Tool to simplify the dungeon master's tasks during Warhammer roleplaying games, featuring character management, objects, and even a map!",
            fr: "Outil pour simplifier le rôle du MdJ lors d'une partie de Warhammer, comprennant un gestionnaire de personnage, d'objet et même une carte!"
        },
        techs: ['Photoshop', 'Illustrator', 'PHP', 'MySQL', 'jQuery'],
        types: ['Desktop']
    },
}
