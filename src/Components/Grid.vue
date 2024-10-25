<template>
    <div id="grid">
        <h2>Grid</h2>
        <ejs-grid ref="grid" :dataSource="ds" :allowPaging="true" :allowSorting='true' :allowFiltering='true'  :pageSettings='pageSettings'>
            <e-columns>
                <e-column field="OrderID" headerText="Order ID" width=120 />
                <e-column field="CustomerID" headerText="Customer ID" width=150 />
                <e-column field="Freight" headerText="Freight" width=150  />
            </e-columns>
        </ejs-grid>
    </div>
</template>

<script>
    import { GridPlugin, Page, Sort, Filter } from "@syncfusion/ej2-vue-grids";
    import Vue from "vue";
    Vue.use(GridPlugin);
    export default {
        name: "App",
        data() {
            return {
                ds: [
                    { OrderID: 10248, CustomerID: 'VINET', Freight: 32.38 },
                    { OrderID: 10249, CustomerID: 'TOMSP', Freight: 11.61 },
                    { OrderID: 10250, CustomerID: 'HANAR', Freight: 65.83 },
                    { OrderID: 10251, CustomerID: 'VICTE', Freight: 41.34 },
                    { OrderID: 10252, CustomerID: 'SUPRD', Freight: 51.3 },
                    { OrderID: 10253, CustomerID: 'HANAR', Freight: 58.17 },
                    { OrderID: 10254, CustomerID: 'CHOPS', Freight: 22.98 },
                    { OrderID: 10255, CustomerID: 'RICSU', Freight: 148.33 },
                    { OrderID: 10256, CustomerID: 'WELLI', Freight: 13.97 }
                ],
                pageSettings: { pageSize: 5 }
            }
        },
        provide: { grid: [Page, Sort, Filter] },
    }
</script>