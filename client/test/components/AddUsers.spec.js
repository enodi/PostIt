import React from 'react';
import { shallow } from 'enzyme';
import ReactPaginate from 'react-paginate';

import AddUsers from '../../src/components/Dashboard/Users/AddUsers.jsx';

describe('Addusers Component', () => {
  it('should render one <ReactPaginate /> component', () => {
    const props = {
      onChange: () => {},
      searchResult: () => {},
      onClick: () => {},
      handlePageClick: () => {},
      limit: {}
    };

    const wrapper = shallow(<AddUsers {...props}/>);
    expect(wrapper.find(ReactPaginate)).toHaveLength(1);
  });
});
