// Converted from src/app/pages/form/inputs/widgets/oldSelect/select.html

import React, { useState } from 'react';
import { Form, FormGroup, FormControl } from 'react-bootstrap';

interface SelectItem {
  label: string;
  value: number;
  group?: string;
}

const OldSelectpickerPanelCtrl: React.FC = () => {
  const [standardSelected, setStandardSelected] = useState<SelectItem | null>(null);
  const [searchSelectedItem, setSearchSelectedItem] = useState<SelectItem | null>(null);
  const [groupedSelectedItem, setGroupedSelectedItem] = useState<SelectItem | null>(null);
  const [multipleSelectedItems, setMultipleSelectedItems] = useState<SelectItem[]>([]);
  const [multipleSelectedItems2, setMultipleSelectedItems2] = useState<SelectItem[]>([]);

  const standardSelectItems: SelectItem[] = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
    { label: 'Option 4', value: 4 },
  ];

  const selectWithSearchItems: SelectItem[] = [
    { label: 'Hot Dog, Fries and a Soda', value: 1 },
    { label: 'Burger, Shake and a Smile', value: 2 },
    { label: 'Sugar, Spice and all things nice', value: 3 },
    { label: 'Baby Back Ribs', value: 4 },
  ];

  const groupedSelectItems: SelectItem[] = [
    { label: 'Group 1 - Option 1', value: 1, group: 'Group 1' },
    { label: 'Group 2 - Option 2', value: 2, group: 'Group 2' },
    { label: 'Group 1 - Option 3', value: 3, group: 'Group 1' },
    { label: 'Group 2 - Option 4', value: 4, group: 'Group 2' },
  ];

  return (
    <Form>
      <FormGroup>
        <FormControl
          as="select"
          className="form-control selectpicker"
          value={standardSelected?.value || ''}
          onChange={(e) => {
            const selectedValue = parseInt(e.target.value, 10);
            setStandardSelected(standardSelectItems.find(item => item.value === selectedValue) || null);
          }}
        >
          <option value="" disabled>Select an option</option>
          {standardSelectItems.map(item => (
            <option key={item.value} value={item.value}>{item.label}</option>
          ))}
        </FormControl>
      </FormGroup>

      <FormGroup>
        <FormControl
          as="select"
          className="form-control selectpicker with-search"
          value={searchSelectedItem?.value || ''}
          onChange={(e) => {
            const selectedValue = parseInt(e.target.value, 10);
            setSearchSelectedItem(selectWithSearchItems.find(item => item.value === selectedValue) || null);
          }}
        >
          <option value="" disabled>Select an option</option>
          {selectWithSearchItems.map(item => (
            <option key={item.value} value={item.value}>{item.label}</option>
          ))}
        </FormControl>
      </FormGroup>

      <FormGroup>
        <FormControl
          as="select"
          className="form-control"
          value={groupedSelectedItem?.value || ''}
          onChange={(e) => {
            const selectedValue = parseInt(e.target.value, 10);
            setGroupedSelectedItem(groupedSelectItems.find(item => item.value === selectedValue) || null);
          }}
        >
          <option value="" disabled>Select an option</option>
          {groupedSelectItems.map(item => (
            <option key={item.value} value={item.value}>{item.label}</option>
          ))}
        </FormControl>
      </FormGroup>

      <FormGroup>
        <FormControl
          as="select"
          className="form-control"
          multiple
          value={multipleSelectedItems.map(item => item.value)}
          onChange={(e) => {
            const selectedValues = Array.from(e.target.selectedOptions, option => parseInt(option.value, 10));
            setMultipleSelectedItems(standardSelectItems.filter(item => selectedValues.includes(item.value)));
          }}
        >
          {standardSelectItems.map(item => (
            <option key={item.value} value={item.value}>{item.label}</option>
          ))}
        </FormControl>
      </FormGroup>

      <FormGroup>
        <FormControl
          as="select"
          className="form-control"
          multiple
          value={multipleSelectedItems2.map(item => item.value)}
          onChange={(e) => {
            const selectedValues = Array.from(e.target.selectedOptions, option => parseInt(option.value, 10));
            setMultipleSelectedItems2(standardSelectItems.filter(item => selectedValues.includes(item.value)));
          }}
        >
          {standardSelectItems.map(item => (
            <option key={item.value} value={item.value}>{item.label}</option>
          ))}
        </FormControl>
      </FormGroup>
    </Form>
  );
};

export default OldSelectpickerPanelCtrl;
