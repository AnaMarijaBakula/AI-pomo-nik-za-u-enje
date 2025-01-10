<template>
  <v-app>
    <NavBar />
    <v-main>
      <HomeView />
    </v-main>
  </v-app>
</template>

<script>
import HomeView from "@/views/HomeView.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: 'App',
  components: {
    NavBar,
    HomeView,
  },
  data: () => ({
    //
  }),
}
</script>


