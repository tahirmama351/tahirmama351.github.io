'use strict';
/**
 * Event handler to display library titles sorted alphabetically
 * @returns {number} 
 */

let ladder = {
     step: 0,
     up() {
          this.step++;
          return this;
     },
     down() {
          this.step--;
          return this;
     },
     showStep() {
          console.log(this.step);
          return this;
     },
};
ladder.up().up().down().up().down().showStep();