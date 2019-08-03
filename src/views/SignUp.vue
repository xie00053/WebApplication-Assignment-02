<template>
  <div class="signup">
    
    <h1>Sign Up</h1>
    <el-card class="box-card">
<!-- the form start from here -->
      <el-form :model="form" :rules="rules" ref="form">
           
          <!-- User Name -->
            <el-form-item label="Your Name" prop="yourName" id="userName">
              <el-input placeholder="Your Name (no more than 50 words)"  v-model="form.yourName"></el-input>
            </el-form-item>

          <!-- Email --> 
            <el-form-item label="Email" prop="email" id="email">
              <el-input placeholder="Your Email" v-model="form.email"></el-input>
            </el-form-item>
          
          <!-- PassWord -->  
            <el-form-item label="Password" prop="pass" id="pass">
              <el-input type="password" v-model="form.pass" autocomplete="off"></el-input>
            </el-form-item>

      </el-form>
      <!-- Submit button -->
      <el-button type="primary" @click="submitForm('form')">Submit</el-button>    
    </el-card>
  </div>
</template>

<script>

import { mapState } from "vuex";
import { mapActions } from "vuex";

export default {
  data () {
    return {          
        form: {
          yourName: null,
          email: null,  
          pass: null,
        },
        
        rules: {
          yourName:[
            {required: true, message: 'Please input First Name', trigger: 'blur'},
          ],

          email:[
            { required: true, message: 'Please input email address', trigger: 'blur' },
            { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
          ],

          pass: [
            { required: true, message: 'Please input the password', trigger: 'blur' }
          ],

        }
    };
  },

  computed:{ 
    ...mapState(["users"]),
  },

  // mounted() {
  //   if(localStorage.Name) this.form.yourName = localStorage.Name;
  //   if(localStorage.Email) this.form.email = localStorage.Email;
  //   if(localStorage.Password) this.form.pass = localStorage.Password;
  // },

  methods: {
    ...mapActions(["updateUsers"]),
    submitForm(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {     
        this.updateUsers({ Name: this.form.yourName, Email: this.form.email, Password: this.form.pass, });
          // localStorage.Name = this.form.yourName;
          // localStorage.Email = this.form.email;
         alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
}
</script>

<style>
.signup h1 {
  text-align: center;
}
.box-card {
    width: 600px;
    height: 480px;
    margin: auto;
  }
</style>

