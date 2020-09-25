export interface RouteData {
  title: string;
  icon: string;
  formName?: string;
  subtitle?: string;
  placeholder?: string;
  nameLabel?: string;
  effectLabel?: string;
  useSelect?: boolean;
}

export interface Route {
  path: string;
  icon: string;
}
