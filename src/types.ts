export type Game = {
    id: number;
    title: string;
    status: string;
    thumbnail: string;
    short_description: string;
    description: string;
    screenshots: screenshot[];
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
};

export type screenshot = {
    id: number;
    image: string;
};

export interface filterTypes {
    platform: string;
    sortBy: string;
    genre?: string;
}
