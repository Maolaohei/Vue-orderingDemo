<!-- 购物车组件 -->
<template>
  <div>
     <button id="dh"> <img src="../assets/navigation.png" alt=""><br> 导航</button>
    <button id="dh"> <a href="/start"><img src="../assets/menu.png" alt=""><br> 继续点菜</a></button>
    <button id="dh" @click="pay"> <img src="../assets/doorder.png" alt=""><br> 下单</button>
    <h2>购物车</h2>
    <div class="yc">
        <p>用餐人数3人</p><br>
        <span>备注：清淡少盐</span>
        <div class="xiugai">
            <img src="../assets/edit.png" alt="">
            <span>修改</span>
        </div>
    </div>
    <div class="hj">
        <p>您的购物车有：{{arr[0].name}}、{{arr[1].name}}等</p>
        <span>合计：</span>
        <h4>￥{{sum}}</h4>
    </div>
    <div class="greens">
        <div class="cai" v-for="(item,i) in arr " :key="i">
            <img src=item.src alt="">
            <p>{{item.name}}<br> ￥{{item.price}}</p>
            <div class="btu">
                <button @click="down(i)">-</button>
                <em v-text="item.quantity"></em>
                <button @click="up(i)">+</button>
            </div>
        </div>
        
    </div>
    <div class="zcdc">
        <p>本店顾客最长点的菜</p>
        <img src="../assets/1.jpg" alt="">
        <img src="../assets/2.jpg" alt="">
        <img src="../assets/3.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
data() {
    return {
        // 数组
    
         peopleNum:0,
        arr:[{
            name:'水煮鱼',
            src: require('../assets/1.jpg'),
            price:'3.0',
            quantity:'0'
        },{
               name:'回锅肉',
                src:require('../assets/2.jpg'),
           price:'4.0',
            quantity:'0'
        },{
               name:'小笼包',
                src:require('../assets/3.jpg'),
            price:'21.0',
            quantity:'0'
        }],
        // 求和
        sum:0
    }
},methods: {
      up(i){
       
        this.arr[i].quantity++;
//计算总价格

        this.sum=0;
        for(let i=0;i<this.arr.length;i++){
            this.sum+=parseFloat(this.arr[i].price)*parseFloat(this.arr[i].quantity);
        }

   

     
       
    },
    down(i){
        
           
       
         if( this.arr[i].quantity>0){
             this.sum-=parseFloat(this.arr[i].price)*1;
 this.arr[i].quantity--;
  }
 
          

     
       
   
         },pay(){
            this.$router.push({path:'/Pay'})

         }
       
},

}
</script>

<style  scoped>
   body {
            position: relative;
            background-color: #efefef;
        }
        
        .cai button {
            border: 0;
            background-color: #ccc;
            width: 30px;
            height: 30px;
            color: red;
            font-size: 18px;
        }
        
        h2 {
            display: block;
            width: 80px;
            margin: 0 auto;
        }
        
        .yc {
            position: relative;
            padding: 10px;
            background-color: #fff;
        }
        
        .yc p {
            display: inline-block;
            color: red;
        }
        
        .yc span {
            font-size: 15px;
        }
        
        .xiugai {
            text-align: center;
            position: absolute;
            top: 10px;
            width: 64px;
            border: 1px solid #ccc;
            right: 0;
        }
        
        .xiugai img {
            width: 50px;
        }
        
        .hj {
            margin-bottom: 20px;
            background-color: #fff;
        }
        
        .hj p {
            color: #5971dd;
            font-size: 15px;
        }
        
        .hj span {
            display: inline-block;
            font-size: 15px;
        }
        
        .hj h4 {
            display: inline-block;
            color: red;
            font-size: 24px;
            margin: 10px 0;
        }
        
        .greens {
            background-color: #fff;
        }
        
        .greens .cai {
            width: 100%;
            height: 60px;
            padding: 10px;
            border-bottom: 1px solid #ccc;
        }
        
        .cai img {
            float: left;
            width: 70px;
        }
        
        .cai p {
            float: left;
            margin: 10px 10px;
        }
        
        .btu {
            float: right;
            margin-right: 30px;
            margin-top: 15px;
        }
        
        .zcdc {
            margin-top: 20px;
            background-color: #fff;
            padding: 10px;
        }
        
        .zcdc img {
            margin-left: 11px;
        }
        
        #dh {
            position: fixed;
            width: 70px;
            height: 70px;
            z-index: 10;
            border: 0;
            color: #fff;
            border-radius: 50px;
            background-color: rgba(0, 0, 0, 0.6);
        }
        
        #dh img {
            width: 30px;
        }
        
        #dh:hover {
            background-color: red;
        }
        
        #dh:nth-child(1) {
            bottom: 10px;
            left: 10px;
        }
        
        #dh:nth-child(2) {
            bottom: 10px;
            left: 40%;
        }
        
        #dh:nth-child(3) {
            bottom: 10px;
            right: 10px;
        }
</style>