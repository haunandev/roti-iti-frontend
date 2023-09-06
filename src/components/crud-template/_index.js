import Vue from 'vue'

import crud from '@/components/crud-template/crud'
import detail from '@/components/crud-template/detail'
import form from '@/components/crud-template/form'
import list from '@/components/crud-template/list'

import baseTable from '@/components/crud-template/base-table'

Vue.component('base-crud', crud)
Vue.component('base-detail', detail)
Vue.component('base-form', form)
Vue.component('base-list', list)

Vue.component('base-table', baseTable)