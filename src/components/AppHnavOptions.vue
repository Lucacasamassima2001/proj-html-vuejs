<script>
export default {
    props:{
        opname:String,
    }
}

</script>





<template>
        <ul class="options">
            <li>{{ opname }} </li>
        </ul>
</template>



<style lang="scss" scoped>
@use '../assets/style/Partials/variables.scss' as *;
ul{
    margin-left: 1em;
    @include list;
    color: $brand-base-color;
    
    li:hover{
        color: $brand-primary-orange;
        cursor: pointer;
    }

}

</style>