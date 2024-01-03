import { PublisherDTO } from "./publisherdto";

export interface PublicationDTO {
    publisher: PublisherDTO;
    edition: number;
    copyright?: Date;
}