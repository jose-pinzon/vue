
<script lang="ts" src="./search-bar.ts"></script>
<template>
    <div class="search-container">
        <input type="text" class="form-control" placeholder="Buscar lugares" v-model="searchTerm">
        <Searchresult/>
    </div>
</template>

<style scoped>
    .search-container{
        position: fixed;
        top: 30px;
        left: 30px;
        background-color: white;
        z-index: 999;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
        width: 250px;  
        border-radius:5px !important ;
        overflow: hidden;
        padding: 5px;
    }
</style>