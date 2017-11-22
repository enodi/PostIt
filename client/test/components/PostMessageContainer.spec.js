import React from 'react';
import { PostMessageContainer } from '../../src/components/Dashboard/Message/PostMessageContainer.jsx';

jest.mock('react-dom');

const setup = () => {
  const props = {
    group: { activeGroup: { id: 1 } },
    messages: [{ id: 2, User: { id: 1, username: '' } }, { id: 3, User: { id: 1, username: '' } }],
    postMessage: jest.fn()
  };

  const wrapper = mount(<PostMessageContainer {...props} />);
  return {
    props,
    wrapper
  };
};

describe('Post message container', () => {
  const { props, wrapper } = setup();
  const event = {
    preventDefault: jest.fn(),
    target: {
      id: 'urgent',
      value: 'hello'
    }
  };

  it('should setState on input change', () => {
    wrapper.instance().priorityOnChange(event);
    expect(wrapper.state().priority).toEqual('urgent');
    wrapper.instance().handleOnChange(event);
    expect(wrapper.state().message).toEqual('hello');
  });

  it('should dispatch postMessage action when message is posted', () => {
    wrapper.setState({ priority: 'urgent', message: 'testing' });
    wrapper.instance().handleOnSubmit(event);
    expect(props.postMessage.mock.calls.length).toEqual(1);
    expect(wrapper.state().message).toEqual('');
  });
});
