import {createRouter, createWebHashHistory} from 'vue-router';
import SignUp from "@/components/sign-up/SignUp.vue";
import SignIn from "@/components/sign-in/SignIn.vue";
import DashBoard from "@/components/main/dashboard/DashBoard";
import PatientsComponent from "@/components/main/patients/PatientsComponent.vue";
import ScheduleComponent from "@/components/main/schedule/ScheduleComponent.vue";
import DoctorsComponent from "@/components/main/doctors/DoctorsComponent.vue";
import FinancesComponent from "@/components/main/finances/FinancesComponent.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: "/sign-up", component: SignUp, alias: '/'},
        {path: "/sign-in", component: SignIn},
        {path: "/dashboard", component: DashBoard},
        {path: "/schedule", component: ScheduleComponent},
        {path: "/patients", component: PatientsComponent},
        {path: "/doctors", component: DoctorsComponent},
        {path: "/finances", component: FinancesComponent},




    ]
})