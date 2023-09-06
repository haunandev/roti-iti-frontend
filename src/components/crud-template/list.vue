<template>
    <b-card class="mb-4" data-aos="fade-up" data-aos-delay="100">
        <h3 class="mb-4">
            {{ `${$t('base-crud.list.title')} ${$t(config.title)}` }}
        </h3>
        <base-table :config="config" />
    </b-card>
</template>

<script>
export default {
    name: 'PiafAdminvueBowerplateList',
    props: {
        config: {
            type: Object,
            default: null,
        }
    },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>