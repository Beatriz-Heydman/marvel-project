//Const
import { timestamp, PUBLIC_KEY, hash } from "../../keys";

export const CharacterRoute = `https://gateway.marvel.com/v1/public/comics/characters&ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`;
