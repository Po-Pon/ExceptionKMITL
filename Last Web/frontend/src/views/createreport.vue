<template>
    <div>
    <nav class="navbar" id="navbar_homepage">
        <a class="navbar-brand" href="/"><img id="logo_navbar" src=""></a>
        <form class="form-inline">
            <a id="navbar_register" href="#">Log In</a>
            <div id=line_register></div>
            <a id="navbar_register" href="#" style="margin-right: 30px">Register</a>
        </form>
    </nav>
    <p id="createreport_big_title">แบบฟอร์มร้องเรียน</p>
    <div class="container" id="all_report" :style="{'background-color' : backcolor}">
        <div class="row">
            <div class="col-12">
                <div class="form-group">
                    <label for="report_topic">หัวข้อเรื่องร้องเรียน</label>
                    <input type="text" v-model="topic"  class="form-control" id="report_topic" aria-describedby="reporttopichelp" placeholder="ใส่หัวข้อเรื่องร้องเรียน">
                    <small id="reporttopichelp" class="form-text">*จำเป็น</small>
                </div>
                <div class="form-group">
                    <label for="report_topic">คำอธิบาย</label>
                    <textarea class="form-control" v-model="description" id="report_description" rows="5" aria-describedby="reporttopichelp" placeholder="ใส่คำอธิบาย"></textarea>
                    <small id="reporttopichelp" class="form-text">*จำเป็น</small>
                </div>
                 <div class="form-group" v-if="type == 'sociality'">
                    <label for="report_topic">สถานที่ซึ่งต้องการร้องเรียน</label>
                    <input v-model="sociality_location" type="text" class="form-control" id="report_topic" placeholder="ใส่สถานที่">
                </div>
                <div class="form-group" v-if="type == 'education'">
                    <label for="report_topic">รหัสวิชาที่ต้องการร้องเรียน</label>
                    <input v-model="education_subject_id" type="text" class="form-control" id="report_topic" aria-describedby="reporttopichelp" placeholder="ใส่รหัสวิชา">
                    <small id="reporttopichelp" class="form-text">*จำเป็น</small>
                </div>
                <div class="form-group" aria-describedby="reporthelp" v-if="type == 'scholarship'">
                    <label for="report_topic">เลือกประเภททุนการศึกษา</label>
                    <select class="form-control" v-model="scholarship_type">
                        <option value="กยศ.">กยศ. (กองทุนให้กู้ยืมเพื่อการศึกษา)</option>
                    </select>
                    <small id="reporthelp" class="form-text">*จำเป็น</small>
                </div>
                <div class="form-group" v-if="type == 'register'">
                    <label for="report_topic">ชื่อของรายวิชา</label>
                    <input v-model="register_subject" type="text" class="form-control" id="report_topic" aria-describedby="reporttopichelp" placeholder="ใส่ชื่อของรายวิชา">
                    <small id="reporttopichelp" class="form-text">*จำเป็น</small>
                </div>
                <div class="form-group" v-if="type == 'environment'">
                    <label for="report_topic">สถานที่ซึ่งต้องการร้องเรียน</label>
                    <input v-model="environment_location" type="text" class="form-control" id="report_topic" aria-describedby="reporttopichelp" placeholder="ใส่สถานที่">
                    <small id="reporttopichelp" class="form-text">*จำเป็น</small>
                </div>
                <div class="form-group">
                    <label for="report_topic">เลือกเงื่อนไขในการร้องเรียน</label>
                    <select class="form-control" v-model="send_status">
                        <option>ไม่ด่วน</option>
                        <option>ด่วน</option>
                    </select>
                </div>
                <button id="btn_submit" type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </div>
    <footer>
        <div id="footer_homepage">
            <a id="footer_button" class="btn" href="#">HELP</a>
            <p id="address">King Mongkut's Institute of Technology Ladkrabang</p>
            <p id="address">1 Chalong Krung 1 Alley, Lat Krabang, Bangkok 10520</p>
            <p id="address">02 723 4900</p>
        </div>
    </footer>
    </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

    export default {
        data() {
            return{
            backcolor: "#ffffff",
            type: null,
            topic: "",
            description: "",
            send_status: "",
            sociality_location: "",
            education_subject_id: 0,
            scholarship_type: "",
            register_subject: "",
            environment_location: ""
            }
        },
        created () {
            this.backcolor = localStorage.getItem("color");
            this.type = localStorage.getItem("type");
            console.log(localStorage.getItem("color"));
        },
   validations: {
     email: {
          required: required,
          email: email
     }
   }
    }
</script>

<style>
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
#createreport_big_title{
    color: #E35205;
    font-family: 'Kanit', sans-serif;
    font-size: 35px;
    font-weight: 700;
    text-align: center;
    padding-top: 8%;
}
#all_report{
    padding-top: 3%;
    padding-left: 5%;
    padding-right: 5%;
    border-radius: 30px;
    color: #1a1819;
    font-family: 'Kanit', sans-serif;
    margin-bottom: 5%;
}
#btn_submit{
    margin-bottom: 3%;
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
