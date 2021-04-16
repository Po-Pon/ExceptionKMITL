<template>
  <div>
      <div class="banner">
      <div class="topnav">
        <a href="/home"
          ><img
            src="/image/navbar/newlogo.png"
            width="110px"
            height="auto"
            style="padding-left: 20px"
            alt=""
        /></a>
        <ul>
          <li id="comp1"><a href="/">Manage User</a></li>
          <li id="comp1"><a href="/">Manage Forum</a></li>
          <li id="comp1"><a href="/">Manage Problem</a></li>
          <li id="comp2"><a href="/login">Log In</a></li>
          <div class="line"></div>
          <li id="comp2"><a href="/register">Register</a></li>
        </ul>
      </div>
    </div>
    <div class="container p-6 mt-4">
      <div class="row">
        <div class="col-sm-4" id="registerLeft">
          <div class="p-6" style="background-color: red">
            <img
              src="/image/navbar/newlogo.png"
              width="100%"
              height="auto"
              alt=""
            />
          </div>
          <img
            src="/image/login/cloud.png"
            alt=""
            id="cloud2"
            style="margin-top: 200px"
          />
        </div>
        <div class="col-md-8" id="registerRight">
          <div class="p-6 ml-6 mr-6" style="background-color: #130d0d">
            <p v-html="br" />
            <p style="font-size: 35px; font-weight: 500; color: white">
              Welcome to <span style="color: red">ExceptionKMITL!</span>
            </p>
            <p
              style="
                font-size: 20px;
                font-weight: 500;
                color: white;
                opacity: 0.5;
              "
            >
              Create your account
            </p>
            <form id="signup-form" v-on:submit.prevent="submit">
              <div class="container">
                <div class="row">
                  <div class="col-md-6" style="margin-left: -15px">
                    <div class="form-group">
                      <label
                        for="InputFirstnameReg"
                        style="font-size: 18px; font-weight: 500; color: white"
                        >First Name</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model.trim="$v.firstname.$model"
                        :class="{
                          'is-invalid': validationStatusError($v.firstname),
                          'is-valid': !$v.firstname.$invalid,
                        }"
                        id="InputFirstnameReg"
                      />
                      <div class="invalid-feedback">
                        <span v-if="!$v.firstname.required">กรุณากรอกชื่อ</span>
                        <span v-if="!$v.firstname.alpha"
                          >ชื่อจริงต้องไม่มีตัวเลข</span
                        >
                        <span v-if="!$v.firstname.minLength"
                          >ชื่อจริงผู้ใช้ต้องไม่ต่ำกว่า
                          {{ $v.firstname.$params.minLength.min }} ตัว</span
                        >
                        <span v-if="!$v.firstname.maxLength"
                          >ชื่อจริงผู้ใช้ต้องไม่เกิน
                          {{ $v.firstname.$params.maxLength.max }} ตัว</span
                        >
                      </div>
                    </div>
                    <div class="form-group">
                      <label
                        for="InputIdReg"
                        style="font-size: 18px; font-weight: 500; color: white"
                        >Student ID</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model.number.lazy="$v.studentID.$model"
                        :class="{
                          'is-invalid':
                            validationStatusError($v.studentID) ||
                            studentidError == 'error',
                          'is-valid': !$v.studentID.$invalid,
                        }"
                        id="InputIdReg"
                      />
                      <div class="invalid-feedback">
                        <span v-if="!$v.studentID.required"
                          >กรุณากรอกรหัสนักศึกษา</span
                        >
                        <span v-if="!$v.studentID.integer"></span>
                        <span v-if="!$v.studentID.minLength"
                          >รหัสนักศึกษาไม่ถูกต้อง</span
                        >
                        <span v-if="!$v.studentID.maxLength"
                          >รหัสนักศึกษาไม่ถูกต้อง</span
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label
                        for="InputLastnameReg"
                        style="font-size: 18px; font-weight: 500; color: white"
                        >Last Name</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model.trim.lazy="$v.lastname.$model"
                        :class="{
                          'is-invalid': validationStatusError($v.lastname),
                          'is-valid': !$v.lastname.$invalid,
                        }"
                        id="InputLastnameReg"
                      />
                      <div class="invalid-feedback">
                        <span v-if="!$v.lastname.required"
                          >กรุณากรอกนามสกุล</span
                        >
                        <span v-if="!$v.lastname.alpha"
                          >นามสกุลต้องไม่มีตัวเลข</span
                        >
                        <span v-if="!$v.lastname.minLength"
                          >นามสกุลผู้ใช้ต้องไม่ต่ำกว่า
                          {{ $v.firstname.$params.minLength.min }} ตัว</span
                        >
                        <span v-if="!$v.lastname.maxLength"
                          >นามสกุลผู้ใช้ต้องไม่เกิน
                          {{ $v.lastname.$params.maxLength.max }} ตัว</span
                        >
                      </div>
                    </div>
                    <div class="form-group">
                      <label
                        for="SelectStatusReg"
                        style="font-size: 18px; font-weight: 500; color: white"
                        >Educational Status</label
                      >
                      <select
                        class="form-control"
                        v-model.trim.lazy="$v.status.$model"
                        :class="{
                          'is-invalid': validationStatusError($v.status),
                          'is-valid': !$v.status.$invalid,
                        }"
                        id="SelectStatusReg"
                      >
                        <option hidden value="">Chose your status..</option>
                        <option>กำลังศึกษาอยู่</option>
                        <option>จบการศึกษาแล้ว</option>
                      </select>
                      <div class="invalid-feedback">
                        <span v-if="!$v.status.required">กรุณาเลือกสถานะ</span>
                      </div>
                      <!-- <span>selected: {{status}}</span> -->
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="alert alert-success alert-dismissible fade show"
                role="alert"
                v-if="studentidError == 'error'"
              >
                StudentID นี้ถูกใช้งานแล้ว
                <button
                  type="button"
                  class="close"
                  data-dismiss="alert"
                  aria-label="Close"
                  @click="studentid_reset()"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div class="form-group">
                <label
                  for="InputEmailReg"
                  style="font-size: 18px; font-weight: 500; color: white"
                  >Email address</label
                >
                <input
                  type="email"
                  class="form-control"
                  v-model.trim.lazy="$v.email.$model"
                  :class="{
                    'is-invalid':
                      validationStatusError($v.email) || emailError == 'error',
                    'is-valid': !$v.email.$invalid,
                  }"
                  id="InputEmailReg"
                />
                <div class="invalid-feedback">
                  <span v-if="!$v.email.required">กรุณากรอก Email</span>
                  <span v-if="!$v.email.email">Email ไม่ถูกต้อง</span>
                </div>
              </div>
              <div
                class="alert alert-success alert-dismissible fade show"
                role="alert"
                v-if="emailError == 'error'"
              >
                Email นี้ถูกใช้งานแล้ว
                <button
                  type="button"
                  class="close"
                  data-dismiss="alert"
                  aria-label="Close"
                  @click="email_reset()"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="form-group">
                <label
                  for="InputPasswordReg"
                  style="font-size: 18px; font-weight: 500; color: white"
                  >Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  v-model.trim.lazy="$v.passWord.$model"
                  :class="{
                    'is-invalid': validationStatusError($v.passWord),
                    'is-valid': !$v.passWord.$invalid,
                  }"
                  id="InputPasswordReg"
                />
                <a @click="togglePassReg()"
                  ><span
                    class="fa fa-fw fa-eye field-icon toggle-password"
                  ></span
                ></a>
                <div class="invalid-feedback">
                  <span v-if="!$v.passWord.required">กรุณากรอกรหัสผ่าน</span>
                  <span v-if="!$v.passWord.minLength"
                    >Password ต้องไม่ต่ำกว่า 16 ตัว</span
                  >
                  <span v-if="!$v.passWord.maxLength"
                    >Password ต้องไม่เกิน 255 ตัว</span
                  >
                </div>
              </div>
              <div class="form-group">
                <label
                  for="InputPasswordRegCheck"
                  style="font-size: 18px; font-weight: 500; color: white"
                  >Repeat Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  v-model.trim.lazy="$v.repeatPassword.$model"
                  :class="{
                    'is-invalid': validationStatusError($v.repeatPassword),
                    'is-valid':
                      passWord != '' ? !$v.repeatPassword.$invalid : '',
                  }"
                  id="InputPasswordRegCheck"
                  name="InputPasswordRegCheck"
                />
                <a @click="togglePassRegCheck()"
                  ><span
                    class="fa fa-fw fa-eye field-icon toggle-password"
                  ></span
                ></a>
                <div class="invalid-feedback">
                  <span v-if="!$v.repeatPassword.required"
                    >กรุณากรอกรหัสผ่านอีกครั้ง</span
                  >
                  <span v-if="!$v.repeatPassword.sameAspassword"
                    >Password ไม่ตรงกัน</span
                  >
                </div>
              </div>
              <div class="form-group form-check" style="padding-left: 24px">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="Check2"
                  style="background-color: #130d0d; border-color: white"
                  v-model.trim.lazy="$v.Iagree.$model"
                  :class="{
                    'is-invalid': validationStatusError($v.Iagree),
                    'is-valid': !$v.Iagree.$invalid,
                  }"
                />
                <label class="form-check-label" for="Check2"
                  >I agree with terms and conditions</label
                >
                <!-- <span>{{Iagree}}</span> -->
                <div class="invalid-feedback">
                  <span v-if="!$v.Iagree.required"
                    >กรุณาคลิกเพื่อยอมรับเงื่อนไขและข้อตกลง</span
                  >
                  <span v-else-if="!$v.Iagree == false"
                    >กรุณาคลิกเพื่อยอมรับเงื่อนไขและข้อตกลง</span
                  >
                </div>
              </div>
              <button
                type="submit"
                class="btn btn-danger"
                style="
                  font-size: 15px;
                  font-weight: 300;
                  border-radius: 18px;
                  padding: 5px 30px 5px 30px;
                "
              >
                Sign up
              </button>
              <td v-html="br2" />
              <div
                class="alert alert-success alert-dismissible fade show"
                role="alert"
                v-show="messageRegOK != ''"
              >
                {{ messageRegOK }}
                <button
                  type="button"
                  class="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <p style="font-size: 10px; font-weight: 400; color: white">
                Already have an account?
                <a href="/login" style="text-decoration: none"
                  ><span style="color: red"
                    ><b>Log in your account now!</b></span
                  ></a
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
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
import {
  required,
  maxLength,
  minLength,
  email,
  sameAs,
  integer,
  alpha,
} from "vuelidate/lib/validators";
import axios from "axios";
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      studentID: "",
      status: "",
      email: "",
      passWord: "",
      repeatPassword: "",
      Iagree: "",
      br: "<br><br><br>",
      br2: "<br>",
      // backend response
      dataReg: "",
      messageRegOK: "",
      // backend error
      studentidError: "",
      emailError: "",
    };
  },
  created() {
    axios
      .get("http://localhost:5000/")
      .then((response) => {
        this.dataReg = response.data;
        for (let i = 0; i < this.dataReg.length; i++) {
          this.repeatEmail[i] = this.dataReg[i].acc_email;
        }
        console.log("dataReg", this.dataReg);
        console.log("repeatEmailAll", this.repeatEmail);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  validations: {
    firstname: {
      required,
      alpha,
      minLength: minLength(3),
      maxLength: maxLength(255),
    },
    lastname: {
      required,
      alpha,
      minLength: minLength(3),
      maxLength: maxLength(255),
    },
    studentID: {
      required,
      integer,
      minLength: minLength(8),
      maxLength: maxLength(8),
    },
    status: {
      required,
    },
    email: {
      required,
      email,
    },
    passWord: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(255),
    },
    repeatPassword: {
      required,
      sameAspassword: sameAs("passWord"),
    },
    Iagree: {
      required,
      checked: (value) => value === true,
    },
  },
  methods: {
    togglePassReg() {
      var x = document.getElementById("InputPasswordReg");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    },
    togglePassRegCheck() {
      var x = document.getElementById("InputPasswordRegCheck");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    },
    studentid_reset() {
      this.studentidError = "";
    },
    email_reset() {
      this.emailError = "";
    },
    resetData() {
      this.firstname = "";
      this.lastname = "";
      this.studentID = "";
      this.status = "";
      this.email = "";
      this.passWord = "";
      this.repeatPassword = "";
      this.Iagree = "";
    },
    validationStatusError(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    submit() {
      this.br = "";
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      axios
        .post("http://localhost:5000/register/submit", {
          form: {
            Firstname: this.firstname,
            Lastname: this.lastname,
            StudentID: this.studentID,
            Status: this.status,
            Email: this.email,
            Password: this.passWord,
          },
        })
        .then((response) => {
          const data = response.data;
          if (data.message == "register success Let's Login!") {
            this.studentidError = "";
            this.emailError = "";
            this.messageRegOK = data.message;
            console.log(response);
            this.$v.$reset();
            this.resetData();
          } else {
            this.studentidError = data.errorStudentid;
            this.emailError = data.errorEmail;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
</style>