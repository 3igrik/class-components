import { OccupationBaseDto } from './occupation-base.interface.dto';

export interface CharacterDto {
  uid: string;
  name: string;
  gender: 'F';
  yearOfBirth: number;
  monthOfBirth: number;
  dayOfBirth: number;
  placeOfBirth: string;
  yearOfDeath: number;
  monthOfDeath: number;
  dayOfDeath: number;
  placeOfDeath: string;
  height: number;
  weight: number;
  deceased: boolean;
  bloodType: 'B_NEGATIVE';
  maritalStatus: 'SINGLE';
  serialNumber: string;
  hologramActivationDate: string;
  hologramStatus: string;
  hologramDateStatus: string;
  hologram: boolean;
  fictionalCharacter: boolean;
  mirror: boolean;
  alternateReality: boolean;
  performers: [[]];
  episodes: [[]];
  movies: [[]];
  characterSpecies: [[]];
  characterRelations: [[]];
  titles: [[]];
  occupations: OccupationBaseDto[];
  organizations: [[]];
}
