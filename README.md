# Mise en situation — YouCode Workshop

**Durée · 45 minutes**  
**Modalité · Travail individuel**  
**Technologie · JavaScript Vanilla**

## Contexte

YouCode organise des ateliers et souhaite proposer une page d’inscription. Le participant choisit un atelier, un mode de participation et renseigne les informations correspondantes avant de confirmer son inscription.

Le HTML et le CSS sont fournis. Complétez `app.js` pour rendre la page interactive.

## Démarrage

1. Extraire l’archive dans un dossier.
2. Ouvrir le dossier dans votre éditeur.
3. Ouvrir `index.html` dans un navigateur, directement ou avec Live Server.
4. Ouvrir la console pour repérer les erreurs pendant le développement.

Les zones de choix sont initialement vides. Leur contenu doit être généré en JavaScript à partir des données et des templates fournis.

## Données fournies

- `config.ateliers` contient les ateliers, leur identifiant, leur titre et leur nombre de places.
- `config.modes` associe les valeurs `presentiel` et `distance` à leurs libellés.
- `config.campus` contient Youssoufia, Asfi et Nador.
- `selectedConfig` représente les choix du participant. Mettez ses propriétés à jour à partir de la saisie. Conservez un identifiant numérique dans `atelierId`.

## Travail demandé

### 1. Générer les choix

- Afficher uniquement les ateliers dont le nombre de places est strictement supérieur à zéro.
- Afficher le titre et le nombre de places de chaque atelier proposé.
- Afficher les deux modes de participation et les trois campus à partir de `config`.
- Utiliser les boutons radio des templates. Un seul choix doit être possible dans chaque groupe.
- Renseigner la valeur de chaque radio avec l’identifiant de l’atelier, la clé du mode ou le nom du campus correspondant.

### 2. Adapter le formulaire

| Mode sélectionné | Champ visible et actif | Champ masqué et désactivé |
| --- | --- | --- |
| En présentiel | Choix du campus | Adresse e-mail |
| À distance | Adresse e-mail | Choix du campus |

Avant la sélection d’un mode, les deux champs conditionnels restent masqués. À chaque changement de mode, adapter les champs obligatoires et retirer les messages d’erreur du champ devenu inactif.

### 3. Valider la confirmation

- Gérer les interactions avec `addEventListener()`.
- Empêcher le rechargement de la page lors de la soumission du formulaire.
- Vérifier qu’un atelier et un mode de participation sont sélectionnés.
- En présentiel, vérifier qu’un campus est sélectionné.
- À distance, vérifier que l’adresse e-mail est renseignée et que son format est valide.
- Afficher les erreurs dans les zones prévues, près des champs concernés.
- Actualiser les messages à chaque tentative et afficher le récapitulatif uniquement si les informations sont valides.

Le formulaire utilise `novalidate` pour vous laisser gérer les messages dans l’interface. Les propriétés de validation des champs restent utilisables en JavaScript.

### 4. Afficher le récapitulatif

- Utiliser le template fourni pour afficher le titre de l’atelier et le libellé du mode.
- Afficher le campus pour une participation en présentiel ou l’adresse e-mail pour une participation à distance.
- Adapter le libellé du dernier champ au mode choisi.
- Permettre de modifier le formulaire et de confirmer à nouveau. Le nouveau récapitulatif remplace le précédent.

## Templates disponibles

Pour chaque élément à afficher, clonez le contenu du template, complétez les textes et les valeurs, puis insérez le clone dans son conteneur. Vous pouvez utiliser `template.content.cloneNode(true)`.

| Template | Conteneur de destination | Éléments à compléter dans le clone |
| --- | --- | --- |
| `template-atelier` | `liste-ateliers` | `input`, `.atelier-titre`, `.atelier-places` |
| `template-mode` | `liste-modes` | `input`, `.mode-libelle` |
| `template-campus` | `liste-campus` | `input`, `.campus-libelle` |
| `template-recapitulatif` | `recapitulatif-contenu` | `.recap-atelier`, `.recap-mode`, `.recap-detail-libelle`, `.recap-detail-valeur` |

Le groupe `champ-campus` est un `fieldset` initialement désactivé. Son activation permet d’utiliser les radios qu’il contient. Le champ `email` est également désactivé au départ. Les blocs `champ-campus`, `champ-email` et `recapitulatif` utilisent l’attribut `hidden` pour gérer leur visibilité.

## Vérifications avant le rendu

| Test | Résultat attendu |
| --- | --- |
| Chargement de la page | Les ateliers Figma et JavaScript apparaissent avec leurs places. L’atelier VS Code, complet, est absent. |
| Confirmation sans sélection | Les messages signalent l’atelier et le mode manquants. |
| Choix du présentiel | Les campus Youssoufia, Asfi et Nador apparaissent. |
| Confirmation en présentiel sans campus | Un message demande de choisir un campus. |
| Confirmation avec un campus | Le récapitulatif affiche l’atelier, le mode et le campus. |
| Passage à distance | Le champ e-mail apparaît et les campus sont masqués et désactivés. |
| Confirmation avec un e-mail vide ou invalide | Un message d’erreur apparaît près du champ e-mail. |
| Nouvelle confirmation avec un e-mail valide | Un seul récapitulatif affiche les derniers choix et l’e-mail. |

## Rendu attendu

Remettre le dossier contenant `index.html`, `styles.css`, `app.js` complété et ce README. Être capable d’expliquer les événements utilisés, le clonage des templates, la validation et la mise à jour de `selectedConfig`.
