import request from '../../helpers/request';

class Groups {
  static getGroups = async () => {
    const groups = await request(`/groups`);
    return groups.data.data;
  };

  // static getStaffs = async () => {
  //   const shop_id = await Auth._authenticatedRequest();
  //   const staffs = await request(`/shops/${shop_id}/staff`);
  //   const staffsSortedByName = await staffs.data.data.sort((a, b) => a.first_name.localeCompare(b.first_name));
  //   const staffsSortedByRole = await staffsSortedByName.sort((a, b) => a.role_id.toString().localeCompare(b.role_id.toString()));
  //   return staffsSortedByRole;
  // };

  static addGroup = async group => {
    await request(`/groups`, 'post', group);
    return Groups.getGroups();
  };

  static editGroup = async (group, group_id) => {
    await request(`/groups/${group_id}`, 'put', group);
    return Groups.getGroups();
  };

  static deleteGroup = async group_id => {
    await request(`/groups/${group_id}`, 'delete');
    return Groups.getGroups();
  };
};

export default Groups;