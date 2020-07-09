export const skillsList = [
  {
    title: 'AMBIDEXTRIE (AD)',
    des: `Pure compétence de guerrier en mêlée. À partir du niveau 2, le héros peut prendre une arme dans chaque main.
    En plus d'avoir l'air méchant, il pourra donner deux attaques par assaut s'il atteint ou dépasse un score d'adresse de 14.
    Ce qui lui donne, bien sûr, deux fois plus de chance de se blesser tout seul... Car la deuxième attaque est plus difficile à réussir.
    Il ne peut parer qu'une fois, ambidextre ou non.`,
    use: 'Deuxième attaque possible à chaque assaut, avec une épreuve AT-5 / une seule parade.',
    req: 'Avoir 2 armes à 1 main, minimum AD 14'
  },
  {
    title: 'AGORAPHOBIE (INT)',
    des: `Les personnages agoraphobes ont peur des gens, de la foule.
    En présence d'une foule (taverne, place du marché...), à la demande du Grand Vilain MJ,
    le héros devra réussir une épreuve d'intelligence +4 pour garder le contrôle de lui-même.
    S'il échoue, il prendra la fuite et devra être convaincu par les autres de reprendre sa place dans le groupe.
    C'est dommage, mais c'est comme ça.`,
    use: 'En milieu peuplé, épreuve INT +4 du héros pour garder son sang-froid. Échec : fuite.',
    rat: 'Les équipiers peuvent tenter une épreuve de CHA pour le raisonner.'
  },
  {
    title: 'APPEL DES RENFORT',
    des: `Cette compétence permet de fuir très vite en arrière en oubliant ses petits camarades derrière soi.
    Le héros qui sait fuir (dignement, bien sûr) ne sera jamais touché par des ennemis au moment de leur tourner le dos pour détaler.
    Bien entendu, les Barbares et les Paladins ne font jamais ça...`,
    use: `En cas de fuite d'une scène de combat, le héros ne peut être frappé par les ennemis`
  },
  {
    title: 'APPEL DU SAUVAGE (INT)',
    des: `Le héros à moitié barge a vécu son enfance dans des hordes ou dans les grottes de créatures aux mœurs violentes.
    Si les aventuriers sont attaqués par un grand nombre d'ennemis (à partir de 5),
    le Grand Vilain MJ demandera au héros sauvage de faire une épreuve d'intelligence +4.
    S'il échoue, il rejoindra le camp adverse... Et il ne sera pas facile de le faire changer d'avis.`,
    use: 'En présence de horde, épreuve INT +4 du héros pour garder son sang-froid. Échec : le héros devient ennemi.',
    rat: 'Les équipiers peuvent tenter une épreuve de CHA pour le raisonner.'
  },
  {
    title: 'APPEL DU TONNEAU (INT)',
    des: `L'alcool attire le héros, s'il ne parvient pas à résister à son instinct de poivrot.
    Il devra passer une épreuve d'intelligence +4 pour s'en sortir...
    Ou décidera de s'adonner à la boisson, quitte à finir allongé dans son vomi. C'est vraiment la honte.`,
    use: `En présence d'alcool, épreuve INT +4 du héros pour ne pas s'enivrer. Échec : le héros finit bourré.`,
    rat: `A moins d'utiliser la force, on ne peut pas tenter de raisonner un ivrogne.`
  },
  {
    title: 'APPEL DU VENTRE (INT)',
    des: `Certaines personnes ont besoin de manger souvent.
    Le héros qui subit l'appel du ventre doit trouver à manger de façon régulière.
    S'il n'a pas ses trois repas par jour, il devra résister à l'envie de piquer la nourriture de ses camarades,
    ou même à la tentation de leur manger un bras.
    Il sera bon pour une épreuve d'intelligence +4. S'il échoue, ça risque de causer quelques problèmes !`,
    use: 'En manque de nourriture, épreuve INT +4 du héros pour rester calme. Échec : il veut manger ses amis',
    rat: ' Epreuve de CHA (difficile) pour le convaincre ou épreuve de FO (difficile) pour le ceinturer'
  },
  {
    title: 'ARMES DE BOURRIN',
    des: `Le personnage est capable d'utiliser toutes les armes qui sont lourdes et font très mal,
    comme les grosses haches, les grosses épées, les grosses massues...
    En bref, ils ont la capacité d'utiliser des armes portant l'étiquette «à deux mains».
    Cette compétence n'est pas utilisable par les Nains et certaines autres créatures.`,
    use: `Peut s'équiper d'armes à deux mains et les utiliser (une à la fois !)`,
    req: `Avoir la force nécessaire (donc, n'avoir pas de restriction d'origine sur les armes à deux mains).`
  },
  {
    title: 'ARNAQUE ET CARAMBOUILLE',
    des: `Il faut parfois faire des concessions à la moralité pour augmenter ses revenus.
    Le personnage arnaqueur obtiendra une remise de 20% sur le prix à l'achat d'objets neufs,
    sans faire la moindre épreuve au dé. Il est libre ensuite d'en profiter pour faire du trafic au sein du groupe,
    à condition que le marchand ne flaire pas l'arnaque (sur décision du MJ).
    Il peut gagner également 10% sur la revente de matériel usagé (butin),
    mais il faut savoir que le prix de base d'un matériel revendu est toujours diminué d'au moins 50% par rapport au neuf.`,
    use: `En boutique ou en négociation, obtient une remise de 20% sur le prix d'achat, 10% à la revente.`,
    rp: `Pas d'épreuve au dé, mais le joueur doit convaincre le MJ avec un discours abracadabrant!`
  },
  {
    title: 'ATTIRE LES MONSTRES',
    des: `Le héros qui attire les monstres sera toujours le premier visé dans le cas où
    une bestiole ou un méchant doit faire un choix de victime. Dommage pour lui, il a sans doute une tête à baffes !`,
    use: `Dans le cas d'une rencontre avec des ennemis, le héros est attaqué en premier.`
  },
  {
    title: 'BOURRE-PIF',
    des: `L’art du bourre-pif consiste à taper n’importe comment avec les poings de manière efficace.
    Casser un bras ou se battre avec un tabouret rentre dans la compétence bourre-pif.
    Le personnage adepte du bourre-pif n'aura pas de malus à son score d'attaque,
    pourra utiliser la «table des critiques à mains nues» ainsi que les «coups spéciaux à mains nues».
    Voir à ce sujet la page 13 du document des règles de base.`,
    use: 'Pas de malus au score AT, dégâts de base 1D6, coups critiques, accès aux coups spéciaux.'
  },
  {
    title: 'BRICOLO DU DIMANCHE (AD)',
    des: `À l'aide de cette compétence, un personnage pourra tenter de réparer ou de fabriquer des objets rudimentaires,
    pour peu qu'il réussisse une épreuve d'adresse, et sans avoir besoin de connaître le sujet en particulier.
    C'est au Grand Vilain MJ de s'arranger pour que la difficulté de l'épreuve soit adaptée au profil du héros ainsi qu'à l'objet désiré.
    Un gobelin fabriquera plus facilement une baliste qu'un nécessaire de coiffure !
    Il aura bien entendu besoin d'un certain nombre d'outils et de matériel de construction.`,
    use: `Fabrication ou réparation possible d'armes rudimentaires, de matériel varié, consolidation : épreuve AD.`
  },
  {
    title: 'CHANCE DU REMPAILLEUR',
    des: `Le personnage qui n'a que des caractéristiques pourries peut bénéficier de cette compétence, sur décision du Grand Vilain MJ.
    Les dieux sont parfois cléments avec ceux qui ont une existence difficile.
    Le personnage bénéficiant de la chance du rempailleur ne pourra mourir dans un combat,
    il se passera toujours quelque chose de bizarre au moment on son énergie vitale approche de zéro...
    Il peut en revanche mourir de maladie ou d'accident.`
  },
  {
    title: 'CHEF DE GROUPE',
    des: `Le héros pense qu'il est un bon chef, et il arrive même à en convaincre les autres.
    Il lui est donc plus facile d'imposer son avis quand le groupe doit prendre une décision, qu'elle soit bonne ou mauvaise.`,
    use: `Le vote du chef du groupe compte pour 2 voix, et s'il y a égalité, c'est le chef de groupe qui a raison.`
  },
  {
    title: 'CHERCHER DES NOISES',
    des: `À moins d'être surpris, le personnage qui sait chercher des noises frappe toujours en premier
    quand il se retrouve au corps-à-corps avec un ennemi. Ceci évite de confronter les scores de courage,
    et ça peut faire la différence contre quelqu'un qui a une plus grosse épée.`,
    use: `Le héros a l'initiative sur tous les combats au corps-à-corps.`
  },
  {
    title: 'CHEVAUCHER (AD, CHA)',
    des: `Permet de monter à cheval sans subir le courroux de la bête, sans faire d'épreuve particulière.
    Chevaucher permet aussi de prétendre pouvoir s'installer sur le dos d'un certain nombre d'autres montures,
    comme le Chapon Fanghien, le Sanglier de Combat...
    Au prix d'une épreuve d'adresse ou de charisme plus difficile à la discrétion du Grand Vilain MJ.
    Pour les autres, c'est souvent «non, moi je vais marcher».`,
    use: `Le héros peut utiliser une monture classique sans être ridicule et sans tomber au moindre mouvement.`
  },
  {
    title: 'CHOURAVER (AD)',
    des: `Cette compétence permet à son possesseur de faire les poches de ses petits camarades sans être repéré
    ou de piquer sans complexe des choux sur le marché. Un chouraveur a rarement beaucoup d'amis,
    et peut coupler sa compétence avec «Appel des renforts» pour assurer ses chances de survie.
    Il aura un bonus de +4 aux épreuves d'adresse impliquant un larcin.`,
    use: `Bonus +4 sur les épreuves AD de vol à la tire, n'impliquant pas de violence.`
  },
  {
    title: 'COMPRENDRE LES ANIMAUX (INT)',
    des: `Le héros peut être fier de cette excellente compétence : grâce à elle,
    il peut tenter d'instaurer un dialogue avec une mouette, des souris, un chat,
    une belette ou tout autre animal possédant un embryon de cerveau.
    Le Vilain MJ devra s'assurer de lui prévoir un épreuve d'intelligence à la hauteur de la tâche.
    Une fois le dialogue établi, le personnage peut bien sûr essayer d'en faire un animal familier!`
  },
  {
    title: 'CUISTOT (AD)',
    des: `C'est l'ami de tout le monde, ce cuistot!
    Grâce à ses talents, il peut préparer à manger pour tous ses amis en utilisant quelques ingrédients de base, et en plus, c'est bon!
    Chaque repas préparé par le cuistot permettra de récupérer 2PV au lieu d'un seul.
    De plus, on n'attrape pas de maladie liée à la nourriture. Pas d'épreuve nécessaire..`,
    use: `+1 PV de récupération sur un repas pour toute l'équipe. Pas d'épreuve.`,
    req: `Disposer d'ingrédients et de matériel de cuisine, avoir 30 minutes pour cuisiner.`
  },
  {
    title: 'DÉPLACEMENT SILENCIEUX (AD)',
    des: `Pour se glisser derrière quelqu'un sans être vu et lui dérober les clés de la prison,
    rien de tel qu'un spécialiste du déplacement silencieux...
    Celui qui dispose de cette compétence aura un bonus de +4 à son épreuve d'adresse.`,
    use: `Bonus +4 sur les épreuves AD de dissimulation et furtivité.`
  },
  {
    title: 'DÉSAMORCER (AD)',
    des: `Le personnage spécialiste en désamorçage dispose d'un bonus de +4 à l'épreuve d'adresse pour débarrasser une porte,
    un couloir ou un coffre de n'importe quel mécanisme douloureux. Il doit cependant l'avoir détecté avant (lui ou quelqu'un du groupe),
    en annonçant une détection des pièges et en réussissant son épreuve!`,
    use: `Bonus +4 sur les épreuves AD pour désamorcer un piège.`
  },
  {
    title: 'DÉTECTER (INT)',
    des: `Le héros dispose de sens aiguisés et d'une bonne faculté d'analyse, et ce n'est pas le genre à marcher n'importe où.
    Il dispose d'un bonus de +2 à l'épreuve d'intelligence pour déceler les pièges et les chausse-trappes,
    les ennemis cachés, les embuscades, les environnements risqués.
    L'action de détecter n'est pas automatique et doit être annoncée par le héros.`,
    use: `Bonus +2 sur les épreuves INT pour détecter les pièges ou le danger.`
  },
  {
    title: 'ÉRUDITION (INT)',
    des: `Quand on a une certaine éducation, il y a des choses qu'on peut faire assez facilement.
    Le héros qui dispose de l'érudition saura lire (la langue de base), écrire et compter, sans avoir à passer d'épreuve.
    Un héros qui n'a pas reçu l'érudition ne saura faire ni l'un ni l'autre
    (ou alors seulement lire du texte de base, avec une épreuve INT).`,
    use: `Le personnage sait lire, écrire et compter.`
  },
  {
    title: 'ESCALADER (AD)',
    des: `Spider-Man triche, il a les mains qui collent ! Mais cette compétence permet d’éviter les chutes désastreuses avec talent,
    lorsqu'on déambule sur une corniche, qu'on attaque une falaise par la face nord
    ou qu'on se retrouve suspendu entre ciel et terre par une toute petite corde.`,
    use: `Bonus +3 sur les épreuves AD pour l'escalade et les numéros de monte-en-l'air.`
  },
  {
    title: 'FORGERON (AD)',
    des: `Le héros forgeron peut réparer et améliorer des armes de métal, et comme c'est un talent plutôt rare,
    peut en profiter pour faire payer ses services. Une épreuve d'adresse est nécessaire à la réussite d'une quelconque manipulation.
    La difficulté sera dosée en fonction du contexte par le Grand Vilain MJ, dans sa grande magnificence.`,
    use: `Aiguiser ou réparer une arme, améliorer une arme avec épreuve AD (voir tableau correspondant).`
  },
  {
    title: 'FRAPPER LÂCHEMENT (AT)',
    des: `Quand on n'a pas la force nécessaire pour battre un adversaire au corps à corps et qu’on a le sens moral d’un chacal,
    on a toujours le choix de feindre le sourire et de frapper de le dos.
    Cette compétence permet de doubler les dégâts d’une attaque lorsque celle-ci est placée dans le dos,
    par une bonne connaissance des points vitaux. Mais cela n'est possible qu'une seule fois par combat
    car l'ennemi ne se fait pas prendre deux fois à ce genre de jeu. Il faut tout de même réussir son attaque...
    et se mettre en position au préalable. La parade est impossible.`,
    use: `Une fois les dégâts de l'arme calculés sur une attaque réussie, multipliez le total par 2.`,
    req: `Avoir une dague, poignard ou autre lame courte - se placer dans le dos de la cible.`,
    res: `Une seule fois par combat, non cumulable avec «ambidextrie», ne fonctionne que sur les humanoïdes de taille standard
    (pas sur les monstres, esprits, animaux et autres) – dague ou autre lame courte uniquement`
  },
  {
    title: 'FARIBOLES (INT, CHA)',
    des: `Ce talent particulier permet de baratiner n’importe qui en le noyant sous un flot d’histoires invraisemblables.
    C'est très utile pour distraire des ennemis potentiels (à condition qu'ils ne soient pas en combat), captiver une foule,
    énerver les gens, faire perdre du temps à quelqu'un, déstabiliser, marchander.
    Le héros maîtrisant l'art des fariboles doit bien sûr impressionner les joueurs autour de la table,
    en racontant ses histoires dans la vraie vie !
    Il aura un bonus de +3 aux épreuves de charisme ou d'intelligence liées à cette compétence.`,
    use: `+3 aux épreuves de CHA ou INT pour faire croire n'importe quoi à quelqu'un.`,
    rp: `Le joueur doit également convaincre le MJ avec son discours original!`
  },
  {
    title: 'FOUILLER DANS LES POUBELLES',
    des: `Le héros n'a pas d'amour-propre. Il a l'habitude de faire son marché dans les détritus,
    et sera toujours le premier à trouver un objet intéressant lorsqu'il fouillera une salle,
    un coffre, un trésor ou n'importe quoi (même une poubelle, d'ailleurs).
    Si plusieurs aventuriers ont cette compétence, ils peuvent régler l'affaire avec un duel au dé.`,
    use: `En cas de fouille d'un lieu ou d'un cadavre, le héros est le premier à trouver le meilleur butin.`
  },
  {
    title: 'INSTINCT DE SURVIE',
    des: `Le héros dispose d'un flair particulier : il trouve de la nourriture ou de la boisson quand il y en aquelque part.
    Il peut ainsi guider tout un groupe d'aventuriers vers la cuisine du donjon.`,
    use: `Si le héros annonce qu'il suit son instinct de survie, le MJ devra le guider vers la nourriture/boisson proche.`
  },
  {
    title: 'INSTINCT DU TRESOR (INT)',
    des: `Le héros a du flair pour trouver les choses cachées, surtout quand elles ont de la valeur !
    Cette compétence donne un bonus de +3 aux épreuves d'intelligence pour sentir les trésors et cachettes.`,
    use: `+3 à l'épreuve INT sur une épreuve de fouille ou détection de trésor/cachette.`
  },
  {
    title: 'INTIMIDER (COU, CHA)',
    des: `Quand on se retrouve face à un gros costaud qui fait la grimace
    et approche son visage furieux de votre nez avec l’apparente attention de vous accrocher la tête au bout d’une pique,
    on a souvent deux choix: se battre ou fuir. L’intimidation permet au personnage de faire peur à ses adversaires
    sans avoir besoin de les combattre. Il doit pour cela disposer d'une valeur de courage supérieure à son (ou ses) ennemis,
    et réussir une épreuve de charisme !`,
    use: `Epreuve de CHA possible pour faire fuir un adversaire moins courageux que le héros.`
  },
  {
    title: 'JONGLAGE ET DANSE (AD)',
    des: `Ces trucs, ça ne s'invente pas, c'est un don. Le héros capable de danser et de jongler pourra souvent distraire les gens, gagner
    de l'argent ou obtenir des faveurs avec une épreuve d'adresse. Pour les autres, ils pourront se rendre ridicule, mais c'est tout.`,
    use: `Possibilité d'essayer des prestations artistiques sans malus à l'épreuve AD.`
  },
  {
    title: 'LANGUES DES MONSTRES',
    des: `Les monstres disent n'importe quoi, c'est bien connu. Pour le héros qui a fait des études dans ce domaine, pas de problème !
    Il comprendra les propos de la plupart des créatures douées de parole :
    les ogres, les trolls, les gnômes des forêts du nord, les kobolds, etc.`,
    use: `Compréhension générale des langues de monstres sans épreuve.`
  },
  {
    title: 'MÉFIANCE (INT)',
    des: `Quand le héros discute avec un personnage au cours d'une aventure,
    il peut utiliser la compétence de méfiance pour détecter si le personnage ment, ou pas.
    S'il réussit l'épreuve, le Grand Vilain MJ lui dira si c'est le cas. S'il échoue en revanche, il pourra lui raconter n'importe quoi...`,
    use: `Possibilité de tenter une épreuve d'INT pour savoir si un PNJ ment.`
  },
  {
    title: 'MENDIER ET PLEURNICHER (INT)',
    des: `Cette compétence permet au héros de gagner quelques pièces d'or entre deuxaventures,
    sans rien faire... Le montant sera tiré au dé, sur une décision du Grand Vilain MJ.`,
    use: `Gagner de l'or entre deux aventures, sur jet de dé (1D20 PO max.).`
  },
  {
    title: 'NAGER (AD, FO)',
    des: `Pas besoin de faire un dessin, le héros aura eu la chance d'apprendre à nager pendant sa jeunesse.
    Il bénéficie donc, non seulement de la possibilité de nager sans jeter un dé, mais d'un bonus de +5 aux épreuves liées à la nage
    (comme par exemple, essayer de sauver un équipier tombé dans la rivière).`,
    use: `Possibilité de nager, +5 à l'épreuve AD sur une épreuve impliquant de la nage.`
  },
  {
    title: 'NAÏVETÉ TOUCHANTE (CHA)',
    des: `Le personnage naïf est si mignon que les autres gens (joueurs et non joueurs) lui pardonnent plus aisément un acte stupide,
    ou des paroles déplacées. Il dispose d'un bonus de +5 à l'épreuve de charisme pour sauver sa peau dans ce genre de situation.`,
    use: `+5 à l'épreuve CHA pour éviter un conflit suite à un problème ou une bévue impliquant le héros.`,
    rp: `Le joueur doit trouver une excuse bidon !`
  },
  {
    title: 'PÉNIBLE (INT)',
    des: `Le héros est chiant, même quand il ne dit rien.
    Il agace les gens, aussi bien les aventuriers de sa compagnie que les personnages rencontrés au cours du jeu.
    Le Grand Vilain MJ peut lui demander de faire une épreuve d'intelligence dans ce genre de cas,
    pour savoir s'il se fait frapper ou non.`,
    use: `En cours de partie, le MJ décide que le héros a été chiant et que ses compagnons sont fâchés.
    Le héros peutessayer de sauver la situation en réussissant une épreuve INT (sans quoi, il se fait frapper).`
  },
  {
    title: 'PISTER (INT)',
    des: `Tout le monde peut suivre un troll à la trace, vu que généralement tout est cassé sur son chemin,
    mais pister peut également servir à poursuivre des animaux ou des adversaires beaucoup plus discrets,
    en se repérant à tous les signaux qu’ils ont pu laisser derrière eux.
    La compétence permet de bénéficier d'un bonus de +3 aux épreuves liées à cette discipline.
    Il est interdit de dire «Moi j'ai envie de pister».`,
    use: `+3 à l'épreuve INT sur une épreuve de pistage.`
  },
  {
    title: 'PREMIERS SOINS (AD, INT)',
    des: `Le personnage maîtrisant les premiers soins aura plein d'amis !
    Il peut faire récupérer quelques points de vie à ses camarades tombés au combat,
    pour peu qu'il réussisse une épreuve de moyenne AD/INT.
    Le Grand Vilain MJ prendra soin d'augmenter ou de diminuer la difficulté en fonction de la blessure.`,
    use: `Epreuve AD possible pour tenter de soigner quelqu'un (max 1D6 PV).`,
    part: `Sur un échec critique, le héros parvient à blesser encore plus son compagnon (-1D6 PV).`
  },
  {
    title: 'RADIN (CHA, INT)',
    des: `Cette compétence est innée chez les Nains... Le héros radin disposera d'un bonus de +4 sur son épreuve de charisme pour marchander
    (dans la limite d'une remise de 20%, non cumulable avec d'autres bonus). En contrepartie, il devra passer une épreuve d'intelligence +4
    quand il faut partager un butin ou une dépense avec le reste du groupe. S'il échoue, il y aura sans doute un conflit à régler !`,
    use: `+4 à l'épreuve CHA pour le marchandage, épreuve nécessaire INT+4 en cas de partage de butin (conflit).`
  },
  {
    title: 'RÉCUPÉRATION (PA)',
    des: `Les mages, les prêtres et les paladins ont besoin de se poser 1H par jour pour réviser leurs sortilèges ou prier.
    C'est comme ça... Et ce n'est pas la peine d'essayer d'y couper. Ils peuvent le faire à la place du repos,
    au détriment de la récupération d'un certain nombre de points de vie (voir les règles de récupération).`,
    use: `Obligation de faire une pause chaque jour pour continuer à pratiquer la magie / les prodiges. Récupère 4PA.`
  },
  {
    title: 'RESSEMBLE À RIEN',
    des: `Il est des gens dont personne ne se souvient, qui passent inaperçus. Le héros qui ne ressemble à rien dispose de ce talent.
    Certes, il ne sert pas à grand-chose, mais un jour il pourra peut-être lui sauver la vie,
    par exemple s'il est recherché par des gardes et qu'ils tombent sur lui par hasard.`,
    use: `Les PNJs ne se souviennent pas du héros.`
  },
  {
    title: 'RUNES BIZARRES (INT)',
    des: `Le héros disposant de cette compétence peut interpréter les écritures les plus étranges de laTerre de Fangh,
    pour peu qu'il réussisse une épreuve d'intelligence +4. Les autres, c'est pas de chance, ils n'ont même pas le droit d'essayer.`,
    use: `+4 à l'épreuve INT pour lire les langues bizarres.`
  },
  {
    title: 'SENTIR DES PIEDS',
    des: `Le héros concerné, s'il enlève ses bottes, éloigne les animaux (dangereux ou pas) quand il dort en milieu naturel.
    Dans une chambre d'auberge ou un dortoir, il incommode les autres équipiers qui dormiront moins bien (récupération moins bonne).
    Les équipiers qui sentent eux-mêmes des pieds ne sont pas incommodés.`,
    use: `Eloigne les prédateurs la nuit en bivouac, mais diminue le confort des chambres partagées par les alliés.`
  },
  {
    title: 'SERRURIER (AD)',
    des: `Dans certains villages éloignés de Fangh, les élèves serruriers sont souvent automatiquement pendus de manière préventive.
    En effet, dans un cas sur deux, ce n’est pas le noble art de la fabrication de serrure qui intéressentles apprentis
    mais bien comment fracturer le coffre du commerçant d’en face sans faire de bruit. La compétence de serrurier permet de pouvoir
    ouvrir n’importe quel porte ou mécanisme fonctionnant avec une serrure, avec une épreuv ed'adresse.
    Ceux qui n'ont pas la compétence auront le droit d'essayer,mais le Grand Vilain MJ leur rendra la vie dure
    avec une épreuve beaucoup plus ardue.`,
    use: `Epreuve AD possible pour tenter de crocheter une porte, un mécanisme.`
  },
  {
    title: 'TÊTE VIDE',
    des: `Les sorts affectant le psychique n'ont pas prise sur ce héros, car il ne dispose pas du capital nécessaire.
    C'est le cas des sorts de prise de contrôle, de terreur, d'illusion, de télépathie.`,
    use: `Résiste automatiquement à certains types de sortilèges, illusions ou malédictions.`
  },
  {
    title: 'TIRER CORRECTEMENT (AD)',
    des: `Tirer correctement permet d’utiliser une arme comme l’arc, le couteau de jet ou l’arbalète de manière efficace,
    avec une épreuve d'adresse. Pour donner un exemple, prenez l’elfe, et bien c’est exactement le contraire. Clair non ?
    Les gens qui n'ont pas cette compétence peuvent toujours essayer, mais le Grand Vilain MJ leur donnera du fil à retordre
    avec une épreuve plus difficile. De toutes façons, le fait d'avoir la compétence n'empêche pas de tirer accidentellement
    sur les petits copains...`,
    use: `Epreuve AD possible pour utiliser des armes de jet.`
  },
  {
    title: 'TOMBER DANS LES PIÈGE',
    des: `Une fois qu'il se retrouve affublé de cette tare grotesque, le héros sera toujours le premierà tomber dans un piège,
    dans le cas ou un groupe d'aventuriers marche dedans sans le détecter. Il n'avait qu'à faire attention.
    Si plusieurs aventuriers ont cette compétence, ils peuvent régler l'affaire avec un duel au dé.`,
    use: `Le héros se prend toujours le piège en premier.`
  },
  {
    title: 'TRUC DE MAUVIETTE (PR)',
    des: `Le héros n'a pas mal, même quand il a mal. Il serre les dents et continue de faire so nmalin,
    parce que la douleur est une simple information.
    Le héros qui rit des trucs de mauviette dispose d'une protection naturelle de 1 point supplémentaire (PR+1).`,
    use: `+1 au score de PR totale.`
  }
];
