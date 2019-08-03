<template>
  <div class="dashboard">
    <h1>Dash Board</h1>
    <el-card class="box-card">
      <h1>Welcome {{ NameData }} !</h1>
      <p>You sign up email is {{ EmailData}}</p>
      <el-button type="primary" @click="clearData">Clear Data</el-button>
    </el-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { mapState } from "vuex";

export default {

  computed: {
    ...mapGetters(["getUserName"]),
    ...mapGetters(["getUserEmail"]),

    NameData () {
    return this.getUserName
    },
    EmailData(){
    return this.getUserEmail
    },
      
  },
methods:{
     clearData () {
      localStorage.clear();
  }
},

}
</script>


<style scoped>
.dashboard h1 {
  text-align: center;
}
.dashboard p {
  text-align: center;
}

.el-button--primary {
  margin: 100px 0 0 230px;
}

</style>


