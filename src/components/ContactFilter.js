import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import contactActions from '../redux/contacts/contactActions';

const Filter = ({ value, onChange }) => (
  <label>
    <span>Find contacts by name</span>
    <input
      type="text"
      name="filter"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </label>
);

Filter.propTupes = {
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.phonebook.filter,
});

const mapDispatchToProps = {
  onChange: contactActions.onChangeFilter,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
