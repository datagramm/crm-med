import {createStore} from 'vuex';
import sliderPreview from "@/store/modules/sliderPreview";
import requireSignForm from "@/store/modules/requireSignForm";
import user from "@/store/modules/user";
import animations from "@/store/modules/animations";
export default new createStore({
    modules: {sliderPreview, requireSignForm, user, animations}

})
