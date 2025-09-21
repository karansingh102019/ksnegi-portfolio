export type FromType = React.ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;

 export interface LinkButtonProps {
  url: string;
  children: React.ReactNode;
}