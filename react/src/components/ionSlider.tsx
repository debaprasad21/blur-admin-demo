// Converted from src/app/theme/directives/ionSlider.js

import React, { useEffect, useRef } from 'react';
import 'ion-rangeslider/css/ion.rangeSlider.css';
import 'ion-rangeslider/js/ion.rangeSlider';

interface IonSliderProps {
  min: number;
  max: number;
  type: string;
  prefix?: string;
  maxPostfix?: string;
  prettify?: boolean;
  prettifySeparator?: string;
  grid?: boolean;
  gridMargin?: string;
  postfix?: string;
  step?: string;
  hideMinMax?: string;
  hideFromTo?: string;
  from?: number;
  to?: number;
  disable?: boolean;
  onChange?: (data: any) => void;
  onFinish?: (data: any) => void;
  values?: number[];
}

const IonSlider: React.FC<IonSliderProps> = ({
  min,
  max,
  type,
  prefix,
  maxPostfix,
  prettify,
  prettifySeparator,
  grid,
  gridMargin,
  postfix,
  step,
  hideMinMax,
  hideFromTo,
  from,
  to,
  disable,
  onChange,
  onFinish,
  values
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      const $slider = $(sliderRef.current);
      $slider.ionRangeSlider({
        min,
        max,
        type,
        prefix,
        maxPostfix,
        prettify_enabled: prettify,
        prettify_separator: prettifySeparator,
        grid,
        gridMargin,
        postfix,
        step,
        hideMinMax,
        hideFromTo,
        from,
        to,
        disable,
        onChange,
        onFinish,
        values
      });

      return () => {
        $slider.data("ionRangeSlider").destroy();
      };
    }
  }, [min, max, type, prefix, maxPostfix, prettify, prettifySeparator, grid, gridMargin, postfix, step, hideMinMax, hideFromTo, from, to, disable, onChange, onFinish, values]);

  return <div ref={sliderRef}></div>;
};

export default IonSlider;
