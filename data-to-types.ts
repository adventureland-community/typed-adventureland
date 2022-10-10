import axios from "axios";
import { writeFileSync } from "fs";
import { join } from "path";
export function updateData() {
  console.log("Downloading data.js");

  axios
    .get<string>("https://adventure.land/data.js")
    .then(function (response) {
      // handle success
      const js = response.data.trim();
      const data = js.substring(6, js.length - 1);
      const json = JSON.parse(data);
      json.timestamp = new Date();

      console.log(`data.js v${json.version} fetched`);

      generateItemNames(json);
      generateMapNames(json);
      generateMonsterNames(json);
      generateSkillNames(json);
      // TODO: not all event names exist in G.events e.g. mrgreen, mrpumpkin, slenderman
      // TODO: NPCName, NPCType, NPCRole
      console.log("Done");
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
  console.log(`Generating ${Object.keys(G.items).length} item names`);
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
  console.log(`Generating ${Object.keys(G.maps).length} map names`);
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
  console.log(`Generating ${Object.keys(G.monsters).length} monster names`);
  const monsters: Array<[string, any]> = Object.entries(G.monsters);
  // maps can have instance = true, they can have event
  let output = "export type MonsterName = ";
  for (const [monsterName, monster] of monsters) {
    output += `| '${monsterName}' // ${monster.name}\n`;
  }

  writeFileSync(join(__dirname, "src/generated/monster-names.ts"), output, {
    flag: "w",
  });
}

function generateSkillNames(G: any) {
  console.log(`Generating ${Object.keys(G.skills).length} skill names`);
  const skillsByType = groupBy(G.skills, "type");

  const output: { [key: string]: Array<[string, any]> } = {};

  const skills: Array<[string, any]> = Object.entries(skillsByType);
  for (const [type, value] of skills) {
    const skillsByType: Array<[string, any]> = Object.entries(value);
    for (const [skillName, skill] of skillsByType) {
      if (skill.class) {
        if (Array.isArray(skill.class)) {
          for (const className of skill.class) {
            if (!output[className]) {
              output[className] = [];
            }

            output[className].push([skillName, skill]);
          }
        } else {
          if (!output[skill.class]) {
            output[skill.class] = [];
          }

          output[skill.class].push([skillName, skill]);
        }
      } else {
        if (!output[type]) {
          output[type] = [];
        }
        output[type].push([skillName, skill]);
      }
    }
  }
  let allSkills = "\n export type AllSkillNames = \n";
  let stringOutput = "";
  for (const [type, skills] of Object.entries(output)) {
    const typePostfix = `${type === "skill" ? "Name" : "SkillName"}`;
    const typeName = type.charAt(0).toUpperCase() + type.slice(1) + typePostfix;

    stringOutput += `\nexport type ${typeName} = \n`;
    allSkills += `| ${typeName}\n`;
    for (const [skillName, skill] of skills) {
      stringOutput += `| '${skillName}' // ${skill.name}\n`;
    }
  }

  stringOutput += allSkills;

  writeFileSync(join(__dirname, "src/generated/skill-names.ts"), stringOutput, {
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
