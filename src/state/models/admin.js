import request from '../../helpers/request';

class Groups {
  static getGroups = async () => {
    const groups = await request(`/groups`);
    return groups.data.data;
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

  static addGuest = async guest => {
    await request(`/guests`, 'post', guest);
    return Groups.getGroups();
  };

  static editGuest = async (guest, guest_id) => {
    await request(`/guests/${guest_id}`, 'put', guest);
    return Groups.getGroups();
  };

  static deleteGuest = async (guest_id) => {
    await request(`/guests/${guest_id}`, 'delete');
    return Groups.getGroups();
  };
};

export default Groups;