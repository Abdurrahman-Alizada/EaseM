<template>
    <div>
    <div>
        <h2>{{title}}</h2>
    <p class="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate quos ea dolores impedit. Omnis eveniet, sed voluptatibus velit molestiae ad fuga aliquid debitis aliquam tempore voluptas alias eius, animi voluptatem.</p>
    </div>
    </div>
</template>

<script>
export default {
  props :{
      title :{
          type : String,
          require : true,
          default : 'defalu name'
      }
  }   
}
</script>