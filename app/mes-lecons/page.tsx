'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Lesson {
  id: string;
  titre: string;
  competenceIds: string[];
  cuaLevel: string;
  prompt: string;
  createdAt: string;
}

export default function MyLessonsPage() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('lessons') || '[]');
    setLessons(data);
    setLoading(false);
  }, []);

  const deleteLesson = (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette leçon ?')) {
      const updated = lessons.filter(l => l.id !== id);
      setLessons(updated);
      localStorage.setItem('lessons', JSON.stringify(updated));
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-cfwb">🎓 CUA CFWB</Link>
          <div className="flex gap-4">
            <Link href="/" className="text-cfwb hover:text-blue-800">Accueil</Link>
            <Link href="/competences" className="text-cfwb hover:text-blue-800">Créer une leçon</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-cfwb mb-2">📖 Mes leçons</h1>
          <p className="text-gray-600">Gérez et consultez vos leçons créées avec CUA</p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="text-xl text-gray-600">Chargement...</div>
          </div>
        ) : lessons.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-2xl font-bold text-cfwb mb-2">Aucune leçon créée</h2>
            <p className="text-gray-600 mb-6">Commencez par créer votre première leçon basée sur les compétences CFWB</p>
            <Link
              href="/competences"
              className="inline-block bg-cua hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              ✨ Créer une leçon
            </Link>
          </div>
        ) : (
          <div className="grid gap-6">
            {lessons.map((lesson) => (
              <div key={lesson.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-cfwb mb-2">{lesson.titre}</h2>
                    <p className="text-gray-600 mb-4">{lesson.competenceIds.length} compétence(s) • Niveau: <span className="font-semibold text-cua">{lesson.cuaLevel}</span></p>
                    <p className="text-sm text-gray-500">
                      Créée le {new Date(lesson.createdAt).toLocaleDateString('fr-FR')} à{' '}
                      {new Date(lesson.createdAt).toLocaleTimeString('fr-FR')}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/lecons/${lesson.id}`}
                      className="bg-cfwb hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition"
                    >
                      Voir
                    </Link>
                    <button
                      onClick={() => deleteLesson(lesson.id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}