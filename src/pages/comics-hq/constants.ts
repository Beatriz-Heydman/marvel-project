//Keys
import { timestamp, PUBLIC_KEY, hash } from "../../keys";

export const URLMarvel = `https://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}&offset=0`;
