import axios from "axios";
import { DeepObject } from "./helpers/DeepObject";

export type RawData = DeepObject<3>;

let cachedData: RawData | null = null;

/**
 * Retrieves the G json object from the game servers.
 */
export async function getGData() {
  if (cachedData) {
    return cachedData;
  }

  console.log("Downloading data.js");

  const response = await axios.get<string>("https://adventure.land/data.js");

  const js = response.data.trim();
  const data = js.substring(6, js.length - 1);
  const json = JSON.parse(data);
  json.timestamp = Date.now();

  console.log(`data.js v${json.version} fetched`);

  cachedData = json;

  return json as RawData;
}
