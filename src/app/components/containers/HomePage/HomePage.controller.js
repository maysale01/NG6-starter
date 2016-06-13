// @flow
class HomePageController {
  constructor() {
    this.items = [{
      name: 'Test',
      price: 10
    }, {
      name: 'Test 2',
      price: 10
    }]

    this.remove = function(item) {
      let confirmed = confirm(`Remove ${item.name}?`);

      if (confirmed) {
        let idx = this.items.findIndex(i => i.name === item.name);
        this.items.splice(idx, 1);
      }
    }
  }
}

export default HomePageController;
