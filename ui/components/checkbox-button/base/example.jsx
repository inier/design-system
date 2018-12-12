// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import _ from '../../../shared/helpers';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let CheckboxAddButton = props => {
  const uniqueId = _.uniqueId('add-checkbox-');

  return (
    <div className="slds-checkbox_add-button">
      <input
        type="checkbox"
        id={uniqueId}
        value={uniqueId}
        disabled={props.disabled}
        defaultChecked={props.checked}
        tabIndex={props.tabIndex}
      />
      <label htmlFor={uniqueId} className="slds-checkbox_faux">
        <span className="slds-assistive-text">
          {props.label || 'Add product'}
        </span>
      </label>
    </div>
  );
};

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default <CheckboxAddButton />;

export let states = [
  {
    id: 'checkbox-add-button-checked',
    label: 'Checked',
    element: <CheckboxAddButton checked />
  },
  {
    id: 'checkbox-add-button-disabled',
    label: 'Disabled',
    element: <CheckboxAddButton disabled />
  },
  {
    id: 'checkbox-add-button-checked-and-disabled',
    label: 'Checked and Disabled',
    element: <CheckboxAddButton checked disabled />
  }
];
