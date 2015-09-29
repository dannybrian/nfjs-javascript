var pile = {
    elements: ["eggshell", "orange peel", "worm"],
    remind(time) {
     setTimeout(() => {
         console.log("Don't forget these " +              this.elements.length + " elements!");
       }, time);
    }
};

