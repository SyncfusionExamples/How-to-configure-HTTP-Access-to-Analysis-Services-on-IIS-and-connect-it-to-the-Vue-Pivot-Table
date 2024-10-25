<template>
    <div id="app">
        <h2>Form</h2>
        <h4>Button</h4>
        <ejs-button content="Button" v-on:click.native="clicked"></ejs-button>
        <h4>Text box</h4>
        <input placeholder="Enter a name" v-model="value" />
        <span style="margin:0 10px">
            <ejs-textbox floatLabelType="Auto" name="txt1" placeholder="Enter a name1" v-model="value"
                width="200px"></ejs-textbox>
        </span>
        <span style="margin:0 10px">
            <ejs-textbox floatLabelType="Auto" name="txt2" placeholder="Enter a name2" v-model="value"
                width="200px"></ejs-textbox>
        </span>
        <h4>Dropdown list</h4>
        <ejs-dropdownlist id='dropdownlist' :dataSource='sportsData'></ejs-dropdownlist>
        <h4>Accordion</h4>
        <ejs-accordion ref="acrdnInstance" expandMode='Single' :expanded="expanded">
            <e-accordionitems>
                <e-accordionitem v-for="(item, index) in items" :key="index" :header="item.header"
                    :content="item.content"></e-accordionitem>
            </e-accordionitems>
        </ejs-accordion>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
    import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
    import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
    import { AccordionPlugin } from '@syncfusion/ej2-vue-navigations';

    Vue.use(ButtonPlugin);
    Vue.use(TextBoxPlugin);
    Vue.use(DropDownListPlugin);
    Vue.use(AccordionPlugin);

    export default {
        name: "App",
        data: function () {
            return {
                value: "John",
                sportsData: ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'],
                items: [
                    {
                        header: 'ASP.NET',
                        content: 'ASP.NET is an open-source server-side web application framework designed for web development to produce ' +
                            'dynamic web pages. It was developed by Microsoft to allow programmers to build dynamic web sites, web applications ' +
                            'and web services. It was first released in January 2002 with version 1.0 of the .NET Framework, and is the successor ' +
                            'to Microsoft Active Server Pages (ASP) technology. ASP.NET is built on the Common Language Runtime (CLR), allowing ' +
                            'programmers to write ASP.NET code using any supported .NET language. The ASP.NET SOAP extension framework allows ' +
                            'ASP.NET components to process SOAP messages.'
                    },
                    {
                        header: 'ASP.NET MVC',
                        content: 'The ASP.NET MVC is a web application framework developed by Microsoft, which implements the ' +
                            'model–view–controller (MVC) pattern. It is open-source software, apart from the ASP.NET Web Forms component which is ' +
                            'proprietary. In the later versions of ASP.NET, ASP.NET MVC, ASP.NET Web API, and ASP.NET Web Pages (a platform using ' +
                            'only Razor pages) will merge into a unified MVC 6.The project is called ASP.NET vNext.'
                    },
                    {
                        header: 'JavaScript',
                        content: 'JavaScript (JS) is an interpreted computer programming language. It was originally implemented as ' +
                            'part of web browsers so that client-side scripts could interact with the user, control the browser, communicate ' +
                            'asynchronously, and alter the document content that was displayed.[5] More recently, however, it has become common in ' +
                            'both game development and the creation of desktop applications.'
                    }
                ]
            }
        },
        methods: {
            clicked: function () {
                window.alert('Button Clicked');
            },
            expanded: function () {
                console.log('Expanded');
            }
        }
    }
</script>