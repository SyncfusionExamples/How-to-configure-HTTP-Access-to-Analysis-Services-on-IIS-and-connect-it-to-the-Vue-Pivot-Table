<template>
    <div>
        <span>{{ data.nodeText }}</span> - <b>{{ data.nodeId }}</b>
    </div>
</template>
<script>
    export default {
        name: "treeVue",
        data() {
            return {
                data: {},
            };
        },
    };
</script>