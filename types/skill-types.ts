interface Skill {
  image: string;
}

export interface SkillDataTypes {
  skills: Skill[];
}

export interface SkillCardDataTypes {
    professionalSkillSet: professionalSkillSetType[];
    languages: languagesType[];
  }
  
  export interface professionalSkillSetType {
    skillID: string;
    skillTitle: string;
    skillDetails: string;
  }
  
  export interface languagesType {
    languageID: string;
    languageName: string;
  }