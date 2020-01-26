import React from 'react';
import { shallow } from 'enzyme';
import Component from './HeaderComponent';

describe('Header', () => {
  let props;
  let getShallowComponent;

  beforeEach(() => {
    props = {
      actions: {},
      route: {},
    };

    getShallowComponent = () => shallow(<Component {...props} />);
  });

  describe('render', () => {
    it('should render with all props', () => {
      expect(getShallowComponent()).toMatchSnapshot();
    });
  });
});
