<!-- 选择人数组件 -->
<template>
  <div class="HelloWorld">
      <button type="button" style="height: 4rem;
    width: 7rem;
    border-radius: 1rem;
    background: black;
    color: white;
}" >
   <img src="../assets/canju.png" height="18px" ><span style="color:white">用餐人数</span>
   </button>
<p @click="getData">请选择正确的用餐人数，小二好为你备餐</p>
<div class="flex-menu">
  <div class="menu "  >
    <div class="menu-select " @click="select(1)">
    <a>{{item[0]}}人</a>
      
      
      </div>


  </div>
    <div class="menu " >
    <div class="menu-select " @click="select(2)">
    <a>{{item[1]}}人</a>
      
      
      </div>


  </div>
    <div class="menu " >
    <div class="menu-select " @click="select(3)">
    <a>{{item[2]}}人</a>
      
      
      </div>


  </div>
    <div class="menu " >
    <div class="menu-select " @click="select(4)">
    <a>{{item[3]}}人</a>
  
      </div>
  </div>
    

    </div>
    <div class="flex-menu ">
  <div class="menu " >
    <div class="menu-select" @click="select(5)">
    <a>{{item[4]}}人</a>
      
      
      </div>


  </div>
    <div class="menu " >
    <div class="menu-select" @click="select(6)">
    <a>{{item[5]}}人</a>
      
      
      </div>


  </div>
    <div class="menu" >
    <div class="menu-select" @click="select(7)">
    <a>{{item[6]}}人</a>
      
      
      </div>


  </div>
    <div class="menu " >
    <div class="menu-select" @click="select(8)">
    <a>{{item[7]}}人</a>
  
      </div>
  </div>
    

    </div>
    <div class="flex-menu">
  <div class="menu ">
    <div class="menu-select" @click="select(9)">
    <a>{{item[8]}}人</a>
      
      
      </div>


  </div>
    <div class="menu " >
    <div class="menu-select" @click="select(10)">
    <a>{{item[9]}}人</a>
      
      
      </div>


  </div>
    <div class="menu" >
    <div class="menu-select" @click="select(11)">
    <a>{{item[10]}}人</a>
      
      
      </div>


  </div>
    <div class="menu" >
    <div class="menu-select" @click="select(12)">
    <a>{{item[11]}}人</a>
  
      </div>
  </div>
    

    </div>
    
<br>
<span>当前人数:{{start}}</span>
<br>
<br>
<input class="KOUWEI"  type="text" placeholder="请输入你想要的口味">

<div class="order" @click.prevent="diancai"><a href="/start"><p>开始</p> <p>点菜</p></a>
 

</div>
<div class="box"> </div>
<div class=axios v-for="(tiem,i) in list" :key="i">{{tiem}}</div>

  </div>
</template>

<script>
export default {
  name: 'HomeView',
    data() {
    return {
     item:[1,2,3,4,5,6,7,8,9,10,11,12],
      list:'',
      color:"red",
      start:0,
    }
  },
  props: {
    msg: String
  },  methods: {
   getData(){
    var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
   this.axios.get(api).then((response)=> {
      console.log(response);
      this.list=response.data.result;
    }).catch((error)=> {
      console.log(error);
    });
   
  },
   select(A){
    var sel=document.getElementsByClassName("menu")
    sel[A-1].style.backgroundColor="red"
    this.start=A;
    console.log(A)
  for(var i=0;i<12;i++){
    if(A-1!=i){
  sel[i].style.backgroundColor="white"
    }

    
  
  }
   
    },
    diancai(){
 
     if(this.start==0){
      alert("请选择用餐人数")
  
     }else{
      this.$router.push({path:'/start'})
     }
    }
}


}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.HelloWorld{
  margin: 0 auto;
  text-align: center;
}

.flex-menu{
  display: flex;
  height: 4.6rem;

}
.menu{
  flex: 3;
      height: 4.2rem;
 
}
.menu-select{

  border: 0.1rem solid #ccc;
       padding-top: 1.1rem;
    height: 3rem;
}
.order{

    margin: 0 auto;
    text-align: center;
    height: 4rem;
    width: 6rem;
    padding-top: 1.6rem;
    border-radius: 50%;
    border: 1px solid red;
    background: red;
      margin-TOP:4rem;
}
.order P{
  margin: 0;
}
.order A{
text-decoration: none;
  color: white;
}
.KOUWEI{
 HEIGHT: 2REM;WIDTH: 17REM;
}
</style>
