<template>
    <div>
        <base-crud :config="crudConfig"></base-crud>
    </div>
</template>

<script>
export default {
    name: 'PiafAdminvueBowerplateTable',

    data() {
        return {
            crudConfig: {
                customApiUrl: '',
                endPoint: 'users/',
                title: 'menu.base-crud',
                modifyData: ['create'],
                fields: [
                    // { key: 'title', label: 'Title', sortable: true, sortDirection: 'desc', tdClass: 'list-item-heading' }, example
                    {
                        key: 'name',
                        label: 'Name',
                        sortable: true,
                    },
                    {
                        key: 'email',
                        label: 'Email',
                        sortable: true,
                    },
                ]
            }
        };
    },

    mounted() {
    },

    methods: {
    },
};
</script>