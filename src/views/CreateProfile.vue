<template>
    <CreateProfile />
    <HowWork />
    <Footer />
</template>

<script>    
import CreateProfile from '../components/CreateProfile.vue';
import HowWork from '../components/HowWork.vue';
import Footer from '../components/Footer.vue';

export default{
    name: 'CreateUserProfile',
    components: {
        CreateProfile,
        HowWork,
        Footer
    },
}
</script>