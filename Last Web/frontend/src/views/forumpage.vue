<template>
    <div>
        <nav class="navbar" id="navbar_homepage">
        <a class="navbar-brand" href="/"><img id="logo_navbar" src="../assets/homepage/LOGO2.png"></a>
        <form class="form-inline">
            <a id="navbar_register" href="#">Log In</a>
            <div id=line_register></div>
            <a id="navbar_register" href="#" style="margin-right: 30px">Register</a>
        </form>
        </nav>
        <div class="container-fluid" id="all_arc">
            <div class="row">
                <div class="col-12">
                    <p id="arc_title">{{arc.forum_topic}}</p>
                    <i id="arc_date">Date: {{arc.forum_release_date}}</i>
                    <center><img id="arc_image" :src="arc.image_address"></center>
                    <p id="arc_description">{{arc.forum_description}}</p>
                    <a href="/forum" id="back_to_forum">กลับไปยังหน้าข่าวประชาสัมพันธ์</a>
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
import axios from "axios";

    export default {
    data() {
        return{
            arc: null
        }
    },
    created() {
        axios.get("http://localhost:5000/forum/" + localStorage.getItem("forum_id"))
        .then((response) => {
            this.arc = response.data[0];
            console.log(response.data[0].forum_description);
            console.log("success");
        }).catch((err) => {
            this.arc = err;
        })
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
#all_arc{
    padding-top: 7%;
    padding-right: 8%;
    padding-left: 8%;
    padding-bottom: 7%
}
#arc_title{
    font-family: 'Kanit', sans-serif;
    text-decoration: none;
    color: #E35205;
    font-size: 35px;
    font-weight: 700;
    text-align: center;
}
#arc_date{
    font-family: 'Kanit', sans-serif;
    text-decoration: none;
    color: #E35205;
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 5%;
}
#arc_image{
    width: 60%;
    height: 60%;
    padding-top: 5%;
}
#arc_description{
    font-family: 'Kanit', sans-serif;
    text-decoration: none;
    color: #E35205;
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    word-wrap: break-word;
    padding-top: 5%;
}
#back_to_forum{
    font-family: 'Kanit', sans-serif;
    text-decoration: none;
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    padding-bottom: 5%;
}
#back_to_forum:hover{
    color: rgb(150, 54, 3);
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