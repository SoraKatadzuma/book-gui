import { AuthorDTO } from "./authordto";
import { PublicationDTO } from "./publicationdto";

export interface BookDTO {
  id?: number;
  name: string;
  added: Date | string;
  deleted?: Date;
  authors: Set<AuthorDTO>;
  publications: Set<PublicationDTO>;
}
