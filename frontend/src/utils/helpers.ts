import { Result } from '../types';
import { disordersData } from '../data/disorders';

export const formatSymptomText = (symptom: string): string => {
    return symptom.split('_').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
};

export const analyzeSymptoms = (presentSymptoms: string[]): Result[] => {
    const results: { [key: string]: number } = {};
    
    Object.entries(disordersData).forEach(([disorder, symptoms]) => {
        if (!symptoms.length) return;
        
        const matchingSymptoms = presentSymptoms.filter(symptom => 
            symptoms.includes(symptom)
        ).length;
        
        const matchPercentage = (matchingSymptoms / symptoms.length) * 100;
        
        if (matchPercentage > 0) {
            results[disorder] = matchPercentage;
        }
    });
    
    // Sort by percentage and take top 3
    return Object.entries(results)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 3)
        .map(([disorder, percentage]) => ({
            disorder,
            percentage
        }));
}; 