<template>
    <div class="wrapper">
        <h2>Maps</h2>
        <h4>Default</h4>
        <ejs-maps>
            <e-layers>
                <e-layer :shapeData="shapeData" :shapePropertyPath="shapePropertyPath" :shapeDataPath="shapeDataPath"
                    :dataSource="data" :shapeSettings="shapeSettings"></e-layer>
            </e-layers>
        </ejs-maps>
        <h4>Template</h4>
        <ejs-maps>
            <e-layers>
                <e-layer :shapeData="shapeData">
                    <e-markerSettings>
                        <e-markerSetting visible="true" :template="contentTemplate" :dataSource="dataSource"
                            animationDuration="0"></e-markerSetting>
                        <e-markerSetting visible="true" :template="contentTemplate1" :dataSource="dataSource1"
                            animationDuration="0"></e-markerSetting>
                        <e-markerSetting visible="true" :template="contentTemplate2" :dataSource="dataSource2"
                            animationDuration="0"></e-markerSetting>
                    </e-markerSettings>
                </e-layer>
            </e-layers>
        </ejs-maps>
    </div>
</template>

<script>
    import Vue from "vue";
    import { MapsPlugin, Marker, MapAjax } from "@syncfusion/ej2-vue-maps";
    Vue.use(MapsPlugin);

    export default {
        name: "MapTemplate",
        data() {
            return {
                shapeData: new MapAjax('https://cdn.syncfusion.com/maps/map-data/world-map.json'),
                data: [
                    { Country: "China", Membership: "Permanent" },
                    { Country: "France", Membership: "Permanent" },
                    { Country: "Russia", Membership: "Permanent" },
                    { Country: "Kazakhstan", Membership: "Non-Permanent" },
                    { Country: "Poland", Membership: "Non-Permanent" },
                    { Country: "Sweden", Membership: "Non-Permanent" },
                ],
                shapePropertyPath: "name",
                shapeDataPath: "Country",
                shapeSettings: {
                    colorValuePath: "Membership",
                    colorMapping: [
                        {
                            value: "Permanent",
                            color: "#D84444",
                        },
                        {
                            value: "Non-Permanent",
                            color: "#316DB5",
                        },
                    ],
                },
                dataSource: [
                    { latitude: 49.95121990866204, longitude: 18.468749999999998 },
                ],
                dataSource1: [{ latitude: 59.88893689676585, longitude: -109.3359375 }],
                dataSource2: [
                    { latitude: -6.64607562172573, longitude: -55.54687499999999 },
                ],
                contentTemplate: function () {
                    return {
                        template: Vue.component("MapsComponent", {
                            template:
                                '<div id="marker4" style="color:red" class="markerTemplate">Europe</div>',
                            data() {
                                return {};
                            },
                        }),
                    };
                },
                contentTemplate1: function () {
                    return {
                        template: Vue.component("MapsComponent", {
                            template:
                                '<div id="marker5" class="markerTemplate" style="width:50px;color:blue">NorthAmerica</div>',
                            data() {
                                return {};
                            },
                        }),
                    };
                },
                contentTemplate2: function () {
                    return {
                        template: Vue.component("MapsComponent", {
                            template:
                                '<div id="marker6" class="markerTemplate" style="width:50px;color:green">South America </div>',
                            data() {
                                return {};
                            },
                        }),
                    };
                },
            };
        },
        provide: {
            maps: [Marker],
        },
    };
</script>
<style>
.wrapper {
    max-width: 400px;
    margin: 0 auto;
}
</style>