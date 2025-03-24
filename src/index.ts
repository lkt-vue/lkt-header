import {App, Plugin} from "vue";
import "../style.css";
import {default as libComponent} from "./lib-components/LktHeader.vue";


const LktHeader: Plugin = {
    install: (app: App) => {
        if (app.component('lkt-header') === undefined) app.component('lkt-header', libComponent)
    },
};

export default LktHeader;