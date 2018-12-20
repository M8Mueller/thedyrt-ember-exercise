import Controller from '@ember/controller';
import { set } from '@ember/object';
import $ from 'jquery';

export default Controller.extend({
  isShowingModal: false,

  actions: {
    select(campground) {
      set(this.model, 'selected', campground);
    },
    toggleModal() {
      set(this, 'name', '');
      this.toggleProperty('isShowingModal');
    },
    toggleMenu() {
      $('.sidebar').toggleClass('open'); // Lazy
      $('.main').toggleClass('open'); // Lazy
    },
    add() {
      this.store.createRecord('campground', {
        name: this.name
      });
      
      this.send('toggleModal');
    }
  }
});
