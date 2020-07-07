<template>
  <div>

  <div>
    <template v-if="!item.children || item.children.length == 0">
        <el-menu-item :index="item.path" >
          <i class="el-icon-menu"></i>
          {{item.title}}
        </el-menu-item>
    </template>

    <el-submenu v-else :index="item.title">
      <template slot="title" >
        <i class="el-icon-menu"></i>
        {{item.title}}
      </template>

      <template v-for="child in item.children">
        <sidebar-item
          v-if="child.children&&child.children.length>0"
          :item="child"
          :key="child.path"/>
        <el-menu-item v-else :key="child.path" :index="child.path">
          <i class="el-icon-location"></i>
          {{child.title}}
        </el-menu-item>
      </template>
    </el-submenu>
  </div>
  </div>
</template>

<script>

export default {
  props: ['item']
}
</script>
