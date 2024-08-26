// Converted from src/app/pages/form/inputs/widgets/tagsInput/tagsInput.directive.js

import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';
import 'bootstrap-tagsinput/dist/bootstrap-tagsinput.css';

interface TagInputProps {
  tagClass: string;
}

const TagInput: React.FC<TagInputProps> = ({ tagClass }) => {
  const [tags, setTags] = useState<string[]>([]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && event.currentTarget.value) {
      setTags([...tags, event.currentTarget.value]);
      event.currentTarget.value = '';
    }
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className={`bootstrap-tagsinput ${tagClass}`}>
      {tags.map((tag, index) => (
        <span key={index} className={`label label-${tagClass}`}>
          {tag}
          <button type="button" onClick={() => removeTag(index)}>
            &times;
          </button>
        </span>
      ))}
      <FormControl
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Add a tag"
      />
    </div>
  );
};

export default TagInput;
