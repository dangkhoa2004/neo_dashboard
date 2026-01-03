<template>
  <div class="relative min-h-screen bg-[#FDFBF7] font-sans text-black selection:bg-[#00C16A] selection:text-white">
    
    <div class="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-[0.04]" style="background-image: url('https://www.transparenttextures.com/patterns/noise-lines.png');"></div>

    <div class="fixed top-0 left-0 w-full z-50 flex flex-col shadow-md">
      <HomeMarquee />
      
      <HomeNavbar 
        class="!static"
        :cart-count="store.cartCount" 
        @toggle-cart="toggleCart" 
      />
    </div>

    <div class="relative z-0 pt-[128px]">
      <HomeHero />
      <HomeTrustedBy />
      <HomeFeatures />

      <HomeCourses 
        :courses="courses"
        :categories="categories"
        :is-loading="isLoading"
        
        v-model:category="selectedCategory"
        v-model:search="searchQuery"
        
        @add-to-cart="handleAddToCart"
      />

      <HomePricing :plans="pricingPlans" />
      <HomeFaq :faqs="faqs" :active-index="activeFaqIndex" @toggle="toggleFaq" />
      <HomeFooter />
    </div>

    <HomeCart 
      :is-open="isCartOpen"
      :cart-items="cart"
      :total-price="totalPrice"
      @close="toggleCart"
      @remove="handleRemoveFromCart"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue';
import { useHomePagesStore } from "../../store/modules/homepage"; 
import { storeToRefs } from 'pinia'; 
import {
  HomeMarquee, HomeNavbar, HomeHero, HomeTrustedBy,
  HomeFeatures, HomeCourses, HomePricing, HomeFaq,
  HomeFooter, HomeCart
} from "../../components/home-components";

// STORE
const store = useHomePagesStore();
const { courses, cart, pricingPlans, faqs, selectedCategory, searchQuery, isLoading } = storeToRefs(store);

// LOCAL STATE
const isCartOpen = ref(false);
const activeFaqIndex = ref(null);
const categories = ['Tất cả', 'Frontend', 'Backend', 'UI/UX', 'DevOps'];

// COMPUTED
const totalPrice = computed(() => store.cartTotal);

// METHODS
const toggleCart = () => isCartOpen.value = !isCartOpen.value;
const toggleFaq = (index) => activeFaqIndex.value = activeFaqIndex.value === index ? null : index;
const handleAddToCart = (course) => {
  store.addToCart(course);
  isCartOpen.value = true;
};
const handleRemoveFromCart = (id) => store.removeFromCart(id);

// === ANIMATION LOGIC ===
const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  const hiddenElements = document.querySelectorAll('.reveal-on-scroll:not(.is-visible)');
  hiddenElements.forEach((el) => observer.observe(el));
};

watch(courses, async () => {
  await nextTick();
  observeElements();
}, { deep: true });

// LIFECYCLE
onMounted(async () => {
  await store.fetchAllHomeData();
  setTimeout(observeElements, 100);
});
</script>

<style>
/* Reset overflow body để tránh lỗi sticky/fixed cũ */
body {
  overflow-x: hidden;
}

/* Animations giữ nguyên */
@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
.animate-marquee { animation: marquee 20s linear infinite; }
.animate-marquee-slow { animation: marquee 40s linear infinite; }

.animate-spin-slow { animation: spin 10s linear infinite; }
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

.animate-float { animation: float 6s ease-in-out infinite; }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }

.animate-bounce-slow { animation: bounce 3s infinite; }
.text-stroke-black { -webkit-text-stroke: 2px black; color: transparent; }
.text-stroke-white { -webkit-text-stroke: 2px black; color: white; }

.reveal-on-scroll { opacity: 0; transition: all 0.8s cubic-bezier(0.5, 0, 0, 1); will-change: transform, opacity; }
.reveal-on-scroll.is-visible { opacity: 1; transform: translate(0, 0) scale(1); }

.slide-up { transform: translateY(60px); }
.slide-left { transform: translateX(60px); }
.slide-right { transform: translateX(-60px); }
.scale-up { transform: scale(0.8); }
.fade-in { opacity: 0; }
</style>