<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <a-menu
      v-model:selectedKeys="selectedKeys2"
      v-model:openKeys="openKeys"
      mode="inline"
      theme="dark"
    >
      <a-menu-item key="sub1">
        <home-filled />
        <span> Home</span>
        <router-link to="/" />
      </a-menu-item>

      <a-sub-menu key="sub2">
        <template #title>
          <span>
            <flag-filled />
            <span>Goals</span>
          </span>
        </template>
        <a-menu-item key="5">
          <span>My Goals</span>
          <router-link to="/goals/my" />
        </a-menu-item>
        <a-menu-item key="6">
          <span>Company Goals</span>
          <router-link to="/goals/allcompany" />
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import { HomeFilled, FlagFilled } from "@ant-design/icons-vue";
import { ref } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    HomeFilled,
    FlagFilled,
  },
  setup() {
    return {
      selectedKeys1: ref(["2"]),
      selectedKeys2: ref(["1"]),
      collapsed: ref(false),
      openKeys: ref(["sub1"]),
    };
  },
});
</script>

<style></style>
