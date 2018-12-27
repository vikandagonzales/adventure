import request from '../../helpers/request';

class Details {
  static getDetails = async () => {
    const details = await request(`/details`);
    return details.data.data;
  };

  static editDetails = async details => {
    await request(`/details`, 'put', details);
    return Details.getDetails();
  };
};

export default Details;