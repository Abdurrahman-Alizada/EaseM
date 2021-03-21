<template>
<section >
    <Draggable :list="subCards" :animation="200" ghost-class="ghost-card" group="subCards">
  <div @click="showModal = true" v-for="subCard in subCards" :key="subCard.id" class="bg-white shadow rounded px-3 pt-3 pb-5 border border-white">
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
  </div>
   <!-- modal -->
    <div>
     <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-3xl">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 class="text-3xl font-semibold">
              Modal Title
            </h3>
            <button 
            class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" 
              @click="showModal = false">
              <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <!--body-->
          <div class="p-6 container">
          <ModalBody />
          </div>
          <!--footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
            <button 
            class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease"
              @click="showModal = false">
              Close
            </button>
            <button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease" v-on:click="toggleModal()">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>

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
