import Controller from '@ember/controller';
import { set } from '@ember/object';

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
    add() {
      this.store.createRecord('campground', {
        name: this.name
      });
      
      this.send('toggleModal');
    }
  }
});
