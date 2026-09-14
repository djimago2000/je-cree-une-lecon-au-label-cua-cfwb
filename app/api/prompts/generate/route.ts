import { NextRequest, NextResponse } from 'next/server';

const generateEurekaCUAPrompt = (
  competenceIds: string[],
  cuaLevel: string,
  competenceDetails: any[]
): string => {
  const competenceNames = competenceDetails.map(c => c.nom).join(', ');
  
  const cuaGuidelines = {
    standard: 'Crée une leçon standard suivant les référentiels CFWB.',
    accessible: 'Crée une leçon accessible avec des aménagements pour les élèves en difficulté. Inclus des supports visuels, des explications simplifiées et des alternatives modales.',
    universal: 'Crée une leçon suivant les principes de la Conception Universelle de l\'Apprentissage (CUA). Inclus: 1) Multiples modes de représentation (visuel, auditif, kinesthésique), 2) Multiples modes d\'engagement (motivant, flexible, autonome), 3) Multiples modes d\'expression (oral, écrit, créatif).',
  };

  const prompt = `
DEMANDE: Créer un plan de leçon pour enseignants

CONTEXTE:
- Compétences CFWB à développer: ${competenceNames}
- Niveau CUA demandé: ${cuaLevel}
- Public: Élèves de primaire

DIRECTIVE: ${cuaGuidelines[cuaLevel as keyof typeof cuaGuidelines]}

STRUCTURE REQUISE:
1. **Objectifs d'apprentissage** (clairs et mesurables)
2. **Activités d'introduction** (10 min - capter l'attention)
3. **Contenu principal** (20 min - explications avec exemples)
4. **Activités pratiques** (15 min - mise en pratique)
5. **Évaluation formative** (critères de réussite)
6. **Ressources nécessaires** (matériels, documents, médias)
7. **Aménagements CUA** (selon le niveau choisi)
8. **Extensions/Approfondissements** (pour élèves avancés)

FORMAT: Structure la réponse de manière claire et structurée, prête pour EurekaCUA.
  `;

  return prompt;
};

interface GeneratePromptRequest {
  competenceIds: string[];
  cuaLevel: 'standard' | 'accessible' | 'universal';
  competenceDetails?: any[];
}

export async function POST(request: NextRequest) {
  try {
    const body: GeneratePromptRequest = await request.json();
    const { competenceIds, cuaLevel, competenceDetails = [] } = body;

    if (!competenceIds || competenceIds.length === 0) {
      return NextResponse.json(
        { error: 'Au moins une compétence doit être sélectionnée' },
        { status: 400 }
      );
    }

    const prompt = generateEurekaCUAPrompt(competenceIds, cuaLevel, competenceDetails);

    return NextResponse.json({
      id: `PROMPT_${Date.now()}`,
      contenu: prompt,
      competences: competenceIds,
      cuaLevel,
      generatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}