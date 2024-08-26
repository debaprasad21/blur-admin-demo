// Converted from src/app/theme/filters/image/kameleonImg.js

export function kameleonImg(layoutPaths: { images: { root: string } }): (input: string) => string {
  return function(input: string): string {
    return `${layoutPaths.images.root}theme/icon/kameleon/${input}.svg`;
  };
}
