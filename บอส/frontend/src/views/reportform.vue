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
    <div id="reportform" class="container-fluid">
        <p id="reportform_title">แบบฟอร์มร้องเรียน</p>
        <div class="col-12"  id="reportform_box" style="background-color: #3282b8;">
            <div class="row">
                <div class="col-6" id="reportform_description">
                    <p id="reportform_box_title">ปัญหาด้านสังคม</p>
                    <p id="reportform_box_description">ร้องเรียนปัญหาด้านสังคมได้ที่นี่</p>
                    <a id="reportform_button" class="btn" href="#">ร้องเรียน</a>
                </div>
                <div class="col-6" id="reportform_image_right" style="background-image: url('https://d25tv1xepz39hi.cloudfront.net/2016-08-01/files/picture-style_1311.jpg');"></div>
            </div>
        </div>
        <div class="col-12" id="reportform_box" style="background-color: #0375b4;">
            <div class="row" style="height: 100%;">
                <div class="col-6" id="reportform_image_left" style="background-image: url('https://www.educationcorner.com/images/featured-importance-education.png');"></div>
                <div class="col-6" id="reportform_description">
                    <p id="reportform_box_title">ปัญหาด้านการเรียน</p>
                    <p id="reportform_box_description">ร้องเรียนปัญหาด้านการเรียนได้ที่นี่</p>
                    <a id="reportform_button" class="btn" href="#">ร้องเรียน</a>
                </div>
            </div>
        </div>
        <div class="col-12" id="reportform_box" style="background-color: #007849;">
            <div class="row" style="height: 100%;">
                <div class="col-6" id="reportform_description">
                    <p id="reportform_box_title">ปัญหาด้านทุนการศึกษา</p>
                    <p id="reportform_box_description">ร้องเรียนปัญหาด้านทุนการศึกษาได้ที่นี่</p>
                    <a id="reportform_button" class="btn" href="#">ร้องเรียน</a>
                </div>
                <div class="col-6" id="reportform_image_right" style="background-image: url('https://5estimates.com/wp-content/uploads/2020/01/SCHOLARSHIP.jpg');"></div>
            </div>
        </div>
        <div class="col-12" id="reportform_box" style="background-color: #e24e42;">
            <div class="row" style="height: 100%;">
                <div class="col-6" id="reportform_image_left" style="background-image: url('http://agora.rovernet.eu/wp-content/uploads/2020/01/Registration.jpeg');"></div>
                <div class="col-6" id="reportform_description">
                    <p id="reportform_box_title">ปัญหาด้านระบบการลงทะเบียน</p>
                    <p id="reportform_box_description">ร้องเรียนปัญหาด้านระบบการลงทะเบียนได้ที่นี่</p>
                    <a id="reportform_button" class="btn" href="#">ร้องเรียน</a>
                </div>
            </div>
        </div>
        <div class="col-12" id="reportform_box" style="background-color: #e86e80;">
            <div class="row" style="height: 100%;">
                <div class="col-6" id="reportform_description">
                    <p id="reportform_box_title">ปัญหาด้านสภาพแวดล้อม</p>
                    <p id="reportform_box_description">ร้องเรียนปัญหาด้านสภาพแวดล้อมได้ที่นี่</p>
                    <a id="reportform_button" class="btn" href="#">ร้องเรียน</a>
                </div>
                <div class="col-6" id="reportform_image_right" style="background-image: url('https://coenv-media-gene1ufvxiloffjq.stackpathdns.com/2016/02/career-fair-1.jpg');"></div>
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
    </body>
</template>

<script>
export default {
    data() {
        return{

        }
    }
}
</script>

<style>
    body{
      background-color: #1a1819;
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
#reportform{
    margin-top: 70px;
    margin-bottom: 38px;
    padding-left: 8%;
    padding-right: 8%;
}

#reportform_title{
    color: #E35205;
    font-family: 'Kanit', sans-serif;
    font-size: 35px;
    font-weight: 700;
    padding-top: 70px;
}

#reportform_box{
    width: 100%;
    border-radius: 30px;
    margin-top: 5%;
}

#reportform_description{
    padding-top: 3%;
    padding-left: 5%;
}

#reportform_box_title{
    color: #1a1819;
    font-family: 'Kanit', sans-serif;
    font-size: 35px;
    font-weight: 700;
}

#reportform_box_description{
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    font-weight: 300;
    color : #1A1819;
}

#reportform_button{
    width: 119px;
    height: 46px;
    border-radius: 10px;
    background-color: #1a1819;
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    margin-top: 5%;
    margin-bottom: 30%;
    color:  #ffffff;
}
#reportform_image_right{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
}
#reportform_image_left{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
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