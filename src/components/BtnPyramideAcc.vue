<template>
    <router-link :to="'/'" :style="{ width: largeur, letterSpacing: espacement }"
        class="btn text-6xl text-center flex items-center justify-center" style="
        width: 150px;
        height: 120px;
        position: absolute;
        align-self: flex-start;
        justify-self: start;
        z-index: 100;
        margin-top: -2rem;
        margin-left: -1.8rem;">
    </router-link>

</template>


<script>
export default {
    name: 'BtnPyramideAcc'
}
</script>