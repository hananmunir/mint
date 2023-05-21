export type SelectOption = {
  label: string;
  value: string;
};
export type SelectComponentProps = {
  placeholder: string;
  options: SelectOption[];
  value?: string;
  onValueChange: (value: string) => void;
  onOpenChange?: (open: boolean) => void;
  className?: string;
};
