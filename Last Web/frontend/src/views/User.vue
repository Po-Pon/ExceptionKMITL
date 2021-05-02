<template>
    <div>
        <!-- navbar -->
        <div class="banner" >
            <div class="topnav">
                <a href="/user"><img src="/image/navbar/newlogo.png" width="110px" height="auto" style="padding-left: 20px;" alt=""></a>
                <ul>
                    <div id="MyClockDisplay" class="clock"></div>
                    <a href="/user" style="text-decoration: none;"><button type="button" class="home btn btn-outline-light">Home</button></a>
                    <div class="dropdown">
                        <button class="btn btn-danger  dropdown-toggle" id="comp3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fas fa-user"></i> {{id}}
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
                <a href="/reportform" id="apply">ร้องเรียนปัญหา</a>
                <a href="/trackingstatus" id="tracking">ติดตามสถานะ</a>
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
                        <p><a href=""><br><i>ดูข่าวประชาสัมพันธ์</i><br></a></p>
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
            tokenUser: null,
            id: '',
        }
    },
    created(){
        this.tokenUser = JSON.parse(localStorage.getItem('tokenUser'))
        if(this.tokenUser != null){
            this.permission = 'for user'
            axios.post("http://localhost:5000/checkTokenLogin", {
                role: 'User',
                token: this.tokenUser
            }).then((response => {
                    if(response.data.message == 'You can pass! (User)'){
                        this.id = response.data.id
                    }
                    else{
                        alert("You can't access the user, you are the admin.! hahaha.")
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
            this.datauser = null
            localStorage.removeItem('formLoginUser')
            console.log('Log out!')
            this.$router.push({ name: "Home" });
        },
    }
}
</script>

<style scoped>
    /* card Home */

.container{
    margin-top: 30px;
}
#article a{
    color:red;
    font-size: 25px;
    font-weight: 700;
    text-decoration: none;
}

#article a:hover{
    color: orange;
    text-decoration: none;
}

#news a{
    color:red;
    font-size: 18px;
    text-decoration: none;
}

#news a:hover{
    color: orange;
    text-decoration: none;
}
.card{
    width: 100%;
    height: 100%;
    border-color: #302323;
}
.card-image{
    overflow: hidden;
}

.card-image img{
    transition: all 1.5s ease;
}

.card-image img:hover{
    transform: scale(1.5);
}

.card-header{
    font-weight: 600;
}
.card-text{
    color: #000000;
}

#card-row-2{
    padding-top: 20px;
}

#card-row-1 a{
    text-decoration: none;
}

#card-row-2 a{
    text-decoration: none;
}

#problem a{
    color:red;
    font-size: 25px;
    font-weight: 700;
    text-decoration: none;
}

#problem a:hover{
    color: orange;
    text-decoration: none;
}
.col-md-4{
    padding-left: 40px;
}
.col-md-4 a span{
    color:white;
    font-size: 30px;
    font-weight: 900;
    opacity: 0.64;
}
.home{
    color: white;
    font-size: 15px;
    margin-top: 5px;
    margin-right: 30px;
}
.home:hover{
    color:black;
}
</style>