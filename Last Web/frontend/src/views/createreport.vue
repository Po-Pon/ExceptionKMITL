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
                    <input type="text" v-model="$v.topic.$model"  class="form-control" :class="{'is-invalid' : $v.topic.$error}" id="report_topic" aria-describedby="reporttopichelp" placeholder="ใส่หัวข้อเรื่องร้องเรียน">
                    <template v-if="$v.topic.$error">
                        <p v-if="!$v.topic.required">*กรุณาเติมข้อมูลในช่องนี้</p>
                        <p v-if="!$v.topic.minLength">*ความยาวหัวข้อที่ตั้งต้องไม่ต่ำกว่า 10 ตัวอักษร</p>
                    </template>
                </div>
                <div class="form-group">
                    <label for="report_topic">คำอธิบาย</label>
                    <textarea class="form-control" v-model="$v.description.$model" :class="{'is-invalid' : $v.description.$error}" id="report_description" rows="5" aria-describedby="reporttopichelp" placeholder="ใส่คำอธิบาย"></textarea>
                    <template v-if="$v.description.$error">
                        <p v-if="!$v.description.required">*กรุณาเติมข้อมูลในช่องนี้</p>
                        <p v-if="!$v.description.minLength">*คำอธิบายควรมีความยาวไม่ต่ำกว่า 50 ตัวอักษร</p>
                    </template>
                </div>
                 <div class="form-group" v-if="type == 'สภาพสังคม'">
                    <label for="report_topic">สถานที่ซึ่งต้องการร้องเรียน</label>
                    <input v-model="$v.sociality_location.$model" type="text" class="form-control" :class="{'is-invalid' : $v.sociality_location.$error}" id="report_topic" placeholder="ใส่สถานที่">
                    <template v-if="$v.sociality_location.$error">
                        <p v-if="!$v.sociality_location.required">*กรุณาเติมข้อมูลในช่องนี้</p>
                        <p v-if="!$v.sociality_location.minLength">ชื่อสถานที่ควรมีความยาวไม่ต่ำกว่า 5 ตัวอักษร</p>
                    </template>
                </div>
                <div class="form-group" v-if="type == 'การศึกษา'">
                    <label for="report_topic">รหัสวิชาที่ต้องการร้องเรียน</label>
                    <input v-model="$v.education_subject_id.$model" type="text" class="form-control" :class="{'is-invalid' : $v.education_subject_id.$error}" id="report_topic" aria-describedby="reporttopichelp" placeholder="ใส่รหัสวิชา">
                    <template v-if="$v.education_subject_id.$error">
                        <p v-if="!$v.education_subject_id.required">*กรุณาเติมข้อมูลในช่องนี้</p>
                        <p v-if="!$v.education_subject_id.numeric">*กรุณาใส่เป็นตัวเลขเท่านั้น</p>
                        <p v-if="!($v.education_subject_id.minLength && $v.education_subject_id.maxLength)">*คุณใส่ข้อมูลไม่ตรงกับความยาวที่กำหนด</p>
                    </template>
                </div>
                <div class="form-group" aria-describedby="reporthelp" v-if="type == 'ทุนการศึกษา'">
                    <label for="report_topic">เลือกประเภททุนการศึกษา</label>
                    <select class="form-control" v-model="$v.scholarship_type.$model" :class="{'is-invalid' : $v.scholarship_type.$error}">
                        <option>ทุนอุดหนุนการศึกษาประภท ก</option>
                        <option>ทุนอุดหนุนการศึกษาประภท ข</option>
                        <option>ทุนเรียนดี</option>
                        <option>ทุนผู้ทำคุณประโยชน์ให้แก่สถาบัน</option>
                        <option>ทุนผู้สร้างชื่อเสียงในนามสถาบัน</option>
                        <option>ทุนให้ยืมเพื่อการศึกษาในกรณีฉุกเฉิน</option>
                        <option>ทุนสนับสนุนนักศึกษาในภาวะวิกฤต</option>
                        <option>ทุนสนับสนุนการนำเสนอผลงานทางวิชาการ</option>
                        <option>ทุนสนับสนุนการแลกเปลี่ยนและฝึกงานต่างประเทศ</option>
                        <option>ทุนช่วยเหลือนักศึกษาในสถานการณ์การแพร่ระบาดของโรค COVID 19</option>
                        <option>อื่นๆ</option>
                    </select>
                    <template v-if="$v.scholarship_type.$error">
                        <p v-if="!$v.scholarship_type.required">*กรุณาเติมข้อมูลในช่องนี้</p>
                        <p v-if="!$v.scholarship_type.not_in">*คุณไม่สามารถใส่ข้อมูลนอกเหนือจากในข้อมูลที่เรามีให้ได้</p>
                    </template>
                </div>
                <div class="form-group" v-if="type == 'การลงทะเบียนเรียน'">
                    <label for="report_topic">ชื่อของรายวิชา</label>
                    <input v-model="$v.register_subject.$model" type="text" class="form-control" :class="{'is-invalid' : $v.register_subject.$error}" id="report_topic" aria-describedby="reporttopichelp" placeholder="ใส่ชื่อของรายวิชา">
                    <template v-if="$v.register_subject.$error">
                        <p v-if="!$v.register_subject.required">*กรุณาเติมข้อมูลในช่องนี้</p>
                        <p v-if="!$v.register_subject.minLength">*ชื่อรายวิชาต้องไม่ต่ำกว่า 5 ตัวอักษร</p>
                    </template>
                </div>
                <div class="form-group" v-if="type == 'สภาพแวดล้อม'">
                    <label for="report_topic">สถานที่ซึ่งต้องการร้องเรียน</label>
                    <input v-model="$v.environment_location.$model" type="text" class="form-control" :class="{'is-invalid' : $v.environment_location.$error}" id="report_topic" aria-describedby="reporttopichelp" placeholder="ใส่สถานที่">
                    <template v-if="$v.environment_location.$error">
                        <p v-if="!$v.environment_location.required">*กรุณาเติมข้อมูลในช่องนี้</p>
                        <p v-if="!$v.environment_location.minLength">*ชื่อสถานที่ควรมีความยาวไม่ต่ำกว่า 5 ตัวอักษร</p>
                    </template>
                </div>
                <div class="form-group">
                    <label for="report_topic">เลือกเงื่อนไขในการร้องเรียน</label>
                    <select class="form-control" v-model="$v.send_status.$model" :class="{'is-invalid' : $v.send_status.$error}">
                        <option>ไม่ด่วน</option>
                        <option>ด่วน</option>
                    </select>
                    <template v-if="$v.send_status.$error">
                        <p v-if="!$v.send_status.required">*กรุณาเติมข้อมูลในช่องนี้</p>
                        <p v-if="!$v.send_status.not_in">*ท่านเลือกได้แค่ด่วน/ไม่ด่วนเท่านั้น</p>
                    </template>
                </div>
                <button id="btn_submit" type="submit" class="btn btn-primary" @click="submit(type)">Submit</button>
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
import {required, numeric, minLength, maxLength} from 'vuelidate/lib/validators'

const checkScholarshipType = (value) => {
    let allscholarship = ["ทุนอุดหนุนการศึกษาประภท ก", "ทุนอุดหนุนการศึกษาประภท ข", "ทุนเรียนดี", "ทุนผู้ทำคุณประโยชน์ให้แก่สถาบัน",
    "ทุนผู้สร้างชื่อเสียงในนามสถาบัน", "ทุนให้ยืมเพื่อการศึกษาในกรณีฉุกเฉิน", "ทุนสนับสนุนนักศึกษาในภาวะวิกฤต", "ทุนสนับสนุนการนำเสนอผลงานทางวิชาการ",
    "ทุนสนับสนุนการแลกเปลี่ยนและฝึกงานต่างประเทศ", "ทุนช่วยเหลือนักศึกษาในสถานการณ์การแพร่ระบาดของโรค COVID 19", "อื่นๆ"
    ]
    if(typeof(allscholarship.find(element => element == value)) == "string"){
        return true;
    }
    return false;
}

    export default {
        data() {
            return{
            backcolor: "#ffffff",
            type: null,
            topic: "",
            description: "",
            send_status: "",
            sociality_location: "",
            education_subject_id: null,
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
        methods: {
            submit(type) {
                this.$v.$touch();
                const basicinput = (!this.$v.topic.$error && !this.$v.description.$error && !this.$v.send_status.$error)
                if(!this.$v.sociality_location.$error && basicinput) {
                    console.log(type);
                }
                else if(!this.$v.education_subject_id.$error && basicinput) {
                    console.log(type);
                }
                else if(!this.$v.scholarship_type.$error && basicinput) {
                    console.log(type);
                }
                else if(!this.$v.register_subject.$error && basicinput) {
                    console.log(type);
                }
                else if(!this.$v.environment_location.$error && basicinput) {
                    console.log(type);
                }
                else{
                    this.$v.$touch();
                }
            }
        },
   validations: {
     topic: {
          required,
          minLength: minLength(10)
     },
     description: {
         required,
         minLength: minLength(50)
     },
     send_status: {
         required,
         not_in: (value) => {
            if(value == "ด่วน" || value == "ไม่ด่วน"){
                return true;
            }
            return false;
        }
     },
     sociality_location: {
         required,
         minLength: minLength(5)
     },
    education_subject_id: {
        required,
        numeric,
        minLength: minLength(8),
        maxLength: maxLength(8)
    },
    scholarship_type: {
        required,
        not_in: checkScholarshipType
    },
    register_subject: {
        required,
        minLength: minLength(5)
    },
    environment_location: {
        required,
        minLength: minLength(5)
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
