<template>
    <div>
        <h2>TreeView</h2>
        <h4>String template</h4>
        <ejs-treeview id="treeview" :fields="fields"
            :nodeTemplate="'<div><span>${nodeText}</span> - <b>${nodeId}</b></div>'"></ejs-treeview>

        <h4>External template</h4>
        <ejs-treeview id="treeview2" :fields="fields" :nodeTemplate="externalTemplate"></ejs-treeview>

        <h4>Inline template</h4>
        <ejs-treeview id="treeview3" :fields="fields" :nodeTemplate="inlineTemplate"></ejs-treeview>

        <h4>Slot template</h4>
        <button id="btn" @click="btnClick">Get Selected Node</button>
        <ejs-treeview id="treeview4" ref="treeviewInstance" :fields="fields" :nodeTemplate="'myTemplate'"
            :nodeClicked="nodeClicked">
            <template v-slot:myTemplate="{data}">
                <div><span>{{data.nodeText}}</span> - <b>{{data.nodeId}}</b></div>
            </template>
        </ejs-treeview>
    </div>
</template>

<script>
    import Vue from "vue";
    import treeVue from "./ExternalTemplate.vue";
    import { TreeViewPlugin } from "@syncfusion/ej2-vue-navigations";

    Vue.use(TreeViewPlugin);

    var demoVue = Vue.component("inlineTree", {
        data: () => ({}),
        template: `<div><span>{{data.nodeText}}</span> - <b>{{data.nodeId}}</b></div>`,
    });

    var demoVue1 = Vue.component("externalTemplate", treeVue);
    var data = [
        {
            nodeId: "01",
            nodeText: "Music",
            nodeChild: [{ nodeId: "01-01", nodeText: "Gouttes.mp3" }],
        },
    ];

    export default {
        name: "TreeView",
        components: {
        },
        data() {
            return {
                fields: { dataSource: data, id: "nodeId", text: "nodeText", child: "nodeChild" },
                externalTemplate: function () {
                    return {
                        template: demoVue1,
                    };
                },
                inlineTemplate: function () {
                    return {
                        template: demoVue,
                    };
                },
            };
        },
        methods: {
            nodeClicked: function () {
                console.log("TreeView node clicked");
            },
            btnClick: function () {
                var treeObj = document.getElementById("treeview4").ej2_instances[0];
                console.log(treeObj.selectedNodes);
                var node = this.$refs.treeviewInstance.getNode("01");
                console.log(node);
            },
        }
    };
</script>