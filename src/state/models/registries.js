import request from '../../helpers/request';

class Registries {
  static getRegistries = async () => {
    const registries = await request(`/registries`);
    return registries.data.data;
  };

  static addRegistry = async registry => {
    await request(`/registries`, 'post', registry);
    return Registries.getRegistries();
  };

  static editRegistry = async (registry, id) => {
    await request(`/registries/${id}`, 'put', registry);
    return Registries.getRegistries();
  };

  static deleteRegistry = async id => {
    await request(`/registries/${id}`, 'delete');
    return Registries.getRegistries();
  };
};

export default Registries;