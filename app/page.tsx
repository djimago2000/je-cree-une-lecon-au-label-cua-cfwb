'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-700">🎓 CUA CFWB</div>
          <div className="flex gap-4">
            <Link href="/" className="text-blue-700 hover:text-blue-900 font-semibold">Accueil</Link>
            <Link href="/competences" className="text-blue-700 hover:text-blue-900 font-semibold">Créer une leçon</Link>
            <Link href="/mes-lecons" className="text-blue-700 hover:text-blue-900 font-semibold">Mes leçons</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-700 mb-4">
            🎓 Je crée une leçon au label CUA
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Plateforme de création de leçons inclusives basées sur les compétences CFWB
          </p>
          <Link
            href="/competences"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition"
          >
            ✨ Commencer maintenant
          </Link>
        </div>

        {/* CUA Principles */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-blue-700 mb-4">1️⃣ Représentation</h3>
            <p className="text-gray-600">
              Présenter l'information de plusieurs façons :
              texte, images, vidéos, diagrammes...
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-2xl font-bold text-blue-700 mb-4">2️⃣ Engagement</h3>
            <p className="text-gray-600">
              Offrir différentes façons de s'impliquer :
              choix, autonomie, feedback régulier...
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold text-blue-700 mb-4">3️⃣ Expression</h3>
            <p className="text-gray-600">
              Permettre plusieurs moyens de démontrer ses connaissances :
              écrit, oral, créatif...
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-lg shadow-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
            📚 Fonctionnalités
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-2">
                  Sélectionner les compétences CFWB
                </h4>
                <p className="text-gray-600">
                  Accès direct aux référentiels officiels des compétences
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-2">
                  Appliquer les principes CUA
                </h4>
                <p className="text-gray-600">
                  Conception Universelle de l'Apprentissage intégrée
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-2">
                  Générer des prompts IA
                </h4>
                <p className="text-gray-600">
                  Automatiquement adaptés pour EurekaCUA ou ChatGPT
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-2">
                  Créer des leçons inclusives
                </h4>
                <p className="text-gray-600">
                  Accessibles pour tous les apprenants
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg shadow-lg p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à créer une leçon inclusive ?
          </h2>
          <p className="text-lg mb-8">
            Sélectionnez les compétences CFWB et générenz automatiquement un prompt EurekaCUA
          </p>
          <Link
            href="/competences"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            🚀 Commencer maintenant
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-20 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="mb-4">
            Plateforme développée pour les enseignants du système éducatif francophone
          </p>
          <p className="text-gray-400">
            © 2026 CUA CFWB - Tous les droits réservés
          </p>
        </div>
      </footer>
    </main>
  );
}