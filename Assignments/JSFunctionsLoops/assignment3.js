
function mergeSetting(savedSettingsJSON, defaultSettings) {
  const savedSettings = JSON.parse(savedSettingsJSON);
  const mergedObject = { ...defaultSettings, ...savedSettings };
  return {
    mergedObject: mergedObject,
    mergedJSON: JSON.stringify(mergedObject)
  };
}


const defaults = { theme: "white", volume: 20 };
const saved = '{"theme": "pink"}';

const result = mergeSetting(saved, defaults);
const jsonString = JSON.stringify(result);
console.log(jsonString);
console.log(result);
