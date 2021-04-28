<template>  
    <div>
    <!-- navbar -->
        <div class="banner" >
            <div class="topnav">
                <a href="/admin"><img src="/image/navbar/newlogo.png" width="110px" height="auto" style="padding-left: 20px;" alt=""></a>
                <ul>
                    <li id="comp1"><a href="/manageUser">Manage User</a></li>
                    <li id="comp1"><a href="">Manage Forum</a></li>
                    <li id="comp1"><a href="/manageReport">Manage Report</a></li>
                    <template v-if="id == ''">
                        <li id="comp2"><a href="/login">Log In</a></li>
                        <div class="line"></div>
                        <li id="comp2"><a href="/register">Register</a></li>
                    </template>
                    <div class="dropdown" v-if="id !=''">
                        <button class="btn btn-danger  dropdown-toggle" id="comp3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fas fa-user"></i> {{id}}
                        </button>
                        <p class="dropdown-menu" >
                            <button class="dropdown-item text-danger" type="button" @click="logout()">ออกจากระบบ</button>
                        </p>
                    </div>
                </ul>
            </div>
        </div>
        <div class="box">
            <div class="page-header text-primary" style="text-align:center;">
                <h1>Manage Report</h1>      
            </div>
            <hr>
            <div class="container">
                <div class="row">
                    <div class="col-md-2">
                        <button type="button" class="btn btn-secondary" @click="filter_all()">All</button>
                    </div>
                    <div class="col-md-2">
                        <button type="button" class="btn btn-primary" @click="filter_New()">เรื่องร้องเรียนใหม่</button>
                    </div>
                    <div class="col-md-2">
                        <button type="button" class="btn btn-warning" @click="filter_Check()">กำลังตรวจสอบ</button>
                    </div>
                    <div class="col-md-2">
                        <button type="button" class="btn btn-info" @click="filter_InProgress()">กำลังดำเนินการ</button>
                    </div>
                    <div class="col-md-2">
                        <button type="button" class="btn btn-success" @click="filter_Completed()">เสร็จสิ้น</button>
                    </div>
                    <div class="col-md-2">
                        <button type="button" class="btn btn-danger" @click="filter_NotPass()">ไม่ผ่าน</button>
                    </div>
                </div>
            </div>
            <div class="row" style="margin-top: 20px">
                <div class="div col-md-10">
                    <div class="table-responsive">
                        <table class="table table-bordered table-fixed">
                            <thead class="table-primary" style="text-align:center;">
                                <th scope="col" class="col-1">ID</th>
                                <th scope="col" class="col-3">Date</th>
                                <th scope="col" class="col-3">ประเภทเรื่องร้องเรียน</th>
                                <th scope="col" class="col-2">Title</th>
                                <th scope="col" class="col-2">Username</th>
                                <th scope="col" class="col-1">Action</th>
                            </thead>
                            <tbody class="table-primary">
                                    <tr v-for='report in report_form_all' :key="report.report_form_id">
                                        <td class="col-1">{{report.report_form_id}}</td>
                                        <td class="col-3">{{report.report_form_date_time}}</td>
                                        <td class="col-3">{{report.type}}</td>
                                        <td class="col-2">{{report.report_form_topic}}</td>
                                        <td class="col-2">{{report.acc_email}}</td>
                                        <td class="col-1"><a @click="nextStatus(report.report_form_id)"><i class="fas fa-caret-square-right" style="color:blue; font-size:20px; margin: 0px 15px 0px 5px"></i></a><a @click="NotPass(report.report_form_id)"><i class="fas fa-times-circle" style="color:red; font-size:20px"></i></a></td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="div col-md-2" style="margin-top: 10px">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="check1" id="check1" value="1" v-model="problem" @click="problem_1()">
                        <label class="form-check-label">
                            ปัญหาด้านการเรียน
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="check2" id="check2" value="2" v-model="problem" @click="problem_2()">
                        <label class="form-check-label">
                            ปัญหาด้านทุนการศึกษา
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="check3" id="check3" value="3" v-model="problem" @click="problem_3()">
                        <label class="form-check-label">
                            ปัญหาด้านสังคม
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="check4" id="check4" value="4" v-model="problem" @click="problem_4()">
                        <label class="form-check-label">
                            ปัญหาด้านระบบการลงทะเบียน
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="check5" id="check5" value="5" v-model="problem" @click="problem_5()">
                        <label class="form-check-label">
                            ปัญหาด้านสภาพสิ่งแวดล้อม
                        </label>
                    </div>
                    <p style="margin: 10px 0px 0px 25px; color:magenta"><a style="text-decoration:none;" @click="clear()">Clear</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
        // start
        datauser: null,
        id: "",
        data: null,
        report_form_all: [],
        report_form_all_copy: null,
        report_form_sociality: null,
        report_form_studying: null,
        report_form_scholarship: null,
        report_form_register: null,
        report_form_environment: null,
        filter: null,
        filterAll: null,
        filterStatus: null,
        // problem sort
        problem: '',
        // end
    };
  },
  created() {
    this.datauser = JSON.parse(localStorage.getItem("formLogin"));
    if (this.datauser != null) {
      this.id = this.datauser.user_id;
    }
    axios
      .get("http://localhost:5000/dataReport")
      .then((response) => {
        var i;
        // set ตามประเภท
        this.data = response.data;
        this.report_form_sociality = this.data.report_sociality
        this.report_form_studying = this.data.report_studying
        this.report_form_scholarship = this.data.report_scholarship
        this.report_form_register = this.data.report_register
        this.report_form_environment = this.data.report_environment
        // Loop รวม report ทั้งหมด
        for(i = 0 ; this.report_form_sociality.length > i ; i++){
            this.report_form_all.push(this.report_form_sociality[i]);
        }
        for(i = 0 ; this.report_form_studying.length > i; i++){
            this.report_form_all.push(this.report_form_studying[i]);
        }
        for(i = 0 ; this.report_form_environment.length > i; i++){
            this.report_form_all.push(this.report_form_scholarship[i]);
        }
        for(i = 0 ; this.report_form_scholarship.length > i; i++){
            this.report_form_all.push(this.report_form_register[i]);
        }
        for(i = 0 ; this.report_form_register.length > i ; i++){
            this.report_form_all.push(this.report_form_environment[i]);
        }
        this.report_form_all_copy = this.report_form_all
        console.log(this.report_form_all)
        // for(let i = 0; i < this.report_form.length; i++){
        //     this.report_form[i].report_form_date_time = (new Date(this.report_form[i].report_form_date_time)).toString().substring(0,25);
        // }
      })
      .catch((err) => {
        if (err) throw err;
      });
  },
  methods: {
    logout() {
      this.id = "";
      this.datauser = "";
      localStorage.removeItem("formLogin");
      console.log("Log out!");
      this.$router.push({ name: "Home" });
    },
    reset_checkbox(){
        this.problem = ''
    },
    clear(){
        this.problem = ''
        if(this.filterStatus != null){
            this.report_form_all = this.report_form_all_copy.filter(status => status.status === this.filterStatus);
        }
        else{
            this.report_form_all = this.report_form_all_copy;
        }
    },
    filter_all(){
        this.reset_checkbox();
        this.filterStatus = null;
        this.report_form_all = this.report_form_all_copy;
    },
    filter_New(){
        this.reset_checkbox();
        this.filterStatus = 0;
        this.report_form_all = this.report_form_all_copy.filter(status => status.status == 0);
    },
    filter_Check(){
        this.reset_checkbox();
        this.filterStatus = 1;
        this.report_form_all = this.report_form_all_copy.filter(status => status.status == 1);
    },
    filter_InProgress(){
        this.reset_checkbox();
        this.filterStatus = 2;
        this.report_form_all = this.report_form_all_copy.filter(status => status.status == 2);
    },
    filter_Completed(){
        this.reset_checkbox();
        this.filterStatus = 3;
        this.report_form_all = this.report_form_all_copy.filter(status => status.status == 3);
    },
    filter_NotPass(){
        this.reset_checkbox();
        this.filterStatus = 4;
        this.report_form_all = this.report_form_all_copy.filter(status => status.status == 4);
    },
    problem_1(){
        if(this.filterStatus != null){
            this.report_form_all = this.report_form_all_copy.filter(types => types.type == 'ปัญหาด้านการเรียน' && types.status === this.filterStatus);
        }
        else{
            this.report_form_all = this.report_form_all_copy.filter(types => types.type == 'ปัญหาด้านการเรียน');

        }
    },
    problem_2(){
        if(this.filterStatus != null){
            this.report_form_all = this.report_form_all_copy.filter(types => types.type == 'ปัญหาด้านทุนการศึกษา' && types.status === this.filterStatus);
        }
        else{
            this.report_form_all = this.report_form_all_copy.filter(types => types.type == 'ปัญหาด้านทุนการศึกษา');

        }
    },
    problem_3(){
        if(this.filterStatus != null){
            this.report_form_all = this.report_form_all_copy.filter(types => types.type == 'ปัญหาด้านสังคม' && types.status === this.filterStatus);
        }
        else{
            this.report_form_all = this.report_form_all_copy.filter(types => types.type == 'ปัญหาด้านสังคม');

        }
    },
    problem_4(){
        if(this.filterStatus != null){
            this.report_form_all = this.report_form_all_copy.filter(types => types.type == 'ปัญหาด้านระบบการลงทะเบียน' && types.status === this.filterStatus);
        }
        else{
            this.report_form_all = this.report_form_all_copy.filter(types => types.type == 'ปัญหาด้านระบบการลงทะเบียน');

        }
    },
    problem_5(){
        if(this.filterStatus != null){
            this.report_form_all = this.report_form_all_copy.filter(types => types.type == 'ปัญหาด้านสภาพสิ่งแวดล้อม' && types.status === this.filterStatus);
        }
        else{
            this.report_form_all = this.report_form_all_copy.filter(types => types.type == 'ปัญหาด้านสภาพสิ่งแวดล้อม');

        }
    },
    nextStatus(report_id){
        alert(report_id)
    },
    NotPass(report_id){
        alert(report_id)
    },
  },
};
</script>

<style scoped>
    button {
        width: 150px;
        border-color:rgb(230, 230, 230);
    }
    .box{
        margin: 30px 20px 20px 20px; 
        background-color: rgb(60, 60, 60);
    }
    /* scrolling vertical tbody res */
    .table-fixed tbody {
        max-height: 300px;
        overflow-y: auto;
        width: 100%;
    }
    .table-fixed thead,
    .table-fixed tbody,
    .table-fixed tr,
    .table-fixed td,
    .table-fixed th {
        display: block;
    }
    .table-fixed tbody td,
    .table-fixed tbody th,
    .table-fixed thead > th {
        float: left;
        position: relative;
    }
    .table-fixed::after{
        content: '';
        clear: both;
        display: block;
    }
    .head-table{
        background-color:blue;
    }
    h1{
        font-weight: 800;
    }
    .form-check{
        padding-top: 10px;
    }
    .form-check-label{
        font-size:13px;
        color:yellowgreen;
    }
</style>