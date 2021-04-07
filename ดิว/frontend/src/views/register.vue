<template>
    <div class="container p-6 mt-4">
        <div class="row">
            <div class="col-sm-4" id="registerLeft">
                <!-- <div class="alert alert-success alert-dismissible fade show" role="alert">
                    With Bootstrap!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div> -->
                <div class="p-6" style="background-color:red;">
                    <img src="/image/navbar/newlogo.png" width="100%" height="auto" alt="">
                </div>
                <img src="/image/login/cloud.png" alt="" id="cloud" style="margin-top:200px">
            </div>
            <div class="col-md-8" id="registerRight">
                <div class="p-6 ml-6 mr-6" style="background-color:#130d0d">
                    <p style="font-size:35px; font-weight:500; color:white;">Welcome to <span style="color:red">ExceptionKMITL!</span></p>
                    <p style="font-size:20px; font-weight:500; color:white; opacity:0.5">Create your account</p>
                    <form>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6" style="margin-left: -15px;">
                                    <div class="form-group">
                                        <label for="InputFirstnameReg" style="font-size:18px; font-weight:500; color:white;">First Name</label>
                                        <input type="text" class="form-control" id="InputFirstnameReg">
                                    </div>
                                    <div class="form-group">
                                        <label for="InputIdReg" style="font-size:18px; font-weight:500; color:white;">Student ID</label>
                                        <input type="text" class="form-control" id="InputIdReg">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="InputLastnameReg" style="font-size:18px; font-weight:500; color:white;">Last Name</label>
                                        <input type="text" class="form-control" id="InputLastnameReg">
                                    </div>
                                    <div class="form-group">
                                        <label for="InputStatusReg" style="font-size:18px; font-weight:500; color:white;">Educational Status</label>
                                        <input type="text" class="form-control" id="InputStatusReg">
                                     </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="InputEmailReg" style="font-size:18px; font-weight:500; color:white;">Email address</label>
                            <input type="email" class="form-control" id="InputEmailReg" aria-describedby="emailHelp">
                        </div>
                        <div class="form-group">
                            <label for="InputPasswordReg" style="font-size:18px; font-weight:500; color:white;">Password</label>
                            <input type="password" class="form-control" id="InputPasswordReg">
                        </div>
                        <div class="form-group">
                            <label for="InputPasswordRegCheck" style="font-size:18px; font-weight:500; color:white;">Repeat Password</label>
                            <input type="password" class="form-control" id="InputPasswordRegCheck">
                        </div>
                        <div class="form-group form-check" style="padding-left:24px">
                            <input type="checkbox" class="form-check-input" id="Check2" style="background-color : #130d0d; border-color:white;">
                            <label class="form-check-label" for="Check2">I agree with terms and conditions</label>
                        </div>
                        <button type="submit" class="btn btn-danger" style="font-size:15px; font-weight:300; border-radius:18px;padding:5px 30px 5px 30px">Sign up</button>
                        <br><br><p style="font-size:10px; font-weight:400; color:white;">Already have an account? <a href="/login" style="text-decoration:none;"><span style="color:red;"><b>Log in your account now!</b></span></a></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    methods:{
        togglePassReg() {
        var x = document.getElementById("InputPasswordReg");
            if (x.type === "password") {
                x.type = "text";
            }
            else{
                x.type = "password";
            }
        },
        togglePassRegCheck() {
        var x = document.getElementById("InputPasswordRegCheck");
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