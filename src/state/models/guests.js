import request from '../../helpers/request';
import Groups from './groups';

class Guests {
  static getGuests = async () => {
    const guests = await request(`/guests`);
    return guests.data.data;
  };

  static addGuest = async (guest, group_id) => {
    await request(`/guests`, 'post', guest);
    return Groups.getGroup(group_id);
  };

  static editGuest = async (guest, guest_id, group_id) => {
    await request(`/guests/${guest_id}`, 'put', guest);
    return Groups.getGroup(group_id);
  };

  static deleteGuest = async (guest_id, group_id) => {
    await request(`/guests/${guest_id}`, 'delete');
    return Groups.getGroup(group_id);
  };
};

export default Guests;