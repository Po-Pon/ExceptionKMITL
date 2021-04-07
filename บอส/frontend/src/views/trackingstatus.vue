<template>
    <body>
        <nav class="navbar" id="navbar_homepage">
        <a class="navbar-brand" href="/"><img id="logo_navbar" src="../assets/picture/homepage/LOGO2.png"></a>
        <form class="form-inline">
            <a id="navbar_register" href="#">Log In</a>
            <div id=line_register></div>
            <a id="navbar_register" href="#" style="margin-right: 30px">Register</a>
        </form>
        </nav>
        <center><p id="tracking_big_title">ติดตามสถานะเรื่องร้องเรียน</p></center>
        <div id="all_select_tab" class="container-fluid">
            <div class="row">
                <div class="col-5" id="select_by_type">
                    <p id="select_title">เลือกหมวดหมู่ร้องเรียน</p>
                    <select id="type_select" class="form-control" v-model="type_select">
                        <option value="" disabled selected>โปรดเลือกหมวดหมู่</option>
                        <option value="สภาพสังคม">สภาพสังคม</option>
                        <option value="การศึกษา">การศึกษา</option>
                        <option value="ทุนการศึกษา">ทุนการศึกษา</option>
                        <option value="การลงทะเบียนเรียน">การลงทะเบียนเรียน</option>
                        <option value="สภาพแวดล้อม">สภาพแวดล้อม</option>
                    </select>
                    <button id="select_button" class='btn' @click="type_report()">ตรวจสอบ</button>
                    <p id="error_massage">{{errortype}}</p>
                </div>
                <div class="col-2"></div>
                <div class="col-5" id="select_by_id">
                    <center><p id="select_title">กรอกหมายเลขประจำเอกสาร</p></center>
                    <input type="number" class="form-control" id="id_select" v-model="id_select" placeholder="กรอกหมายเลขประจำเอกสารเพื่อค้นหา">
                    <button id="select_button" class='btn' @click="id_report()">ตรวจสอบ</button>
                    <p id="error_massage">{{errorid}}</p>
                </div>
            </div>
        </div>
        <center><p id="tracking_big_title" style="font-size: 24px;" v-show="typescreen || id_screen">{{title}}</p></center>
        <div id="all_select_tab" class="container-fluid">
            <section  v-show="typescreen"><div class="row" v-for="reportform in reportforms" :key="reportform.report_form_id" style="margin-bottom: 7%;">
                <div class="col-5" id="reportform_description">
                    <p>หัวข้อเรื่องร้องเรียน : {{reportform.report_form_topic}}</p>
                    <p>เนื้อหาเรื่องร้องเรียน : {{reportform.problem_description}}</p>
                    <p>สถานะ : {{reportform.status}}</p>
                    <p>ประเภทเรื่องร้องเรียน : {{reportform.type}}</p>
                </div>
                <div class="col-7" id="reportform_bar">
                    <div class="row">
                        <div class="col-3" style="text-align: cenetr:">
                            <i :style="{'font-weight': statusfont(reportform.status, 0)}">ระบบได้รับเรื่องแล้ว</i>
                        </div>
                        <div class="col-3" style="text-align: cenetr:">
                            <i :style="{'font-weight': statusfont(reportform.status, 1)}">ระบบกำลังตรวจสอบ</i>
                        </div>
                        <div class="col-3" style="text-align: cenetr:">
                            <i :style="{'font-weight': statusfont(reportform.status, 2)}">{{extrastatusfont}}</i>
                        </div>
                        <div class="col-3" style="text-align: cenetr:">
                            <i :style="{'font-weight': statusfont(reportform.status, 3)}">ระบบดำเนินการสำเร็จ</i>
                        </div>
                    </div>
                </div>
            </div></section>
            <section  v-show="id_screen"><div class="row" v-for="reportform in reportforms" :key="reportform.report_form_id" style="margin-bottom: 7%;">
                <div class="col-12">
                    {{reportform.report_form_topic}}
                </div>
                <div class="col-12">
                    <div class="row" style="color: #ffffff">
                        <div class="col-3" style="text-align: cenetr:">
                            <i :style="{'font-weight': statusfont(reportform.status, 0)}">ระบบได้รับเรื่องแล้ว</i>
                        </div>
                        <div class="col-3" style="text-align: cenetr:">
                            <i :style="{'font-weight': statusfont(reportform.status, 1)}">ระบบกำลังตรวจสอบ</i>
                        </div>
                        <div class="col-3" style="text-align: cenetr:">
                            <i :style="{'font-weight': statusfont(reportform.status, 2)}">{{extrastatusfont}}</i>
                        </div>
                        <div class="col-3" style="text-align: cenetr:">
                            <i :style="{'font-weight': statusfont(reportform.status, 3)}">ระบบดำเนินการสำเร็จ</i>
                        </div>
                    </div>
                </div>
            </div></section>
        </div>
    </body>
</template>

<script>
import axios from "axios";
export default {
        data() {
            return{
                reportforms: [],
                type_select: null,
                id_select: "",
                typescreen: false,
                id_screen: false,
                title: "",
                errortype: "",
                errorid: "",
                extrastatusfont: ""
            }
        },
        methods:{
           type_report: function(){
            if(this.type_select == null){
                this.id_screen = false;
                this.typescreen = false;
                this.errortype = "กรุณาเลือกหมวดหมู่";
            }
            else{
                this.reportform = this.getreportform(this.type_select);
                this.id_screen = false;
                this.typescreen = true;
                this.errortype = "";
                this.title = "สถานะเรื่องร้องเรียน หมวดหมู่" + this.type_select;
            }
           },
           getreportform: function(type){
                if(type == "สภาพสังคม"){
                   axios.get("http://localhost:3000/getreportform/sociality")
                   .then((response) => {
                       this.reportforms = response.data;
                   }).catch((err) => {
                       console.log(err);
                   })
                }
                else if(type == "การศึกษา"){
                    axios.get("http://localhost:3000/getreportform/studying")
                   .then((response) => {
                       this.reportforms = response.data;
                   }).catch((err) => {
                       console.log(err);
                   })
                }
                else if(type == "ทุนการศึกษา"){
                    axios.get("http://localhost:3000/getreportform/scholarship")
                   .then((response) => {
                       this.reportforms = response.data;
                   }).catch((err) => {
                       console.log(err);
                   })
                }
                else if(type == "การลงทะเบียนเรียน"){
                    axios.get("http://localhost:3000/getreportform/register")
                   .then((response) => {
                       this.reportforms = response.data;
                   }).catch((err) => {
                       console.log(err);
                   })
                }
                else if(type == "สภาพแวดล้อม"){
                    axios.get("http://localhost:3000/getreportform/environment")
                   .then((response) => {
                       this.reportforms = response.data;
                   }).catch((err) => {
                       console.log(err);
                   })
                }
            },
          id_report: function(){
               if(this.id_select == ""){
                    this.id_screen = false;
                    this.typescreen = false;
                    this.errorid = "กรุณากรอกหมายเลขประจำเอกสาร";
               }
               else{
                    this.reportforms = this.getreportform_id(this.id_select);
                    this.id_screen = true;
                    this.typescreen = false;
                    this.errortype = "";
                    this.title = "สถานะเรื่องร้องเรียนของหมายเลข " + this.id_select;
                    this.errorid = "";
               }
           },
           getreportform_id: function(id){
               axios.get("http://localhost:3000/getreportform/searchbyid/" + id)
                    .then((response) => {
                    this.reportforms = response.data;
                }).catch((err) => {
                    console.log(err);
                })
           },
            statusfont: function(status, index){
                if(status == 0 && index == 0){
                    return '500';
                }
                else if(status == 1 && index == 1){
                    return '500';
                }
                else if(status == 2 && index == 2){
                    this.extrastatusfont = "ระบบกำลังดำเนินการ"
                    return '500';
                }
                else if(status == 4 && index == 2){
                    this.extrastatusfont = "ระบบไม่สามารถดำเนินการได้"
                    return '500';
                }
                else if(status == 3 && index == 3){
                    return '500';
                }
                else{
                    return '100';
                }
            }
           }
        }
</script>

<style lang="css">
    body{
      background-color: #1a1819;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }   
  #navbar_homepage{
    background-color: rgb(150, 54, 3);
    height: 12%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

#logo_navbar{
    margin-left: 3%;
    margin-top: -3%;
    width: 20%;
    height: 10%;
}

#navbar_manage{
    font-family: 'Kanit', sans-serif;
    text-decoration: none;
    color: #ffffff;
    font-size: 20px;
    font-weight: 200;
    margin-right: 40px;
}

#navbar_register{
    font-family: 'Kanit', sans-serif;
    text-decoration: none;
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
}

#line_register{
    width: 0px;
    border-left: 2px solid #ffffff;
    height: 39px;
    display: inline;
    margin-left: 10px;
    margin-right: 10px;
}
#tracking_big_title{
    color: #E35205;
    font-family: 'Kanit', sans-serif;
    font-size: 35px;
    font-weight: 400;
    margin-top: 10%;
}
#all_select_tab{
    padding-left: 8%;
    padding-right: 8%;
    margin-top: 7%;
}
#select_by_type{
    background-color: #ffe9d1;
    border-radius: 30px;
    text-align: center;
}
#type_select{
    background-color: #FFA07A;
    border: none;
    border-radius: 30px;
    width: 60%;
    margin-left: 20%;
    margin-top: 7%;
    margin-bottom: 7%;
    color: #1a1819;
    font-family: 'Kanit', sans-serif;
    font-size: 18px;
}
#select_by_id{
    background-color: #ffe9d1;
    border-radius: 30px;
    text-align: center;
}
#id_select{
    background-color: #FFA07A;
    border-radius: 30px;
    width: 60%;
    margin-top: 7%;
    margin-left: 20%;
    margin-bottom: 7%;
    color: #1a1819;
    font-family: 'Kanit', sans-serif;
    font-size: 18px;
    -webkit-appearance: none;
}
#select_title{
    color: #E35205;
    font-family: 'Kanit', sans-serif;
    font-size: 30px;
    font-weight: 800;
    padding-top: 5%;
}
#select_button{
    background-color: #FFA07A;
    margin-bottom: 7%;
    border-radius: 30px;
    color: #1a1819;
    font-family: 'Kanit', sans-serif;
    font-size: 18px;
}
#error_massage{
    color: #E35205;
    font-family: 'Kanit', sans-serif;
    font-size: 18px;
    padding-top: 1%;
}
#reportform_description{
    color: #ffffff;
    font-family: 'Kanit', sans-serif;
    font-size: 18px;
    padding-bottom: 1%;
    padding-right: 5%;
    word-wrap: break-word;
}
#reportform_bar{
    color: #ffffff;
    font-family: 'Kanit', sans-serif;
    font-size: 13px;
    padding-bottom: 1%;
    padding-left: 5%;
}
</style>