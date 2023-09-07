<template>
  <home-layout>
    <div :class="{'landing-page': true,'show-mobile-menu': showMobileMenu}">
      <div class="mobile-menu" @click="$event.stopPropagation()">
        <a @click="scrollTo('#home')" href="javascript:;" class="logo-mobile">
          <span></span>
        </a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a @click="scrollTo('#services')" href="javascript:;">Beranda</a>
          </li>
          <li class="nav-item">
            <a @click="scrollTo('#features')" href="javascript:;">Produk</a>
          </li>
          <li class="nav-item">
            <a @click="scrollTo('#features')" href="javascript:;">Toko Kami</a>
          </li>
          <li class="nav-item">
            <div class="separator"></div>
          </li>
          <li class="nav-item text-center">
            <a
              class="btn btn-outline-primary btn-sm mobile-menu-cta"
              target="_blank"
              :href="contactUrl"
            >CONTACT US</a>
          </li>
        </ul>
      </div>

      <div class="main-container">
        <div class="landing-page-nav bg-white">
          <headroom style="height:initial;">
            <nav>
              <div class="container d-flex align-items-center justify-content-start">
                <a class="navbar-logo pull-left" @click="scrollTo('#home')" href="javascript:;">
                  <span class="white"></span>
                  <span class="dark"></span>
                </a>
                <div class="w-100 d-flex align-items-center justify-content-start position-relative">
                  <ul class="navbar-nav d-none d-lg-flex flex-row justify-content-center w-100">
                    <li class="nav-item">
                      <a @click="scrollTo('#services')" class="text-dark" href="javascript:;">Beranda</a>
                    </li>
                    <li class="nav-item">
                      <a @click="scrollTo('#features')" class="text-dark" href="javascript:;">Produk</a>
                    </li>
                    <li class="nav-item">
                      <a @click="scrollTo('#features')" class="text-dark" href="javascript:;">Toko Kami</a>
                    </li>
                    <li class="nav-item">
                      <div class="separator"></div>
                    </li>
                  </ul>
                  <div class="">
                    <a
                      class="btn btn-primary text-white btn-sm mobile-menu-cta"
                      target="_blank"
                      :href="contactUrl"
                    >S</a>
                  </div>
                </div>
                <span
                  class="mobile-menu-button"
                  @click="showMobileMenu=!showMobileMenu; $event.stopPropagation()"
                >
                  <i class="simple-icon-menu"></i>
                </span>
              </div>
            </nav>
          </headroom>
        </div>

        <div class="content-container" id="home">
          <div class="section bg-theme-3" id="sectionHome">
            <div class="container">
              <div class="row home-row" id="homeRow">
                <div class="col-12 d-block d-md-none">
                   <a target="_blank">
                    <img
                      alt="mobile hero"
                      class="mobile-hero"
                      src="/assets/img/landing-page/home-hero-mobile.png"
                    />
                  </a>
                </div>

                <div class="col-12 col-xl-7 offset-xl-1 col-lg-7 col-md-6 d-none d-md-block">
                  <a href="#">
                    <img data-aos="zoom-in" data-aos-delay="250" alt="hero" src="/assets/img/landing-page/home-hero.png" style="height: 500px;" />
                  </a>
                </div>
                <div class="col-12 col-xl-4 col-lg-5 col-md-6">
                  <div class="text-right">
                    <div class="display-1 text-dark mb-2" data-aos="zoom-in">
                      {{ $t('landing-page.title.main') }}
                    </div>
                    <h3 class="mb-5 text-dark" data-aos="fade-down" data-aos-delay="100">                      
                      {{$t('landing-page.title.desc1')}}
                    </h3>
                    <a class="btn btn-outline-dark btn-xl mr-2 mb-2" data-aos="fade-down" data-aos-delay="150" @click="scrollTo('#services')">
                      Belanja Sekarang
                    </a>
                  </div>
                </div>
              </div>

              <div class="row">
                <a
                  class="btn btn-circle btn-outline-semi-light hero-circle-button"
                  @click="scrollTo('#features')"
                >
                  <i class="simple-icon-arrow-down"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="container" id="product">
              <div class="home-carousel text-center" data-aos="zoom-in">
                <h1 class="">Produk</h1>
                <glide-component :settings="slideSettings">
                  <div class="card rounded" v-for="(f,index) in slideItems" :key="`slide_${index}`" data-aos="zoom-in" :data-aos-delay="index * 100">
                    <div class="card-body text-center">
                      <div>
                        <i :class="f.icon+ ' large-icon'"></i>
                        <h5 class="mb-3 font-weight-semibold">{{f.title}}</h5>
                      </div>
                      <div>
                        <p class="detail-text">{{f.detail}}</p>
                      </div>
                    </div>
                  </div>
                </glide-component>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="container" id="features">

              <div v-for="(feature,i) in features" :key="`feature_${i}`">
                <div v-if="i%2==0" class="row feature-row">
                  <div class="col-12 col-md-6 col-lg-5 d-flex align-items-center">
                    <div class="feature-text-container">
                      <h2>{{feature.title}}</h2>
                      <p v-html="feature.detail"></p>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-lg-6 offset-lg-1 offset-md-0 position-relative">
                    <img
                      :alt="feature.title"
                      :src="feature.img"
                      class="feature-image-right feature-image-charts position-relative"
                    />
                  </div>
                </div>
                <div v-if="i%2==1" class="row feature-row">
                  <div class="col-12 col-md-6 col-lg-6 order-2 order-md-1">
                    <img
                      :alt="feature.title"
                      :src="feature.img"
                      class="feature-image-left feature-image-charts"
                    />
                  </div>
                  <div
                    class="col-12 col-md-6 offset-md-0 col-lg-5 offset-lg-1 d-flex align-items-center order-1 order-md-2"
                  >
                    <div class="feature-text-container">
                      <h2>{{feature.title}}</h2>
                      <p v-html="feature.detail"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section background background-no-bottom mb-0 pb-0">
            <div class="container">
              <div class="row">
                <div class="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Interested?</h1>
                  <p>Send message by WhatsApp to us if you interested and want to use our services.</p>
                </div>
                <div class="col-12 offset-0 col-lg-6 offset-lg-3 newsletter-input-container">
                  <div class="text-center mb-3">
                    <a class="btn btn-secondary btn-xl" target="_blank" :href="contactUrl"><b-icon icon="chat" class="mr-1"></b-icon> CONTACT NOW!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section footer mb-0" id="sectionFooter">
            <div class="container">
              <div class="row footer-row">
                <div class="col-12 text-right">
                  <a
                    class="btn btn-circle btn-outline-semi-light footer-circle-button"
                    @click="scrollTo('#home')"
                    href="javascript:;"
                  >
                    <i class="simple-icon-arrow-up"></i>
                  </a>
                </div>
                <div class="col-12 text-center footer-content">
                  <a @click="scrollTo('#home')" href="javascript:;">
                    <img class="footer-logo" alt="footer logo" src="/assets/logos/white-full.svg" />
                  </a>
                </div>
              </div>
            </div>
            <div class="container copyright pt-5 pb-5">
              <div class="row">
                <div class="col-12"></div>
                <div class="col-12 text-center">
                  <p class="mb-0">2022 © Haunan.dev</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </home-layout>
</template>

<script>
import { headroom } from "vue-headroom";
import VueScrollTo from "vue-scrollto";
import HomeLayout from "../../layouts/HomeLayout";
import GlideComponent from "../../components/Carousel/GlideComponent";
import { adminRoot, buyUrl } from "../../constants/config";
import {BIcon} from 'bootstrap-vue'

const slideItems = [
  {
    icon: "simple-icon-screen-desktop",
    title: "Landing Page Website",
    detail:
      "Build your dream website landing page!"
  },
  {
    icon: "iconsminds-optimization",
    title: "System Website",
    detail:
      "Simplify your work by creating the system you want!"
  },
  {
    icon: "iconsminds-business-man-woman",
    title: "Wedding Invitation Website",
    detail:
      "No need to print multiple sheets of invitation letters!"
  },
  {
    icon: "simple-icon-screen-smartphone",
    title: "Android App",
    detail:
      "Build your dream application!"
  },
  {
    icon: "iconsminds-apple-bite",
    title: "Ios App",
    detail:
      "Unavailable. Still researching... :)"
  },
];

const features = [
  {
    title: "Pleasant Design",
    img: "/assets/img/landing-page/features/pleasant-design.png",
    detail:
      "As a web developer we enjoy to work on something looks nice. It is not an absolute necessity but it really motivates us that final product will look good for user point of view. <br /><br />So we put a lot of work into colors, icons, composition and design harmony. Themed components and layouts with same design language. <br /><br />We kept user experience principles always at the heart of the design process."
  },
  {
    title: "Extra Responsive",
    img: "/assets/img/landing-page/features/extra-responsive.png",
    detail:
      "Xxs breakpoint is for smaller screens that has a resolution lower than 420px. Xs works between 576px and 420px. Xxl breakpoint is for larger screens that has a resolution higher than 1440px. Xl works between 1200px and 1440px.<br><br>With this approach we were able to create better experiences for smaller and larger screens."
  },
  {
    title: "Superfine Charts",
    img: "/assets/img/landing-page/features/superfine-charts.png",
    detail:
      "Using charts is a good way to visualize data but they often look ugly and break the rhythm of design. <br /><br />We concentrated on a single chart library and tried to create charts that look good with color, opacity, border and shadow. <br /><br />Used certain plugins and created some to make charts even more useful and beautiful."
  },
  {
    title: "Layouts for the Job",
    img: "/assets/img/landing-page/features/layouts-for-the-job.png",
    detail:
      "Layouts are the real thing, they need to be accurate and right for the job. They should be functional for both user and developer. <br /><br />We created lots of different layouts for different jobs.<br /><br />Listing pages with view mode changing capabilities, shift select and select all functionality, application layouts with an additional menu, authentication and error layouts which has a different design than the other pages were our main focus. We also created details page with tabs that can hold many components."
  },
  {
    title: "Smart Menu",
    img: "/assets/img/landing-page/features/smart-menu.png",
    detail:
      "Instead of good old single panel menus with accordion structure that looks over complicated, we created 2 panels and categorized pages accordingly.<br><br>The default menu auto hides sub panel when resolution is under some breakpoint to open some space. You may also hide menu completely or use only main panel open only."
  }
];

const layouts = [
  {
    title: "Menu Default",
    img: "/assets/img/landing-page/layouts/menu-default.jpg"
  },
  {
    title: "Menu Subhidden",
    img: "/assets/img/landing-page/layouts/menu-subhidden.jpg"
  },
  {
    title: "Menu Hidden",
    img: "/assets/img/landing-page/layouts/menu-hidden.jpg"
  },
  {
    title: "Image List",
    img: "/assets/img/landing-page/layouts/image-list.jpg"
  },
  {
    title: "Thumb List",
    img: "/assets/img/landing-page/layouts/thumb-list.jpg"
  },
  { title: "Data List", img: "/assets/img/landing-page/layouts/data-list.jpg" },
  { title: "Details", img: "/assets/img/landing-page/layouts/details.jpg" },
  {
    title: "Authentication",
    img: "/assets/img/landing-page/layouts/authentication.jpg"
  },
  {
    title: "Search Results",
    img: "/assets/img/landing-page/layouts/search-results.jpg"
  },
  {
    title: "Single Page Application",
    img: "/assets/img/landing-page/layouts/spa.jpg"
  },
  {
    title: "Data List App Menu Hidden",
    img: "/assets/img/landing-page/layouts/data-list-app-menu-hidden.jpg"
  },
  { title: "Tabs", img: "/assets/img/landing-page/layouts/tabs.jpg" }
];

const applications = [
  {
    title: "Survey",
    path: `${adminRoot}/#survey`,
    img: "/assets/img/landing-page/applications/survey.jpg"
  },
  {
    title: "Chat",
    path: `${adminRoot}/#chat`,
    img: "/assets/img/landing-page/applications/chat.jpg"
  },
  {
    title: "Todo",
    path: `${adminRoot}/#todo`,
    img: "/assets/img/landing-page/applications/todo.jpg"
  }
];

const themes = [
  { title: "Navy Blue", class: "bluenavy" },
  { title: "Olympic Blue", class: "blueolympic" },
  { title: "Yale Blue", class: "blueyale" },
  { title: "Moss Green", class: "greenmoss" },
  { title: "Lime Green", class: "greenlime" },
  { title: "Carrot Orange", class: "carrotorange" },
  { title: "Ruby Red", class: "rubyred" },
  { title: "Monster Purple", class: "monsterpurple" },
  { title: "Steel Grey", class: "steelgrey" },
  { title: "Granola Yellow", class: "granolayellow" }
];
const scrollOptions = {
  container: "body",
  easing: "ease-in-out",
  offset: -120,
  force: true,
  x: false,
  y: true
};

export default {
  components: {
    "home-layout": HomeLayout,
    "glide-component": GlideComponent,
    headroom: headroom,
    BIcon
  },
  data() {
    return {
      showMobileMenu: false,
      adminRoot,
      buyUrl,
      contactUrl: 'https://api.whatsapp.com/send/?phone=6282223318719',
      slideSettings: {
        type: "slider",
        bound: true,
        gap: 30,
        perView: 4,
        hideNav: true,
        peek: { before: 10, after: 10 },
        breakpoints: {
          "600": { perView: 1 },
          "992": { perView: 2 },
          "1200": { perView: 3 }
        }
      },
      slideItems,
      features,
      layouts,
      applications,
      themes
    };
  },
  methods: {
    onWindowResize() {
      const homeRect = document
        .getElementById("homeRow")
        .getBoundingClientRect();
      const homeSection = document.getElementById("sectionHome");
      homeSection.style.backgroundPositionX = homeRect.x - 580 + "px";

      const footerSection = document.getElementById("sectionFooter");
      footerSection.style.backgroundPositionX =
        event.target.innerWidth - homeRect.x - 2000 + "px";

      if (event.target.innerWidth >= 992) {
        this.showMobileMenu = false;
      }
    },
    onWindowScroll() {
      this.showMobileMenu = false;
    },
    onWindowClick() {
      this.showMobileMenu = false;
    },

    scrollTo(target) {
      VueScrollTo.scrollTo(target, 500, scrollOptions);
    },
    sendMessage() {
      window.open(
        `https://api.whatsapp.com/send/?phone=6282223318719`, '_blank'
      )
    }
  },
  mounted() {
    document.body.classList.add("no-footer");
    window.addEventListener("scroll", this.onWindowScroll);
    window.addEventListener("resize", this.onWindowResize);
    window.addEventListener("click", this.onWindowClick);
  },
  beforeDestroy() {
    document.body.classList.remove("no-footer");
    window.removeEventListener("scroll", this.onWindowScroll);
    window.removeEventListener("resize", this.onWindowResize);
    window.removeEventListener("click", this.onWindowClick);
  },
};
</script>
