<template>
  <div>
    <div class="banner">
      <div class="topnav">
        <a href="/admin"
          ><img
            src="/image/navbar/newlogo.png"
            width="110px"
            height="auto"
            style="padding-left: 20px"
            alt=""
        /></a>
        <ul>
          <div id="MyClockDisplay" class="clock"></div>
          <li id="comp1"><a href="/manageUser">Manage User</a></li>
          <li id="comp1"><a href="/manageUser">Manage Forum</a></li>
          <li id="comp1"><a href="/manageReport">Manage Report</a></li>
          <div class="dropdown" v-if="id != ''">
            <button
              class="btn btn-danger dropdown-toggle"
              id="comp3"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fa fa-user-plus"></i> {{ id }}
            </button>
            <p class="dropdown-menu">
              <button
                class="dropdown-item text-danger"
                type="button"
                @click="logout()"
              >
                ออกจากระบบ
              </button>
            </p>
          </div>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="table-responsive">
        <div class="table-wrapper">
          <div class="table-title">
            <div class="row">
              <div class="col-xs-5">
                <h2>User <b>Management</b></h2>
              </div>
            </div>
          </div>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date Created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.acc_id">
                <td>{{ user.acc_id }}</td>
                <td>
                  {{ user.acc_fname + " " + user.acc_lname }}
                </td>
                <td>{{ user.acc_email }}</td>
                <td>{{ new Date(user.create_date) }}</td>
                <td>
                  <a
                    href="#"
                    class="settings"
                    title="Settings"
                    data-toggle="tooltip"
                    ><i class="material-icons">&#xE8B8;</i></a
                  >
                  <a href="#" title="Delete" data-toggle="tooltip"
                    ><i class="material-icons" style="color: red"
                      >&#xE5C9;</i
                    ></a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Save changes</button>
          <button class="button">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      permission: null,
      tokenAdmin: null,
      id: '',
      manage_acc: null,
      manage_standand: null,
      users: [],
    };
  },
  created() {
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
    axios
      .get("http://localhost:5000/")
      .then((response) => {
        this.users = response.data;
      })
      .catch((err) => {
        if (err) throw err;
      });
  },
  methods: {
    logout() {
      this.id = "";
      console.log("Log out!");
      this.$router.push({ name: "Home" });
    },
    edituser() {},
  },
};
</script>

<style scoped>
.table-responsive {
  margin: 30px 0;
}
.table-wrapper {
  min-width: 1000px;
  background: #fff;
  padding: 20px 25px;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.table-title {
  padding-bottom: 15px;
  background: #299be4;
  color: #fff;
  padding: 16px 30px;
  margin: -20px -25px 10px;
  border-radius: 3px 3px 0 0;
}
.table-title h2 {
  margin: 5px 0 0;
  font-size: 24px;
}
.table-title .btn {
  color: #566787;
  float: right;
  font-size: 13px;
  background: #fff;
  border: none;
  min-width: 50px;
  border-radius: 2px;
  border: none;
  outline: none !important;
  margin-left: 10px;
}
.table-title .btn:hover,
.table-title .btn:focus {
  color: #566787;
  background: #f2f2f2;
}
.table-title .btn i {
  float: left;
  font-size: 21px;
  margin-right: 5px;
}
.table-title .btn span {
  float: left;
  margin-top: 2px;
}
table.table tr th,
table.table tr td {
  border-color: #e9e9e9;
  padding: 12px 15px;
  vertical-align: middle;
}
table.table tr th:first-child {
  width: 60px;
}
table.table tr th:last-child {
  width: 100px;
}
table.table-striped tbody tr:nth-of-type(odd) {
  background-color: #fcfcfc;
}
table.table-striped.table-hover tbody tr:hover {
  background: #f5f5f5;
}
table.table th i {
  font-size: 13px;
  margin: 0 5px;
  cursor: pointer;
}
table.table td:last-child i {
  opacity: 0.9;
  font-size: 22px;
  margin: 0 5px;
}
table.table td a {
  font-weight: bold;
  color: #566787;
  display: inline-block;
  text-decoration: none;
}
table.table td a:hover {
  color: #2196f3;
}
table.table td a.settings {
  color: #2196f3;
}
table.table td a.delete {
  color: #f44336;
}
table.table td i {
  font-size: 19px;
}
table.table .avatar {
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}
.status {
  font-size: 30px;
  margin: 2px 2px 0 0;
  display: inline-block;
  vertical-align: middle;
  line-height: 10px;
}
.text-success {
  color: #10c469;
}
.text-info {
  color: #62c9e8;
}
.text-warning {
  color: #ffc107;
}
.text-danger {
  color: #ff5b5b;
}
.pagination {
  float: right;
  margin: 0 0 5px;
}
.pagination li a {
  border: none;
  font-size: 13px;
  min-width: 30px;
  min-height: 30px;
  color: #999;
  margin: 0 2px;
  line-height: 30px;
  border-radius: 2px !important;
  text-align: center;
  padding: 0 6px;
}
.pagination li a:hover {
  color: #666;
}
.pagination li.active a,
.pagination li.active a.page-link {
  background: #03a9f4;
}
.pagination li.active a:hover {
  background: #0397d6;
}
.pagination li.disabled i {
  color: #ccc;
}
.pagination li i {
  font-size: 16px;
  padding-top: 6px;
}
.hint-text {
  float: left;
  margin-top: 10px;
  font-size: 13px;
}
.fa-user-plus{
    color:rgb(0, 0, 200);
}
</style>

