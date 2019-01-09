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

  static getGuests = async () => {
    const guests = await request(`/guests`);
    return guests.data.data;
  };

  static addGuest = async guest => {
    await request(`/guests`, 'post', guest);
    return Groups.getGroups();
  };

  static editGuest = async (guest, id) => {
    await request(`/guests/${id}`, 'put', guest);
    return Groups.getGroups();
  };

  static deleteGuest = async id => {
    await request(`/guests/${id}`, 'delete');
    return Groups.getGroups();
  };
};

export default Groups;