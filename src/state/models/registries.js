import request from '../../helpers/request';

class Registries {
  static getRegistries = async () => {
    const registries = await request(`/registries`);
    return registries.data.data;
  };

  static addRegistry = async registry => {
    await request(`/registry`, 'post', registry);
    return Registries.getRegistries();
  };

  static editRegistry = async (registry, id) => {
    await request(`/registry/${id}`, 'put', registry);
    return Registries.getRegistries();
  };

  static deleteRegistry = async id => {
    await request(`/registry/${id}`, 'delete');
    return Registries.getRegistries();
  };
};

export default Registries;