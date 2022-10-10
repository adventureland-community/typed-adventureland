import axios from "axios";
import { writeFileSync } from "fs";
import { join } from "path";
export function updateData() {
  axios
    .get<string>("https://adventure.land/data.js")
    .then(function (response) {
      // handle success
      const js = response.data.trim();
      const data = js.substring(6, js.length - 1);
      const json = JSON.parse(data);
      json.timestamp = new Date();

      generateItemNames(json);
      generateMapNames(json);
      generateMonsterNames(json);
      generateSkillNames(json);
      // TODO: not all event names exist in G.events e.g. mrgreen, mrpumpkin,slenderman
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

updateData();
// npx ts-node data-to-types.ts

function generateItemNames(G: any) {
  // TODO: generate ItemType, WeaponType

  const itemsByType = groupBy(G.items, "type");
  let output = "";
  let itemNamesType = "export type ItemName =\n";
  const types: Array<[string, any]> = Object.entries(itemsByType);
  for (const [type, value] of types) {
    const typeName = type.charAt(0).toUpperCase() + type.slice(1) + "Name";
    output += `\nexport type ${typeName} = \n`;
    itemNamesType += `| ${typeName}\n`;
    const itemsByType: Array<[string, any]> = Object.entries(value);
    for (const [itemName, item] of itemsByType) {
      output += `| '${itemName}' // ${item.name}\n`;
    }
  }

  output += itemNamesType;

  writeFileSync(join(__dirname, "src/generated/item-names.ts"), output, {
    flag: "w",
  });
}

function generateMapNames(G: any) {
  const maps: Array<[string, any]> = Object.entries(G.maps);
  // maps can have instance = true, they can have event
  let output = "export type MapName = \n";
  for (const [mapName, map] of maps) {
    output += `${map.ignore ? "// " : ""}| '${mapName}' // ${map.name}${
      map.instance ? " [instance]" : ""
    }${map.event ? ` [event:${map.event}]` : ""}\n`;
  }

  writeFileSync(join(__dirname, "src/generated/map-names.ts"), output, {
    flag: "w",
  });
}

function generateMonsterNames(G: any) {
  const monsters: Array<[string, any]> = Object.entries(G.monsters);
  // maps can have instance = true, they can have event
  let output = "export type MonsterName = ";
  for (const [monsterName, monster] of monsters) {
    output += `| '${monsterName}' // ${monster.name}\n`;
  }

  writeFileSync(join(__dirname, "src/generated/monster.ts"), output, {
    flag: "w",
  });
}

function generateSkillNames(G: any) {
  // TODO: generate class specific types? some skills are class specific
  // TODO: there are also utility skills like move_up, snippet and so forth
  const skillsByType = groupBy(G.skills, "type");

  let output = "";

  const skills: Array<[string, any]> = Object.entries(skillsByType);
  for (const [type, value] of skills) {
    const typePostfix = `${type === "skill" ? "Name" : "SkillName"}`;
    const typeName = type.charAt(0).toUpperCase() + type.slice(1) + typePostfix;
    output += `\nexport type ${typeName} = \n`;
    const skillsByType: Array<[string, any]> = Object.entries(value);
    for (const [skillName, skill] of skillsByType) {
      output += `| '${skillName}' // ${skill.name}\n`;
    }
  }

  writeFileSync(join(__dirname, "src/generated/skill.ts"), output, {
    flag: "w",
  });
}

function groupBy(obj, propertyName) {
  const entries: Array<[string, any]> = Object.entries(obj);
  const grouped = {};
  for (const [key, entry] of entries) {
    const keyValue = entry[propertyName];
    if (!grouped[keyValue]) {
      grouped[keyValue] = {};
    }
    grouped[keyValue][key] = entry;
  }
  return grouped;
}
