<template>
    <div>
        <div class="row">
            <div class="col d-flex align-items-center mb-2 justify-content-start">
                {{ $t('table.pagination.show') }}
                <b-dropdown
                    id="per-page-table-dropdown"
                    right
                    :text="`${table.perPage}`"
                    variant="outline-primary"
                    class="d-inline-block mx-2"
                    size="xs"
                >
                <b-dropdown-item
                    v-for="(size,index) in table.perPageOpt"
                    :key="index"
                    @click="table.perPage = size"
                >{{ size }}</b-dropdown-item>
                </b-dropdown>
                {{ $t('table.pagination.entry') }}
            </div>
            <div class="col pr-1">
                <div class="search-sm d-inline-block float-md-left mr-1 align-top w-100">
                    <b-input type="text" :placeholder="$t('table.pagination.search-placeholder')" @keypress.enter="submitSearch" />
                </div>
            </div>
            <div class="col-auto pl-1">
                <button type="button" class="btn btn-outline-primary btn-xs">
                    <i class="iconsminds-filter-2"></i> Filter
                </button>
                <button v-if="config.modifyData.includes('create')" type="button" class="ml-1 btn btn-outline-primary btn-xs">
                    <i class="simple-icon-plus mr-1"></i> {{ $t('base-crud.list.add-button') }}
                </button>
            </div>
        </div>
        
        <b-table
            ref="custom-table"
            class="vuetable"
            sort-by="title" sort-desc.sync="false"
            :select-mode="table.selectMode"
            :current-page="table.currentPage"
            :per-page="table.perPage"
            :filter="table.filter"
            :fields="config.fields"
            :items="dataProvider"
            >
            <!-- <template slot="status" slot-scope="data">
                <b-badge class="mb-1" :variant="data.item.statusColor">{{ data.value }}</b-badge>
            </template> -->
        </b-table>
        <!-- pagination -->
        <div class="row justify-content-between mx-2">
            <div class="d-flex align-items-center">
                {{ $t("table.pagination.show") }}
                {{ table.from }} {{ $t("table.pagination.to") }} {{ table.to }}
                {{ $t("table.pagination.from") }} {{ table.totalRows }} {{ $t("table.pagination.entry") }}
            </div>
            <b-pagination
                size="sm"
                align="center"
                :total-rows="table.totalRows"
                :per-page="table.perPage"
                v-model="table.currentPage"
            >
                <template v-slot:next-text>
                    <i class="simple-icon-arrow-right"/>
                </template>
                <template v-slot:prev-text>
                    <i class="simple-icon-arrow-left"/>
                </template>
                <template v-slot:first-text>
                    <i class="simple-icon-control-start"/>
                </template>
                <template v-slot:last-text>
                    <i class="simple-icon-control-end"/>
                </template>
            </b-pagination>
        </div>
    </div>
</template>

<script>
import { getCurrentUser } from '../../utils';

export default {
    name: 'PiafAdminvueBowerplateBaseTable',

    props: {
        config: {
            type: Object,
            default: null,
        }
    },

    components: {
    },

    data: () => ({
        accessToken: getCurrentUser().token,
        table: {
            selectMode: 'multi',
            perPage: 10,
            perPageOpt: [5, 10, 20, 50, 100, 500],
            currentPage: 1,
            totalRows: 0,
            from: 0,
            to: 0,
            filter: {
                search: ''
            }
        }
    }),

    mounted() {
    },

    methods: {
        apiParamsConverter (params) {
            let apiParams = {}
            if (params.perPage !== 0) {
                apiParams.per_page = params.perPage
            }
            if (params.currentPage >= 1) {
                apiParams.page = params.currentPage
            }
            if (params.sortBy && params.sortBy.length > 0) {
                apiParams.sort = `${params.sortBy}|${params.sortDesc ? 'desc' : 'asc'}`
            }
            if (params.filter && params.filter instanceof Object) {
                apiParams.search = params.filter.search
                // Optional
            }
            return apiParams
        },
        dataProvider (ctx) {
            let params = this.apiParamsConverter(ctx)
            params.per_page = this.table.perPage
            let promise = this.$api({
                url: `${this.config.endPoint}list?${new URLSearchParams(params)}`, 
                method: 'get',
            }) 
            return promise
                .then(result => result.data)
                .then((data) => {
                    this.table.currentPage = data.current_page
                    this.table.perPage = data.per_page
                    this.table.totalRows = data.total
                    this.table.from = data.from
                    this.table.to = data.to
                    const items = data.data
                    return items;
                }).catch(_error => {
                    return []
                })
        },
        submitSearch(val) {
            this.table.filter.search = val.target.value
        }
    },
};
</script>