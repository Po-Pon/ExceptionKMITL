<template>
<div>
    <div class="banner">
      <div class="topnav">
        <a href="/home"
          ><img
            src="/image/navbar/newlogo.png"
            width="110px"
            height="auto"
            style="padding-left: 20px"
            alt=""
        /></a>
        <ul>
          <li id="comp1"><a href="/">Manage User</a></li>
          <li id="comp1"><a href="/">Manage Forum</a></li>
          <li id="comp1"><a href="/">Manage Problem</a></li>
          <li id="comp2"><a href="/login">Log In</a></li>
          <div class="line"></div>
          <li id="comp2"><a href="/register">Register</a></li>
        </ul>
      </div>
    </div>
    <div class="container p-6 mt-4">
        <div class="row">
            <div class="col-sm-4" id="loginLeft">
                <!-- <div class="alert alert-success alert-dismissible fade show" role="alert">
                    With Bootstrap!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div> -->
                <div class="p-6 mt-6">
                    <img src="/image/navbar/newlogo.png" width="100%" height="auto" alt="" id="logo1">
                </div>
                <img src="/image/login/cloud.png" alt="" id="cloud1">
            </div>
            <div class="col-md-8" id="loginRight">
                <p v-html="br"/>
                <div class="p-6 mt-6 mb-6 ml-6 mr-6" style="background-color:#130d0d">
                    <p style="font-size:35px; font-weight:500; color:white;">Welcome to <span style="color:red">ExceptionKMITL!</span></p>
                    <p style="font-size:20px; font-weight:500; color:white; opacity:0.5">Log in your account</p>
                    <form v-on:submit.prevent="login">
                        <div class="form-group">
                                <label for="InputEmailLogin" style="font-size:20px; font-weight:500; color:white;">Email</label>
                                <input type="email" class="form-control" v-model.trim.lazy="$v.email.$model" :class="{'is-invalid': validationStatusError($v.email) || emailError == 'error', 'is-valid': !$v.email.$invalid  }" id="InputemailLogin">
                            <div class="valid-feedback"></div>
                            <div class="invalid-feedback">
                                <span v-if="!$v.email.required">กรุณากรอก Email</span>
                                <span v-if="!$v.email.email"></span>
                                <!-- <span v-if="emailError == 'error'">Email ไม่ถูกต้องกรุณาตรวจสอบแล้วลองใหม่อีกครั้ง</span> -->
                            </div>
                            <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="emailError == 'error'">
                                Email ไม่ถูกต้องกรุณาตรวจสอบแล้วลองใหม่อีกครั้ง
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="email_reset()">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                        </div>
                        <div class="form-group">
                                <label for="InputPasswordLogin" style="font-size:20px; font-weight:500; color:white;">Password</label>
                                <input type="password" class="form-control" v-model.trim.lazy="$v.password.$model" :class="{'is-invalid': validationStatusError($v.password) || passwordError == 'error', 'is-valid': !$v.password.$invalid }" id="InputPasswordLogin">
                            <a @click="togglePassLogin()"><span class="fa fa-fw fa-eye field-icon toggle-password"></span></a>
                            <div class="valid-feedback"></div>
                            <div class="invalid-feedback">
                                <span v-if="!$v.password.required">กรุณากรอกรหัสผ่าน</span>
                                <span v-if="!$v.password.minLength">Password ต้องไม่ต่ำกว่า 8 ตัว</span>
                                <span v-if="!$v.password.maxLength">Password ต้องไม่เกิน 255 ตัว</span>
                                <!-- <span v-if="passwordError == 'error'">รหัสผ่านไม่ถูกต้อง</span> -->
                            </div>
                            <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="passwordError == 'error'">
                                รหัสผ่านไม่ถูกต้อง
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="password_reset()">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                        </div>
                        <div class="form-group form-check" style="padding-left:24px">
                            <input type="checkbox" class="form-check-input" id="Check1" style="background-color : #130d0d; border-color:white;" v-model="remember">
                            <label class="form-check-label" for="Check1">Remember me</label>
                
                            <a href="/forgotpassword" style="float:right; font-weight:300; opacity:0.5; color:white;"><span><u>Forgot password?</u></span></a>
                        </div>
                        <button type="submit" class="btn btn-danger" style="font-size:15px; font-weight:300; border-radius:20px;padding:5px 30px 5px 30px">Log in</button>
                        <br><br><p style="font-size:10px; font-weight:400; color:white;">Don't have an account yet? <a href="/register" style="text-decoration:none;"><span style="color:red;"><b>Create your account now!</b></span></a></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div class="row">
            <div class="col-md-5">
                <div class="copyright text-white" style="font-weight: 200;"> 
                    King Mongkut's Institute of technology Ladkrabang<br>
                    1Chalong Krung 1 Alley, Lat Krabang Bangkok 10520<br>
                    02 723 4900
                </div>
            </div>
            <div class="col-md-5">
                <div class="copyright" style="padding-top: 20px; color: #aaa;">
                    Copyright &copy; 2021 ExptionKMITL
                </div>
            </div>
            <div class="col-md-2" id="help">
                <a href="/">HELP</a>
            </div>
        </div>
    </footer>
</div>
</template>

<script>
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators';
import axios from 'axios';
export default {
    data(){
        return{
            email: '',
            emailError: '',
            password: '',
            passwordError: '',
            remember: false,
            rememberData: null,
            br: '<br><br>',
        }
    },
    created(){
        this.rememberData = JSON.parse(localStorage.getItem('rememberUser'))
        if(this.rememberData != null){
            this.email = this.rememberData.rememberEmail
            this.password = this.rememberData.rememberPassword
            this.remember = this.rememberData.rememberTrue
        }
    },
    validations:{
        email:{
            required,
            email
        },
        password:{
            required,
            minLength: minLength(8),
            maxLength: maxLength(255)
        },
    },
    methods:{
        togglePassLogin() {
        var x = document.getElementById("InputPasswordLogin");
            if (x.type === "password") {
                x.type = "text";
            }
            else{
                x.type = "password";
            }
        },
        validationStatusError(validation){
            return typeof validation != "undefined" ? validation.$error : false;
        },
        email_reset(){
            this.emailError = ''
        },
        password_reset(){
            this.passwordError = ''
        },
        login(){
            this.br = ''
            this.$v.$touch();
            if( this.$v.$pendding || this.$v.$error ) return;
            axios.post("http://localhost:5000/checkingLogin" ,{
                form:{
                    email: this.email,
                    password: this.password,
                }
            }).then((response) => {
                const data = response.data
                const data_remember = {
                    rememberEmail: this.email,
                    rememberPassword: this.password,
                    rememberTrue: this.remember
                }
                this.emailError = data.errorEmail
                this.passwordError = data.errorPassword
                // console.log(this.emailError)
                // console.log(this.passwordError)
                // console.log(response.data)
                console.log(data.message)
                if(data.message == 'log in success!'){
                    if(this.remember == true){
                        let remember_json = JSON.stringify(data_remember)
                        localStorage.setItem('rememberUser', remember_json)
                    }
                    if(this.remember == false){
                        localStorage.removeItem('rememberUser')
                    }
                    let formLoin_json = JSON.stringify(data)
                    localStorage.setItem('formLogin', formLoin_json)
                    this.$router.push({name: 'Home'})
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    }
}
</script>

<style>

</style>

