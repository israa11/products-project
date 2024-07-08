<template>
     <div class="container text-center mt-5">
        <div class="row">
    <div  v-for="product in products" :key="product.id" class="col mt-3"  >
            <img :src="require(`@/assets/${product.image}`)"  alt="" style="width: 300px; height: 150px;">
            <div class="mt-2 ">
              <h5 class="fw-light">{{product.title}}</h5>
              <p class="">{{product.price}}</p>
              
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
return{
    products: this.$store.state.products,
    company: this.$route.params.company
}
    },
    mounted(){
this.getcompanyProduct()
    },
    methods:{
        getcompanyProduct(){
            if(this.company == "All"){
                this.products = this.$store.state.products
            }else{
                this.products = this.products.filter((product)=> product.company == this.company)
                
            }
            
        }
    }
}
</script>