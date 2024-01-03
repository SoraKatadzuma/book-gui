export interface AuthorDTO {
  id?: number;
  fullName: string;
  dateOfBirth?: Date;
  dateOfDeath?: Date;
  pseudonyms?: Set<string>;
}