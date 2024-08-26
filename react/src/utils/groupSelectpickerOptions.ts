// Converted from src/app/pages/form/inputs/widgets/select/GroupSelectpickerOptions.js

export function groupSelectpickerOptions<T>(items: T[], props: Record<string, string>): T[] {
  const out: T[] = [];

  if (Array.isArray(items)) {
    const keys = Object.keys(props);

    items.forEach((item) => {
      let itemMatches = false;

      for (let i = 0; i < keys.length; i++) {
        const prop = keys[i];
        const text = props[prop].toLowerCase();
        if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
          itemMatches = true;
          break;
        }
      }

      if (itemMatches) {
        out.push(item);
      }
    });
  } else {
    // Let the output be the input untouched
    return items;
  }

  return out;
}
