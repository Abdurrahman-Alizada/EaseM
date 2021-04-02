<template>
       <div class="flex p-2 bg-gray-600 items-center">
                <div class="hidden md:flex justify-start">
                    <button @click="showM = !showM" class="bg-gray-900 hover:bg-gray-700 text-white font-semibold px-6 py-2 rounded" >Modal</button>
                    <input type="text" placeholder="Search" class="rounded-full bg-indigo-100 p-2">
                </div>
                <div class="mx-0 md:mx-auto">
                    <h1 class="text-white text-xl flex items-center font-sans italic">
                        <svg class="fill-current h-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM21 36c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v24zm19-12c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v12z"/></svg>
                        EaseM
                    </h1>
                </div>
                <div class="flex items-center  ml-auto">
                    <button class="bg-gray-400 rounded h-8 w-8 font-bold mr-2">+</button>
                    <button class="bg-gray-400 rounded h-8 w-8 font-bold mr-2">i</button>
                   
                    <img src="https://i.imgur.com/OZaT7jl.png" class="rounded-full" />
                </div>

         <!-- <TModal :showM='true' /> -->
              
      </div>
</template>



<script>
// import TModal from '../Board/testModal'
// import Modal from './Modal.vue'

export default {
  data(){
  return{
      showM : false
  }
  },

  methods :{
      showModal(){
          this.showM = true
      }
  },
components : {
    //   TModal
  },  
 }
</script>
