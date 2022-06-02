<!-- 商品详情组件 -->
<template>
  <div class="dishes">
    <div class="top">
        <button @click="goout">返回</button >
        <img src="../assets/2.jpg" alt="">
        <h4>娃娃菜顿豆腐</h4>
        <span>4/份</span>
    </div>
    <div class="xq">
        <h5>商品详情</h5>
        <p>娃娃菜顿豆腐</p>
    </div>
    <div class="bt">
        <span>数量</span>
        <button @click="down">-</button>
        <em>{{math}}</em>
        <button @click="add">+</button>
        <button class="gwc" @click="paycat">加入购物车</button>
    </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    math:"0"
  }
},methods: {
  goout(){
    console.log('返回');
    this.$router.go(-1)
  },
  add(){
    this.math++;
  
  },
  down(){
    if(this.math>0){
      this.math--;
    }
  },paycat(){
this.$router.push({path:'/PayCat'})
  }
},
}
</script>

<style scoped>
   * {
            margin: 0;
            padding: 0;
        }
        
        body {
            background-color: #ccc;
            padding: 5px;
        }
        
        .top {
            position: relative;
            width: 100%;
            height: 300px;
            background-color: #fff;
        }
        
        .top img {
            width: 100%;
            height: 200px;
        }
        
        .top button {
            color: #fff;
            width: 50px;
            height: 50px;
            top: 5px;
            left: 5px;
            font-family: '宋体';
            font-weight: 700;
            border-radius: 50px;
            position: absolute;
            border: 0;
            background-color: rgba(0, 0, 0, 0.5);
        }
        
        .top h4 {
            font-size: 18px;
            margin-left: 5px;
        }
        
        .top span {
            margin-left: 5px;
            color: red;
        }
        
        .xq {
            background-color: #fff;
            height: 150px;
            width: 100%;
            margin-top: 20px;
        }
        
        .xq p {
            margin-top: 10px;
        }
        
        .bt {
            position: absolute;
            bottom: 10px;
            width: 100%;
            padding: 10px;
            background-color: #fff;
        }
        
        .bt button {
            border: 0;
            background-color: #ccc;
            width: 30px;
            height: 30px;
            color: red;
            font-size: 18px;
        }
        
        .bt .gwc {
            float: right;
            margin-right: 30px;
            width: 120px;
            height: 30px;
            background-color: red;
            color: #fff;
            border-radius: 5px;
        }
</style>