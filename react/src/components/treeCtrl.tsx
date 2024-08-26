// Converted from src/app/pages/components/tree/tree.html

import React, { useState, useEffect } from 'react';

interface TreeNode {
  id: string;
  parent: string;
  type?: string;
  text: string;
  state: {
    opened: boolean;
  };
  icon?: string;
}

const getDefaultData = (): TreeNode[] => [
  {
    id: "n1",
    parent: "#",
    type: "folder",
    text: "Node 1",
    state: {
      opened: true
    }
  },
  {
    id: "n2",
    parent: "#",
    type: "folder",
    text: "Node 2",
    state: {
      opened: true
    }
  },
  {
    id: "n3",
    parent: "#",
    type: "folder",
    text: "Node 3",
    state: {
      opened: true
    }
  },
  {
    id: "n5",
    parent: "n1",
    text: "Node 1.1",
    state: {
      opened: true
    }
  },
  {
    id: "n6",
    parent: "n1",
    text: "Node 1.2",
    state: {
      opened: true
    }
  },
  {
    id: "n7",
    parent: "n1",
    text: "Node 1.3",
    state: {
      opened: true
    }
  },
  {
    id: "n8",
    parent: "n1",
    text: "Node 1.4",
    state: {
      opened: true
    }
  },
  {
    id: "n9",
    parent: "n2",
    text: "Node 2.1",
    state: {
      opened: true
    }
  },
  {
    id: "n10",
    parent: "n2",
    text: "Node 2.2 (Custom icon)",
    icon: "ion-help-buoy",
    state: {
      opened: true
    }
  },
  {
    id: "n12",
    parent: "n3",
    text: "Node 3.1",
    state: {
      opened: true
    }
  },
  {
    id: "n13",
    parent: "n3",
    type: "folder",
    text: "Node 3.2",
    state: {
      opened: true
    }
  },
  {
    id: "n14",
    parent: "n13",
    text: "Node 3.2.1",
    state: {
      opened: true
    }
  },
  {
    id: "n15",
    parent: "n13",
    text: "Node 3.2.2",
    state: {
      opened: true
    }
  },
  {
    id: "n16",
    parent: "n3",
    text: "Node 3.3",
    state: {
      opened: true
    }
  },
  {
    id: "n17",
    parent: "n3",
    text: "Node 3.4",
    state: {
      opened: true
    }
  },
  {
    id: "n18",
    parent: "n3",
    text: "Node 3.5",
    state: {
      opened: true
    }
  },
  {
    id: "n19",
    parent: "n3",
    text: "Node 3.6",
    state: {
      opened: true
    }
  }
];

const TreeCtrl: React.FC = () => {
  const [ignoreChanges, setIgnoreChanges] = useState(false);
  const [newId, setNewId] = useState(0);
  const [treeData, setTreeData] = useState<TreeNode[]>(getDefaultData());
  const [version, setVersion] = useState(1);

  const addNewNode = () => {
    setIgnoreChanges(true);
    const selected = treeData.find(node => node.state.opened)?.id;
    if (selected) {
      setTreeData(prevData => [
        ...prevData,
        {
          id: (newId + 1).toString(),
          parent: selected,
          text: `New node ${newId + 1}`,
          state: { opened: true }
        }
      ]);
      setNewId(newId + 1);
      setVersion(version + 1);
    }
  };

  const refresh = () => {
    setIgnoreChanges(true);
    setNewId(0);
    setTreeData(getDefaultData());
    setVersion(version + 1);
  };

  const expand = () => {
    setIgnoreChanges(true);
    setTreeData(prevData =>
      prevData.map(node => ({ ...node, state: { opened: true } }))
    );
    setVersion(version + 1);
  };

  const collapse = () => {
    setIgnoreChanges(true);
    setTreeData(prevData =>
      prevData.map(node => ({ ...node, state: { opened: false } }))
    );
    setVersion(version + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIgnoreChanges(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [ignoreChanges]);

  const applyModelChanges = () => !ignoreChanges;

  return (
    <div className="row">
      <div className="col-md-6">
        <div className="ba-panel ba-panel-title with-scroll tree-panel">
          <div className="row">
            <div className="col-sm-4">
              <div className="control-side text-center">
                <div>
                  <button className="btn btn-primary" onClick={addNewNode}>Add</button>
                </div>
                <div>
                  <button className="btn btn-primary" onClick={collapse}>Collapse All</button>
                </div>
                <div>
                  <button className="btn btn-primary" onClick={expand}>Expand All</button>
                </div>
                <div>
                  <button className="btn btn-primary" onClick={refresh}>Refresh</button>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              {/* Render your tree component here */}
              {/* Example: <TreeComponent data={treeData} /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="ba-panel ba-panel-title with-scroll tree-panel">
          {/* Placeholder for Drag & Drop tree */}
        </div>
      </div>
    </div>
  );
};

export default TreeCtrl;
