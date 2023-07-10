<script setup>
import routes from "src/router/routes";
import { computed, onMounted } from "vue";

const tabs = computed(() => {
  // const layout = routes
  //   .filter((item) => {
  //     return item.path === "/auth";
  //   })
  // .map((item) => {
  //   return item.children;
  // });

  const layout = routes.filter((item) => {
    return item.path === "/auth";
  });

  const children = layout[0].children;

  return children;
});

onMounted(() => {
  console.log(tabs.value);
});
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://dohcsmc.site/img/logox48.png" />
          </q-avatar>
          CSMC TELECONSULT
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab
          v-for="tab in tabs"
          :key="tab.path"
          :to="'/auth/' + tab.path"
          :label="tab.name"
        />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
