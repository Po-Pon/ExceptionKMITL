<template lang="en">
    <body>
    <div class="banner" >
      <div class="topnav">
        <a href="/user"><img src="/image/navbar/newlogo.png" width="110px" height="auto" style="padding-left: 20px;" alt=""></a>
          <ul>
            <div id="MyClockDisplay" class="clock"></div>
              <div class="dropdown" v-if="id !=''">
                  <button class="btn btn-danger  dropdown-toggle" id="comp3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa fa-user-plus"></i> {{id}}
                  </button>
                  <p class="dropdown-menu" >
                <button class="dropdown-item text-danger" type="button" @click="logout()">ออกจากระบบ</button>
              </p>
          </div>
        </ul>
      </div>
    </div>
    <div id="favorite_arc" class="container-fluid">
        <p id="favorite_arc_title">ข่าวประชาสัมพันธ์</p>
        <div id="all_favorite_arc" class="row">
            <div class="col-3" style="margin-bottom: 32px;" v-for="forum in forums" @click="forumpage(forum.forum_id)">
                <div id="favorite_arc_card" class="card">
                    <img id="favorite_arc_card_image" class="card-img-top" :src="forum.image_address">
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
    return {
      forums: null,
      id: null,
      typecolor: {
        education: "#E35205",
        parttimejob: "#6BDCA8",
        environment: "#F5B406",
        register: "#DA8DFB",
        scholarship: "#3FAAF6",
      },
    };
  },
  created() {
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
    axios
      .get("http://localhost:5000/forum")
      .then((response) => {
        this.forums = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
      localStorage.removeItem("forum_id");
  },
  methods: {
    forumcolor: function (type) {
      if (type == "การศึกษา") {
        return this.typecolor.education;
      } else if (type == "งานพาร์ทไทน์") {
        return this.typecolor.parttimejob;
      } else if (type == "สภาพแวดล้อม") {
        return this.typecolor.environment;
      } else if (type == "การลงทะเบียน") {
        return this.typecolor.register;
      } else if (type == "ทุนการศึกษา") {
        return this.typecolor.scholarship;
      }
    },
    forumpage: function(id){
        window.location.href = "/forum/page";
        localStorage.setItem("forum_id", "" + id);
    }
  },
};
</script>

<style lang="css">
body {
  background-color: #1a1819;
}
#navbar_homepage {
  background-color: rgb(150, 54, 3);
  height: 12%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

#logo_navbar {
  margin-left: 3%;
  margin-top: -3%;
  width: 20%;
  height: 10%;
}

#navbar_manage {
  font-family: "Kanit", sans-serif;
  text-decoration: none;
  color: #ffffff;
  font-size: 20px;
  font-weight: 200;
  margin-right: 40px;
}

#navbar_register {
  font-family: "Kanit", sans-serif;
  text-decoration: none;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
}

#line_register {
  width: 0px;
  border-left: 2px solid #ffffff;
  height: 39px;
  display: inline;
  margin-left: 10px;
  margin-right: 10px;
}
#favorite_arc {
  margin-top: 70px;
  margin-bottom: 38px;
  padding-right: 8%;
  padding-left: 8%;
}

#favorite_arc_title {
  color: #e35205;
  font-family: "Kanit", sans-serif;
  font-size: 35px;
  font-weight: 700;
  padding-top: 70px;
}

#all_favorite_arc {
  margin-top: 50px;
}

#favorite_arc_card {
  width: 295px;
  height: 445px;
  border-radius: 15px;
  margin-right: 80px;
}

#favorite_arc_card:hover{
    opacity: 0.8;
}

#favorite_arc_card_image {
  height: 253px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

#favorite_arc_card_body {
  position: relative;
  border-top: 4px solid;
}

#favorite_arc_card_type_box {
  position: absolute;
  top: -15.075px;
  width: 108.76px;
  height: 30.15px;
  border-radius: 10px;
  font-family: "Kanit", sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
}

#favorite_arc_card_text {
  padding-top: 25px;
  font-family: "Kanit", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #1a1819;
}
#footer_homepage {
  width: 100%;
  height: 78px;
  background-color: #e35205;
}

#address {
  font-family: "Kanit", sans-serif;
  font-size: 15px;
  font-weight: 200;
  color: #ffffff;
  margin-left: 30px;
  margin-bottom: 0em;
}

#footer_button {
  width: 119px;
  height: 46px;
  border-radius: 10px;
  background-color: #ffffff;
  font-family: "Kanit", sans-serif;
  font-size: 24px;
  font-weight: 500;
  float: right;
  text-align: center;
  margin-top: 16px;
  margin-right: 30px;
  color: #1a1819;
}
</style>