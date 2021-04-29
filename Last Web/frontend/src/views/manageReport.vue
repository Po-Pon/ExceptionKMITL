<template>  
    <div>
    <!-- navbar -->
        <div class="banner" >
            <div class="topnav">
                <a href="/admin"><img src="/image/navbar/newlogo.png" width="110px" height="auto" style="padding-left: 20px;" alt=""></a>
                <ul>
                    <li id="comp1"><a href="/manageUser">Manage User</a></li>
                    <li id="comp1"><a href="/manageReport">Manage Forum</a></li>
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
                        <button type="button" id="button" class="btn btn-secondary" @click="filter_all()">All</button>
                    </div>
                    <div class="col-md-2">
                        <button type="button" id="button" class="btn btn-primary" @click="filter_New()">เรื่องร้องเรียนใหม่</button>
                    </div>
                    <div class="col-md-2">
                        <button type="button" id="button" class="btn btn-warning" @click="filter_Check()">กำลังตรวจสอบ</button>
                    </div>
                    <div class="col-md-2">
                        <button type="button" id="button" class="btn btn-info" @click="filter_InProgress()">กำลังดำเนินการ</button>
                    </div>
                    <div class="col-md-2">
                        <button type="button" id="button" class="btn btn-danger" @click="filter_NotPass()">ไม่ผ่าน</button>
                    </div>
                    <div class="col-md-2">
                        <button type="button" id="button" class="btn btn-success" @click="filter_Completed()">เสร็จสิ้น</button>
                    </div>
                </div>
            </div>
            <div class="row" style="margin-top: 20px;">
                <div class="div col-md-10">
                    <div class="table-responsive">
                        <table class="table table-bordered table-fixed table-hover">
                            <thead class="thead-dark" style="text-align:center;">
                                <th scope="col" class="col-md-1">ID</th>
                                <th scope="col" class="col-md-3">Date</th>
                                <th scope="col" class="col-md-3">ประเภทเรื่องร้องเรียน</th>
                                <th scope="col" class="col-md-2">Title</th>
                                <th scope="col" class="col-md-2">Username</th>
                                <th scope="col" class="col-md-1">Action</th>
                            </thead>
                            <tbody>
                                <tr v-for='report in report_form_all' :key="report.report_form_id" :class="{'table-primary': report.status == 0, 'table-warning': report.status == 1, 'table-info': report.status == 2, 'table-success': report.status == 3, 'table-danger': report.status == 4}">
                                    <td class="col-md-1">{{report.report_form_id}}</td>
                                    <td class="col-md-3">{{report.report_form_date_time}}</td>
                                    <td class="col-md-3">{{report.type}}</td>
                                    <td class="col-md-2">{{report.report_form_topic}}</td>
                                    <td class="col-md-2">{{report.user_studentid}}</td>
                                    <td id="td_action" class="col-md-1">
                                        <a v-if="report.status != 3 && report.status != 4" @click="check_nextStatus(report.report_form_id, report.status)"><i class="fas fa-caret-square-right" style="color:blue; font-size:20px; margin: 0px 15px 0px 5px"></i></a>
                                        <a v-if="report.status != 3 && report.status != 4" @click="check_Notpass(report.report_form_id, report.status)"><i class="fas fa-ban" style="color:red; font-size:20px"></i></a>
                                        <a v-if="report.status == 3"><i class="fas fa-search" style="color:blue; font-size:20px; margin: 0px 15px 0px 5px"></i></a>
                                        <a v-if="report.status == 4" @click="check_nextStatus(report.report_form_id, report.status)"><i class="fas fa-undo" style="color:blue; font-size:20px; margin: 0px 15px 0px 5px"></i></a>
                                        <a v-if="report.status == 3 || report.status == 4"><i class="fas fa-times-circle" style="color:red; font-size:20px"></i></a>
                                    </td>
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
                    <input style="margin: 10px 0px 0px 25px;" id="clear" type='submit' value='clear' @click="clear()">                
                </div>
            </div>
        </div>
        <div class="modal" :class = "{ 'is-active' : modal_nextStatus }">
            <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title" style="margin-bottom:-8px;">Next Status</p>
                        <button class="delete" aria-label="close" @click='modal_nextStatus = false'></button>
                    </header>
                    <section class="modal-card-body" style="font-size:20px; margin-top:-10px; margin-bottom: -20px">
                            <template v-if="form_status_current == 'ไม่ผ่าน'">
                                คุณต้องการที่จะส่ง Report Form ID: {{formid_nextStatus}} ไปยัง Status เริ่มต้น ?<br>
                                current status: <span class="bg-primary text-white">{{form_status_current}}</span> <i class="fas fa-arrow-right"></i> status next: <span class="bg-primary text-white">{{form_status_next}}</span>
                            </template>
                            <template v-else>
                                คุณต้องการที่จะส่ง Report Form ID: {{formid_nextStatus}} ไปยัง Status ถัดไป?<br>
                                current status: <span class="bg-primary text-white">{{form_status_current}}</span> <i class="fas fa-arrow-right"></i> status next: <span class="bg-primary text-white">{{form_status_next}}</span>
                            </template>
                        <div class="columns">
                            <div class="column">
                                <p class="control" style="padding-top:10px;"> 
                                    <span style="padding-left: 73%;"><button class="button" @click="modal_nextStatus = false">Cancel</button></span>
                                    <span style="padding-left: 12px;" @click="nextStatus(formid_nextStatus)"><button class="button is-danger">Yes</button></span>
                                 </p>
                            </div>
                        </div>
                    </section>
                <footer class="modal-card-foot">
                    <!-- footer -->
                </footer>
            </div>
        </div>
        <div class="modal" :class = "{ 'is-active' : modal_Notpass }">
            <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title" style="margin-bottom:-8px;">Set status is not passed</p>
                        <button class="delete" aria-label="close" @click='modal_Notpass = false'></button>
                    </header>
                    <section class="modal-card-body" style="font-size:20px; margin-top:-10px; margin-bottom: -20px">
                            <!-- คุณต้องการที่จะลบ Report Form ID: {{formid_Notpass}} ออกจากระบบ? -->
                            คุณต้องการที่จะส่ง Report Form ID: {{formid_Notpass}} ไปยัง Status "ไม่ผ่าน" ?<br>
                            current status: <span class="bg-primary text-white">{{form_status_current}}</span> <i class="fas fa-arrow-right"></i> status next: <span class="bg-primary text-white">ไม่ผ่าน</span>
                        <div class="columns">
                            <div class="column">
                                <p class="control" style="padding-top:10px;"> 
                                    <span style="padding-left: 73%;"><button class="button" @click="modal_Notpass = false">Cancel</button></span>
                                    <span style="padding-left: 12px;" @click="NotPass(formid_Notpass)"><button class="button is-danger">Yes</button></span>
                                 </p>
                            </div>
                        </div>
                    </section>
                <footer class="modal-card-foot">
                    <!-- footer -->
                </footer>
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
        filterStatus: null,
        // problem sort
        problem: '',
        // Modal
        modal_nextStatus: false,
        modal_Notpass: false,
        // nextstatus 
        formid_nextStatus: null,
        formid_Notpass: null,
        form_status_current: null,
        form_status_next: null,
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
        // loop แก้ไข format date
        for(i = 0; i < this.report_form_all.length; i++){
            this.report_form_all[i].report_form_date_time = (new Date(this.report_form_all[i].report_form_date_time)).toString().substring(0,24);
        }
        // copy report ไว้ใช้
        this.report_form_all_copy = this.report_form_all
        console.log(this.report_form_all)
      })
      .catch((err) => {
        console.log(err);
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
            return this.report_form_all = this.report_form_all_copy.filter(status => status.status === this.filterStatus);
        }
        else{
            return this.report_form_all = this.report_form_all_copy;
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
    check_nextStatus(report_form_id, status){
        this.formid_nextStatus = report_form_id;
        if(status == 0){this.form_status_current = 'เรื่องร้องเรียนใหม่'; this.form_status_next = 'กำลังตรวจสอบ';}
        if(status == 1){this.form_status_current = 'กำลังตรวจสอบ'; this.form_status_next = 'กำลังดำเนินการ'}
        if(status == 2){this.form_status_current = 'กำลังดำเนินการ'; this.form_status_next = 'เสร็จสิ้น'}
        if(status == 4){this.form_status_current = 'ไม่ผ่าน'; this.form_status_next = 'เรื่องร้องเรียนใหม่'}
        this.modal_nextStatus = true;
    },
    check_Notpass(report_form_id, status){
        this.formid_Notpass = report_form_id
        if(status == 0){this.form_status_current = 'เรื่องร้องเรียนใหม่';}
        if(status == 1){this.form_status_current = 'กำลังตรวจสอบ';}
        if(status == 2){this.form_status_current = 'กำลังดำเนินการ';}
        this.modal_Notpass = true;
    },
    nextStatus(report_id){
        this.modal_nextStatus = false;
        location.reload();
        axios.put("http://localhost:5000/actionReport/nextStatus/"+report_id)
        .then((response) =>{
            console.log(response)
        }).catch((err) => {
            console.log(err);
        })
    },
    NotPass(report_id){
        axios.put("http://localhost:5000/actionReport/NotpassStatus/"+report_id).then((response) =>{
            console.log(response)
        }).catch((err) => {
            console.log(err);
        })
    },
    deleteReport(report_id){
        axios.delete("http://localhost:5000/actionReport/delete/:id"+report_id).then((response) =>{
            console.log(response)
        }).catch((err) => {
            console.log(err);
        })
    },
  },
};
</script>

<style scoped>
    #button {
        width: 150px;
        border-color:rgb(230, 230, 230);
    }
    .box{
        margin: 30px 20px 20px 20px; 
        background-color: rgb(72, 72, 72);
    }
    /* scrolling vertical tbody res */
    .table-fixed{
        background-color:rgb(58, 58, 58);
    }
    .table-fixed thead {
        background-color:rgb(58, 58, 58);
        overflow-y: auto;
        width: 98.5%;
    }
    .table-fixed tbody{
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