import { Rules } from '../../../core/models/app.model';
export interface AppState {
  rules: Rules | null;
  isLoading: boolean;
  error: boolean;
}
