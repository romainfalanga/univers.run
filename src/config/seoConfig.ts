export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string;
  ogType?: string;
}

export const seoConfig: Record<string, SEOMetadata> = {
  '/': {
    title: 'Univers.run - Exploration de la Physique Théorique',
    description: 'Découvrez les mystères de l\'univers à travers la relativité des échelles, les trous noirs et la physique quantique. Une expérience interactive unique.',
    keywords: 'physique, univers, relativité, échelles, cosmologie, théorie',
    ogType: 'website'
  },
  '/code-univers': {
    title: 'Code de l\'Univers - Analogie Informatique | Univers.run',
    description: 'Comprenez l\'univers à travers une analogie avec le code informatique. Découvrez comment les échelles de l\'univers ressemblent aux couches d\'un programme.',
    keywords: 'code, univers, programmation, analogie, échelles, physique',
    ogType: 'article'
  },
  '/relativite-classique': {
    title: 'Relativité Classique - Les Fondements | Univers.run',
    description: 'Explorez les concepts fondamentaux de la relativité classique et découvrez comment notre perception du temps et de l\'espace a évolué.',
    keywords: 'relativité classique, Einstein, temps, espace, physique classique',
    ogType: 'article'
  },
  '/relativity': {
    title: 'Calculateur de Relativité Interactive | Univers.run',
    description: 'Utilisez notre calculateur interactif pour comprendre les effets relativistes sur le temps et l\'espace en fonction de la vitesse.',
    keywords: 'calculateur relativité, simulation, vitesse, temps, dilatation temporelle',
    ogType: 'article'
  },
  '/relativite-generale': {
    title: 'Relativité Générale - Courbure de l\'Espace-Temps | Univers.run',
    description: 'Plongez dans la relativité générale d\'Einstein et découvrez comment la masse courbe l\'espace-temps.',
    keywords: 'relativité générale, Einstein, courbure, espace-temps, gravité',
    ogType: 'article'
  },
  '/relativite-echelles': {
    title: 'Relativité des Échelles - Une Nouvelle Vision de l\'Univers | Univers.run',
    description: 'Découvrez une théorie révolutionnaire qui ajoute une dimension fondamentale à notre compréhension de l\'univers : l\'échelle comme dimension à part entière.',
    keywords: 'relativité des échelles, dimension échelle, physique théorique, nouvelle théorie, univers',
    ogType: 'article'
  },
  '/tissu-espace-temps-echelle/superposition': {
    title: 'Superposition du Tissu Espace-Temps | Univers.run',
    description: 'Explorez comment les différentes échelles de l\'espace-temps peuvent se superposer et créer des effets quantiques observables.',
    keywords: 'superposition, tissu espace-temps, échelles, quantique',
    ogType: 'article'
  },
  '/tissu-espace-temps-echelle/tapis-roulant': {
    title: 'Le Tapis Roulant de l\'Espace-Temps | Univers.run',
    description: 'Comprenez l\'analogie du tapis roulant pour visualiser comment l\'espace-temps se comporte à différentes échelles.',
    keywords: 'tapis roulant, espace-temps, analogie, échelles, physique',
    ogType: 'article'
  },
  '/relativite-restreinte-echelles/budget-universel': {
    title: 'Budget Universel de l\'Énergie | Univers.run',
    description: 'Découvrez comment l\'énergie est distribuée et conservée à travers les différentes échelles de l\'univers.',
    keywords: 'budget universel, énergie, conservation, relativité restreinte, échelles',
    ogType: 'article'
  },
  '/relativite-restreinte-echelles/pivot-temporel': {
    title: 'Pivot Temporel et Échelles | Univers.run',
    description: 'Explorez comment le temps peut pivoter et se comporter différemment selon l\'échelle d\'observation.',
    keywords: 'pivot temporel, temps, échelles, relativité restreinte',
    ogType: 'article'
  },
  '/relativite-restreinte-echelles/tapis-roulant': {
    title: 'Tapis Roulant Relativiste | Univers.run',
    description: 'Visualisez les effets relativistes à travers l\'analogie du tapis roulant dans le contexte de la relativité restreinte.',
    keywords: 'tapis roulant, relativité restreinte, vitesse, temps',
    ogType: 'article'
  },
  '/relativite-restreinte-echelles/immobile': {
    title: 'État Immobile Relatif | Univers.run',
    description: 'Comprenez ce que signifie être immobile dans un univers en mouvement constant à différentes échelles.',
    keywords: 'immobile, mouvement relatif, relativité, échelles',
    ogType: 'article'
  },
  '/relativite-restreinte-echelles/vitesse-extreme': {
    title: 'Vitesse Extrême et Effets Relativistes | Univers.run',
    description: 'Découvrez ce qui se passe lorsqu\'on approche de la vitesse de la lumière à différentes échelles.',
    keywords: 'vitesse extrême, vitesse lumière, relativité, effets relativistes',
    ogType: 'article'
  },
  '/relativite-generale-echelles/escalator-universel': {
    title: 'Escalator Universel de la Gravité | Univers.run',
    description: 'Visualisez comment la gravité agit comme un escalator universel à travers les échelles.',
    keywords: 'escalator universel, gravité, relativité générale, échelles',
    ogType: 'article'
  },
  '/relativite-generale-echelles/environnements': {
    title: 'Environnements Gravitationnels | Univers.run',
    description: 'Explorez les différents environnements gravitationnels et leur impact sur l\'espace-temps.',
    keywords: 'environnements, gravité, espace-temps, relativité générale',
    ogType: 'article'
  },
  '/relativite-generale-echelles/effet-rayonnement': {
    title: 'Effet du Rayonnement sur les Échelles | Univers.run',
    description: 'Découvrez comment le rayonnement affecte différemment chaque échelle de l\'univers.',
    keywords: 'rayonnement, effets, échelles, énergie, physique',
    ogType: 'article'
  },
  '/relativite-generale-echelles/coefficient-multiplicateur': {
    title: 'Coefficient Multiplicateur Gravitationnel | Univers.run',
    description: 'Comprenez le coefficient qui amplifie les effets gravitationnels à différentes échelles.',
    keywords: 'coefficient multiplicateur, gravité, échelles, relativité générale',
    ogType: 'article'
  },
  '/relativite-echelles-final': {
    title: 'Hub des Tapis Roulants - Synthèse | Univers.run',
    description: 'Synthèse complète des concepts de la relativité des échelles à travers l\'analogie des tapis roulants.',
    keywords: 'hub, tapis roulants, synthèse, relativité échelles',
    ogType: 'article'
  },
  '/experiences-pensee-echelles/entree-musee': {
    title: 'Entrée du Musée des Expériences de Pensée | Univers.run',
    description: 'Commencez votre voyage à travers les expériences de pensée qui révolutionnent notre compréhension de l\'univers.',
    keywords: 'expériences pensée, musée, physique, théorie',
    ogType: 'article'
  },
  '/experiences-pensee-echelles/premiere-piece': {
    title: 'Première Pièce - Expériences Fondamentales | Univers.run',
    description: 'Découvrez les expériences de pensée fondamentales qui illustrent les concepts de la relativité des échelles.',
    keywords: 'expériences, pensée, fondamentales, physique',
    ogType: 'article'
  },
  '/expansion-interne/illusion-expansion': {
    title: 'L\'Illusion de l\'Expansion Cosmique | Univers.run',
    description: 'Et si l\'expansion de l\'univers n\'était qu\'une illusion d\'échelle? Explorez cette perspective révolutionnaire.',
    keywords: 'expansion, illusion, univers, cosmologie, échelles',
    ogType: 'article'
  },
  '/expansion-interne/loi-hubble': {
    title: 'Loi de Hubble Réinterprétée | Univers.run',
    description: 'Redécouvrez la loi de Hubble sous l\'angle de la relativité des échelles.',
    keywords: 'loi Hubble, expansion, cosmologie, relativité échelles',
    ogType: 'article'
  },
  '/expansion-interne/energie-sombre': {
    title: 'Énergie Sombre et Échelles | Univers.run',
    description: 'Une nouvelle interprétation de l\'énergie sombre à travers le prisme des échelles.',
    keywords: 'énergie sombre, matière noire, cosmologie, échelles',
    ogType: 'article'
  },
  '/trous-noirs-echelles/creation': {
    title: 'Création des Trous Noirs | Univers.run',
    description: 'Découvrez comment les trous noirs se forment et leur relation avec les échelles de l\'univers.',
    keywords: 'trous noirs, création, formation, échelles, physique',
    ogType: 'article'
  },
  '/trous-noirs-echelles/passage': {
    title: 'Passage à Travers l\'Horizon | Univers.run',
    description: 'Explorez ce qui se passe lors du passage de l\'horizon des événements d\'un trou noir.',
    keywords: 'trous noirs, horizon événements, passage, relativité',
    ogType: 'article'
  },
  '/trous-noirs-echelles/retour-impossible': {
    title: 'Pourquoi Aucun Retour N\'est Possible | Univers.run',
    description: 'Comprenez pourquoi rien ne peut échapper à un trou noir une fois l\'horizon franchi.',
    keywords: 'trous noirs, retour impossible, horizon, physique',
    ogType: 'article'
  },
  '/trous-noirs-echelles/taille-univers': {
    title: 'Taille de l\'Univers Quantique Interne | Univers.run',
    description: 'Découvrez la taille réelle de l\'univers contenu dans un trou noir du point de vue quantique.',
    keywords: 'trous noirs, univers quantique, taille, échelles',
    ogType: 'article'
  },
  '/trous-noirs-echelles/univers-internes': {
    title: 'Univers Internes des Trous Noirs | Univers.run',
    description: 'Explorez la possibilité que chaque trou noir contienne un univers entier à une échelle différente.',
    keywords: 'trous noirs, univers internes, multivers, échelles',
    ogType: 'article'
  },
  '/trous-noirs-echelles/harmonie': {
    title: 'Harmonie de la Descente | Univers.run',
    description: 'Découvrez l\'harmonie mathématique et physique de la descente vers la singularité.',
    keywords: 'trous noirs, harmonie, descente, singularité, physique',
    ogType: 'article'
  },
  '/trous-noirs-echelles/singularite': {
    title: 'La Singularité Réinterprétée | Univers.run',
    description: 'Une nouvelle vision de la singularité des trous noirs à travers la relativité des échelles.',
    keywords: 'singularité, trous noirs, relativité, échelles',
    ogType: 'article'
  },
  '/trous-noirs-echelles/horizon': {
    title: 'Horizon des Événements | Univers.run',
    description: 'Comprenez la nature de l\'horizon des événements et son rôle dans la physique des trous noirs.',
    keywords: 'horizon événements, trous noirs, relativité, physique',
    ogType: 'article'
  },
  '/trous-noirs-echelles/invisibilite': {
    title: 'L\'Invisibilité des Trous Noirs | Univers.run',
    description: 'Pourquoi les trous noirs sont-ils invisibles et comment pouvons-nous les détecter?',
    keywords: 'trous noirs, invisibilité, détection, astronomie',
    ogType: 'article'
  },
  '/trous-noirs-echelles/derriere-horizon': {
    title: 'Derrière l\'Horizon - Le Monde Intérieur | Univers.run',
    description: 'Explorez ce qui se cache derrière l\'horizon des événements d\'un trou noir.',
    keywords: 'trous noirs, horizon, intérieur, physique théorique',
    ogType: 'article'
  }
};

export function getSEOMetadata(path: string): SEOMetadata {
  return seoConfig[path] || seoConfig['/'];
}
