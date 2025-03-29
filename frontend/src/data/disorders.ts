import { DisordersData, RelatedSymptoms } from '../types';

export const disordersData: DisordersData = {
    'Arthritis': ['joint_stiffness', 'joint_swelling', 'joint_pain', 'oesteoarthritis', 'painful_walking', 'stiff_neck', 'fatigue', 'malaise', 'flare', 'deformity', 'bony_outgrowth_in_fingers', 'bony_outgrowth_in_toes', 'muscle_weakness'],
    'Gout': ['joint_stiffness', 'joint_swelling', 'redness_in_big_toe', 'pain_in_ankles', 'pain_in_knees'],
    'Myopathy': ['muscle_weakness', 'muscle_cramps', 'muscle_stiffness', 'muscle_spasms', 'fatigue_with_exertion', 'lack_of_energy'],
    'Polymyositis': ['muscle_weakness', 'difficulty_swallowing', 'muscle_pain', 'muscle_tenderness', 'fatigue'],
    'Dermatomyositis': ['muscle_weakness', 'swelling_around_eye', 'rash', 'fatigue', 'weight_loss'],
    'Rhabdomyolysis': ['muscle_pain', 'muscle_weakness', 'dark_urine', 'nausea', 'irregular_heartbeat'],
    'Myasthenia Gravis': ['muscle_weakness', 'drooping_eyelids', 'difficulty_swallowing', 'breathlessness', 'weakness'],
    'Toxic Myopathy': ['muscle_pain', 'muscle_tenderness', 'weakness', 'fatigue', 'dark_urine'],
    'Fibromyalgia': ['muscle_pain', 'muscle_tenderness', 'fatigue', 'headache', 'depression', 'anxiety'],
    'Compartment Syndrome': ['severe_pain_in_muscle_compartment', 'swelling', 'tightness', 'numbness_in_specific_compartment', 'decreased_movement', 'loss_of_circulation'],
    'Tendonitis': ['inflammation_of_tendons', 'pain_and_stiffness_during_movement', 'swelling_in_shoulders', 'swelling_in_elbows', 'swelling_in_knees', 'swelling_in_heels'],
    'Bursitis': ['inflammation_of_bursae', 'swelling', 'restricted_movement', 'joint_pain', 'joint_swelling', 'muscle_tenderness'],
    'Chronic Fatigue Syndrome': ['muscle_fatigue', 'difficulty_concentrating', 'joint_pain', 'muscle_pain', 'extreme_exhaustion'],
    'Pyomyocitis': ['fever', 'chills', 'muscle_pain', 'swelling', 'redness'],
    'Lactic Acidosis': ['muscle_pain', 'muscle_cramps', 'rapid_breathing', 'nausea', 'weakness'],
    'Lupus': ['butterfly_shaped_rash_on_face', 'red_bumps', 'sensitivity_to_sunlight', 'hair_loss', 'joint_pain', 'joint_stiffness', 'joint_swelling', 'fatigue'],
    "Sjogren's Syndrome": ['dry_eyes', 'dry_mouth', 'dry_skin', 'fatigue', 'joint_pain', 'joint_stiffness', 'muscle_weakness', 'difficulty_swallowing', 'difficulty_talking', 'difficulty_concentrating', 'taste_loss', 'tooth_decay'],
    'Neuropathic Arthropathy': ['joint_pain', 'joint_swelling', 'joint_redness', 'deformity_of_joints', 'weight_fluctuation', 'loss_of_sensation', 'diabetes'],
    'Ehlers-Danlos': ['loose_joints', 'stretchy_skin', 'fragile_skin', 'skin_bruises', 'chronic_pain', 'fatigue', 'cognitive_impairment', 'headache', 'gastrointestinal_issues'],
    'Osteoporosis': ['back_pain', 'loss_of_height_over_time', 'stooped_posture', 'brittle_or_fragile_bones', 'weak_grip_strength', 'increased_frequency_of_fractures'],
    'Osteoarthritis': ['joint_pain', 'joint_stiffness', 'joint_tenderness', 'loss_of_flexibility', 'bone_spurs', 'joint_swelling', 'joints_pop_or_crackle_often'],
    'Rickets': ['delayed_growth_and_motor_skills', 'spine_pain', 'pelvis_pain', 'leg_pain', 'muscle_weakness', 'bowed_legs', 'thickened_wrists_and_ankles', 'breastbone_projection'],
    'Osteosarcoma': ['bone_pain', 'swelling_and_tenderness_near_affected_area', 'weakened_bones', 'broken_bones', 'exhaustion', 'severe_or_extreme_weight_loss_over_a_short_period_of_time']
};

export const initialQuestions = [
    'joint_pain',
    'muscle_pain',
    'fatigue',
    'swelling',
    'bone_pain'
];

export const relatedSymptoms: RelatedSymptoms = {
    'joint_pain': ['joint_stiffness', 'joint_swelling', 'joint_tenderness', 'joint_redness', 'joints_pop_or_crackle_often'],
    'muscle_pain': ['muscle_weakness', 'muscle_cramps', 'muscle_stiffness', 'muscle_spasms', 'muscle_tenderness'],
    'fatigue': ['muscle_fatigue', 'fatigue_with_exertion', 'lack_of_energy', 'extreme_exhaustion'],
    'swelling': ['swelling_around_eye', 'swelling_in_shoulders', 'swelling_in_elbows', 'swelling_in_knees', 'swelling_in_heels'],
    'bone_pain': ['back_pain', 'spine_pain', 'pelvis_pain', 'leg_pain', 'weakened_bones']
}; 