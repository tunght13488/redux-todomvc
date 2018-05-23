import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Link = ({active, onClick, children}) => (
  <a className={classNames({selected: active})} href="#" onClick={onClick}>{children}</a>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
