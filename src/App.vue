<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app right>
      <v-list :lines="true" nav class="sidebar">
        <v-list-item active-color="#757575" class="sidebar-title">
          <h2 class="text-center">تسک های شرکت ریرا</h2>
        </v-list-item>
        <v-list-item v-for="(item, i) in items" :key="i" :value="item" active-color="#757575" class="sidebar-item">
          <router-link :to="{ name: item.router }" class="sidebar-item-link">
            {{ item.text }}
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="app-bar">
      <!-- <v-toolbar-title>logo</v-toolbar-title> -->
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main class="main" dir="rtl">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: null,
    items: [
      { text: 'مقالات', router: 'CardView' },
      { text: 'ویدئو', router: 'VideoView' },
    ],
  }),
};
</script>

<style>
#inspire {
  font-family: YekanBakhFaNum;
}

.sidebar {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 1.5rem;
}

.sidebar-item {
  color: black;
}

.sidebar-title {
  flex: none;
  color: black;
  text-align: right;
  width: max-content;
  padding-bottom: 2rem !important;
}

.sidebar-item-link {
  text-decoration: none;
  letter-spacing: 1px;
  color: #767676 !important;
  width: 100% !important;
}

.router-link-exact-active {
  color: black !important;
}

.sidebar-item-text {
  font-size: 18px;
}


@media(min-width:768px) {
  .app-bar {
    display: none !important;
  }
}

.app-bar {
  display: flex;
  justify-content: end;
}

.main {
  background-color: #f8f8f8;
}
</style>