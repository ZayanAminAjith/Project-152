// Registering component in box-component.js
AFRAME.registerComponent("view", {
  schema: {
    moveY: { type: "number", default: 0 },
  },

  tick: function () {
    window.addEventListener("click", (temp)=> {
      this.data.moveX-= 0.0001
    })
    this.data.moveX += 0.01
      var pos = this.el.getAttribute("position")
      this.el.setAttribute("position", {
        x: this.data.moveX,
        y: pos.y,
        z: pos.z
      })
  }
});


