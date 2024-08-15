<script>
import EventCalendar from '@/components/EventCalendar.vue'

export default {
      name: "App",
      components: {
        EventCalendar
      },
      data: () => ({

      })
    };
</script>

<template>
  <v-app>
    <v-content>
      <EventCalendar />
    </v-content>
  </v-app>
</template>
