import Route from '@ember/routing/route';

export default class LaptopItemRoute extends Route {

  async model({ id }) {
    return { id };
  }

}
