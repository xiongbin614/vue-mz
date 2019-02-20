<template>
    <div>
        <router-view></router-view>
        <MzFooter></MzFooter>
    </div>
</template>

<script>
import MzFooter from '../components/MzFooter/MzFooter.vue'
export default {
  components: {
    MzFooter
  }
}
</script>
