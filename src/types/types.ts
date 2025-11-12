import { IconType } from 'react-icons';

export type FromType = React.ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;

 export interface LinkButtonProps {
  url: string;
  children: React.ReactNode;
}


export interface Skill {
  name: string;
  icon: IconType;
  color: string;
  iconColor: string;
}