export interface Tournament {
  ID: string;
  Location: string;
  Surface: string;
  Timestamp: string;
  TotalPrizeMoney: string;
  TournamentName: string;
  Winners: {
    doubles: string;
    singles: string;
  };
}

export interface TournamentApiResponse {
  Category: string;
  Tournaments: Tournament[];
}

