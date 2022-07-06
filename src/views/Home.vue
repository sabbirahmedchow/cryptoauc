<template>
  <bannerHeader />
  <boxCategory />
  <ModalList />
  <NFTList />
  <AuthorList />
  <HowWork />
  <Footer />

</template>

<script>
import bannerHeader from '../components/bannerHeader.vue';
import boxCategory from '../components/boxCategory.vue';
import NFTList from '../components/NFTList.vue';
import AuthorList from '../components/AuthorList.vue';
import ModalList from '../components/ModalList.vue';
import HowWork from '../components/HowWork.vue';
import Footer from '../components/Footer.vue';

export default {
    name: 'Home',
    components: {
        bannerHeader,
        boxCategory,
        NFTList,
        AuthorList,
        ModalList,
        HowWork,
        Footer
    }
}

</script>