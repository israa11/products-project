<template>
    <div class="container">
        <h2 class="text-center pt-3">Our Products</h2>
        <hr>
        <form @keyup="filteredProduct">
            <input type="text" class="form-control w-50 mx-auto"  v-model="text"  placeholder="search..." />
          </form>
   <div class="text-center mt-3 mb-3 " >
    <router-link  v-for="company in allCompany" :key="company" :to="{name: 'companyProduct' , params:{company:company} }"><button  
    type="button" class="btn fw-light  me-3">{{company}}</button></router-link>
   </div> 
    <div class="row ">
    <div  v-for="product in products" :key="product.title" class="col mt-3  "  >
            <img :src="require(`@/assets/${product.image}`)"  alt="" style="width: 300px; height: 150px;">
            <div class="mt-2">
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
    allCompany:[],
    text: ""
}
    },
    mounted(){
this.getallcompony()
    },
    methods:{
        getallcompony(){
this.allCompany = ["All", ... new Set(this.products.map((el)=> el.company))];
console.log(this.allCompany)
        },
        filteredProduct(){
    this.products = this.products.filter((product) => product.title.includes(this.text))
            
        },
       
    }
}
</script>