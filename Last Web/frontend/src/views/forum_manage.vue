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
        <div class="container_fluid" id="all_forum_manage">
            <p id="forum_manage_title">Manage forum</p>
            <div class="row">
                <div class="col-9">
                    <table id="forum_manage_table" class="table">
                        <thead>
                            <tr>
                                <th id="table_head">Forum ID</th>
                                <th colspan="2" id="table_head">Forum Title</th>
                                <th id="table_head">Forum picture link</th>
                                <th colspan="2" id="table_head">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="forum in filterforum" :key="forum.forum_id">
                                <td id="table_body">{{forum.forum_id}}</td>
                                <td colspan="2" id="table_body">{{forum.forum_topic}}</td>
                                <td id="table_body"><button class="btn btn-primary" @click="gotopicture(forum.image_address, forum.forum_topic)" data-toggle="modal" data-target=".picture-modal-xl">click here</button></td>
                                <td id="table_body">
                                    <button id="btn" class="btn btn-success" @click="editopen(forum.forum_id)" data-toggle="modal" data-target=".edit-modal-xl">Edit</button>
                                    <button id="btn" class="btn btn-danger" @click="deleteopen(forum.forum_id)" data-toggle="modal" data-target="#deleteforum">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-3" id="forum_type">
                    <p id="forum_manage_type_title">เลือกประเภทของ forum</p>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="education_select" id="education_checkbox">
                        <label class="form-check-label" for="education_checkbox">การศึกษา (Education)</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="part_time_select" id="education_checkbox">
                        <label class="form-check-label" for="education_checkbox">งานพาร์ทไทน์ (Part-time Job) </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="environment_select" id="education_checkbox">
                        <label class="form-check-label" for="education_checkbox">สภาพแวดล้อม (environment) </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="register_select" id="education_checkbox">
                        <label class="form-check-label" for="education_checkbox">การลงทะเบียนเรียน (Register) </label>
                    </div>
                    <div class="form-check" style="margin-bottom: 4%;">
                        <input class="form-check-input" type="checkbox" v-model="scholarship_select" id="education_checkbox">
                        <label class="form-check-label" for="education_checkbox">ทุนการศึกษา (Scholarship) </label>
                    </div>
                    <button id="btn_create" class="btn btn-success" data-toggle="modal" data-target=".create-modal-xl" @click="close_modal_button">Create</button>
                </div>
            </div>
        </div>

        <div class="modal fade picture-modal-xl" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content" id="allmodal">
                    <p id="modal_title">{{forum_topic}}</p>
                    <img :src="image_address">
                </div>
            </div>
        </div>
        
        <div class="modal fade create-modal-xl" tabindex="-1" role="dialog" aria-hidden="true" id="createmodal">
            <div class="modal-dialog modal-xl">
                <div class="modal-content" id="allmodal">
                    <p id="modal_title">สร้างข่าวประชาสัมพันธ์ใหม่</p>
                    <div class="form-group row">
                        <label for="inputtopic" class="col-sm-1 col-form-label">หัวข้อ</label>
                        <div class="col-sm-11">
                            <input v-model="$v.forum_topic.$model" type="text" class="form-control" :class="{'is-invalid' : $v.forum_topic.$error}" id="inputtopic" placeholder="ใส่หัวข้อที่นี่">
<<<<<<< Updated upstream
                            <template v-if="$v.forum_topic.$error">
                                <p v-if="!$v.forum_topic.required">*กรุณาเติมข้อมูลในช่องนี้</p>
                                <p v-if="!$v.forum_topic.minLength">*เนื้อหาควรมีความยาวไม่ต่ำกว่า 10 ตัวอักษร</p>
                            </template>
=======
>>>>>>> Stashed changes
                        </div>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="report_topic">เนื้อหา</label>
                        <textarea v-model="$v.forum_description.$model" class="form-control" :class="{'is-invalid' : $v.forum_description.$error}" id="report_description" rows="5" aria-describedby="reporttopichelp" placeholder="ใส่เนื้อหาที่นี่"></textarea>
<<<<<<< Updated upstream
                        <template v-if="$v.forum_description.$error">
                            <p v-if="!$v.forum_description.required">*กรุณาเติมข้อมูลในช่องนี้</p>
                            <p v-if="!$v.forum_description.minLength">*เนื้อหาควรมีความยาวไม่ต่ำกว่า 50 ตัวอักษร</p>
                        </template>
=======
>>>>>>> Stashed changes
                    </div>
                    <br>
                    <div class="form-group">
                        <p>ประเภท</p>
                        <button @click="forum_type = 'การศึกษา'" class="btn" :class="{'btn-primary' : forum_type == 'การศึกษา', 'btn-secondary' : forum_type != 'การศึกษา'}" id="type_button">การศึกษา</button>
                        <button @click="forum_type = 'งานพาร์ทไทน์'" class="btn" :class="{'btn-primary' : forum_type == 'งานพาร์ทไทน์', 'btn-secondary' : forum_type != 'งานพาร์ทไทน์'}" id="type_button">งานพาร์ทไทน์</button>
                        <button @click="forum_type = 'สภาพแวดล้อม'" class="btn" :class="{'btn-primary' : forum_type == 'สภาพแวดล้อม', 'btn-secondary' : forum_type != 'สภาพแวดล้อม'}" id="type_button">สภาพแวดล้อม</button>
                        <button @click="forum_type = 'การลงทะเบียน'" class="btn" :class="{'btn-primary' : forum_type == 'การลงทะเบียน', 'btn-secondary' : forum_type != 'การลงทะเบียน'}" id="type_button">การลงทะเบียน</button>
                        <button @click="forum_type = 'ทุนการศึกษา'" class="btn" :class="{'btn-primary' : forum_type == 'ทุนการศึกษา', 'btn-secondary' : forum_type != 'ทุนการศึกษา'}" id="type_button">ทุนการศึกษา</button>
                    </div>
                    <template v-if="$v.forum_type.$error">
                        <p v-if="!$v.forum_type.required">*กรุณาเติมข้อมูลในช่องนี้</p>
                    </template>
                    <br>
                    <div class="form-group row">
                        <label for="inputtopic" class="col-sm-3 col-form-label">Link รูปภาพประกอบ</label>
                        <div class="col-sm-9">
                            <input v-model="$v.image_address.$model" type="text" class="form-control" :class="{'is-invalid' : $v.image_address.$error}" id="inputtopic" placeholder="ใส่ลิ้งค์ที่นี่">
                        </div>
                        <template v-if="$v.image_address.$error">
                            <p v-if="!$v.image_address.required">*กรุณาเติมข้อมูลในช่องนี้</p>
                            <p v-if="!$v.image_address.url">*ต้องใส่เป็น url เท่านั้น</p>
                        </template>
                    </div>
                    <br>
                    <div class="form-group">
                        <p>ประเภท</p>
                        <button class="btn btn-success" id="submit_btn" data-dismiss="modal" @click="realcreate">สร้าง</button>
                        <button class="btn btn-secondary" id="submit_btn" data-dismiss="modal" @click="close_modal_button">ปิด</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade edit-modal-xl" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content" id="allmodal">
                    <p id="modal_title">การแก้ไขข่าวประชาสัมพันธ์</p>
                    <div class="form-group row">
                        <label for="inputtopic" class="col-sm-1 col-form-label">หัวข้อ</label>
                        <div class="col-sm-11">
                            <input v-model="$v.forum_topic.$model" type="text" class="form-control" :class="{'is-invalid' : $v.forum_topic.$error}" id="inputtopic" placeholder="ใส่หัวข้อที่นี่">
                        </div>
                        <template v-if="$v.forum_topic.$error">
                            <p v-if="!$v.forum_topic.required">*กรุณาเติมข้อมูลในช่องนี้</p>
<<<<<<< Updated upstream
                            <p v-if="!$v.forum_topic.minLength">*หัวข้อควรมีความยาวไม่ต่ำกว่า 10 ตัวอักษร</p>
=======
>>>>>>> Stashed changes
                        </template>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="report_topic">เนื้อหา</label>
                        <textarea v-model="$v.forum_description.$model" class="form-control" :class="{'is-invalid' : $v.forum_description.$error}" id="report_description" rows="5" aria-describedby="reporttopichelp" placeholder="ใส่เนื้อหาที่นี่"></textarea>
<<<<<<< Updated upstream
                        <template v-if="$v.forum_description.$error">
                            <p v-if="!$v.forum_description.required">*กรุณาเติมข้อมูลในช่องนี้</p>
                            <p v-if="!$v.forum_description.minLength">*เนื้อหาควรมีความยาวไม่ต่ำกว่า 50 ตัวอักษร</p>
=======
                        <template v-if="$v.forum_topic.$error">
                            <p v-if="!$v.forum_topic.required">*กรุณาเติมข้อมูลในช่องนี้</p>
>>>>>>> Stashed changes
                        </template>
                    </div>
                    <br>
                    <div class="form-group">
                        <p>ประเภท</p>
                        <button @click="forum_type = 'การศึกษา'" class="btn" :class="{'btn-primary' : forum_type == 'การศึกษา', 'btn-secondary' : forum_type != 'การศึกษา'}" id="type_button">การศึกษา</button>
                        <button @click="forum_type = 'งานพาร์ทไทน์'" class="btn" :class="{'btn-primary' : forum_type == 'งานพาร์ทไทน์', 'btn-secondary' : forum_type != 'งานพาร์ทไทน์'}" id="type_button">งานพาร์ทไทน์</button>
                        <button @click="forum_type = 'สภาพแวดล้อม'" class="btn" :class="{'btn-primary' : forum_type == 'สภาพแวดล้อม', 'btn-secondary' : forum_type != 'สภาพแวดล้อม'}" id="type_button">สภาพแวดล้อม</button>
                        <button @click="forum_type = 'การลงทะเบียน'" class="btn" :class="{'btn-primary' : forum_type == 'การลงทะเบียน', 'btn-secondary' : forum_type != 'การลงทะเบียน'}" id="type_button">การลงทะเบียน</button>
                        <button @click="forum_type = 'ทุนการศึกษา'" class="btn" :class="{'btn-primary' : forum_type == 'ทุนการศึกษา', 'btn-secondary' : forum_type != 'ทุนการศึกษา'}" id="type_button">ทุนการศึกษา</button>
                    </div>
                    <template v-if="$v.forum_type.$error">
                            <p v-if="!$v.forum_type.required">*กรุณาเติมข้อมูลในช่องนี้</p>
                    </template>

                    <br>
                    <div class="form-group row">
                        <label for="inputtopic" class="col-sm-3 col-form-label">Link รูปภาพประกอบ</label>
                        <div class="col-sm-9">
                            <input v-model="$v.image_address.$model" type="text" class="form-control" :class="{'is-invalid' : $v.image_address.$error}" id="inputtopic" placeholder="ใส่ลิ้งค์ที่นี่">
                        </div>
                        <template v-if="$v.image_address.$error">
                            <p v-if="!$v.image_address.required">*กรุณาเติมข้อมูลในช่องนี้</p>
                            <p v-if="!$v.image_address.url">*ต้องใส่เป็น url เท่านั้น</p>
                        </template>
                    </div>
                    <br>
                    <div class="form-group">
                        <p>ประเภท</p>
                        <button class="btn btn-success" id="submit_btn" data-dismiss="modal" @click="realedit">แก้ไข</button>
                        <button class="btn btn-secondary" id="submit_btn" data-dismiss="modal" @click="close_modal_button()">ปิด</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="deleteforum" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">ต้องการลบข่าวประชาสัมพันธ์เรื่อง<br>"{{forum_topic}}" หรือไม่</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="close_modal_button">ปิด</button>
                <button type="button" class="btn btn-danger" @click="realdelete()" data-dismiss="modal">ลบ</button>
            </div>
            </div>
        </div>

        
        </div>
    </div>
</template>

<script type="text/javascript">
import axios from "axios";
<<<<<<< Updated upstream
import {required, url, minLength} from 'vuelidate/lib/validators'
=======
import {required, url} from 'vuelidate/lib/validators'
>>>>>>> Stashed changes

export default {
    data() {
        return{
            allforum: [],
            forum_id: "",
            forum_topic: "",
            forum_description: "",
            forum_type: "การศึกษา",
            education_select: false,
            part_time_select: false,
            environment_select: false,
            register_select: false,
            scholarship_select: false,
            image_address: ""
        }
    },
    validations: {
        forum_topic: {
            required,
<<<<<<< Updated upstream
            minLength: minLength(10)
        },
        forum_description: {
            required,
            minLength: minLength(50)
=======
        },
        forum_description: {
            required
>>>>>>> Stashed changes
        },
        forum_type: {
            required
        },
        image_address: {
            required,
            url
        }
    },
    created() {
        axios.get("http://localhost:5000/forum")
        .then((response) => {
            this.allforum = response.data;
        })
    },
    methods: {
        gotopicture: function(url, topic){
            this.image_address = url;
            this.forum_topic = topic;
        },
        valiaftersubmit() {
            let special = ""

            if(!this.$v.forum_topic.required){
                special = "กรุณาใส่หัวข้อข่าวประชาสัมพันธ์"
            }
            else if(!this.$v.forum_topic.minLength){
                special = 'หัวข้อข่าวประชาสัมพันธ์ต้องมีความยาวไม่ต่ำกว่า 10 ตัวอักษร'
            }
            else if(!this.$v.forum_description.required){
                special = 'กรุณาใส่เนื้อหาข่าวประชาสัมพันธ์'
            }
            else if(!this.$v.forum_description.minLength){
                special = 'หัวข้อข่าวประชาสัมพันธ์ต้องมีความยาวไม่ต่ำกว่า 50 ตัวอักษร'
            }
            else if(!this.$v.forum_type.required){
                special = 'กรุณาเลือกประเภทข่าวประชาสัมพันธ์'
            }
            else if(!this.$v.image_address.required){
                special = 'กรุณาใส่ลิ้งค์รูปภาพประกอบ'
            }
            else if(!this.$v.image_address.url){
                special = 'ลิ้งค์รูปภาพประกอบต้องใส่เป็น url เท่านั้น'
            }

            if(this.$v.$error){
                alert("ไม่สามารถสร้าง/แก้ไขข่าวประชาสัมพันธ์" + "\n" + special);
            }
        },
        realcreate(){
            this.$v.$touch();

            this.valiaftersubmit();

            if(!this.$v.$invalid){
            let acc_id = 2;
            let newdata = {
                forum_topic: this.forum_topic,
                forum_description: this.forum_description,
                forum_type: this.forum_type,
                acc_id: acc_id,
                image_address: this.image_address
            }
            axios
            .post("http://localhost:5000/forum/createforum", newdata)
            .then((response) => {
                this.forum_id = response.data;
                this.allforum.push(
                {
                    forum_id: this.forum_id,
                    forum_topic: this.forum_topic,
                    forum_description: this.forum_description,
                    forum_type: this.forum_type,
                    image_address: this.image_address
                }
            )
            }).catch((err) => {alert(err);})
            this.close_modal_button;
            }
        },
        editopen: function(id){
            this.forum_id = id;
            this.allforum.map((x) => {
                if(x.forum_id == this.forum_id){
                    this.forum_topic = x.forum_topic;
                    this.forum_description = x.forum_description;
                    this.forum_type = x.forum_type;
                    this.image_address = x.image_address;
                }
            })
        },
        realedit(){
            this.$v.$touch();

            this.valiaftersubmit();

            if(!this.$v.$invalid){
            let forum_edit = this.allforum.map((x) => {
                if(x.forum_id == this.forum_id){
                    return {
                        forum_id: this.forum_id,
                        forum_topic: this.forum_topic,
                        forum_description: this.forum_description,
                        forum_type: this.forum_type,
                        image_address: this.image_address
                    }
                }
                else{
                    return x;
                }
            })
            this.allforum = forum_edit;
            
            let newdata = {
                forum_topic: this.forum_topic,
                forum_description: this.forum_description,
                forum_type: this.forum_type,
                image_address: this.image_address
            }

            axios
            .put("http://localhost:5000/forum/" + this.forum_id, newdata)
            .then().catch((err) => {alert(err);})
            this.close_modal_button;
            }
        },
        deleteopen: function(id){
            let forum_delete = this.allforum.filter((x) => {
                return x.forum_id == id;
            })
            this.forum_topic = forum_delete[0].forum_topic;
            this.forum_id = id;
        },
        realdelete: function(){
            let forum = this.allforum.filter((x) => {
                return x.forum_id != this.forum_id;
            })
            this.allforum = forum;
            axios.delete("http://localhost:5000/forum/" + this.forum_id)
            .then().catch((err) => {alert(err);})
            this.close_modal_button;
        },
        close_modal_button() {
            this.forum_topic = "";
            this.forum_description = "";
            this.forum_type = "การศึกษา";
            this.image_address = "";
        }
    },
    computed: {
        filterforum() {
            let forum = [];
            let all_submit = 0;
            if(this.education_select == true){
                this.allforum.map((x) => {
                    if(x.forum_type == "การศึกษา"){
                        forum.push(x);
                    }
                })
                all_submit = all_submit + 1;
            }
            if(this.part_time_select == true){
                this.allforum.map((x) => {
                    if(x.forum_type == "งานพาร์ทไทน์"){
                        forum.push(x);
                    }
                })
                all_submit = all_submit + 1;
            }
            if(this.environment_select == true){
                this.allforum.map((x) => {
                    if(x.forum_type == "สภาพแวดล้อม"){
                        forum.push(x);
                    }
                })
                all_submit = all_submit + 1;
            }
            if(this.register_select == true){
                this.allforum.map((x) => {
                    if(x.forum_type == "การลงทะเบียน"){
                        forum.push(x);
                    }
                })
                all_submit = all_submit + 1;
            }
            if(this.scholarship_select == true){
                this.allforum.map((x) => {
                    if(x.forum_type == "ทุนการศึกษา"){
                        forum.push(x);
                    }
                })
                all_submit = all_submit + 1;
            }
            else if(all_submit == 0){
                forum = this.allforum;
            }
            forum.sort( function compare(a, b){
                if(a.forum_id < b.forum_id){
                    return -1;
                }
                if(a.forum_id > b.forum_id){
                    return 1;
                }
                return 0;
            })
            return forum;
        },
    }
}
</script>

<style>
    #navbar_homepage{
    background-color: rgb(150, 54, 3, .53);
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
#table_head{
    text-align: center;
    font-weight: 900;
}
#table_body{
    text-align: center;
    font-weight: 500;
}
#all_forum_manage{
    margin-top: 7%;
    margin-bottom: 7%;
    padding-right: 8%;
    padding-left: 8%;
}
#forum_manage_title{
    color: #E35205;
    font-family: 'Kanit', sans-serif;
    font-size: 35px;
    font-weight: 700;
}
#forum_manage_table{
    background-color: #ffffff;
    color: #1a1819;
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    font-weight: 500;
    border-collapse: collapse;
    word-wrap: break-word;
}
#forum_img{
    width: 50%;
}
#btn{
    margin-right: 10px;
}
#forum_type{
    background-color: #ffffff;
    height: 30%;
    color: #1a1819;
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    font-weight: 500;
    border-radius: 30px;
    padding-bottom: 3%;
    padding-top: 3%;
    padding-left: 2%;
    padding-right: 2%;
}
#forum_manage_type_title{
    color: #1a1819;
    font-family: 'Kanit', sans-serif;
    font-size: 24px;
    font-weight: 900;
}
#btn_create{
    width: 100%;
}
#modal_title{
    text-align: center;
    font-size: 35px;
    font-weight: 700;
}
#type_button{
    margin-right: 3%;
}
#submit_btn{
    margin-right: 2%;
    width: 15%;
    height: 50px;
}
#allmodal{
    color: #1a1819;
    font-family: 'Kanit', sans-serif;
    font-size: 24px;
    font-weight: 500;
    padding-top: 3%;
    padding-bottom: 3%;
    padding-right: 5%;
    padding-left: 5%;
    background-color: #ffffff;
}
</style>