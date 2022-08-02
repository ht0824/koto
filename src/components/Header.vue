<script setup lang="ts">
import SunDark from './SunDark.vue'
const router = useRouter()
const user = reactive({
  name: '',
})

watch(() => user.name, (newval, oldval) => [
  user.name = newval,
])
onBeforeMount(() => {
})
onMounted(() => {
  user.name = sessionStorage.getItem('user') || ''
})
const gohome = () => {
  router.push('/')
}
const goLogin = () => {
  router.push('/login')
}
const logout = () => {
  user.name = ''
  sessionStorage.setItem('user', '')
}
</script>

<template>
  <div display="flex" justify-between>
    <div class="cursor-pointer" @click="gohome">
      <span>TuT</span>
    </div>
    <div class="grid gap-4 grid-auto-flow-col">
      <router-link to="/hi/blog" title="Blog">
        <span class="lt-md:hidden">Blog</span>
        <div i-carbon:license md:hidden />
      </router-link>
      <router-link to="/hi/game" title="Game">
        <span class="lt-md:hidden">Game</span>
        <div i-carbon:game-console md:hidden />
      </router-link>
      <router-link v-if="user.name === '533'" to="/hi/photo" title="Photo">
        <span class="lt-md:hidden">Photo</span>
        <div i-carbon:camera md:hidden />
      </router-link>
      <router-link v-if="user.name === '533'" to="/hi/heart" title="Heart">
        <span class="lt-md:hidden">Heart</span>
        <div i-carbon:favorite md:hidden />
      </router-link>
      <SunDark />
      <div v-show="!user.name" class="cursor-pointer" @click="goLogin">
        Login
      </div>
      <div v-show="user.name" class="cursor-pointer" @click="logout">
        {{ user.name }}
      </div>
    </div>
  </div>
</template>

