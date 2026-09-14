'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface Lesson {
  id: string;
  titre: string;
  competenceIds: string[];
  cuaLevel: string;
  prompt: string;
  createdAt: string;
}

export default function LessonPage() {
  const params = useParams();
  const lessonId = params.id as string;
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const lessons = JSON.parse(localStorage.getItem('lessons') || '[]');
    const found = lessons.find((l: Lesson) => l.id === lessonId);
    setLesson(found || null);
  }, [lessonId]);

  const copyToClipboard = () => {
    if (lesson) {
      navigator.clipboard.writeText(lesson.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cfwb to-cua flex items-center justify-center">
        <div className="text-center">
          <div className="text-white text-2xl mb-4">Leçon non trouvée</div>
          <Link href="/mes-lecons" className="text-white underline">
            Retour aux leçons
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-cfwb">🎓 CUA CFWB</Link>
          <div className="flex gap-4">
            <Link href="/" className="text-cfwb hover:text-blue-800">Accueil</Link>
            <Link href="/mes-lecons" className="text-cfwb hover:text-blue-800">Mes leçons</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h1 className="text-4xl font-bold text-cfwb mb-4">{lesson.titre}</h1>
          <div className="flex gap-4 flex-wrap">
            <div className="bg-blue-100 text-cfwb px-4 py-2 rounded-lg font-semibold">
              📚 {lesson.competenceIds.length} compétence{lesson.competenceIds.length !== 1 ? 's' : ''}
            </div>
            <div className="bg-green-100 text-cua px-4 py-2 rounded-lg font-semibold">
              ♿ Niveau: {lesson.cuaLevel}
            </div>
            <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg">
              📅 {new Date(lesson.createdAt).toLocaleDateString('fr-FR')}
            </div>
          </div>
        </div>

        {/* Prompt Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-cfwb mb-4">📝 Prompt EurekaCUA</h2>
          <p className="text-gray-600 mb-4">
            Ce prompt a été généré automatiquement selon les principes CUA. 
            Vous pouvez le copier et l'envoyer directement à EurekaCUA ou à une IA générative.
          </p>
          
          {/* Prompt Box */}
          <div className="bg-gray-50 border-2 border-cua rounded-lg p-6 mb-4">
            <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
              {lesson.prompt}
            </pre>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={copyToClipboard}
              className={`flex-1 min-w-[200px] font-bold py-3 px-6 rounded-lg text-white transition ${
                copied
                  ? 'bg-green-600'
                  : 'bg-cua hover:bg-green-700'
              }`}
            >
              {copied ? '✓ Copié !' : '📋 Copier le prompt'}
            </button>
            <a
              href="https://www.edhuman.org/post/97380749"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[200px] bg-cfwb hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition text-center"
            >
              🚀 Envoyer à EurekaCUA
            </a>
          </div>
        </div>

        {/* CUA Info */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg shadow-lg p-8 mb-6 border-l-4 border-cua">
          <h3 className="text-2xl font-bold text-cfwb mb-4">🎯 Principes CUA appliqués</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-cua mb-2 text-lg">1️⃣ Représentation</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Texte écrit clair</li>
                <li>✓ Images et diagrammes</li>
                <li>✓ Supports accessibles</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-cua mb-2 text-lg">2️⃣ Engagement</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Choix et autonomie</li>
                <li>✓ Pertinence et contexte</li>
                <li>✓ Feedback régulier</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-cua mb-2 text-lg">3️⃣ Expression</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Plusieurs formats</li>
                <li>✓ Modes d'output variés</li>
                <li>✓ Flexibilité d'expression</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <Link
            href="/competences"
            className="flex-1 bg-cua hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-center transition"
          >
            ✨ Créer une nouvelle leçon
          </Link>
          <Link
            href="/mes-lecons"
            className="flex-1 bg-cfwb hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg text-center transition"
          >
            ← Retour aux leçons
          </Link>
        </div>
      </div>
    </main>
  );
}