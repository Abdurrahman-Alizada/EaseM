<template>
<section >
    <Draggable :list="subCards" :animation="200" ghost-class="ghost-card" group="subCards">
  <div  v-for="subCard in subCards" :key="subCard.id" class="bg-white mt-3 shadow rounded px-3 pt-3 pb-5 border border-white">
  <span @click="showModal = true">
    <div  class="flex justify-between">
      <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">{{subCard.title}}</p>
      <img
        class="w-6 h-6 rounded-full ml-3"
        src="https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"
        alt="Avatar"
      >
    </div>
    <div class="flex mt-4 justify-between items-center">
      <span class="text-sm text-gray-600">{{subCard.date}}</span>
      <badge v-if="subCard.type" :color="badgeColor">{{subCard.type}}</badge>
    </div>
</span>
  <h4> {{subCard.id}}</h4>
   <!-- modal -->
  <transition name="fade">

 <div v-if="showModal" class="inset-8 md:max-w-3xl w-auto fixed mx-auto md:rounded bg-gray-200 shadow-xl">
   <div class="mx-auto max-w-3xl">
    <h2 class="font-semibold rounded rounded-b-none bg-white text-2xl flex items-center p-3">
     {{subCard.type}}
      <button @click="showModal = !showModal"  class="block ml-auto flex items-center bg-red-700 hover:bg-red-600 text-white font-semibold p-1 rounded text-red-300 hover:text-white">
<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="currentcolor">
  <path d="M4 8 L8 4 L16 12 L24 4 L28 8 L20 16 L28 24 L24 28 L16 20 L8 28 L4 24 L12 16 z"></path>
</svg>
      </button>
    </h2>
    <div class="p-5">

    <ModalBody :title='subCard.title'/>
    </div>

    <footer class="p-3 rounded rounded-t-none flex">
      <div class="flex items-center ml-auto">
      <a href="#" class="px-3 py-1 text-gray-600 hover:text-gray-800 hover:bg-gray-300 rounded mr-2">Run for the hills</a>
      <button class="px-5 py-1 flex items-center bg-green-700 hover:bg-green-600 text-white font-semibold p-1 rounded">Save</button>
       </div>
    </footer>
    
    <code></code>
   </div>
  </div>
   </transition>
</div>
      <!-- end modal -->   
    </Draggable>
     <a @click="addCard" v-if="!addAnotherCard" class="flex py-2 mt-2 cursor-pointer hover:bg-gray-400 text-grey-dark">
  <svg class="h-5 w-5 mx-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>   
      Add a card...
    </a>
         <div v-if="addAnotherCard" class="">
      <input v-model="newCard" placeholder="Enter a title for this card" class="text-grey-darkest flex-1 p-2 w-full my-1 bg-white focus:outline-none" />
       <div class="flex">
        <button @click="add" class="bg-green-600 text-white active:bg-green-800 font-bold uppercase text-xs px-4 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 my-1" type="button">
          Add
        </button>
        <svg @click="cancel" class="h-10 w-10 cursor-pointer text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
        </svg>

       <svg class="h-6 w-6 self-center ml-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
       </div> 
      </div> 
   
</section>
</template>
<script>

import Draggable from "vuedraggable";
import Modal from './Modal'
import ModalBody from './ModalBody'
import Badge from "./Badge.vue";
export default {
  components: {
    Badge,Modal,Draggable,ModalBody
  },
 data(){
   return{
         newCard : '',
        addAnotherCard : false,
       showModal: false,
   }
 },
  methods :{
   addCard(){
      this.addAnotherCard = true
    },
    cancel(){
      this.addAnotherCard = false
    },
     add(){
       console.log(this.newCard)
       this.$store.commit('board/addCard' , this.newCard)
       this.addAnotherCard = false
       this.newCard = ''
    }
  },

props: {
    subCards: {
      type: Array,
      default: () => ([])
    }
  },
  computed: {
    badgeColor() {
      const mappings = {
        Design: "purple",
        "Feature Request": "teal",
        Backend: "blue",
        QA: "green",
        default: "teal"
      };
      return mappings[this.subCards.type] || mappings.default;
    }
  }
};
</script>
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.bgBlur {
  background-color: rgba(0,0,33,0.5);
}
</style>