// Converted from src/app/theme/filters/image/profilePicture.js

export function profilePicture(input: string, ext: string = 'png'): string {
  const layoutPaths = {
    images: {
      profile: '/path/to/profile/images/' // Adjust this path as necessary
    }
  };
  return `${layoutPaths.images.profile}${input}.${ext}`;
}
