<template>
    <div class="min-h-screen font-sans bg-gray-600">
        <BoardNav />
        <SubNav />          
        <Card />
    </div>
</template>

<script>
import BoardNav from '@/components/Board/BoardNavbar'
import SubNav from '@/components/Board/SubNavbar'
import Card from '@/components/Board/index'
export default {
    components:{
        BoardNav,
        SubNav,
        Card,
    },    
}
</script>

