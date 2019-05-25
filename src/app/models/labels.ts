export const statsLabels: Array<any> = [
  {
    control: 'ev',
    label: 'Energie Vitale (EV)',
    placeholder: '0',
    effect: ''
  },
  {
    control: 'ea',
    label: 'Energie Astrale (EA)',
    placeholder: '0',
    effect: ''
  },
  { control: 'cou', label: 'Courage (COU)', placeholder: '0', effect: '' },
  {
    control: 'int',
    label: 'Intelligence (INT)',
    placeholder: '0',
    effect: ''
  },
  { control: 'cha', label: 'Charisme (CHA)', placeholder: '0', effect: '' },
  { control: 'ad', label: 'Adresse (AD)', placeholder: '0', effect: '' },
  { control: 'fo', label: 'Force (FO)', placeholder: '0', effect: '' },
  { control: 'atq', label: 'ATTAQUE (ATQ)', placeholder: '0', effect: '' },
  { control: 'prd', label: 'PARADE (PRD)', placeholder: '0', effect: '' }
];

export const magLabels: Array<any> = [
  { label: 'Magie Phy.', hint: 'Moyenne INT et AD', value: 0 },
  { label: 'Magie Psy.', hint: 'Moyenne INT et CHA', value: 0 },
  { label: 'Résist. Mag.', hint: 'Moyenne COU, INT et FO', value: 0 }
];

export const charLabels: Array<Object> = [
  {
    label: 'nom :',
    placeholder: 'nom',
    control: 'name',
    type: 'text',
    order: '1'
  },
  {
    label: 'origine :',
    placeholder: 'origine',
    control: 'ori',
    type: 'text',
    order: '2'
  },
  {
    label: 'métier(s) :',
    placeholder: 'métiers',
    control: 'job',
    type: 'text',
    order: '3'
  },
  {
    label: 'niveau :',
    placeholder: '0',
    control: 'niv',
    type: 'number',
    order: '5'
  },
  {
    label: 'expérience (XP) :',
    placeholder: '0',
    control: 'xp',
    type: 'number',
    order: '6'
  },
  {
    label: 'point de destin :',
    placeholder: '0',
    control: 'dp',
    type: 'number',
    order: '7'
  },
  {
    label: "mes richesses à moi que j'ai :",
    placeholder: '',
    control: 'none',
    type: '',
    order: '8'
  },
  {
    label: 'berylium :',
    placeholder: '0',
    control: 'ber',
    type: 'number',
    order: '9'
  },
  {
    label: 'thritil :',
    placeholder: '0',
    control: 'thi',
    type: 'number',
    order: '10'
  },
  {
    label: 'or :',
    placeholder: '0',
    control: 'gol',
    type: 'number',
    order: '11'
  },
  {
    label: 'argent :',
    placeholder: '0',
    control: 'sil',
    type: 'number',
    order: '12'
  },
  {
    label: 'cuivre :',
    placeholder: '0',
    control: 'cop',
    type: 'number',
    order: '13'
  }
];
