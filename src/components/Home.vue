<template>
  <Header />
  <a-layout style="min-height: 100vh">
    <Sidebar />
    <a-layout> <Content /> </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Content from "./Content.vue";
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";

export default defineComponent({
  components: {
    Header,
    Sidebar,
    Content,
  },
});
</script>
<style>
/* #components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
} */

/* .ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
} */

/* .site-layout-background {
  background: #fff;
} */
/* [data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
} */
</style>
