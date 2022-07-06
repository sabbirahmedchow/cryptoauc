<template>
  <Wallet />
  <Footer />
</template>
<script>
import Wallet from '../components/Wallet.vue';
import Footer from '../components/Footer.vue';

export default{
    name: 'WalletView',
    components:{
        Wallet,
        Footer
    }
}
</script>
