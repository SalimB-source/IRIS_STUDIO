# Iris Studio — export vitrine statique

Cette version conserve les pages, les animations, les transitions et les écrans de chargement. Elle n’utilise ni serveur, ni base de données, ni secrets Manus.

## Les images sont déjà migrées

Les 46 médias anciennement référencés via `/manus-storage/...` ont été copiés dans `public/assets/`. Les chemins du code ont été remplacés automatiquement. Vous n’avez donc aucun lien d’image à modifier pour publier cette version.

Pour changer une image plus tard, remplacez simplement le fichier correspondant dans `public/assets/` en conservant son nom. Aucun changement de code n’est nécessaire.

## Publication sur GitHub Pages

1. Créez un nouveau dépôt GitHub vide ou remplacez le contenu de votre dépôt actuel par ce dossier.
2. Envoyez tous les fichiers, y compris `.github/workflows/deploy.yml`.
3. Dans **Settings → Pages**, choisissez **GitHub Actions** comme source de déploiement.
4. Envoyez une modification sur la branche `main`. L’action fournie construit automatiquement le site avec le bon sous-chemin du dépôt.

Le dossier `dist/` est généré automatiquement et comprend un `404.html` qui garde les pages internes utilisables après un rechargement direct.

## Test local

```bash
pnpm install --no-frozen-lockfile
pnpm build
pnpm preview
```

## Contact

Le formulaire connecté au serveur a été remplacé par une page de contact vitrine. Les demandes commerciales peuvent être envoyées directement à Commercial@iris-dz.com ; LinkedIn et Instagram restent également disponibles.
