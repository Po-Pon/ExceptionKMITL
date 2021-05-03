<template>
    <div>
        <!-- navbar -->
        <div class="banner" >
            <div class="topnav">
                <a href="/admin"><img src="/image/navbar/newlogo.png" width="110px" height="auto" style="padding-left: 20px;" alt=""></a>
                <ul>
                    <div id="MyClockDisplay" class="clock"></div>
                    <li id="comp1" v-if="manage_acc == 1"><a href="/manageUser">Manage User</a></li>
                    <li id="comp1" v-if="manage_standand == 1"><a href="/manageforum">Manage Forum</a></li>
                    <li id="comp1" v-if="manage_standand == 1"><a href="/manageReport">Manage Report</a></li>
                    <div class="dropdown">
                        <button class="btn btn-danger  dropdown-toggle" id="comp3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-user-plus"></i> {{id}}
                        </button>
                        <p class="dropdown-menu" >
                            <button class="dropdown-item text-danger" type="button" @click="logout()">ออกจากระบบ</button>
                        </p>
                    </div>
                </ul>
            </div>
            <div class="content">
                <span id="line-1">เคยไหม .....</span><br>
                <span id="line-2"><i>เคยไหม ร้องเรียนปัญหาไปแล้วเรื่องไม่ถึงปลายทาง?<br>
                เคยไหม ร้องเรียนปัญหาแล้วไม่ได้รับการแก้ไข?</i><br></span>
                <span id="line-3">มาร้องเรียนปัญหาผ่านทางเว็บไซต์เรา ปัญหาเหล่านั้นจะไม่เกิดขึ้นแน่นอน<br>
                และสามารถติดตามสถานะของเรื่องร้องเรียนนั้นได้ด้วยตนเอง!</span>
            </div>
            <div class="used">
                <a href="/admin" id="apply">ร้องเรียนปัญหา</a>
                <a href="/admin" id="tracking">ติดตามสถานะ</a>
            </div>
        </div>

        <!-- card content -->

            <div class="container" style="padding-bottom: 20px;">

                <!-- card header -->

                <div class="row">
                    <div class="col-md-10" id="article">
                        <p><a href="">บทความยอดนิยม<br><br></a></p>
                    </div>
                    <div class="col-md-2" id="news" style="text-align: right;">
                        <p><a href="/forum"><br><i>ดูข่าวประชาสัมพันธ์</i><br></a></p>
                    </div>
                </div>

                <!-- card row 1 -->

                <div class="row justify-content-center" id="card-row-1">
                    <div class="col-md-3">
                        <a href="">
                            <div class="card">
                                <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="/image/card/cardimg-1.jpg" style="height:210px" alt="Placeholder image">
                                </figure>
                                </div>
                                <div class="card-header text-white bg-danger">การศึกษา</div>
                                <div class="card-body">
                                    <p class="card-text">การจัดสอบวัดความรู้ทักษะ <br>ภาษาอังกฤษ ก่อนสำเร็จการศึกษา (English Exit Exam) ประจำปีการศึกษา 2563 รอบเดือนมีนาคม<br>พ.ศ. 2564</p>
                                </div>
                                <footer class="card-footer bg-danger">
                                    <!-- footer card -->
                                </footer>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="">
                            <div class="card">
                                <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="/image/card/cardimg-2.jpg" style="height:210px" alt="Placeholder image">
                                </figure>
                                </div>
                                <div class="card-header text-white bg-secondary">งานพาร์ทไทม์</div>
                                <div class="card-body">
                                    <p class="card-text">พบกับการออกบูธรับสมัครงาน<br>ของบริษัทชื่อดังมากมาย ในงานนี้<br>เพื่อให้น้องๆนักศึกษา #สจล. ทุกคนมีโอกาสได้งานที่ใช่ ทั้งงานประจำ พาร์ทไทม์ หรือการฝึกงาน</p>
                                </div>
                                <footer class="card-footer bg-secondary">
                                    <!-- footer card -->
                                </footer>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="">
                            <div class="card">
                                <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="/image/card/cardimg-3.jpg" style="height:210px" alt="Placeholder image">
                                </figure>
                                </div>
                                <div class="card-header text-white bg-warning">สภาพแวดล้อม</div>
                                <div class="card-body">
                                    <p class="card-text">ซ่อมแล้ว! พื้นที่บริเวณโคนเสา<br>ทรุดตัว ซึ่งอาจเกิดอันตรายได้<br>ตอนนี้ซ่อมแซมเสร็จแล้ว รวมถึงฟุตบาททางเดินให้สามารถเดินได้<br>อย่างปลอดภัย</p>
                                </div>
                                <footer class="card-footer bg-warning">
                                    <!-- footer card -->
                                </footer>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="">
                            <div class="card">
                                <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="/image/card/cardimg-4.jpg" style="height:210px" alt="Placeholder image">
                                </figure>
                                </div>
                                <div class="card-header text-white bg-danger">การศึกษา</div>
                                <div class="card-body">
                                    <p class="card-text"><br>ประกาศขยายเวลารับสมัครนักศึกษา หลักสูตรวิชาโท ประจำภาคเรียนที่ 2 ปีการศึกษา 2563</p>
                                </div>
                                <footer class="card-footer bg-danger">
                                    <!-- footer card -->
                                </footer>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- card row 2 -->

                <div class="row justify-content-center" id="card-row-2">
                    <div class="col-md-3">
                        <a href="">
                            <div class="card">
                                <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="/image/card/cardimg-5.jpg" style="height:210px" alt="Placeholder image">
                                </figure>
                                </div>
                                <div class="card-header text-white bg-primary">การลงทะเบียน</div>    
                                <div class="card-body">
                                    <p class="card-text">ประกาศแจ้งเตือนนักศึกษาชั้นปีที่ <br>2-4 ที่มีสถานะเรียนและไม่ได้ลงทะเบียนเรียนในภาคการศึกษาที่ 2/2563</p>
                                </div>
                                <footer class="card-footer bg-primary">
                                    <!-- footer card -->
                                </footer>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="">
                            <div class="card">
                                <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="/image/card/cardimg-6.jpg" style="height:210px" alt="Placeholder image">
                                </figure>
                                </div>
                                <div class="card-header text-white bg-warning">สภาพแวดล้อม</div>
                                <div class="card-body">
                                    <p class="card-text">กลางคืน เดินได้ ไม่ต้องกลัว!! <br>พี่ๆกายภาพได้ทำการซ่อมหลอดไฟ<br>@ป้ายหยุดรถไฟ และไฟถนน @อาคาร CCA เพื่่อให้เดินทาง<br>ตอนกลางคืนได้สบายใจ</p>
                                </div>
                                <footer class="card-footer bg-warning">
                                    <!-- footer card -->
                                </footer>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="">
                            <div class="card">
                                <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="/image/card/cardimg-7.jpg" style="height:210px" alt="Placeholder image">
                                </figure>
                                </div>
                                <div class="card-header text-white bg-info">ทุนการศึกษา</div>
                                <div class="card-body">
                                    <p class="card-text"><br>การกู้ยืมในปีการศึกษา 2564 ขอให้<br>ผู้กู้ยืม ทุกท่านเข้าไปศึกษาเกี่ยวกับระบบก่อนใช้งานจริง</p>
                                </div>
                                <footer class="card-footer bg-info">
                                    <!-- footer card -->
                                </footer>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="">
                            <div class="card">
                                <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="/image/card/cardimg-8.png" style="height:210px" alt="Placeholder image">
                                </figure>
                                </div>
                                <div class="card-header text-white bg-info">ทุนการศึกษา</div>
                                <div class="card-body">
                                    <p class="card-text"><br>ทุนเงินให้ยืมเพื่อการศึกษากรณีฉุกเฉินสำหรับภาคการศึกษา 2/2563 รับสมัคร 5-15 มกราคม 2564</p>
                                </div>
                                <footer class="card-footer bg-info">
                                    <!-- footer card -->
                                </footer>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- Problem -->

                <div class="row">
                    <div class="col-md-10" id="problem">
                        <p><a href=""><br>ปัญหาที่พบบ่อย<br></a></p>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <p><a href=""><br><span>01</span><br><br></a></p>
                    </div>
                    <div class="col-md-4">
                        <p><a href=""><br><span>02</span><br><br></a></p>
                    </div>
                    <div class="col-md-4">
                        <p><a href=""><br><span>03</span><br><br></a></p>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <p><a href=""><br><span>04</span><br><br></a></p>
                    </div>
                    <div class="col-md-4">
                        <p><a href=""><br><span>05</span><br><br></a></p>
                    </div>
                    <div class="col-md-4">
                        <p><a href=""><br><span>06</span><br><br></a></p>
                    </div>
                </div>
            </div>

        <!-- footer -->

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
import axios from "axios";
export default {
    data(){
        return{
            permission: null,
            tokenAdmin: null,
            id: '',
            manage_acc: null,
            manage_standand: null,
        }
    },
    created(){
        this.tokenAdmin = JSON.parse(localStorage.getItem('tokenAdmin'))
        if(this.tokenAdmin != null){
            this.permission = 'for admin'
            axios.post("http://localhost:5000/checkTokenLogin", {
                role: 'Admin',
                tokenAdmin: this.tokenAdmin
            }).then((response => {
                    if(response.data.message == 'You can pass! (Admin)'){
                        this.id = response.data.id
                        this.manage_acc = response.data.rule_manage_acc
                        this.manage_standand = response.data.rule_standand_admin
                    }
                    else{
                        alert("You can't access the admin, you are the user.! hahaha.")
                        this.$router.push({ name: "Home" });
                    }
                    console.log(response)
            })).catch((err) => {
                alert("Error Your token! hahahaha.")
                this.$router.push({ name: "Home" });
                console.log(err)
            })
        }
        else{
            alert("กรุณาล็อกอินก่อนเข้าใช้งาน")
            this.$router.push({ name: "Home" });
        }
    },
    methods:{
        logout(){
            this.id = ''
            this.$router.push({ name: "Home" });
        },
        checkadmin(){
            axios.post('/http://localhost:5000/checkadmin', {
                id:this.id
            })
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) =>{
                if(err) throw err
            })
        }
    }
}
</script>

<style scoped>
.fa-user-plus{
    color:rgb(0, 0, 200);
}
</style>