// Converted from src/app/theme/theme.config.js

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import baUtil from '../services/baUtil';

const useUiViewScrollDecorator = () => {
  const location = useLocation();

  useEffect(() => {
    const uiViewElement = document.querySelector('[autoscroll-body-top]');
    if (uiViewElement && baUtil.hasAttr(uiViewElement, 'autoscroll-body-top')) {
      window.scrollTo(0, 0);
    }
  }, [location]);
};

export default useUiViewScrollDecorator;
