export interface SocialLinks {
  gitHub?: string;
  facebook?: string;
  linkedIn?: string;
  instagram?: string;
}

export interface SiteHeaderDataTypes {
  profilePicture: string;
  name: string;
  designation: string;
  socials: {
    gitHub: string;
    facebook: string;
    linkedIn: string;
    instagram: string;
  };
  bioHeadings: string;
  bioTitle: string;
  bioDetails: string;
}

export interface SiteHeaderDataResponse {
  data: SiteHeaderDataTypes[];
}

export interface SelectedItem {
  _id?: string;
  profilePicture?: string;
  name?: string;
  designation?: string;
  socials?: SocialLinks;
  bioHeadings?: string;
  bioTitle?: string;
  bioDetails?: string;
}

export interface SiteHeaderFormTypes {
  selectedItem: SelectedItem | null;
  setSelectedItem: React.Dispatch<React.SetStateAction<SelectedItem | null>>;
  onClose: (value: boolean) => void;
}

export interface SiteHeaderTableTypes {
  data: SiteHeaderDataTypes[] | null;
  onEdit: (item: SelectedItem) => void;
  onClose: (isOpen: boolean) => void;
}
