import {createStore} from 'vuex';
import sliderPreview from "@/store/modules/sliderPreview";
import requireSignForm from "@/store/modules/requireSignForm";
import user from "@/store/modules/user";
import animations from "@/store/modules/animations";
import scheduleDashboard from "@/store/modules/scheduleDashboard";

export default new createStore({
    modules: {sliderPreview, requireSignForm, user, animations, scheduleDashboard}

})
