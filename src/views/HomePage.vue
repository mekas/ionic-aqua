<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Aqua Breeding</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div>
        <ion-grid>
          <ion-row>
            <ion-col class="ion-padding">
              <H1>Home</H1>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-card color="dark">
                <ion-card-header>
                  <ion-card-title>
                    Kolam
                  </ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <ion-text>
                    <h1><strong>10</strong></h1>
                  </ion-text>
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col>
              <ion-card color="dark">
                <ion-card-header>
                  <ion-card-title>
                    Kolam Aktif
                  </ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <ion-text>
                    <h1><strong>8</strong></h1>
                  </ion-text>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-card color="dark">
                <ion-card-header>
                  <ion-card-title>
                    Ikan Hidup
                  </ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <ion-text>
                    <h1><strong>182</strong></h1>
                    <h2>ekor</h2>
                  </ion-text>
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col>
              <ion-card color="dark">
                <ion-card-header>
                  <ion-card-title>
                    Ikan Mati
                  </ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <h1><strong>89</strong></h1>
                  <h2>ekor</h2>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-card color="dark">
                <ion-card-header>
                  <ion-card-title>
                    Panen 2022
                  </ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <ion-text>
                    <h1><strong>109</strong></h1>
                    <h2>Kg</h2>
                  </ion-text>
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col>
              <ion-card color="dark">
                <ion-card-header>
                  <ion-card-title>
                    Total Pakan
                  </ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <h1><strong>223</strong></h1>
                  <h2>Kg</h2>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col class="ion-padding">
              <H1>Total Berat Ikan</H1>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <swiper :slides-per-view="2" :loop="true">
                <swiper-slide>
                  <ion-card color="dark">
                    <ion-img src="img/lele.png"></ion-img>
                    <ion-card-header>
                      <ion-card-title>
                        Lele
                      </ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                      <ion-text color="primary">
                        <h2>200 kg</h2>
                      </ion-text>
                    </ion-card-content>
                  </ion-card>
                </swiper-slide>
                <swiper-slide>
                  <ion-card color="dark">
                    <ion-img src="img/nila.png"></ion-img>
                    <ion-card-header>
                      <ion-card-title>
                        Nila Merah
                      </ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                      <ion-text color="primary">
                        <h2>200 kg</h2>
                      </ion-text>
                    </ion-card-content>
                  </ion-card>
                </swiper-slide>
              </swiper>

            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
      <!--
        <strong>Ready to create an app?</strong> 
          <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
        -->

    </ion-content>

    <ion-footer collapse="fade">
      <ion-toolbar>
        <ion-title>
          Home
        </ion-title>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonicSlides, IonImg } from '@ionic/vue';
import { defineComponent } from 'vue';
import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';


export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonImg,
    Swiper, 
    SwiperSlide
  },
  setup() {
    // Optional parameters to pass to the swiper instance. See https://swiperjs.com/swiper-api for valid options.
    const slideOpts = {
      initialSlide: 0,
      speed: 400
    };
    return { 
      slideOpts,
      modules: [Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides],
     }
  },
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

h1,
h2 {
  display: inline-block;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
