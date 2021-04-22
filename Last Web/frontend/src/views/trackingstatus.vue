<template>
    <body>
        <nnavbar></nnavbar>
        <center><p id="tracking_big_title">ติดตามสถานะเรื่องร้องเรียน</p></center>
        <div id="all_select_tab" class="container-fluid">
            <div class="row">
                <div class="col-5" id="select_by_type">
                    <p id="select_title">เลือกหมวดหมู่ร้องเรียน</p>
                    <select id="type_select" class="form-control" v-model="type_select">
                        <option value="" disabled selected>โปรดเลือกหมวดหมู่</option>
                        <option value="sociality">สภาพสังคม</option>
                        <option value="studying">การศึกษา</option>
                        <option value="scholarship">ทุนการศึกษา</option>
                        <option value="register">การลงทะเบียนเรียน</option>
                        <option value="environment">สภาพแวดล้อม</option>
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
                        <div class="col-12" style="margin-bottom : 3%;">
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" :style="tubestatus(reportform.status)" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="col-3" style="text-align: center">
                            <i :style="{'font-weight': statusfont(reportform.status, 0).weight}">ระบบได้รับเรื่องแล้ว</i>
                        </div>
                        <div class="col-3" style="text-align: center">
                            <i :style="{'font-weight': statusfont(reportform.status, 1).weight}">ระบบกำลังตรวจสอบ</i>
                        </div>
                        <div class="col-3" style="text-align: center">
                            <i :style="{'font-weight': statusfont(reportform.status, 2).weight}">{{extrafontstatus(reportform.status)}}</i>
                        </div>
                        <div class="col-3" style="text-align: center">
                            <i :style="{'font-weight': statusfont(reportform.status, 3).weight}">ระบบดำเนินการสำเร็จ</i>
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
                        <div class="col-12" style="margin-bottom : 3%;">
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" :style="tubestatus(reportform.status)" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="col-3" style="text-align: center">
                            <i :style="{'opacity': statusfont(reportform.status, 0).opa}">ระบบได้รับเรื่องแล้ว</i>
                        </div>
                        <div class="col-3" style="text-align: center">
                            <i :style="{'opacity': statusfont(reportform.status, 1).opa}">ระบบกำลังตรวจสอบ</i>
                        </div>
                        <div class="col-3" style="text-align: center">
                            <i :style="{'opacity': statusfont(reportform.status, 2).opa}">{{extrafontstatus(reportform.status)}}</i>
                        </div>
                        <div class="col-3" style="text-align: center">
                            <i :style="{'opacity': statusfont(reportform.status, 3).opa}">ระบบดำเนินการสำเร็จ</i>
                        </div>
                    </div>
                    <div class="row">
                        <p id="tracking_big_title" style="font-size : 24px; color : #ffffff;">หมวดหมู่ {{reportform.type}}</p>
                        <div class="col-12">
                            <p id="reportform_description_id">{{reportform.problem_description}}</p>
                        </div>
                    </div>
                </div>
            </div></section>
        </div>
        <footer>
        <div id="footer_homepage">
            <a id="footer_button" class="btn" href="#">HELP</a>
            <p id="address">King Mongkut's Institute of Technology Ladkrabang</p>
            <p id="address">1 Chalong Krung 1 Alley, Lat Krabang, Bangkok 10520</p>
            <p id="address">02 723 4900</p>
        </div>
    </footer>
    </body>
</template>

<script>
import nnavbar from "../components/banner_navbar.vue";
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
                errorid: ""
            }
        },
    components: {
      nnavbar
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
            }
           },
           getreportform: function(type){
                   axios.get("http://localhost:5000/getreportform/type/" + type)
                   .then((response) => {
                       this.reportforms = response.data.data;
                       this.id_screen = !response.data.status;
                       this.typescreen = response.data.status;
                       this.errortype = response.data.error;
                       this.title = "สถานะเรื่องร้องเรียน หมวดหมู่" + response.data.title;
                   }).catch((err) => {
                       console.log(err);
                   })
            },
          id_report: function(){
               if(this.id_select == ""){
                    this.id_screen = false;
                    this.typescreen = false;
                    this.errorid = "กรุณากรอกหมายเลขประจำเอกสาร";
               }
               else{
                    this.reportforms = this.getreportform_id(this.id_select);
               }
           },
           getreportform_id: function(id){
               axios.get("http://localhost:5000/getreportform/searchbyid/" + id)
                    .then((response) => {
                    this.reportforms = response.data.data;
                    this.id_screen = response.data.status;
                    this.typescreen = false;
                    this.errorid = response.data.error;
                    this.title = "สถานะเรื่องร้องเรียนของหมายเลข " + this.id_select;
                }).catch((err) => {
                    console.log(err);
                })
           },
           tubestatus: function(status){
               var backgroundcolor = "#ffffff";
               var width = "37.5%";
               if(status == 0){
                   width = "0%";
               }
               else if(status == 1){
                   backgroundcolor = ""
                   width = "37.5%";
               }
               else if(status == 2){
                   backgroundcolor = "#FFCC00"
                   width = "62.5%";
               }
               else if(status == 3){
                   backgroundcolor = "#6cc070"
                   width = "100%";
               }
               else if(status == 4){
                   backgroundcolor = "#df4759"
                   width = "62.5%";
               }
               return {"background-color" : backgroundcolor, "width" : width, "border-radius" : "4px"};
           },
            statusfont: function(status, index){
                var weight = "";
                var opacity = "1";
                if(status == index){
                    weight = "500";
                }
                else if(status == 4 && index == 2){
                    weight = "500";
                }
                else{
                    weight = "100";
                    opacity = "0.6";
                }
                return {weight : weight, opa: opacity}
            },
            extrafontstatus: function(status){
                if(status == 4){return "ระบบไม่สามารถดำเนินการได้"}
                else{return "ระบบกำลังดำเนินการ"}
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
    margin-top: 3.7%;
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
#reportform_description_id{
    color: #ffffff;
    font-family: 'Kanit', sans-serif;
    font-size: 18px;
    padding-top: 5%;
}
#reportform_bar{
    color: #ffffff;
    font-family: 'Kanit', sans-serif;
    font-size: 13px;
    padding-bottom: 1%;
    padding-left: 5%;
}
#footer_homepage{
    width: 100%;
    height: 78px;
    background-color: #E35205;
}

#address{
    font-family: 'Kanit', sans-serif;
    font-size: 15px;
    font-weight: 200;
    color : #ffffff;
    margin-left: 30px;
    margin-bottom: 0em;
}

#footer_button{
    width: 119px;
    height: 46px;
    border-radius: 10px;
    background-color: #ffffff;
    font-family: 'Kanit', sans-serif;
    font-size: 24px;
    font-weight: 500;
    float: right;
    text-align: center;
    margin-top: 16px;
    margin-right: 30px;
    color:  #1a1819;
}
</style>