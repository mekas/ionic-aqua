<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Page 2</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-card color="light">
                <ion-card-header>
                  <ion-card-subtitle>
                    Kolam
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                  <ion-text>
                    <h1>10</h1>
                  </ion-text>
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col>2</ion-col>
          </ion-row>
        </ion-grid>
        <!--
        <strong>Ready to create an app?</strong> 
          <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
        -->
        </div>
    </ion-content>
z
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
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PondsPage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  }
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
