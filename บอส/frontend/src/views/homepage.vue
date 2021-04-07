<template>
    <body>
    <nav class="navbar" id="navbar_homepage">
        <a class="navbar-brand" href="/"><img id="logo_navbar" src="../assets/picture/homepage/LOGO2.png"></a>
        <form class="form-inline">
            <a id="navbar_manage" href="#">Manage User</a>
            <a id="navbar_manage" href="#">Manage Forum</a>
            <a id="navbar_manage" href="#">Manage Problem</a>
            <a id="navbar_register" href="#">Log In</a>
            <div id=line_register></div>
            <a id="navbar_register" href="#" style="margin-right: 30px">Register</a>
        </form>
    </nav>
    <div id="banner_image">
        <div id="banner_massage">
            <h1 id="banner_title">เคยไหม ...</h1>
            <p id="banner_minititle_black"><i>เคยไหม ร้องเรียนปัญหาไปแล้วเรื่องไม่ถึงปลายทาง?</i></p>
            <p id="banner_minititle_black"><i>เคยไหม ร้องเรียนปัญหาแล้วไม่ได้รับการแก้ไข?</i></p>
            <p id="banner_minititle_white">มาร้องเรียนปัญหาผ่านทางเว็บไซต์เรา ปัญหาเหล่านั้นจะไม่เกิดขึ้นแน่นอน</p>
            <p id="banner_minititle_white">และสามารถติดตามสถานะของเรื่องร้องเรียนนั้นได้ด้วยตนเอง!</p>
            <div style="padding-top: 4%; padding-bottom: 2%;">
                <span style="padding-right: 10px;"><a class="btn" id="banner_button_report" href="/reportform">ร้องเรียนปัญหา</a></span>
                <a class="btn" id="banner_button_tracking" href="/trackingstatus">ติดตามสถานะ</a>
            </div>
        </div>
    </div>
    <div id="favorite_arc" class="container-fluid">
        <p id="favorite_arc_title">บทความยอดนิยม</p>
        <a id="favorite_arc_viewall" href="/forum"><i>ดูข่าวประชาสัมพันธ์</i></a>
        <div id="all_favorite_arc" class="row">
            <div class="col-3" style="margin-bottom: 32px;" v-for="blog in forums" :key="blog">
                <div id="favorite_arc_card" class="card">
                    <img id="favorite_arc_card_image" class="card-img-top" src="https://www.nbc12.com/resizer/w9j8OfCPW7D0veIjvux-Z1YNnKs=/1200x600/cloudfront-us-east-1.images.arcpublishing.com/raycom/M32VVRUAPNCEJPQNOMPJA6DXGY.jpg" alt="Card image cap">
                    <div id="favorite_arc_card_body" style="border-top-color: #E35205;" class="card-body">
                      <div id="favorite_arc_card_type_box" style="background-color: #E35205;">การศึกษา</div>
                      <p id="favorite_arc_card_text" class="card-text">การจัดสอบวัดความรู้ทักษะทางภาษาอังกฤษก่อนสำเร็จการศึกษา (English Exit Exam) ประจำปีการศึกษา 2563 รอบเดือนมีนาคม พ.ศ. 2564</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div class="container-fluid" id="always_problem">
            <p id="always_problem_title">ปัญหาที่พบบ่อย</p>
                <div class="row">
                    <div class="col-4" style="margin-bottom: 50px;">
                            <p id="always_problem_probtitle"><span id="always_problem_number">01</span>ปัญหาปัญหาปัญหาปัญหาปัญหาปัญหาปัญหา</p>
                            <i id="always_problem_description">ปัญหาปัญหาปัญหาปัญหาปัญหาปัญหา
                            ปัญหาปัญหาปัญหาปัญหาปัญหาปัญหาปัญหา
                            ปัญหาปัญหาปัญหาปัญหาปัญหาปัญหาปัญหา
                            </i>
                    </div>
                    <div class="col-4" style="margin-bottom: 50px;">
                        <p id="always_problem_probtitle"><span id="always_problem_number">02</span>ปัญหาปัญหาปัญหาปัญหาปัญหาปัญหาปัญหา</p>
                        <i id="always_problem_description">ปัญหาปัญหาปัญหาปัญหาปัญหาปัญหา
                            ปัญหาปัญหาปัญหาปัญหาปัญหาปัญหาปัญหา
                            ปัญหาปัญหาปัญหาปัญหาปัญหาปัญหาปัญหา
                        </i>
                    </div>
                    <div class="col-4" style="margin-bottom: 50px;">
                        <p id="always_problem_probtitle"><span id="always_problem_number">03</span>ปัญหาปัญหาปัญหาปัญหาปัญหาปัญหาปัญหา</p>
                        <i id="always_problem_description">ปัญหาปัญหาปัญหาปัญหาปัญหาปัญหา
                            ปัญหาปัญหาปัญหาปัญหาปัญหาปัญหาปัญหา
                            ปัญหาปัญหาปัญหาปัญหาปัญหาปัญหาปัญหา
                        </i>
                    </div>
                    <div class="col-4" style="margin-bottom: 50px;">
                        <p id="always_problem_probtitle"><span id="always_problem_number">04</span>ปัญหาปัญหาปัญหาปัญหาปัญหาปัญหาปัญหา</p>
                        <i id="always_problem_description">ปัญหาปัญหาปัญหาปัญหาปัญหาปัญหา
                            ปัญหาปัญหาปัญหาปัญหาปัญหาปัญหาปัญหา
                            ปัญหาปัญหาปัญหาปัญหาปัญหาปัญหาปัญหา
                        </i>
                    </div>
                    <div class="col-4" style="margin-bottom: 50px;">
                        <p id="always_problem_probtitle"><span id="always_problem_number">05</span>ปัญหาปัญหาปัญหาปัญหาปัญหาปัญหาปัญหา</p>
                        <i id="always_problem_description">ปัญหาปัญหาปัญหาปัญหาปัญหาปัญหา
                            ปัญหาปัญหาปัญหาปัญหาปัญหาปัญหาปัญหา
                            ปัญหาปัญหาปัญหาปัญหาปัญหาปัญหาปัญหา
                        </i>
                    </div>
                    <div class="col-4" style="margin-bottom: 50px;">
                        <p id="always_problem_probtitle"><span id="always_problem_number">06</span>ปัญหาปัญหาปัญหาปัญหาปัญหาปัญหาปัญหา</p>
                        <i id="always_problem_description">ปัญหาปัญหาปัญหาปัญหาปัญหาปัญหา
                            ปัญหาปัญหาปัญหาปัญหาปัญหาปัญหาปัญหา
                            ปัญหาปัญหาปัญหาปัญหาปัญหาปัญหาปัญหา
                        </i>
                    </div>
                </div>
        </div>
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
      return {
          forums: [1, 2, 3, 4, 5, 6, 7, 8]
      }
    },
  }
</script>

<style>
  body{
      background-color: #1a1819;
  }
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
#banner_image {
    background-image: url("../assets/picture/homepage/banner.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
#banner_massage{
    padding: 40px;
    padding-top: 120px;
}
#banner_title{
    font-family: 'Kanit', sans-serif;
    font-size: 35px;
    font-weight: 500;
    color : #ffffff;
}

#banner_minititle_black{
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    font-weight: 300;
    color : #1A1819;
    margin-bottom: 0em;
}

#banner_minititle_white{
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    font-weight: 300;
    color : #ffffff;
    margin-bottom: 0em;
}

#banner_button_report{
    width: 194px;
    height: 44px;
    border-radius: 15px;
    color:#ffffff;
    background-color: #1a1819;
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
}

#banner_button_tracking{
    width: 194px;
    height: 44px;
    border-radius: 15px;
    color:#ffffff;
    background-color: #1a1819;
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
}
#favorite_arc{
    margin-top: 70px;
    margin-bottom: 38px;
    padding-right: 8%;
    padding-left: 8%;
}

#favorite_arc_title{
    color: #E35205;
    font-family: 'Kanit', sans-serif;
    font-size: 35px;
    font-weight: 700;
    margin-bottom: 0px;
}

#favorite_arc_viewall{
    text-decoration: none;
    float: right;
    color: #E35205;
    font-family: 'Kanit', sans-serif;
    font-size: 18px;
}
#all_favorite_arc {
    margin-top: 50px;
}

#favorite_arc_card{
    width: 295px;
    height: 445px;
    border-radius: 15px;
    margin-right: 80px;
}

#favorite_arc_card_image{
    height: 253px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

#favorite_arc_card_body{
    position: relative;
    border-top: 4px solid;
}

#favorite_arc_card_type_box{
    position: absolute;
    top: -15.075px;
    width: 108.76px;
    height: 30.15px;
    border-radius: 10px;
    font-family: 'Kanit', sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    color: #ffffff;
}

#favorite_arc_card_text{
    padding-top: 25px;
    font-family: 'Kanit', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #1a1819;
}
#always_problem{
    padding-right: 8%;
    padding-left: 8%;
}
#always_problem_title{
    color: #E35205;
    font-family: 'Kanit', sans-serif;
    font-size: 35px;
    font-weight: 700;
    margin-bottom: 50px;

}

#always_problem_number{
    color: #ffffff;
    font-family: 'Kanit', sans-serif;
    font-size: 40px;
    font-weight: 900;
    opacity: 0.64;
}

#always_problem_probtitle{
    color: #ffffff;
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    font-weight: 800;
    padding-bottom: 20px;
}

#always_problem_description{
    color: #ffffff;
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    font-weight: 300;
    opacity: 0.64;
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