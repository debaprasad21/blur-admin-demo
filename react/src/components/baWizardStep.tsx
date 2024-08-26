// Converted from src/app/theme/components/baWizard/baWizardStep.directive.js

import React, { useState } from 'react';

interface BaWizardStepProps {
  title: string;
  form: any; // Replace 'any' with the specific type if available
  addTab: (tab: Tab) => void;
}

interface Tab {
  title: string;
  select: (isSelected: boolean) => void;
  submit: () => void;
  isComplete: () => boolean;
  isAvailiable: () => boolean;
  setPrev: (prevTab: Tab | undefined) => void;
}

const BaWizardStep: React.FC<BaWizardStepProps> = ({ title, form, addTab }) => {
  const [selected, setSelected] = useState<boolean>(true);
  const [prevTab, setPrevTab] = useState<Tab | undefined>(undefined);

  const select = (isSelected: boolean) => {
    setSelected(isSelected);
  };

  const submit = () => {
    if (form) {
      form.$setSubmitted(true);
    }
  };

  const isComplete = () => {
    return form ? form.$valid : true;
  };

  const isAvailiable = () => {
    return prevTab ? prevTab.isComplete() : true;
  };

  const setPrev = (pTab: Tab | undefined) => {
    setPrevTab(pTab);
  };

  const tab: Tab = {
    title,
    select,
    submit,
    isComplete,
    isAvailiable,
    setPrev,
  };

  addTab(tab);

  return (
    <div>
      {/* Render logic for the wizard step can be added here */}
    </div>
  );
};

export default BaWizardStep;
