<template>
    <div class="navbar">
        <nav>
            <img src="@/assets/ninja.png" alt="logo">
            <h1><router-link :to="{ name: 'home' }">Muso Ninjas</router-link></h1>
            <div class="links">
                <div v-if="user">
                    <button @click="handleClick">Logout</button>
                </div> 
                <div v-else>   
                    <router-link class="btn" :to="{ name: 'Signup' }">Sign up</router-link>
                    <router-link class="btn" :to="{ name: 'Login' }">Login</router-link>
                </div>    
            </div>
        </nav>
    </div>
</template>

<script>
import useLogout from '../composables/useLogout'
import { useRouter } from 'vue-router'
import getUser from '@/composables/getUser'

export default {
    setup() {
        const { logout, error } = useLogout()
        const router = useRouter()
        const { user } = getUser()

        const handleClick= async () => {
            await logout()
            if(!error.value) {
                console.log('User logged out !')
                router.push({ name: 'Login' })
            }
        }
        return { handleClick, error, user }
    }
}
</script>

<style scoped>
    .navbar {
        padding: 16px 10px;
        margin-bottom: 60px;
        background: white;
    }
    nav {
        display: flex;
        align-items: center;
        max-width: 100%;
        margin: 0 auto;
    }
    nav h1 {
        margin-left: 20px;
    }
    nav .links {
        margin-left: auto;
    }
    nav .links a, button {
        margin-left: 16px;
        font-size: 14px;
    }
    nav img {
        max-width: 60px;
    }
</style>