import { TypeService } from '../models/type-service';
import { User } from '../models/user';

export interface ServiceI {
  id: number;
  name: string;
  description: string;
  instagram: string;
  twitter: string;
  wsp: string;
  urlWeb: string;
  enable: boolean;
  user: User;
  typeService: TypeService;
  typeServiceId: number;
}
