<template>
    <div class="banner" >
        <div class="topnav">
            <a href="/home"><img src="/image/navbar/newlogo.png" width="110px" height="auto" style="padding-left: 20px;" alt=""></a>
            <ul>
                <li id="comp1"><a href="/">Manage User</a></li>
                <li id="comp1"><a href="/">Manage Forum</a></li>
                <li id="comp1"><a href="/">Manage Problem</a></li>
                <template v-if="id == ''">
                    <li id="comp2"><a href="/login">Log In</a></li>
                    <div class="line"></div>
                    <li id="comp2"><a href="/register">Register</a></li>
                </template>
                <div class="dropdown" v-if="id != ''">
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
            <a href="/" id="apply">ร้องเรียนปัญหา</a>
            <a href="/" id="tracking">ติดตามสถานะ</a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id: '',
        }
    },
    methods:{
        logout(){
            this.id = ''
        }
    },
    
}
</script>

<style scoped>

</style>

