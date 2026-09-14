'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Competence {
  id: string;
  domaine: string;
  nom: string;
  description: string;
  niveau: number;
  cycle: string;
  attendus: string[];
}

export default function CompetencesPage() {
  const [competences, setCompetences] = useState<Competence[]>([]);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [cuaLevel, setCuaLevel] = useState<'standard' | 'accessible' | 'universal'>('universal');

  useEffect(() => {
    fetchCompetences();
  }, []);

  const fetchCompetences = async () => {
    try {
      const response = await fetch('/api/competences');
      const data = await response.json();
      setCompetences(data.competences);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleCompetence = (id: string) => {
    const newSelected = new Set(selected);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelected(newSelected);
  };

  const handleGenerateLesson = async () => {
    if (selected.size === 0) {
      alert('Veuillez sélectionner au moins une compétence');
      return;
    }

    const selectedCompDetails = competences.filter(c => selected.has(c.id));

    try {
      const response = await fetch('/api/prompts/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          competenceIds: Array.from(selected),
          cuaLevel,
          competenceDetails: selectedCompDetails,
        }),
      });

      const prompt = await response.json();
      
      // Sauvegarder la leçon
      const lesson = {
        id: `LESSON_${Date.now()}`,
        titre: `Leçon ${selectedCompDetails.map(c => c.domaine).join(', ')}`,
        competenceIds: Array.from(selected),
        cuaLevel,
        prompt: prompt.contenu,
        createdAt: new Date().toISOString(),
      };

      // Stocker dans localStorage
      const lessons = JSON.parse(localStorage.getItem('lessons') || '[]');
      lessons.push(lesson);
      localStorage.setItem('lessons', JSON.stringify(lessons));

      // Rediriger vers la page de la leçon
      window.location.href = `/lecons/${lesson.id}`;
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la génération de la leçon');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cfwb to-cua flex items-center justify-center">
        <div className="text-white text-2xl">Chargement des compétences...</div>
      </div>
    );
  }

  const groupedByDomain = competences.reduce((acc, comp) => {
    if (!acc[comp.domaine]) acc[comp.domaine] = [];
    acc[comp.domaine].push(comp);
    return acc;
  }, {} as Record<string, Competence[]>);

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

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Info CUA */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-cfwb mb-6">📚 Sélectionner les compétences CFWB</h2>
          
          {/* CUA Principles Info */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-8 border-l-4 border-cua">
            <h3 className="text-xl font-bold text-cfwb mb-4">🎯 Les 3 principes CUA</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-cua mb-2">1️⃣ Représentation</h4>
                <p className="text-sm text-gray-700">Présenter l'information de plusieurs façons (texte, images, audio, vidéo)</p>
              </div>
              <div>
                <h4 className="font-bold text-cua mb-2">2️⃣ Engagement</h4>
                <p className="text-sm text-gray-700">Offrir différentes façons de s'impliquer et de rester motivé</p>
              </div>
              <div>
                <h4 className="font-bold text-cua mb-2">3️⃣ Expression</h4>
                <p className="text-sm text-gray-700">Permettre plusieurs moyens de démontrer ses connaissances</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-4">Source: CAST - Universal Design for Learning Guidelines 2.0</p>
          </div>

          {/* CUA Level Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-cfwb mb-4">Choisir le niveau CUA:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { value: 'standard', label: 'Standard', desc: 'Leçon classique CFWB' },
                { value: 'accessible', label: 'Accessible', desc: 'Avec aménagements pour difficultés' },
                { value: 'universal', label: 'Universal (CUA)', desc: 'Design universel complet' },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setCuaLevel(option.value as any)}
                  className={`p-4 rounded-lg border-2 transition ${
                    cuaLevel === option.value
                      ? 'border-cua bg-green-50 shadow-lg'
                      : 'border-gray-300 hover:border-cua'
                  }`}
                >
                  <div className="font-bold text-cfwb">{option.label}</div>
                  <div className="text-sm text-gray-600">{option.desc}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Competences Selection */}
        <div className="space-y-6">
          {Object.entries(groupedByDomain).map(([domain, comps]) => (
            <div key={domain} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-cua mb-4 pb-2 border-b-2 border-cua">
                {domain}
              </h3>
              <div className="space-y-3">
                {comps.map((comp) => (
                  <label
                    key={comp.id}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition ${
                      selected.has(comp.id)
                        ? 'border-cua bg-green-50 shadow'
                        : 'border-gray-300 hover:border-cua'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={selected.has(comp.id)}
                        onChange={() => toggleCompetence(comp.id)}
                        className="mt-1 w-5 h-5 text-cua rounded"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-cfwb">{comp.nom}</p>
                        <p className="text-sm text-gray-600 mb-2">{comp.description}</p>
                        <div className="text-xs text-gray-500">
                          Niveau {comp.niveau} • {comp.cycle}
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {comp.attendus.map((attendu, idx) => (
                            <span key={idx} className="text-xs bg-blue-100 text-cfwb px-2 py-1 rounded">
                              {attendu}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4">
          <button
            onClick={handleGenerateLesson}
            disabled={selected.size === 0}
            className="flex-1 bg-cua hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-lg text-lg transition"
          >
            ✨ Générer la leçon ({selected.size} compétence{selected.size !== 1 ? 's' : ''})
          </button>
          <Link
            href="/"
            className="bg-cfwb hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-lg text-lg transition"
          >
            ← Retour
          </Link>
        </div>
      </div>
    </main>
  );
}