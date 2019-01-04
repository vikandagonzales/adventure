import request from '../../helpers/request';

class Guests {
  static getGroup = async id => {
    const group = await request(`/groups/${id}`);
    return group.data.data;
  };

  static addGuest = async (guest, group_id) => {
    await request(`/guests`, 'post', guest);
    return Guests.getGroup(group_id);
  };

  static editGuest = async (guest, guest_id, group_id) => {
    await request(`/guests/${guest_id}`, 'put', guest);
    return Guests.getGroup(group_id);
  };

  static deleteGuest = async (guest_id, group_id) => {
    await request(`/guests/${guest_id}`, 'delete');
    return Guests.getGroup(group_id);
  };
};

export default Guests;