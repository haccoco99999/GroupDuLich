<template>
  <div class="container">
      <div class="header">
        <h2 class="title">Trang chủ</h2>
        <h3 class="subtitle">Những chuyến đi của chúng ta</h3>
      </div>

      <div class="timeline" @scroll="handleScroll">
          <div id="1" class="item" :class="[ isActive ? itemactive : '']">
            <div class="content">
              <img class="image" src="../assets/HomePage/h1.jpg" />
              <h2 class="content-title">2017</h2>
              <p class="content-desc">
                 He was born in 1881 (probably in the spring) in Salonica, then an
              Ottoman city, now inGreece. His father Ali Riza, a customs
              official turned lumber merchant, died when Mustafawas still a boy.
              His mother Zubeyde, adevout and strong-willed woman, raised him
              and his sister.
              </p>
            </div>
          </div>
          <div id="2" class="item">
            <div class="content">
              <img class="image" src="../assets/HomePage/h1.jpg" />
              <h2 class="content-title">2017</h2>
              <p class="content-desc">
                 He was born in 1881 (probably in the spring) in Salonica, then an
              Ottoman city, now inGreece. His father Ali Riza, a customs
              official turned lumber merchant, died when Mustafawas still a boy.
              His mother Zubeyde, adevout and strong-willed woman, raised him
              and his sister.
              </p>
            </div>
          </div>
          <div id="3" class="item"  :class="[ isActive ? itemactive : '']">
            <div class="content">
              <img class="image" src="../assets/HomePage/h1.jpg" />
              <h2 class="content-title">2017</h2>
              <p class="content-desc">
                 He was born in 1881 (probably in the spring) in Salonica, then an
              Ottoman city, now inGreece. His father Ali Riza, a customs
              official turned lumber merchant, died when Mustafawas still a boy.
              His mother Zubeyde, adevout and strong-willed woman, raised him
              and his sister.
              </p>
            </div>
          </div>
      </div>
  </div>
</template>

<script>


export default {
  name:'HomePage',
  data(){
    return {
      itemactive: "item-active",
      isActive: false,
    }
  },
  created() {
    document.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    document.removeEventListener('scroll', this.handleScroll);
  },
  methods:{
    handleScroll(){
      //itemactive = "item-active";
      var el = document.getElementById("3");
     if(this.elementInViewport(el)) {
          this.isActive=true;
        }else {
          this.isActive=false;
        }
    },
     elementInViewport:function(el) {
  var top = el.offsetTop;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
  }

  return (
    top >= window.pageYOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight)
  );
}
  },
  // beforeMount(){
  //   this.$nextTick(function(){

  //   })
  // }
}
</script>

<style>

@import url("https://fonts.googleapis.com/css?family=Cardo|Pathway+Gothic+One");
.container {
  width:100%;
  position: relative;
  padding: 80px 0 ;
  background-attachment: fixed;
  background-size: cover;
}

.container::before{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(99, 99, 99, 0.8);
  content: "";
}

.title {
  font-size: 46px;
  font-family: Cardo;
  font-weight: normal;
  margin: 0;
}

.subtitle {
  font-family: "Pathway Gothic One", sans-serif;
  font-size: 16px;
  letter-spacing: 5px;
  margin: 10px 0 0 0;
  font-weight: normal;
}

.timeline {
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 700px;
  position: relative;
}
.timeline:before {
  position: absolute;
  left: 50%;
  width: 2px;
  height: 100%;
  margin-left: -1px;
  content: "";
  background: rgba(255, 255, 255, 0.07);
}

@media only screen and (max-width: 767px) {
  .timeline:before {
    left: 40px;
  }
}

@media only screen and (max-width: 767px) {
  .item {
    align-self: baseline !important;
    width: 100%;
    padding: 0 30px 150px 80px;
  }
  .item:before {
    left: 10px !important;
    padding: 0 !important;
    top: 50px;
    text-align: center !important;
    width: 60px;
    border: none !important;
  }
  .item:last-child {
    padding-bottom: 40px;
  }
}

.item {
  padding: 40px 0;
  opacity: .3;
  filter: blur(2px);
  transition: .5s;
  box-sizing: border-box;
  width: calc(50% - 40px);
  display: flex;
  position: relative;
  transform: translateY(-80px);
}

.item:before {
  content: attr(data-text);
  letter-spacing: 3px;
  width: 100%;
  position: absolute;
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  font-family: "Pathway Gothic One", sans-serif;
  border-left: 2px solid rgba(255, 255, 255, 0.5);
  top: 70%;
  margin-top: -5px;
  padding-left: 15px;
  opacity: 0;
  right: calc(-100% - 56px );
}

.item:nth-child(even){
  align-self: flex-end;
}

.item:nth-child(even):before {
  right: auto;
  text-align: right;
  left: calc(-100% - 56px );
  padding-left: 0;
  border-left: none;
  border-right: 2px solid rgba(255, 255, 255, 0.5);
  padding-right: 15px;
}

.content-title{
  font-weight: normal;
  font-size: 66px;
  margin: -10px 0 0 0;
  transition: .4s;
  padding: 0 10px;
  box-sizing: border-box;
  font-family: "Pathway Gothic One", sans-serif;
  color: #fff;
}

.content-desc{
  margin: 0;
  font-size: 15px;
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.7);
  font-family: Cardo;
  font-weight: normal;
  line-height: 25px;
}
.image{
  max-width:100%;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
}

.header{
  width: 100%;
  text-align: center;
  margin-bottom: 80px;
  position: relative;
}
.item-active{
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
}
.item-active:before {
  top: 50%;
  transition: .3s all .2s;
  opacity: 1;
}
.item-active .timeline__content-title {
  margin: -50px 0 20px 0;
}
</style>