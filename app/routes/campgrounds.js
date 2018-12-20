import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      campgrounds: this.store.findAll('campground')
    }
  },

  activate: function() {
    $(document).ready(function() {
      $('[data-toggle=offcanvas]').click(function() {
        $('.row-offcanvas').toggleClass('active');
      });
    });
  }
});
