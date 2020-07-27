<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <v-tags></v-tags>
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
                <el-backtop target=".content"></el-backtop>
            </div>
        </div>
    </div>
</template>

<script>
import vHead from './Header.vue';
import vSidebar from './Sidebar.vue';
import vTags from './Tags.vue';

export default {
    data() {
        return {
            tagsList: [],
            collapse: false
        };
    },
    components: {
        vHead,
        vSidebar,
        vTags
    },
    created() {
        // bus.$on('collapse-content', msg => {
        //     this.collapse = msg;
        // });

        // // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        // bus.$on('tags', msg => {
        //     let arr = [];
        //     for (let i = 0, len = msg.length; i < len; i++) {
        //         msg[i].name && arr.push(msg[i].name);
        //     }
        //     this.tagsList = arr;
        // });
    }
};
</script>

<style>

* {
    margin: 0;
    padding: 0;
}

html,
body,
#app,
.wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
}



body {
    font-family: 'PingFang SC', "Helvetica Neue", Helvetica, "microsoft yahei", arial, STHeiTi, sans-serif;
}

a {
    text-decoration: none
}


.content-box {
    position: absolute;
    left: 250px;
    right: 0;
    top: 70px;
    bottom: 0;
    padding-bottom: 30px;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
    background: #f0f0f0;
}

.content {
    width: auto;
    height: 100%;
    padding: 10px;
    overflow-y: scroll;
    box-sizing: border-box;
}

.content-collapse {
    left: 65px;
}

.container {
    padding: 30px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.crumbs {
    margin: 10px 0;
}

.el-table th {
    background-color: #f5f7fa !important;
}

.pagination {
    margin: 20px 0;
    text-align: right;
}

.plugins-tips {
    padding: 20px 10px;
    margin-bottom: 20px;
}

.el-button+.el-tooltip {
    margin-left: 10px;
}

.el-table tr:hover {
    background: #f6faff;
}

.mgb20 {
    margin-bottom: 20px;
}

.move-enter-active,
.move-leave-active {
    transition: opacity .5s;
}

.move-enter,
.move-leave {
    opacity: 0;
}
 .header{
    background-color: #242f42;
}

.pure-button{
    background: #20a0ff;
}
.tags-li.active {
    border: 1px solid #409EFF;
    background-color: #409EFF;
}
</style>
