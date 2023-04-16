//Types
import { Thumbnail } from "../../types";

export function formatThumbnail(thumbnail: Thumbnail) {
  return thumbnail.path + "." + thumbnail.extension;
}
