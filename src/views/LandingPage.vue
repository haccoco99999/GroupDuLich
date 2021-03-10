<template>
<div>
    <section class="showcase">
      <header>
        <h2 class="logo">Travel</h2>
        <div class="toggle" v-on:click="myFunction()"></div>
      </header>

      <video src="../assets/videopxl.mp4" muted loop autoplay></video>

      <div class="overlay"></div>

      <div class="text">
        <h2>Never stop</h2>
        <h3>Exploring the World</h3>
        <p>bla bla bla bla</p>
        <a href="#">Explore</a>
      </div>

      <ul class="social">
        <li>
          <a href="#"><img src="https://i.ibb.co/x7P24fL/facebook.png" /></a>
        </li>
        <li>
          <a href="#"><img src="https://i.ibb.co/Wnxq2Nq/twitter.png" /></a>
        </li>
        <li>
          <a href="#"><img src="https://i.ibb.co/ySwtH4B/instagram.png" /></a>
        </li>
      </ul>
    </section>

    <Menu/>
    </div>
</template>

<script>
import Menu from '../components/Menu'
export default {
  name:'LandingPage',
  components:{
    Menu
  },
  methods: {
    myFunction() {
      this.$el.querySelector('.toggle').classList.toggle("active");
      this.$el.querySelector(".showcase").classList.toggle("active");
    }
  }
  // methods:{
  //     const menuToggle = document.querySelector(".toggle"),

  //     const showCase = document.querySelector(".showcase"),

  //     menuToggle.addEventListener("click", () => {
  //       menuToggle.classList.toggle("active");
  //       showCase.classList.toggle("active");
  //     })
  // }
}
      
    </script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap");

:root {
  --overlay-color: #03a9f4;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}

.showcase {
  position: absolute;
  right: 0;
  width: 100%;
  min-height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #111;
  color: #fff;
  z-index: 2;
  transition: 0.5s;
}

.showcase.active {
  right: 300px;
}
.showcase header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 100px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  text-transform: uppercase;
  cursor: pointer;
}

.toggle {
  position: relative;
  width: 60px;
  height: 60px;
  background: url(https://i.ibb.co/HrfVRcx/menu.png);
  background-repeat: no-repeat;
  background-size: 30px;
  background-position: center;
  cursor: pointer;
}

.toggle.active {
  background: url(https://i.ibb.co/rt3HybH/close.png);
  background-repeat: no-repeat;
  background-size: 25px;
  background-position: center;
}

.showcase video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.5); */
  /* background: #000; */
  /* background: var(--overlay-color); */
  mix-blend-mode: overlay;
}

.text {
  position: relative;
  z-index: 10;
}

.text h2 {
  font-size: 5em;
  font-weight: 800;
  line-height: 1em;
  text-transform: uppercase;
}

.text h3 {
  font-size: 4em;
  font-weight: 700;
  line-height: 1em;
  text-transform: uppercase;
}

.text p {
  font-size: 1.1em;
  margin: 20px 0;
  font-weight: 400;
  max-width: 700px;
}

.text a {
  display: inline-block;
  font-size: 1em;
  background: #fff;
  padding: 10px 30px;
  text-decoration: none;
  color: #111;
  margin-top: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: 0.2s;
}

.text a:hover {
  letter-spacing: 6px;
}

.social {
  position: absolute;
  bottom: 20px;
  z-index: 10;
  display: flex;
  justify-content: center;
}

.social li {
  list-style: none;
}

.social li a {
  display: inline-block;
  filter: invert(1);
  margin-right: 20px;
  transform: scale(0.5);
  transition: 0.5s;
}

.social li a:hover {
  transform: scale(0.5) translateY(-15px);
}


@media (max-width: 850) {
  .showcase,
  .showcase header {
    padding: 35px;
  }
}

.text h2 {
  font-size: 3em;
}

.text h3 {
  font-size: 2em;
}

</style>