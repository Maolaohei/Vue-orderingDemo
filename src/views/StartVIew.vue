<!-- 菜单组件 -->

<template>
  <div id="Start">
    <!-- 头部 -->
    <header class="s-header">
      <div class="head-hlist" style="border-right:2px solid #ccc">
      <img src="../assets/rexiao.png" alt="logo" class="s-header__logo" >
      <p>热销榜</p>
      </div>
       <div class="head-hlist">
      <img src="../assets/caidan.png" alt="logo" class="s-header__logo">
      <p>点过的菜</p>
      </div>
       <div class="head-hlist" style="border-left:2px solid #ccc">
      <img src="../assets/sousuo.png" alt="logo" class="s-header__logo">
      <p>搜你喜欢</p>
      </div>
    </header>
    <!-- 侧菜单 -->
    <aside class="s-aside" id="s-aside">
      <div>
        <ul>
          <li v-for="item in arr" :key='item'>
            <a :href="item.id">{{item.cai}}</a>
          </li>
        </ul>
      </div>
      <div class="aside-nav" @click="show">
        <img src="../assets/nav.png">
       
      </div>
      
    </aside>
     <div id="aas" class="ass" @click="hide">
        <img src="../assets/nav.png"     style="height: 2rem;width: 2rem">
        <p></p>
      </div>
    <!-- 主体内容 -->
    <main class="s-mian">

<div class="main-tileA" >
  <p id="m1">精选热菜</p>
  <div class="main-flex" >
<div class="flex-item" @click="xg" v-for="item in cai" :key="item"> 
  <div class="item-img">
    <p>{{item.name}}</p>
    <p>￥{{item.pic}}</p>
<img  :src='item.src' alt="">
</div>
 </div>
  </div>
</div>
<div class="main-tileA" >
  <p id="m2">特色菜</p>
  <div class="main-flex" >
<div class="flex-item" @click="xg" v-for="item in cai" :key="item"> 
  <div class="item-img">
    <p>{{item.name}}</p>
    <p>￥{{item.pic}}</p>
<img  :src='item.src' alt="">
</div>
 </div>
  </div>
</div>

<div class="main-tileA" >
  <p id="m3">诚心小炒</p>
  <div class="main-flex" >
<div class="flex-item" @click="xg" v-for="item in cai" :key="item"> 
  <div class="item-img">
    <p>{{item.name}}</p>
    <p>￥{{item.pic}}</p>
<img  :src='item.src' alt="">
</div>
 </div>
  </div>
</div>

<div class="main-tileA" >
  <p id="m4">储粮主食</p>
  <div class="main-flex" >
<div class="flex-item" @click="xg" v-for="item in cai" :key="item"> 
  <div class="item-img">
    <p>{{item.name}}</p>
    <p>￥{{item.pic}}</p>
<img  :src='item.src' alt="">
</div>
 </div>
  </div>
</div>



 
    </main>
    <!-- 购物车 -->
    <div class="paycat"  id="paycat" >
<a href="/PayCat" @click.prevent="carpay" ><img src="../assets/cart.png"></a>
    </div>
    <!-- 导航栏 -->
       <div class="navigation"  @click="navigation">
<img src="../assets/navigation.png">
    </div>
  <div class="nav-no">
    <div class="caidan"></div>
    <div class="gouwu"></div>
    <div class="jiezhang"></div>
    <div class="dindan"></div>
  </div>
 


  </div >
</template>

<script>
import AboutView from './AboutView.vue';
export default {
    data() {
        return {
            arr: [
                { cai: "精品小菜", id: "#m1" },
                { cai: "特色菜", id: "#m2" },
                { cai: "诚心小炒", id: "#m3" },
                { cai: "储粮主食", id: "#m4" },
            ],
            cai: [{ name: "水煮鱼", pic: 25, src: require("../assets/1.jpg") }, { name: "担担面", pic: 15, src: require("../assets/2.jpg") }, { name: "宜宾燃面", pic: 13, src: require("../assets/3.jpg") }, { name: "小笼包", pic: 10, src: require("../assets/4.jpg") }, { name: "馒头", pic: 3, src: require("../assets/5.jpg") }, { name: "油条", pic: 5, src: require("../assets/6.jpg") }, { name: "油条", pic: 5, src: "https://img2.baidu.com/it/u=1315623097,4019356197&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=382" }, { name: "回锅肉", pic: 35, src: require("../assets/7.jpg") }],
        };
    },
    methods: {
        show() {
            var aside = document.getElementById("s-aside");
            aside.style.display = "none";
            var ass = document.getElementById(ass);
            ass.style.display = "block";
            console.log(this.start);
        },
        hide() {
            var aside = document.getElementById("s-aside");
            aside.style.display = "block";
            var ass = document.getElementById(ass);
            ass.style.display = "none";
        },
        carpay() {
            this.$router.push({ path: "/PayCat" });
        },
        xg() {
            this.$router.push({ path: "/Dishes" });
        },
        navigation(){
          this.$router.push({path:'/'})
        }
    },
    created() {
    },
    components: { AboutView }
}
</script>

<style  scoped>

*{
  margin: 0;
  padding: 0;
}
.nav-no{
  position: fixed;
  display: none;
  top: 10px;
  width: 100%;
  height: 100%;
  background-color: rgba(132,128,128,0.3);
}
#Start{
  text-align: center;
  width: 100%;
  height: 100%;
  font-size: 1.0em;
  line-height: 1.3em;
  font-family: '宋体';
  color: #555;;
 background: #f7f7f7;
}
.s-header{
  position: fixed;
  top: 0rem;
  width: 96%;
  margin: 0 auto;
  background: #ffffff;

 display: flex;
}
.head-hlist{
  flex: 1;
  border-radius: 0.2rem;
}
.head-hlist img{
  width: 30%;
}
/* 侧边栏 */
.s-aside{
  z-index: 2;
  width: 6em;
  height: 100%;
  position: fixed;
  background: #eee;
  top: 0;
  left: 0;
  font-size: 1.6em;
  display: none;
}
.s-aside ul{
  height: 100%;
  padding: 1rem;
  position: relative;
}
.s-aside ul li{
  line-height: 4em;
  list-style: none;
}
.s-aside ul li a{
  color: #000;
  text-decoration: none;
}
.aside-nav{
     position: absolute;
    right: -3rem;
    background: rgba(132,128,128,0.5);
    top: 42%;
    width: 4REM;
    Height: 4rem;
    text-align: center;
    border-radius: 0 50% 50% 0;
    z-index: 2;
}
.aside-nav img{
  width: 3rem;
  height: 3rem;
  margin-top: 0.6rem;
}
.aside-nav p{
  color: #fff;
  font-size: 2em;
}
/* 主要内容 */
.main-tileA{
  text-align: center;
  margin: 0 auto;
  margin-top:6rem;
  font-size: 1rem;
  margin-bottom: -50px;
  font-weight: bold;
}
.main-tile{
  text-align: center;
  margin: 0 auto;
  margin-top:1 rem;
  font-size: 1rem;
  font-weight: bold;
}


.main-flex{
  overflow: hidden;
    width: 100%;

}
.flex-item{
  float: left;
  margin-left: 3%;
  width: 30%;
  background: white;

 height: 11rem;
}
.item-img {
  border: 1px solid #ccc;
  width: 7rem;
  height: 9.8rem;
  margin: 0 auto;
  margin-top: 1REM;

}
.item-img img{
  width: 6.5rem;
  height: 6rem;
}
#aas{
  position: fixed;
  top: 29rem;

}
#ass img{
    height: 0.1rem;
    width: 0.1rem;
}
.paycat{
    position: fixed;
    bottom: 1rem;
    right: 2rem;
    background: red;
    height: 65px;
    width: 65px;
    border-radius: 3rem;
}
.paycat img{
  margin-top: 10px;
  width: 90%;
  height: 85%;
}

.navigation{
    position: fixed;
    bottom: 1rem;
    left: 2rem;
    background: red;
    height: 65;
    width: 65;
    border-radius: 3rem;

}
</style>