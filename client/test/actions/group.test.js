import { createGroupSuccess, retrieveGroupsSuccess, activeGroupSuccess } from '../../src/actions/groupAction';

it('should retrieve groups', () => {
  const action = retrieveGroupsSuccess({ name: 'general' });
  expect(action).toEqual({
    type: 'RETRIEVE_GROUP_SUCCESSFUL',
    groups: {
      name: 'general'
    }
  });
});

