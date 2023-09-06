<template>
    <div>
        <div  data-aos="fade-right">
            <piaf-breadcrumb :heading="$t(config.title)"/>
        </div>
        <base-list v-if="activeView == 'list'" :config="config" />
    </div>
</template>

<script>
export default {
    name: 'PiafAdminvueBowerplateCrud',
    props: {
        config: {
            type: Object,
            default: null,
        }
    },
    data: () => ({
        activeView: 'list'
    }),

    watch:{
        $route: {
            deep: true,
            immediate: true,
            handler(to) {
                this.activeView = to.query.view ? to.query.view : "list";
                this.activeID = to.query.id ? Number(to.query.id) : "";
            }
        }
    },
    
    mounted() {
    },

    methods: {
    },
};
</script>