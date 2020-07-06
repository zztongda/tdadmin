<template>
  <div id="app">
    <div id="nav">
      <router-link to="/index">Home</router-link> |
      <router-link to="/index/about">About</router-link> |
      <router-link to="/index/table">数据表格</router-link> |
      <router-link to="/index/axios">axios</router-link> |
      <router-link to="/index/Uploads">文件上传</router-link> |
      <router-link to="/index/test">测试页</router-link> |
      <router-link to="/menu">menu</router-link> |
      <router-link to="/upload">upload</router-link> |
      <router-link to="/index/form">form表单</router-link> |
      <router-link to="/index/kjfuwenben">富文本编辑器</router-link> |
    </div>
    <router-view/>

  </div>
</template>
