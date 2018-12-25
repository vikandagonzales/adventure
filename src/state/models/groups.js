import request from '../../helpers/request';

class Groups {
  static getGroups = async () => {
    const groups = await request(`/groups`);
    return groups.data.data;
  };

  static getGroup = async id => {
    const group = await request(`/groups/${id}`);
    return group.data.data;
  };

  static addGroup = async group => {
    await request(`/groups`, 'post', group);
    return Groups.getGroups();
  };

  static editGroup = async (group, id) => {
    await request(`/groups/${id}`, 'put', group);
    return Groups.getGroups();
  };

  static deleteGroup = async id => {
    await request(`/groups/${id}`, 'delete');
    return Groups.getGroups();
  };
};

export default Groups;