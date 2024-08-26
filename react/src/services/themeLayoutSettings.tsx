// Converted from src/app/theme/theme.service.js

interface ThemeLayoutSettings {
  blur: boolean;
  mobile: boolean;
}

const themeLayoutSettings = (baConfig: { theme: { blur: boolean } }): ThemeLayoutSettings => {
  const isMobile = (/android|webos|iphone|ipad|ipod|blackberry|windows phone/).test(navigator.userAgent.toLowerCase());
  const mobileClass = isMobile ? 'mobile' : '';
  const blurClass = baConfig.theme.blur ? 'blur-theme' : '';
  document.body.classList.add(mobileClass, blurClass);

  return {
    blur: baConfig.theme.blur,
    mobile: isMobile,
  };
};

export default themeLayoutSettings;
