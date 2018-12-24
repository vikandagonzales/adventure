import request from '../../helpers/request';
import Groups from './groups';

class Guests {
  static getGuests = async () => {
    const guests = await request(`/guests`);
    return guests.data.data;
  };

  // static getStaffs = async () => {
  //   const shop_id = await Auth._authenticatedRequest();
  //   const staffs = await request(`/shops/${shop_id}/staff`);
  //   const staffsSortedByName = await staffs.data.data.sort((a, b) => a.first_name.localeCompare(b.first_name));
  //   const staffsSortedByRole = await staffsSortedByName.sort((a, b) => a.role_id.toString().localeCompare(b.role_id.toString()));
  //   return staffsSortedByRole;
  // };

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