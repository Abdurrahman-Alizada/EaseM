<template>
  <div id="app h-full">
    <div class="flex mx-5">
      <div class="min-h-screen flex overflow-x-scroll py-5">
       <Draggable :list="cards" :animation="200" ghost-class="ghost-card" class="flex items-start" group="cards">
        <div v-for="card in cards" :key="card.title" class="bg-gray-100 cursor-move rounded-lg px-3 py-1 column-width rounded mr-4">
         <div class="flex justify-between py-1">
          <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm cursor-pointer">{{card.title}}</p>
            <svg class="h-4 fill-current text-grey-dark cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z"/></svg>
         </div>
      <Draggable :list="card.subCards" :animation="200" ghost-class="ghost-card" group="subCards">
            <!-- Each element from here will be draggable and animated. Note :key is very important here to be unique both for draggable and animations to be smooth & consistent. -->
                        <TaskCard :subCards= card.subCards class="mt-3 cursor-move" ></TaskCard> 
            <!-- </transition-group> -->
          </Draggable>
        </div>
       </Draggable>
     

        <button class="cursor-pointer mx-5 px-2 py-3 bg-gray-300 hover:bg-gray-400 button1 h-12 text-black rounded inline-flex items-center">
      <svg class="h-6 mx-4 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
      <span @click="addList">Add another list</span>
        </button> 
      </div>
    </div>
  </div>
</template>

<script>
import Draggable from "vuedraggable";
import TaskCard from "./TaskCard";
export default {
  name: "App",
  components: {
    TaskCard,
    Draggable
  },

  data(){
    return{
         newCard : '',
        addAnotherCard : false
    }
  },

  methods :{
   addList(){
   },
  },
  computed :{
    cards(){
      return this.$store.state.board.cards
    }
  },
};
</script>

<style scoped>
.column-width {
  min-width: 320px;
  width: 320px;
}
/* Unfortunately @apply cannot be setup in codesandbox, 
but you'd use "@apply border opacity-50 border-blue-500 bg-gray-200" here */
.ghost-card {
  opacity: 0.5;
  background: #F7FAFC;
  border: 1px solid #4299e1;
}
.button1{
  min-width: 20em;

 }
</style>
