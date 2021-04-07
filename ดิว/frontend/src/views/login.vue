<template>
    <div class="container p-6 mt-4">
        <div class="row">
            <div class="col-sm-4" id="loginLeft">
                <!-- <div class="alert alert-success alert-dismissible fade show" role="alert">
                    With Bootstrap!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div> -->
                <div class="p-6 mt-6" style="background-color:red">
                    <img src="/image/navbar/newlogo.png" width="100%" height="auto" alt="">
                </div>
                <img src="/image/login/cloud.png" alt="" id="cloud">
            </div>
            <div class="col-md-8" id="loginRight">
                <div class="p-6 mt-6 mb-6 ml-6 mr-6" style="background-color:#130d0d">
                    <p style="font-size:35px; font-weight:500; color:white;">Welcome to <span style="color:red">ExceptionKMITL!</span></p>
                    <p style="font-size:20px; font-weight:500; color:white; opacity:0.5">Log in your account</p>
                    <br>
                    <form>
                        <div class="form-group">
                            <label for="InputEmailLogin" style="font-size:20px; font-weight:500; color:white;">Email address</label>
                            <input type="email" class="form-control" id="InputEmailLogin" aria-describedby="emailHelp">
                        </div>
                        <div class="form-group">
                            <label for="InputPasswordLogin" style="font-size:20px; font-weight:500; color:white;">Password</label>
                            <input type="password" class="form-control" id="InputPasswordLogin">
                        </div>
                        <div class="form-group form-check" style="padding-left:24px">
                            <input type="checkbox" class="form-check-input" id="Check1" style="background-color : #130d0d; border-color:white;">
                            <label class="form-check-label" for="Check1">Remember me</label>
                            <a href="/home" style="float:right; font-weight:300; opacity:0.5; color:white;"><span><u>Forgot password?</u></span></a>
                        </div>
                        <button type="submit" class="btn btn-danger" style="font-size:15px; font-weight:300; border-radius:20px;padding:5px 30px 5px 30px">Log in</button>
                        <br><br><p style="font-size:10px; font-weight:400; color:white;">Don't have an account yet? <a href="/register" style="text-decoration:none;"><span style="color:red;"><b>Create your account now!</b></span></a></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
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
    }
}
</script>

<style scoped>

</style>