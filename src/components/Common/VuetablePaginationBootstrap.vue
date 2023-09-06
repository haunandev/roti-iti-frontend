<template>
    <div class="container">
        <div class="row justify-content-between">
            <div class="d-flex align-items-center">
                {{ $t("table.pagination.show") }}
                {{ tablePagination ? tablePagination.from : 0 }} {{ $t("table.pagination.to") }} {{ tablePagination ? tablePagination.to : 0 }}
                {{ $t("table.pagination.from") }} {{ tablePagination ? tablePagination.total : 0 }} {{ $t("table.pagination.entry") }}
            </div>
            <div class="d-flex justify-content-center align-items-center">
                <ul class="pagination justify-content-center pagination-sm mb-0">
                    <li :class="{'disabled': isOnFirstPage,'page-item':true}">
                        <a class="page-link" href="javascript:;" @click.prevent="loadPage(1)">
                            <span><i class='simple-icon-control-start' /></span>
                        </a>
                    </li>
                    <li :class="{'disabled': isOnFirstPage,'page-item':true}">
                        <a class="page-link" href="javascript:;" @click.prevent="loadPage('prev')">
                            <span><i class='simple-icon-arrow-left' /></span>
                        </a>
                    </li>
                    <template v-if="notEnoughPages">
                        <li v-for="n in totalPage" :class="{'active': isCurrentPage(n), 'page-item':true}" :key="n">
                            <a class="page-link" href="javascript:;" @click.prevent="loadPage(n)" v-html="n"></a>
                        </li>
                    </template>
                    <template v-else>
                        <li v-for="n in windowSize" :class="{'active': isCurrentPage(windowStart+n-1), 'page-item':true}" :key="n">
                            <a class="page-link" href="javascript:;" @click.prevent="loadPage(windowStart+n-1)" v-html="windowStart+n-1"></a>
                        </li>
                    </template>
                    <li :class="{'disabled': isOnLastPage,'page-item':true}">
                        <a class="page-link" href="javascript:;" @click.prevent="loadPage('next')">
                            <span><i class='simple-icon-arrow-right' /></span>
                        </a>
                    </li>
                    <li :class="{'disabled': isOnLastPage,'page-item':true}">
                        <a class="page-link" href="javascript:;" @click.prevent="loadPage(totalPage)">
                            <span><i class='simple-icon-control-end' /></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import VuetablePaginationMixin from 'vuetable-2/src/components/VuetablePaginationMixin'
export default {
    mixins: [VuetablePaginationMixin]
}
</script>
