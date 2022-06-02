<!-- 支付结算页面组件 -->
<template>
  <div id="body">
        <div class="success_top">
            <img src="../assets/scuccssd.png" alt="">
            <div class="success_r">
                <h2>支付成功</h2>
                <p>期待您再次光临!</p>
            </div>
        </div>
        <ul class="success_list">
            <li>
                <span>订单状态</span>
                <span>已完成</span>
            </li>
            <li>
                <span>桌号</span>
                <span>007号</span>
            </li>
            <li>
                <span>人数</span>
                <span>人</span>
            </li>
            <li>
                <span>订单号</span>
                <span>10086</span>
            </li>
            <li>
                <span>结账时间</span>
                <span>2022-05-27</span>
            </li>
            <li>
                <span>支付金额</span>
                <span>￥{{money}}</span>
            </li>
        </ul>
       <van-button type="primary" @click="yes"> 返回主页</van-button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            money:996
        }
    },methods: {
        yes(){
              this.$router.push({path:'/'})
        }
    },
}
</script>

<style scoped>
    .success_top{
        margin: 4rem auto;
        display: flex;
        border: 1px solid #eee;
        border-radius: 2rem;
        background: #fff;
    }
    .success_top img{
        width: 6rem;
        height: 6rem;
    }
    .success_r{
        padding-left: 1rem;
        flex: 1;
        padding-top: 1rem;
    }
    .success_r p,.success_r h2{
        text-align: left;
    }

    .success_list{
        background: #fff;
        overflow: auto;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    .success_list li{
        overflow: auto;
        padding: .5rem 1rem;
    }
    .success_list li span{
        float: left;
    }
    .success_list li span:last-child{
        float: right;
    }
</style>