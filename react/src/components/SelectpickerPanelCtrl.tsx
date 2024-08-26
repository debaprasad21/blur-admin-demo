// Converted from src/app/pages/form/inputs/widgets/select/select.html

import React, { useState } from 'react';
import Select from 'react-select';

const SelectpickerPanelCtrl: React.FC = () => {
  const [selectedStandardItem, setSelectedStandardItem] = useState(null);
  const [selectedWithSearchItem, setSelectedWithSearchItem] = useState(null);
  const [selectedGroupedItem, setSelectedGroupedItem] = useState(null);
  const [selectedGroupedByItem, setSelectedGroupedByItem] = useState(null);
  const [selectedMultipleItems, setSelectedMultipleItems] = useState([]);
  const [selectedWithDeleteItem, setSelectedWithDeleteItem] = useState([]);

  const standardSelectItems = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
    { label: 'Option 4', value: 4 }
  ];

  const selectWithSearchItems = [
    { label: 'Hot Dog, Fries and a Soda', value: 1 },
    { label: 'Burger, Shake and a Smile', value: 2 },
    { label: 'Sugar, Spice and all things nice', value: 3 },
    { label: 'Baby Back Ribs', value: 4 }
  ];

  const groupedSelectItems = [
    { label: 'Group 1 - Option 1', value: 1, group: 'Group 1' },
    { label: 'Group 2 - Option 2', value: 2, group: 'Group 2' },
    { label: 'Group 1 - Option 3', value: 3, group: 'Group 1' },
    { label: 'Group 2 - Option 4', value: 4, group: 'Group 2' }
  ];

  const groupedBySelectItems = [
    { name: 'Adam', country: 'United States' },
    { name: 'Amalie', country: 'Argentina' },
    { name: 'Estefanía', country: 'Argentina' },
    { name: 'Adrian', country: 'Ecuador' },
    { name: 'Wladimir', country: 'Ecuador' },
    { name: 'Samantha', country: 'United States' },
    { name: 'Nicole', country: 'Colombia' },
    { name: 'Natasha', country: 'Ecuador' },
    { name: 'Michael', country: 'Colombia' },
    { name: 'Nicolás', country: 'Colombia' }
  ];

  const someGroupFn = (item: { name: string }) => {
    if (item.name[0] >= 'A' && item.name[0] <= 'M') return 'From A - M';
    if (item.name[0] >= 'N' && item.name[0] <= 'Z') return 'From N - Z';
  };

  const multipleSelectItems = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
    { label: 'Option 4', value: 4 },
    { label: 'Option 5', value: 5 },
    { label: 'Option 6', value: 6 },
    { label: 'Option 7', value: 7 },
    { label: 'Option 8', value: 8 }
  ];

  const withDeleteSelectItems = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
    { label: 'Option 4', value: 4 },
    { label: 'Option 5', value: 5 },
    { label: 'Option 6', value: 6 },
    { label: 'Option 7', value: 7 },
    { label: 'Option 8', value: 8 }
  ];

  return (
    <div>
      <Select
        options={standardSelectItems}
        value={selectedStandardItem}
        onChange={setSelectedStandardItem}
        placeholder="Standard Select"
      />
      <Select
        options={selectWithSearchItems}
        value={selectedWithSearchItem}
        onChange={setSelectedWithSearchItem}
        isSearchable
        placeholder="Select With Search"
      />
      <Select
        options={groupedSelectItems}
        value={selectedGroupedItem}
        onChange={setSelectedGroupedItem}
        placeholder="Select With Option Groups"
      />
      <Select
        options={groupedBySelectItems.map(item => ({
          label: item.name,
          value: item.name,
          group: someGroupFn(item)
        }))}
        value={selectedGroupedByItem}
        onChange={setSelectedGroupedByItem}
        placeholder="Select With Option Groups Function"
      />
      <Select
        options={multipleSelectItems}
        value={selectedMultipleItems}
        onChange={setSelectedMultipleItems}
        isMulti
        placeholder="Multiple Select"
      />
      <div className="input-group">
        <Select
          options={withDeleteSelectItems}
          value={selectedWithDeleteItem}
          onChange={setSelectedWithDeleteItem}
          isMulti
          placeholder="Select With Clear Button"
        />
        <span className="input-group-btn">
          <button
            type="button"
            onClick={() => setSelectedWithDeleteItem([])}
            className="btn btn-danger"
          >
            <span className="glyphicon glyphicon-trash"></span>
          </button>
        </span>
      </div>
    </div>
  );
};

export default SelectpickerPanelCtrl;
