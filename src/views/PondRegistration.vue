<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Aqua Breeding</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Registrasi Kolam</ion-title>
        </ion-toolbar>
      </ion-header>

      <div>
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-label>Nama Kolam</ion-label>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-input placeholder="Kolam 1">
              </ion-input>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-label>lokasi Kolam</ion-label>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-input placeholder="Blok A">
              </ion-input>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-label>Material Kolam</ion-label>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-select placeholder="Tanah">
                <ion-select-option value="tanah">Tanah</ion-select-option>
                <ion-select-option value="beton">Beton</ion-select-option>
                <ion-select-option value="bundar">Bundar</ion-select-option>
              </ion-select>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-label>Bentuk Kolam</ion-label>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-select placeholder="Kotak">
                <ion-select-option value="kotak">Kotak</ion-select-option>
                <ion-select-option value="bundar">Bundar</ion-select-option>
              </ion-select>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-button color="success" class="top" expand="block">Daftar</ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>


        <!--
          <strong>Ready to create an app?</strong> 
            <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
          -->
      </div>
    </ion-content>


  </ion-page>
</template>
  
<script lang="ts">
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol
}
  from '@ionic/vue';

import {
  add
} from 'ionicons/icons'

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PondRegistration',
  components: {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol
  },
  setup() {
    return {
      add
    }
  }
});
</script>
  
<style scoped>
ion-button {
  width: 100%;
  padding-right: 16px;
}

ion-card {
  --ion-grid-column-padding: 4px;
  margin: 0 !important;
  display: flex;
  flex-direction: column;
  width: 100% !important;
}

.top {
  position: absolute;
  top: 0px
}

.separator {
  border-bottom: #8c8c8c;
}

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
  