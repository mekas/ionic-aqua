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
              <ion-input v-model="name" placeholder="Kolam 1" :autofocus="true">
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
              <ion-input v-model="location" placeholder="Blok A">
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
              <ion-select v-model="material" placeholder="Beton">
                <ion-select-option v-for="option in material_options" :key="option.key">{{option.text}}</ion-select-option>
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
              <ion-select v-model="shape" placeholder="Bundar">
                <ion-select-option v-for="option in shape_options" :key="option.key">{{option.text}}</ion-select-option>              </ion-select>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-button @click="save" color="success">Daftar</ion-button>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              {{name}}
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
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonInput, IonSelect, IonButton, 
  IonSelectOption, IonLabel
}
  from '@ionic/vue';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PondRegistration',
  components: {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonInput, IonSelect, 
    IonLabel, IonButton, IonSelectOption
  },
  data() {
    return {
      name: 'eka',
      location: '',
      material: '',
      material_options: [
        { text: 'Tanah', key: 1 },
        { text: 'Beton', key: 2 },
        { text: 'Bundar', key: 3 }
      ], 
      shape: '',
      shape_options: [
        { text: 'Kotak', key: 1}, 
        { text: 'Bundar', key: 2}
      ]
    }
  },
  methods: {
    save(ev : Event){
      console.log(`Hello ${this.name}!`)
    }
  }
});
</script>
  
<style scoped>
ion-button {
  width: 100%;
  padding-right: 8px;
}

ion-card {
  --ion-grid-column-padding: 4px;
  margin: 0 !important;
  display: flex;
  flex-direction: column;
  width: 100% !important;
}

.top {
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
  