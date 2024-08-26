// Converted from src/app/theme/components/baWizard/baWizardCtrl.js

import React, { useState, useEffect } from 'react';

interface Tab {
  setPrev: (prevTab: Tab | undefined) => void;
  submit: () => void;
  isAvailiable: () => boolean;
  select: (isSelected: boolean) => void;
}

const BaWizardCtrl: React.FC = () => {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [tabNum, setTabNum] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const addTab = (tab: Tab) => {
    tab.setPrev(tabs[tabs.length - 1]);
    setTabs((prevTabs) => [...prevTabs, tab]);
    selectTab(0);
  };

  const selectTab = (tabNum: number) => {
    tabs[tabNum].submit();
    if (tabs[tabNum].isAvailiable()) {
      setTabNum(tabNum);
      tabs.forEach((t, tIndex) => {
        t.select(tIndex === tabNum);
      });
    }
  };

  const isFirstTab = () => tabNum === 0;

  const isLastTab = () => tabNum === tabs.length - 1;

  const nextTab = () => selectTab(tabNum + 1);

  const previousTab = () => selectTab(tabNum - 1);

  useEffect(() => {
    setProgress(((tabNum + 1) / tabs.length) * 100);
  }, [tabNum, tabs.length]);

  return (
    <div>
      {/* Render logic for tabs and progress can be added here */}
    </div>
  );
};

export default BaWizardCtrl;
