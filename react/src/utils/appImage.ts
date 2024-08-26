// Converted from src/app/theme/filters/image/appImage.js

export function appImage(layoutPaths: { images: { root: string } }) {
  return function(input: string): string {
    return layoutPaths.images.root + input;
  };
}
