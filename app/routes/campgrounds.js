import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      campgrounds: this.store.findAll('campground')
    }
  }
});
