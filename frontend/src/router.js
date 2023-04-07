import {createRouter, createWebHashHistory} from 'vue-router';
import SignUp from "@/components/sign-up/SignUp.vue";
import SignIn from "@/components/sign-in/SignIn.vue";
import DashBoard from "@/components/main/dashboard/DashBoard";
import PatientsComponent from "@/components/main/dashboard/PatientsComponent";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: "/sign-up", component: SignUp, alias: '/'},
        {path: "/sign-in", component: SignIn},
        {path: "/dashboard", component: DashBoard},
        {path: "/patients", component: PatientsComponent}


    ]
})