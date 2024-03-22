<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height= "height"> </ejs-pivotview>
  </div>
</template>

<script>
import Vue from "vue";
import { PivotViewPlugin } from '@syncfusion/ej2-vue-pivotview';

Vue.use(PivotViewPlugin);

export default {
  name: 'app',
  data () {
    return {
      dataSourceSettings: {
            catalog: 'AdventureWorksDW2014Multidimensional-SE',
            cube: 'Adventure Works',
            providerType: 'SSAS',
            enableSorting: true,
            url: 'http://localhost:80/OLAP/msmdpump.dll',
            localeIdentifier: 1033,
            rows: [
                { name: '[Customer].[Customer Geography]', caption: 'Customer Geography' },
            ],
            columns: [
                { name: '[Product].[Product Categories]', caption: 'Product Categories' },
                { name: '[Measures]', caption: 'Measures' },
            ],
            values: [
                { name: '[Measures].[Customer Count]', caption: 'Customer Count' },
                { name: '[Measures].[Internet Sales Amount]', caption: 'Internet Sales Amount' }
            ],
      },
      height: 350
    }
  }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import "../node_modules/@syncfusion/ej2-pivotview/styles/material.css";
</style>
