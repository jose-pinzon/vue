<template>
       <ul class="list-group mt-3">
            <li class="list-group-item list-group-item-action">
                <h5>Nombre del lugar</h5>
                <p>Lorem ipsum dolor sit amet .</p>
                <div align="right">
                    <button class="btn btn-outline-primary btn-sm">
                        Direcciones
                    </button>
                </div>
            </li>
            <li class="list-group-item list-group-item-action">
                <h5>Nombre del lugar</h5>
                <p>Lorem ipsum dolor sit amet .</p>
                <div align="right">
                    <button class="btn btn-outline-primary btn-sm">
                        Direcciones
                    </button>
                </div>
            </li>
        </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
name: 'Name',
setup(){

    return {
    
    
    }
}
});
</script>
<style scoped>
    li{
        cursor: pointer;
    }

    h5{
        font-size: 15px !important;
    }
    p{
        font-size: 10px;
    }
</style>