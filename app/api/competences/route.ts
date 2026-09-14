import { NextRequest, NextResponse } from 'next/server';

const COMPETENCES_DATA = {
  competences: [
    {
      id: 'COMP_LIRE_001',
      domaine: 'Français - Lecture',
      nom: 'Identifier les éléments constitutifs d\'un texte narratif',
      description: 'Reconnaître et nommer les personnages, le cadre spatio-temporel, les actions principales.',
      niveau: 1,
      cycle: 'Primaire - 1er cycle',
      attendus: [
        'Identifier les personnages principaux et secondaires',
        'Reconnaître le lieu et le moment du récit',
        'Nommer les actions principales',
      ],
    },
    {
      id: 'COMP_MATH_001',
      domaine: 'Mathématiques - Nombres',
      nom: 'Comprendre et utiliser les nombres naturels jusqu\'à 100',
      description: 'Maîtriser la lecture, l\'écriture et la comparaison des nombres de 0 à 100.',
      niveau: 1,
      cycle: 'Primaire - 1er cycle',
      attendus: [
        'Lire et écrire les nombres jusqu\'à 100',
        'Comparer des nombres',
        'Ranger des nombres dans l\'ordre',
      ],
    },
    {
      id: 'COMP_SCIENCES_001',
      domaine: 'Sciences - Le vivant',
      nom: 'Observer et décrire les caractéristiques du vivant',
      description: 'Identifier les caractéristiques communes et différentes des êtres vivants.',
      niveau: 2,
      cycle: 'Primaire - 2e cycle',
      attendus: [
        'Observer des organismes vivants',
        'Décrire les caractéristiques observées',
        'Classer les êtres vivants',
      ],
    },
    {
      id: 'COMP_EPS_001',
      domaine: 'Éducation Physique et Sportive',
      nom: 'Se mouvoir avec aisance et assurance',
      description: 'Développer la coordination et l\'équilibre moteur.',
      niveau: 1,
      cycle: 'Primaire - 1er cycle',
      attendus: [
        'Marcher et courir avec équilibre',
        'Sauter et atterrir correctement',
        'Respecter son corps et celui des autres',
      ],
    },
    {
      id: 'COMP_EVEIL_001',
      domaine: 'Éveil - Géographie',
      nom: 'Se situer dans l\'espace',
      description: 'Comprendre l\'organisation de l\'espace.',
      niveau: 1,
      cycle: 'Primaire - 1er cycle',
      attendus: [
        'Utiliser des repères spatiaux',
        'Lire une carte simple',
        'Identifier les continents et océans',
      ],
    },
  ],
};

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(COMPETENCES_DATA);
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}