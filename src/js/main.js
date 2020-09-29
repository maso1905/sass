function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  // Babel Transpile test
  class yourName {
    constructor(name){
      this.name = name;
    }
    
    whoAreYou() {
      console.log(this.name);
    };
  }
  
  let es6Name = new yourName('Dangerous is my middle name.. ;)');
  es6Name.whoAreYou();