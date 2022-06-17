class Game {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, 4 / 3, 0.1, 10000);
    this.camera.position.set(240, 240, 0);
    //this.camera.position.set(1, 145, 0);
    this.camera.lookAt(this.scene.position);
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor(0x000000);
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    //0-brak, 1-niebieski, 2-zielony, 3-pomaranczowy, 4-czerwony, 5-szary, 6-czarny
    this.pieces = [
      [1, 1, 1, 1, 1, 1],
      [2, 2, 2, 2, 2, 2],
      [3, 3, 3, 3, 3, 3],
      [4, 4, 4, 4, 4, 4],
      [5, 5]
    ];
    this.piecesOnBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 6, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ];
    //karty: blue1.jpg, blue2.jpg ... red4.jpg
    // this.cards = {
    //   color: ["blue", "green", "orange", "red"],
    //   number: ["1", "2", "3", "4"],
    //   fileType: ".jpg"
    // };
    this.randomCardPlayer1 = ""
    this.cardsInterval = null
    // this.randomCardPlayer1 = this.cards.color[Math.floor(Math.random() * 4)] + this.cards.number[Math.floor(Math.random() * 4)] + this.cards.fileType;
    /*this.randomCardPlayer2 = this.cards.color[Math.floor(Math.random() * (12 - 8))] + this.cards.number[Math.floor(Math.random() * (29 - 25))] + this.cards.fileType;
    while (this.randomCardPlayer2 == this.randomCardPlayer1) {
      this.randomCardPlayer2 = this.cards.color[Math.floor(Math.random() * 4)] + this.cards.number[Math.floor(Math.random() * 4)] + this.cards.fileType;
    }*/
    // console.log(this.randomCardPlayer1, /*this.randomCardPlayer2*/);

    this.currentClicked = { type: "none", object: null };
    this.move = 0;
    this.bug = false;
    this.bugIndeX = null;
    this.bugIndeZ = null;
    this.buggedColor = null;
    this.started = false;
    this.onBoard = []
    this.start = false


    //this.player1turn = true;

    document.getElementById("root").append(this.renderer.domElement);

    this.render();
  }

  resize = () =>{
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
  render = () => {
    requestAnimationFrame(this.render);
    this.renderer.render(this.scene, this.camera);
    //console.log("render leci, taborecik");
    TWEEN.update(); //--------- animacja
  };
  
}
