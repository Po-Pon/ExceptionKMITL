<template lang="en">
    <body>
    <nav class="navbar" id="navbar_homepage">
        <a class="navbar-brand" href="/"><img id="logo_navbar" src="../assets/picture/homepage/LOGO2.png"></a>
        <form class="form-inline">
            <a id="navbar_register" href="#">Log In</a>
            <div id=line_register></div>
            <a id="navbar_register" href="#" style="margin-right: 30px">Register</a>
        </form>
    </nav>
    <div id="favorite_arc" class="container-fluid">
        <p id="favorite_arc_title">ข่าวประชาสัมพันธ์</p>
        <div id="all_favorite_arc" class="row">
            <div class="col-3" style="margin-bottom: 32px;" v-for="forum in forums">
                <div id="favorite_arc_card" class="card">
                    <img id="favorite_arc_card_image" class="card-img-top" :src="searchimage(forum.forum_id)">
                    <div id="favorite_arc_card_body" :style="{'border-top-color' : forumcolor(forum.forum_type)}" class="card-body">
                      <div id="favorite_arc_card_type_box" :style="{'background-color': forumcolor(forum.forum_type)}">{{forum.forum_type}}</div>
                      <p id="favorite_arc_card_text" class="card-text">{{forum.forum_topic}}</p>
                    </div>
                </div>
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
import axios from "axios";

export default {
    data() {
        return{
        forums: null,
        forum_image: null,
        searchphoto: "../assets/picture/forum/forum_1.jpg",
        typecolor: {education: "#E35205", parttimejob: "#6BDCA8", environment: "#F5B406", register: "#DA8DFB", scholarship: "#3FAAF6"}
        }
    },
    created() {
        axios.get("http://localhost:3000/forum")
        .then((response) => {
            this.forums = response.data.rows;
            this.forum_image = response.data.rows2;
        }).catch((err) =>{
            console.log(err);
        })
    },
    methods:{
        forumcolor: function(type){
            if(type == "การศึกษา"){
                return this.typecolor.education;
            }
            else if(type == "งานพาร์ทไทน์"){
                return this.typecolor.parttimejob;
            }
            else if(type == "สภาพแวดล้อม"){
                return this.typecolor.environment;
            }
            else if(type == "การลงทะเบียน"){
                return this.typecolor.register;
            }
            else if(type == "ทุนการศึกษา"){
                return this.typecolor.scholarship;
            }
        },
        searchimage: function(id){
            let image = "";
            this.forum_image.map((x) => {
                if(x.id == id){
                    image = x.image_address
                }
            })
            return image;
        }
    }
}
</script>

<style lang="css">
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
    padding-top: 70px;
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