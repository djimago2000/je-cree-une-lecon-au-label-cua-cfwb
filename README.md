# 🎓 Je crée une leçon au label CUA - CFWB

**Plateforme complète pour créer des leçons inclusives basées sur les compétences CFWB avec les principes de Conception Universelle de l'Apprentissage (CUA)**

![Status](https://img.shields.io/badge/Status-Active-brightgreen) ![License](https://img.shields.io/badge/License-MIT-blue) ![Version](https://img.shields.io/badge/Version-1.0.0-blue)

---

## 🎯 Qu'est-ce que c'est ?

Une plateforme web innovante qui permet aux enseignants de :

✅ **Sélectionner les compétences CFWB** - Accès direct aux référentiels officiels
✅ **Appliquer les principes CUA** - Conception Universelle de l'Apprentissage
✅ **Générer des prompts IA** - Automatiquement adaptés pour EurekaCUA
✅ **Créer des leçons inclusives** - Accessibles pour tous les apprenants
✅ **Exporter et partager** - Facilement utilisables en classe

---

## 🌍 Les 3 Principes CUA Intégrés

### 1️⃣ **Représentation**
Présenter l'information de plusieurs façons :
- Texte écrit clair et structuré
- Images, diagrammes et schémas
- Contenus audio et vidéo
- Codes couleurs et supports visuels

### 2️⃣ **Engagement**
Offrir différentes façons de s'impliquer :
- Choix et autonomie dans les activités
- Contextes pertinents et motivants
- Feedback régulier et constructif
- Défis adaptés au niveau

### 3️⃣ **Expression**
Permettre plusieurs moyens de démontrer ses connaissances :
- Réponses écrites, orales ou créatives
- Projets individuels ou collaboratifs
- Présentations multimédias
- Portfolio et auto-évaluation

*Source: [CAST - Universal Design for Learning Guidelines 2.0](https://udlguidelines.cast.org/)*

---

## 🚀 Démarrage Rapide

### Installation locale

```bash
# 1. Cloner le repository
git clone https://github.com/djimago2000/je-cree-une-lecon-au-label-cua-cfwb.git
cd je-cree-une-lecon-au-label-cua-cfwb

# 2. Installer les dépendances
npm install

# 3. Copier le fichier d'environnement
cp .env.example .env.local

# 4. Lancer le serveur de développement
npm run dev
```

Accéder à http://localhost:3000 🎉

### Déploiement sur Vercel (Recommandé - 1 clic!)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdjimago2000%2Fje-cree-une-lecon-au-label-cua-cfwb)

Ou :
1. Accéder à https://vercel.com
2. Cliquer sur "New Project"
3. Importer ce repository GitHub
4. Cliquer sur "Deploy"

**Votre plateforme sera en ligne en < 1 minute! 🚀**

---

## 📖 Comment utiliser la plateforme ?

### Étape 1️⃣ : Accueil
- Découvrez les 3 principes CUA
- Comprenez comment la plateforme fonctionne

### Étape 2️⃣ : Sélectionner les compétences
- Parcourez les compétences CFWB par domaine
- Sélectionnez les compétences que vous voulez enseigner
- Consultez les attendus associés

### Étape 3️⃣ : Choisir le niveau CUA
- **Standard** : Leçon classique suivant les référentiels
- **Accessible** : Avec aménagements pour les élèves en difficulté
- **Universal** : Conception universelle complète

### Étape 4️⃣ : Générer la leçon
- La plateforme génère automatiquement un prompt
- Optimisé pour EurekaCUA ou toute IA générative
- Structure complète avec tous les aménagements CUA

### Étape 5️⃣ : Utiliser la leçon
- Copier le prompt généré
- L'envoyer à EurekaCUA ou ChatGPT
- Affiner et adapter selon vos besoins
- Télécharger les ressources

---

## 📁 Structure du projet

```
.
├── app/
│   ├── page.tsx                    # Page d'accueil
│   ├── layout.tsx                  # Layout principal
│   ├── globals.css                 # Styles globaux
│   ├── competences/page.tsx        # Sélection des compétences
│   ├── mes-lecons/page.tsx         # Gestion des leçons
│   ├── lecons/[id]/page.tsx        # Détail d'une leçon
│   └── api/
│       ├── competences/route.ts    # API des compétences
│       └── prompts/generate/route.ts # API de génération
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
└── .env.example
```

---

## 🛠️ Stack Technique

- **Frontend** : Next.js 14 + React 18 + TypeScript
- **Styling** : Tailwind CSS
- **State** : localStorage (pour MVP)
- **Hosting** : Vercel (recommandé)
- **Données** : Compétences CFWB intégrées

### Prochaines améliorations
- ✅ Base de données PostgreSQL
- ✅ Authentification utilisateurs
- ✅ Stockage cloud des leçons
- ✅ Intégration API EurekaCUA
- ✅ Export PDF/DOCX
- ✅ Partage de leçons

---

## 🔗 Intégrations

### EurekaCUA
La plateforme génère des prompts directement compatibles avec **EurekaCUA**.

**Lien** : https://www.edhuman.org/post/97380749

### CFWB - Compétences
Les compétences proviennent directement des référentiels CFWB.

**Lien** : https://www.enseignement.be/

### RTBF - Médias
Intégration possible avec les ressources médias RTBF.

**Lien** : https://www.rtbfmedia.be/rtbfinfo/referentiels/

---

## 📚 Documentation CUA

### Ressources officielles
- [CAST - UDL Guidelines 2.0](https://udlguidelines.cast.org/)
- [CAST - About Universal Design for Learning](https://www.cast.org/)
- [EDHUMAN - Plateforme d'accompagnement](https://www.edhuman.org/)

### PDF Référence
- [UDL Guidelines 2.0 - Version Française](https://udlguidelines.cast.org/static/udlg-graphicorganizer-v2-0-french.pdf)

---

## 🤝 Contribution

Les contributions sont bienvenues ! Veuillez :

1. Fork le repository
2. Créer une branche (`git checkout -b feature/ma-feature`)
3. Commiter vos changements (`git commit -m 'Add: ma feature'`)
4. Pousser (`git push origin feature/ma-feature`)
5. Ouvrir une Pull Request

---

## 📄 Licence

MIT - Libre d'utilisation à titre personnel et pédagogique.

---

## 👤 Auteur

**Alexandre Dumont**
- Email : alexandredumont@live.be
- GitHub : [@djimago2000](https://github.com/djimago2000)

---

## 📞 Support

Pour les questions ou problèmes :
1. Consultez la documentation
2. Ouvrez une issue GitHub
3. Contactez directement via email

---

## 🎓 Remerciements

- **CFWB** - Compétences de base et référentiels
- **CAST** - Universal Design for Learning
- **EDHUMAN** - Plateforme EurekaCUA
- **RTBF** - Ressources médias pédagogiques

---

**Dernière mise à jour** : Septembre 2026

**Statut** : ✅ Production-ready | 🚀 Déployable immédiatement