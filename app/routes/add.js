import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    closeModal() {
      //navigate to /campgrounds
      this.transitionTo('campgrounds');
    },}
});
