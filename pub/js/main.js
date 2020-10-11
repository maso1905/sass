"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
} // Babel Transpile test


var yourName = /*#__PURE__*/function () {
  function yourName(name) {
    _classCallCheck(this, yourName);

    this.name = name;
  }

  _createClass(yourName, [{
    key: "whoAreYou",
    value: function whoAreYou() {
      console.log(this.name);
    }
  }]);

  return yourName;
}();

var es6Name = new yourName('Dangerous is my middle name.. ;)');
es6Name.whoAreYou();
//# sourceMappingURL=main.js.map
