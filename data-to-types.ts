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
  const items: Array<[string, any]> = Object.entries(G.items);
  const itemTypes = {};
  for (const [itemName, item] of items) {
    if (!itemTypes[item.type]) {
      itemTypes[item.type] = {};
    }
    itemTypes[item.type][itemName] = item;
  }
  let output = "";
  let itemNamesType = "export type ItemName =\n";
  const types: Array<[string, any]> = Object.entries(itemTypes);
  for (const [type, value] of types) {
    const typeName = type.charAt(0).toUpperCase() + type.slice(1) + 'Name'
    output += `\nexport type ${typeName} = \n`;
    itemNamesType += `| ${typeName}\n`;
    const itemsByType: Array<[string, any]> = Object.entries(value);
    for (const [itemName, item] of itemsByType) {
      output += `| '${itemName}' // ${item.name}\n`;
    }
  }

  output += itemNamesType;

  writeFileSync(join(__dirname, "src/generated-item-names.ts"), output, { flag: "w" });
}
